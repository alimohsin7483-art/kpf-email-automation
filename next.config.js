/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── SEO CHANGE: Added image optimization config ─────────────────────────
  images: {
    // Allow optimizing images from these domains if you ever use external CDNs.
    // Internal /public images are optimized automatically.
    remotePatterns: [],
    // ── Formats: serve AVIF + WebP for modern browsers ──────────────────
    formats: ["image/avif", "image/webp"],
  },

  // ─── SEO CHANGE: Canonical redirect — ensure no trailing-slash duplicates ──
  // Next.js strips trailing slashes by default; this makes it explicit.
  trailingSlash: false,

  // ─── No other changes — existing business logic preserved ────────────────
};

module.exports = nextConfig;
