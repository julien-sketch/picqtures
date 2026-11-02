import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import { CONTACT } from "../_lib/topic-links";
import styles from "./offers.module.css";
import serviceStyles from "../services.module.css";
import { ServiceContact } from "../_components/service-contact";

const title = "Les offres — Essentiel et Entreprise | PICQ’TURES";
const description = "Conseil et accompagnement pro et perso : Essentiel à 79 € HT par mois, Entreprise à 249 € HT par mois, ou mission ponctuelle sur accord préalable.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { card: "summary", title, description } };
const offers = [
  { name: "Essentiel", price: "79", audience: "Un bénéficiaire : le dirigeant. Pour ses besoins professionnels et personnels.", items: ["Demandes courantes illimitées.", "Demandes envoyées 24 h/24, 7 j/7.", "Service joignable de 9 h à 22 h, 7 j/7.", "Première réponse personnalisée sous 48 heures calendaires.", "Recherches, comparaisons, sélection de prestataires, mises en relation et réservations courantes.", "Exécution simple après votre validation."] },
  { name: "Entreprise", price: "249", audience: "Une entreprise, jusqu’à trois utilisateurs autorisés. Dirigeants et associés : besoins professionnels et personnels. Collaborateurs : besoins professionnels uniquement.", items: ["Demandes courantes illimitées.", "Demandes envoyées 24 h/24, 7 j/7.", "Service joignable de 9 h à 22 h, 7 j/7.", "Priorité : première réponse personnalisée sous 24 heures calendaires.", "Recherches, comparaisons, sélection de prestataires, mises en relation et réservations courantes.", "Suivi mensuel, anticipation et accompagnement personnalisé.", "Interlocuteur référent, exécution et coordination simples après votre validation."] },
];
export default function OffersPage() {
  return <div className={`${serviceStyles.page} ${styles.page}`}>
    <SiteHeader interior />
    <a className={styles.skipLink} href="#contenu-offres">Aller aux offres</a>
    <main id="contenu-offres" className={`${serviceStyles.main} ${serviceStyles.editorialMain}`}>
      <section className={styles.intro} aria-labelledby="offers-title">
        <p className={serviceStyles.eyebrow}>Les offres PICQ’TURES</p>
        <h1 id="offers-title">Un accompagnement au quotidien.<br /><span>Ou pour un besoin précis.</span></h1>
        <p>Choisissez un abonnement pour vos demandes courantes, ou confiez-moi une mission ponctuelle avec des modalités définies à l’avance.</p>
        <a className={serviceStyles.primaryButton} href="#abonnements">Découvrir les abonnements <span aria-hidden="true">↓</span></a>
      </section>
      <section id="abonnements" aria-labelledby="subscriptions-title">
        <div className={styles.sectionHeading}><p className={serviceStyles.eyebrow}>À vos côtés au quotidien</p><h2 id="subscriptions-title">Deux offres, selon vos besoins.</h2></div>
        <div className={styles.offerGrid}>{offers.map((offer, index) => <article key={offer.name} className={`${styles.offerCard} ${index === 1 ? styles.enterprise : ""}`}>
          <div className={styles.offerSummary}><p className={styles.offerType}>{index === 0 ? "Pour le dirigeant" : "Pour votre entreprise"}</p><h3>{offer.name}</h3><p className={styles.price}>{offer.price} € <span>HT / mois</span></p><p className={styles.audience}>{offer.audience}</p></div>
          <ul className={styles.features}>{offer.items.map(item => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}</ul>
          <div className={styles.offerAction}><p>Engagement de 12 mois, paiement mensuel.</p><a className={serviceStyles.primaryButton} href={`${CONTACT}?subject=${encodeURIComponent(`Offre ${offer.name}`)}`}>Échanger sur {offer.name} <span aria-hidden="true">↗</span></a></div>
        </article>)}</div>
      </section>
      <section className={styles.framework} aria-labelledby="framework-title">
        <div className={styles.sectionHeading}><p className={serviceStyles.eyebrow}>Le cadre de l’accompagnement</p><h2 id="framework-title">Un cadre clair pour vos demandes</h2></div>
        <ul className={styles.frameworkList}><li>Les délais concernent une première réponse personnalisée, et non la résolution de la demande.</li><li>Les achats, réservations payantes et prestations externes restent à votre charge.</li><li>Les missions importantes ou nécessitant une gestion continue font l’objet d’un devis accepté avant leur réalisation.</li><li>Les modifications, relances et suivis simples liés aux demandes courantes sont inclus.</li><li>L’attente de la réponse d’un prestataire ne rend pas à elle seule une demande complexe.</li><li>Aucun résultat de recherche n’est garanti.</li></ul>
        <Link className={serviceStyles.textLink} href="/cgv">Consulter les conditions générales de vente <span aria-hidden="true">↗</span></Link>
      </section>
      <section className={styles.oneOff} aria-labelledby="one-off-title">
        <div><p className={serviceStyles.eyebrow}>Une mission, un cadre défini ensemble</p><h2 id="one-off-title">Un besoin ponctuel ?</h2><p>Une intervention sans abonnement est possible. Le périmètre, les honoraires et les éventuels coûts externes sont précisés avant votre accord.</p></div>
        <a href={`${CONTACT}?subject=Mission%20ponctuelle`} className={serviceStyles.primaryButton}>Parler de ma mission <span aria-hidden="true">↗</span></a>
      </section>
      <ServiceContact subject="Les offres PICQ’TURES" />
    </main><SiteFooter />
  </div>;
}
