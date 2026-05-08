"use client";
import React from 'react';
import { 
  ChevronLeft, 
  Quote, 
  Share2, 
  Clock, 
  User, 
  Palmtree, 
  Sparkles, 
  Map, 
  ArrowRight,
  Infinity,
  Coffee
} from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
export default function LuxuryResortBlog() {
  const features = [
    { 
      icon: <Infinity size={24} />, 
      title: "Infinity Immersion", 
      desc: "Pools designed to vanish into the horizon, blurring the line between architecture and the natural world." 
    },
    { 
      icon: <Coffee size={24} />, 
      title: "Ethical Gastronomy", 
      desc: "Farm-to-table dining experiences where every ingredient is sourced from the resort's private organic gardens." 
    },
    { 
      icon: <Sparkles size={24} />, 
      title: "Holistic Wellness", 
      desc: "Open-air spa pavilions utilizing ancient healing techniques and local botanical essences." 
    }
  ];

  const relatedPosts = [
    {
      id: 1,
      category: "SPIRITUAL",
      title: "The Spiritual Journey Through Varanasi",
      description: "A morning boat ride in Varanasi is not just a tour; it's a conversation with history...",
      date: "OCT 24, 2025",
      image: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=800",
      link: "/articals/blog1"
    },
    {
      id: 4,
      category: "ADVENTURE",
      title: "The Budget Trekker's Playbook",
      description: "You don't need a mountain of gold to climb a mountain of stone. Learn to trek for less...",
      date: "APR 28, 2026",
      image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800",
      link: "/articals/blog4"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* LUXURY HERO SECTION */}
      <section className="relative h-[90vh] w-full mt-[110px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Luxury resort with ocean view"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-start justify-center px-12 md:px-24">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-[#FFA524] transition-all uppercase text-[10px] font-black tracking-[0.5em] mb-12">
            <ChevronLeft size={16} /> Portfolio
          </Link>
          
          <div className="max-w-4xl space-y-8">
            <span className="inline-flex items-center gap-3 text-[#FFA524] text-xs font-black uppercase tracking-[0.5em]">
              <Sparkles size={18} /> The Gold Standard
            </span>
            
            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] uppercase tracking-tighter">
              Comfort <br/>
              <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '2px white' }}>Meets</span> <br/>
              Nature
            </h1>
            
            <div className="flex flex-wrap items-center gap-12 text-white/80 font-bold uppercase text-[11px] tracking-[0.3em] pt-6">
              <span className="flex items-center gap-3"><User size={16} className="text-[#FFA524]"/> Travel Desk</span>
              <span className="flex items-center gap-3"><Palmtree size={16} className="text-[#FFA524]"/> Tropical Luxury</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-[#FFA524]"/> 6 Min Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <article className="max-w-5xl mx-auto px-6 py-32">
        
        <div className="flex flex-col md:flex-row gap-20 mb-32 items-center">
          <div className="md:w-1/2">
            <Quote className="text-[#FFA524] w-16 h-16 mb-8 opacity-20" />
            <p className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
              "True luxury is not about excess, but about the seamless integration of human elegance into the raw beauty of the wild."
            </p>
          </div>
          <div className="md:w-1/2 space-y-6 text-gray-600 text-lg leading-relaxed">
            <p className="first-letter:text-7xl first-letter:font-black first-letter:text-[#1D70B7] first-letter:mr-3 first-letter:float-left">
              The modern traveler no longer seeks a gilded cage. Instead, the demand has shifted toward 'Invisible Luxury'—resorts that provide five-star service while allowing the surrounding ecosystem to take center stage.
            </p>
            <p>
              From overwater villas in the Maldives to glass-fronted lodges in the heart of the Serengeti, architecture is now designed to be a lens, not a barrier.
            </p>
          </div>
        </div>

        {/* FEATURE HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-1px bg-gray-100 rounded-[40px] overflow-hidden shadow-2xl mb-32">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-12 hover:bg-gray-50 transition-colors">
              <div className="text-[#FFA524] mb-8">{feature.icon}</div>
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter mb-12">
          Redefining the <span className="text-[#1D70B7]">View</span>
        </h2>
        
        <div className="relative h-[600px] w-full rounded-[60px] overflow-hidden mb-16 shadow-3xl">
          <img 
            src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1500" 
            className="w-full h-full object-cover" 
            alt="Luxury interior with jungle view"
          />
          <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl max-w-sm">
            <p className="text-gray-900 font-bold italic">
              "Designers are now using local stone, reclaimed wood, and expansive glass to ensure that the resort feels like an extension of the earth."
            </p>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-32 pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-6 mb-8 md:mb-0">
            <div className="w-20 h-20 bg-[#1D70B7] rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl border-4 border-white">
              LR
            </div>
            <div>
              <p className="text-lg font-black text-gray-900 uppercase tracking-widest">Luxury Retreats</p>
              <p className="text-sm text-[#FFA524] font-bold uppercase tracking-widest">Curated Comfort</p>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <button className="p-4 rounded-full border-2 border-gray-100 text-gray-400 hover:text-[#1D70B7] hover:border-[#1D70B7] transition-all">
                <Share2 size={24} />
            </button>
            <Link href="/contact" className="bg-black text-white px-12 py-5 rounded-2xl transition-all text-xs font-black uppercase tracking-[0.2em] hover:bg-[#FFA524] hover:-translate-y-1 shadow-2xl">
              Inquire Privately
            </Link>
          </div>
        </div>
      </article>

      {/* RELATED STORIES */}
      <section className="py-32 bg-[#0A0A0A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-6xl font-black uppercase tracking-tighter">Next <span className="text-[#FFA524]">Read</span></h2>
              <p className="text-gray-500 font-bold mt-4 uppercase tracking-[0.3em]">Continue your exploration</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {relatedPosts.map((post) => (
              <div key={post.id} className="group">
                <div className="relative h-[400px] w-full rounded-[40px] overflow-hidden mb-10">
                  <img src={post.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-8 left-8">
                    <span className="bg-[#FFA524] text-black px-4 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{post.category}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black uppercase mb-6 group-hover:text-[#FFA524] transition-colors">{post.title}</h3>
                <Link href={post.link} className="inline-flex items-center gap-4 text-white/50 font-black text-xs uppercase tracking-widest group-hover:text-white group-hover:gap-6 transition-all">
                  View Story <ArrowRight size={20} className="text-[#FFA524]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />

      {/* Custom Styles for Animation */}
      <style jsx global>{`
        @keyframes slow-zoom {
          from { transform: scale(1.05); }
          to { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
    </div>
  );
}