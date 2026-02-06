export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen font-sans">

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto">
        <span className="text-lg font-bold">Superteam Brazil 🇧🇷</span>
        <a
          href="#apply"
          className="border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition"
        >
          Apply
        </a>
      </nav>

      {/* HERO */}
      <section className="text-center px-6 pt-28 pb-36">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          The Home for{" "}
          <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Solana Builders
          </span>
          <br />in Brazil
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
          A collective of founders, developers, and creators building the next
          generation of crypto on Solana.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <a
            href="#apply"
            className="bg-primary px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition"
          >
            Join Superteam
          </a>
          <a
            href="#learn"
            className="border border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/10 transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid gap-6 md:grid-cols-3">
        <Card
          title="Build & Ship"
          text="Collaborate with elite builders and ship real products."
        />
        <Card
          title="Earn Grants"
          text="Access bounties, grants, and paid opportunities."
        />
        <Card
          title="Network IRL"
          text="Exclusive events, hackathons, and founder meetups."
        />
      </section>

      {/* CTA */}
      <section id="apply" className="bg-card py-28 text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to build something real?
        </h2>
        <p className="mt-4 text-white/70 max-w-xl mx-auto">
          Apply to Superteam Brazil and start contributing to the ecosystem.
        </p>
        <a
          href="https://superteam.fun"
          target="_blank"
          className="inline-block mt-8 bg-primary px-10 py-4 rounded-xl font-semibold hover:opacity-90 transition"
        >
          Apply Now
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Superteam Brazil
      </footer>

    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="bg-card rounded-2xl p-8 hover:-translate-y-1 transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{text}</p>
    </div>
  );
}
