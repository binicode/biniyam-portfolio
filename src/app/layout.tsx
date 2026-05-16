import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Biniyam Abera | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web3",
    "React",
    "MongoDB",
    "Remote Developer",
    "Ethiopia",
  ],
  authors: [{ name: "Biniyam Abera" }],
  creator: "Biniyam Abera",
  openGraph: {
    type: "website",
    url: "https://biniyam.com",
    title: "Biniyam Abera | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
    siteName: "Biniyam Abera",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biniyam Abera | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}