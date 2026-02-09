export default function App() {
  return (
    <div style={s.page}>

      {/* NAV */}
      <header style={s.nav}>
        <div style={s.containerNav}>
          <strong>Superteam Brazil 🇧🇷</strong>
          <a href="#apply" style={s.navBtn}>Earn with Us</a>
        </div>
      </header>

      {/* HERO */}
      <section style={s.hero}>
        <h1 style={s.h1}>
          Earn by Building<br />
          <span style={s.gradient}>Real Web3 Products</span>
        </h1>
        <p style={s.lead}>
          Superteam Brazil connects skilled builders with paid bounties,
          grants, and long-term opportunities in the Solana ecosystem.
        </p>
        <div style={s.heroBtns}>
          <a href="#apply" style={s.primary}>Start Earning</a>
          <a href="#how" style={s.secondary}>How It Works</a>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section style={s.strip}>
        <Stat value="Paid" label="Bounties & Grants" />
        <Stat value="On-Chain" label="Transparent Rewards" />
        <Stat value="Global" label="Ecosystem Partners" />
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={s.section}>
        <h2 style={s.h2}>How You Earn</h2>
        <div style={s.grid}>
          <Card
            title="Apply Once"
            text="Share your skills, experience, and interests."
          />
          <Card
            title="Pick Bounties"
            text="Choose paid tasks posted by ecosystem teams."
          />
          <Card
            title="Ship Work"
            text="Deliver production-quality results."
          />
          <Card
            title="Get Paid"
            text="Earn in USDC, SOL, or grant payouts."
          />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={s.sectionAlt}>
        <h2 style={s.h2}>Who This Is For</h2>
        <ul style={s.list}>
          <li>Developers (frontend, backend, smart contracts)</li>
          <li>Designers & UX specialists</li>
          <li>Technical writers & researchers</li>
          <li>Community & growth operators</li>
        </ul>
      </section>

      {/* WHY IT WINS */}
      <section style={s.section}>
        <h2 style={s.h2}>Why This Earn Model Works</h2>
        <div style={s.grid}>
          <Card
            title="Merit-Based"
            text="No gatekeeping. You earn based on output."
          />
          <Card
            title="Scalable"
            text="Partners post work, contributors execute."
          />
          <Card
            title="Aligned Incentives"
            text="Builders earn, protocols ship faster."
          />
        </div>
      </section>

      {/* CTA */}
      <section id="apply" style={s.cta}>
        <h2 style={s.h2}>Start Earning Today</h2>
        <p style={s.lead}>
          Join Superteam Brazil and get access to paid opportunities.
        </p>
        <a
          href="https://superteam.fun"
          target="_blank"
          rel="noreferrer"
          style={s.primary}
        >
          Apply to Earn
        </a>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        © {new Date().getFullYear()} Superteam Brazil — Earn Program
      </footer>

    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={s.card}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div style={s.stat}>
      <strong style={s.statValue}>{value}</strong>
      <span style={s.statLabel}>{label}</span>
    </div>
  );
}

const s = {
  page: {
    background: "#0b0f1a",
    color: "#fff",
    fontFamily: "Inter, system-ui, sans-serif"
  },
  nav: {
    borderBottom: "1px solid #1c2238"
  },
  containerNav: {
    maxWidth: 1100,
    margin: "0 auto",
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  navBtn: {
    color: "#fff",
    border: "1px solid #2a2f45",
    padding: "8px 14px",
    borderRadius: 8,
    textDecoration: "none"
  },
  hero: {
    padding: "120px 24px",
    textAlign: "center"
  },
  h1: {
    fontSize: "3.1rem",
    lineHeight: 1.1,
    marginBottom: 24
  },
  h2: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: 32
  },
  gradient: {
    background: "linear-gradient(90deg,#6d5cff,#4cc9f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  lead: {
    maxWidth: 720,
    margin: "0 auto 40px",
    opacity: 0.85,
    fontSize: "1.1rem"
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
  strip: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: 24,
    background: "#11162a",
    padding: "60px 24px",
    textAlign: "center"
  },
  section: {
    padding: "100px 24px"
  },
  sectionAlt: {
    background: "#11162a",
    padding: "100px 24px"
  },
  grid: {
    maxWidth: 1000,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 24
  },
  card: {
    background: "#0b0f1a",
    padding: 28,
    borderRadius: 16
  },
  list: {
    maxWidth: 600,
    margin: "0 auto",
    lineHeight: 2,
    opacity: 0.9
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
    fontSize: "1.8rem",
    display: "block"
  },
  statLabel: {
    opacity: 0.7
  }
};
