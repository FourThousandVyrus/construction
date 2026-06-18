import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Epicshield Surfaces | Construction & Engineering",
    template: "%s | Epicshield Surfaces",
  },
  description:
    "Epicshield Surfaces is a premier construction and engineering firm specializing in infrastructure development, civil construction, and project management across Africa.",
  keywords: ["construction", "engineering", "infrastructure development", "civil construction", "Ghana", "Africa", "project management"],
  authors: [{ name: "Epicshield Surfaces" }],
  creator: "Epicshield Surfaces",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Epicshield Surfaces",
    title: "Epicshield Surfaces | Construction & Engineering",
    description: "Premier construction and engineering firm building world-class infrastructure across Africa.",
    url: "https://www.epicshield.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epicshield Surfaces | Construction & Engineering",
    description: "Premier construction and engineering firm building world-class infrastructure across Africa.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div aria-hidden="true" className="grain-overlay" />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
