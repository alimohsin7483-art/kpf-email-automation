import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview, Row, Column,
} from "@react-email/components";

interface Props {
  name: string;
  programTitle: string;
  programSlug: string;
  paymentId: string;
  amount: number;
}

export default function PaymentConfirmation({ name, programTitle, programSlug, paymentId, amount }: Props) {
  return (
    <Html>
      <Head />
      <Preview>Payment confirmed ✅ Welcome to {programTitle} — KPF Academy</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>
          <Section style={goldBar} />

          <Section style={main}>
            <Heading style={h1}>PAYMENT CONFIRMED! ✅</Heading>
            <Text style={p}>Hi <strong style={{ color: "#fff" }}>{name}</strong>,</Text>
            <Text style={p}>
              Your payment for <strong style={{ color: "#d4ff00" }}>{programTitle}</strong> has been confirmed. Welcome to KPF Academy — your transformation starts now.
            </Text>

            {/* Receipt */}
            <Section style={receiptBox}>
              <Text style={receiptTitle}>PAYMENT RECEIPT</Text>
              <Row style={receiptRow}>
                <Column><Text style={receiptLabel}>Program</Text></Column>
                <Column style={{ textAlign: "right" as const }}><Text style={receiptValue}>{programTitle}</Text></Column>
              </Row>
              <Row style={receiptRow}>
                <Column><Text style={receiptLabel}>Amount Paid</Text></Column>
                <Column style={{ textAlign: "right" as const }}><Text style={receiptValueGold}>₹{amount.toLocaleString()}</Text></Column>
              </Row>
              <Row style={receiptRow}>
                <Column><Text style={receiptLabel}>Payment ID</Text></Column>
                <Column style={{ textAlign: "right" as const }}><Text style={receiptMono}>{paymentId}</Text></Column>
              </Row>
              <Row style={receiptRow}>
                <Column><Text style={receiptLabel}>Date</Text></Column>
                <Column style={{ textAlign: "right" as const }}><Text style={receiptValue}>{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</Text></Column>
              </Row>
            </Section>

            {/* Next Steps */}
            <Section style={stepsBox}>
              <Text style={stepsTitle}>WHAT HAPPENS NEXT</Text>
              {[
                "Shraddha's team will reach out on WhatsApp within 2 hours",
                "You'll receive your program access link and onboarding guide",
                "Join the private KPF Academy community group",
                "Start Module 1 — your transformation begins today",
              ].map((step, i) => (
                <Row key={i} style={stepRow}>
                  <Column style={stepNumCol}><Text style={stepNum}>{i + 1}</Text></Column>
                  <Column><Text style={stepText}>{step}</Text></Column>
                </Row>
              ))}
            </Section>

            <Link href={`https://www.kineticprofitness.com/programs/${programSlug}`} style={button}>
              View Your Program →
            </Link>

            <Hr style={hr} />
            <Text style={p}>
              Save your Payment ID <strong style={{ color: "#fff" }}>{paymentId}</strong> for your records. If you have any issues, reply to this email or WhatsApp us.
            </Text>
            <Text style={p}>
              Welcome to the family,<br />
              <strong>Shraddha Gadit</strong><br />
              Founder, KPF Academy
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>KPF Academy · Mumbai, India</Text>
            <Text style={footerText}>
              <Link href="https://www.kineticprofitness.com" style={footerLink}>kineticprofitness.com</Link>
              {" · "}
              <Link href="https://www.instagram.com/kineticprofitnessacademy" style={footerLink}>Instagram</Link>
            </Text>
            <Text style={footerSmall}>You received this because you enrolled in a KPF Academy program. Keep this email as your receipt.</Text>
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
const receiptBox = { backgroundColor: "#1a1a24", border: "1px solid #2a2a3a", borderTop: "3px solid #d4ff00", padding: "24px 28px", margin: "0 0 24px" };
const receiptTitle = { fontSize: "10px", fontWeight: "800", letterSpacing: "3px", color: "#d4ff00", margin: "0 0 16px", textTransform: "uppercase" as const };
const receiptRow = { borderBottom: "1px solid #2a2a3a", paddingBottom: "10px", marginBottom: "10px" };
const receiptLabel = { fontSize: "12px", color: "#666", margin: 0, textTransform: "uppercase" as const, letterSpacing: "1px" };
const receiptValue = { fontSize: "13px", color: "#e0e0e0", margin: 0, fontWeight: "600" };
const receiptValueGold = { fontSize: "16px", color: "#d4ff00", margin: 0, fontWeight: "800" };
const receiptMono = { fontSize: "11px", color: "#888", margin: 0, fontFamily: "monospace" };
const stepsBox = { backgroundColor: "#0d1200", border: "1px solid #d4ff0022", padding: "24px 28px", margin: "0 0 24px" };
const stepsTitle = { fontSize: "10px", fontWeight: "800", letterSpacing: "3px", color: "#d4ff00", margin: "0 0 16px", textTransform: "uppercase" as const };
const stepRow = { marginBottom: "14px" };
const stepNumCol = { width: "32px", verticalAlign: "top" as const };
const stepNum = { width: "24px", height: "24px", backgroundColor: "#d4ff00", color: "#000", fontSize: "11px", fontWeight: "800", textAlign: "center" as const, lineHeight: "24px", margin: 0, borderRadius: "2px" };
const stepText = { fontSize: "14px", color: "#c0c0d0", lineHeight: "1.6", margin: 0, paddingLeft: "12px" };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" as const, margin: "0 0 24px" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "12px 0 0" };
