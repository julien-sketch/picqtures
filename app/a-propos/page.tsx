import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "../_components/site-header";
import { SiteFooter } from "../_components/site-footer";
import { CONTACT } from "../_lib/topic-links";
import { SocialLinks } from "../_components/social-links";
import styles from "../home.module.css";
import serviceStyles from "../services.module.css";
import { ServiceContact } from "../_components/service-contact";

const title = "Julien Veyrac — À propos | PICQ’TURES";
const description = "Julien Veyrac, fondateur de PICQ’TURES, accompagne les dirigeants dans leurs besoins professionnels et personnels, du premier échange au suivi des démarches.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { card: "summary", title, description } };
export default function AboutPage() {
  return <div className={`${styles.readingPage} ${serviceStyles.page} ${serviceStyles.secondaryPage}`}><SiteHeader interior /><main className={styles.readingMain}><Link className={styles.backLink} href="/">← Tous les sujets</Link><p className={styles.eyebrow}>À propos</p><h1>Julien Veyrac.<br />Un interlocuteur à vos côtés.</h1><div className={styles.aboutLayout}><Image src="/julien-veyrac.jpg" alt="Julien Veyrac, fondateur de PICQ’TURES" width={900} height={1200} sizes="(max-width: 700px) 90vw, 320px" priority /><div><p className={styles.lead}>Je suis Julien Veyrac, fondateur de PICQ’TURES.</p><p>J’accompagne les dirigeants dans leurs besoins professionnels et personnels : une question à clarifier, une recherche à effectuer, une décision à préparer ou des démarches à prendre en charge.</p><p>Mon expérience en communication et marketing, mon parcours entrepreneurial et mon réseau m’aident à rechercher les réponses et les compétences adaptées à chaque situation.</p><p>Au fil de nos échanges, je prends connaissance de vos priorités, de vos contraintes et de vos préférences utiles à l’accompagnement. Je vous propose des options et j’interviens selon ce que nous avons convenu. Vous gardez la décision.</p></div></div><div className={styles.pageCta}><p>Faisons connaissance.</p><a href={CONTACT} className={styles.pill}>Parlons de votre besoin ↗</a></div><SocialLinks /><ServiceContact subject="Échanger avec Julien" /></main><SiteFooter /></div>;
}
