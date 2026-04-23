import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Sinar Home Living | Furniture & Perlengkapan Rumah Tangga",
  description:
    "Toko online terpercaya untuk furniture berkualitas, kasur, sofa, lemari, dan berbagai perlengkapan rumah tangga dengan harga terjangkau dan layanan terbaik.",
  keywords:
    "furniture, kasur, sofa, lemari, rumah tangga, perlengkapan rumah, toko online",
  openGraph: {
    title: "Sinar Home Living | Furniture & Perlengkapan Rumah Tangga",
    description:
      "Toko online terpercaya untuk furniture berkualitas dengan harga terjangkau dan layanan terbaik.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#8B7355",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
