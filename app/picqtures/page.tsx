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
    "Picqtures accompagne les entrepreneurs avec une offre claire : marketing, creation de site internet et conception de SaaS utiles.",
};

const CONTACT_URL =
  "mailto:contact@picqtures.fr?subject=Demande%20Picqtures";
const INSTAGRAM_URL = "https://instagram.com/julien_veyrac";
const BOOKING_URL = "mailto:contact@picqtures.fr?subject=Appel%20Picqtures";
const WEBSITE_URL = "https://picqtures.fr";

const buttonPrimaryClass =
  "inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_16px_32px_rgba(0,0,0,0.18)]";
const buttonCompactClass =
  "inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_12px_24px_rgba(0,0,0,0.14)]";
const buttonSmallClass =
  "inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_12px_24px_rgba(0,0,0,0.14)]";
const buttonPillClass =
  "inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold !text-white [color:#ffffff] shadow-[0_12px_24px_rgba(0,0,0,0.12)]";
const navLinks = [
  { label: "Marketing", href: "#marketing" },
  { label: "Sites web", href: "#sites" },
  { label: "SaaS", href: "#saas" },
  { label: "Process", href: "#process" },
];

const heroStats = [
  { value: "3", label: "leviers clairs : marketing, site, SaaS" },
  { value: "1", label: "objectif : faire gagner du temps et faire vendre" },
  { value: "0", label: "blabla inutile, on va au concret" },
  { value: "100%", label: "oriente execution et utilite" },
];

const marqueeItems = [
  "Marketing",
  "Creation de site",
  "SaaS",
  "Automatisation",
  "Conversion",
  "Positionnement",
  "Tunnel clair",
  "Execution rapide",
];

const problems = [
  {
    title: "Tu communiques sans vraie structure",
    text:
      "Tu postes, tu testes, tu reflechis beaucoup, mais ton message reste flou. Le probleme n'est pas le manque d'idees. Le probleme, c'est l'absence de systeme.",
    icon: "01",
  },
  {
    title: "Ton site ne vend pas assez",
    text:
      "Un beau site qui ne convertit pas reste un cout. Si la proposition n'est pas claire, si le parcours est flou, tu perds du trafic, du temps et des opportunites.",
    icon: "02",
  },
  {
    title: "Tu fais encore a la main ce qu'un outil pourrait gerer",
    text:
      "Trop de suivis, trop de manipulations, trop de temps perdu. Un SaaS utile ou une automatisation simple peut enlever une vraie charge mentale.",
    icon: "03",
  },
];

const marketingPoints = [
  "Clarifier ton positionnement pour que les gens comprennent vite ce que tu fais.",
  "Structurer ton offre pour la rendre plus lisible, plus credible et plus vendable.",
  "Construire un discours simple qui parle au vrai probleme du client.",
  "Mettre en place une communication plus coherente, sans poster au hasard.",
  "Transformer tes idees en contenus, pages et actions utiles.",
];

const websiteBenefits = [
  "Landing page claire et orientee conversion.",
  "Site vitrine plus propre, plus credible et plus lisible.",
  "Parcours utilisateur pense pour guider vers l'action.",
  "Design premium sobre, pas de faux luxe, pas d'effet gratuit.",
  "Site pense pour ton business, pas juste pour etre joli.",
];

const saasBenefits = [
  "Creer un outil utile, pas un gadget.",
  "Construire un SaaS aligne avec un vrai besoin terrain.",
  "Automatiser ce qui te fait perdre du temps.",
  "Mieux suivre tes clients, tes dossiers ou tes demandes.",
  "Transformer une expertise en produit scalable.",
];

const featureCards = [
  {
    title: "Accompagnement marketing",
    subtitle: "Positionnement · offre · message · conversion",
    text:
      "On travaille le fond. Le vrai. Ce que tu vends, a qui, comment tu en parles, et pourquoi on devrait te choisir.",
  },
  {
    title: "Creation de site",
    subtitle: "Landing pages · sites vitrines · interfaces utiles",
    text:
      "Des pages propres, rapides, lisibles, et pensees pour convertir. Le design sert le business. Pas l'inverse.",
  },
  {
    title: "Creation de SaaS",
    subtitle: "Outils utiles · suivi client · automatisation",
    text:
      "Tu as une vraie idee ou un vrai besoin metier ? On le transforme en outil concret, exploitable et evolutif.",
  },
];

const comparison = [
  {
    title: "Sans cadre",
    bad: [
      "Tu testes trop de choses",
      "Ton message change sans cesse",
      "Ton site reste flou",
      "Tes idees s'empilent sans execution",
    ],
    good: [
      "Positionnement plus clair",
      "Offre plus structuree",
      "Pages plus utiles",
      "Systeme plus lisible",
    ],
  },
];

