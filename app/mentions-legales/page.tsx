import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import sections from "../_lib/legal-notice.json";
import shared from "../services.module.css";
import styles from "./legal.module.css";

const title = "Mentions légales | PICQ’TURES";
const description = "Informations sur l’éditeur VPTC, l’hébergement et les conditions d’utilisation du site PICQ’TURES.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://picqtures.fr/mentions-legales" }, openGraph: { title, description } };

function LegalText({ text }: { text: string }) {
  const link = /^\[([^\]]+)\]\((https:\/\/[^)]+)\)$/.exec(text);
  return link ? <a href={link[2]}>{link[1]} <span aria-hidden="true">↗</span></a> : <>{text}</>;
}

export default function LegalNoticePage() {
  return <div className={shared.page}>
    <SiteHeader interior />
    <a className={styles.skipLink} href="#mentions">Aller aux mentions légales</a>
    <main id="mentions" className={`${shared.main} ${styles.main}`}>
      <header className={styles.intro}><p className={shared.eyebrow}>Informations légales</p><h1>Mentions légales</h1><p>PICQ’TURES · VPTC</p><p className={styles.updated}>Mise à jour de la rédaction : <time dateTime="2026-11-02">2 novembre 2026</time>.</p></header>
      <div className={styles.layout}>
        <nav className={styles.contents} aria-label="Sommaire des mentions légales"><p>Dans cette page</p><ol>{sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title.replace(/^\d+\.\s*/, "")}</a></li>)}</ol></nav>
        <div className={styles.sections}>{sections.map(section => <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.blocks.map((block, index) => block.type === "heading" ? <h3 key={index}>{block.text}</h3> : block.type === "list" ? <ul key={index}>{block.items?.map(item => <li key={item}><LegalText text={item} /></li>)}</ul> : <p key={index}><LegalText text={block.text ?? ""} /></p>)}
        </section>)}</div>
      </div>
      <Link className={shared.textLink} href="/">← Retour à l’accueil</Link>
    </main><SiteFooter />
  </div>;
}
