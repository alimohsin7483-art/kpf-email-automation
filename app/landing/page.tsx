"use client";
import Link from "next/link";
import { useState } from "react";
import LeadForm from "@/components/funnel/LeadForm";
import WhatsAppButton from "@/components/funnel/WhatsAppButton";
import styles from "./page.module.css";

const WA_NUMBER = "917208299269";
const WA_MSG = encodeURIComponent("Hi, I came from your ad and want the free transformation plan");
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MSG}`;

const stats = [
  { num: "1000+", label: "Students Certified" },
  { num: "17+", label: "Years Experience" },
  { num: "₹50K+", label: "Avg Monthly Earnings" },
  { num: "Top Gyms", label: "Placements & Clients" },
];

const results = [
  {
    name: "Placed in Top Gym",
    result: "Working at premium fitness chain",
    tag: "Placement",
    before: "No career",
    after: "Certified Trainer"
  },
  {
    name: "Freelance Coach",
    result: "Earning ₹80K/month",
    tag: "Income",
    before: "Confused",
    after: "Online Coach"
  },
  {
    name: "Celebrity Clients",
    result: "Training high-profile clients",
    tag: "Status",
    before: "Beginner",
    after: "Pro Trainer"
  },
  {
    name: "Career Switch",
    result: "Left job → fitness career",
    tag: "Freedom",
    before: "9–5 job",
    after: "Fitness Professional"
  }
];

const testimonials = [
  { name: "Priya Sharma", location: "Mumbai", result: "Fat Loss · -12kg", quote: "KPF didn't just give me a program — it gave me the knowledge to transform my life forever." },
  { name: "Rahul Desai", location: "Pune", result: "Strength · +40kg deadlift", quote: "Shraddha's approach is unlike anything else in India. Pure science, zero fluff." },
  { name: "Anjali Mehta", location: "Bangalore", result: "Nutrition · -8kg", quote: "For the first time I understand WHY I eat what I eat. This changed everything." },
];

const liveCourses = [
  {
    title: "Personal Fitness Trainer Certification",
    badge: "LIVE ENROLMENT OPEN",
    icon: "🏋️",
    duration: "6 Weeks",
    price: "₹14,999",
    original: "₹22,999",
    desc: "India's most practical PT certification. Learn anatomy, programming, client coaching — everything to start your fitness career.",
    highlights: ["Live weekly sessions with Shraddha", "Anatomy & biomechanics", "Program design & periodization", "Client assessment tools", "Certificate + placement support"],
    slug: "fitness-trainer-certification",
  },
  {
    title: "Nutrition Science & Coaching Course",
    badge: "LIVE ENROLMENT OPEN",
    icon: "🥗",
    duration: "6 Weeks",
    price: "₹9,999",
    original: "₹14,999",
    desc: "Master the science of nutrition. Learn to build personalised meal plans, understand macros, and coach clients on diet.",
    highlights: ["Macro & micro nutrient science", "Meal plan design", "Supplement protocols", "Gut health module", "Certificate on completion"],
    slug: "nutrition-mastery",
  },
];

const comingSoon = [
  { title: "Advanced Strength & Powerlifting", icon: "⚡", eta: "Feb 2026" },
  { title: "Sports Nutrition Specialist", icon: "🧬", eta: "Mar 2026" },
  { title: "Online Coaching Business Course", icon: "💼", eta: "Apr 2026" },
];

export default function LandingPage() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div className={styles.page}>
      <WhatsAppButton />

      {/* ── MINIMAL HEADER ───────────────────── */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoKpf}>KPF</span>
          <div>
            <span className={styles.logoName}>KINETIC PRO FITNESS</span>
            <span className={styles.logoTagline}>ACADEMY · MUMBAI · EST. 2007</span>
          </div>
        </div>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.headerWa}>
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp Us
        </a>
      </header>

      {/* ── HERO ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />

        <div className={styles.heroLeft}>
          <div className={styles.heroPill}>🔥 INDIA&apos;s Leading Fitness Career Academy</div>
          <h1 className={styles.heroH1}>
            STOP WASTING TIME.<br />
            <span className={styles.heroNeon}>START YOUR<br />FITNESS CAREER..</span>
          </h1>
          <p className={styles.heroP}>
  You don’t need another workout plan — you need a career.<br /><br />
  KPF Academy helps you become a certified Personal Trainer or Nutrition Coach with real-world skills, clients, and earning potential.
</p>

          <div className={styles.heroTrust}>
            {stats.map(s => (
              <div key={s.label} className={styles.heroStat}>
                <span className={styles.heroStatNum}>{s.num}</span>
                <span className={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <div className={styles.heroCtas}>
            <button onClick={() => setFormVisible(true)} className={styles.ctaPrimary}>
              Get My Career Blueprint
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWa}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <p className={styles.heroFine}>⚡ Career guidance. No spam. Only serious applicants.</p>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.leadCard}>
            <div className={styles.leadCardTop}>
              <span className={styles.leadBadge}>FREE</span>
              <h3 className={styles.leadTitle}>Get Your Free<br />Career Blueprint</h3>
              <p className={styles.leadSub}>Tell us your goal — we’ll send you complete course details, certification roadmap, and how to start earning as a trainer instantly on WhatsApp.</p>
            </div>
            <LeadForm source="hero" />
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────── */}
      <div className={styles.marquee}>
        <div className={styles.marqueeInner}>
          {[
"CERTIFIED TRAINER",
"NUTRITION COACH",
"ONLINE COACHING",
"₹50K+ INCOME",
"CLIENT TRANSFORMATIONS",
"CAREER SWITCH",
"FITNESS BUSINESS",
"LIVE COACHING"
].map((t, i) => (
            <span key={i} className={styles.marqueeItem}>{t} <span className={styles.marqueeDot}>✦</span></span>
          ))}
        </div>
      </div>

      {/* ── BEFORE / AFTER RESULTS ───────────── */}
      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.tag}>REAL RESULTS · NO FILTERS</span>
          <h2 className={styles.sectionTitle}>CAREERS THAT<br /><span className={styles.neon}>SPEAK FOR THEMSELVES</span></h2>
          <p className={styles.sectionSub}>From zero to certified professionals — this is what your future can look like.</p>
        </div>

        <div className={styles.resultsGrid}>
          {results.map((r, i) => (
            <div key={i} className={styles.resultCard}>
              <div className={styles.beforeAfterRow}>
                <div className={styles.baBox}>
                  <div className={styles.baImagePlaceholder}>
                    <span className={styles.baPlaceholderIcon}>👤</span>
                    <span className={styles.baPlaceholderText}>BEFORE</span>
                  </div>
                  <div className={styles.baLabel}>BEFORE</div>
                  <div className={styles.baValue}>{r.before}</div>
                </div>
                <div className={styles.baArrow}>→</div>
                <div className={styles.baBox}>
                  <div className={`${styles.baImagePlaceholder} ${styles.baAfter}`}>
                    <span className={styles.baPlaceholderIcon}>💪</span>
                    <span className={styles.baPlaceholderText}>AFTER</span>
                  </div>
                  <div className={styles.baLabel}>AFTER</div>
                  <div className={`${styles.baValue} ${styles.baValueNeon}`}>{r.after}</div>
                </div>
              </div>
              <div className={styles.resultInfo}>
                <span className={styles.resultTag}>{r.tag}</span>
                <p className={styles.resultName}>{r.name}</p>
                <p className={styles.resultResult}>{r.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO TESTIMONIALS ───────────────── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.sectionHead}>
          <span className={styles.tag}>STUDENT STORIES</span>
          <h2 className={styles.sectionTitle}>HEAR IT FROM<br /><span className={styles.neon}>THEM DIRECTLY</span></h2>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.videoPlaceholder}>
                <div className={styles.videoThumb}>
                  <span className={styles.playBtn}>▶</span>
                  <div className={styles.videoLabel}>
                    <span className={styles.videoName}>{t.name}</span>
                    <span className={styles.videoResult}>{t.result}</span>
                  </div>
                </div>
              </div>
              <div className={styles.tContent}>
                <p className={styles.tQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.tMeta}>
                  <span className={styles.tName}>{t.name}</span>
                  <span className={styles.tLoc}>{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MID-PAGE CTA ─────────────────────── */}
      <section className={styles.midCta}>
        <div className={styles.midCtaInner}>
          <p className={styles.midCtaTag}>⏰ Limited spots available this month</p>
          <h2 className={styles.midCtaTitle}>READY TO START A HIGH-INCOME FITNESS CAREER?</h2>
          <div className={styles.midCtaBtns}>
            <button onClick={() => setFormVisible(true)} className={styles.ctaPrimary}>
              Get My Free Plan Now
            </button>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWa}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── COURSES ──────────────────────────── */}
      <section className={styles.section} id="courses">
        <div className={styles.sectionHead}>
          <span className={styles.tag}>LIVE ENROLMENT OPEN</span>
          <h2 className={styles.sectionTitle}>BECOME A CERTIFIED<br /><span className={styles.neon}>FITNESS PROFESSIONAL</span></h2>
          <p className={styles.sectionSub}>India&apos;s most practical fitness certifications — live sessions, real coaching, career-ready skills.</p>
        </div>

        <div className={styles.coursesGrid}>
          {liveCourses.map((c, i) => (
            <div key={i} className={styles.courseCard}>
              <div className={styles.courseBadge}>{c.badge}</div>
              <div className={styles.courseTop}>
                <span className={styles.courseIcon}>{c.icon}</span>
                <span className={styles.courseDuration}>{c.duration}</span>
              </div>
              <h3 className={styles.courseTitle}>{c.title}</h3>
              <p className={styles.courseDesc}>{c.desc}</p>
              <ul className={styles.courseHighlights}>
                {c.highlights.map((h, j) => (
                  <li key={j} className={styles.courseHighlight}>
                    <span className={styles.courseCheck}>✓</span> {h}
                  </li>
                ))}
              </ul>
              <div className={styles.courseFooter}>
                <div className={styles.coursePricing}>
                  <span className={styles.courseOriginal}>{c.original}</span>
                  <span className={styles.coursePrice}>{c.price}</span>
                </div>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.courseEnroll}>
                  Enroll Now →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className={styles.comingSoonSection}>
          <h3 className={styles.comingSoonTitle}>COMING SOON</h3>
          <div className={styles.comingSoonGrid}>
            {comingSoon.map((c, i) => (
              <div key={i} className={styles.comingSoonCard}>
                <span className={styles.comingSoonIcon}>{c.icon}</span>
                <div>
                  <p className={styles.comingSoonName}>{c.title}</p>
                  <p className={styles.comingSoonEta}>Available {c.eta}</p>
                </div>
                <span className={styles.comingSoonBadge}>COMING SOON</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COACH TRUST ──────────────────────── */}
      <section className={`${styles.section} ${styles.sectionDark} ${styles.coachSection}`}>
        <div className={styles.coachImageBox}>
          <div className={styles.coachImagePlaceholder}>
            <span className={styles.coachPlaceholderIcon}>👩‍🏫</span>
            <span className={styles.coachPlaceholderText}>SHRADDHA GADIT</span>
          </div>
          <div className={styles.coachBadge}>
            <span className={styles.coachBadgeNum}>17+</span>
            <span className={styles.coachBadgeLabel}>Years Experience</span>
          </div>
        </div>
        <div className={styles.coachContent}>
          <span className={styles.tag}>YOUR COACH</span>
          <h2 className={styles.coachName}>SHRADDHA GADIT</h2>
          <p className={styles.coachTitle}>Founder, KPF Academy · Mumbai</p>
          <p className={styles.coachBio}>
            With 17+ years of hands-on experience in fitness and nutrition education, Shraddha has helped over 1,000 individuals transform their bodies, health, and careers. Her approach: <strong>science over trends, education over shortcuts.</strong>
          </p>
          <div className={styles.coachCreds}>
            {["Certified Fitness Professional", "Nutrition Science Expert", "Online Educator · 17+ Years", "1000+ Students Coached"].map(c => (
              <div key={c} className={styles.coachCred}>
                <span className={styles.coachCredIcon}>✓</span> {c}
              </div>
            ))}
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWa} style={{ marginTop: "1rem" }}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Talk to Shraddha&apos;s Team
          </a>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />
        <span className={styles.finalCtaTag}>⚡ DON&apos;T WAIT — START TODAY</span>
        <h2 className={styles.finalCtaTitle}>YOUR FITNESS CAREER<br /><span className={styles.neon}>STARTS RIGHT NOW</span></h2>
        <p className={styles.finalCtaSub}>
          Work in top gyms, earn ₹50K–₹1L/month, or build your own fitness brand.
        </p>
        <div className={styles.finalCtaBtns}>
          <button onClick={() => setFormVisible(true)} className={styles.ctaPrimary} style={{ fontSize: "1.1rem", padding: "1.2rem 3rem" }}>
            Get Free Career Plan
          </button>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className={styles.ctaWa}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp Now
          </a>
        </div>
        <p className={styles.finalCtaFine}>Free consultation · No commitment · India-wide & Online</p>
      </section>

      {/* ── MODAL LEAD FORM ──────────────────── */}
      {formVisible && (
        <div className={styles.modal} onClick={e => e.target === e.currentTarget && setFormVisible(false)}>
          <div className={styles.modalBox}>
            <button className={styles.modalClose} onClick={() => setFormVisible(false)}>✕</button>
            <div className={styles.modalBadge}>FREE</div>
            <h2 className={styles.modalTitle}>Get Your Free<br />Career Blueprint</h2>
            <p className={styles.modalSub}>Fill in your details and get complete course details, certification roadmap, and how to start earning as a trainer — instantly on WhatsApp.</p>
            <LeadForm source="modal" onSuccess={() => setTimeout(() => setFormVisible(false), 6000)} />
          </div>
        </div>
      )}

      {/* ── FOOTER STRIP ─────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <span className={styles.footerLogo}>KPF ACADEMY</span>
          <span className={styles.footerSub}>Kinetic Pro Fitness Academy · Mumbai, India</span>
        </div>
        <div className={styles.footerRight}>
          <a href="tel:+917208299269" className={styles.footerLink}>+91 72082 99269</a>
          <a href="https://www.instagram.com/kineticprofitnessacademy" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
          <Link href="/" className={styles.footerLink}>Full Website →</Link>
        </div>
        <p className={styles.footerCopy}>© 2026 Kinetic Pro Fitness Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
