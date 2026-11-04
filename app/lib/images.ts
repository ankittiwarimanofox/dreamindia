// Locally hosted, compressed WebP images (see /public/images). Every image has
// 480 / 750 / 1280 px widths (avatars: 200 px) and a 3:2 (avatars 1:1) ratio.
// To add an image: put NAME-480.webp, NAME-750.webp, NAME-1280.webp in /public/images,
// add an entry here with honest alt text, and (optional) NAME.jpg 1200x630 in /public/og.

export type ImageKey = keyof typeof IMAGES;

export const IMAGES = {
 "himalaya-rohtang": {
  "alt": "Mountain road and snow peaks near Rohtang Pass",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "solang-valley": {
  "alt": "Snow-covered trees in Solang Valley near Manali",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "kullu-valley": {
  "alt": "Beas river valley near Palchan in the Kullu district, Himachal Pradesh",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "parvati-kasol": {
  "alt": "Forested hillside in the Parvati Valley near Kasol",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "hadimba-temple": {
  "alt": "Hidimba Devi Temple among deodar trees in Manali",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "khajjiar-dalhousie": {
  "alt": "Khajjiar meadow near Dalhousie, Himachal Pradesh",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "himalaya-spiti": {
  "alt": "Snow peaks near Kibber in Spiti Valley, Himachal Pradesh",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "shimla-ridge": {
  "alt": "The Ridge in Shimla, Himachal Pradesh",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "golden-temple": {
  "alt": "Harmandir Sahib (Golden Temple) in Amritsar",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "kerala-backwaters": {
  "alt": "Houseboat on the Alleppey backwaters in Kerala",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "goa-beach": {
  "alt": "Calangute beach in Goa",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "rishikesh-laxman-jhula": {
  "alt": "Laxman Jhula suspension bridge over the Ganga in Rishikesh",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "key-monastery": {
  "alt": "Key Monastery on a hilltop in Spiti Valley",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "varanasi-aarti": {
  "alt": "Evening Ganga Aarti ceremony at a Varanasi ghat",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "varanasi-boats": {
  "alt": "Boats and temples along the Dashashwamedh Ghat in Varanasi",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "shimla-town": {
  "alt": "Houses on a hillside in Shimla",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "snow-trail": {
  "alt": "Trekker on a snow-covered mountain trail in the Himalayas",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "trekker-valley": {
  "alt": "Trekker looking out over a mountain landscape",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "trekker-ridge": {
  "alt": "Hiker on a mountain ridge",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "mountain-lake": {
  "alt": "Mountain lake surrounded by peaks",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "varanasi-ghats": {
  "alt": "Ghats on the Ganga river in Varanasi",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "taj-mahal": {
  "alt": "Taj Mahal in Agra",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "travel-flatlay": {
  "alt": "Travel planning with a map, camera and notebook",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "resort-evening": {
  "alt": "Resort pool and lodge at dusk",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "resort-lodge": {
  "alt": "Wooden lodge-style resort with a pool and loungers",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "resort-pool": {
  "alt": "Resort pool deck with loungers under palm trees",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "beach-aerial": {
  "alt": "Two paddleboards on turquoise water seen from above",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "suv-road": {
  "alt": "White SUV on a desert road",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "lake-boat": {
  "alt": "Wooden boat on a mountain lake",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "payment-terminal": {
  "alt": "Card payment terminal on a wooden counter",
  "widths": [
   480,
   750,
   1280
  ]
 },
 "avatar-1": {
  "alt": "Traveller portrait",
  "widths": [
   200
  ]
 },
 "avatar-2": {
  "alt": "Traveller portrait",
  "widths": [
   200
  ]
 }
} as const;

type Info = { alt: string; widths: readonly number[] };

const info = (key: ImageKey): Info => IMAGES[key] as Info;

export const imgSrc = (key: ImageKey, width: number = 960) => {
  const ws = info(key).widths;
  const best = ws.find((w) => w >= width) ?? ws[ws.length - 1];
  return `/images/${key}-${best}.webp`;
};

export const imgSrcSet = (key: ImageKey) =>
  info(key)
    .widths.map((w) => `/images/${key}-${w}.webp ${w}w`)
    .join(", ");

export const imgAlt = (key: ImageKey) => info(key).alt;

export const isSquare = (key: ImageKey) => key.startsWith("avatar");

/** Intrinsic size of the width variant that imgSrc(key, width) returns. */
export const imgSize = (key: ImageKey, width: number = 960) => {
  const ws = info(key).widths;
  const best = ws.find((w) => w >= width) ?? ws[ws.length - 1];
  return { width: best, height: isSquare(key) ? best : Math.round((best * 2) / 3) };
};

/** Props for a responsive <img>: src, srcSet, sizes, width, height, alt, loading. */
export const imgProps = (
  key: ImageKey,
  opts: { sizes?: string; width?: number; alt?: string; priority?: boolean } = {}
) => {
  const { width, height } = imgSize(key, opts.width ?? 960);
  return {
    src: imgSrc(key, opts.width ?? 960),
    srcSet: imgSrcSet(key),
    sizes: opts.sizes ?? "100vw",
    width,
    height,
    alt: opts.alt ?? imgAlt(key),
    loading: opts.priority ? ("eager" as const) : ("lazy" as const),
    decoding: "async" as const,
    ...(opts.priority ? { fetchPriority: "high" as const } : {}),
  };
};

/** 1200x630 JPEG used for Open Graph / Twitter cards. */
export const ogImage = (key: ImageKey) => `/og/${key}.jpg`;
