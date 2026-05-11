// ─── SEO CHANGE: Enhanced root layout with full metadata, OG, Twitter, canonical ───
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/funnel/WhatsAppButton";
import MetaPixel from "@/components/MetaPixel";
import { headers } from "next/headers";
import SkipLink from "@/components/SkipLink";
import LeadPopup from "@/components/LeadPopup";

// ─── PRODUCTION DOMAIN — update if domain changes ───────────────────────────
const SITE_URL = "https://www.kineticprofitness.com";

export const metadata: Metadata = {
  title: {
    default: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
    template: "%s | KPF Academy",
  },
  description:
    "India's premier fitness education academy. Programs in fat loss, strength, nutrition & fitness certification. 17 years experience. 1000+ lives transformed. Based in Mumbai.",
  keywords: [
    "fitness academy Mumbai",
    "nutrition course India",
    "personal trainer certification",
    "fat loss program",
    "KPF academy",
    "Shraddha Gadit",
    "fitness education India",
    "online fitness certification",
    "nutrition mastery course",
    "Kinetic Pro Fitness Academy",
  ],
  authors: [{ name: "Shraddha Gadit", url: SITE_URL }],
  creator: "Shraddha Gadit",
  publisher: "KPF Academy",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "KPF Academy",
    title: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
    description:
      "India's premier fitness education academy. Programs in fat loss, strength, nutrition & personal trainer certification. 17+ years experience. 1000+ lives transformed.",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "KPF Academy — Kinetic Pro Fitness Academy Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KPF Academy — Kinetic Pro Fitness Academy | Mumbai",
    description:
      "India's premier fitness education academy. Science-backed programs in nutrition, fat loss & fitness certification.",
    images: ["/images/hero-bg.jpg"],
    creator: "@kpfacademy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// ─── JSON-LD: Organization Schema ───────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "KPF Academy",
  alternateName: "Kinetic Pro Fitness Academy",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "India's premier fitness education academy offering science-backed programs in nutrition, fat loss, strength training and fitness certification.",
  foundingDate: "2008",
  founder: {
    "@type": "Person",
    name: "Shraddha Gadit",
    jobTitle: "Founder & Fitness Educator",
    url: `${SITE_URL}/coach`,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  telephone: "+917208299269",
  sameAs: [
    "https://www.instagram.com/kineticprofitnessacademy",
    "https://m.youtube.com/@shraddhagadit",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fitness & Nutrition Programs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Nutrition Mastery",
          url: `${SITE_URL}/programs/nutrition-mastery`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: "Fitness Trainer Certification",
          url: `${SITE_URL}/programs/fitness-trainer-certification`,
        },
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get("x-invoke-path") || "";
  const isLanding = pathname.startsWith("/landing");

  return (
    <html lang="en">
      <head>
        {/* ─── JSON-LD Organization Schema ─────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <MetaPixel />
        {/* ─── Skip-to-content for a11y & crawlers ─────────────────────── */}
        <SkipLink />
        {!isLanding && <Navbar />}
        {/* ─── Semantic <main> with id for skip-link ───────────────────── */}
        <main id="main-content">{children}</main>
        {!isLanding && <Footer />}
        {!isLanding && <WhatsAppButton />}
        {!isLanding && <LeadPopup />}
      </body>
    </html>
  );
}
