"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const nav = [
  { label: "Programs", href: "/programs" },
  { label: "Nutrition", href: "/nutrition" },
  { label: "Workshops", href: "/workshops" },
  { label: "Coach", href: "/coach" },
  { label: "Blog", href: "/blog" },
  { label: "Results", href: "/results" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = menuOpen ? "hidden" : "";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="/" className={styles.logo} onClick={close}>
        <Image src="/logo.png" alt="KPF Academy" width={44} height={44} className={styles.logoImg} />
        <div>
          <span className={styles.logoText}>KPF ACADEMY</span>
          <span className={styles.logoSub}>Kinetic Pro Fitness Academy</span>
        </div>
      </Link>

      <ul className={styles.links}>
        {nav.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className={styles.link}>{l.label}</Link>
          </li>
        ))}
      </ul>

      <Link href="/pricing" className="btn-gold" style={{ fontSize: "0.75rem", padding: "0.6rem 1.4rem" }}>
        Enroll Now
      </Link>

      <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? styles.open : ""} />
        <span className={menuOpen ? styles.open : ""} />
      </button>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileClose} onClick={close} aria-label="Close menu">✕</button>
          {nav.map((l) => (
            <Link key={l.label} href={l.href} className={styles.mobileLink} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link href="/pricing" className={`btn-gold ${styles.mobileEnroll}`} onClick={close}>
            Enroll Now
          </Link>
          <span className={styles.mobileSub}>KPF Academy · Mumbai</span>
        </div>
      )}
    </nav>
  );
}