import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NodeWise — AI Solutions",
  description:
    "NodeWise delivers cutting-edge AI solutions — chatbots, automation, consulting, and custom AI development. Founded by Pragun Gaur.",
  keywords: ["AI solutions", "NodeWise", "artificial intelligence", "automation", "AI consulting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased font-[var(--font-inter)]">{children}</body>
    </html>
  );
}
