import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { StructuredData } from "@/components/StructuredData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "OminiMesh | One intelligent internet for the planet.",
    template: "%s | OminiMesh",
  },
  description:
    "OminiMesh unifies Wi-Fi, fiber, towers, satellites, eSIM, payments, and AI routing into one affordable, global connectivity platform for travelers, businesses, and partners.",
  keywords: ["OminiMesh", "global internet", "AI routing", "eSIM", "Mi-Fi", "Wi-Fi", "connectivity", "telecom"],
  authors: [{ name: "OminiMesh" }],
  openGraph: {
    title: "OminiMesh | One intelligent internet for the planet.",
    description: "AI-powered connectivity across Wi-Fi, fiber, towers, satellites, eSIM, payments, and routing.",
    type: "website",
    locale: "en_US",
    siteName: "OminiMesh",
  },
  twitter: {
    card: "summary_large_image",
    title: "OminiMesh | One intelligent internet for the planet.",
    description: "AI-powered global connectivity platform.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
