# deinproduktfilm.de

Landingpage für **deinproduktfilm.de** – gebaut mit [Next.js](https://nextjs.org)
(App Router), TypeScript und [Tailwind CSS](https://tailwindcss.com). Optimiert
für das Deployment auf [Vercel](https://vercel.com).

## Lokal starten

```bash
npm install
npm run dev
```

Die Seite läuft danach auf [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment auf Vercel

Dieses Projekt ist ein Standard-Next.js-Projekt und wird von Vercel automatisch
erkannt – kein zusätzliches Setup nötig.

1. Repository auf GitHub anlegen und diesen Code pushen.
2. Auf [vercel.com/new](https://vercel.com/new) das GitHub-Repo importieren.
3. Vercel erkennt Next.js automatisch → **Deploy** klicken.
4. Eigene Domain `deinproduktfilm.de` unter **Project → Settings → Domains**
   hinzufügen.

## Projektstruktur

```
app/
  layout.tsx     # Root-Layout, globale Metadaten (SEO/OpenGraph)
  page.tsx       # Landingpage (Hero, Leistungen, Ablauf, Pakete, Kontakt)
  globals.css    # Tailwind + Theme-Variablen
```

## Anpassen

- **Texte & Pakete:** Arrays oben in `app/page.tsx` (`leistungen`, `ablauf`, `pakete`).
- **Farben:** `@theme`-Block in `app/globals.css` (`--color-accent` etc.).
- **Kontaktdaten:** E-Mail und Telefon im Abschnitt „Kontakt" in `app/page.tsx`.
- **Metadaten/SEO:** `app/layout.tsx`.
