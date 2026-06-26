# Stabile Zukunft – Website

Offizielle Website für **Stabile Zukunft** – ein bundesweites Präventions- und Sportprojekt
von Felix Blume (Kollegah), operative Umsetzung durch Intena Humanity e.V.

Gebaut mit **Next.js 14 (App Router)** + **TypeScript**. Optimiert für Deployment auf **Vercel**.

---

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann auf http://localhost:3000

```bash
npm run build   # Produktions-Build
npm run start   # Build lokal ausführen
```

---

## Deployment bei Vercel (über GitHub)

1. Repository zu GitHub pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit – Stabile Zukunft"
   git branch -M main
   git remote add origin https://github.com/DEIN-USER/stabile-zukunft.git
   git push -u origin main
   ```
2. Auf [vercel.com](https://vercel.com) einloggen → **Add New… → Project**.
3. Das GitHub-Repository auswählen und importieren. Vercel erkennt Next.js automatisch –
   keine weitere Konfiguration nötig. Auf **Deploy** klicken.
4. **Domain verbinden:** Projekt → *Settings → Domains* → `stabile-zukunft.de` hinzufügen
   und die angezeigten DNS-Einträge bei deinem Domain-Anbieter eintragen.

Jeder weitere `git push` löst automatisch ein neues Deployment aus.

---

## Projektstruktur

```
app/
  layout.tsx        Fonts (Anton + Archivo), Metadaten, <html lang="de">
  page.tsx          Alle statischen Sektionen (Hero, Mission, Programm, …)
  globals.css       Komplettes Styling + Responsive-Regeln
components/
  Header.tsx        Sticky-Navigation inkl. Mobile-Menü
  Team.tsx          Team-Grid mit ausklappbaren Profilen
  RegistrationForms.tsx   Anmeldeformulare (Kooperationspartner & Einzelperson)
lib/
  team.ts           Team-Daten / Texte (hier Inhalte pflegen)
public/images/      Alle Bilder (Logo, Team-Fotos, Felix Blume)
```

---

## Inhalte pflegen

- **Team-Texte & -Fotos:** `lib/team.ts`. Neue Fotos in `public/images/` ablegen und den
  `img`-Pfad anpassen (z. B. `/images/neuer-name.jpg`).
- **Statische Texte** (Mission, Programm, Mitmachen, Inspiration Day): direkt in `app/page.tsx`.
- **Farben & Typografie:** CSS-Variablen oben in `app/globals.css`
  (`--accent: #F1E10F` ist die Logo-Farbe).

## Formulare

Die beiden Anmeldeformulare validieren clientseitig (Pflichtfelder, E-Mail, Rechen-Captcha,
Datenschutz-Zustimmung) und öffnen anschließend das E-Mail-Programm mit einer vorausgefüllten
Nachricht an **stabilezukunft@gmail.com**. Für einen echten Server-Versand (ohne dass sich das
Mailprogramm öffnet) kann eine Next.js API-Route oder ein Dienst wie Formspree/Resend ergänzt werden.

---

© 2025 Intena Humanity
