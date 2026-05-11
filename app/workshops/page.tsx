// ─── SEO CHANGE: Added page metadata ─────────────────────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { workshops } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Live Fitness & Nutrition Workshops",
  description:
    "Intensive live workshops with Shraddha Gadit — Nutrition Masterclass, Fat Loss Blueprint, and Mindset & Performance. Online and in-person, Mumbai.",
  alternates: { canonical: "https://www.kineticprofitness.com/workshops" },
  openGraph: {
    url: "https://www.kineticprofitness.com/workshops",
    title: "Live Fitness & Nutrition Workshops | KPF Academy",
    description: "Intensive live workshops with Shraddha Gadit. Online & in-person Mumbai.",
  },
};

export default function WorkshopsPage() {
  return (
    <>
      <div className={`page-hero ${styles.hero}`}>
        {/* Full-bleed hero background */}
        <div className={styles.heroBgImage}>
          <Image src="/images/workshop-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div className={styles.heroBgOverlay} />
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Live Workshops</span>
          <h1 className={styles.heroTitle}>LEARN LIVE.<br /><span className={styles.gold}>TRANSFORM FAST.</span></h1>
          <p className={styles.heroSub}>Intensive workshops with Shraddha Gadit. Deep-dive learning in a focused, interactive format — online and in-person.</p>
        </div>
      </div>

      {/* UPCOMING WORKSHOPS */}
      <section className={styles.section} aria-labelledby="workshops-heading">
        <span className="section-label">Upcoming</span>
        <h2 id="workshops-heading" className={styles.sectionTitle}>UPCOMING WORKSHOPS</h2>
        <div className={styles.workshopsList}>
          {workshops.map((w) => (
            <article key={w.slug} className={styles.workshopCard}>
              <div className={styles.workshopLeft}>
                <div className={styles.workshopDate}>{w.date}</div>
                <div>
                  <h3 className={styles.workshopTitle}>{w.title}</h3>
                  <p className={styles.workshopDesc}>{w.desc}</p>
                  <div className={styles.workshopMeta}>
                    <span>⏱ {w.duration}</span>
                    <span>📍 {w.mode}</span>
                    <span>👥 {w.spots} spots</span>
                  </div>
                </div>
              </div>
              <div className={styles.workshopRight}>
                <span className={styles.workshopPrice}>₹{w.price.toLocaleString()}</span>
                <Link href={`/enroll/${w.slug}`} className="btn-gold" style={{ fontSize: "0.78rem", padding: "0.7rem 1.5rem" }}>
                  Book Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY WORKSHOPS */}
      <section className={styles.whySection} aria-labelledby="why-heading">
        <span className="section-label">Why Workshops</span>
        <h2 id="why-heading" className={styles.whyTitle}>THE POWER OF LIVE LEARNING</h2>
        <div className={styles.whyGrid}>
          {[
            { icon: "⚡", title: "Intense & Focused", desc: "Get months of knowledge condensed into one power-packed session. Maximum learning in minimum time." },
            { icon: "💬", title: "Ask Questions Live", desc: "Get your specific questions answered in real time by Shraddha. No waiting, no generic answers." },
            { icon: "🤝", title: "Community Energy", desc: "Learn alongside other motivated people. The energy of a live group is unlike anything else." },
            { icon: "📋", title: "Actionable Takeaways", desc: "Every workshop ends with a clear action plan you can implement immediately. No fluff, just results." },
          ].map((w) => (
            <article key={w.title} className={styles.whyCard}>
              <span className={styles.whyIcon} aria-hidden="true">{w.icon}</span>
              <h3 className={styles.whyCardTitle}>{w.title}</h3>
              <p className={styles.whyDesc}>{w.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CORPORATE */}
      <section className={styles.corporateSection} aria-labelledby="corporate-heading">
        <div className={styles.corporateLeft}>
          <span className="section-label">Corporate Wellness</span>
          <h2 id="corporate-heading" className={styles.corporateTitle}>WORKSHOPS FOR<br /><span className={styles.gold}>YOUR TEAM</span></h2>
          <p className={styles.corporateText}>We bring our nutrition and wellness workshops directly to your organisation. Custom corporate wellness programs for teams of all sizes — online or in-person in Mumbai.</p>
          <Link href="/enroll/corporate" className="btn-gold">Enquire for Corporate →</Link>
        </div>
        <div className={styles.corporateRight}>
          {["Nutrition & Healthy Eating", "Stress Management & Wellness", "Fitness at the Workplace", "Mindset & Performance", "Custom Topic on Request"].map((t) => (
            <div key={t} className={styles.corporateTopic}>
              <span className={styles.corporateDot} aria-hidden="true">◆</span>
              <span>{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} aria-labelledby="workshop-cta-heading">
        <h2 id="workshop-cta-heading" className={styles.ctaTitle}>CAN&apos;T FIND YOUR DATE?</h2>
        <p className={styles.ctaSub}>Register your interest and we&apos;ll notify you when the next workshop is announced.</p>
        <Link href="/enroll/workshop-waitlist" className="btn-gold">Join the Waitlist →</Link>
      </section>
    </>
  );
}
