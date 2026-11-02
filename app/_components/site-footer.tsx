import { CONTACT } from "../_lib/topic-links";
import styles from "../home.module.css";

export function SiteFooter({ explore = false }: { explore?: boolean }) {
  return <footer className={styles.footer}><p>PICQ’TURES · Conseil et accompagnement des dirigeants</p>{explore ? <><a href={CONTACT}>Un besoin pro ou perso ? Commençons par en parler.</a></> : null}<nav aria-label="Informations légales"><a href="/mentions-legales">Mentions légales</a><a href="/cgv">Conditions générales</a></nav></footer>;
}
