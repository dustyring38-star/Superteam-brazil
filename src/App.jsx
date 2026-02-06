export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif", color: "#fff", background: "#0b0f1a" }}>
      
      {/* HERO */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: 20 }}>
          Superteam Brazil 🇧🇷
        </h1>
        <p style={{ fontSize: "1.25rem", maxWidth: 600, margin: "0 auto 40px" }}>
          The home for Solana builders, founders, and creators in Brazil.
        </p>
        <a
          href="https://superteam.fun"
          target="_blank"
          style={{
            padding: "14px 28px",
            background: "#6d5cff",
            borderRadius: 8,
            color: "#fff",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Join the Community
        </a>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "80px 20px", background: "#11162a" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "grid", gap: 30 }}>
          <Feature
            title="Build on Solana"
            text="Connect with top builders and get support shipping real products."
          />
          <Feature
            title="Events & Hackathons"
            text="Exclusive access to IRL and online events across Brazil."
          />
          <Feature
            title="Earn & Grow"
            text="Grants, bounties, and opportunities for serious contributors."
          />
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2rem", marginBottom: 20 }}>
          Ready to build?
        </h2>
        <a
          href="https://superteam.fun"
          target="_blank"
          style={{
            padding: "14px 28px",
            border: "1px solid #6d5cff",
            borderRadius: 8,
            color: "#6d5cff",
            textDecoration: "none",
            fontWeight: 600
          }}
        >
          Apply Now
        </a>
      </section>

    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div style={{ padding: 30, background: "#0b0f1a", borderRadius: 12 }}>
      <h3 style={{ marginBottom: 10 }}>{title}</h3>
      <p style={{ opacity: 0.85 }}>{text}</p>
    </div>
  );
}
