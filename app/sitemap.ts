import type { MetadataRoute } from "next";
import { himachalPackages } from "@/app/data/himachalPackages";
import { classicPackages } from "@/app/data/packages";
import { SITE, abs } from "@/app/lib/site";

export const dynamic = "force-static";

// Generates /sitemap.xml at build time. New Himachal packages added to
// app/data/himachalPackages.ts appear here automatically. Every URL uses the
// trailing-slash form the site serves, so crawlers never hit a redirect.
// Not listed on purpose: /pay-now/ (noindex), and any page that does not exist.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE.lastmod;
  const e = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  ) => ({ url: abs(path), lastModified, changeFrequency, priority });

  return [
    e("/", 1.0, "weekly"),
    e("/tours-package/", 0.9, "weekly"),
    ...himachalPackages.map((p) => e(`/tours-package/himachal/${p.slug}/`, 0.8, "monthly")),
    ...classicPackages.map((p) => e(p.href, 0.7, "monthly")),
    e("/services/", 0.7, "monthly"),
    e("/about/", 0.6, "monthly"),
    e("/contact-us/", 0.7, "monthly"),
    e("/blogs/", 0.6, "weekly"),
    ...[1, 2, 3, 4, 5].map((n) => e(`/articals/blog${n}/`, 0.5, "monthly")),
    e("/terms/", 0.2, "yearly"),
    e("/privacypolicy/", 0.2, "yearly"),
    e("/image-credits/", 0.1, "yearly"),
  ];
}
