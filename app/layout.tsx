import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
