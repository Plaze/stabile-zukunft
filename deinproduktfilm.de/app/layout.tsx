import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://deinproduktfilm.de";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "deinproduktfilm.de – Produktfilme, die verkaufen",
    template: "%s | deinproduktfilm.de",
  },
  description:
    "Wir produzieren hochwertige Produktfilme und Produktvideos, die deine Produkte ins beste Licht rücken – von der Idee bis zum fertigen Film. Jetzt unverbindlich anfragen.",
  keywords: [
    "Produktfilm",
    "Produktvideo",
    "Imagefilm",
    "Werbefilm",
    "Videoproduktion",
    "Produktfotografie",
  ],
  openGraph: {
    title: "deinproduktfilm.de – Produktfilme, die verkaufen",
    description:
      "Hochwertige Produktfilme und Produktvideos – von der Idee bis zum fertigen Film.",
    url: siteUrl,
    siteName: "deinproduktfilm.de",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
