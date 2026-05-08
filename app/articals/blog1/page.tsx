"use client";
import React from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  ChevronLeft, 
  Quote, 
  Share2, 
  MapPin, 
  MousePointer2, 
  ArrowRight // Added missing import
} from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
export default function VaranasiBlog() {
  const relatedPosts = [
     {
      id: 1,
      category: "GUIDE",
      title: "Top 10 Travel Tips for First-Timers",
      description: "Essential advice for your first big adventure, from packing light to staying flexible...",
      date: "JUNE 05, 2026",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
      link: "/articals/blog3"
    },
    {
      id: 2,
      category: "ADVENTURE",
      title: "Exploring Hidden Gems of Himachal",
      description: "Beyond the crowded malls of Shimla lies a land of high-altitude deserts...",
      date: "MAY 10, 2026",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      link: "/articals/blog2"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Enhanced Hero Header Section */}
      <section className="relative h-[85vh] w-full mt-[110px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Varanasi Ghats at sunrise"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Link href="/" className="absolute top-12 left-8 flex items-center gap-2 text-white/80 hover:text-[#FFA524] transition-all uppercase text-xs font-black tracking-[0.3em]">
            <ChevronLeft size={16} /> Back to Stories
          </Link>
          
          <div className="space-y-6 max-w-5xl">
            <span className="inline-block border-2 border-[#FFA524] text-[#FFA524] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-4">
              Featured Story
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-[0.9] uppercase tracking-tighter">
              The Spiritual <br/>
              <span className="text-[#FFA524]">Journey</span> Through <br/>
              Ancient Ghats
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-white/90 font-bold uppercase text-[11px] tracking-[0.2em]">
              <span className="flex items-center gap-3"><User size={16} className="text-[#FFA524]"/> Travel Desk</span>
              <span className="flex items-center gap-3"><MapPin size={16} className="text-[#FFA524]"/> Varanasi, UP</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-[#FFA524]"/> 8 Min Read</span>
            </div>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
             <span className="text-gray-400 uppercase text-[10px] font-black tracking-widest">Scroll to Begin</span>
             <MousePointer2 className="text-gray-400 rotate-180" size={20} />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        
        <div className="relative mb-20 italic text-2xl md:text-4xl text-gray-800 font-serif leading-relaxed pl-16">
          <Quote className="absolute top-0 left-0 text-[#FFA524] w-12 h-12 opacity-30" />
          "A morning boat ride in Varanasi is not just a tour; it's a conversation with history, a silent witness to the cycle of life and death."
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-12">
          <p className="text-2xl font-medium text-gray-800 first-letter:text-8xl first-letter:font-black first-letter:text-[#FFA524] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
            Varanasi, often referred to as Kashi or Benares, is one of the oldest living cities in the world. As the sun begins to peek over the horizon, the city wakes up to the sound of temple bells and the rhythmic splashing of the holy Ganges.
          </p>

          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter pt-10 border-b-4 border-[#FFA524] inline-block mb-6">
            The Morning Ritual
          </h2>
          <p className="text-lg">
            The best way to experience Varanasi is undoubtedly from the water. Before the city becomes a bustling maze of narrow alleys, the river offers a perspective of peace.
          </p>

          {/* Fixed Featured Image Grid */}
          <div className="grid grid-cols-12 gap-4 my-16">
            <div className="col-span-12 md:col-span-8">
                <img 
                src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/6e/b5/47.jpg" 
                className="rounded-3xl h-[300px] md:h-[400px] w-full object-cover shadow-2xl" 
                alt="Ganga Aarti Ritual"
                />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEgKABr4G76c7qCozjjaHq9nYO6NLJlBn0g&s" 
                className="rounded-3xl h-[192px] w-full object-cover shadow-xl" 
                alt="Varanasi Boats"
                />
                <div className="bg-[#1D70B7] rounded-3xl h-[192px] flex items-center justify-center p-6 text-center shadow-xl">
                    <p className="text-white font-black uppercase text-sm tracking-widest leading-tight">
                        80+ GHATS TO EXPLORE ALONG THE RIVER
                    </p>
                </div>
            </div>
          </div>

          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter pt-4">
            Dashashwamedh: The Heart of the City
          </h2>
          <p className="text-lg">
            As the evening approaches, Dashashwamedh Ghat transforms. The famous Ganga Aarti—a ritual of light and sound—begins.
          </p>

          <div className="bg-orange-50 p-8 md:p-12 rounded-[40px] border-l-[12px] border-[#FFA524] my-16">
            <h4 className="text-[#FFA524] font-black uppercase text-xs mb-4 tracking-[0.3em]">Pro Insight</h4>
            <p className="text-gray-800 text-xl font-bold italic leading-relaxed">
              "To witness the evening Aarti, arrive at the ghat at least 45 minutes early. The view from a boat is superior for photography."
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-24 pt-12 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-[#FFA524] rounded-2xl flex items-center justify-center text-white font-black text-2xl rotate-3 shadow-md">
              TD
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Travel Desk Team</p>
              <p className="text-xs text-gray-400 font-bold uppercase">Heritage & Culture Specialists</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button aria-label="Share this article" className="text-gray-400 hover:text-[#FFA524] transition-colors">
                <Share2 size={24} />
            </button>
            <Link href="/Contact" className="bg-black text-white px-10 py-4 rounded-full transition-all text-xs font-black uppercase tracking-widest hover:bg-[#FFA524] hover:scale-105 active:scale-95 shadow-xl">
              Book a Spiritual Tour
            </Link>
          </div>
        </div>
      </article>

      {/* RECENT ARTICLES SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-[#FFA524] pl-6">
            <h2 className="text-5xl font-black text-[#1D70B7] uppercase tracking-tighter leading-none">
              More Stories
            </h2>
            <p className="text-gray-500 font-bold mt-2 text-lg uppercase tracking-wide">
              Keep the inspiration flowing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {relatedPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative h-[350px] w-full rounded-[40px] overflow-hidden mb-8 shadow-xl shadow-gray-200">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2 rounded-xl">
                    <span className="text-[10px] font-black tracking-[0.2em] text-gray-800 uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 leading-tight group-hover:text-[#1D70B7] transition-colors uppercase">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed mb-8 line-clamp-2">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                      {post.date}
                    </span>
                    <Link 
                      href={post.link} 
                      className="flex items-center gap-2 text-[#00AEEF] font-black text-xs uppercase tracking-[0.2em] hover:gap-4 transition-all"
                    >
                      Read More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<Footer />

    </div>
  );
}