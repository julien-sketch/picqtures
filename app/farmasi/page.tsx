import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Inter, Noto_Sans } from "next/font/google";
import { TestimonialsCarousel } from "./testimonials-carousel";

const figtree = Inter({
  subsets: ["latin"],
  variable: "--font-farmasi-body",
});

const syne = Inter({
  subsets: ["latin"],
  variable: "--font-farmasi-display",
});

const farmasiItalic = Noto_Sans({
  subsets: ["latin"],
  weight: ["200"],
  style: ["italic"],
  variable: "--font-farmasi-serif",
});

export const metadata: Metadata = {
  title: "Farmasi | Nutrition des dirigeants",
  description:
    "Une landing page Farmasi claire et editoriale autour de la nutrition, de la performance et de la routine des dirigeants.",
};

const FARMASI_BOUTIQUE_URL = "https://www.fr.farmasi.com/marionjulien";
const NUTRISHAKE_URL = "https://www.fr.farmasi.com/marionjulien";
const ALOE_GLOW_URL =
  "https://www.fr.farmasi.com/marionjulien/product-detail/aloe-glow-mango?pid=1002123";

const CONTACT_EMAIL =
  "mailto:julien@picqtures.fr?subject=Farmasi%20Performance";
const INSTAGRAM_URL = "https://instagram.com/julien_veyrc";

const navLinks = [
  { label: "Glycemie", href: "#glycemie" },
  { label: "NutriShake", href: "#nutrishake" },
  { label: "Aloe Glow", href: "#aloe-glow" },
  { label: "Routine", href: "#routine" },
];

const heroStats = [
  {
    value: "-20%",
    label: "de productivite lie a une mauvaise nutrition",
  },
  {
    value: "1/3",
    label:
      "des erreurs de jugement complexes sont liees a une hypoglycemie reactionnelle",
  },
  {
    value: "x2",
    label:
      "de risque de prendre des decisions financieres risquées après une nuit de 4h",
  },
  { value: "3 min", label: "suffisent pour mieux se nourrir" },
];

const marqueeItems = [
  "Energie mentale",
  "Clarte cognitive",
  "Recuperation",
  "Gain de temps",
  "Performance durable",
  "Focus et decision",
  "Sommeil reparateur",
  "Force et endurance",
];

const problems = [
  {
    title: "Tu n'as pas le temps de manger correctement",
    text:
      "Sandwich avale en cinq minutes, repas saute, fast-food entre deux calls. Le cout reel arrive plus tard : coup de barre, irritabilite et decisions moins nettes.",
    icon: "01",
  },
  {
    title: "Ta glycemie sabote tes meilleures heures",
    text:
      "Cafe, sucre rapide, crash brutal ensuite. C'est souvent exactement au moment ou tu devrais etre le plus clair pour arbitrer, negocier ou prioriser.",
    icon: "02",
  },
  {
    title: "Tu ne nourris pas assez ton cerveau",
    text:
      "Sans proteines, omega-3 et micronutriments utiles, la concentration chute, la memoire devient plus floue et la fatigue mentale monte plus vite.",
    icon: "03",
  },
];

const glycemieFacts = [
  "Un pic glycemique declenche une forte reponse insulinique, puis un crash environ 90 minutes plus tard.",
  "Pendant ce creux, le cortex prefrontal fonctionne moins bien : les decisions deviennent plus impulsives et moins rationnelles.",
  "Le vrai levier n'est pas de sauter un repas, mais d'apporter les bons nutriments au bon moment, meme dans une journee chargee.",
];

const nutrishakeBenefits = [
  "Glycemie plus stable grace a un profil nutritionnel plus regulier.",
  "25 g de proteines pour soutenir neurotransmetteurs, motivation et clarte mentale.",
  "Vitamines et mineraux utiles pour encaisser le stress de journees denses.",
  "Pret en trois minutes au bureau, en voiture ou entre deux rendez-vous.",
  "Format simple a deployer dans une vraie routine de dirigeant.",
];

const aloeGlowBenefits = [
  "Format liquide simple a integrer dans une routine quotidienne.",
  "Produit ideal pour parler bien-etre interieur sans compliquer le message.",
  "Permet de travailler l'angle digestion, confort et routine durable.",
  "Ajoute une dimension glow et image a ton univers Farmasi.",
  "Facile a recommander a des profils qui veulent commencer simplement.",
  "Complement logique a une routine plus globale avec nutrition et soins.",
];

const aloeGlowHighlights = [
  {
    title: "Digestion",
    text:
      "Aloe Glow permet de parler confort digestif et bien-etre interieur, avec un discours plus accessible qu'un supplement trop technique.",
  },
  {
    title: "Routine simple",
    text:
      "Le format est facile a prendre au quotidien. C'est ideal pour une clientele qui veut du concret et du simple.",
  },
  {
    title: "Glow",
    text:
      "Le positionnement est interessant parce qu'il relie bien-etre interieur, peau, image et energie plus propre.",
  },
  {
    title: "Porte d'entree",
    text:
      "C'est un bon produit phare pour des personnes qui ne veulent pas commencer par quelque chose de trop sport ou trop nutritionnel.",
  },
];

