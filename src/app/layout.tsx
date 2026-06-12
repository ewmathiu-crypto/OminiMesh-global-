import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "OminiMesh | One intelligent internet for the planet.",
  description:
    "OminiMesh unifies Wi-Fi, fiber, towers, satellites, eSIM, payments, and AI routing into one affordable, global connectivity platform for travelers, businesses, and partners.",
  keywords: ["OminiMesh", "global internet", "AI routing", "eSIM", "Mi-Fi", "Wi-Fi", "connectivity"],
  openGraph: {
    title: "OminiMesh | One intelligent internet for the planet.",
    description:
      "AI-powered connectivity across Wi-Fi, fiber, towers, satellites, eSIM, payments, and routing.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
