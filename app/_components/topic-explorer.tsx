"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { topicLinks } from "../_lib/topic-links";
import { ServiceIcon } from "./service-icon";
import styles from "../home-carousel.module.css";

const INITIAL = 22;
const modulo = (value: number, count: number) => ((value % count) + count) % count;

export function TopicExplorer({ topics }: { topics: typeof topicLinks }) {
  const stage = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLLIElement>(null);
  const drag = useRef<{ x: number; y: number; position: number; moved: boolean; step: number } | null>(null);
  const suppressClick = useRef(false);
  const count = topics.length;
  const [position, setPosition] = useState(Math.min(INITIAL, count - 1));
  const [radius, setRadius] = useState(1500);
  const [dragging, setDragging] = useState(false);
  const active = count ? modulo(Math.round(position), count) : 0;
  const angle = count ? 360 / count : 0;

  useEffect(() => {
    const node = stage.current;
    if (!node || !count) return;
    function measure() {
      const width = card.current?.offsetWidth ?? 320;
      const gap = Math.min(32, node!.clientWidth * .02);
      setRadius((width + gap) / (2 * Math.tan(Math.PI / Math.max(3, count))));
    }
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(node);
    return () => resize.disconnect();
  }, [count]);

  function move(direction: number) { setPosition(current => Math.round(current) + direction); }
  function settle() {
    drag.current = null;
    setDragging(false);
    setPosition(current => Math.round(current));
  }

  if (!count) return null;
  return <div className={styles.explorer}>
    <div ref={stage} id="services-carousel" className={styles.ringStage} tabIndex={0} role="region" aria-roledescription="carrousel circulaire" aria-label={`${count} services — faites tourner le carrousel`} style={{ "--radius": `${radius}px` } as CSSProperties} onKeyDown={event => {
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") { event.preventDefault(); move(event.key === "ArrowRight" ? 1 : -1); }
      if (event.key === "Home") { event.preventDefault(); setPosition(current => current - modulo(Math.round(current), count)); }
      if (event.key === "End") { event.preventDefault(); setPosition(current => current + count - 1 - modulo(Math.round(current), count)); }
    }} onPointerDown={event => {
      if (event.button !== 0 || !event.isPrimary) return;
      suppressClick.current = false;
      drag.current = { x: event.clientX, y: event.clientY, position, moved: false, step: (card.current?.offsetWidth ?? 320) * 1.05 };
    }} onPointerMove={event => {
      const state = drag.current;
      if (!state) return;
      const delta = event.clientX - state.x;
      if (!state.moved && Math.abs(event.clientY - state.y) > Math.abs(delta) + 8) { settle(); return; }
      if (Math.abs(delta) > 6) {
        state.moved = true;
        setDragging(true);
        event.currentTarget.setPointerCapture(event.pointerId);
      }
      if (state.moved) { suppressClick.current = true; setPosition(state.position - delta / state.step); }
    }} onPointerUp={event => {
      if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
      settle();
    }} onPointerCancel={settle} onClickCapture={event => {
      if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; }
    }} onDragStart={event => event.preventDefault()}>
      <ol className={styles.ring} data-dragging={dragging} style={{ transform: `translateZ(${-radius}px) rotateY(${-position * angle}deg)` }}>
        {topics.map((topic, index) => {
          const distance = modulo(index - position + count / 2, count) - count / 2;
          const visible = Math.abs(distance) < 3.3;
          const current = index === active;
          return <li key={topic.slug} ref={index === 0 ? card : undefined} className={styles.ringSlot} data-current={current} aria-hidden={!visible || undefined} style={{ transform: `rotateY(${index * angle}deg) translateZ(${radius}px) scale(${1 - Math.min(Math.abs(distance), 3) * .1})`, opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}>
            <Link className={styles.ringCard} href={topic.href} prefetch={false} tabIndex={current ? 0 : -1} data-tone={index % 3} onClick={event => {
              if (!current) { event.preventDefault(); setPosition(value => value + distance); }
            }}>
              <ServiceIcon index={index} className={styles.serviceIcon} />
              <div><h2>{topic.title}</h2><span className={styles.cardCount}>{String(index + 1).padStart(2, "0")} / {count}</span></div>
            </Link>
          </li>;
        })}
      </ol>
    </div>
    <div className={styles.toolbar}>
      <nav className={styles.controls} aria-label="Parcourir les services">
        <button onClick={() => move(-1)} aria-label="Service précédent" aria-controls="services-carousel">←</button>
        <Link className={styles.discover} href={topics[active].href} prefetch={false}>Découvrir ce service <span aria-hidden="true">↗</span></Link>
        <button onClick={() => move(1)} aria-label="Service suivant" aria-controls="services-carousel">→</button>
      </nav>
    </div>
    <p className={styles.srOnly} aria-live={dragging ? "off" : "polite"} aria-atomic="true">{topics[active].title}, service {active + 1} sur {count}</p>
  </div>;
}
