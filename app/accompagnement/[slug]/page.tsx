import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../_components/site-header";
import { SiteFooter } from "../../_components/site-footer";
import { ServiceContact } from "../../_components/service-contact";
import { ServiceDetails } from "../../_components/service-details";
import { ServiceRequests } from "../../_components/service-requests";
import { ServiceHero } from "../../_components/service-hero";
import { FarmasiSelection } from "../../_components/health-accompaniment";
import { AccompanimentTerms } from "../../_components/accompaniment-terms";
import { topics } from "../../_lib/topics";
import { ServiceIcon } from "../../_components/service-icon";
import { topicLinks } from "../../_lib/topic-links";
import { CONTACT } from "../../_lib/topic-links";
import shared from "../../home.module.css";
import styles from "../../services.module.css";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return topics.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find(item => item.slug === slug);
  if (!topic) return {};
  const title = topic.seoTitle;
  const description = topic.description;
  const url = `https://picqtures.fr/accompagnement/${topic.slug}`;
  return { title, description, alternates: { canonical: url }, openGraph: { title, description, url }, twitter: { card: "summary", title, description } };
}
export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = topics.find(item => item.slug === slug);
  if (!topic) notFound();
  const contact = `${CONTACT}?subject=${encodeURIComponent(topic.title)}`;
  return <div className={`${shared.readingPage} ${styles.page}`}><SiteHeader interior />
    <a className={shared.skipLink} href="#contenu-service">Aller au contenu</a>
    <main id="contenu-service" className={`${styles.main} ${styles.editorialMain}`}>
      <ServiceHero title={topic.heading} intro={topic.intro} contact={contact} contactLabel={topic.cta} eyebrow={topic.title} number={topics.indexOf(topic) + 1} />
      {topic.sections.filter(section => section.items.length > 0).map(section => <ServiceRequests key={section.id} section={section} description={topic.description} contact={contact} />)}
      <ServiceDetails sections={topic.sections.filter(section => section.items.length === 0)} />
      {slug === "prendre-soin-de-sa-forme" && <FarmasiSelection />}
      <ServiceContact subject={topic.title} label={topic.cta} />
      <AccompanimentTerms />
      <nav className={styles.relatedPages} aria-label="À découvrir aussi"><p className={styles.eyebrow}>D’autres sujets à me confier</p><h2>À découvrir aussi</h2><div className={styles.relatedGrid}>{topic.related.map(related => {
        const page = topics.find(item => item.slug === related);
        const href = page ? `/accompagnement/${page.slug}` : related;
        const iconIndex = Math.max(0, topicLinks.findIndex(item => item.href.split("#")[0] === href));
        return <Link key={related} className={styles.relatedCard} href={href}>
          <span className={styles.relatedIcon}><ServiceIcon index={iconIndex} /></span>
          <div className={styles.relatedCopy}><h3>{page?.title ?? "L’outil de suivi immobilier"}</h3><p>{page?.description ?? "Un outil permettant à l’agent immobilier d’actualiser les étapes du dossier et à son client de consulter son avancement."}</p><span className={styles.relatedArrow}>Découvrir l’accompagnement <span aria-hidden="true">↗</span></span></div>
          <span className={styles.relatedCircle} aria-hidden="true">↗</span>
        </Link>;
      })}</div></nav>
      <Link className={styles.textLink} href="/#sujets">← Retour aux sujets de l’accueil</Link>
    </main><SiteFooter />
  </div>;
}
