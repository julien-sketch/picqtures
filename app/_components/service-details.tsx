import type { ServiceSection } from "../_lib/topics";
import styles from "../services.module.css";

function DetailIcon({ index }: { index: number }) {
  return <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {index % 3 === 0 ? <><rect x="5" y="5" width="22" height="18" rx="2" /><path d="M16 23v6m-5 0 5-6 5 6M11 18v-4m5 4v-7m5 7V9" /></>
      : index % 3 === 1 ? <><rect x="4" y="6" width="24" height="22" rx="3" /><path d="M4 13h24M11 3v6m10-6v6m-11 11 4 4 8-8" /></>
      : <><path d="m6 12-2 16h24l-2-16ZM11 15V9a5 5 0 0 1 10 0v6" /></>}
  </svg>;
}

export function ServiceDetails({ sections }: { sections: ServiceSection[] }) {
  if (!sections.length) return null;
  return <section className={styles.detailsPanel} aria-labelledby="details-title">
    <div className={styles.detailsHeading}>
      <div><p className={styles.eyebrow}>Du conseil à la réalisation</p><h2 id="details-title">Un accompagnement concret.</h2></div>
      <p>Des exemples de missions et les repères pour avancer ensemble.</p>
    </div>
    {sections.map((section, index) => <section key={section.id} id={section.id} className={styles.detailRow} aria-labelledby={`${section.id}-heading`}>
      <span className={styles.detailIcon}><DetailIcon index={index} /></span>
      <div className={styles.detailTitle}>
        <p className={styles.eyebrow}>{section.id === "exemples" ? "Expériences & réalisations" : "Votre accompagnement"}</p>
        <h3 id={`${section.id}-heading`}>{section.title}</h3>
      </div>
      <div className={styles.detailCopy}>
        {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraph} id={section.paragraphIds?.[paragraphIndex] || undefined}>{paragraph}</p>)}
        {section.subsections.map(subsection => <div key={subsection.title} className={styles.detailExample}><h4>{subsection.title}</h4>{subsection.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>)}
      </div>
    </section>)}
  </section>;
}
