export default function App() {
  return (
    <div style={styles.page}>
      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.logo}>Superteam Brazil 🇧🇷</span>
        <a href="#apply" style={styles.navBtn}>Apply</a>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          The Home for <span style={styles.gradient}>Solana Builders</span><br />
          in Brazil
        </h1>
        <p style={styles.heroText}>
          Join founders, developers, and creators building the future of crypto.
        </p>
        <div style={styles.heroBtns}>
          <a href="#apply" style={styles.primaryBtn}>Join Superteam</a>
          <a href="#learn" style={styles.secondaryBtn}>Learn More</a>
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.features}>
        <Feature
          title="Build & Ship"
          text="Work with top builders and ship real products on Solana."
        />
        <Feature
          title="Earn Grants"
          text="Access bounties, grants, and paid opportunities."
        />
        <Feature
          title="Events & Network"
          text="IRL meetups, hackathons, and a serious builder network."
        />
      </section>

      {/* CTA */}
      <section id="apply" style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to build?</h2>
        <p style={styles.ctaText}>
          Apply to Superteam Brazil and start contributing today.
        </p>
        <a
          href="https://superteam.fun"
          target="_blank"
          style={styles.primaryBtn}
        >
          Apply Now
        </a>
      </section>
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

const styles = {
  page: {
    background: "#0b0f1a",
    color: "#fff",
    fontFamily: "Inter, system-ui, sans-serif",
    minHeight: "100vh"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "24px 40px",
    alignItems: "center"
  },
  logo: {
    fontWeight: 700,
    fontSize: "1.1rem"
  },
  navBtn: {
    color: "#fff",
    textDecoration: "none",
    border: "1px solid #2a2f45",
    padding: "8px 16px",
    borderRadius: 8
  },
  hero: {
    textAlign: "center",
    padding: "120px 20px"
  },
  heroTitle: {
    fontSize: "3.5rem",
    lineHeight: 1.1,
    marginBottom: 20
  },
  gradient: {
    background: "linear-gradient(90deg, #6d5cff, #4cc9f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },
  heroText: {
    fontSize: "1.25rem",
    opacity:
