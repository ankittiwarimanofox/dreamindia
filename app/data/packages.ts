import { himachalPackages, formatINR } from "./himachalPackages";
import type { ImageKey } from "@/app/lib/images";

export type PackageLink = {
  href: string; // with trailing slash
  title: string;
  img: ImageKey;
  duration: string;
  price?: number;
  priceText?: string;
  tags: string[];
};

// The six original package pages (different itineraries from the newer Himachal pages).
export const classicPackages: PackageLink[] = [
  { href: "/tours-package/shimla/", title: "Shimla Manali Chandigarh Honeymoon", img: "hadimba-temple", duration: "6N / 7D", tags: ["shimla", "manali", "honeymoon", "chandigarh"] },
  { href: "/tours-package/shimla-volvo-package/", title: "Best of Shimla Volvo Tour", img: "shimla-town", duration: "3N / 4D", price: 5999, tags: ["shimla", "volvo"] },
  { href: "/tours-package/shimla-cab/", title: "Shimla Kullu Manali by Cab", img: "kullu-valley", duration: "5N / 6D", tags: ["shimla", "manali", "kullu", "cab"] },
  { href: "/tours-package/kullu-manali-tour/", title: "Dharamshala Dalhousie Tour", img: "khajjiar-dalhousie", duration: "4N / 5D", tags: ["dharamshala", "dalhousie"] },
  { href: "/tours-package/best-of-manali-volvo-package/", title: "Best of Manali Volvo Package", img: "solang-valley", duration: "5 Days", price: 8999, tags: ["manali", "volvo"] },
  { href: "/tours-package/himachal-tour-with-amritsar/", title: "Himachal Tour with Amritsar (6 Days)", img: "golden-temple", duration: "5N / 6D", tags: ["amritsar", "dalhousie", "dharamshala", "manali"] },
];

const tagsFor = (slug: string): string[] => {
  const t: string[] = [];
  if (/shimla/.test(slug)) t.push("shimla");
  if (/manali/.test(slug)) t.push("manali");
  if (/kasol/.test(slug)) t.push("kasol");
  if (/honeymoon/.test(slug)) t.push("honeymoon");
  if (/volvo/.test(slug)) t.push("volvo");
  if (/dharamshala/.test(slug)) t.push("dharamshala", "dalhousie");
  if (/amritsar/.test(slug)) t.push("amritsar", "dalhousie", "dharamshala");
  if (/kullu/.test(slug)) t.push("kullu");
  return t;
};

export const himachalLinks: PackageLink[] = himachalPackages.map((p) => ({
  href: `/tours-package/himachal/${p.slug}/`,
  title: p.title,
  img: p.img,
  duration: `${p.nights}N / ${p.days}D`,
  price: p.price,
  priceText: `${formatINR(p.price)} ${p.priceUnit}`,
  tags: tagsFor(p.slug),
}));

export const allPackages: PackageLink[] = [...himachalLinks, ...classicPackages];

/** Related packages: most shared keywords first, never the page itself. */
export const relatedPackages = (href: string, n = 4): PackageLink[] => {
  const self = allPackages.find((p) => p.href === href);
  const tags = new Set(self?.tags ?? []);
  return allPackages
    .filter((p) => p.href !== href)
    .map((p) => ({ p, score: p.tags.filter((t) => tags.has(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p);
};