const proteinMetrics = [
  {
    value: "1,6 g",
    label: "par kilo de poids corporel pour un adulte actif et stresse",
  },
  {
    value: "80%",
    label: "des dirigeants seraient en sous-apport proteique chronique",
  },
  {
    value: "30 min",
    label: "apres le reveil pour un apport matinal strategique",
  },
  {
    value: "+23%",
    label: "de satiete en plus versus un petit-dejeuner sucre",
  },
];

const timeline = [
  {
    time: "7h30",
    status: "bad",
    title: "Sans : cafe et viennoiserie",
    text:
      "Pic glycemique rapide, energie courte, anxiete de fond et premiere baisse nette avant midi.",
  },
  {
    time: "7h30",
    status: "good",
    title: "Avec : NutriShake",
    text:
      "Proteines, glucides plus reguliers, micronutriments et energie plus lineaire pour les premieres heures cle.",
  },
  {
    time: "11h00",
    status: "bad",
    title: "Sans : fringale et irritabilite",
    text:
      "Crash glycemique, tentation du sucre et baisse de clarte au moment ou il faudrait rester precis.",
  },
  {
    time: "11h00",
    status: "good",
    title: "Avec : pleine puissance cognitive",
    text:
      "Concentration plus stable, meilleures decisions et moins de dispersion mentale.",
  },
  {
    time: "14h00",
    status: "bad",
    title: "Sans : le coup de barre classique",
    text:
      "Somnolence apres un dejeuner pris a la va-vite, energie subie au lieu d'une apres-midi menee.",
  },
  {
    time: "14h00",
    status: "good",
    title: "Avec : deuxieme plage de performance",
    text:
      "Une energie plus continue qui te permet de rester present, clair et efficace jusqu'au soir.",
  },
];

const omegaCards = [
  {
    title: "Omega-3",
    subtitle: "EPA + DHA · cerveau · anti-inflammatoire",
    icon: "O3",
    effects: [
      { label: "Fluidite neuronale", value: 92 },
      { label: "Inflammation chronique", value: 85 },
      { label: "Sommeil profond", value: 78 },
      { label: "Regulation de l'humeur", value: 80 },
    ],
    text:
      "Stress, manque de sommeil et alimentation repetitive entretiennent un terrain inflammatoire qui use la clarte mentale. Les omega-3 sont une base solide.",
  },
  {
    title: "Vitamines et mineraux",
    subtitle: "B6 · B12 · D3 · magnesium · zinc",
    icon: "VM",
    effects: [
      { label: "Energie cellulaire", value: 88 },
      { label: "Immunite et stress", value: 82 },
      { label: "Neurotransmetteurs", value: 90 },
      { label: "Recuperation nerveuse", value: 75 },
    ],
    text:
      "Le magnesium, les vitamines du groupe B et certains mineraux jouent un role direct dans l'energie, la recuperation et la resilience nerveuse.",
  },
];

const beautyCards = [
  {
    title: "Soins peau homme et femme",
    text:
      "Hydratation, eclat, regard plus frais. Une routine rapide pour renvoyer une image plus nette, meme quand les nuits sont courtes.",
    image: "/farmasi-skincare.svg",
    url:"https://www.fr.farmasi.com/marionjulien/product-list/soin-visage?cid=5aecb19a-63d3-eb11-a315-005056010963",
  },
  {
    title: "Routine express cinq minutes",
    text:
      "Nettoyant, serum, creme et protection. Une pile simple a tenir sans complexite ni dispersion.",
    image: "/farmasi-skincare2.svg",
    url:"https://www.fr.farmasi.com/marionjulien/product-list/soin-visage?cid=5aecb19a-63d3-eb11-a315-005056010963",
  },
  {
    title: "Parfums premium",
    text:
      "Une signature olfactive propre, sobre et memorisable. L'image passe aussi par les details.",
    image: "/farmasi-perfume.svg",
    url: "https://www.fr.farmasi.com/marionjulien/product-list/parfums?cid=e0255bb2-d060-ed11-83af-000d3a71539d",
  },
];

