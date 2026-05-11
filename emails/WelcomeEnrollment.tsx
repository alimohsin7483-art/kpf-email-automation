// Email template: sent immediately after enrollment (paid program)
import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview, Row, Column,
} from "@react-email/components";

interface Props {
  name: string;
  programTitle: string;
  programSlug: string;
  paymentId?: string;
}

export default function WelcomeEnrollment({ name, programTitle, programSlug, paymentId }: Props) {
  const programUrl = `https://www.kineticprofitness.com/programs/${programSlug}`;

  return (
    <Html>
      <Head />
      <Preview>You&apos;re in! Welcome to {programTitle} — KPF Academy</Preview>
      <Body style={body}>
        <Container style={container}>

          {/* Header */}
          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>

          {/* Gold bar */}
          <Section style={goldBar} />

          {/* Main */}
          <Section style={main}>
            <Heading style={h1}>YOU&apos;RE IN, {name.toUpperCase()}! 🎉</Heading>
            <Text style={p}>
              Welcome to <strong>{programTitle}</strong>. You&apos;ve just made one of the best investments of your life — and we&apos;re going to make sure it pays off.
            </Text>

            <Section style={highlightBox}>
              <Text style={highlightTitle}>WHAT HAPPENS NEXT</Text>
              <Row style={step}>
                <Column style={stepNum}><Text style={numText}>1</Text></Column>
                <Column><Text style={stepText}>Check your WhatsApp — Shraddha&apos;s team will reach out within 2 hours</Text></Column>
              </Row>
              <Row style={step}>
                <Column style={stepNum}><Text style={numText}>2</Text></Column>
                <Column><Text style={stepText}>You&apos;ll receive your program access link and onboarding guide</Text></Column>
              </Row>
              <Row style={step}>
                <Column style={stepNum}><Text style={numText}>3</Text></Column>
                <Column><Text style={stepText}>Join our private community group and introduce yourself</Text></Column>
              </Row>
              <Row style={step}>
                <Column style={stepNum}><Text style={numText}>4</Text></Column>
                <Column><Text style={stepText}>Start Module 1 — your transformation begins today</Text></Column>
              </Row>
            </Section>

            {paymentId && (
              <Text style={smallText}>Payment ID: {paymentId}</Text>
            )}

            <Link href={programUrl} style={button}>View Your Program →</Link>

            <Hr style={hr} />

            <Text style={p}>
              Remember — <strong>Science &gt; Trends.</strong> You&apos;re now learning from India&apos;s most evidence-based fitness educator. Trust the process.
            </Text>
            <Text style={p}>See you inside,<br /><strong>Shraddha Gadit</strong><br />Founder, KPF Academy</Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>KPF Academy · Mumbai, India</Text>
            <Text style={footerText}>
              <Link href="https://www.kineticprofitness.com" style={footerLink}>kineticprofitness.com</Link>
              {" · "}
              <Link href="https://www.instagram.com/kineticprofitnessacademy" style={footerLink}>Instagram</Link>
            </Text>
            <Text style={footerSmall}>You received this because you enrolled in a KPF Academy program.</Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
const body = { backgroundColor: "#05050a", fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", margin: 0, padding: "40px 0" };
const container = { backgroundColor: "#0f0f14", maxWidth: "600px", margin: "0 auto", border: "1px solid #1e1e2e" };
const header = { backgroundColor: "#05050a", padding: "32px 40px", textAlign: "center" as const };
const logo = { fontFamily: "Georgia, serif", fontSize: "22px", fontWeight: "800", letterSpacing: "6px", color: "#d4ff00", margin: 0 };
const tagline = { fontSize: "9px", letterSpacing: "3px", color: "#666", margin: "4px 0 0", textTransform: "uppercase" as const };
const goldBar = { height: "3px", backgroundColor: "#d4ff00" };
const main = { padding: "40px 40px 32px" };
const h1 = { fontSize: "28px", fontWeight: "800", color: "#ffffff", letterSpacing: "2px", margin: "0 0 20px" };
const p = { fontSize: "15px", color: "#a0a0b0", lineHeight: "1.8", margin: "0 0 20px" };
const highlightBox = { backgroundColor: "#1a1a24", border: "1px solid #2a2a3a", borderLeft: "3px solid #d4ff00", padding: "24px 28px", margin: "24px 0" };
const highlightTitle = { fontSize: "11px", fontWeight: "800", letterSpacing: "3px", color: "#d4ff00", margin: "0 0 20px", textTransform: "uppercase" as const };
const step = { marginBottom: "16px" };
const stepNum = { width: "32px", verticalAlign: "top" as const };
const numText = { width: "24px", height: "24px", backgroundColor: "#d4ff00", color: "#000", fontSize: "11px", fontWeight: "800", textAlign: "center" as const, lineHeight: "24px", margin: 0, borderRadius: "2px" };
const stepText = { fontSize: "14px", color: "#c0c0d0", lineHeight: "1.6", margin: 0, paddingLeft: "12px" };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" as const, margin: "8px 0 24px" };
const smallText = { fontSize: "11px", color: "#555", margin: "0 0 16px" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "12px 0 0" };
