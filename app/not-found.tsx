import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import RelatedPackages from "@/app/components/RelatedPackages";

export const metadata: Metadata = {
  title: { absolute: "Page Not Found | Dream India Travel" },
  description: "This page could not be found. Browse our Himachal tour packages or contact Dream India Travel.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen font-sans">
      <Navbar />
      <section className="pt-[170px] pb-12 text-center px-6">
        <p className="text-[#B35F00] font-black tracking-widest uppercase text-sm mb-3">Error 404</p>
        <h1 className="text-4xl md:text-6xl font-black text-[#004381] mb-4">This page has moved on</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
          The page you are looking for does not exist or has been moved. Here are our Himachal tour packages, or tell us what you need and we will help.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/tours-package/" className="bg-[#B35F00] hover:bg-[#8A5C0E] text-white font-bold px-6 py-3 rounded-xl">Himachal tour packages</Link>
          <Link href="/" className="border-2 border-[#1D70B7] text-[#1D70B7] font-bold px-6 py-3 rounded-xl">Home</Link>
          <Link href="/contact-us/" className="border-2 border-[#1D70B7] text-[#1D70B7] font-bold px-6 py-3 rounded-xl">Contact us</Link>
        </div>
      </section>
      <RelatedPackages heading="Popular Himachal tours" count={4} />
      <Footer />
    </main>
  );
}
