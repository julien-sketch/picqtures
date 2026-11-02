import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import document from "../_lib/terms-of-sale.json";
import shared from "../services.module.css";
import styles from "../mentions-legales/legal.module.css";

const title = "Conditions générales de vente — professionnels | PICQ’TURES";
const description = "Conditions générales de vente des abonnements Essentiel et Entreprise et des missions de conseil et d’accompagnement PICQ’TURES pour les professionnels.";
export const metadata: Metadata = { title, description, alternates: { canonical: "https://picqtures.fr/cgv" }, openGraph: { title, description } };

export default function TermsOfSalePage() {
  return <div className={shared.page}>
    <SiteHeader interior />
    <a className={styles.skipLink} href="#cgv">Aller aux conditions générales de vente</a>
    <main id="cgv" className={`${shared.main} ${styles.main}`}>
      <header className={styles.intro}><p className={shared.eyebrow}>Informations contractuelles</p><h1>Conditions générales de vente</h1><p>Conseil et accompagnement des dirigeants — clientèle professionnelle</p><p className={styles.updated}>{document.version}</p></header>
      <div className={styles.layout}>
        <nav className={`${styles.contents} ${styles.longContents}`} aria-label="Sommaire des CGV"><p>Dans cette page</p><ul>{document.sections.map(section => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul></nav>
        <div className={styles.sections}>{document.sections.map(section => <section className={styles.section} id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
          <h2 id={`${section.id}-title`}>{section.title}</h2>
          {section.blocks.map((block, index) => block.type === "heading" ? <h3 key={index}>{block.text}</h3> : block.type === "list" && "items" in block ? <ul key={index}>{block.items?.map(item => <li key={item}>{item}</li>)}</ul> : block.type === "table" && "headers" in block && "rows" in block ? <div key={index} className={styles.tableScroll} role="region" aria-label={`Tableau — ${section.title}`} tabIndex={0}><table><thead><tr>{block.headers?.map(header => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{block.rows?.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => cellIndex === 0 ? <th scope="row" key={cellIndex}>{cell}</th> : <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table></div> : <p key={index}>{block.text}</p>)}
        </section>)}</div>
      </div>
      <Link className={shared.textLink} href="/offres">← Découvrir les offres</Link>
    </main><SiteFooter />
  </div>;
}
