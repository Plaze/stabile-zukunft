import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produktfilme, die verkaufen",
};

const leistungen = [
  {
    title: "Produktfilme",
    text: "Cinematische Filme, die dein Produkt erlebbar machen – für Website, Shop und Social Media.",
    icon: "🎬",
  },
  {
    title: "Social-Media-Clips",
    text: "Kurze, scroll-stoppende Videos im Hoch- und Querformat, optimiert für Reels, TikTok & Shorts.",
    icon: "📱",
  },
  {
    title: "Produktfotografie",
    text: "Hochwertige Stills aus derselben Produktion – konsistent zu deinem Film.",
    icon: "📸",
  },
  {
    title: "Animation & Motion",
    text: "Erklärende 3D- und Motion-Graphics-Sequenzen, die Funktionen sichtbar machen.",
    icon: "✨",
  },
];

const ablauf = [
  {
    step: "01",
    title: "Briefing & Konzept",
    text: "Wir lernen dein Produkt und deine Ziele kennen und entwickeln das passende Film-Konzept.",
  },
  {
    step: "02",
    title: "Produktion",
    text: "Dreh im Studio oder vor Ort – mit professionellem Licht, Kamera und Set-Design.",
  },
  {
    step: "03",
    title: "Postproduktion",
    text: "Schnitt, Color-Grading, Sounddesign und Animation bis zum finalen Look.",
  },
  {
    step: "04",
    title: "Auslieferung",
    text: "Du erhältst deinen Film in allen benötigten Formaten – ready für jede Plattform.",
  },
];

const pakete = [
  {
    name: "Starter",
    preis: "ab 1.490 €",
    beschreibung: "Ideal für ein einzelnes Produkt.",
    features: [
      "1 Produktfilm (bis 30 Sek.)",
      "Studio-Dreh",
      "Schnitt & Color-Grading",
      "Lizenzfreie Musik",
      "Web- & Social-Formate",
    ],
    highlight: false,
  },
  {
    name: "Business",
    preis: "ab 3.900 €",
    beschreibung: "Der Allrounder für Marken mit mehreren Produkten.",
    features: [
      "1 Hauptfilm + 3 Social-Clips",
      "Studio- oder On-Location-Dreh",
      "Motion-Graphics-Intro",
      "10 Produktfotos",
      "Alle gängigen Formate",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    preis: "individuell",
    beschreibung: "Für Kampagnen mit höchstem Anspruch.",
    features: [
      "Konzept- & Drehbuch-Entwicklung",
      "Mehrtägige Produktion",
      "3D-Animation & VFX",
      "Foto-Strecke",
      "Persönliche Betreuung",
    ],
    highlight: false,
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Hintergrund-Glow */}
      <div className="glow pointer-events-none absolute inset-x-0 top-0 h-[600px]" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-lg font-semibold tracking-tight">
          dein<span className="text-[var(--color-accent)]">produktfilm</span>.de
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#leistungen" className="transition hover:text-white">
            Leistungen
          </a>
          <a href="#ablauf" className="transition hover:text-white">
            Ablauf
          </a>
          <a href="#pakete" className="transition hover:text-white">
            Pakete
          </a>
          <a href="#kontakt" className="transition hover:text-white">
            Kontakt
          </a>
        </nav>
        <a
          href="#kontakt"
          className="rounded-full bg-[var(--color-accent)] px-5 py-2 text-sm font-medium text-white transition hover:bg-[var(--color-accent-soft)]"
        >
          Anfragen
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 text-center md:pt-28">
        <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/60">
          Videoproduktion für Marken & Onlineshops
        </span>
        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Produktfilme, die deine Produkte{" "}
          <span className="text-[var(--color-accent)]">verkaufen.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Wir verwandeln deine Produkte in hochwertige Filme und Videos – vom
          ersten Konzept bis zum fertigen Clip. Bereit für Website, Shop und
          Social Media.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="w-full rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-center font-medium text-white transition hover:bg-[var(--color-accent-soft)] sm:w-auto"
          >
            Projekt anfragen
          </a>
          <a
            href="#leistungen"
            className="w-full rounded-full border border-white/15 px-8 py-3.5 text-center font-medium text-white/80 transition hover:border-white/30 hover:text-white sm:w-auto"
          >
            Leistungen ansehen
          </a>
        </div>

        <dl className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
          {[
            ["120+", "Produzierte Filme"],
            ["48 h", "Erstschnitt"],
            ["4K", "Auflösung"],
            ["100 %", "Made in Germany"],
          ].map(([value, label]) => (
            <div key={label}>
              <dt className="text-3xl font-semibold text-white">{value}</dt>
              <dd className="mt-1 text-sm text-white/50">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Leistungen */}
      <section
        id="leistungen"
        className="relative z-10 mx-auto max-w-6xl px-6 py-24"
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Was wir für dich produzieren
          </h2>
          <p className="mt-4 text-white/60">
            Alles aus einer Hand – damit dein Produkt überall überzeugt.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leistungen.map((l) => (
            <div
              key={l.title}
              className="rounded-2xl border border-white/10 bg-[var(--color-ink-soft)] p-6 transition hover:border-white/20"
            >
              <div className="text-3xl">{l.icon}</div>
              <h3 className="mt-5 text-lg font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {l.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Ablauf */}
      <section id="ablauf" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            So entsteht dein Film
          </h2>
          <p className="mt-4 text-white/60">
            Ein klarer Prozess – transparent von der ersten Idee bis zur
            Auslieferung.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ablauf.map((a) => (
            <div
              key={a.step}
              className="rounded-2xl border border-white/10 bg-[var(--color-ink-soft)] p-6"
            >
              <div className="text-sm font-semibold text-[var(--color-accent)]">
                {a.step}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {a.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pakete */}
      <section id="pakete" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pakete & Preise
          </h2>
          <p className="mt-4 text-white/60">
            Transparente Pakete – oder ein individuelles Angebot für dein
            Projekt.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pakete.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-[var(--color-accent)] bg-[var(--color-ink-soft)]"
                  : "border-white/10 bg-[var(--color-ink-soft)]"
              }`}
            >
              {p.highlight && (
                <span className="mb-4 inline-block w-fit rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-white">
                  Beliebt
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-white/50">{p.beschreibung}</p>
              <div className="mt-5 text-3xl font-semibold">{p.preis}</div>
              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-0.5 text-[var(--color-accent)]">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-medium transition ${
                  p.highlight
                    ? "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-soft)]"
                    : "border border-white/15 text-white/80 hover:border-white/30 hover:text-white"
                }`}
              >
                Auswählen
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Kontakt / CTA */}
      <section id="kontakt" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[var(--color-ink-soft)] to-[var(--color-ink)] px-8 py-16 text-center md:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Bereit für deinen Produktfilm?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">
            Erzähl uns von deinem Produkt – wir melden uns innerhalb von 24
            Stunden mit einer ersten Einschätzung.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hallo@deinproduktfilm.de"
              className="w-full rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-center font-medium text-white transition hover:bg-[var(--color-accent-soft)] sm:w-auto"
            >
              hallo@deinproduktfilm.de
            </a>
            <a
              href="tel:+490000000000"
              className="w-full rounded-full border border-white/15 px-8 py-3.5 text-center font-medium text-white/80 transition hover:border-white/30 hover:text-white sm:w-auto"
            >
              Rückruf vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} deinproduktfilm.de – Alle Rechte
            vorbehalten.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-white">
              Impressum
            </a>
            <a href="#" className="transition hover:text-white">
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
