import { CONTACT } from "../_lib/topic-links";
import styles from "../home.module.css";

export function SiteFooter({ explore = false }: { explore?: boolean }) {
  return <footer className={styles.footer}><p>PICQ’TURES · Conseil et accompagnement des dirigeants</p>{explore ? <><a href={CONTACT}>Un besoin pro ou perso ? Commençons par en parler.</a></> : null}<nav aria-label="Informations légales"><a href="https://app.laconciergeriedesdirigeants.fr/mentions-legales" target="_blank" rel="noreferrer">Mentions légales</a><a href="https://app.laconciergeriedesdirigeants.fr/confidentialite" target="_blank" rel="noreferrer">Confidentialité</a><a href="https://app.laconciergeriedesdirigeants.fr/cgv" target="_blank" rel="noreferrer">Conditions générales</a></nav></footer>;
}
