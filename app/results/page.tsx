// ─── SEO CHANGE: Added page metadata ─────────────────────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { testimonials } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Client Results & Transformations",
  description:
    "1000+ real fitness and nutrition transformations by KPF Academy members. 94% goal achievement rate. 4.9-star average rating. See what's possible with Shraddha Gadit.",
  alternates: { canonical: "https://www.kineticprofitness.com/results" },
  openGraph: {
    url: "https://www.kineticprofitness.com/results",
    title: "Client Results & Transformations | KPF Academy",
    description: "1000+ real transformations. 94% goal achievement. See what's possible.",
  },
};

export default function ResultsPage() {
  return (
    <>
      <div className="page-hero">
        {/* Full-bleed hero background */}
        <div className={styles.heroBgImage}>
          <Image src="/images/results-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div className={styles.heroBgOverlay} />
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Transformations</span>
          <h1 className={styles.heroTitle}>
            REAL PEOPLE.<br /><span className={styles.gold}>REAL RESULTS.</span>
          </h1>
          <p className={styles.heroSub}>
            1000+ transformations. Every single one built on science, consistency and Shraddha&apos;s proven approach.
          </p>
        </div>
      </div>

      {/* STATS */}
      <section className={styles.statsRow} aria-label="Transformation stats">
        {[["1000+", "Transformations"], ["17+", "Years Experience"], ["94%", "Goal Achievement"], ["4.9★", "Average Rating"]].map(([v, l]) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statNum}>{v}</span>
            <span className={styles.statLabel}>{l}</span>
          </div>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className={styles.section} aria-labelledby="testimonials-heading">
        <span className="section-label">Client Stories</span>
        <h2 id="testimonials-heading" className={styles.sectionTitle}>WHAT MEMBERS SAY</h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <figure key={i} className={`${styles.card} ${i === 0 ? styles.featured : ""}`}>
              <div className={styles.stars} aria-label={`${t.rating} out of 5 stars`}>{"★".repeat(t.rating)}</div>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={styles.attr}>
                <div>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.location}>{t.location}</span>
                </div>
                <div className={styles.right}>
                  <span className={styles.program}>{t.program}</span>
                  <span className={styles.result}>{t.result}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PHOTO GALLERY PLACEHOLDER */}
      <section className={styles.gallerySection} aria-labelledby="gallery-heading">
        <span className="section-label">Before &amp; After</span>
        <h2 id="gallery-heading" className={styles.galleryTitle}>TRANSFORMATION GALLERY</h2>
        <p className={styles.gallerySub}>Real transformation photos — coming soon. Follow us on Instagram to see the latest results.</p>
        <div className={styles.galleryGrid} aria-label="Transformation photo placeholders">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={styles.galleryItem}>
              <span className={styles.galleryPlaceholder}>Photo {i + 1}</span>
              <div className={styles.galleryOverlay}>
                <span>Transformation Story</span>
                <span>Coming Soon</span>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.instagram.com/kineticprofitnessacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ marginTop: "2.5rem", display: "inline-block" }}
        >
          View on Instagram →
        </a>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="results-cta-heading">
        <h2 id="results-cta-heading" className={styles.ctaTitle}>YOUR TRANSFORMATION STARTS HERE</h2>
        <p className={styles.ctaSub}>Join 1000+ people who have already changed their lives with KPF Academy.</p>
        <div className={styles.ctaActions}>
          <Link href="/programs" className="btn-gold">Explore Programs</Link>
          <Link href="/enroll/consultation" className="btn-outline">Book Free Consultation →</Link>
        </div>
      </section>
    </>
  );
}
