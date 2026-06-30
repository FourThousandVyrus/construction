import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { GlobalLoader } from "@/components/global-loader";
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
    default: "Epicshield Infrastructure | Hospital Construction & Medical Technology",
    template: "%s | Epicshield Infrastructure",
  },
  description:
    "Epicshield Infrastructure is Ghana's premier private hospital construction and healthcare engineering firm, delivering turnkey medical facilities, cleanrooms, and medical gas systems.",
  keywords: [
    "hospital construction Ghana",
    "healthcare infrastructure Africa",
    "medical gas piping installation",
    "operating theatre cleanrooms",
    "lead-lined hospital doors",
    "private hospital builder Accra",
    "medical equipment procurement Kumasi",
    "clinical engineering services",
    "Epicshield",
    "Epicshield Infrastructure"
  ],
  authors: [{ name: "Epicshield Infrastructure" }],
  creator: "Epicshield Infrastructure",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Epicshield Infrastructure",
    title: "Epicshield Infrastructure | Hospital Construction & Medical Technology",
    description: "Ghana's premier private hospital construction and healthcare engineering firm, delivering turnkey medical facilities.",
    url: "https://www.epicshield.co",
  },
  twitter: {
    card: "summary_large_image",
    title: "Epicshield Infrastructure | Hospital Construction & Medical Technology",
    description: "Ghana's premier private hospital construction and healthcare engineering firm, delivering turnkey medical facilities.",
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
        <GlobalLoader />
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
