"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./CtaBgSlider.module.css";

const BG_IMAGES = [
  { src: "/images/fitness-certification.png",   alt: "Fitness programs" },
  { src: "/images/fat-loss-program.png",  alt: "Nutrition programs" },
  { src: "/images/strength-foundations.png",   alt: "Workshops" },
  ];

const INTERVAL = 4000;

export default function CtaBgSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setActive((i) => (i + 1) % BG_IMAGES.length),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="cta-heading">

      {/* ── BACKGROUND SLIDESHOW ─────────────────────────────────────────── */}
      <div className={styles.bgWrap} aria-hidden="true">
        {BG_IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`${styles.bgSlide} ${i === active ? styles.bgActive : ""}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={i === 0}
            />
          </div>
        ))}
        {/* dark overlay — keeps text legible regardless of bg */}
        <div className={styles.overlay} />
        {/* radial gold glow in centre */}
        <div className={styles.glow} />
      </div>

      {/* ── CONTENT ─────────────────────────────────────────────────────── */}
      <div className={styles.content}>
        {/* KPF watermark */}
        <div className={styles.watermark} aria-hidden="true">KPF</div>

        <span className="section-label" style={{ textAlign: "center", display: "block" }}>
          Start today
        </span>
        <h2 id="cta-heading" className={styles.title}>READY TO TRANSFORM?</h2>
        <p className={styles.sub}>
          Join 1000+ people who&apos;ve transformed their bodies and minds with KPF Academy.
        </p>
        <div className={styles.actions}>
          <Link href="/pricing" className="btn-gold">View Pricing</Link>
          <Link href="/programs" className="btn-outline">Browse Programs</Link>
        </div>
      </div>

      {/* ── SLIDE DOTS ──────────────────────────────────────────────────── */}
      <div className={styles.dots} aria-hidden="true">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Background slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
