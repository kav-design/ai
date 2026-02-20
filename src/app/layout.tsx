import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milo — Your AI Employee | Never Miss a Patient Again",
  description:
    "Milo is the AI employee that handles missed calls, books appointments, follows up with leads, and collects Google reviews for dental clinics — 24/7.",
  openGraph: {
    title: "Milo — Your AI Employee",
    description:
      "Never miss a patient again. AI-powered missed call handling, appointment booking, and review collection for dental clinics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
