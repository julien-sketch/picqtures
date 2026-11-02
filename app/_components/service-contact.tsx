"use client";

import { useState } from "react";
import { CONTACT, WHATSAPP } from "../_lib/topic-links";
import styles from "../services.module.css";

export function ServiceContact({ subject }: { subject: string; label?: string }) {
  const [prepared, setPrepared] = useState(false);
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
    <form className={styles.contactForm} onSubmit={event => {
      event.preventDefault();
      const fields = new FormData(event.currentTarget);
      const body = `Bonjour Julien,\n\n${fields.get("message") || "Je souhaite échanger avec vous sur ce sujet."}\n\n${fields.get("name")}\n${fields.get("email")}`;
      window.location.href = `${CONTACT}?subject=${encodeURIComponent(String(fields.get("subject")))}&body=${encodeURIComponent(body)}`;
      setPrepared(true);
    }}>
      <h3>Parlons de votre besoin</h3>
      <p>Préparez votre message, puis envoyez-le depuis votre messagerie.</p>
      <div className={styles.contactIdentity}>
        <label>Nom et prénom<input name="name" autoComplete="name" required placeholder="Votre nom" /></label>
        <label>Votre adresse e-mail<input name="email" type="email" autoComplete="email" required placeholder="vous@exemple.fr" /></label>
      </div>
      <label>Sujet de votre demande<input name="subject" defaultValue={subject} required /></label>
      <label>Votre message<textarea name="message" rows={3} placeholder="Quelques mots sur votre besoin…" /></label>
      <button className={styles.primaryButton} type="submit">Ouvrir ma messagerie <span aria-hidden="true">↗</span></button>
      <p className={styles.contactHint}>Relisez votre message avant de l’envoyer.</p>
      {prepared && <p role="status">Votre messagerie doit s’ouvrir avec le message préparé. Vérifiez-le puis envoyez-le. Vous pouvez aussi utiliser le lien e-mail ci-contre.</p>}
    </form>
  </section>;
}
