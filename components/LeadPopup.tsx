"use client";

import { useState, useEffect } from "react";
import { trackEvent, trackCustomEvent } from "@/components/MetaPixel";
import styles from "./LeadPopup.module.css";

const WA_NUMBER = "917208299269";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", goal: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setClosing(true);
    setTimeout(() => setVisible(false), 400);
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Please enter your name";
    if (!formData.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter a valid 10-digit number";
    if (!formData.goal) e.goal = "Pick your goal";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: "",
          goal: formData.goal,
          interest: formData.goal,
          source: "homepage_popup",
          timeline: "exploring",
          seriousness: "exploring",
          timestamp: new Date().toISOString(),
        }),
      });
    } catch {}

    trackEvent("Lead", { content_name: formData.goal, content_category: "KPF Popup Lead" });
    trackCustomEvent("KPFPopupLeadCaptured", { goal: formData.goal });

    setLoading(false);
    setStep("success");
  };

  const goToWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi KPF Academy! I just filled the popup form.\n\nName: ${formData.name}\nGoal: ${formData.goal}\n\nPlease share more details and the free guide!`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div
      className={`${styles.backdrop} ${closing ? styles.backdropOut : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) dismiss(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Free fitness career guide"
    >
      <div className={`${styles.modal} ${closing ? styles.modalOut : ""}`}>

        <button className={styles.close} onClick={dismiss} aria-label="Close">✕</button>

        {step === "form" ? (
          <>
            <div className={styles.offer}>
              <div className={styles.offerBadge}>🎁 FREE GUIDE</div>
              <h2 className={styles.offerTitle}>
                Get Your<br />
                <span className={styles.offerGold}>Free Fitness</span><br />
                Career Blueprint
              </h2>
              <p className={styles.offerSub}>
                Shraddha Gadit personally designed this guide for people serious about a fitness career.
              </p>
              <ul className={styles.bullets}>
                <li><span className={styles.check}>✦</span> Exact roadmap to become a certified trainer</li>
                <li><span className={styles.check}>✦</span> Top 5 mistakes beginners make (and how to avoid them)</li>
                <li><span className={styles.check}>✦</span> Salary ranges you can realistically expect in Year 1</li>
                <li><span className={styles.check}>✦</span> Which certification actually gets you hired</li>
              </ul>
              <div className={styles.social}>
                <span className={styles.socialNum}>1,000+</span>
                <span className={styles.socialLabel}>careers launched through KPF</span>
              </div>
            </div>

            <div className={styles.formPanel}>
              <p className={styles.formHeading}>Tell us where to send it</p>
              <p className={styles.formSub}>Takes 20 seconds. No spam. Ever.</p>

              <form onSubmit={handleSubmit} noValidate className={styles.form}>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="popup-name">Full Name</label>
                  <input
                    id="popup-name"
                    type="text"
                    placeholder="Rahul Sharma"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  />
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="popup-phone">WhatsApp Number</label>
                  <div className={styles.phoneWrap}>
                    <span className={styles.phonePrefix}>+91</span>
                    <input
                      id="popup-phone"
                      type="tel"
                      placeholder="98765 43210"
                      autoComplete="tel"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })
                      }
                      className={`${styles.input} ${styles.inputPhone} ${errors.phone ? styles.inputError : ""}`}
                    />
                  </div>
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>

                <div className={styles.field}>
                  <label className={styles.label}>Your Goal</label>
                  <div className={styles.pills}>
                    {[
                      { value: "become-trainer",  emoji: "🏋️", label: "Become a Trainer" },
                      { value: "nutrition-coach", emoji: "🥗", label: "Nutrition Coach" },
                      { value: "both",            emoji: "🔥", label: "Both" },
                      { value: "just-exploring",  emoji: "🤔", label: "Just Exploring" },
                    ].map((g) => (
                      <button
                        key={g.value}
                        type="button"
                        className={`${styles.pill} ${formData.goal === g.value ? styles.pillActive : ""}`}
                        onClick={() => setFormData({ ...formData, goal: g.value })}
                      >
                        <span>{g.emoji}</span> {g.label}
                      </button>
                    ))}
                  </div>
                  {errors.goal && <span className={styles.error}>{errors.goal}</span>}
                </div>

                <button type="submit" className={styles.submit} disabled={loading}>
                  {loading
                    ? <span className={styles.spinner} />
                    : <><span>Send Me the Free Guide</span><span>→</span></>
                  }
                </button>

                <p className={styles.privacy}>
                  🔒 We respect your privacy. No spam — only the guide and personalised guidance.
                </p>
              </form>
            </div>
          </>
        ) : (
          <div className={styles.success}>
            <div className={styles.successEmoji}>🎉</div>
            <h3 className={styles.successTitle}>
              You&apos;re in, {formData.name.split(" ")[0]}!
            </h3>
            <p className={styles.successSub}>
              Your Free Career Blueprint is ready. Connect on WhatsApp and we&apos;ll send it to you instantly — along with personalised batch details from Shraddha.
            </p>
            <div className={styles.urgencyTag}>
              ⚡ Only a few consultation slots open this week
            </div>
            <button onClick={goToWhatsApp} className={styles.waBtn}>
              <span>📲</span> Get Blueprint on WhatsApp
            </button>
            <button onClick={dismiss} className={styles.skipBtn}>
              I&apos;ll check my email later
            </button>
          </div>
        )}

      </div>
    </div>
  );
}