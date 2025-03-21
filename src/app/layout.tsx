import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalParticles from "@/components/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AP Gaming - University Esports Team",
  description:
    "The premier esports organization at our university, competing at the highest levels across multiple titles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <GlobalParticles />
        {children}
      </body>
    </html>
  );
}
