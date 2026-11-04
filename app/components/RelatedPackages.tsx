import Link from "next/link";
import { relatedPackages, allPackages, type PackageLink } from "@/app/data/packages";
import { imgProps } from "@/app/lib/images";
import { formatINR } from "@/app/data/himachalPackages";

type Props = {
  currentHref?: string;
  heading?: string;
  intro?: string;
  items?: PackageLink[];
  count?: number;
};

/** Cards linking to other package pages (internal linking). */
export default function RelatedPackages({
  currentHref = "",
  heading = "More Himachal tour packages you may like",
  intro,
  items,
  count = 4,
}: Props) {
  const list = items ?? (currentHref ? relatedPackages(currentHref, count) : allPackages.slice(0, count));
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-gray-800 mb-3">{heading}</h2>
        {intro && <p className="text-gray-600 mb-8 max-w-3xl">{intro}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {list.map((p) => (
            <Link key={p.href} href={p.href} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow block">
              <div className="h-40 overflow-hidden">
                <img {...imgProps(p.img, { sizes: "(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw", width: 480 })} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-black text-gray-800 leading-tight group-hover:text-[#1D70B7]">{p.title}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase mt-2">
                  {p.duration}
                  {p.price ? ` • from ${formatINR(p.price)}` : ""}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-8">
          <Link href="/tours-package/" className="font-bold text-[#1D70B7] hover:text-[#B35F00] underline underline-offset-4">
            See all Himachal tour packages
          </Link>
        </p>
      </div>
    </section>
  );
}
