import { WHATSAPP } from "../_lib/topic-links";
import styles from "../home.module.css";
const socialLinks = [
 {label:"Instagram",href:"https://instagram.com/julien_veyrc",icon:"instagram" as const},
 {label:"LinkedIn",href:"https://www.linkedin.com/in/julien-veyrac/",icon:"linkedin" as const},
 {label:"WhatsApp",href:WHATSAPP,icon:"whatsapp" as const},
];
function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width="36" height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5.2 10h2.6v8.8H5.2V10Zm4.4 0h2.5v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7v4.4h-2.6v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v4h-2.6V10Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
      <path d="M12 4a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 4Zm0 14.3c-1.2 0-2.4-.3-3.4-1l-.2-.1-2.4.6.7-2.3-.2-.2A6.3 6.3 0 1 1 12 18.3Zm3.5-4.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.4.6c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.2 0-.3.1-.4l.4-.4.3-.4c.1-.1.1-.3 0-.4l-.7-1.6c-.1-.2-.3-.2-.5-.2h-.4c-.2 0-.4.1-.5.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function SocialLogo({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "instagram") return <InstagramIcon />;
  if (icon === "linkedin") return <LinkedInIcon />;
  return <WhatsAppIcon />;
}

export function SocialLinks() { return <nav className={styles.socialLinks} aria-label="Réseaux et contact">{socialLinks.map(link=><a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} title={link.label}><SocialLogo icon={link.icon}/></a>)}</nav>; }
