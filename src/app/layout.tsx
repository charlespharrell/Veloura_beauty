import type { Metadata } from "next";
import { Cormorant, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VELOURA | Your beauty. Your ritual.",
  description:
    "A polished, premium multi-category beauty boutique for skincare, serums, moisturisers, sunscreen, body care, hair care, makeup, soaps, lotions and curated beauty sets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`} style={{ backgroundColor: "#F8F1E9" }}>
      <body className="min-h-full antialiased" style={{ backgroundColor: "#F8F1E9", color: "#49372D" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}



