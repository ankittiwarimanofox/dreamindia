import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, CheckCircle, Clock, MapPin, Users, XCircle } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { preloadHero } from "@/app/lib/preload";
import { himachalPackages, formatINR } from "@/app/data/himachalPackages";
import { himachalSeo } from "@/app/data/pageSeo";
import { packageIntro, packageFaqs } from "@/app/data/seoCopy";
import { buildMetadata, breadcrumbLd, tripLd, faqLd } from "@/app/lib/seo";
import { imgProps } from "@/app/lib/images";
import JsonLd from "@/app/components/JsonLd";
import SeoIntro from "@/app/components/SeoIntro";
import FaqSection from "@/app/components/FaqSection";
import RelatedPackages from "@/app/components/RelatedPackages";

export const dynamicParams = false;

export function generateStaticParams() {
  return himachalPackages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = himachalPackages.find((x) => x.slug === slug);
  if (!p) return {};
  const seo = himachalSeo[p.slug];
  return buildMetadata({
    title: seo.title,
    description: seo.description,
    path: `/tours-package/himachal/${p.slug}/`,
    image: p.img,
  });
}

const exclusions = [
  "Air / train fare (unless mentioned)",
  "Rohtang permit, Solang & Rohtang local taxi",
  "Entry tickets, adventure activities and guide charges",
  "Lunch and personal expenses",
  "Anything not listed in inclusions",
];

export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = himachalPackages.find((x) => x.slug === slug);
  if (!p) notFound();

  const others = himachalPackages.filter((x) => x.slug !== p.slug).slice(0, 4);
  const path = `/tours-package/himachal/${p.slug}/`;
  const seo = himachalSeo[p.slug];
  const faqs = packageFaqs(p);
  // Preload the hero image (LCP) with high priority
  preloadHero(p.img);
  const wa = `https://wa.me/919530609262?text=${encodeURIComponent(`Hi, I'm interested in the ${p.title} (${p.nights}N/${p.days}D) package.`)}`;

  return (
    <main className="bg-white min-h-screen font-sans">
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Home", path: "/" },
            { name: "Himachal Tour Packages", path: "/tours-package/" },
            { name: p.title, path },
          ]),
          tripLd({
            name: `${p.title} (${p.nights}N/${p.days}D)`,
            description: seo.description,
            path,
            image: p.img,
            days: p.itinerary,
            price: p.price,
            priceNote: `Starting price ${p.priceUnit}, double sharing. Varies by season and travel date.`,
          }),
          faqLd(faqs),
        ]}
      />
      <Navbar />
      <section className="relative h-[45vh] w-full mt-[110px] overflow-hidden flex items-center justify-center">
        <img {...imgProps(p.img, { width: 1600, sizes: "100vw", priority: true })} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter">{p.title}</h1>
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest text-white">
            <Link href="/" className="hover:text-[#FFA524]">Home</Link><span>›</span>
            <Link href="/tours-package/" className="hover:text-[#FFA524]">Himachal Tour Packages</Link><span>›</span>
            <span className="text-[#FFA524]">{p.nights}N / {p.days}D</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <p className="text-[#B35F00] font-bold uppercase text-xs tracking-widest mb-2">{p.category} • {p.code}</p>
            <p className="text-gray-600 text-lg">{p.summary}</p>
            <div className="flex flex-wrap gap-4 mt-6 text-[13px] font-bold text-gray-500 uppercase">
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><Clock className="w-4 h-4 text-[#1D70B7]" /> {p.nights} Nights / {p.days} Days</span>
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><Users className="w-4 h-4 text-[#1D70B7]" /> Min {p.minPax} travellers</span>
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100"><MapPin className="w-4 h-4 text-[#1D70B7]" /> {p.destinations.join(" • ")}</span>
            </div>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">{packageIntro[p.slug]}</p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            This {p.nights}-night / {p.days}-day package starts from {formatINR(p.price)} {p.priceUnit} on double sharing (minimum {p.minPax} travellers) and covers {p.destinations.join(", ")}. The price includes hotel stay with daily breakfast and dinner, pick-up and drop, private-cab sightseeing, tolls and taxes, which makes it easy to compare with other quotes. Entry tickets, adventure activities, lunch and permits are paid separately. March to June suits sightseeing and December to February is best for snow. Call 9530609262 or message us on WhatsApp with your dates and we will confirm availability and the final price. Want something different? See <Link href="/tours-package/" className="text-[#1D70B7] underline underline-offset-4">all Himachal tour packages</Link> or <Link href="/contact-us/" className="text-[#1D70B7] underline underline-offset-4">ask for a custom quote</Link>.
          </p>

          <h2 className="text-3xl font-black text-gray-800 mb-8 uppercase">Day-wise Itinerary</h2>
          <div className="space-y-10">
            {p.itinerary.map((d, i) => (
              <div key={i} className="relative pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-100 rounded-full" />
                <h3 className="text-xl font-black text-[#1D70B7] mb-2 uppercase">Day {i + 1}: {d.title}</h3>
                <p className="text-gray-600 leading-relaxed">{d.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-green-50 rounded-3xl">
              <h3 className="text-xl font-black mb-5 text-gray-800 uppercase">Inclusions</h3>
              <ul className="space-y-3">
                {p.inclusions.map((t) => <li key={t} className="flex gap-3 text-gray-700"><CheckCircle className="text-green-500 shrink-0 w-5 h-5" />{t}</li>)}
              </ul>
            </div>
            <div className="p-8 bg-red-50 rounded-3xl">
              <h3 className="text-xl font-black mb-5 text-gray-800 uppercase">Exclusions</h3>
              <ul className="space-y-3">
                {exclusions.map((t) => <li key={t} className="flex gap-3 text-gray-700"><XCircle className="text-red-400 shrink-0 w-5 h-5" />{t}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <div className="bg-gray-50 p-8 rounded-2xl sticky top-32 border border-gray-200">
            <p className="text-xs font-bold text-gray-500 uppercase">Starting from</p>
            <p className="text-4xl font-black text-[#1D70B7]">{formatINR(p.price)}*</p>
            <p className="text-sm font-bold text-gray-500 mb-8">{p.priceUnit} • double sharing</p>
            <div className="space-y-3">
              <a href="tel:9530609262" className="w-full bg-[#B35F00] hover:bg-[#8A5C0E] text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3"><Phone className="w-5 h-5" /> Call 9530609262</a>
              <a href={wa} target="_blank" rel="noopener noreferrer" className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center">WhatsApp Enquiry</a>
              <Link href="/contact-us/" className="w-full border-2 border-[#1D70B7] text-[#1D70B7] py-3 rounded-xl font-bold flex items-center justify-center">Send Enquiry</Link>
            </div>
            <p className="text-xs text-gray-500 mt-4">*Price may vary by season and travel date.</p>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-5">More Himachal Packages</p>
              <div className="space-y-5">
                {others.map((o) => (
                  <Link href={`/tours-package/himachal/${o.slug}/`} key={o.slug} className="flex gap-3 group">
                    <img {...imgProps(o.img, { width: 480, sizes: "80px" })} alt={o.title} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#1D70B7] leading-tight">{o.title}</p>
                      <p className="text-xs text-gray-500 mt-1">{o.nights}N/{o.days}D • {formatINR(o.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <FaqSection faqs={faqs} heading={`${p.title}: frequently asked questions`} />
      <RelatedPackages currentHref={path} />
      <Footer />
    </main>
  );
}
