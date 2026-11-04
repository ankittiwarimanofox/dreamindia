import type { Metadata } from "next";
import Link from "next/link";
import { Clock, MapPin, Users, Phone } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { himachalPackages, formatINR } from "@/app/data/himachalPackages";
import { classicPackages } from "@/app/data/packages";
import { pageSeo } from "@/app/data/pageSeo";
import { hubFaqs, hubIntro } from "@/app/data/seoCopy";
import { buildMetadata, breadcrumbLd, faqLd } from "@/app/lib/seo";
import { abs } from "@/app/lib/site";
import { imgProps } from "@/app/lib/images";
import { preloadHero } from "@/app/lib/preload";
import JsonLd from "@/app/components/JsonLd";
import SeoIntro from "@/app/components/SeoIntro";
import RelatedPackages from "@/app/components/RelatedPackages";

const PATH = "/tours-package/";
export const metadata: Metadata = buildMetadata({ ...pageSeo[PATH], path: PATH });

const faqs = hubFaqs;

export default function ToursPackagePage() {
  preloadHero("himalaya-rohtang");
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <JsonLd
        data={[
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Himachal Tour Packages", path: PATH }]),
          faqLd(faqs),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Himachal tour packages by Dream India Travel",
            itemListElement: [...himachalPackages.map((p) => ({ name: p.title, path: `/tours-package/himachal/${p.slug}/` })), ...classicPackages.map((p) => ({ name: p.title, path: p.href }))].map((x, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: x.name,
              url: abs(x.path),
            })),
          },
        ]}
      />

      <section className="relative h-[45vh] w-full mt-[110px] overflow-hidden flex items-center justify-center">
        <img {...imgProps("himalaya-rohtang", { width: 1600, sizes: "100vw", priority: true })} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">Best Himachal Tour Packages</h1>
          <p className="text-white/90 text-lg font-semibold">Shimla • Manali • Kasol • Dharamshala • Dalhousie • Amritsar — starting {formatINR(9999)}</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-black text-gray-800 uppercase mb-2">Our Himachal Packages</h2>
        <p className="text-gray-500 mb-10">Hotel, breakfast & dinner, and private cab sightseeing included in every package.</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {himachalPackages.map((p) => (
            <article key={p.slug} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col">
              <Link href={`/tours-package/himachal/${p.slug}/`} className="relative h-56 block overflow-hidden">
                <img {...imgProps(p.img, { width: 960, sizes: "(min-width:1024px) 33vw, 100vw" })} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-[#B35F00] text-white text-xs font-bold px-3 py-1 rounded-full">{p.category}</span>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-black text-gray-800 mb-3 leading-tight">
                  <Link href={`/tours-package/himachal/${p.slug}/`} className="hover:text-[#1D70B7]">{p.title}</Link>
                </h3>
                <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500 uppercase mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#1D70B7]" /> {p.nights}N / {p.days}D</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-[#1D70B7]" /> Min {p.minPax} pax</span>
                </div>
                <p className="flex gap-1 text-sm text-gray-600 mb-6"><MapPin className="w-4 h-4 text-[#1D70B7] shrink-0 mt-0.5" /> {p.destinations.join(" • ")}</p>
                <div className="mt-auto flex items-end justify-between gap-3">
                  <div>
                    <p className="text-2xl font-black text-[#1D70B7]">{formatINR(p.price)}*</p>
                    <p className="text-xs text-gray-500 font-bold uppercase">{p.priceUnit}</p>
                  </div>
                  <div className="flex gap-2">
                    <a href={`https://wa.me/919530609262?text=${encodeURIComponent(`Hi, I'm interested in the ${p.title} (${p.nights}N/${p.days}D) package.`)}`} target="_blank" rel="noopener noreferrer" className="bg-green-700 hover:bg-green-800 text-white text-sm font-bold px-4 py-2 rounded-lg">WhatsApp</a>
                    <Link href={`/tours-package/himachal/${p.slug}/`} className="bg-[#B35F00] hover:bg-[#8A5C0E] text-white text-sm font-bold px-4 py-2 rounded-lg">Details</Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-6">*Prices are on double sharing in a deluxe hotel and may vary in peak season (May–June, Christmas–New Year) and by date of travel.</p>
      </section>

      <SeoIntro
        heading={hubIntro.heading}
        paragraphs={hubIntro.paragraphs}
        links={[
          { href: "/tours-package/himachal/best-shimla-manali-combo/", label: "Shimla Manali tour package" },
          { href: "/tours-package/himachal/himachal-honeymoon-tour/", label: "Himachal honeymoon tour" },
          { href: "/blogs/", label: "Himachal travel blog" },
        ]}
      />
      <RelatedPackages items={classicPackages} heading="More Himachal itineraries" intro="Shorter and alternative routes, including Volvo and cab trips from Delhi, Chandigarh and Pathankot. Prices are shown where published; call or WhatsApp for the rest." />

      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black text-gray-800 uppercase mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white rounded-xl p-5 border border-gray-200">
                <summary className="font-bold text-gray-800 cursor-pointer">{f.q}</summary>
                <p className="text-gray-600 mt-3">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="tel:9530609262" className="inline-flex items-center gap-2 bg-[#B35F00] hover:bg-[#8A5C0E] text-white px-8 py-4 rounded-xl font-bold text-lg">
              <Phone className="w-5 h-5" /> Call 9530609262 for a custom quote
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
