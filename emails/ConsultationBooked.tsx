// Email template: sent immediately after free consultation booking
import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview,
} from "@react-email/components";

interface Props {
  name: string;
  goal?: string;
}

export default function ConsultationBooked({ name, goal }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Consultation booked! We&apos;ll call you within 24 hours — KPF Academy</Preview>
      <Body style={body}>
        <Container style={container}>

          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>
          <Section style={goldBar} />

          <Section style={main}>
            <Heading style={h1}>CONSULTATION BOOKED! ✅</Heading>
            <Text style={p}>
              Hi <strong style={{ color: "#fff" }}>{name}</strong>,
            </Text>
            <Text style={p}>
              Your free 15-minute consultation with Shraddha Gadit is confirmed. Our team will contact you on WhatsApp within <strong style={{ color: "#d4ff00" }}>24 hours</strong> to schedule the exact time.
            </Text>

            {goal && (
              <Section style={goalBox}>
                <Text style={goalLabel}>YOUR GOAL</Text>
                <Text style={goalText}>{goal}</Text>
              </Section>
            )}

            <Section style={infoBox}>
              <Text style={infoTitle}>WHAT TO EXPECT</Text>
              <Text style={infoItem}>✓ 15-minute 1-on-1 call with Shraddha&apos;s team</Text>
              <Text style={infoItem}>✓ We&apos;ll understand your goal and current situation</Text>
              <Text style={infoItem}>✓ Get a recommended program — no hard selling</Text>
              <Text style={infoItem}>✓ All questions answered, zero obligation</Text>
            </Section>

            <Text style={p}>
              While you wait, explore what our members have achieved:
            </Text>
            <Link href="https://www.kineticprofitness.com/results" style={button}>See Transformations →</Link>

            <Hr style={hr} />
            <Text style={p}>See you soon,<br /><strong>The KPF Academy Team</strong></Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>KPF Academy · Mumbai, India</Text>
            <Text style={footerText}>
              <Link href="https://www.kineticprofitness.com" style={footerLink}>kineticprofitness.com</Link>
              {" · "}
              <Link href="https://www.instagram.com/kineticprofitnessacademy" style={footerLink}>Instagram</Link>
            </Text>
            <Text style={footerSmall}>You received this because you booked a free consultation at KPF Academy.</Text>
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
const h1 = { fontSize: "28px", fontWeight: "800", color: "#ffffff", letterSpacing: "2px", margin: "0 0 20px" };
const p = { fontSize: "15px", color: "#a0a0b0", lineHeight: "1.8", margin: "0 0 20px" };
const goalBox = { backgroundColor: "#0a0f0a", border: "1px solid #d4ff0033", borderLeft: "3px solid #d4ff00", padding: "16px 20px", margin: "0 0 24px" };
const goalLabel = { fontSize: "10px", letterSpacing: "3px", color: "#d4ff00", margin: "0 0 6px", textTransform: "uppercase" as const };
const goalText = { fontSize: "15px", color: "#fff", margin: 0, fontWeight: "600" };
const infoBox = { backgroundColor: "#1a1a24", border: "1px solid #2a2a3a", padding: "24px 28px", margin: "0 0 24px" };
const infoTitle = { fontSize: "11px", fontWeight: "800", letterSpacing: "3px", color: "#d4ff00", margin: "0 0 16px", textTransform: "uppercase" as const };
const infoItem = { fontSize: "14px", color: "#c0c0d0", margin: "0 0 10px", lineHeight: "1.6" };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" as const, margin: "0 0 24px" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "12px 0 0" };