const packs = [
  {
    title: "Pack Starter Clarte",
    description:
      "NutriShake + shaker. Le point d'entree le plus simple pour remettre une vraie structure dans les repas pris a la va-vite.",
    includes: "NutriShake, shaker, routine de demarrage",
    image: "/farmasi-nutrishake.svg",
    accent: "Demarrer simplement",
    url: "https://www.fr.farmasi.com/marionjulien/WishListSharedDetail/?wishListId=92e1103a-fbc1-4826-a71e-dda25987c0f5&c=1234",
  },
  {
    title: "Pack Performance Dirigeant",
    description:
      "NutriShake + Aloe Glow. Un pack coherent pour soutenir structure, regularite et mieux-etre global.",
    includes: "NutriShake, Aloe Glow, routine simple",
    image: "/farmasi-pack-performance.svg",
    accent: "Le plus complet",
    url: "https://www.fr.farmasi.com/marionjulien/WishListSharedDetail/?wishListId=059fadb2-8546-463a-ac54-31fc0807f651&c=1234",
  },
  {
    title: "Pack Fondations Quotidiennes",
    description:
      "Omega-3 + multivitamines pour renforcer le socle : systeme nerveux, recuperation et regularite sur la duree.",
    includes: "Omega-3, multivitamines, routine du matin",
    image: "/farmasi-omega-vit.svg",
    accent: "Socle quotidien",
    url: "https://www.fr.farmasi.com/marionjulien/WishListSharedDetail/?wishListId=c16ad96c-c7ef-4c5b-a5ad-0c79422d5126&c=1234",
  },
];

const dailyProducts = [
  {
    title: "Cafe Farmasi",
    image: "/farmasi-coffee.svg",
    url: "https://www.fr.farmasi.com/marionjulien/product-detail/nutriplus-cafe-instantane-soluble-melange-de-chicoree?pid=9000850",
    text:
      "Une option pratique pour installer un rituel du matin plus cadre. L'idee ici est moins le cafe pris dans l'urgence, et plus une routine plus stable et plus intentionnelle.",
    benefits: [
      "rituel simple a integrer le matin",
      "pratique au bureau ou en deplacement",
      "s'insere facilement dans une routine performance",
    ],
  },
  {
    title: "The Farmasi",
    image: "/farmasi-the.svg",
    url: "https://www.fr.farmasi.com/marionjulien/product-detail/nutriplus-serenity-the-noir?pid=1000809",
    text:
      "Un format leger pour une pause plus propre dans la journee. Chaud ou froid selon les references, il aide a structurer un moment de respiration sans complexite.",
    benefits: [
      "pause plus douce entre deux temps forts",
      "format facile a preparer",
      "rituel simple pour ralentir sans perdre le fil",
    ],
  },
  {
    title: "AloeGlow",
    image: "/farmasi-aloeglow.svg",
    url: "https://www.fr.farmasi.com/marionjulien/product-detail/aloe-glow-mango?pid=1002123",
    text:
      "AloeGlow s'inscrit dans une logique de digestion, d'hydratation quotidienne et de vitalite. C'est le type de produit qu'on ajoute pour soutenir le terrain plutot que pour chercher un effet spectaculaire.",
    benefits: [
      "soutien du confort digestif au quotidien",
      "routine bien-etre et eclat plus coherente",
      "facile a integrer dans une hygiene de vie simple",
    ],
  },
  {
    title: "Pastilles de rehydratation",
    image: "/farmasi-hydration.svg",
    url: "https://www.fr.farmasi.com/marionjulien/product-detail/electrolyte?pid=1002298",
    text:
      "Tres utiles dans les journees denses, les deplacements, les periodes de chaleur ou apres le sport. Elles aident a remettre l'hydratation au centre quand on oublie facilement de boire correctement.",
    benefits: [
      "soutien de l'hydratation et de l'equilibre electrolytique",
      "pratique en voyage, au bureau ou apres l'effort",
      "solution simple quand l'eau seule ne suffit plus",
    ],
  },
];

const routineBlocks = [
  {
    time: "6h30",
    title: "Reveil - hydratation et vitamines",
    text:
      "Grand verre d'eau, omega-3 et multivitamines. Tu poses les bases du systeme nerveux des les premieres minutes.",
    tag: "Omega-3 + multivitamines",
  },
  {
    time: "7h00",
    title: "Soins matinaux - cinq minutes",
    text:
      "Nettoyant, serum, creme. Une routine rapide pour sortir frais, net et presentable sans perdre du temps.",
    tag: "Routine soins Farmasi",
  },
  {
    time: "7h30",
    title: "Petit-dejeuner - NutriShake",
    text:
      "Une base simple pour stabiliser l'energie, nourrir le cerveau et lancer la matinee avec plus de clarte.",
    tag: "NutriShake",
  },
  {
    time: "12h30",
    title: "Dejeuner equilibre ou NutriShake #2",
    text:
      "Quand la journee explose, une solution simple et reguliere reste meilleure qu'un dejeuner improvise et trop lourd.",
    tag: "NutriShake optionnel",
  },
  {
    time: "16h00",
    title: "Aloe Glow dans une routine simple",
    text:
      "Un moment bien-etre facile a integrer pour soutenir regularite, confort et sensation de routine plus propre.",
    tag: "Aloe Glow",
  },
  {
    time: "21h00",
    title: "Routine soir et recuperation",
    text:
      "Soins du soir, recuperation nerveuse, magnesium si necessaire. Tu prepares le lendemain pendant que le corps se regenere.",
    tag: "Routine nuit + magnesium",
  },
];

