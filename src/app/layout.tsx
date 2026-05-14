import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Biniyam Abera | Full-Stack Developer",
  description: "Full-Stack Developer specializing in Next.js, Node.js & Web3",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}