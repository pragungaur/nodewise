import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/ui/CursorGlow";

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

const siteUrl = "https://nodewise.vercel.app";

export const metadata: Metadata = {
  title: "NodeWise — AI Solutions",
  description:
    "NodeWise delivers cutting-edge AI solutions — chatbots, automation, consulting, and custom AI development. Founded by Pragun Gaur, age 13.",
  keywords: [
    "AI solutions",
    "NodeWise",
    "artificial intelligence",
    "automation",
    "AI consulting",
    "chatbots",
    "Pragun Gaur",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NodeWise — AI Solutions",
    description:
      "Cutting-edge AI solutions — chatbots, automation, consulting, and custom AI development. Founded by Pragun Gaur.",
    url: siteUrl,
    siteName: "NodeWise",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NodeWise — AI Solutions",
    description:
      "Cutting-edge AI solutions — chatbots, automation, consulting, and custom AI development. Founded by Pragun Gaur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NodeWise",
  url: siteUrl,
  description:
    "NodeWise delivers cutting-edge AI solutions — chatbots, automation, consulting, and custom AI development.",
  founder: {
    "@type": "Person",
    name: "Pragun Gaur",
  },
  foundingDate: "2024",
  areaServed: "IN",
  serviceType: [
    "AI Consulting",
    "Chatbot Development",
    "Business Automation",
    "Custom AI Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-[var(--font-inter)]">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
