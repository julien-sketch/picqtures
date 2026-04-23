import Image from "next/image";
import Link from "next/link";
import { TestimonialsCarousel } from "./farmasi/testimonials-carousel";

type Service = {
  title: string;
  description: string;
  cta: string;
  href: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  external?: boolean;
  featured?: boolean;
};

const navigation = [
  { label: "Offres", href: "#services" },
  { label: "Ressource", href: "#ressources" },
  { label: "A propos", href: "#apropos" },
  { label: "Temoignages", href: "#temoignages" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/julien_veyrc",
    icon: "instagram" as const,
  },
  {
    label: "Tiktok",
    href: "https://www.tiktok.com/@julien_veyrc",
    icon: "tiktok" as const,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/julien-veyrac/",
    icon: "linkedin" as const,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/qr/RQP2JB4ULQNUM1",
    icon: "whatsapp" as const,
  },
];

const services: Service[] = [
  {
    title: "La Conciergerie des Dirigeants",
    description:
      "Mon offre la plus directe pour les dirigeants, indépendants et entrepreneurs qui veulent déleguer, gagner du temps, alleger leur charge mentale et avancer plus vite.",
    cta: "Decouvrir l'offre",
    href: "https://laconciergeriedesdirigeants.fr",
    label: "Offre principale",
    imageSrc: "/service-conciergerie.svg",
    imageAlt: "Illustration du service de conciergerie pour dirigeants",
    external: true,
    featured: true,
  },
  {
    title: "Progressive Pulse",
    description:
      "Un outil pour mieux suivre les dossiers, rassurer les clients, fluidifier l'avancement et donner une image plus serieuse, plus claire et plus professionnelle.",
    cta: "Voir la solution",
    href: "https://progressive-pulse.fr/",
    label: "SaaS",
    imageSrc: "/service-progressive-pulse.svg",
    imageAlt: "Illustration de Progressive Pulse",
  },
  {
    title: "Picq'tures",
    description:
      "Création de contenu, image, marketing, strategie et IA pour aider les entrepreneurs à mieux se positionner, mieux présenter leur offre et mieux vendre.",
    cta: "Voir le projet",
    href: "/picqtures",
    label: "Marketing",
    imageSrc: "/picqtures-marketing-visual.svg",
    imageAlt: "Illustration de l'univers Picqtures",
  },
  {
    title: "Farmasi",
    description:
      "Une approche simple autour de l'énergie, de la routine, du bien-être et de la régularité pour les entrepreneurs qui veulent mieux tenir dans la durée.",
    cta: "Voir l'univers",
    href: "/farmasi",
    label: "Performance",
    imageSrc: "/farmasi-aloeglow.svg",
    imageAlt: "Illustration Farmasi",
  },
];

