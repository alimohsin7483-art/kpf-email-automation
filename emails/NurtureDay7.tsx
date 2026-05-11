// Nurture Day 7: Final push — urgency, value, direct CTA
import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview,
} from "@react-email/components";

interface Props { name: string; }

export default function NurtureDay7({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Still thinking about it? Here&apos;s what changes when you decide — KPF Academy</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>
          <Section style={goldBar} />

          <Section style={main}>
            <Text style={eyebrow}>DAY 7 · FINAL MESSAGE</Text>
            <Heading style={h1}>STILL THINKING ABOUT IT?</Heading>
            <Text style={p}>Hi {name},</Text>
            <Text style={p}>
              One week ago you took the first step — you asked about transforming your health. That matters. Most people never even get that far.
            </Text>
            <Text style={p}>
              But here&apos;s the thing: <strong style={{ color: "#fff" }}>nothing changes until you decide.</strong> Not the knowledge, not the motivation, not the results — until you make a clear decision.
            </Text>

            <Section style={compareBox}>
              <Text style={compareTitle}>6 MONTHS FROM NOW, YOU&apos;RE EITHER:</Text>
              <Text style={compareBad}>❌ Exactly where you are today — having tried the same things that haven&apos;t worked</Text>
              <Hr style={compareDivider} />
              <Text style={compareGood}>✅ 10–20kg lighter, stronger, healthier — with the knowledge to maintain it forever</Text>
            </Section>

            <Text style={p}>
              The difference? One decision. And we&apos;ve made it as easy as possible:
            </Text>

            {[
              ["₹7,999", "Nutrition Mastery — lifetime access", "/programs/nutrition-mastery"],
              ["₹14,999", "Fitness Trainer Certification", "/programs/fitness-trainer-certification"],
              ["Free", "15-min consultation — still available", "/enroll/consultation"],
            ].map(([price, label, path]) => (
              <Section key={path} style={offerRow}>
                <Text style={offerPrice}>{price}</Text>
                <Text style={offerLabel}>{label}</Text>
                <Link href={`https://www.kineticprofitness.com${path}`} style={offerLink}>
                  {price === "Free" ? "Book Now →" : "Enroll →"}
                </Link>
              </Section>
            ))}

            <Hr style={hr} />
            <Text style={p}>
              All programs come with a <strong style={{ color: "#d4ff00" }}>7-day money-back guarantee</strong>. Zero risk. The only thing you risk is staying exactly where you are.
            </Text>
            <Text style={p}>
              This is my last email in this sequence. Whatever you decide, I wish you well.<br /><br />
              <strong>Shraddha Gadit</strong><br />
              Founder, KPF Academy
            </Text>

            <Link href="https://www.kineticprofitness.com/programs" style={button}>
              Start Your Transformation →
            </Link>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>KPF Academy · Mumbai, India · <Link href="https://www.kineticprofitness.com" style={footerLink}>kineticprofitness.com</Link></Text>
            <Text style={footerSmall}>This is the last email in this sequence. <Link href="#" style={footerLink}>Unsubscribe</Link></Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = { backgroundColor: "#05050a", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0, padding: "40px 0" };
const container = { backgroundColor: "#0f0f14", maxWidth: "600px", margin: "0 auto", border: "1px solid #1e1e2e" };
const header = { backgroundColor: "#05050a", padding: "32px 40px", textAlign: "center" as const };
const logo = { fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "800", letterSpacing: "6px", color: "#d4ff00", margin: 0 };
const tagline = { fontSize: "9px", letterSpacing: "3px", color: "#666", margin: "4px 0 0", textTransform: "uppercase" as const };
const goldBar = { height: "3px", backgroundColor: "#d4ff00" };
const main = { padding: "40px 40px 32px" };
const eyebrow = { fontSize: "10px", letterSpacing: "4px", color: "#d4ff00", margin: "0 0 12px", textTransform: "uppercase" as const };
const h1 = { fontSize: "24px", fontWeight: "800", color: "#ffffff", letterSpacing: "1px", margin: "0 0 24px", lineHeight: "1.3" };
const p = { fontSize: "15px", color: "#a0a0b0", lineHeight: "1.8", margin: "0 0 20px" };
const compareBox = { backgroundColor: "#1a1a24", border: "1px solid #2a2a3a", padding: "24px 28px", margin: "8px 0 24px" };
const compareTitle = { fontSize: "10px", fontWeight: "800", letterSpacing: "3px", color: "#888", margin: "0 0 16px", textTransform: "uppercase" as const };
const compareBad = { fontSize: "14px", color: "#a0a0b0", lineHeight: "1.6", margin: "0 0 4px" };
const compareDivider = { borderColor: "#2a2a3a", margin: "12px 0" };
const compareGood = { fontSize: "14px", color: "#d4ff00", lineHeight: "1.6", margin: 0, fontWeight: "600" };
const offerRow = { backgroundColor: "#0f0f14", border: "1px solid #2a2a3a", padding: "16px 20px", margin: "0 0 8px", display: "flex" };
const offerPrice = { fontFamily: "Georgia, serif", fontSize: "20px", fontWeight: "800", color: "#d4ff00", margin: "0 0 4px", display: "block" };
const offerLabel = { fontSize: "13px", color: "#c0c0d0", margin: "0 0 12px" };
const offerLink = { display: "inline-block", color: "#000", backgroundColor: "#d4ff00", fontSize: "11px", fontWeight: "800", letterSpacing: "2px", padding: "8px 20px", textDecoration: "none", textTransform: "uppercase" as const };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "16px 36px", textDecoration: "none", textTransform: "uppercase" as const, margin: "8px 0 0" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "8px 0 0" };
