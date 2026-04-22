import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Figtree, Instrument_Serif, Syne } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-picqtures-body",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-picqtures-display",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-picqtures-serif",
});

export const metadata: Metadata = {
  title: "Picqtures | Marketing, sites web et SaaS",
  description:
    "Picqtures accompagne les entrepreneurs avec une offre claire : marketing, création de site internet et conception de SaaS utiles.",
};

const CONTACT_URL =
  "mailto:contact@picqtures.fr?subject=Demande%20Picqtures";
const INSTAGRAM_URL = "https://instagram.com/julien_veyrc";
const BOOKING_URL = "mailto:julien@picqtures.fr?subject=Appel%20Picqtures";
const WEBSITE_URL = "https://picqtures.fr";

const buttonPrimaryClass =
  "picqtures-black-button inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(0,0,0,0.18)]";
const buttonCompactClass =
  "picqtures-black-button inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.14)]";
const buttonSmallClass =
  "picqtures-black-button inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.14)]";
const buttonPillClass =
  "picqtures-black-button inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)]";
const navLinks = [
  { label: "Marketing", href: "#marketing" },
  { label: "Sites web", href: "#sites" },
  { label: "SaaS", href: "#saas" },
  { label: "Process", href: "#process" },
];

const heroStats = [
  { value: "3", label: "leviers : marketing, site, SaaS" },
  { value: "2", label: "projets vitrines mis en scène ici" },
  { value: "1", label: "système clair pour vendre mieux" },
  { value: "100%", label: "orienté exécution et utilité" },
];

const marqueeItems = [
  "Marketing",
  "Création de site",
  "SaaS",
  "Automatisation",
  "Conversion",
  "Positionnement",
  "Tunnel clair",
  "Exécution rapide",
];

const showcaseProjects = [
  {
    eyebrow: "Site vitrine premium",
    title: "La Conciergerie des Dirigeants",
    text:
      "Une présence digitale plus élégante, plus claire et plus rassurante pour une offre de service haut de gamme.",
    image: "/service-conciergerie4.svg",
    alt: "Capture du site La Conciergerie des Dirigeants",
  },
  {
    eyebrow: "Produit SaaS",
    title: "Progressive Pulse / Pro-Pulse",
    text:
      "Un outil métier visuel pour suivre des dossiers, fluidifier les étapes et rendre l'avancement lisible.",
    image: "/service-progressive-pulse.svg",
    alt: "Capture du produit Progressive Pulse",
  },
];

const problems = [
  {
    title: "Tu communiques sans vraie structure",
    text:
      "Tu postes, tu testes, tu réfléchis beaucoup, mais ton message reste flou. Le problème n'est pas le manque d'idées. Le problème, c'est l'absence de système.",
    icon: "01",
  },
  {
    title: "Ton site ne vend pas assez",
    text:
      "Un beau site qui ne convertit pas reste un coût. Si la proposition n'est pas claire, si le parcours est flou, tu perds du trafic, du temps et des opportunités.",
    icon: "02",
  },
  {
    title: "Tu fais encore à la main ce qu'un outil pourrait gérer",
    text:
      "Trop de suivis, trop de manipulations, trop de temps perdu. Un SaaS utile ou une automatisation simple peut enlever une vraie charge mentale.",
    icon: "03",
  },
];

const marketingPoints = [
  "Clarifier ton positionnement pour que les gens comprennent vite ce que tu fais.",
  "Structurer ton offre pour la rendre plus lisible, plus crédible et plus vendable.",
  "Construire un discours simple qui parle au vrai problème du client.",
  "Mettre en place une communication plus cohérente, sans poster au hasard.",
  "Transformer tes idées en contenus, pages et actions utiles.",
];

const websiteBenefits = [
  "Landing page claire et orientée conversion.",
  "Site vitrine plus propre, plus crédible et plus lisible.",
  "Parcours utilisateur pensé pour guider vers l'action.",
  "Design premium sobre, pas de faux luxe, pas d'effet gratuit.",
  "Site pensé pour ton business, pas juste pour être joli.",
];

