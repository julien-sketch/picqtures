import Link from "next/link";
import styles from "../services.module.css";

export function AccompanimentTerms() {
  return <section id="modalites" className={styles.termsPanel} aria-labelledby="terms-title">
    <div className={styles.termsHeading}>
    <h2 id="terms-title">Un besoin ponctuel ou un accompagnement au quotidien</h2>
    <Link className={styles.primaryButton} href="/offres">Découvrir les offres PICQ’TURES <span aria-hidden="true">↗</span></Link>
    </div>
    <div className={styles.termsCopy}>
    <p>Les recherches, comparaisons, mises en relation et démarches courantes peuvent entrer dans le cadre de votre abonnement. Les missions nécessitant un travail important ou une gestion continue font l’objet d’un devis accepté avant leur réalisation.</p>
    <p>Les achats, consultations et prestations externes restent à votre charge. Une intervention ponctuelle sans abonnement est également possible.</p>
    </div>
  </section>;
}
