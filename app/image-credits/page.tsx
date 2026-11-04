import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import JsonLd from "@/app/components/JsonLd";
import BreadcrumbNav from "@/app/components/BreadcrumbNav";
import { buildMetadata, breadcrumbLd } from "@/app/lib/seo";
import { pageSeo } from "@/app/data/pageSeo";
import { imageCredits } from "@/app/data/imageCredits";

const PATH = "/image-credits/";
export const metadata = buildMetadata({ ...pageSeo[PATH], path: PATH });

export default function ImageCredits() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Image Credits", path: PATH }])} />
      <Navbar />
      <div className="pt-[130px]">
        <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Image Credits" }]} />
      </div>
      <main className="max-w-4xl mx-auto px-6 py-14">
        <h1 className="text-4xl font-black text-[#004381] mb-4">Image credits</h1>
        <p className="text-gray-600 mb-8">
          Photos on this website are stored on our own servers. Several come from Wikimedia Commons and are used under the Creative Commons
          licence shown below; the rest are free-to-use photos from Unsplash. Thank you to every photographer. Back to{" "}
          <Link href="/" className="text-[#1D70B7] underline">the home page</Link>.
        </p>
        <ul className="space-y-4">
          {imageCredits.map((c) => (
            <li key={c.key} className="border border-gray-100 rounded-xl p-4">
              <a href={c.page} target="_blank" rel="noopener noreferrer" className="font-bold text-[#1D70B7] underline break-words">
                {c.title.replace("File:", "")}
              </a>
              <p className="text-sm text-gray-600 mt-1">
                By {c.artist || "Wikimedia Commons contributor"} · {c.lic} · cropped and compressed for the web
              </p>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}
