import type { Metadata } from "next";
import { SiteHeader } from "./_components/site-header";
import { SiteFooter } from "./_components/site-footer";
import { TopicExplorer } from "./_components/topic-explorer";
import { topicLinks } from "./_lib/topic-links";
import shared from "./home.module.css";
import styles from "./home-carousel.module.css";

const title = "PICQ’TURES | Conseiller du dirigeant — Pro et perso";
const description = "Un interlocuteur pour vos besoins professionnels et personnels : conseil, recherche de solutions, mise en relation et prise en charge des démarches convenues.";
export const metadata: Metadata = { title, description, openGraph: { title, description }, twitter: { card: "summary_large_image", title, description } };

export default function Home() {
  return <div className={styles.home}>
    <SiteHeader />
    <a href="#sujets" className={shared.skipLink}>Aller aux sujets</a>
    <main id="top">
      <section className={styles.intro}>
        <h1>Pour votre entreprise.<br /><span>Pour vous.</span></h1>
        <div className={styles.positioning}><p>Un interlocuteur pour vos besoins professionnels et personnels.</p><span>Conseil &amp; accompagnement</span></div>
      </section>
      <section id="sujets" aria-label="Explorer les accompagnements"><TopicExplorer topics={topicLinks} /></section>
    </main>
    <SiteFooter />
  </div>;
}
