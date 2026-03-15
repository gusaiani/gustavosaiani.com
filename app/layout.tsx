import type { Metadata } from "next";
import "./globals.css";
import { FaviconSwitcher } from "./favicon-switcher";

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
      <body>
        <FaviconSwitcher />
        {children}
      </body>
    </html>
  );
}