const useCases = [
  {
    title: "Pour les independants",
    text:
      "Clarifier l'offre, refaire le site, structurer le discours et poser un vrai systeme de conversion simple.",
  },
  {
    title: "Pour les entreprises de service",
    text:
      "Mieux presenter les offres, gagner en credibilite et fluidifier la prise de contact ou le suivi client.",
  },
  {
    title: "Pour les porteurs de projet SaaS",
    text:
      "Passer d'une idee floue a une version concrete, utile, testable et coherente avec un vrai besoin.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "On clarifie",
    text:
      "On remet a plat le positionnement, l'offre, les objectifs et le probleme reel a resoudre.",
  },
  {
    step: "02",
    title: "On structure",
    text:
      "On construit la bonne solution : message, landing page, site ou SaaS selon le besoin.",
  },
  {
    step: "03",
    title: "On execute",
    text:
      "On transforme l'idee en support concret, utile, propre et exploitable.",
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
    accent: "Clarte et conversion",
    description:
      "Pour les entrepreneurs qui ont besoin de clarifier leur offre, leur message et leur strategie.",
    bullets: [
      "positionnement",
      "offre",
      "message",
      "landing page",
      "vision plus claire",
    ],
  },
  {
    title: "Creation de site internet",
    accent: "Credibilite et impact",
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
    title: "Creation de SaaS",
    accent: "Produit et gain de temps",
    description:
      "Pour transformer un besoin metier ou une idee en outil utile, concret et scalable.",
    bullets: [
      "outil metier",
      "suivi client",
      "automatisation",
      "MVP",
      "vision produit",
    ],
  },
];

