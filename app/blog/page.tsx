// ─── SEO CHANGE: Added page metadata ─────────────────────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Fitness & Nutrition Blog",
  description:
    "Science-backed articles on nutrition, fat loss, strength training and wellness by Shraddha Gadit, Founder of KPF Academy Mumbai. No fluff — just evidence.",
  alternates: { canonical: "https://www.kineticprofitness.com/blog" },
  openGraph: {
    url: "https://www.kineticprofitness.com/blog",
    title: "Fitness & Nutrition Blog | KPF Academy",
    description:
      "Science-backed insights on nutrition, training and wellness by Shraddha Gadit.",
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="page-hero">
        {/* Full-bleed hero background */}
        <div className={styles.heroBgImage}>
          <Image src="/images/blogs-bg.jpg" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "center top" }} />
        </div>
        <div className={styles.heroBgOverlay} />
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          <span className="section-label">Knowledge Hub</span>
          {/* ─── SEO: One H1 per page ────────────────────────────────────── */}
          <h1 className={styles.heroTitle}>
            FITNESS &<br /><span className={styles.gold}>NUTRITION</span><br />INSIGHTS
          </h1>
          <p className={styles.heroSub}>
            Science-backed articles on nutrition, training, wellness and performance. No fluff — just evidence.
          </p>
        </div>
      </div>

      <section className={styles.section} aria-labelledby="blog-list-heading">
        <h2 id="blog-list-heading" className="sr-only">All Articles</h2>
        <div className={styles.grid}>
          {blogPosts.map((post, i) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className={`${styles.card} ${i === 0 ? styles.featured : ""}`}
              aria-label={`Read: ${post.title}`}
            >
              <div className={styles.cardTop}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.readTime}>{post.readTime}</span>
              </div>
              {/* ─── SEO: H2 for article cards ──────────────────────────── */}
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardBottom}>
                <time className={styles.date} dateTime={post.date}>{post.date}</time>
                <span className={styles.readMore}>Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.newsletter} aria-labelledby="newsletter-heading">
        <span className="section-label">Stay Updated</span>
        <h2 id="newsletter-heading" className={styles.newsletterTitle}>GET WEEKLY INSIGHTS</h2>
        <p className={styles.newsletterSub}>Science-backed nutrition and fitness tips straight to your inbox. No spam, ever.</p>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            placeholder="your@email.com"
            className={styles.newsletterInput}
            aria-label="Email address"
          />
          <button className="btn-gold">Subscribe →</button>
        </div>
      </section>
    </>
  );
}
