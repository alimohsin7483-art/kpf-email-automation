// Nurture Day 3: Social proof + soft push to program
import {
  Html, Head, Body, Container, Section, Text, Heading,
  Hr, Link, Preview, Row, Column,
} from "@react-email/components";

interface Props { name: string; }

export default function NurtureDay3({ name }: Props) {
  return (
    <Html>
      <Head />
      <Preview>1000+ transformations — real results from real KPF members</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={logo}>KPF ACADEMY</Text>
            <Text style={tagline}>KINETIC PRO FITNESS ACADEMY</Text>
          </Section>
          <Section style={goldBar} />

          <Section style={main}>
            <Text style={eyebrow}>DAY 3 · REAL RESULTS</Text>
            <Heading style={h1}>WHAT 1000+ MEMBERS HAVE ACHIEVED</Heading>
            <Text style={p}>Hi {name},</Text>
            <Text style={p}>
              The best proof that something works? Real people with real results. Here&apos;s what KPF Academy members have achieved — with no crash diets, no extreme workouts, just science.
            </Text>

            {/* Testimonials */}
            {[
              { name: "Priya S.", location: "Mumbai", result: "Lost 14kg in 16 weeks", quote: "I finally understood why I wasn't losing weight. KPF changed everything." },
              { name: "Rahul M.", location: "Pune", result: "Built 6kg muscle in 20 weeks", quote: "Shraddha's approach is unlike anything I'd tried before. Evidence-based and it actually works." },
              { name: "Ananya K.", location: "Bangalore", result: "Reversed pre-diabetes in 12 weeks", quote: "Not just a fitness program — a complete education in how to live healthy." },
            ].map((t) => (
              <Section key={t.name} style={testimonialCard}>
                <Text style={testimonialQuote}>&ldquo;{t.quote}&rdquo;</Text>
                <Row>
                  <Column>
                    <Text style={testimonialName}>{t.name} · {t.location}</Text>
                  </Column>
                  <Column style={{ textAlign: "right" as const }}>
                    <Text style={testimonialResult}>{t.result}</Text>
                  </Column>
                </Row>
              </Section>
            ))}

            <Hr style={hr} />
            <Text style={p}>
              These results didn&apos;t come from willpower alone. They came from <strong style={{ color: "#fff" }}>understanding how the body actually works</strong> — which is exactly what you get in every KPF Academy program.
            </Text>
            <Text style={p}>
              Our <strong style={{ color: "#d4ff00" }}>Nutrition Mastery</strong> program starts at ₹7,999. That&apos;s less than a month of most gym memberships — for lifetime access to the knowledge that actually moves the needle.
            </Text>

            <Link href="https://www.kineticprofitness.com/programs/nutrition-mastery" style={button}>
              View Nutrition Mastery →
            </Link>
            <Link href="https://www.kineticprofitness.com/results" style={secondaryLink}>
              See all transformations →
            </Link>
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
const testimonialCard = { backgroundColor: "#1a1a24", border: "1px solid #2a2a3a", borderLeft: "3px solid #d4ff00", padding: "20px 24px", margin: "0 0 16px" };
const testimonialQuote = { fontSize: "14px", color: "#d0d0e0", fontStyle: "italic", lineHeight: "1.7", margin: "0 0 12px" };
const testimonialName = { fontSize: "11px", letterSpacing: "1px", color: "#666", margin: 0, textTransform: "uppercase" as const };
const testimonialResult = { fontSize: "11px", letterSpacing: "1px", color: "#d4ff00", margin: 0, fontWeight: "700", textTransform: "uppercase" as const };
const button = { display: "inline-block", backgroundColor: "#d4ff00", color: "#000000", fontWeight: "800", fontSize: "13px", letterSpacing: "2px", padding: "14px 32px", textDecoration: "none", textTransform: "uppercase" as const, margin: "8px 16px 0 0" };
const secondaryLink = { display: "inline-block", color: "#d4ff00", fontSize: "13px", letterSpacing: "1px", textDecoration: "none", margin: "8px 0 0", borderBottom: "1px solid #d4ff0055" };
const hr = { borderColor: "#1e1e2e", margin: "24px 0" };
const footer = { backgroundColor: "#05050a", padding: "24px 40px", textAlign: "center" as const, borderTop: "1px solid #1e1e2e" };
const footerText = { fontSize: "12px", color: "#555", margin: "0 0 6px" };
const footerLink = { color: "#d4ff00", textDecoration: "none" };
const footerSmall = { fontSize: "11px", color: "#333", margin: "8px 0 0" };