const faqItems = [
  {
    q: "Picqtures fait du marketing ou du developpement ?",
    a:
      "Les deux, mais avec une logique business. Le but n'est pas juste de creer. Le but est de creer quelque chose d'utile, coherent et exploitable.",
  },
  {
    q: "Je n'ai pas encore une idee claire. C'est un probleme ?",
    a:
      "Non. Justement. Une grande partie du travail consiste a clarifier l'idee, l'offre ou le besoin avant de produire quoi que ce soit.",
  },
  {
    q: "Je veux un site. Est-ce que vous faites aussi la strategie ?",
    a:
      "Oui. Et c'est meme souvent indispensable. Un site sans message clair reste un support vide.",
  },
  {
    q: "Je veux creer un SaaS mais je pars de loin.",
    a:
      "C'est possible. Le plus important est d'identifier un vrai besoin et de construire une premiere version simple, utile et testable.",
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
            <span className="text-[#6e6ff2]">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      <a
        href={BOOKING_URL}
        className={`mt-6 ${buttonCompactClass}`}
      >
        Demander un echange
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

      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(110,111,242,0.16),transparent_32%),radial-gradient(circle_at_85%_35%,rgba(76,190,255,0.12),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f7f8fc_45%,#f2f4fb_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(110,111,242,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(110,111,242,0.04)_1px,transparent_1px)] bg-[size:58px_58px] opacity-50 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,black_0%,transparent_100%)]" />

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e5f2] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6e6ff2] shadow-[0_14px_28px_rgba(31,35,65,0.05)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#6e6ff2]" />
            Marketing · Sites web · SaaS
          </div>

          <h1 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,6.1rem)] leading-[0.92] tracking-[-0.05em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
            Transformer une idee
            <span className="mt-2 block text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
              en systeme utile
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#5f6475] sm:text-lg">
            Picqtures aide les entrepreneurs et les entreprises a clarifier leur
            marketing, creer des sites plus propres, et transformer de vrais besoins
            en outils SaaS utiles.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={BOOKING_URL}
              className={buttonPrimaryClass}
            >
              Demander un echange
              <ArrowIcon />
            </a>
            <a
              href="#marketing"
              className={buttonPrimaryClass}
            >
              Voir ce qu'on construit
            </a>
          </div>

          <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-[#e4e7f3] bg-white/90 px-5 py-5 text-center shadow-[0_16px_30px_rgba(31,35,65,0.05)]"
              >
                <p className="text-3xl font-extrabold tracking-[-0.04em] text-[#6e6ff2] [font-family:var(--font-picqtures-display)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#7b8091]">
                  {stat.label}
                </p>
              </div>
            ))}
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
              <span className="text-[#6e6ff2]">•</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Le vrai probleme</SectionEyebrow>
            <div className="mt-8 rounded-[1.6rem] border-l-4 border-[#6e6ff2] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(31,35,65,0.05)] sm:px-8">
              <p className="text-2xl leading-snug text-[#17181f] [font-family:var(--font-picqtures-serif)] italic sm:text-4xl">
                &quot;J&apos;ai plein d&apos;idees, mais rien n&apos;est vraiment structure.&quot;
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#5f6475] sm:text-base">
                C&apos;est souvent la vraie situation. Le sujet n&apos;est pas juste de faire
                un site, juste de poster, ou juste de coder. Le sujet, c&apos;est de
                construire quelque chose de coherent, utile et vendable.
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
                  Probleme {item.icon}
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
          <div className="rounded-[1.8rem] border border-[#e4e7f3] bg-[#fbfbff] p-6 shadow-[0_18px_40px_rgba(31,35,65,0.05)] sm:p-8">
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
                    ✓
                  </span>
                  <p className="text-sm leading-7 text-[#5f6475]">{point}</p>
                </div>
              ))}
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
              clarte, l&apos;offre, le message et la structure. Parce qu&apos;un bon marketing
              commence par une bonne comprehension.
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
            <SectionEyebrow>Creation de site</SectionEyebrow>
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
            <div className="rounded-[1.8rem] border border-[#e4e7f3] bg-white p-6 text-center shadow-[0_18px_40px_rgba(31,35,65,0.05)] sm:p-8">
              <div className="mx-auto inline-flex rounded-full bg-[#eef0ff] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#6e6ff2]">
                Site utile
              </div>

              <div className="mt-8 overflow-hidden rounded-[1.4rem] border border-[#e4e7f3] bg-[#f5f7ff]">
                <div className="flex h-56 w-full items-center justify-center bg-[linear-gradient(135deg,#eef0ff_0%,#f8f9ff_100%)]">
                  <div className="w-[82%] rounded-[1.2rem] border border-[#dde2f2] bg-white p-4 text-left shadow-[0_16px_30px_rgba(31,35,65,0.06)]">
                    <div className="h-3 w-20 rounded-full bg-[#dfe4f5]" />
                    <div className="mt-4 h-8 w-2/3 rounded-full bg-[#cfd5ef]" />
                    <div className="mt-3 h-3 w-full rounded-full bg-[#eceffa]" />
                    <div className="mt-2 h-3 w-5/6 rounded-full bg-[#eceffa]" />
                    <div className="mt-5 flex gap-3">
                      <div className="h-10 w-28 rounded-full bg-[#17181f]" />
                      <div className="h-10 w-28 rounded-full bg-[#eef0ff]" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#7b8091]">
                Landing page, site vitrine, interface claire
              </p>
            </div>

            <div className="space-y-3">
              {websiteBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex gap-4 rounded-[1.2rem] border border-[#e4e7f3] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(31,35,65,0.04)]"
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#eef0ff] text-xs font-bold text-[#6e6ff2]">
                    ✓
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
              L&apos;objectif n&apos;est pas de faire un SaaS parce que c&apos;est a la mode.
              L&apos;objectif, c&apos;est de construire un outil qui enleve une friction,
              structure un process ou cree une vraie valeur.
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
            <div className="rounded-[1.7rem] border border-[#e4e7f3] bg-[#fbfbff] p-6 shadow-[0_18px_40px_rgba(31,35,65,0.05)]">
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
                      ✓
                    </span>
                    <p className="text-sm leading-7 text-[#5f6475]">{benefit}</p>
                  </div>
                ))}
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
                          <span className="text-[#d46b6b]">✕</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[1.2rem] border border-[#dce8df] bg-[#f7fcf8] p-5">
                    <h3 className="text-lg tracking-[-0.02em] text-[#17181f] [font-family:var(--font-picqtures-display)]">
                      Apres
                    </h3>
                    <div className="mt-4 space-y-3">
                      {block.good.map((item) => (
                        <div key={item} className="flex gap-3 text-sm text-[#56655b]">
                          <span className="text-[#55a06a]">✓</span>
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
              Une approche pensee
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
              Une methode simple :
              <br />
              clarifier, construire,
              <span className="text-[#6e6ff2] [font-family:var(--font-picqtures-serif)] italic">
                {" "}executer
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
                  Etape {item.step}
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
              Une meme logique :
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
          <SectionEyebrow>Passe a l'action</SectionEyebrow>
          <h2 className="mt-5 text-4xl leading-[0.92] tracking-[-0.05em] text-white [font-family:var(--font-picqtures-display)] sm:text-6xl">
            Tu n'as pas besoin
            <br />
            de plus d'idees.
            <br />
            <span className="text-[#8f90ff] [font-family:var(--font-picqtures-serif)] italic">
              Tu as besoin d'un systeme.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
            Picqtures t'aide a clarifier, structurer et construire quelque chose
            de propre, utile et credible : ton marketing, ton site ou ton futur SaaS.
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
          Marketing, creation de site et conception de SaaS utiles.
        </p>
      </footer>
    </main>
  );
}
