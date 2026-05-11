import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import ProgramsShowcase from "@/components/ProgramsShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import CtaBgSlider from "@/components/CtaBgSlider";

export const metadata: Metadata = {
  title: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
  description:
    "India's premier fitness education academy. Science-backed programs in fat loss, nutrition, strength & fitness certification by Shraddha Gadit. 17+ years · 1000+ transformations.",
  alternates: { canonical: "https://www.kineticprofitness.com" },
  openGraph: {
    url: "https://www.kineticprofitness.com",
    title: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
    description:
      "Science-backed fitness & nutrition programs. 17+ years experience. 1000+ lives transformed. Mumbai, India.",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KPF Academy",
  url: "https://www.kineticprofitness.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.kineticprofitness.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* HERO */}
      <section className={styles.hero} aria-label="Hero — KPF Academy">
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={`${styles.heroTag} anim-1`}>Mumbai · 17 Years of Excellence</p>
          <h1 className={`${styles.heroHeadline} anim-2`}>
            KINETIC PRO<br />
            <span className={styles.heroNeon}>FITNESS</span><br />
            ACADEMY
          </h1>
          <p className={`${styles.heroSub} anim-3`}>
            Excellence in Fitness Education. Transforming how India learns nutrition, fitness and wellness — through science, not trends.
          </p>
          <div className={`${styles.heroActions} anim-4`}>
            <Link href="/programs" className="btn-gold">Explore Programs</Link>
            <Link href="/coach" className="btn-outline">Meet Shraddha →</Link>
          </div>
          <p className={`${styles.heroMotto} anim-5`}>Nutrition · Fitness · Wellness · Science &gt; Trends</p>
        </div>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeNum}>17+</span>
          <span className={styles.heroBadgeLabel}>Years Experience</span>
        </div>
      </section>

      {/* MARQUEE — two identical tracks for seamless infinite loop */}
      <div className={styles.marqueeBar} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {/* first copy */}
          <div className={styles.marqueeInner}>
            {["STRENGTH", "NUTRITION", "FAT LOSS", "WELLNESS", "MINDSET", "SCIENCE > TRENDS", "MUMBAI", "KPF ACADEMY"].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>{item} <span className={styles.marqueeDot}>✦</span></span>
            ))}
          </div>
          {/* second copy — creates seamless loop */}
          <div className={styles.marqueeInner} aria-hidden="true">
            {["STRENGTH", "NUTRITION", "FAT LOSS", "WELLNESS", "MINDSET", "SCIENCE > TRENDS", "MUMBAI", "KPF ACADEMY"].map((item, i) => (
              <span key={i} className={styles.marqueeItem}>{item} <span className={styles.marqueeDot}>✦</span></span>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <section className={styles.statsBar} aria-label="KPF Academy stats">
        {[["17+", "Years Experience"], ["1000+", "Lives Transformed"], ["6", "Program Types"], ["100%", "Science Backed"]].map(([v, l]) => (
          <div key={l} className={styles.stat}>
            <span className={styles.statNum}>{v}</span>
            <span className={styles.statLabel}>{l}</span>
          </div>
        ))}
      </section>

      {/* PROGRAMS SHOWCASE — category tabs + 3D bubble cards + slider */}
      <ProgramsShowcase />

            {/* ABOUT STRIP */}
      <section className={styles.aboutStrip} aria-labelledby="about-heading">
        <div>
          <h2 id="about-heading" className={styles.aboutTitle}>NOT JUST FITNESS.<br /><span className={styles.neon}>EDUCATION.</span></h2>
        </div>
        <div>
          <span className="section-label">Our philosophy</span>
          <p className={styles.aboutText}>KPF Academy was founded by <strong>Shraddha Gadit</strong> with a single mission — to transform how India learns nutrition and fitness. With over <strong>17 years of experience</strong>, every program is built on evidence, not trends.</p>
          <Link href="/coach" className="btn-gold">Meet Shraddha →</Link>
        </div>
      </section>

      {/* TESTIMONIAL SLIDER — auto-advances through all testimonials */}
      <TestimonialSlider />

      {/* CTA — program images auto-slide in background */}
      <CtaBgSlider />
    </>
  );
}
