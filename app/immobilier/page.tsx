import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import { ServiceHero } from "../_components/service-hero";
import { ServiceContact } from "../_components/service-contact";
import { CONTACT } from "../_lib/topic-links";
import shared from "../home.module.css";
import styles from "../services.module.css";

const title = "Outil de suivi de dossiers immobiliers | PICQ’TURES";
const description = "Avec Progressive Pulse, l’agent immobilier actualise les étapes du dossier et permet à son client de consulter l’avancement de sa transaction.";
const url = "https://picqtures.fr/immobilier";
export const metadata: Metadata = { title, description, alternates: { canonical: url }, openGraph: { title, description, url }, twitter: { card: "summary", title, description } };
export default function PropertyPage() {
  const contact = `${CONTACT}?subject=${encodeURIComponent("Outil de suivi immobilier")}`;
  return <div className={`${shared.readingPage} ${styles.page}`}><SiteHeader interior />
    <a className={shared.skipLink} href="#contenu-service">Aller au contenu</a>
    <main id="contenu-service" className={`${styles.main} ${styles.editorialMain}`}>
      <ServiceHero title="Un suivi de dossier consultable par vos clients." intro={["Vous accompagnez une transaction immobilière et souhaitez donner à votre client une vision des étapes réalisées et de celles restant à accomplir ?", "PICQ’TURES propose Progressive Pulse, un outil de suivi de dossiers immobiliers."]} contact={contact} contactLabel="Demander une démonstration" eyebrow="Progressive Pulse · Une solution PICQ’TURES" />
      <section className={styles.editorialSection}><h2>Comment fonctionne le suivi ?</h2>
        <ol className={styles.propertySteps}>
          <li><h3>Vous créez le dossier.</h3><p>L’agent immobilier ouvre un dossier client avec les différentes étapes de suivi.</p></li>
          <li><h3>Vous actualisez l’avancement.</h3><p>Les étapes sont mises à jour à mesure que le dossier progresse.</p></li>
          <li><h3>Votre client consulte sa situation.</h3><p>Il retrouve les étapes terminées et celles qui restent à réaliser.</p></li>
        </ol>
      </section>
      <section className={styles.editorialSection}><h2>Une réponse à un besoin rencontré sur le terrain</h2><p>Cet outil a été créé pour un agent immobilier dont les clients manquaient de visibilité sur l’avancement de leur dossier.</p><p>Il leur permet de consulter les informations actualisées par leur agent. La qualité du suivi dépend donc de la régularité des mises à jour.</p></section>
      <section className={styles.editorialSection}><h2>Découvrir l’outil à partir de votre fonctionnement</h2><p>Une démonstration permet de regarder comment vous suivez vos dossiers aujourd’hui et comment l’outil pourrait s’intégrer à vos échanges clients.</p><p>Les modalités d’accès à Progressive Pulse sont distinctes des abonnements d’accompagnement PICQ’TURES.</p><a className={styles.primaryButton} href={contact}>Demander une démonstration <span aria-hidden="true">↗</span></a></section>
      <ServiceContact subject="Outil de suivi immobilier" label="Demander une démonstration" />
      <nav className={styles.relatedPages} aria-label="À découvrir aussi"><h2>À découvrir aussi</h2><Link className={styles.textLink} href="/accompagnement/simplifier-son-organisation">Simplifier son organisation →</Link></nav>
      <Link className={styles.textLink} href="/#sujets">← Retour aux sujets de l’accueil</Link>
    </main><SiteFooter />
  </div>;
}
