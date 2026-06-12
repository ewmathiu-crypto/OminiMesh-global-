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
  title: { default: "OminiMesh", template: "%s | OminiMesh" },
  description:
    "OminiMesh unifies Wi-Fi, fiber, towers, satellites, eSIM, payments, and AI routing into one affordable global connectivity platform for travelers, businesses, and partners.",
  openGraph: { title: "OminiMesh", description: "AI-powered global connectivity platform.", type: "website" },
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
        <StructuredData />
        <div className="min-h-screen bg-slate-950 text-white">
          {children}
        </div>
      </body>
    </html>
  );
}
