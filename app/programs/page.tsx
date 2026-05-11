// ─── SEO CHANGE: Added page-level metadata export ───────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Fitness & Nutrition Programs",
  description:
    "Explore KPF Academy's science-backed programs — Nutrition Mastery and Fitness Trainer Certification. Designed by Shraddha Gadit with 17+ years experience. Join 1000+ transformations.",
  alternates: { canonical: "https://www.kineticprofitness.com/programs" },
  openGraph: {
    url: "https://www.kineticprofitness.com/programs",
    title: "Fitness & Nutrition Programs | KPF Academy",
    description:
      "Science-backed fitness & nutrition programs. Nutrition Mastery from ₹7,999. Fitness Trainer Certification from ₹14,999.",
  },
};

// ─── JSON-LD: ItemList of Courses ─────────────────────────────────────────────
const coursesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "KPF Academy Programs",
  itemListElement: programs.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Course",
      name: p.title,
      description: p.description,
      url: `https://www.kineticprofitness.com/programs/${p.slug}`,
      provider: {
        "@type": "Organization",
        name: "KPF Academy",
        url: "https://www.kineticprofitness.com",
      },
      offers: {
        "@type": "Offer",
        price: p.price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    },
  })),
};

// Image map — each slug → its SVG/image in /public/images/
const programImages: Record<string, string> = {
  "fitness-trainer-certification": "/images/fitness-certification.png",
  "fat-loss-program":              "/images/fat-loss-program.png",
  "strength-foundations":          "/images/strength-foundations.png",
  "nutrition-mastery":             "/images/nutrition-mastery.svg",
  "gut-health-reset":              "/images/gut-health-reset.svg",
  "nutrition-masterclass":         "/images/nutrition-masterclass.svg",
  "fat-loss-workshop":             "/images/fat-loss-workshop.svg",
  "mindset-performance":           "/images/mindset-performance.svg",
};

export default function ProgramsPage() {
  return (
    <>
      {/* ─── JSON-LD: Course list ───────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesListSchema) }}
      />

      {/* ── HERO BANNER ─────────────────────────────────────────────────── */}
      <div className={`page-hero ${styles.hero}`}>
        {/* Full-bleed background image */}
        <div className={styles.heroBgImage}>
          <Image
            src="/images/programs-bg.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
        <div className={styles.heroBgOverlay} />
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">All Programs</span>
          <h1 className={styles.heroTitle}>
            TRANSFORM WITH<br /><span className={styles.gold}>THE RIGHT PROGRAM</span>
          </h1>
          <p className={styles.heroSub}>
            Science-backed programs designed by Shraddha Gadit with 17 years of expertise. Each one built to deliver real, lasting results.
          </p>
        </div>
      </div>

      {/* ── PROGRAM CARDS ───────────────────────────────────────────────── */}
      <section className={styles.section} aria-labelledby="programs-list-heading" style={{ padding: "5rem 3rem" }}>
        <h2 id="programs-list-heading" className="sr-only">Available Programs</h2>
        <div className={styles.grid}>
          {programs.map((p) => {
            const imgSrc = programImages[p.slug] ?? null;
            return (
              <Link
                href={`/programs/${p.slug}`}
                key={p.slug}
                className={styles.card}
                aria-label={`${p.title} — ${p.duration}, ${p.level}, ₹${p.price.toLocaleString()}`}
              >
                {/* ── IMAGE AREA ─────────────────────────────────────────── */}
                <div className={styles.cardImageWrap}>
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={p.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 480px"
                      style={{ objectFit: "cover" }}
                      className={styles.cardImg}
                    />
                  ) : (
                    /* fallback: colour gradient + emoji */
                    <div
                      className={styles.cardImageFallback}
                      style={{ background: `linear-gradient(135deg, ${p.color}22 0%, ${p.color}11 100%)` }}
                    >
                      <span className={styles.cardImageIcon} aria-hidden="true">{p.icon}</span>
                    </div>
                  )}
                  {/* gradient fade from image into card body */}
                  <div
                    className={styles.cardImageOverlay}
                    style={{ background: `linear-gradient(to bottom, transparent 40%, var(--card) 100%)` }}
                  />
                  <span
                    className={styles.tagOverlay}
                    style={{ borderColor: `${p.color}55`, color: p.color }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* ── CARD BODY ──────────────────────────────────────────── */}
                <div className={styles.cardBody}>
                  <div className={styles.cardBorderAccent} style={{ background: p.color }} />
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                  <p className={styles.cardSub}>{p.subtitle}</p>
                  <p className={styles.cardDesc}>{p.description.slice(0, 130)}...</p>
                  <div className={styles.cardMeta}>
                    <span className={styles.metaItem}>⏱ {p.duration}</span>
                    <span className={styles.metaItem}>📊 {p.level}</span>
                  </div>
                  <div className={styles.cardFooter}>
                    <div>
                      <span className={styles.price}>₹{p.price.toLocaleString()}</span>
                      <span className={styles.originalPrice}>₹{p.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className={styles.cta} style={{ color: p.color }}>View Program →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.ctaBanner} aria-labelledby="programs-cta-heading">
        <h2 id="programs-cta-heading" className={styles.ctaTitle}>NOT SURE WHICH PROGRAM?</h2>
        <p className={styles.ctaSub}>Book a free 15-minute consultation and we&apos;ll find the perfect fit for your goals.</p>
        <Link href="/enroll/consultation" className="btn-gold">Book Free Consultation</Link>
      </section>
    </>
  );
}
