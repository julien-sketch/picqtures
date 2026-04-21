"use client";

import { useState } from "react";

type Testimonial = {
  initials: string;
  author: string;
  role: string;
  quote: string;
  color: string;
};

function Arrow({
  direction,
}: {
  direction: "left" | "right";
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 14 14"
      className={`h-3.5 w-3.5 ${direction === "left" ? "rotate-180" : ""}`}
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

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  const visibleItems = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <div className="rounded-[1.8rem] border border-[#eadcc8] bg-white p-5 shadow-[0_18px_40px_rgba(93,70,44,0.05)] sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#8a7f73] [font-family:var(--font-farmasi-display)]">
            Avis clients
          </p>
          <p className="mt-2 text-sm text-[#70655a]">
            {`${testimonials.length} retours differents a faire defiler`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={previous}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ded1bf] bg-[#fffdfa] text-[#1f1a16] transition hover:bg-[#f6ede2]"
            aria-label="Avis precedent"
          >
            <Arrow direction="left" />
          </button>
          <button
            type="button"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ded1bf] bg-[#fffdfa] text-[#1f1a16] transition hover:bg-[#f6ede2]"
            aria-label="Avis suivant"
          >
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        {visibleItems.map((item) => (
          <article
            key={`${item.author}-${item.quote}`}
            className="rounded-[1.5rem] border border-[#eadcc8] bg-[#fffdfa] p-6 shadow-[0_12px_30px_rgba(93,70,44,0.04)]"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: item.color }}
              >
                {item.initials}
              </div>
              <div>
                <p className="text-base font-bold text-[#1f1a16] [font-family:var(--font-farmasi-display)]">
                  {item.author}
                </p>
                <p className="text-sm text-[#8a7f73]">{item.role}</p>
              </div>
            </div>
            <p className="mt-5 text-sm tracking-[0.18em] text-[#c8a96e]">★★★★★</p>
            <p className="mt-4 text-sm leading-7 text-[#70655a] italic">"{item.quote}"</p>
          </article>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {testimonials.map((item, index) => (
          <button
            key={item.author}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex ? "w-8 bg-[#c8a96e]" : "w-2.5 bg-[#d9c8b1]"
            }`}
            aria-label={`Aller a l'avis ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
