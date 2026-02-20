import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Milo | AI Employee for Dental Clinics",
  description:
    "Never miss a patient again. Milo is your AI-powered employee that handles missed calls, books appointments, follows up with leads, and collects Google reviews — 24/7.",
  keywords: [
    "AI employee",
    "dental clinic",
    "missed calls",
    "appointment booking",
    "AI receptionist",
    "Australia",
  ],
  openGraph: {
    title: "Milo | AI Employee for Dental Clinics",
    description:
      "Never miss a patient again. Your AI employee that handles calls, books appointments, and grows your practice — 24/7.",
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
