import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "../_lib/topic-links";
import styles from "../home.module.css";

export function SiteHeader({ dark = false, interior = false }: { dark?: boolean; interior?: boolean }) {
  return (
    <header className={`${styles.header} ${dark ? styles.darkHeader : styles.lightHeader}`}>
      <Link href="/" className={styles.brand} aria-label="PICQ’TURES — accueil"><Image className={styles.brandImage} src="/images/picqtures-logo.png" alt="PICQ’TURES — Conseil et accompagnement des dirigeants" width={1155} height={421} sizes={interior ? "(max-width: 600px) 150px, 180px" : "(max-width: 600px) 165px, 210px"} priority /></Link>
      <span className={styles.headerSignature}>Pour vos besoins professionnels et personnels.</span>
      <nav className={styles.mainNav} aria-label="Navigation principale"><Link href="/offres">Les offres</Link><Link href="/a-propos">À propos</Link><a href={CONTACT}>Contact</a></nav>
      <a className={`${styles.pill} ${styles.headerCta}`} href={CONTACT}>Échangeons <span aria-hidden="true">↗</span></a>
    </header>
  );
}
