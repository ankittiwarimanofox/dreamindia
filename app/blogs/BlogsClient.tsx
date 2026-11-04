"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag, ChevronRight } from 'lucide-react';
import Footer from "@/app/components/Footer";
import { imgProps, type ImageKey } from "@/app/lib/images";
import BreadcrumbNav from "@/app/components/BreadcrumbNav";
import RelatedPackages from "@/app/components/RelatedPackages";
const BlogsPage = () => {
  const articles = [
    {
      title: "Exploring the Hidden Gems of Himachal",
      desc: "Discover the untouched valleys and serene landscapes of the Himalayas that most tourists miss.",
      category: "Adventure",
      date: "May 10, 2026",
      image: "solang-valley",
      link: "/articals/blog2" // Adjust path based on your routing
    },
    {
      title: "Top 10 Travel Tips for First-Timers",
      desc: "Everything you need to know about packing, safety, and local etiquette for your India tour.",
      category: "Travel Tips",
      date: "May 08, 2026",
      image: "travel-flatlay",
      link: "/articals/blog3"
    },
    {
      title: "A Guide to Budget-Friendly Trekking",
      desc: "How to plan an adventurous mountain trek without breaking the bank.",
      category: "Budget",
      date: "May 05, 2026",
      image: "trekker-valley",
      link: "/articals/blog4"
    },
    {
      title: "Luxury Resorts: Where Comfort Meets Nature",
      desc: "A curated list of the most stunning eco-resorts and luxury stays across the country.",
      category: "Luxury",
      date: "May 01, 2026",
      image: "resort-evening",
      link: "/articals/blog5"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* --- ENHANCED HERO SECTION --- */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a] mt-[90px]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            {...imgProps("himalaya-spiti", { width: 1600, sizes: "100vw" })} 
            className="w-full h-full object-cover opacity-60 scale-105 animate-subtle-zoom" 
           
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 animate-fade-in-up">
            <Tag size={14} className="text-[#FFA524]" />
            <span className="text-white text-xs font-black uppercase tracking-[0.3em]">The Discovery Series</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-[0.85] uppercase">
            Travel <br/>
            <span className="text-[#00AEEF]">Journals</span>
            <span className="block mt-4 text-lg md:text-2xl font-bold normal-case tracking-normal leading-snug text-white/90">Himachal travel blog: guides and tips</span>
          </h1>
          
          <p className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed mb-10">
            Uncovering the soul of the subcontinent through professional guides, <br className="hidden md:block"/> 
            untold stories, and premium destination insights.
          </p>

        </div>
      </section>
      <BreadcrumbNav items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />

      {/* --- FEATURED STORY --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <Link href="/articals/blog1">
          <div className="group flex flex-col lg:flex-row gap-16 bg-gray-50 rounded-[50px] p-10 lg:p-16 items-center shadow-xl border border-gray-100 hover:border-[#FFA524]/30 transition-all">
             <div className="lg:w-3/5 overflow-hidden rounded-[40px] shadow-2xl aspect-video">
                <img 
                  {...imgProps("varanasi-ghats", { width: 1600, sizes: "100vw" })} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                 
                />
             </div>
             <div className="lg:w-2/5 space-y-8">
                <div className="space-y-4">
                  <span className="text-[#FFA524] text-sm font-black uppercase tracking-[0.4em]">Spiritual Odyssey</span>
                  <h2 className="text-5xl font-black text-gray-900 leading-[0.9] uppercase tracking-tighter">
                    The Eternal <br/> Gates of <br/> <span className="text-[#1D70B7]">Varanasi</span>
                  </h2>
                </div>
                <p className="text-gray-500 text-lg leading-relaxed italic border-l-4 border-[#FFA524] pl-6 font-serif">
                  "A morning boat ride in Varanasi is not just a tour; it's a conversation with history."
                </p>
                <div className="flex items-center gap-4 text-[#1D70B7] font-black uppercase tracking-widest text-sm">
                  Read Full Experience <ArrowRight size={20} />
                </div>
             </div>
          </div>
        </Link>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <h2 className="text-6xl font-black text-[#1D70B7] uppercase tracking-tighter">Latest <span className="text-gray-900">Articles</span></h2>
            <div className="h-1.5 w-40 bg-[#FFA524] rounded-full"></div>
          </div>
          <p className="text-gray-400 font-bold uppercase tracking-widest text-sm max-w-xs text-right">
            Curated insights for the modern professional traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {articles.map((item, index) => (
            <Link href={item.link} key={index} className="group block">
              <div className="relative h-[450px] overflow-hidden rounded-[40px] mb-8 shadow-2xl">
                <div className="absolute top-8 left-8 z-20 bg-white/95 backdrop-blur-md px-6 py-2 rounded-2xl text-[10px] font-black text-black uppercase tracking-[0.2em] shadow-lg">
                  {item.category}
                </div>
                <img 
                  {...imgProps(item.image as ImageKey, { width: 960, sizes: "(min-width:1024px) 33vw, 100vw" })} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-8 left-8 right-8 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                   <div className="flex items-center gap-3 text-[#FFA524] text-[10px] font-black uppercase mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Calendar size={14} /> {item.date}
                   </div>
                   <h4 className="text-white text-3xl font-black mb-4 uppercase leading-none tracking-tight">
                    {item.title}
                  </h4>
                </div>
              </div>
              <p className="text-gray-500 text-lg leading-relaxed mb-6 line-clamp-2 px-4">{item.desc}</p>
              <div className="px-4 flex items-center gap-3 text-[#1D70B7] font-black uppercase tracking-widest text-xs group-hover:gap-6 transition-all">
                Continue Reading <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </section>


<RelatedPackages heading="Plan the trip: popular Himachal tours" count={4} />
      <Footer />


      {/* Custom Styles */}
      <style jsx global>{`
        @keyframes subtle-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.1); }
        }
        .animate-subtle-zoom {
          animation: subtle-zoom 15s infinite alternate ease-in-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>



  );
};

export default BlogsPage;