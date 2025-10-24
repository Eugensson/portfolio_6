import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Taylor | Web Developer & Designer Portfolio",
    template: "%s | Alex Taylor Portfolio",
  },
  description:
    "Discover the creative work of Alex Taylor — a professional web developer and designer specializing in modern, responsive websites and user-friendly digital experiences. Explore projects, design concepts, and development expertise in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
