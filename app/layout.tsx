import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dream India Travel - Premium Tours & Travels Across India",
  description:
    "Discover India with Dream India Travel. Premium tour packages, hotel bookings, and customized itineraries for Shimla, Manali, Himalayan tours, and more. Expert travel planning with 24/7 support.",
  verification: {
    google: "wTKfPAHPW2WzWcjPhDJRdsCijwNc156pp5Yz4WLTAec",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9X88LXL5SG"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9X88LXL5SG');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
