import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Progressive Pulse | Julien Veyrac",
  description:
    "Progressive Pulse : une solution de suivi client pensee pour rassurer, structurer et fluidifier l'avancement d'un dossier.",
};

const points = [
  "Donner plus de visibilite sur l'avancement reel d'un dossier",
  "Rassurer les clients sans multiplier les messages manuels",
  "Structurer un parcours plus pro et plus lisible",
  "Creer une experience de suivi plus claire et plus fluide",
];

const sections = [
  {
    title: "Suivi client plus clair",
    text:
      "Le client voit ou il en est, ce qui a ete fait, ce qui arrive ensuite et ce qui reste a valider. Cela reduit les zones floues et evite les relances inutiles.",
  },
  {
    title: "Image plus professionnelle",
    text:
      "Quand le suivi est structure, l'experience globale change. Le dossier parait mieux tenu, plus serieux, plus rassurant et plus premium, meme sans complexifier l'outil.",
  },
  {
    title: "Moins de charge mentale",
    text:
      "Au lieu de repeter les memes informations a la main, on cree un cadre simple qui fluidifie les echanges et fait gagner du temps des deux cotes.",
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
    <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
      <span className="h-px w-7 bg-[#c8a96e]" />
      {children}
    </p>
  );
}

export default function ProgressivePulsePage() {
  return (
    <main className="min-h-screen bg-[#faf6ef] text-[#1f1a16]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/6 bg-[rgba(250,246,239,0.9)] backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm font-medium text-[#7d7268] transition hover:text-[#1f1a16]">
            Retour a l'accueil
          </Link>
          <a
            href="mailto:contact@picqtures.fr?subject=Progressive%20Pulse"
            className="cta-dark inline-flex items-center gap-2 rounded-full bg-[#1f1a16] px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c8a96e] hover:text-[#1f1a16]"
          >
            En parler
            <ArrowIcon />
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(200,169,110,0.16),transparent_28%),radial-gradient(circle_at_82%_30%,rgba(77,135,105,0.1),transparent_24%),linear-gradient(180deg,#fffdf9_0%,#faf6ef_45%,#f7f0e5_100%)]" />

        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-[1.9rem] border border-[#eadcc8] bg-white/85 px-6 py-8 shadow-[0_22px_48px_rgba(93,70,44,0.06)] sm:px-8 sm:py-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:items-end">
              <div>
                <SectionEyebrow>Progressive Pulse</SectionEyebrow>
                <h1 className="mt-5 max-w-4xl text-[clamp(2.8rem,6vw,5rem)] leading-[0.94] tracking-[-0.05em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                  Une experience de suivi client plus fluide, plus rassurante et plus professionnelle.
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-[#70655a] sm:text-lg">
                  Progressive Pulse a ete pense pour montrer l'avancement d'un dossier de
                  maniere simple, lisible et utile. L'objectif n'est pas d'ajouter une couche
                  d'outil en plus, mais de rendre la relation client plus claire.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#eadcc8] bg-[#fffdfa] p-5 shadow-[0_16px_35px_rgba(93,70,44,0.05)]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
                  Pour qui
                </p>
                <div className="mt-4 space-y-3">
                  {["Agences", "Prestataires de service", "Cabinets", "Independants structures"].map((item) => (
                    <div key={item} className="rounded-[1rem] bg-[#f8f1e7] px-4 py-3 text-sm text-[#3a322c]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[0.92fr_minmax(0,1.08fr)]">
          <div className="rounded-[1.7rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-7">
            <SectionEyebrow>Benefices</SectionEyebrow>
            <div className="mt-6 space-y-3">
              {points.map((point) => (
                <div key={point} className="rounded-[1rem] border border-[#eadcc8] bg-white px-4 py-4 text-sm leading-7 text-[#70655a]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {sections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-[1.7rem] border border-[#eadcc8] bg-white p-6 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6ede2] text-sm font-bold text-[#9e7a45] [font-family:var(--font-farmasi-display)]">
                  {`0${index + 1}`}
                </div>
                <h2 className="mt-5 text-3xl leading-tight tracking-[-0.03em] text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-[#70655a]">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto w-full max-w-6xl rounded-[1.8rem] bg-[#1f1a16] px-6 py-10 text-white shadow-[0_22px_55px_rgba(31,26,22,0.16)] sm:px-8 sm:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionEyebrow>Etape suivante</SectionEyebrow>
              <h2 className="mt-5 text-4xl leading-[0.96] tracking-[-0.05em] text-white [font-family:var(--font-farmasi-display)] sm:text-5xl">
                Tu veux voir comment l'adapter a ton activite ?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                On peut partir de ton fonctionnement actuel et voir comment structurer un
                suivi plus propre, plus rassurant et plus simple a piloter.
              </p>
            </div>

            <a
              href="mailto:contact@picqtures.fr?subject=Progressive%20Pulse"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c8a96e] px-5 py-3 text-sm font-semibold text-[#1f1a16] transition hover:-translate-y-0.5 hover:bg-[#e7d3ae]"
            >
              Me contacter
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
