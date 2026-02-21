import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
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
      <body className={`${inter.variable} ${dmSerif.variable} font-sans antialiased noise-overlay`}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
