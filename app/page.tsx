import Header from "@/components/Header";
import Team from "@/components/Team";
import RegistrationForms from "@/components/RegistrationForms";

const challenges = [
  "Mobbing",
  "Gewalt",
  "Drogenkonsum",
  "Medienkonsum",
  "Fehlende Orientierung",
  "Falsche Vorbilder",
];

const programm = [
  { n: "01", t: "Sportchallenges für Jugendliche" },
  { n: "02", t: "Enge Zusammenarbeit mit Verantwortlichen", s: "Betreuende, Pädagogen, Trainer" },
  { n: "03", t: "Regelmäßige Besuche mit dem Projekt-Van in Gruppen & Schulen" },
  { n: "04", t: "Motivation, Orientierung & persönliche Entwicklung" },
  { n: "05", t: "Auszeichnung besonderer Leistungen nach 6 Monaten" },
];

const inspiration = [
  { n: "01", l: "Motivation & Austausch" },
  { n: "02", l: "Auszeichnung mit hochwertigen Preisen" },
  { n: "03", l: "Regelmäßige Besuche mit dem Projekt-Van" },
  { n: "04", l: "Begegnung & Gespräch mit Kollegah" },
];

const navLinks = [
  { href: "#mission", label: "Über Uns" },
  { href: "#programm", label: "Projekte" },
  { href: "#mitmachen", label: "Ehrenamt" },
  { href: "#inspiration", label: "Unsere Initiative" },
  { href: "#anmelden", label: "Mitglied werden" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section id="top" className="hero">
        <div className="glow" />
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span />
              <span>Sport. Werte. Zukunft.</span>
            </div>
            <h1 className="h1">
              Stabile
              <br />
              <span className="skew">Zukunft</span>
            </h1>
            <p className="hero-lead">
              Ein bundesweites Präventions- und Sportprojekt von{" "}
              <strong>Felix Blume (Kollegah)</strong>. Operative Umsetzung durch{" "}
              <strong>Intena Humanity e.V.</strong>
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#mitmachen">Jetzt teilnehmen</a>
              <a className="btn btn-outline" href="#mission">Mehr erfahren</a>
            </div>
          </div>
          <div className="hero-img-wrap">
            <div className="frame" />
            <img className="hero-img" src="/images/felix.jpg" alt="Felix Blume (Kollegah)" />
            <div className="hero-badge">
              <div className="n">Felix Blume · Kollegah</div>
              <div className="r">Projektförderer</div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="section">
        <div className="container">
          <div className="kicker" style={{ marginBottom: 18 }}>Unsere Mission</div>
          <div className="mission-grid">
            <h2 className="h2">
              Warum dieses
              <br />
              Projekt?
            </h2>
            <div>
              <p>
                Jugendliche stehen heute vor großen Herausforderungen: Mobbing, Gewalt,
                Drogenkonsum, übermäßiger Medienkonsum, fehlende Orientierung und falsche Vorbilder.
              </p>
              <p>
                <strong>Stabile Zukunft</strong> ist genau dafür da, diesen Entwicklungen aktiv
                entgegenzuwirken – mit Sport, klaren Werten und echter Begleitung.
              </p>
              <div className="chips">
                {challenges.map((c) => (
                  <span key={c} className="chip">{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="pullquote-wrap">
            <p className="pullquote">
              Sport ist unser Werkzeug – für <span className="accent">Fokus</span>,{" "}
              <span className="accent">Disziplin</span> und{" "}
              <span className="accent">Selbstvertrauen</span>.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMM */}
      <section id="programm" className="section" style={{ background: "var(--panel)" }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 14 }}>Das Programm</div>
          <h2 className="h2" style={{ marginBottom: 48 }}>Was wir machen</h2>
          <div className="prog-grid">
            {programm.map((p) => (
              <div key={p.n} className="prog-card">
                <div className="prog-num">{p.n}</div>
                <div className="t">{p.t}</div>
                {p.s && <div className="s">{p.s}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MITMACHEN */}
      <section id="mitmachen" className="section">
        <div className="container">
          <div className="kicker" style={{ marginBottom: 14 }}>Mitmachen</div>
          <h2 className="h2" style={{ marginBottom: 18 }}>Wie das Projekt läuft</h2>
          <p style={{ fontSize: 17, color: "var(--muted)", maxWidth: 640, marginBottom: 46 }}>
            Am Projekt Stabile Zukunft kannst du auf zwei Arten teilnehmen.
          </p>
          <div className="two">
            <div className="mcard">
              <div className="eyebrow">01 · Organisation</div>
              <h3>Als Kooperationspartner</h3>
              <p>
                Für Schulen, Vereine, Wohngruppen, Jugendzentren und alle Einrichtungen, die mit
                Jugendlichen arbeiten. Deutschlandweit.
              </p>
              <p>
                Gemeinsam begleiten wir die Jugendlichen über sechs Monate. Besonders engagierte
                Jugendliche werden ausgezeichnet und zum Inspiration Day mit Kollegah eingeladen.
              </p>
              <ul>
                <li><span>→</span>Disziplin, Verantwortung, Zuverlässigkeit</li>
                <li><span>→</span>Auszeichnungen und hochwertige Preise</li>
                <li><span>→</span>Inspiration Day mit Kollegah</li>
              </ul>
              <a className="btn btn-primary" href="#form-coop">Jetzt anmelden</a>
            </div>
            <div className="mcard">
              <div className="eyebrow">02 · Einzelperson</div>
              <h3>Als Einzelperson</h3>
              <div className="sub">MMA &amp; Fitness Training in Mönchengladbach</div>
              <p>
                Jugendliche zwischen 12 und 18 Jahren können direkt an unserem MMA- und
                Fitness-Training teilnehmen. Trainiere gemeinsam mit anderen Jugendlichen, nimm an
                Sport-Challenges teil und entwickle dich sportlich und persönlich weiter.
              </p>
              <ul>
                <li><span>→</span>Alter 12 – 18 Jahre</li>
                <li><span>→</span>MMA- &amp; Fitness-Training</li>
                <li><span>→</span>Sport-Challenges &amp; Entwicklung</li>
              </ul>
              <a className="btn btn-primary" href="#form-indiv">Jetzt anmelden</a>
            </div>
          </div>
        </div>
      </section>

      {/* INSPIRATION DAY */}
      <section id="inspiration" className="insp">
        <div className="container">
          <div className="insp-grid">
            <div>
              <div className="eyebrow">Das Highlight</div>
              <h2>
                Inspiration
                <br />
                Day
              </h2>
              <p>
                Nach jedem 6-Monats-Zeitraum treffen sich ausgewählte Jugendliche aus verschiedenen
                Gruppen zu einem Inspiration Day. Ein Tag, der inspiriert – und nachhaltig wirkt.
              </p>
            </div>
            <div className="insp-list">
              {inspiration.map((i) => (
                <div key={i.n} className="insp-row">
                  <span className="num">{i.n}</span>
                  <span className="label">{i.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <Team />

      {/* KONTAKT / CTA */}
      <section id="kontakt" className="section contact" style={{ background: "var(--panel)" }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 16 }}>Sei dabei</div>
          <h2>
            Teil der Zukunft
            <br />
            werden.
          </h2>
          <p>Sei cool. Sei dabei. Melde dich jetzt an und werde Teil von Stabile Zukunft.</p>
          <div className="contact-cards">
            <a className="ccard" href="mailto:stabilezukunft@gmail.com">
              <div className="l">E-Mail</div>
              <div className="v">stabilezukunft@gmail.com</div>
            </a>
            <a className="ccard" href="https://instagram.com/stabile_zukunft" target="_blank" rel="noreferrer">
              <div className="l">Instagram</div>
              <div className="v">@stabile_zukunft</div>
            </a>
            <a className="ccard" href="https://tiktok.com/@stabile_zukunft" target="_blank" rel="noreferrer">
              <div className="l">TikTok</div>
              <div className="v">@stabile_zukunft</div>
            </a>
          </div>
        </div>
      </section>

      {/* ANMELDEN / FORMS */}
      <RegistrationForms />

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img className="footer-logo" src="/images/logo-trim.png" alt="Stabile Zukunft" />
            <h4>Intena Humanity e.V.</h4>
            <div className="addr">
              Erzbergerstraße 197, 41065 Mönchengladbach
              <br />
              0163 394 18 83
              <br />
              <a href="mailto:info@intenahumanity.de">info@intenahumanity.de</a>
            </div>
            <div className="hours">
              <strong>Sprechzeiten</strong>
              <br />
              Mo. – Do.: 12:00 – 18:00 Uhr
              <br />
              Samstag: 9:00 – 13:30 Uhr
            </div>
          </div>
          <div>
            <div className="col-title">Navigation</div>
            <div className="links">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="col-title">Rechtliches</div>
            <div className="links">
              <a href="#">Impressum</a>
              <a href="#">Datenschutz</a>
              <a href="#">Privatsphäre-Einstellungen</a>
              <a href="#">Einwilligungen widerrufen</a>
            </div>
          </div>
        </div>
        <div className="copy">© Copyright 2025 Intena Humanity</div>
      </footer>
    </>
  );
}
