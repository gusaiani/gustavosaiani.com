import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaviconSwitcher } from "./favicon-switcher";

// Plau retail typefaces, self-hosted as variable fonts.
// Kimura Sans carries the whole system: opsz 12-72 means browsers give
// headlines a true display cut automatically, wght 100-900 covers body
// through the poster-weight display.
const kimura = localFont({
  src: "./fonts/KimuraSansVF.woff2",
  weight: "100 900",
  display: "swap",
  variable: "--font-kimura",
});

// Carbona's MONO axis (0-100) gives a mono that belongs to the same
// system as Kimura, instead of falling back to the OS monospace.
const carbona = localFont({
  src: "./fonts/CarbonaVF.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-carbona",
});

export const metadata: Metadata = {
  title: "Gustavo Saiani · Senior Product Engineer · Full-Stack + AI",
  description:
    "Senior product engineer building data-heavy products end to end. Currently sponda.capital. 16 years remote. React, TypeScript, Python, Django, LLMs. Ex-Metabase.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gustavo Saiani · Senior Product Engineer · Full-Stack + AI",
    description:
      "Builds data-heavy products end to end and ships AI-native. Currently building sponda.capital; five years at Metabase before that.",
    url: "https://gustavosaiani.com",
    type: "website",
    images: [{ url: "https://gustavosaiani.com/images/gustavo.png" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gustavo Saiani",
  jobTitle: "Senior Product Engineer",
  url: "https://gustavosaiani.com",
  email: "mailto:gustavo@poe.ma",
  sameAs: [
    "https://github.com/gusaiani",
    "https://linkedin.com/in/gusaiani",
    "https://x.com/gustavosaiani",
    "https://blog.gustavosaiani.com",
  ],
  address: { "@type": "PostalAddress", addressLocality: "Rio de Janeiro", addressCountry: "BR" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kimura.variable} ${carbona.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
