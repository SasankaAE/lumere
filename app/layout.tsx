import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = "https://lumere-skincare.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LUMÈRE",
    template: "%s | LUMÈRE",
  },
  description:
    "LUMÈRE is bioactive botanical skincare formulated with clinical-grade actives and rare plant extracts. Discover the ritual behind luminous, resilient skin.",
  keywords: [
    "luxury skincare",
    "botanical skincare",
    "clean beauty",
    "skincare routine",
    "LUMÈRE",
    "serum",
    "facial oil",
  ],
  authors: [{ name: "LUMÈRE" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "LUMÈRE",
    title: "LUMÈRE — Bioactive Botanical Skincare",
    description:
      "Clinical-grade actives. Rare botanicals. A ritual for luminous, resilient skin.",
    images: [{ url: "/images/hero-serum.jpg", width: 1200, height: 630, alt: "LUMÈRE skincare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUMÈRE — Bioactive Botanical Skincare",
    description: "Clinical-grade actives. Rare botanicals. A ritual for luminous, resilient skin.",
    images: ["/images/hero-serum.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "LUMÈRE",
  url: siteUrl,
  logo: `${siteUrl}/images/L.png`,
  sameAs: [
    "https://instagram.com/lumereskincare",
    "https://tiktok.com/@lumereskincare",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="images/L.png"/>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:rounded-full focus:bg-ink focus:text-bone focus:px-6 focus:py-3"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
