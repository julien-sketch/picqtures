import type { ServiceSection } from "../_lib/topics";
import styles from "../services.module.css";

function RequestIcon({ text }: { text: string }) {
  const value = text.toLocaleLowerCase("fr");
  const drawing = /restaurant|repas/.test(value) ? <><path d="M7 3v7m-3-7v5a3 3 0 0 0 6 0V3M7 11v10M18 3c-3 3-4 7-3 10h4M19 3v18" /></>
    : /spectacle|animation|invitation/.test(value) ? <path d="m3 10 7-7 3 3a2 2 0 0 0 3 3l3 3-7 7-3-3a2 2 0 0 0-3-3Zm8-3 2 2m2 2 2 2" />
    : /anniversaire|cadeau|occasion/.test(value) ? <><path d="M3 11h18v4H3zm2 4v6h14v-6M12 11v10" /><path d="M12 11C2 10 6 1 10 6l2 5c10-1 6-10 2-5Z" /></>
    : /famille|enfant|contact|relation|intervenant/.test(value) ? <><circle cx="8" cy="6" r="3" /><circle cx="17" cy="8" r="2" /><path d="M2 21v-5a6 6 0 0 1 12 0v5m1-9a5 5 0 0 1 7 4v5M6 16v5m4-5v5m8-5v5" /></>
    : /trajet|transport|déplacement/.test(value) ? <><path d="m3 16 2-7h14l2 7v4h-3v-3H6v3H3Zm3-7 1-4h10l1 4M3 14h18" /><path d="M7 16h1m8 0h1" /></>
    : /lieu|hébergement|accueil/.test(value) ? <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>
    : /compar|budget|prix|devis|achat/.test(value) ? <><path d="M5 3h14v18l-3-2-4 2-4-2-3 2ZM8 7h8M8 11h5M8 15h8" /></>
    : /professionnel|recherche|identifier/.test(value) ? <><circle cx="10" cy="9" r="4" /><path d="M3 21v-3a7 7 0 0 1 10-6m1 5 3 3 5-6" /></>
    : <><rect x="4" y="4" width="16" height="17" rx="3" /><path d="M8 2v4m8-4v4M8 11l2 2 5-5M8 17h8" /></>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawing}</svg>;
}

export function ServiceRequests({ section, description, contact }: { section: ServiceSection; description: string; contact: string }) {
  return <section id={section.id} className={styles.requestsSection} aria-labelledby={`${section.id}-title`}>
    <div className={styles.requestsIntro}>
      <p className={styles.eyebrow}>Exemples de demandes</p>
      <h2 id={`${section.id}-title`}>Vous pourriez<br />me confier…</h2>
      <p className={styles.requestsDescription}>{description}</p>
      {section.paragraphs.map((paragraph, index) => <p className={styles.requestsDescription} key={paragraph} id={section.paragraphIds?.[index] || undefined}>{paragraph}</p>)}
      <a className={styles.requestsLink} href={contact}><span>Parlons de votre besoin</span><span aria-hidden="true">→</span></a>
    </div>
    <ul className={styles.requestsList}>{section.items.map((item, index) => <li key={item} id={section.itemIds[index] || undefined}>
      <span className={styles.requestIcon}><RequestIcon text={item} /></span>
      <p>« {item} »</p>
    </li>)}</ul>
  </section>;
}
