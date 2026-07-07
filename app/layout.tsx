import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FaviconSwitcher } from "./favicon-switcher";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustavo Saiani — Senior Product Engineer · Full-Stack + AI",
  description:
    "Senior product engineer building data-heavy products end to end — currently sponda.capital. 16 years remote. React, TypeScript, Python, Django, LLMs. Ex-Metabase.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gustavo Saiani — Senior Product Engineer · Full-Stack + AI",
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
      <body className={jakarta.className}>
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
