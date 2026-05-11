"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";
import styles from "./ProgramsShowcase.module.css";

const CATEGORIES = [
  { id: "fitness",   label: "Fitness" },
  { id: "nutrition", label: "Nutrition" },
  { id: "workshop",  label: "Workshops" },
];

const PROGRAM_IMAGES: Record<string, string> = {
  "fitness-trainer-certification": "/images/fitness-certification.png",
  "fat-loss-program":              "/images/fat-loss-program.png",
  "strength-foundations":          "/images/strength-foundations.png",
  "nutrition-mastery":             "/images/nutrition-mastery.svg",
  "gut-health-reset":              "/images/gut-health-reset.svg",
  "nutrition-masterclass":         "/images/nutrition-masterclass.svg",
  "fat-loss-workshop":             "/images/fat-loss-workshop.svg",
  "mindset-performance":           "/images/mindset-performance.svg",
};

export default function ProgramsShowcase() {
  const [catIndex, setCatIndex]   = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const activeCategory = CATEGORIES[catIndex].id;
  const filtered = programs.filter((p) => p.category === activeCategory);

  /* scroll track so the active card is fully visible */
  const scrollToCard = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(`.${styles.card}`);
    const target = cards[idx];
    if (target) {
      track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    scrollToCard(cardIndex);
  }, [cardIndex, scrollToCard]);

  /* reset to first card whenever category changes */
  useEffect(() => {
    setCardIndex(0);
    if (trackRef.current) trackRef.current.scrollLeft = 0;
  }, [catIndex]);

  /* RIGHT arrow: next card → if none, next category tab */
  const goRight = () => {
    const isLastCard = cardIndex >= filtered.length - 1;
    const isLastCat  = catIndex  >= CATEGORIES.length - 1;
    if (!isLastCard) {
      setCardIndex((i) => i + 1);
    } else if (!isLastCat) {
      setCatIndex((c) => c + 1);
      // cardIndex reset by useEffect
    }
  };

  /* LEFT arrow: prev card → if none, last card of previous category */
  const goLeft = () => {
    if (cardIndex > 0) {
      setCardIndex((i) => i - 1);
    } else if (catIndex > 0) {
      const prevCatId = CATEGORIES[catIndex - 1].id;
      const prevFiltered = programs.filter((p) => p.category === prevCatId);
      setCatIndex((c) => c - 1);
      // after state updates the filtered list will be prevFiltered — jump to last card
      setTimeout(() => setCardIndex(prevFiltered.length - 1), 0);
    }
  };

  const atStart = catIndex === 0 && cardIndex === 0;
  const atEnd   = catIndex === CATEGORIES.length - 1 && cardIndex === filtered.length - 1;

  return (
    <section className={styles.showcase} aria-labelledby="programs-showcase-heading">

      {/* HEADING */}
      <div className={styles.header}>
        <span className={styles.label}>What we offer</span>
        <h2 id="programs-showcase-heading" className={styles.heading}>OUR PROGRAMS</h2>
        <p className={styles.sub}>Science-backed programs designed by Shraddha Gadit — choose your path.</p>
      </div>

      {/* CATEGORY STRIP */}
      <div className={styles.tabs} role="tablist" aria-label="Program categories">
        {CATEGORIES.map((cat, i) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={catIndex === i}
            className={`${styles.tab} ${catIndex === i ? styles.tabActive : ""}`}
            onClick={() => setCatIndex(i)}
          >
            {cat.label}
            {catIndex === i && <span className={styles.tabLine} />}
          </button>
        ))}
      </div>

      {/* SLIDER ROW */}
      <div className={styles.sliderWrap}>

        <button
          className={`${styles.arrow} ${atStart ? styles.arrowDim : ""}`}
          onClick={goLeft}
          disabled={atStart}
          aria-label="Previous program"
        >‹</button>

        <div id="programs-slider" role="tabpanel" className={styles.track} ref={trackRef}>
          {filtered.map((p, i) => (
            <article key={p.slug} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  src={PROGRAM_IMAGES[p.slug] ?? "/images/programs-bg.jpg"}
                  alt={p.title}
                  fill
                  sizes="260px"
                  style={{ objectFit: "cover" }}
                  className={styles.img}
                />
                <div
                  className={styles.imgTint}
                  style={{ background: `linear-gradient(170deg, ${p.color}18 0%, rgba(10,10,15,0.72) 100%)` }}
                />
                <span className={styles.badge} style={{ color: p.color, borderColor: `${p.color}55` }}>
                  {p.tag}
                </span>
              </div>

              <div className={styles.body}>
                <h3 className={styles.title}>{p.title}</h3>
                <Link
                  href={`/programs/${p.slug}`}
                  className={styles.cta}
                  style={{ "--accent": p.color } as React.CSSProperties}
                  aria-label={`Learn more about ${p.title}`}
                >
                  <span>Learn More</span>
                  <span className={styles.ctaArrow}>→</span>
                </Link>
              </div>

              <div
                className={styles.glow}
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${p.color}28 0%, transparent 70%)` }}
              />
            </article>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${atEnd ? styles.arrowDim : ""}`}
          onClick={goRight}
          disabled={atEnd}
          aria-label="Next program"
        >›</button>

      </div>

      {/* DOT INDICATORS */}
      <div className={styles.dots} aria-hidden="true">
        {filtered.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === cardIndex ? styles.dotActive : ""}`}
            onClick={() => setCardIndex(i)}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
