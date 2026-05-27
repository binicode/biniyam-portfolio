import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Biniyam Abera | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
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
    description: "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
    siteName: "Biniyam Abera",
    images: [
      {
        url: "https://biniyam.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Biniyam Abera | Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Biniyam Abera | Full-Stack Developer",
    description: "Full-Stack Developer specializing in Next.js, Node.js & Web3 — building production-grade web products from Addis Ababa, for the world.",
    images: ["https://biniyam.com/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}