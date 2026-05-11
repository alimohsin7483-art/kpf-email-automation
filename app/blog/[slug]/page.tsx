// ─── SEO CHANGE: Added generateMetadata for dynamic blog pages ───────────────
import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

const SITE_URL = "https://www.kineticprofitness.com";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: `${post.title} | KPF Academy`,
      description: post.excerpt,
      publishedTime: post.date,
      authors: ["Shraddha Gadit"],
      tags: [post.category, "KPF Academy", "fitness", "nutrition"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // ─── JSON-LD: Article schema ───────────────────────────────────────────────
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Shraddha Gadit",
      url: `${SITE_URL}/coach`,
    },
    publisher: {
      "@type": "Organization",
      name: "KPF Academy",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  };

  return (
    <>
      {/* ─── JSON-LD: Article schema ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <header className="page-hero" style={{ padding: "8rem 3rem 4rem" }}>
        <div className="page-hero-grid" />
        <div className={styles.heroInner}>
          {/* ─── SEO: Breadcrumb ──────────────────────────────────────────── */}
          <nav aria-label="Breadcrumb">
            <Link href="/blog" className={styles.back}>← Back to Blog</Link>
          </nav>
          <div className={styles.meta}>
            <span className={styles.category}>{post.category}</span>
            <span className={styles.dot}>·</span>
            {/* ─── SEO: Semantic <time> element ──────────────────────────── */}
            <time className={styles.date} dateTime={post.date}>{post.date}</time>
            <span className={styles.dot}>·</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
          {/* ─── SEO: One H1 per page ─────────────────────────────────────── */}
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <p className={styles.heroExcerpt}>{post.excerpt}</p>
          <address className={styles.author} style={{ fontStyle: "normal" }}>
            <span className={styles.authorName}>Shraddha Gadit</span>
            <span className={styles.authorRole}>Founder, KPF Academy</span>
          </address>
        </div>
      </header>

      <div className={styles.body}>
        <article className={styles.article} aria-labelledby="article-title">
          {/* ─── SEO: visually-hidden h2 mirrors H1 for article context ─── */}
          <h2 id="article-title" className="sr-only">{post.title}</h2>
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}

          <div className={styles.articleCta}>
            <h3 className={styles.articleCtaTitle}>READY TO PUT THIS INTO ACTION?</h3>
            <p className={styles.articleCtaSub}>
              Explore KPF Academy&apos;s science-backed programs and start your transformation today.
            </p>
            <Link href="/programs" className="btn-gold">Browse Programs →</Link>
          </div>
        </article>

        <aside className={styles.sidebar} aria-label="Author and related articles">
          <div className={styles.authorCard}>
            <span className={styles.authorCardLabel}>Written by</span>
            <h3 className={styles.authorCardName}>Shraddha Gadit</h3>
            <p className={styles.authorCardBio}>
              Founder of KPF Academy · 17+ years experience · Fitness Educator & Nutrition Expert based in Mumbai.
            </p>
            <Link href="/coach" className={styles.authorLink}>View Profile →</Link>
          </div>

          <nav className={styles.relatedSection} aria-label="Related articles">
            <h3 className={styles.relatedTitle}>MORE ARTICLES</h3>
            {related.map((r) => (
              <Link href={`/blog/${r.slug}`} key={r.slug} className={styles.relatedCard}>
                <span className={styles.relatedCategory}>{r.category}</span>
                <p className={styles.relatedTitle2}>{r.title}</p>
                <span className={styles.relatedRead}>{r.readTime}</span>
              </Link>
            ))}
          </nav>

          <div className={styles.ctaCard}>
            <h3 className={styles.ctaCardTitle}>START YOUR JOURNEY</h3>
            <p className={styles.ctaCardSub}>Transform your body and mind with KPF Academy.</p>
            <Link
              href="/pricing"
              className="btn-gold"
              style={{ display: "block", textAlign: "center", fontSize: "0.78rem" }}
            >
              View Programs →
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
