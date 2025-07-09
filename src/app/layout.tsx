import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutWrapper from '@/components/layout/LayoutWrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sulamax - Profesyonel Sulama Sistemleri",
  description: "Bahçe ve tarla sulaması için kaliteli sulama sistemleri, damlama sulama, sprinkler ve pompa sistemleri. Uygun fiyat, hızlı kargo.",
  keywords: "sulama sistemleri, damlama sulama, sprinkler, pompa sistemleri, bahçe sulaması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50`}
      >
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
