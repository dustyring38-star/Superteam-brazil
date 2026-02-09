export default function App() {
  return (
    <div style={styles.page}>

      {/* NAV */}
      <header style={styles.nav}>
        <div style={styles.container}>
          <strong>Superteam Brazil 🇧🇷</strong>
          <a href="#apply" style={styles.navBtn}>Apply</a>
        </div>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.container}>
          <h1 style={styles.h1}>
            Building Brazil’s<br />
            <span style={styles.gradient}>Next Generation of Web3 Builders</span>
          </h1>

          <p style={styles.lead}>
            Superteam Brazil is a high-signal collective of founders, developers,
            and creators building real products on Solana.
          </p>

          <div style={styles.heroBtns}>
            <a href="#apply" style={styles.primary}>Apply to Join</a>
            <a href="#why" style={styles.secondary}>Why Superteam?</a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={styles.proof}>
        <div style={styles.containerGrid}>
          <Stat label="Builders" value="500+" />
          <Stat label="Countries" value="20+" />
          <Stat label="Grants Earned" value="$10M+" />
        </div>
      </section>

      {/* WHY */}
      <section id="why" style={styles.section}>
        <div style={styles.containerGrid}>
          <Feature
            title="Ship Real Products"
            text="We focus on execution, not theory. Members ship production code, startups, and tools."
          />
          <Feature
            title="Grants & Bounties"
            text="Access paid opportunities directly from ecosystem partners."
          />
          <Feature
            title="Elite Network"
            text="Founders, engineers, designers — no noise, no tourists."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.h2}>How It Works</h2>
          <ol style={styles.steps}>
            <li>Apply with your skills & interests</li>
            <li>Get vetted by core contributors</li>
            <li>Join projects, bounties, and teams</li>
            <li>Ship, earn, and grow your reputation</li>
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" style={styles.cta}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Ready to Build?</h2>
          <p style={styles.lead}>
            We’re onboarding builders, founders, and creators across Brazil.
          </p>
          <a
            href="https://superteam.fun"
            target="_blank"
            rel="noreferrer"
            style={styles.primary}
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Superteam Brazil
      </footer>

    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div style={styles.stat}>
      <strong style={styles.statValue}>{value}</strong>
      <span style={styles.statLabel}>{label}</span>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Inter, system-ui, sans-serif",
    background: "#0b0f1a",
    color: "#fff"
  },
  nav: {
    borderBottom: "1px solid #1c2238"
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "24px",
    textAlign: "center"
  },
  containerGrid: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: "80px 24px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24
  },
  navBtn: {
    float: "right",
    color: "#fff",
    textDecoration: "none",
    border: "1px solid #2a2f45",
    padding: "8px 16px",
    borderRadius: 8
  },
  hero: {
    padding: "120px 24px",
    textAlign: "center"
  },
  h1: {
    fontSize: "3.2rem",
    lineHeight: 1.1,
    marginBottom: 24
  },
  gradient: {
    background: "linear-gradient(90deg,#6d5cff,#4cc9f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  lead: {
    maxWidth: 720,
    margin: "0 auto 40px",
    fontSize: "1.15rem",
    opacity: 0.85
  },
  heroBtns: {
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap"
  },
  primary: {
    background: "#6d5cff",
    padding: "14px 28px",
    borderRadius: 10,
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600
  },
  secondary: {
    border: "1px solid #6d5cff",
    color: "#6d5cff",
    padding: "14px 28px",
    borderRadius: 10,
    textDecoration: "none"
  },
  proof: {
    background: "#11162a"
  },
  section: {
    padding: "40px 0"
  },
  sectionAlt: {
    background: "#11162a",
    padding: "80px 0"
  },
  card: {
    background: "#0b0f1a",
    padding: 28,
    borderRadius: 16
  },
  steps: {
    maxWidth: 600,
    margin: "40px auto 0",
    textAlign: "left",
    lineHeight: 1.8
  },
  cta: {
    padding: "120px 24px",
    textAlign: "center"
  },
  footer: {
    padding: 24,
    textAlign: "center",
    opacity: 0.4,
    fontSize: 14
  },
  stat: {
    textAlign: "center"
  },
  statValue: {
    fontSize: "2rem",
    display: "block"
  },
  statLabel: {
    opacity: 0.7
  }
};
