import type { Metadata } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stabile-zukunft.de"),
  title: "Stabile Zukunft – Sport. Werte. Zukunft.",
  description:
    "Ein bundesweites Präventions- und Sportprojekt von Felix Blume (Kollegah). Operative Umsetzung durch Intena Humanity e.V. – Sport, klare Werte und echte Begleitung für Jugendliche.",
  keywords: [
    "Stabile Zukunft",
    "Kollegah",
    "Felix Blume",
    "Intena Humanity",
    "Jugendprävention",
    "Sport",
    "MMA",
    "Mönchengladbach",
  ],
  openGraph: {
    title: "Stabile Zukunft – Sport. Werte. Zukunft.",
    description:
      "Ein bundesweites Präventions- und Sportprojekt von Felix Blume (Kollegah).",
    url: "https://stabile-zukunft.de",
    siteName: "Stabile Zukunft",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${anton.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