const testimonials = [
  {
    initials: "SL",
    name: "Sophie L.",
    role: "Dirigeante",
    color: "#9e7a45",
    quote:
      "Julien a une approche rare : il va droit au but. Pas de blabla, pas de couche inutile. On gagne du temps et on comprend vite quoi faire.",
  },
  {
    initials: "TR",
    name: "Thomas R.",
    role: "Indépendant",
    color: "#4d8769",
    quote:
      "J'ai apprecie son cote terrain. Ce n'est pas un discours theorique. On sent qu'il teste, qu'il ajuste et qu'il parle de vrai business.",
  },
  {
    initials: "MD",
    name: "Marc D.",
    role: "Independant",
    color: "#b38d56",
    quote:
      "Son regard m'a aidé à clarifier mon offre et à structurer ce que je faisais déjà sans vraiment le présenter correctement.",
  },
  {
    initials: "CB",
    name: "Camille B.",
    role: "Indépendante",
    color: "#7a5c3a",
    quote:
      "Simple, humain, efficace. Quand on travaille avec Julien, on sait mieux ou on va et on perd moins de temps dans l'inutile.",
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7h10" />
      <path d="m8 3 4 4-4 4" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
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

function TikTokIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M14.5 3c.3 2 1.5 3.5 3.5 4.2V10a7.4 7.4 0 0 1-3.5-1v5.3a5.3 5.3 0 1 1-5.3-5.3c.4 0 .8 0 1.2.1v2.8a2.8 2.8 0 1 0 1.6 2.5V3h2.5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5a1.5 1.5 0 0 0 0 3.5ZM5.2 10h2.6v8.8H5.2V10Zm4.4 0h2.5v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7v4.4h-2.6v-3.9c0-.9 0-2.1-1.3-2.1s-1.5 1-1.5 2v4h-2.6V10Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 4a8 8 0 0 0-6.9 12l-1 4 4.1-1A8 8 0 1 0 12 4Zm0 14.3c-1.2 0-2.4-.3-3.4-1l-.2-.1-2.4.6.7-2.3-.2-.2A6.3 6.3 0 1 1 12 18.3Zm3.5-4.7c-.2-.1-1.3-.6-1.5-.7-.2-.1-.4-.1-.5.1l-.4.6c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.2 0-.3.1-.4l.4-.4.3-.4c.1-.1.1-.3 0-.4l-.7-1.6c-.1-.2-.3-.2-.5-.2h-.4c-.2 0-.4.1-.5.3-.2.2-.8.8-.8 2 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.3 3.8.6.3 1.1.4 1.5.5.6.2 1.2.2 1.7.1.5-.1 1.3-.5 1.5-1 .2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function SocialLogo({ icon }: { icon: (typeof socialLinks)[number]["icon"] }) {
  if (icon === "instagram") return <InstagramIcon />;
  if (icon === "tiktok") return <TikTokIcon />;
  if (icon === "linkedin") return <LinkedInIcon />;
  return <WhatsAppIcon />;
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
      <span className="h-px w-7 bg-[#c8a96e]" />
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">{text}</p>
    </div>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const card = (
    <article
      className={`flex h-full flex-col justify-between rounded-[1.6rem] border p-6 transition hover:-translate-y-1 ${
        service.featured
          ? "border-[#d7bf95] bg-[linear-gradient(180deg,#fffdfa_0%,#f8f1e7_100%)] shadow-[0_20px_45px_rgba(93,70,44,0.08)]"
          : "border-[#eadcc8] bg-white shadow-[0_16px_35px_rgba(93,70,44,0.05)] hover:shadow-[0_22px_42px_rgba(93,70,44,0.08)]"
      }`}
    >
      <div>
        <div className="overflow-hidden rounded-[1.2rem] border border-[#f0e4d3] bg-[#f8f1e7]">
          <Image
            src={service.imageSrc}
            alt={service.imageAlt}
            width={960}
            height={720}
            className="h-auto w-full"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] ${
              service.featured
                ? "bg-[#1f1a16] text-white"
                : "bg-[#f6ede2] text-[#9e7a45]"
            }`}
          >
            {service.label}
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f8f1e7] text-sm font-bold text-[#b38d56] [font-family:var(--font-farmasi-display)]">
            {`0${index + 1}`}
          </span>
        </div>

        <h3 className="mt-6 text-3xl leading-tight tracking-[-0.04em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
          {service.title}
        </h3>
        <p className="mt-4 text-sm leading-7 text-[#70655a]">{service.description}</p>
      </div>

      <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#9e7a45]">
        {service.cta}
        <ArrowIcon />
      </div>
    </article>
  );

  if (service.external) {
    return (
      <a href={service.href} target="_blank" rel="noreferrer" className="block">
        {card}
      </a>
    );
  }

  return (
    <Link href={service.href} className="block">
      {card}
    </Link>
  );
}

export default function Home() {
  const primaryService = services[0];

  return (
    <main className="min-h-screen bg-[#faf6ef] text-[#1f1a16]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-[rgba(250,246,239,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="text-sm font-extrabold tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]"
          >
            Julien Veyrac
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#7d7268] transition hover:text-[#1f1a16]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="home-black-button inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5"
          >
            Prendre contact
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(200,169,110,0.16),transparent_28%),radial-gradient(circle_at_88%_24%,rgba(77,135,105,0.12),transparent_22%),linear-gradient(180deg,#fffdf9_0%,#faf6ef_45%,#f7f0e5_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(200,169,110,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,169,110,0.05)_1px,transparent_1px)] bg-[size:58px_58px] opacity-45 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,black_0%,transparent_100%)]" />

        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.08fr)_22rem] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#eadcc8] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9e7a45] shadow-[0_14px_28px_rgba(93,70,44,0.05)]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#4d8769]" />
              Entrepreneur de terrain
            </div>

            <p className="mt-8 text-sm uppercase tracking-[0.28em] text-[#9e7a45]">
              Business. Temps. Structure. Image. Execution.
            </p>

            <h1 className="mt-5 max-w-4xl text-[clamp(3rem,7vw,6rem)] leading-[0.92] tracking-[-0.06em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
              J'aide les entrepreneurs à gagner du temps, mieux se structurer et mieux vendre.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#70655a] sm:text-lg">
              Je construis des services, des outils et des contenus utiles pour ceux qui veulent avancer avec plus de clarté, moins de charge mentale et plus d'efficacité. Ici, pas de vitrine fake : du concret, du terrain et de l'utile.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#services"
                target="_blank"
                rel="noreferrer"
                className="home-black-button inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1a16] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Découvrir mes services
                <ArrowIcon />
              </a>

              <a
                href="#ressources"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ded1bf] bg-white/70 px-6 py-4 text-sm font-medium text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Découvrir le ebook
              </a>
            </div>

            

            <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[1.35rem] border border-[#eadcc8] bg-white/80 px-4 py-4 shadow-[0_12px_28px_rgba(93,70,44,0.04)] transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1f1a16] text-white">
                      <SocialLogo icon={link.icon} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#1f1a16]">{link.label}</p>
                      <p className="mt-1 text-xs text-[#7d7268]">Suivre ou contacter</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <aside className="space-y-4 lg:pt-6">
            <div className="rounded-[1.7rem] border border-[#eadcc8] bg-white/80 p-4 shadow-[0_18px_40px_rgba(93,70,44,0.05)]">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-[linear-gradient(180deg,#f3e0c3_0%,#f8efe3_100%)] p-4 text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.55),transparent_35%)]" />
                <div className="relative">
                  <span className="inline-flex rounded-full bg-white/80 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#9e7a45]">
                    Portrait
                  </span>
                  <div className="mt-5 overflow-hidden rounded-[1.2rem] border border-white/60 shadow-[0_16px_36px_rgba(93,70,44,0.10)]">
                    <Image
                      src="/julien-veyrac.jpg"
                      alt="Portrait de Julien Veyrac"
                      width={900}
                      height={1200}
                      priority
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  <p className="mx-auto mt-4 max-w-[14rem] text-sm leading-6 text-[#70655a]">
                    Entrepreneur de terrain. Vision claire. Tests réels. Execution utile.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#d7bf95] bg-[#1f1a16] p-5 text-white shadow-[0_20px_45px_rgba(31,26,22,0.12)]">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8a96e]">
                Priorité actuelle
              </p>
              <h3 className="mt-3 text-2xl leading-tight tracking-[-0.04em] [font-family:var(--font-farmasi-display)]">
                La Conciergerie des Dirigeants
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72">
                Le point d'entrée le plus simple pour travailler avec moi aujourd'hui : déléguer plus, perdre moins de temps et avancer plus sereinement.
              </p>
              <a
                href="https://laconciergeriedesdirigeants.fr"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#c8a96e] px-4 py-3 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e7d3ae]"
              >
                Voir l'offre
                <ArrowIcon />
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section id="services" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Offres"
            title="Des solutions concrètes pour gagner du temps, structurer et mieux vendre."
            text="Chaque offre repond à un besoin reel. La conciergerie est aujourd'hui la porte d'entrée principale. Les autres projets prolongent la logique : fluidifier, clarifier, mieux présenter et mieux performer."
          />

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="ressources" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1.08fr)_20rem] lg:items-center">
          <div className="rounded-[1.7rem] border border-[#eadcc8] bg-[#fffdfa] p-7 shadow-[0_18px_40px_rgba(93,70,44,0.05)]">
            <SectionEyebrow>Notre Ebook</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              L'entrepreneuriat
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                sans filtre
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Un ebook direct et concret pour prendre du recul sur la vraie vie entrepreneuriale, eviter des erreurs classiques et avancer avec plus de lucidité.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                "Du terrain, pas du cinema",
                "Des erreurs à éviter",
                "Des déclics utiles pour avancer",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-[#efe3d5] bg-[#f8f1e7] px-4 py-3 text-sm text-[#3a322c]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://julienveyrac.gumroad.com/l/oxjcr"
                target="_blank"
                rel="noreferrer"
                className="home-black-button inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Voir l'ebook
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#ded1bf] bg-white px-5 py-3 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5"
              >
                En discuter
              </a>
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-[#eadcc8] bg-white p-6 shadow-[0_16px_35px_rgba(93,70,44,0.05)]">
            <div className="overflow-hidden rounded-[1.25rem] border border-[#efe3d5] bg-[#f8f1e7]">
              <Image
                src="/picqtures-ebook-mockup.svg"
                alt="Mockup de l'ebook"
                width={900}
                height={960}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
              Pour qui
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Entrepreneurs qui veulent plus de clarte",
                "Independants qui testent beaucoup",
                "Dirigeants qui en ont marre du discours lisse",
              ].map((item) => (
                <div key={item} className="rounded-[1rem] bg-[#f8f1e7] px-4 py-3 text-sm text-[#3a322c]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="apropos" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[0.9fr_minmax(0,1.1fr)]">
          <div className="rounded-[1.7rem] border border-[#eadcc8] bg-white p-7 shadow-[0_16px_35px_rgba(93,70,44,0.05)]">
            <SectionEyebrow>A propos</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
              Entrepreneur de terrain,
              <br />
              pas version lissée.
            </h2>
          </div>

          <div className="rounded-[1.7rem] border border-[#eadcc8] bg-[#fffdfa] p-7 shadow-[0_18px_40px_rgba(93,70,44,0.05)]">
            <div className="space-y-5 text-base leading-8 text-[#70655a]">
              <p>
                Je suis Julien Veyrac. Je developpe plusieurs projets autour d'un meme fil rouge : aider les entrepreneurs et dirigeants à gagner du temps, mieux structurer leur activité, mieux communiquer et construire quelque chose de plus solide.
              </p>
              <p>
                Je ne vends pas une image parfaite de l'entrepreneuriat. Ce qui m'interesse, c'est le réel : les decisions, les erreurs, les tests, les ajustements, les doutes et les vraies avancées.
              </p>
              <p>
                Ce site regroupe mes offres, mes outils et mes ressources. L'objectif est simple : que tu comprennes vite ce que je fais, ce que ca peut t'apporter, et comment on peut avancer ensemble.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://instagram.com/julien_veyrc"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#ded1bf] bg-white px-5 py-3 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5"
              >
                Suivre mon contenu
                <ArrowIcon />
              </a>
              <a
                href="#contact"
                className="home-black-button inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="temoignages" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            eyebrow="Temoignages"
            title="Les retours de nos clients."
            text="Quelques retours concrets de clients qui ont travaillé avec moi."

          />

          <div className="mt-12">
            <TestimonialsCarousel
              testimonials={testimonials.map((testimonial) => ({
                initials: testimonial.initials,
                author: testimonial.name,
                role: testimonial.role,
                quote: testimonial.quote,
                color: testimonial.color,
              }))}
            />
          </div>

          <div className="mt-12 hidden grid gap-4 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-[1.5rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_16px_35px_rgba(93,70,44,0.05)]"
              >
                <p className="text-sm tracking-[0.18em] text-[#c8a96e]">★★★★★</p>
                <p className="mt-4 text-base leading-8 text-[#3a322c]">"{testimonial.quote}"</p>
                <div className="mt-6 border-t border-[#efe3d5] pt-4">
                  <p className="text-base font-bold text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm text-[#8a7f73]">{testimonial.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl rounded-[1.8rem] bg-[#1f1a16] px-6 py-10 text-white shadow-[0_22px_55px_rgba(31,26,22,0.16)] sm:px-8 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:items-end">
            <div>
              <SectionEyebrow>Contact</SectionEyebrow>
              <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-white [font-family:var(--font-farmasi-display)] sm:text-5xl">
                Tu veux avancer,
                <br />
                clarifier ou collaborer ?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                Le plus simple : m'ecrire directement. Si ta demande est claire, on gagne du temps des le depart.
              </p>

              <div className="mt-6 space-y-3 text-sm text-white/72">
                <p>• Demande de collaboration</p>
                <p>• Question sur une offre ou un projet</p>
                <p>• Besoin concret en marketing, suivi client ou délégation</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:contact@picqtures.fr"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c8a96e] px-5 py-3 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e7d3ae]"
                >
                  M'envoyer un email
                  <ArrowIcon />
                </a>
                <a
                  href="https://wa.me/qr/RQP2JB4ULQNUM1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/12"
                >
                  Me parler sur WhatsApp
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between gap-4 rounded-[1.2rem] border border-white/10 bg-white/8 px-4 py-4 text-sm transition hover:border-white/20 hover:bg-white/12"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#c8a96e]">
                      <SocialLogo icon={link.icon} />
                    </span>
                    <div>
                      <p className="text-white/58">{link.label}</p>
                      <p className="mt-1 font-semibold text-white">{link.label}</p>
                    </div>
                  </div>
                  <span className="text-[#c8a96e]">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/6 bg-[#faf6ef]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-[#7d7268] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="font-bold text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
            Julien Veyrac
          </p>
          <p>J'aide les entrepreneurs à gagner du temps, mieux se structurer et mieux vendre.</p>
          <p>© 2026 picqtures.fr</p>
        </div>
      </footer>
    </main>
  );
}