const testimonials = [
  {
    initials: "TM",
    author: "Thomas M.",
    role: "CEO · Lyon",
    quote:
      "Le NutriShake m'a surtout aide a supprimer le coup de barre de l'apres-midi. Ensuite j'ai ajoute une routine plus propre et mes fins de journee sont plus stables.",
    color: "#d2b17a",
  },
  {
    initials: "SR",
    author: "Sophie R.",
    role: "Directrice commerciale",
    quote:
      "Le protocole est simple, concret et tenable. J'ai moins de cafe-sucre, plus d'energie stable et une meilleure image de moi au quotidien.",
    color: "#8eb39b",
  },
  {
    initials: "KA",
    author: "Karim A.",
    role: "Fondateur startup",
    quote:
      "Aloe Glow m'a plu parce que c'est facile a prendre. J'aime les produits simples que je peux garder dans une vraie routine.",
    color: "#94aec4",
  },
  {
    initials: "LD",
    author: "Laura D.",
    role: "Avocate d'affaires",
    quote:
      "Je ne voulais pas un programme complexe. Le pack omega-3 et multivitamines m'a surtout aidee a rester plus stable sur des semaines tres denses.",
    color: "#d79b78",
  },
  {
    initials: "NB",
    author: "Nicolas B.",
    role: "Consultant independant",
    quote:
      "En deplacement, je n'ai plus besoin d'improviser. J'ai mes produits, mon rythme et beaucoup moins de fatigue en fin de journee.",
    color: "#7ea6c2",
  },
  {
    initials: "CM",
    author: "Claire M.",
    role: "Fondatrice e-commerce",
    quote:
      "J'ai commence pour la nutrition et j'ai garde la routine soin aussi. Le tout est simple, propre et facile a tenir dans la vraie vie.",
    color: "#c892ad",
  },
  {
    initials: "AP",
    author: "Arnaud P.",
    role: "Dirigeant PME",
    quote:
      "Le pack performance m'a fait gagner du temps mental. Je ne me demande plus quoi prendre ni comment organiser ma routine.",
    color: "#a4b072",
  },
];

const guarantees = [
  "Conseil personnalise gratuit",
  "Livraison France et Belgique",
  "Produits certifies et testes",
  "Reponse rapide par message",
  "Sans engagement",
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
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
      <span className="h-px w-7 bg-[#c8a96e]" />
      {children}
    </p>
  );
}

