export const SITE = {
  url: "https://www.dreamindiatravel.com",
  name: "Dream India Travel",
  legalNameShort: "Dream India Tour & Travel",
  locale: "en_IN",
  phones: [
    { display: "9530609262", e164: "+919530609262" },
    { display: "8360609668", e164: "+918360609668" },
  ],
  whatsapp: "919530609262",
  email: "info@dreamindiatravel.com",
  address: {
    streetAddress: "Near Gram Panchayat Bhawan, Barsu (Bagla), Tehsil Balh",
    addressLocality: "Mandi",
    addressRegion: "Himachal Pradesh",
    postalCode: "175021",
    addressCountry: "IN",
    oneLine:
      "Travel Agency in Mandi, Near Gram Panchayat Bhawan, Barsu (Bagla), Tehsil Balh, District Mandi, Himachal Pradesh - 175021",
  },
  social: [
    "https://www.instagram.com/dreamindiatourtravel.2226/",
    "https://www.facebook.com/dreamindiatourtravel",
    "https://www.youtube.com/@DreamIndiaTourTravel",
  ],
  // Google Analytics 4 measurement ID (already live on the site)
  gaId: "G-9X88LXL5SG",
  // Date of the last real content change, used in sitemap.xml <lastmod>
  lastmod: "2026-11-04",
} as const;

/** Absolute URL for a site path. Every path ends with "/" (site uses trailingSlash). */
export const abs = (path: string) => {
  if (/^https?:/.test(path)) return path;
  let p = path.startsWith("/") ? path : "/" + path;
  if (!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
  return SITE.url + p;
};