const saasBenefits = [
  "Créer un outil utile, pas un gadget.",
  "Construire un SaaS aligné avec un vrai besoin terrain.",
  "Automatiser ce qui te fait perdre du temps.",
  "Mieux suivre tes clients, tes dossiers ou tes demandes.",
  "Transformer une expertise en produit scalable.",
];

const featureCards = [
  {
    title: "Accompagnement marketing",
    subtitle: "Positionnement - offre - message - conversion",
    text:
      "On travaille le fond. Le vrai. Ce que tu vends, à qui, comment tu en parles, et pourquoi on devrait te choisir.",
  },
  {
    title: "Création de site",
    subtitle: "Landing pages - sites vitrines - interfaces utiles",
    text:
      "Des pages propres, rapides, lisibles, et pensées pour convertir. Le design sert le business. Pas l'inverse.",
  },
  {
    title: "Création de SaaS",
    subtitle: "Outils utiles - suivi client - automatisation",
    text:
      "Tu as une vraie idée ou un vrai besoin métier ? On le transforme en outil concret, exploitable et évolutif.",
  },
];

const comparison = [
  {
    title: "Sans cadre",
    bad: [
      "Tu testes trop de choses",
      "Ton message change sans cesse",
      "Ton site reste flou",
      "Tes idées s'empilent sans exécution",
    ],
    good: [
      "Positionnement plus clair",
      "Offre plus structurée",
      "Pages plus utiles",
      "Système plus lisible",
    ],
  },
];

const useCases = [
  {
    title: "Pour les indépendants",
    text:
      "Clarifier l'offre, refaire le site, structurer le discours et poser un vrai système de conversion simple.",
  },
  {
    title: "Pour les entreprises de service",
    text:
      "Mieux présenter les offres, gagner en crédibilité et fluidifier la prise de contact ou le suivi client.",
  },
  {
    title: "Pour les porteurs de projet SaaS",
    text:
      "Passer d'une idée floue à une version concrète, utile, testable et cohérente avec un vrai besoin.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "On clarifie",
    text:
      "On remet à plat le positionnement, l'offre, les objectifs et le problème réel à résoudre.",
  },
  {
    step: "02",
    title: "On structure",
    text:
      "On construit la bonne solution : message, landing page, site ou SaaS selon le besoin.",
  },
  {
    step: "03",
    title: "On exécute",
    text:
      "On transforme l'idée en support concret, utile, propre et exploitable.",
  },
  {
    step: "04",
    title: "On optimise",
    text:
      "On ajuste pour rendre le tout plus clair, plus fluide et plus efficace dans le temps.",
  },
];

const offers = [
  {
    title: "Accompagnement marketing",
    accent: "Clarté et conversion",
    description:
      "Pour les entrepreneurs qui ont besoin de clarifier leur offre, leur message et leur stratégie.",
    bullets: [
      "positionnement",
      "offre",
      "message",
      "landing page",
      "vision plus claire",
    ],
  },
  {
    title: "Création de site internet",
    accent: "Crédibilité et impact",
    description:
      "Pour avoir un site ou une landing page qui renvoie enfin une image propre et professionnelle.",
    bullets: [
      "site vitrine",
      "landing page",
      "UX claire",
      "CTA visibles",
      "design sobre",
    ],
  },
  {
    title: "Création de SaaS",
    accent: "Produit et gain de temps",
    description:
      "Pour transformer un besoin métier ou une idée en outil utile, concret et scalable.",
    bullets: [
      "outil métier",
      "suivi client",
      "automatisation",
      "MVP",
      "vision produit",
    ],
  },
];

const faqItems = [
  {
    q: "Picqtures fait du marketing ou du développement ?",
    a:
      "Les deux, mais avec une logique business. Le but n'est pas juste de créer. Le but est de créer quelque chose d'utile, cohérent et exploitable.",
  },
  {
    q: "Je n'ai pas encore une idée claire. C'est un problème ?",
    a:
      "Non. Justement. Une grande partie du travail consiste à clarifier l'idée, l'offre ou le besoin avant de produire quoi que ce soit.",
  },
  {
    q: "Je veux un site. Est-ce que vous faites aussi la stratégie ?",
    a:
      "Oui. Et c'est même souvent indispensable. Un site sans message clair reste un support vide.",
  },
  {
    q: "Je veux créer un SaaS mais je pars de loin.",
    a:
      "C'est possible. Le plus important est d'identifier un vrai besoin et de construire une première version simple, utile et testable.",
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

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3.5 8 3 3 6-6" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="h-3.5 w-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 4 8 8" />
      <path d="m12 4-8 8" />
    </svg>
  );
}

