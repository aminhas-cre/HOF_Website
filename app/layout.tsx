import type { Metadata } from "next";
import { EB_Garamond, Lato } from "next/font/google";
import "./globals.css";

// EB Garamond for headings, Lato for body: a formal, trustworthy pairing
// (the same family used for legal/financial services content) that fits a
// brand about structuring real financial agreements correctly and faithfully.
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Owner Financing the Halal Way",
  description:
    "Buy a home without riba. Learn owner financing structured the halal way, connect with a community, and get support finding your deal.",
  openGraph: {
    title: "Owner Financing the Halal Way",
    description:
      "Buy a home without riba. Learn owner financing structured the halal way.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${lato.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
