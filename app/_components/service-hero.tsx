import Image from "next/image";
import styles from "../services.module.css";

export function ServiceHero({ title, intro, contact, eyebrow = "Conseil et accompagnement", contactLabel = "Parlons de votre besoin", number }: { title: string; intro: string | string[]; contact: string; eyebrow?: string; contactLabel?: string; number?: number }) {
  const paragraphs = Array.isArray(intro) ? intro : [intro];
  return <section className={styles.hero} aria-labelledby="service-title">
    <div className={styles.heroCopy}>
      <p className={styles.eyebrow}>{number !== undefined && <><span className={styles.serviceNumber}>Service {String(number).padStart(2, "0")}</span><span aria-hidden="true">/</span></>}{eyebrow}</p>
      <h1 id="service-title" className={styles.heroTitle}>{title.includes("vos envies") ? <>{title.split("vos envies")[0]}<span className={styles.titleAccent}>vos envies</span>{title.split("vos envies")[1]}</> : title}</h1>
      <p className={styles.intro}>{paragraphs[0]}</p>
      {paragraphs.length > 1 && <div className={styles.heroStatement}>{paragraphs.slice(1).map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>}
      <div className={styles.actions}><a className={styles.primaryButton} href={contact}>{contactLabel} <span aria-hidden="true">↗</span></a></div>
    </div>
    <figure className={styles.heroVisual}>
      <div className={styles.heroImage}><Image src="/images/service-planning.png" alt="Carnet ouvert, café, carte et billets de spectacle sur une table ensoleillée" fill priority sizes="(max-width: 800px) 90vw, (max-width: 1360px) 42vw, 550px" /></div>
      <figcaption><span>Conseil &amp; accompagnement</span><p>Un interlocuteur pour vos besoins professionnels et personnels.</p><small>Visuel d’illustration</small></figcaption>
    </figure>
  </section>;
}
