import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smain Rabhi Développeur à Lyon",
  description: "Je suis Smaïn, développeur full-stack basé à Lyon.",
  keywords: [
    "Développeur",
    "Création de site",
    "Full-Stack",
    "Développeur à Lyon",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
