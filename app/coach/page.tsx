// ─── SEO CHANGE: Added page metadata and Person JSON-LD ─────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Meet Shraddha Gadit — Founder & Fitness Coach",
  description:
    "Shraddha Gadit is the founder of KPF Academy and one of India's leading fitness educators. 17+ years experience, 1000+ transformations, based in Mumbai.",
  alternates: { canonical: "https://www.kineticprofitness.com/coach" },
  openGraph: {
    url: "https://www.kineticprofitness.com/coach",
    title: "Meet Shraddha Gadit — Founder & Fitness Coach | KPF Academy",
    description:
      "India's leading fitness educator. 17+ years experience. Founder of KPF Academy, Mumbai.",
  },
};

// ─── JSON-LD: Person schema for Shraddha ──────────────────────────────────────
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shraddha Gadit",
  jobTitle: "Founder & Fitness Educator",
  worksFor: {
    "@type": "Organization",
    name: "KPF Academy",
    url: "https://www.kineticprofitness.com",
  },
  url: "https://www.kineticprofitness.com/coach",
  description:
    "India's leading fitness educator with 17+ years experience. Founder of Kinetic Pro Fitness Academy (KPF Academy), Mumbai.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.instagram.com/kineticprofitnessacademy",
    "https://m.youtube.com/@shraddhagadit",
  ],
  knowsAbout: ["Fitness", "Nutrition", "Fat Loss", "Strength Training", "Wellness"],
};

export default function CoachPage() {
  return (
    <>
      {/* ─── JSON-LD: Person schema ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <div className="page-hero">
        {/* Full-bleed hero background */}
        <div className={styles.heroBgImage}>
          <Image src="/images/nutrition-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div className={styles.heroBgOverlay} />
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Meet your coach</span>
          {/* ─── SEO: H1 with coach name ─────────────────────────────────── */}
          <h1 className={styles.heroTitle}>
            SHRADDHA<br /><span className={styles.gold}>GADIT</span>
          </h1>
          <p className={styles.heroSub}>Founder · KPF Academy · 17+ Years Experience · Mumbai</p>
        </div>
      </div>

      {/* BIO SECTION */}
      <section className={styles.bioSection} aria-labelledby="bio-heading">
        <div className={styles.bioLeft}>
          <div className={styles.photoWrap}>
            <div className={styles.photoPlaceholder}>
              {/* ─── SEO: meaningful alt on logo ─────────────────────────── */}
              <Image
                src="/logo.png"
                alt="KPF Academy logo"
                width={100}
                height={100}
                className={styles.photoLogo}
              />
              <p className={styles.photoNote}>Photo Coming Soon</p>
            </div>
            <div className={styles.photoBadge}>
              <span className={styles.badgeNum}>17+</span>
              <span className={styles.badgeLabel}>Years</span>
            </div>
          </div>

          <ul className={styles.credentials} aria-label="Credentials">
            {[
              "Certified Fitness Coach",
              "Nutrition Expert",
              "Wellness Educator",
              "Fitness Educator",
              "Mumbai, India",
              "Online · Worldwide",
            ].map((c) => (
              <li key={c} className={styles.credential}>
                <span className={styles.credentialDot} aria-hidden="true">◆</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.bioRight}>
          <span className="section-label">About Shraddha</span>
          <h2 id="bio-heading" className={styles.bioTitle}>
            THE MISSION BEHIND<br /><span className={styles.gold}>KPF ACADEMY</span>
          </h2>
          <p className={styles.bioText}>
            Shraddha Gadit is the founder of Kinetic Pro Fitness Academy and one of India&apos;s leading voices in fitness education. With over <strong>17 years of hands-on coaching and education experience</strong>, she has dedicated her career to one mission: transforming how India learns nutrition and fitness.
          </p>
          <p className={styles.bioText}>
            Her philosophy is rooted in a simple but powerful belief: <em>Science &gt; Trends.</em> In an industry flooded with misinformation, crash diets, and quick-fix promises, Shraddha cuts through the noise with evidence-based knowledge that actually works — and lasts.
          </p>
          <p className={styles.bioText}>
            Through KPF Academy, she has helped <strong>1000+ people</strong> across Mumbai and beyond transform their bodies, improve their health and build sustainable habits. Her programs cover Nutrition, Strength, Fat Loss, Wellness, and Fitness Education — each one built on science, not guesswork.
          </p>
          <p className={styles.bioText}>
            Whether you&apos;re just starting your fitness journey or training for peak performance, Shraddha&apos;s approach meets you where you are — and takes you further than you thought possible.
          </p>

          <div className={styles.bioActions}>
            <Link href="/programs" className="btn-gold">Explore Programs</Link>
            <a
              href="https://www.instagram.com/kineticprofitnessacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow on Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.valuesSection} aria-labelledby="values-heading">
        <span className="section-label">Core Beliefs</span>
        <h2 id="values-heading" className={styles.valuesTitle}>WHAT KPF ACADEMY STANDS FOR</h2>
        <div className={styles.valuesGrid}>
          {[
            { icon: "🔬", title: "Science Over Trends", desc: "Every recommendation is backed by peer-reviewed research. We don't follow fads — we follow evidence." },
            { icon: "🎯", title: "Education First", desc: "We don't just give you a plan — we teach you the why. Knowledge is what makes results permanent." },
            { icon: "♾️", title: "Sustainable Results", desc: "Crash diets and extreme programs don't work long term. We build habits and systems that last a lifetime." },
            { icon: "🤝", title: "Personalised Approach", desc: "Every body is different. Every program at KPF Academy is adapted to your unique needs and goals." },
          ].map((v) => (
            <article key={v.title} className={styles.valueCard}>
              <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
              <h3 className={styles.valueTitle}>{v.title}</h3>
              <p className={styles.valueDesc}>{v.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsRow} aria-label="Shraddha Gadit stats">
        {[["17+", "Years Experience"], ["1000+", "Lives Transformed"], ["6", "Programs"], ["Mumbai", "Base Location"]].map(([v, l]) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statNum}>{v}</span>
            <span className={styles.statLabel}>{l}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="coach-cta-heading">
        <h2 id="coach-cta-heading" className={styles.ctaTitle}>READY TO TRAIN WITH SHRADDHA?</h2>
        <p className={styles.ctaSub}>Apply for 1-on-1 coaching or explore the full program library.</p>
        <div className={styles.ctaActions}>
          <Link href="/enroll/consultation" className="btn-gold">Apply for 1-on-1 Coaching</Link>
          <Link href="/programs" className="btn-outline">Browse Programs →</Link>
        </div>
      </section>
    </>
  );
}
