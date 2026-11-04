import type { Metadata } from "next";
import { SITE, abs } from "./site";
import { ogImage, imgAlt, type ImageKey } from "./images";

type Opts = {
  title: string; // <= 60 characters
  description: string; // 120-155 characters
  path: string; // e.g. "/tours-package/"
  image: ImageKey; // key from lib/images.ts, used for og:image / twitter:image
  type?: "website" | "article";
  noindex?: boolean;
  published?: string; // ISO date, articles only
};

/** One call = title, description, canonical, Open Graph and Twitter card for a page. */
export function buildMetadata(o: Opts): Metadata {
  const url = abs(o.path);
  const image = { url: abs(ogImage(o.image)), width: 1200, height: 630, alt: imgAlt(o.image) };
  return {
    title: { absolute: o.title },
    description: o.description,
    alternates: { canonical: url },
    ...(o.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: o.type ?? "website",
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      title: o.title,
      description: o.description,
      images: [image],
      ...(o.type === "article" && o.published ? { publishedTime: o.published } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: o.title,
      description: o.description,
      images: [image.url],
    },
  };
}

// ---------- schema.org JSON-LD builders (only real facts from the site) ----------

export const ORG_ID = `${SITE.url}/#organization`;
export const WEBSITE_ID = `${SITE.url}/#website`;

export const organizationLd = () => ({
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": ORG_ID,
  name: SITE.name,
  url: SITE.url + "/",
  logo: abs("/logo.png"),
  image: abs(ogImage("himalaya-rohtang")),
  email: SITE.email,
  telephone: SITE.phones.map((p) => p.e164),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.streetAddress,
    addressLocality: SITE.address.addressLocality,
    addressRegion: SITE.address.addressRegion,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.addressCountry,
  },
  contactPoint: SITE.phones.map((p) => ({
    "@type": "ContactPoint",
    telephone: p.e164,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: ["en", "hi"],
  })),
  sameAs: SITE.social,
});

export const websiteLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE.url + "/",
  name: SITE.name,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
});

export type Crumb = { name: string; path: string };

export const breadcrumbLd = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

type TripOpts = {
  name: string;
  description: string;
  path: string;
  image: ImageKey;
  days: { title: string; details: string }[];
  price?: number; // only when a real price is published on the page
  priceNote?: string;
};

export const tripLd = (t: TripOpts) => ({
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: t.name,
  description: t.description,
  url: abs(t.path),
  image: abs(ogImage(t.image)),
  provider: { "@id": ORG_ID },
  itinerary: {
    "@type": "ItemList",
    numberOfItems: t.days.length,
    itemListElement: t.days.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Day ${i + 1}: ${d.title}`,
      description: d.details,
    })),
  },
  ...(t.price
    ? {
        offers: {
          "@type": "Offer",
          url: abs(t.path),
          price: String(t.price),
          priceCurrency: "INR",
          ...(t.priceNote ? { description: t.priceNote } : {}),
        },
      }
    : {}),
});

export const articleLd = (a: {
  headline: string;
  description: string;
  path: string;
  image: ImageKey;
  published?: string;
  author?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.headline,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  image: abs(ogImage(a.image)),
  ...(a.published ? { datePublished: a.published } : {}),
  author: { "@type": "Organization", name: SITE.name, url: SITE.url + "/" },
  publisher: { "@id": ORG_ID },
});