function BrandMonogram({ label }: { label: string }) {
  const initials = label
    .split(/[ '\-/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div className="flex min-h-24 items-center gap-4 rounded-[1.4rem] border border-[#e4e7f3] bg-white px-5 py-4 shadow-[0_14px_30px_rgba(31,35,65,0.05)]">
      <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-[#17181f] text-sm font-extrabold text-white [font-family:var(--font-picqtures-display)]">
        {initials}
      </div>
      <p className="text-sm font-bold leading-5 tracking-[-0.02em] text-[#242735] [font-family:var(--font-picqtures-display)]">
        {label}
      </p>
    </div>
  );
}

function ProjectShowcaseCard({
  eyebrow,
  title,
  text,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[1.8rem] border border-[#e4e7f3] bg-white shadow-[0_24px_55px_rgba(31,35,65,0.09)]">
      <div className="relative aspect-[1.34] overflow-hidden bg-[#eef0ff]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-white/82 px-4 py-3 backdrop-blur-md">
          <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
          <span className="h-3 w-3 rounded-full bg-[#f7c948]" />
          <span className="h-3 w-3 rounded-full bg-[#4dc27d]" />
          <span className="ml-2 h-4 flex-1 rounded-full bg-[#e8ebf7]" />
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-2xl leading-tight tracking-[-0.04em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#5f6475]">{text}</p>
      </div>
    </article>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
      <span className="h-px w-7 bg-[#6e6ff2]" />
      {children}
    </p>
  );
}

function FeatureCard({
  title,
  subtitle,
  text,
}: {
  title: string;
  subtitle: string;
  text: string;
}) {
  return (
    <article className="rounded-[1.7rem] border border-[#e7e8f4] bg-white p-6 shadow-[0_18px_45px_rgba(31,35,65,0.06)]">
      <span className="inline-flex rounded-full bg-[#f2f3ff] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6e6ff2]">
        {subtitle}
      </span>
      <h3 className="mt-5 text-2xl leading-tight tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f6475]">{text}</p>
    </article>
  );
}

function OfferCard({
  title,
  accent,
  description,
  bullets,
}: {
  title: string;
  accent: string;
  description: string;
  bullets: string[];
}) {
  return (
    <article className="rounded-[1.7rem] border border-[#e7e8f4] bg-white p-6 shadow-[0_18px_45px_rgba(31,35,65,0.06)] transition hover:-translate-y-1">
      <span className="inline-flex rounded-full bg-[#f2f3ff] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6e6ff2]">
        {accent}
      </span>
      <h3 className="mt-5 text-2xl tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-[#5f6475]">{description}</p>

      <div className="mt-6 space-y-2">
        {bullets.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-[1rem] bg-[#f7f8fc] px-4 py-3 text-sm text-[#4f5567]"
          >
            <span className="text-[#6e6ff2]">
              <CheckIcon />
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <a
        href={BOOKING_URL}
        className={`mt-6 ${buttonCompactClass}`}
      >
        Demander un échange
        <ArrowIcon />
      </a>
    </article>
  );
}

export default function PicqturesPage() {
  return (
    <main
      className={`${figtree.variable} ${syne.variable} ${instrumentSerif.variable} min-h-screen bg-[#f7f8fc] text-[#17181f] [font-family:var(--font-picqtures-body)]`}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-[rgba(247,248,252,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[#6c7184] transition hover:text-[#17181f]"
            >
              Retour
            </Link>
            <p className="text-lg font-extrabold tracking-[-0.03em] [font-family:var(--font-picqtures-display)]">
              PICQ<span className="text-[#6e6ff2]">'</span>TURES
            </p>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#6c7184] transition hover:text-[#17181f]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={BOOKING_URL}
            className={buttonSmallClass}
          >
            Prendre contact
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fc_48%,#eef1f8_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_20%_20%,rgba(110,111,242,0.18),transparent_34%),radial-gradient(circle_at_78%_16%,rgba(23,24,31,0.10),transparent_26%)]" />

        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[0.92fr_minmax(0,1.08fr)] lg:items-center">
          <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e5f2] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6ff2] shadow-[0_14px_28px_rgba(31,35,65,0.05)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6e6ff2]" />
            Marketing - Sites web - SaaS
          </div>

          <h1 className="mt-8 max-w-4xl text-[clamp(3.2rem,7vw,6.6rem)] leading-[0.9] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
            Transformer une idée
            <span className="mt-2 block text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
              en système utile
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f6475] sm:text-lg">
            Picqtures aide les entrepreneurs et les entreprises à clarifier leur
            marketing, créer des sites plus propres, et transformer de vrais besoins
            en outils SaaS utiles.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              className={buttonPrimaryClass}
            >
              Demander un échange
              <ArrowIcon />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d9dded] bg-white px-6 py-4 text-sm font-semibold text-[#17181f] shadow-[0_14px_28px_rgba(31,35,65,0.06)]"
            >
              Voir les réalisations
              <ArrowIcon />
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.2rem] border border-[#e4e7f3] bg-white/92 px-5 py-4 shadow-[0_16px_30px_rgba(31,35,65,0.05)]"
              >
                <p className="text-3xl font-extrabold tracking-[-0.04em] text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#7b8091]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          </div>

          <div className="relative min-h-[34rem] lg:min-h-[44rem]">
            <div className="absolute right-0 top-8 hidden w-[72%] overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_34px_90px_rgba(31,35,65,0.16)] sm:block">
              <Image
                src="/service-loc2.svg"
                alt="Aperçu du site La Conciergerie des Dirigeants"
                width={900}
                height={900}
                className="aspect-[1.1] w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 w-[72%] overflow-hidden rounded-[2.1rem] border border-white/80 bg-white shadow-[0_34px_95px_rgba(31,35,65,0.20)] sm:w-[58%]">
              <Image
                src="/picqtures-progressive-pulse-phone.png"
                alt="Mockup mobile Progressive Pulse"
                width={863}
                height={1221}
                className="w-full object-cover"
                priority
              />
            </div>
            <div className="absolute bottom-10 right-2 w-[48%] overflow-hidden rounded-[1.4rem] border border-white/80 bg-white p-3 shadow-[0_26px_60px_rgba(31,35,65,0.16)] sm:right-10 sm:w-[44%]">
              <div className="overflow-hidden rounded-[1rem]">
                <Image
                  src="/service-conciergerie2.svg"
                  alt="Aperçu du produit Pro-Pulse"
                  width={700}
                  height={700}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
                SaaS métier
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-black/6 bg-white py-5">
        <div className="marquee-auto-scroll flex w-max gap-10">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-[#7b8091] [font-family:var(--font-picqtures-display)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#6e6ff2]" />
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="realisations" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <SectionEyebrow>Réalisations</SectionEyebrow>
              <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
                Des supports visibles,
                <br />
                pas juste des promesses
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#5f6475]">
              Sites, interfaces, parcours, outils métier : la page montre enfin
              ce que Picqtures sait rendre concret.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {showcaseProjects.map((project) => (
              <ProjectShowcaseCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Le vrai problème</SectionEyebrow>
            <div className="mt-8 rounded-[1.6rem] border-l-4 border-[#6e6ff2] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(31,35,65,0.05)] sm:px-8">
              <p className="text-2xl leading-snug text-[#17181f] [font-family:var(--font-picqtures-serif)] italic sm:text-4xl">
                &quot;J&apos;ai plein d&apos;idées, mais rien n&apos;est vraiment structuré.&quot;
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f6475] sm:text-base">
                C&apos;est souvent la vraie situation. Le sujet n&apos;est pas juste de faire
                un site, juste de poster, ou juste de coder. Le sujet, c&apos;est de
                construire quelque chose de cohérent, utile et vendable.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#e4e7f3] bg-white p-6 shadow-[0_16px_35px_rgba(31,35,65,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(31,35,65,0.08)]"
              >
                <span className="inline-flex rounded-full bg-[#f2f3ff] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6e6ff2]">
                  Problème {item.icon}
                </span>
                <h3 className="mt-5 text-2xl leading-tight tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f6475]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="marketing" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.02fr_minmax(0,0.98fr)] lg:items-center">
          <div className="overflow-hidden rounded-[1.8rem] border border-[#e4e7f3] bg-[#fbfbff] shadow-[0_18px_40px_rgba(31,35,65,0.05)]">
            <div className="relative aspect-[1.45] bg-[#eef0ff]">
              <Image
                src="/picqtures-marketing-visual.svg"
                alt="Visualisation d'un accompagnement marketing Picqtures"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7b8091] [font-family:var(--font-picqtures-display)]">
                Accompagnement marketing
              </p>

              <div className="mt-6 space-y-3">
                {marketingPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-4 rounded-[1.2rem] border border-[#e4e7f3] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(31,35,65,0.04)]"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#6e6ff2]">
                      <CheckIcon />
                    </span>
                    <p className="text-sm leading-7 text-[#5f6475]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <SectionEyebrow>Marketing</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.95] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Clarifier ce que tu vends
              <br />
              pour enfin
              <br />
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                mieux le vendre
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f6475]">
              Picqtures ne vend pas juste du contenu ou de la forme. On travaille la
              clarté, l&apos;offre, le message et la structure. Parce qu&apos;un bon marketing
              commence par une bonne compréhension.
            </p>

            <a
              href={BOOKING_URL}
              className={`mt-8 ${buttonCompactClass}`}
            >
              Parler de mon marketing
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="sites" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Création de site</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Un site qui donne envie
              <br />
              de te faire
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}confiance
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6475]">
              Un site doit d&apos;abord rassurer, clarifier et guider. Pas juste montrer
              que c&apos;est joli. Le design sert le message, le parcours et la conversion.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_minmax(0,1.05fr)] lg:items-center">
            <div className="overflow-hidden rounded-[1.8rem] border border-[#e4e7f3] bg-white shadow-[0_24px_55px_rgba(31,35,65,0.09)]">
              <div className="relative aspect-[1.05] bg-[#eef0ff]">
                <Image
                  src="/service-conciergerie.svg"
                  alt="Capture d'un site vitrine premium"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <div className="inline-flex rounded-full bg-[#eef0ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6e6ff2]">
                  Site utile
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#7b8091]">
                  Landing page, site vitrine, interface claire
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {websiteBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-[1.2rem] border border-[#e4e7f3] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(31,35,65,0.04)]"
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#6e6ff2]">
                    <CheckIcon />
                  </span>
                  <p className="text-sm leading-7 text-[#5f6475]">{benefit}</p>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href={BOOKING_URL}
                  className={buttonCompactClass}
                >
                  Parler de mon site
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="saas" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>SaaS</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Transformer un besoin
              <br />
              en outil
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}utile
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6475]">
              L&apos;objectif n&apos;est pas de faire un SaaS parce que c&apos;est à la mode.
              L&apos;objectif, c&apos;est de construire un outil qui enlève une friction,
              structure un process ou crée une vraie valeur.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                text={card.text}
              />
            ))}
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_minmax(0,1fr)]">
            <div className="overflow-hidden rounded-[1.7rem] border border-[#e4e7f3] bg-[#fbfbff] shadow-[0_18px_40px_rgba(31,35,65,0.05)]">
              <div className="relative aspect-[1.55] bg-[#eef0ff]">
                <Image
                  src="/service-conciergerie5.svg"
                  alt="Capture d'une interface SaaS construite par Picqtures"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7b8091] [font-family:var(--font-picqtures-display)]">
                  Ce qu'un bon outil doit faire
                </p>

                <div className="mt-6 space-y-3">
                  {saasBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-4 rounded-[1.2rem] border border-[#e4e7f3] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(31,35,65,0.04)]"
                    >
                      <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#6e6ff2]">
                        <CheckIcon />
                      </span>
                      <p className="text-sm leading-7 text-[#5f6475]">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#e4e7f3] bg-white p-6 shadow-[0_18px_40px_rgba(31,35,65,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#7b8091] [font-family:var(--font-picqtures-display)]">
                Le bon angle
              </p>

              {comparison.map((block) => (
                <div key={block.title} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.2rem] border border-[#f1d7d7] bg-[#fff8f8] p-5">
                    <h3 className="text-lg tracking-[-0.02em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                      Avant
                    </h3>
                    <div className="mt-4 space-y-3">
                      {block.bad.map((item) => (
                        <div key={item} className="flex gap-3 text-sm text-[#6f5c5c]">
                          <span className="text-[#d46b6b]">
                            <XIcon />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.2rem] border border-[#dce8df] bg-[#f7fcf8] p-5">
                    <h3 className="text-lg tracking-[-0.02em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                      Après
                    </h3>
                    <div className="mt-4 space-y-3">
                      {block.good.map((item) => (
                        <div key={item} className="flex gap-3 text-sm text-[#56655b]">
                          <span className="text-[#55a06a]">
                            <CheckIcon />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <a
                href={BOOKING_URL}
                className={`mt-8 ${buttonCompactClass}`}
              >
                Parler de mon projet SaaS
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Pour qui</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Une approche pensée
              <br />
              pour des besoins
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}concrets
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {useCases.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#e4e7f3] bg-white p-6 shadow-[0_16px_35px_rgba(31,35,65,0.05)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef0ff] text-sm font-bold text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
                  {`0${index + 1}`}
                </div>
                <h3 className="mt-5 text-2xl tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f6475]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Process</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Une méthode simple :
              <br />
              clarifier, construire,
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}exécuter
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.5rem] border border-[#e4e7f3] bg-white p-6 shadow-[0_16px_35px_rgba(31,35,65,0.05)]"
              >
                <span className="inline-flex rounded-full bg-[#f2f3ff] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6e6ff2]">
                  Étape {item.step}
                </span>
                <h3 className="mt-5 text-2xl tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5f6475]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Offres</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Trois axes simples.
              <br />
              Une même logique :
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}utile
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard
                key={offer.title}
                title={offer.title}
                accent={offer.accent}
                description={offer.description}
                bullets={offer.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <div className="max-w-3xl">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)] sm:text-5xl">
              Les questions
              <br />
              qui reviennent
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqItems.map((item) => (
              <article
                key={item.q}
                className="rounded-[1.4rem] border border-[#e4e7f3] bg-white p-6 shadow-[0_12px_30px_rgba(31,35,65,0.04)]"
              >
                <h3 className="text-xl tracking-[-0.03em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                  {item.q}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6475]">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#17181f] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(110,111,242,0.18),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(76,190,255,0.12),transparent_24%)]" />
        <div className="relative mx-auto w-full max-w-4xl">
          <SectionEyebrow>Passe à l'action</SectionEyebrow>
          <h2 className="mt-5 text-4xl leading-[0.92] tracking-[-0.05em] text-white [font-family:var(--font-picqtures-display)] sm:text-6xl">
            Tu n'as pas besoin
            <br />
            de plus d'idées.
            <br />
            <span className="text-[#8f90ff] [font-family:var(--font-picqtures-serif)] italic">
              Tu as besoin d'un système.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
            Picqtures t'aide à clarifier, structurer et construire quelque chose
            de propre, utile et crédible : ton marketing, ton site ou ton futur SaaS.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              className={buttonPrimaryClass}
            >
              Prendre contact
              <ArrowIcon />
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonPrimaryClass}
            >
              Voir Picqtures
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonPillClass}
            >
              Instagram
            </a>
            <a
              href={CONTACT_URL}
              className={buttonPillClass}
            >
              Email
            </a>
            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noreferrer"
              className={buttonPillClass}
            >
              Site
            </a>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-black/6 bg-[#f7f8fc] px-4 py-8 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <p className="text-base font-extrabold tracking-[-0.03em] [font-family:var(--font-picqtures-display)]">
          PICQ<span className="text-[#6e6ff2]">'</span>TURES
        </p>
        <p className="text-sm text-[#6c7184]">
          Marketing, création de site et conception de SaaS utiles.
        </p>
      </footer>
    </main>
  );
}