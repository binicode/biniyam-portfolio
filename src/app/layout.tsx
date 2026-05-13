import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}