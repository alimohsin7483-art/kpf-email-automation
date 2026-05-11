// Nurture Day 1: Sent 24h after consultation booking — build trust & educate
import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview,
} from "@react-email/components";

interface Props { name: string; }

export default function NurtureDay1({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>The #1 reason diets fail in India (it&apos;s not what you think) — KPF Academy</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>
          <Section style={goldBar} />

          <Section style={main}>
            <Text style={eyebrow}>DAY 1 · KNOWLEDGE DROP</Text>
            <Heading style={h1}>THE #1 REASON DIETS FAIL IN INDIA</Heading>
            <Text style={p}>Hi {name},</Text>
            <Text style={p}>
              Most people blame their willpower. But after 17 years of coaching, Shraddha has found the real culprit: <strong style={{ color: "#d4ff00" }}>eating too little for too long.</strong>
            </Text>
            <Text style={p}>
              When you crash diet, your body adapts — slowing metabolism, increasing hunger hormones and breaking down muscle. The result? You lose weight for 2 weeks, then plateau, then regain everything.
            </Text>

            <Section style={callout}>
              <Text style={calloutText}>
                &ldquo;The goal isn&apos;t to eat as little as possible. It&apos;s to eat as much as possible while still losing fat.&rdquo;
              </Text>
              <Text style={calloutAuthor}>— Shraddha Gadit, KPF Academy</Text>
            </Section>

            <Text style={p}>
              This is why every KPF Academy program starts with understanding YOUR metabolism — not a generic calorie number from the internet.
            </Text>

            <Text style={sectionTitle}>WHAT ACTUALLY WORKS:</Text>
            <Text style={listItem}>✓ Eating at a small, calculated deficit (not starving)</Text>
            <Text style={listItem}>✓ Prioritising protein (most Indians eat far too little)</Text>
            <Text style={listItem}>✓ Strength training 3x per week minimum</Text>
            <Text style={listItem}>✓ Consistency over 12–16 weeks, not 2 weeks</Text>

            <Hr style={hr} />
            <Text style={p}>
              Tomorrow I&apos;ll share the exact protein targets that 90% of Indians are missing. Stay tuned.
            </Text>

            <Link href="https://www.kineticprofitness.com/programs" style={button}>Explore Our Programs →</Link>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>KPF Academy · Mumbai, India · <Link href="https://www.kineticprofitness.com" style={footerLink}>kineticprofitness.com</Link></Text>
            <Text style={footerSmall}>You&apos;re receiving this because you requested a free consultation. <Link href="#" style={footerLink}>Unsubscribe</Link></Text>
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
const callout = { backgroundColor: "#0d1200", border: "1px solid #d4ff0033", borderLeft: "3px solid #d4ff00", padding: "20px 24px", margin: "8px 0 24px" };
const calloutText = { fontSize: "16px", color: "#e0e0e0", fontStyle: "italic", lineHeight: "1.6", margin: "0 0 8px" };
const calloutAuthor = { fontSize: "11px", letterSpacing: "2px", color: "#d4ff00", margin: 0, textTransform: "uppercase" as const };
const sectionTitle = { fontSize: "11px", fontWeight: "800", letterSpacing: "3px", color: "#d4ff00", margin: "24px 0 12px", textTransform: "uppercase" as const };
const listItem = { fontSize: "14px", color: "#c0c0d0", margin: "0 0 8px", lineHeight: "1.6" };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" as const, margin: "24px 0 0" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "8px 0 0" };
