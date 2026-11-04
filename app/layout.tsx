import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Analytics from "./components/Analytics";
import JsonLd from "./components/JsonLd";
import Script from "next/script";
import { SITE } from "./lib/site";
import { organizationLd } from "./lib/seo";

// font-display: swap keeps text visible while the font loads
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Per-page title/description/canonical/Open Graph/Twitter are set in each page.tsx
// via buildMetadata() (app/lib/seo.ts). These are the site-wide defaults.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Dream India Travel - Premium Tours & Travels Across India",
  description:
    "Himachal tour packages, hotel bookings and custom itineraries for Shimla, Manali, Kasol and more from Dream India Travel, a travel agency in Mandi, Himachal Pradesh.",
  applicationName: SITE.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "wTKfPAHPW2WzWcjPhDJRdsCijwNc156pp5Yz4WLTAec",
  },
};

export const viewport: Viewport = {
  themeColor: "#004381",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        {/* Open the connection to Google's tag server early */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://formspree.io" />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${SITE.gaId}');
          `}
        </Script>
        <JsonLd data={organizationLd()} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  );
}
