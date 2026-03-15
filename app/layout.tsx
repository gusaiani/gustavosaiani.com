import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FaviconSwitcher } from "./favicon-switcher";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gustavo Saiani — Senior Software Engineer",
  description:
    "Senior Software Engineer with 16 years building high-scale software. Previously at Metabase, Spoke, Toptal, and EmCasa.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Gustavo Saiani — Senior Software Engineer",
    description:
      "Senior Software Engineer with 16 years building high-scale software.",
    url: "https://gustavosaiani.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
