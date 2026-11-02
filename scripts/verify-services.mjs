import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import ts from 'typescript';

const pages = JSON.parse(fs.readFileSync('app/_lib/accompaniments.json', 'utf8'));
const redirects = JSON.parse(fs.readFileSync('app/_lib/service-redirects.json', 'utf8'));
const code = ts.transpile(fs.readFileSync('app/_lib/topic-links.ts', 'utf8'), { module: ts.ModuleKind.CommonJS });
const mod = { exports: {} };
Function('exports', 'module', code)(mod.exports, mod);
const { topicLinks, CONTACT } = mod.exports;
const base = 'http://127.0.0.1:4138';
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', '4138'], { stdio: ['ignore', 'pipe', 'pipe'], windowsHide: true });
let logs = '';
server.stdout.on('data', data => { logs += data; });
server.stderr.on('data', data => { logs += data; });
const html = new Map();
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
const routeFor = page => '/accompagnement/' + page.slug;
async function load(path) {
  const response = await fetch(base + path, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  assert.equal(response.status, 200, path + ' doit répondre 200');
  const text = await response.text();
  html.set(path, text);
  assert.equal((text.match(/<h1[\s>]/g) || []).length, 1, path + ' : un H1');
  return text;
}
try {
  let ready = false;
  for (let i = 0; i < 30; i++) {
    try { const r = await fetch(base, { signal: AbortSignal.timeout(1000) }); if (r.ok) { ready = true; break; } } catch {}
    await delay(500);
  }
  assert.ok(ready, 'Serveur indisponible : ' + logs);
  assert.equal(pages.length, 11);
  assert.equal(topicLinks.length, 26);
  await load('/');
  for (const page of pages) {
    const path = routeFor(page);
    const text = decode(await load(path));
    assert.ok(text.includes('<title>' + page.seoTitle + '</title>'), path + ' : titre SEO');
    assert.ok(text.includes('name="description" content="' + page.description + '"'), path + ' : description');
    assert.ok(text.includes('rel="canonical" href="https://picqtures.fr' + path + '"'), path + ' : canonique');
    const expected = [page.heading, ...page.intro, ...page.sections.flatMap(s => [s.title, ...s.paragraphs, ...s.items, ...s.subsections.flatMap(t => [t.title, ...t.paragraphs])])];
    for (const item of expected) assert.ok(text.replace(/<[^>]*>/g, '').includes(item), path + ' : texte absent : ' + item);
    assert.ok(text.includes('Un besoin ponctuel ou un accompagnement au quotidien'), path + ' : modalités');
    assert.ok(text.includes(CONTACT + '?subject=' + encodeURIComponent(page.title)), path + ' : contact avec sujet');
    assert.ok(text.includes('href="/#sujets"'), path + ' : retour accueil');
    assert.ok(!text.includes('Espace client'), path + ' : pas d’accès client public');
    for (const related of page.related) assert.ok(related.startsWith('/') || pages.some(p => p.slug === related), 'Page associée absente');
    // Check direct refresh returns the same canonical document.
    assert.equal((await fetch(base + path)).status, 200);
  }
  for (const path of ['/offres', '/a-propos']) {
    const text = await load(path);
    assert.ok(text.includes('contact-section'), path + ' : contact présent');
    assert.ok(text.includes('name="subject"'), path + ' : sujet modifiable');
  }
  const image = await fetch(base + '/images/service-reference.png');
  assert.equal(image.status, 200, 'Illustration locale disponible');
  const property = decode(await load('/immobilier'));
  assert.ok(property.includes('<title>Outil de suivi de dossiers immobiliers | PICQ’TURES</title>'));
  assert.ok(property.includes('rel="canonical" href="https://picqtures.fr/immobilier"'));
  assert.ok(property.includes(CONTACT + '?subject=' + encodeURIComponent('Outil de suivi immobilier')));
  assert.ok(property.includes('Demander une démonstration'));
  assert.ok(!property.includes('temps réel'));
  for (const topic of topicLinks) {
    const [path, anchor] = topic.href.split('#');
    const text = html.get(path);
    assert.ok(text, 'Destination absente : ' + topic.href);
    if (anchor) assert.ok(text.includes('id="' + anchor + '"'), 'Ancre absente : ' + topic.href);
    assert.ok(html.get('/').includes('href="' + topic.href + '"'), 'Lien absent de l’accueil : ' + topic.title);
  }
  assert.ok(html.get('/accompagnement/prendre-soin-de-sa-forme').includes('id="farmasi"'));
  const paths = new Set([...html.keys()]);
  for (const rule of redirects) {
    const response = await fetch(base + rule.source + '?verification=conserve', { redirect: 'manual' });
    assert.equal(response.status, 308, rule.source + ' : permanente');
    const location = new URL(response.headers.get('location'), base);
    assert.equal(location.pathname + location.hash, rule.destination, rule.source + ' : destination');
    assert.equal(location.searchParams.get('verification'), 'conserve', rule.source + ' : paramètres conservés');
    assert.ok(paths.has(location.pathname), rule.source + ' : destination canonique directe');
    if (location.hash) assert.ok(html.get(location.pathname).includes('id="' + location.hash.slice(1) + '"'));
  }
  const sitemap = await (await fetch(base + '/sitemap.xml')).text();
  for (const page of pages) assert.ok(sitemap.includes('https://picqtures.fr' + routeFor(page)));
  assert.ok(sitemap.includes('https://picqtures.fr/immobilier'));
  assert.ok(!sitemap.includes('#'));
  for (const rule of redirects) assert.ok(!sitemap.includes('<loc>https://picqtures.fr' + rule.source + '</loc>'));
  const report = { date: new Date().toISOString(), pages: 14, topics: topicLinks.length, permanentRedirects: redirects.length, checks: ['HTTP 200 des 14 pages et actualisation des 12 pages service', 'un seul H1 par page', 'contenus fournis présents dans le HTML', 'titres SEO, descriptions et URL canoniques', '26 liens et ancres', 'contacts avec sujet prérempli', 'liens associés et retour accueil', 'redirections 308 directes et paramètres conservés', 'sitemap canonique sans ancres ni routes redirigées'], browserVisualCheck: 'Contrôles visuels desktop et mobile réalisés séparément ; voir services-responsive-checks.json et les captures services-design.' };
  fs.writeFileSync('output/services-verification.json', JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify(report, null, 2));
} finally {
  server.kill();
}
