"use client";
// ─── SEO: Skip-to-content link — must be a Client Component for event handlers
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      style={{
        position: "absolute",
        left: "-9999px",
        zIndex: 9999,
        background: "var(--gold, #D4AF37)",
        color: "#000",
        padding: "1rem",
      }}
      onFocus={(e) => { (e.target as HTMLElement).style.left = "1rem"; }}
      onBlur={(e) => { (e.target as HTMLElement).style.left = "-9999px"; }}
    >
      Skip to main content
    </a>
  );
}