function ProductCta({
  tag,
  title,
  text,
  image,
  productUrl,
}: {
  tag: string;
  title: string;
  text: string;
  image: string;
  productUrl: string;
}) {
  return (
    <div className="rounded-[1.6rem] border border-[#e6d8c7] bg-[#fffdfa] p-6 shadow-[0_18px_45px_rgba(93,70,44,0.06)] sm:grid sm:grid-cols-[11rem_minmax(0,1fr)] sm:items-center sm:gap-6">
      <a
        href={productUrl}
        target="_blank"
        rel="noreferrer"
        className="mb-5 block overflow-hidden rounded-[1.3rem] border border-[#eadcc8] bg-[#f8f1e7] sm:mb-0"
      >
        <Image
          src={image}
          alt={title}
          width={960}
          height={720}
          className="h-44 w-full object-cover transition duration-300 hover:scale-[1.02] sm:h-40"
        />
      </a>

      <div className="max-w-2xl">
        <span className="inline-flex rounded-full bg-[#f6ede2] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9e7a45]">
          {tag}
        </span>
        <h3 className="mt-4 text-2xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-[#70655a]">{text}</p>
        <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <a
            href={productUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-dark inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c8a96e] hover:text-[#1f1a16]"
          >
            Voir la boutique
            <ArrowIcon />
          </a>
          <a
            href={CONTACT_EMAIL}
            className="text-sm font-medium text-[#9e7a45] transition hover:text-[#7f5f35]"
          >
            Demander un conseil
          </a>
        </div>
      </div>
    </div>
  );
}

export default function FarmasiPage() {
  return (
    <main
      className={`${figtree.variable} ${syne.variable} ${farmasiItalic.variable} min-h-screen bg-[#faf6ef] text-[#1f1a16] [font-family:var(--font-farmasi-body)]`}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-[rgba(250,246,239,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm text-[#7d7268] transition hover:text-[#1f1a16]"
            >
              Retour
            </Link>
            <p className="text-lg font-extrabold tracking-[-0.03em] [font-family:var(--font-farmasi-display)]">
              FAR<span className="text-[#c8a96e]" >MASI</span>
            </p>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
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
            href={FARMASI_BOUTIQUE_URL}
            target="_blank"
            rel="noreferrer"
            className="cta-dark inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c8a96e] hover:text-[#1f1a16]"
          >
            Acceder a la boutique
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/farmasi-pack-performance.svg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-95"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(20,16,12,0.2)_0%,rgba(20,16,12,0.48)_32%,rgba(20,16,12,0.78)_100%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_16%,rgba(200,169,110,0.42),transparent_22%),radial-gradient(circle_at_86%_24%,rgba(255,255,255,0.2),transparent_18%),radial-gradient(circle_at_18%_75%,rgba(77,135,105,0.3),transparent_26%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#4d8769]" />
            Nutrition · Performance · Dirigeants
          </div>

          <h1 className="mt-8 max-w-5xl text-[clamp(3rem,7vw,6.1rem)] leading-[0.92] tracking-[-0.05em] text-white [font-family:var(--font-farmasi-display)]">
            Ton corps sous-performe.
            <span className="mt-2 block text-[#f3d9a7] [font-family:var(--font-farmasi-serif)] italic">
              Ton business aussi.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/88 sm:text-lg">
            Les dirigeants qui reussissent ne laissent pas leur nutrition au hasard.
            Cette page pose une logique simple : mieux nourrir la machine humaine pour
            garder plus de clarte, d'energie et de constance dans les journees chargees.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#nutrishake"
              className="cta-dark inline-flex items-center justify-center gap-2 rounded-full bg-[#1f1a16] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c8a96e] hover:text-[#1f1a16] hover:shadow-[0_16px_32px_rgba(200,169,110,0.25)]"
            >
              Voir les solutions nutrition
              <ArrowIcon />
            </a>
            <a
              href="#glycemie"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/12 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/18"
            >
              Comprendre pourquoi
            </a>
          </div>

          <div className="mt-14 grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-white/12 bg-white/10 px-5 py-5 text-center shadow-[0_18px_36px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <p className="text-3xl font-extrabold tracking-[-0.04em] text-[#f3d9a7] [font-family:var(--font-farmasi-display)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/72">
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
              className="flex items-center gap-3 whitespace-nowrap text-xs font-bold uppercase tracking-[0.18em] text-[#867b70] [font-family:var(--font-farmasi-display)]"
            >
              <span className="text-[#c8a96e]">•</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Le vrai probleme</SectionEyebrow>
            <div className="mt-8 rounded-[1.6rem] border-l-4 border-[#c8a96e] bg-white px-6 py-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:px-8">
              <p className="text-2xl leading-snug text-[#2a231e] [font-family:var(--font-farmasi-serif)] italic sm:text-4xl">
                "Je mange n'importe quoi entre deux reunions. Le soir je suis a plat."
              </p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#70655a] sm:text-base">
                Ce constat revient souvent. Et pourtant, c'est ton corps qui porte
                tes decisions, ton attention et ton energie. Une machine mal
                alimentee n'est pas seulement fatiguee : elle est moins lucide,
                moins stable et moins fiable dans la duree.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {problems.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-[#eadcc8] bg-white p-6 shadow-[0_16px_35px_rgba(93,70,44,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(93,70,44,0.08)]"
              >
                <span className="inline-flex rounded-full bg-[#fbefe1] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#b86558]">
                  Probleme {item.icon}
                </span>
                <h3 className="mt-5 text-2xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#70655a]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="glycemie" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.02fr_minmax(0,0.98fr)] lg:items-center">
          <div className="rounded-[1.8rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
              Glycemie sur une journee
            </p>
            <div className="mt-6 rounded-[1.4rem] bg-[#f7f1e7] p-4">
              <div className="relative h-44 overflow-hidden rounded-[1rem] bg-white">
                <div className="absolute inset-x-0 top-[37%] h-14 bg-[rgba(77,135,105,0.09)]" />
                <svg viewBox="0 0 400 140" className="h-full w-full" fill="none">
                  <path
                    d="M0 96 C28 92 40 28 72 26 C92 24 104 74 132 82 C156 90 166 36 196 22 C220 12 240 70 268 88 C286 98 302 42 334 26 C356 16 372 76 400 86"
                    stroke="#d26b5c"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0 88 C36 84 78 72 120 70 C166 68 212 71 252 72 C300 73 344 70 400 71"
                    stroke="#4d8769"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-[#8a7f73]">
                {["7h", "10h", "13h", "16h", "19h", "22h"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-4 text-sm text-[#70655a]">
                <div className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d26b5c]" />
                  Alimentation standard
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4d8769]" />
                  Nutrition optimisee
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionEyebrow>Comprendre la glycemie</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.95] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Ton cerveau vit
              <br />
              au rythme de
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                ta glycemie
              </span>
            </h2>

            <div className="mt-8 space-y-3">
              {glycemieFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-r-xl border-l-2 border-[#c8a96e] bg-[#fffdfa] px-5 py-4 shadow-[0_12px_30px_rgba(93,70,44,0.04)]"
                >
                  <p className="text-sm leading-7 text-[#70655a]">{fact}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl bg-[#f6ede2] px-5 py-4">
              <span className="text-4xl font-extrabold tracking-[-0.04em] text-[#c8a96e] [font-family:var(--font-farmasi-display)]">
                -40%
              </span>
              <span className="text-sm leading-6 text-[#5f5449]">
                de capacite de concentration pendant un crash glycemique
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="nutrishake" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>La solution #1</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Le repas complet
              <br />
              en{" "}
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                3 minutes
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Si tu n'as pas le temps de dejeuner correctement, il te faut une
              option simple, reproductible et suffisamment complete pour eviter de
              payer la note plus tard dans la journee.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_minmax(0,1.08fr)] lg:items-center">
            <div className="rounded-[1.8rem] border border-[#eadcc8] bg-white p-6 text-center shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-8">
              <div className="mx-auto inline-flex rounded-full bg-[#dbe8de] px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#4d8769]">
                3 min chrono
              </div>

              <a
                href="https://www.fr.farmasi.com/marionjulien/product-list/search/nutrishake"
                target="_blank"
                rel="noreferrer"
                className="mt-8 block overflow-hidden rounded-[1.4rem] border border-[#eadcc8] bg-[#f8f1e7]"
              >
                <Image
                  src="/farmasi-nutrishake.svg"
                  alt="Farmasi NutriShake"
                  width={960}
                  height={720}
                  className="h-56 w-full object-cover transition duration-300 hover:scale-[1.02]"
                />
              </a>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-[#8a7f73]">
                Farmasi NutriShake
              </p>

              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-[#eadcc8]">
                {[
                  ["25g", "Proteines"],
                  ["6g", "Sucres"],
                  ["380", "Kcal"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#fffdfa] px-2 py-4">
                    <p className="text-2xl font-extrabold text-[#c8a96e] [font-family:var(--font-farmasi-display)]">
                      {value}
                    </p>
                    <p className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-[#8a7f73]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-[#8a7f73]">
                Visuel produit integre pour rendre l'offre plus parlante des le
                premier ecran.
              </p>
            </div>

            <div>
              <h3 className="text-3xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                Pourquoi un protocole repas rapide change vraiment la journee
              </h3>
              <p className="mt-4 text-base leading-8 text-[#70655a]">
                Sauter le dejeuner ne prouve rien. Dans beaucoup de cas, c'est meme
                une erreur metabolique qui detruit les heures utiles de fin de
                matinee et d'apres-midi.
              </p>

              <div className="mt-8 space-y-3">
                {nutrishakeBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 rounded-[1.2rem] border border-[#eadcc8] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(93,70,44,0.04)]"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#dbe8de] text-xs font-bold text-[#4d8769]">
                      ✓
                    </span>
                    <p className="text-sm leading-7 text-[#70655a]">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ProductCta
                  tag="Solution #1 pour dirigeants"
                  title="NutriShake Farmasi"
                  text="Repas complet, plus simple a deployer au quotidien, pense pour eviter les crashes et gagner un vrai temps mental."
                  image="/farmasi-nutrishake.svg"
                  productUrl="https://www.fr.farmasi.com/marionjulien/product-list/search/nutrishake"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aloe-glow" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>La solution #2</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Aloe Glow :
              <br />
              le produit bien-etre
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                signature
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Si tu veux mettre en avant un produit phare Farmasi different du
              NutriShake, Aloe Glow a une vraie place. Il permet de parler
              digestion, routine quotidienne, bien-etre interieur et image plus
              fraiche, sans brouiller ton message nutrition.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_minmax(0,0.98fr)] lg:items-start">
            <div className="rounded-[1.7rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
                Pourquoi Aloe Glow est interessant
              </p>

              <div className="mt-6 space-y-3">
                {aloeGlowBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-4 rounded-[1.2rem] border border-[#eadcc8] bg-white px-5 py-4 shadow-[0_12px_30px_rgba(93,70,44,0.04)]"
                  >
                    <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-[#dbe8de] text-xs font-bold text-[#4d8769]">
                      ✓
                    </span>
                    <p className="text-sm leading-7 text-[#70655a]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.7rem] border border-[#eadcc8] bg-white p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
                Ce que tu peux raconter autour du produit
              </p>

              <div className="mt-6 space-y-4">
                {aloeGlowHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 border-b border-[#efe3d5] pb-4 last:border-b-0"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-[#f6ede2] text-sm font-bold text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
                      {item.title.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-lg tracking-[-0.02em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[#70655a]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ProductCta
                  tag="Digestion · glow · routine quotidienne"
                  title="Aloe Glow Mangue Farmasi"
                  text="Un produit simple a integrer dans une routine quotidienne pour parler bien-etre interieur, digestion et image plus fraiche."
                  image="/farmasi-aloeglow.svg"
                  productUrl={ALOE_GLOW_URL}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>La solution #3</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Les proteines :
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                carburant
              </span>
              <br />
              de tes decisions
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Motivation, attention, clarte : une partie importante de ta chimie
              mentale se construit a partir d'acides amines. Une routine trop
              pauvre en proteines finit par se payer.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {proteinMetrics.map((metric) => (
              <article
                key={metric.value}
                className="rounded-[1.5rem] border border-[#eadcc8] bg-white px-5 py-6 text-center shadow-[0_14px_30px_rgba(93,70,44,0.05)]"
              >
                <p className="text-4xl font-extrabold tracking-[-0.04em] text-[#c8a96e] [font-family:var(--font-farmasi-display)]">
                  {metric.value}
                </p>
                <p className="mt-3 text-sm leading-7 text-[#70655a]">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[1.8rem] border border-[#eadcc8] bg-white p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-8">
            <h3 className="text-2xl tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
              Ta journee type sans proteines vs avec proteines
            </h3>

            <div className="mt-8 border-l border-[#e3d4bf] pl-5 sm:pl-7">
              {timeline.map((item, index) => (
                <div
                  key={`${item.time}-${index}`}
                  className="relative grid gap-3 py-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6"
                >
                  <span
                    className={`absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-[#faf6ef] ${
                      item.status === "bad" ? "bg-[#d26b5c]" : "bg-[#c8a96e]"
                    }`}
                  />
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a7f73]">
                    {item.time}
                  </p>
                  <div>
                    <h4 className="text-lg tracking-[-0.02em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-[#70655a]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ProductCta
                tag="Proteines · structure · energie"
                title="Pack Booster Performance"
                text="Une pile simple pour soutenir l'energie matinale, reduire les crashes et mieux tenir la journee."
                image="/farmasi-pack-performance.svg"
                productUrl="https://www.fr.farmasi.com/marionjulien/WishListSharedDetail/?wishListId=c876be40-fef9-4587-a016-c3e16047d91e&c=1234"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Packs</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Des packs prets a
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                deployer
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Si tu veux aller plus vite, ces packs regroupent les combinaisons les
              plus faciles a mettre en place selon ton besoin du moment.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {packs.map((pack) => (
              <article
                key={pack.title}
                className="overflow-hidden rounded-[1.6rem] border border-[#eadcc8] bg-white shadow-[0_16px_35px_rgba(93,70,44,0.05)] transition hover:-translate-y-1"
              >
                <a
                  href={pack.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden border-b border-[#eadcc8] bg-[#f8f1e7]"
                >
                  <Image
                    src={pack.image}
                    alt={pack.title}
                    width={960}
                    height={720}
                    className="h-52 w-full object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-6">
                  <span className="inline-flex rounded-full bg-[#f6ede2] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#9e7a45]">
                    {pack.accent}
                  </span>
                  <h3 className="mt-4 text-2xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                    {pack.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#70655a]">
                    {pack.description}
                  </p>
                  <p className="mt-4 text-sm font-medium text-[#5f5449]">
                    Inclus : {pack.includes}
                  </p>
                  <a
                    href={pack.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9e7a45] transition hover:text-[#7f5f35]"
                  >
                    Voir le pack
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>La solution #4</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Omega-3 et vitamines :
              <br />
              l'infrastructure{" "}
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                invisible
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              On les remarque moins vite, mais ils forment le socle. Sans
              fondations metaboliques correctes, le reste tient beaucoup moins bien
              dans le temps.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {omegaCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.7rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ede2] text-sm font-bold text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#8a7f73]">
                      {card.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {card.effects.map((effect) => (
                    <div key={effect.label}>
                      <div className="flex items-center justify-between gap-4 text-sm text-[#70655a]">
                        <span>{effect.label}</span>
                        <span className="font-semibold text-[#9e7a45]">
                          {effect.value}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#efe6da]">
                        <div
                          className="h-full rounded-full bg-[#c8a96e]"
                          style={{ width: `${effect.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 text-sm leading-7 text-[#70655a]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <ProductCta
              tag="Fondations · recuperation · immunite"
              title="Omega-3 + Multivitamines Farmasi"
              text="Une base quotidienne simple pour soutenir systeme nerveux, energie, humeur et recuperation."
              image="/farmasi-omega-vit.svg"
              productUrl={FARMASI_BOUTIQUE_URL}
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Produits complementaires</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Cafe, the, AloeGlow
              <br />
              et{" "}
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                rehydratation
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Au-dela des gros piliers nutrition, certains produits jouent un role
              plus quotidien : rituels du matin, pause plus propre, hydratation ou
              soutien du confort digestif et de la regularite.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {dailyProducts.map((product) => (
              <article
                key={product.title}
                className="overflow-hidden rounded-[1.6rem] border border-[#eadcc8] bg-white shadow-[0_16px_35px_rgba(93,70,44,0.05)]"
              >
                <div className="grid gap-0 md:grid-cols-[15rem_minmax(0,1fr)]">
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden border-b border-[#eadcc8] bg-[#f8f1e7] md:border-b-0 md:border-r"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={960}
                      height={720}
                      className="h-full min-h-[16rem] w-full object-cover transition duration-300 hover:scale-[1.02]"
                    />
                  </a>

                  <div className="p-6">
                    <h3 className="text-3xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                      {product.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#70655a]">
                      {product.text}
                    </p>

                    <div className="mt-5 space-y-2">
                      {product.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex gap-3 rounded-[1rem] bg-[#f8f1e7] px-4 py-3 text-sm text-[#5f5449]"
                        >
                          <span className="mt-0.5 text-[#4d8769]">✓</span>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={product.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9e7a45] transition hover:text-[#7f5f35]"
                    >
                      Voir le produit
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-7 text-[#8a7f73]">
            Ces produits s'inscrivent dans une logique de routine et de confort
            quotidien. Ils ne remplacent pas une alimentation equilibree ni un
            avis professionnel si tu as une situation de sante particuliere.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>L'image du dirigeant</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              L'apparence fait
              <br />
              partie de{" "}
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                ton leadership
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Pas besoin d'une routine lourde. Quelques produits bien choisis
              suffisent a renvoyer une image plus nette, plus fraiche et plus
              confiante.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {beautyCards.map((card, index) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[1.5rem] border border-[#eadcc8] bg-white shadow-[0_14px_30px_rgba(93,70,44,0.05)] transition hover:-translate-y-1"
              >
                <a
                  href={card.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={960}
                    height={720}
                    className="h-48 w-full border-b border-[#eadcc8] bg-[#f8f1e7] object-cover transition duration-300 hover:scale-[1.02]"
                  />
                </a>

                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6ede2] text-sm font-bold text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
                    {`0${index + 1}`}
                  </div>
                  <h3 className="mt-5 text-2xl tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#70655a]">
                    {card.text}
                  </p>
                  <a
                    href={card.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9e7a45] transition hover:text-[#7f5f35]"
                  >
                    Voir la selection
                    <ArrowIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="routine" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-3xl">
            <SectionEyebrow>Le protocole complet</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              La routine du dirigeant
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                haute performance
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#70655a]">
              Tous les produits, au bon moment et dans un ordre simple. L'idee
              n'est pas d'en faire plus, mais d'executer mieux ce qui compte.
            </p>
          </div>

          <div className="mt-12 border-l border-[#e3d4bf] pl-5 sm:pl-8">
            {routineBlocks.map((block) => (
              <div
                key={block.time}
                className="relative grid gap-3 py-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8"
              >
                <span className="absolute -left-[1.95rem] top-8 h-3.5 w-3.5 rounded-full border-4 border-[#faf6ef] bg-[#c8a96e]" />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#9e7a45]">
                  {block.time}
                </p>
                <div className="rounded-[1.4rem] border border-[#eadcc8] bg-[#fffdfa] px-5 py-5 shadow-[0_14px_30px_rgba(93,70,44,0.04)]">
                  <h3 className="text-xl tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#70655a]">
                    {block.text}
                  </p>
                  <span className="mt-4 inline-flex rounded-full bg-[#f6ede2] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#9e7a45]">
                    {block.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="max-w-2xl">
            <SectionEyebrow>Ils ont change leur routine</SectionEyebrow>
            <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)] sm:text-5xl">
              Des dirigeants qui
              <br />
              <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
                temoignent
              </span>
            </h2>
          </div>

          <div className="mt-12">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#1f1a16] px-4 py-24 text-center text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(200,169,110,0.15),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(77,135,105,0.12),transparent_24%)]" />
        <div className="relative mx-auto w-full max-w-4xl">
          <SectionEyebrow>Passe a l'action</SectionEyebrow>
          <h2 className="mt-5 text-4xl leading-[0.92] tracking-[-0.05em] text-white [font-family:var(--font-farmasi-display)] sm:text-6xl">
            Ton prochain niveau
            <br />
            <span className="text-[#c8a96e] [font-family:var(--font-farmasi-serif)] italic">
              commence par ta nutrition
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68">
            Tu optimises deja strategie, equipes et process. Le moment est venu
            d'optimiser ce qui tient tout le reste : toi, ton energie et la
            qualite de tes decisions.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={FARMASI_BOUTIQUE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a96e] px-6 py-4 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e7d3ae]"
            >
              Acceder a la boutique Farmasi
              <ArrowIcon />
            </a>
            <a
              href="#routine"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              Revoir le protocole
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm text-white/82 transition hover:border-white/22 hover:bg-white/12"
            >
              Instagram
            </a>
            <a
              href={CONTACT_EMAIL}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm text-white/82 transition hover:border-white/22 hover:bg-white/12"
            >
              Email
            </a>
            <a
              href={FARMASI_BOUTIQUE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-5 py-3 text-sm text-white/82 transition hover:border-white/22 hover:bg-white/12"
            >
              Boutique
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm text-white/56">
            {guarantees.map((item) => (
              <div key={item} className="inline-flex items-center gap-2">
                <span className="text-[#82b194]">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center justify-between gap-3 border-t border-black/6 bg-[#faf6ef] px-4 py-8 text-center sm:px-6 lg:flex-row lg:px-8 lg:text-left">
        <p className="text-base font-extrabold tracking-[-0.03em] [font-family:var(--font-farmasi-display)]">
          FAR<span className="text-[#c8a96e]">MASI</span>
        </p>
        <p className="text-sm text-[#7d7268]">
          Conseils Farmasi autour de la nutrition, de la routine et de l'energie
          des dirigeants.
        </p>
      </footer>
    </main>
  );
}
