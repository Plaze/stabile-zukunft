"use client";

import { useState } from "react";

const navLinks = [
  { href: "#mission", label: "Über Uns" },
  { href: "#programm", label: "Projekte" },
  { href: "#mitmachen", label: "Ehrenamt" },
  { href: "#inspiration", label: "Unsere Initiative" },
  { href: "#anmelden", label: "Mitglied werden" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container-wide header-inner">
        <a href="#top" aria-label="Stabile Zukunft">
          <img className="logo" src="/images/logo-trim.png" alt="Stabile Zukunft" />
        </a>
        <nav className="nav">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn btn-primary" href="#kontakt" style={{ fontSize: 13.5, padding: "11px 20px" }}>
            Jetzt spenden
          </a>
          <button
            className="burger"
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
          >
            ≡
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
