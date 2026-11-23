"use client";

import { useEffect, useState } from "react";
import { prepareContact } from "../_lib/contact-message";
import { CONTACT, WHATSAPP } from "../_lib/topic-links";
import styles from "../services.module.css";

export function ServiceContact({ subject }: { subject: string; label?: string }) {
  const [ready, setReady] = useState(false);
  const [prepared, setPrepared] = useState<ReturnType<typeof prepareContact>>(null);
  const [error, setError] = useState("");
  useEffect(() => { setReady(true); }, []);
  return <section id="contact-section" className={styles.contactPanel} aria-labelledby="contact-title">
    <div className={styles.contactIntro}>
      <p className={styles.eyebrow}>Prise de contact directe</p>
      <h2 id="contact-title">Précisons ensemble votre besoin.</h2>
      <p>Présentez-moi votre demande. Nous précisons ensemble les prochaines étapes et les démarches que vous souhaitez me confier.</p>
      <div className={styles.contactLinks}>
        <div><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="6" width="26" height="20" rx="2" /><path d="m4 8 12 10L28 8" /></svg><div><span>Par e-mail</span><a href={CONTACT}>julien@picqtures.fr</a></div></div>
        <div><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M28 15a12 12 0 0 1-18 11l-7 3 2-8A12 12 0 1 1 28 15Z" /><path d="M11 9c-4 4 6 14 10 10l-3-3-2 1-3-3 1-2Z" /></svg><div><span>Par message</span><a href={WHATSAPP} target="_blank" rel="noreferrer">Échanger sur WhatsApp <span aria-hidden="true">↗</span></a></div></div>
      </div>
    </div>
    <form className={styles.contactForm} action={CONTACT} method="post" encType="text/plain" onSubmit={event => {
      event.preventDefault();
      const fields = new FormData(event.currentTarget);
      const message = prepareContact({ name: String(fields.get("name") ?? ""), email: String(fields.get("email") ?? ""), subject: String(fields.get("subject") ?? ""), message: String(fields.get("message") ?? "") });
      setError(message ? "" : "Renseignez votre nom, votre adresse e-mail et le sujet de votre demande. Les espaces seuls ne suffisent pas.");
      setPrepared(message);
    }}>
      <h3>Parlons de votre besoin</h3>
      <p>Préparez votre message, puis envoyez-le depuis votre messagerie.</p>
      <noscript><p>Le formulaire nécessite JavaScript. Contactez-moi directement à <a href={CONTACT}>julien@picqtures.fr</a> ou sur WhatsApp.</p></noscript>
      <fieldset disabled={!ready} className={styles.contactFields} onChange={() => { setPrepared(null); setError(""); }}>
      <legend className={styles.contactLegend}>Votre demande</legend>
      <div className={styles.contactIdentity}>
        <label>Nom et prénom<input name="name" autoComplete="name" required placeholder="Votre nom" /></label>
        <label>Votre adresse e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.fr" /></label>
      </div>
      <label>Sujet de votre demande<input name="subject" defaultValue={subject} required /></label>
      <label>Votre message<textarea name="message" rows={3} placeholder="Quelques mots sur votre besoin…" /></label>
      <button className={styles.primaryButton} type="submit">Préparer mon message <span aria-hidden="true">↗</span></button>
      </fieldset>
      <p className={styles.contactHint}>Aucun message n’est envoyé depuis ce formulaire.</p>
      {error && <p role="alert">{error}</p>}
      {prepared && <div className={styles.preparedMessage}>
        <p role="status">Votre message est prêt. {prepared.href ? "Ouvrez votre messagerie pour l’envoyer." : "Ce message est long : copiez le sujet et le texte ci-dessous dans votre messagerie."}</p>
        <label>Sujet à copier<input readOnly value={prepared.subject} /></label>
        <label>Message à copier<textarea readOnly rows={8} value={prepared.body} /></label>
        <a className={styles.primaryButton} href={prepared.href ?? CONTACT}>Ouvrir ma messagerie <span aria-hidden="true">↗</span></a>
        <p>Si rien ne s’ouvre, copiez le message et envoyez-le à julien@picqtures.fr depuis votre messagerie habituelle.</p>
      </div>}
    </form>
  </section>;
}
