import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';
import ts from 'typescript';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const require = createRequire(import.meta.url);
function compile(path, overrides = {}) {
  const module = { exports: {} };
  const output = ts.transpileModule(readFileSync(path, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  Function('require', 'module', 'exports', output)(name => Object.hasOwn(overrides, name) ? overrides[name] : require(name), module, module.exports);
  return module.exports;
}
const contact = compile('app/_lib/contact-message.ts');
const fields = { name: '  Julien 🧑‍💼  ', email: 'audit@example.test', subject: '  Besoin & devis  ', message: 'Entreprise\tMontant\nExemple\t150,00 €\n😀' };

test('rejects blank or whitespace-only mandatory values', () => {
  for (const key of ['name', 'email', 'subject']) for (const value of ['', '   ', '\t\n']) {
    assert.equal(contact.prepareContact({ ...fields, [key]: value }), null);
  }
});
test('preserves emojis, accents, tables and safely encodes query fields', () => {
  const result = contact.prepareContact(fields);
  const url = new URL(result.href);
  assert.equal(url.pathname, 'julien@picqtures.fr');
  assert.equal(url.searchParams.size, 2);
  assert.equal(url.searchParams.get('subject'), 'Besoin & devis');
  assert.equal(url.searchParams.get('body'), result.body);
  assert.ok(result.body.includes(fields.message));
  assert.ok(result.body.includes('Julien 🧑‍💼\naudit@example.test'));
  const attack = contact.prepareContact({ ...fields, subject: 'Test &bcc=other@example.test\r\nBcc: another@example.test' });
  assert.equal(new URL(attack.href).searchParams.size, 2);
});
test('5000-character body or subject falls back without truncation', () => {
  for (const key of ['message', 'subject']) {
    const text = 'é'.repeat(5000);
    const result = contact.prepareContact({ ...fields, [key]: text });
    assert.equal(result.href, null);
    assert.ok((key === 'message' ? result.body : result.subject).includes(text));
  }
});
test('empty optional message has a readable default', () => {
  assert.ok(contact.prepareContact({ ...fields, message: '' }).body.includes('Je souhaite échanger'));
});
test('server-rendered form cannot fall back to an HTTP GET with personal data', () => {
  const { ServiceContact } = compile('app/_components/service-contact.tsx', {
    '../_lib/contact-message': contact,
    '../_lib/topic-links': { CONTACT: 'mailto:julien@picqtures.fr', WHATSAPP: 'https://example.test' },
    '../services.module.css': { default: {} },
  });
  const html = renderToStaticMarkup(React.createElement(ServiceContact, { subject: 'Test' }));
  assert.match(html, /<form[^>]*action="mailto:julien@picqtures.fr"[^>]*method="post"/);
  assert.match(html, /<fieldset[^>]*disabled=""/);
  assert.match(html, /<noscript>.*Contactez-moi directement/);
  assert.ok(!html.includes('role="status"'));
});
