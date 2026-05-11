import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={`${styles.footer} footer-bg`}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="KPF Academy" width={48} height={48} className={styles.logoImg} />
            <div>
              <span className={styles.logoText}>KPF ACADEMY</span>
              <span className={styles.logoSub}>Kinetic Pro Fitness Academy</span>
            </div>
          </Link>
          <p className={styles.tagline}>Excellence in Fitness Education. Helping build a healthier body & mind through Nutrition, Fitness & Wellness.</p>
          <p className={styles.motto}>Science &gt; Trends</p>
          <div className={styles.socials}>
            <a href="https://www.instagram.com/kineticprofitnessacademy" target="_blank" rel="noopener noreferrer" className={styles.social}>Instagram</a>
            <a href="https://m.youtube.com/@shraddhagadit" target="_blank" rel="noopener noreferrer" className={styles.social}>YouTube</a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Programs</h4>
          <Link href="/programs/nutrition-mastery" className={styles.colLink}>Nutrition Mastery</Link>
          <Link href="/programs/fitness-trainer-certification" className={styles.colLink}>Fitness Trainer Certification</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Explore</h4>
          <Link href="/nutrition" className={styles.colLink}>Nutrition</Link>
          <Link href="/workshops" className={styles.colLink}>Workshops</Link>
          <Link href="/coach" className={styles.colLink}>Meet Shraddha</Link>
          <Link href="/blog" className={styles.colLink}>Blog</Link>
          <Link href="/results" className={styles.colLink}>Results</Link>
          <Link href="/pricing" className={styles.colLink}>Pricing</Link>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <a href="tel:+917208299269" className={styles.colLink}>+91 72082 99269</a>
          <span className={styles.colLink}>Mumbai, India</span>
          <span className={styles.colLink}>Online · Worldwide</span>
          <Link href="/pricing" className="btn-gold" style={{ marginTop: "1.5rem", display: "inline-block", fontSize: "0.75rem", padding: "0.7rem 1.5rem" }}>
            Enroll Now →
          </Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>© 2026 Kinetic Pro Fitness Academy. All rights reserved. · Mumbai, India</p>
        <p className={styles.taglineBottom}>Excellence in Fitness Education.</p>
      </div>
    </footer>
  );
}
