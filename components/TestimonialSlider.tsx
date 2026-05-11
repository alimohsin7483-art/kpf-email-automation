"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { testimonials } from "@/lib/data";
import styles from "./TestimonialSlider.module.css";

const INTERVAL = 5000; // ms per slide

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const next = useCallback(() =>
    setActive((i) => (i + 1) % total), [total]);

  const prev = () =>
    setActive((i) => (i - 1 + total) % total);

  /* auto-advance */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  return (
    <section
      className={styles.section}
      aria-label="Client testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* decorative quote mark */}
      <div className={styles.deco} aria-hidden="true">&ldquo;</div>

      {/* slides */}
      <div className={styles.stageWrap}>
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === active ? styles.slideActive : ""} ${
              i === (active - 1 + total) % total ? styles.slidePrev : ""
            }`}
            aria-hidden={i !== active}
          >
            <figure className={styles.card}>
              {/* stars */}
              <div className={styles.stars} aria-label="5 stars">
                {"★★★★★"}
              </div>
              <blockquote className={styles.quote}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.author}>
                <span className={styles.name}>{t.name}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.location}>{t.location}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.result}>{t.result}</span>
              </figcaption>
              <div className={styles.program}>{t.program}</div>
            </figure>
          </div>
        ))}
      </div>

      {/* controls */}
      <div className={styles.controls}>
        <button className={styles.arrow} onClick={prev} aria-label="Previous testimonial">‹</button>
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={next} aria-label="Next testimonial">›</button>
      </div>

      {/* progress bar */}
      <div className={styles.progressWrap} aria-hidden="true">
        <div
          key={active} /* key forces CSS animation restart on slide change */
          className={`${styles.progress} ${paused ? styles.progressPaused : ""}`}
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      <Link
        href="/results"
        className={styles.resultsLink}
      >
        See All Results →
      </Link>
    </section>
  );
}
