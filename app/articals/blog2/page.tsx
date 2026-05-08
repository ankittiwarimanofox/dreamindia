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
  Mountain,
  ArrowRight
} from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
export default function HimachalBlogPage() {
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
      id: 3,
      category: "GUIDE",
      title: "Top 10 Travel Tips for First-Timers",
      description: "Essential advice for your first big adventure, from packing light to staying flexible...",
      date: "JUNE 05, 2026",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
      link: "/articals/blog3"
    }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* LENGTHY HERO SECTION (85vh) */}
      <section className="relative h-[85vh] w-full mt-[110px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Himachal Mountains"
          />
          {/* Blue-toned gradient for mountain feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1D70B7]/60 via-black/20 to-white"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Link href="/" className="absolute top-12 left-8 flex items-center gap-2 text-white/80 hover:text-[#00AEEF] transition-all uppercase text-[10px] font-black tracking-[0.4em]">
            <ChevronLeft size={16} /> Back to Stories
          </Link>
          
          <div className="space-y-6 max-w-5xl">
            <span className="inline-block border-2 border-[#00AEEF] text-[#00AEEF] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-4">
              Adventure Story
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-[0.9] uppercase tracking-tighter">
              Exploring the <br/>
              <span className="text-[#00AEEF]">Hidden Gems</span> <br/>
              of Himachal
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-white/90 font-bold uppercase text-[11px] tracking-[0.3em]">
              <span className="flex items-center gap-3"><User size={16} className="text-[#00AEEF]"/> Dream World</span>
              <span className="flex items-center gap-3"><MapPin size={16} className="text-[#00AEEF]"/> Spiti Valley, HP</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-[#00AEEF]"/> 10 Min Read</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
             <span className="text-gray-400 uppercase text-[10px] font-black tracking-widest">Scroll to Begin</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#00AEEF] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        
        <div className="relative mb-20 italic text-2xl md:text-4xl text-gray-800 font-serif leading-relaxed pl-16">
          <Quote className="absolute top-0 left-0 text-[#00AEEF] w-12 h-12 opacity-30" />
          "In the heart of the Himalayas, the silence speaks louder than words, and every winding road leads to a secret waiting to be told."
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-12">
          <p className="text-2xl font-medium text-gray-800 first-letter:text-8xl first-letter:font-black first-letter:text-[#00AEEF] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
            Beyond the crowded malls of Shimla and the bustling streets of Manali lies a different Himachal. It is a land of high-altitude deserts, ancient monasteries perched on cliffside edges, and emerald lakes hidden within pine forests.
          </p>

          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter pt-10 border-b-4 border-[#00AEEF] inline-block mb-6">
            The Magic of Spiti
          </h2>
          <p className="text-lg">
            Spiti Valley, often called 'Little Tibet,' is a world within a world. The landscape changes from lush greenery to stark, rugged mountains as you cross the Rohtang and Kunzum passes. Here, time seems to stand still at the Key Monastery, where monks have lived in harmony with the harsh climate for over a thousand years.
          </p>

          {/* Featured Image Grid */}
          <div className="grid grid-cols-12 gap-4 my-16">
            <div className="col-span-12 md:col-span-8">
                <img 
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/5e/36/5e/key-monastery.jpg?w=1200&h=1200&s=1" 
                className="rounded-[40px] h-[450px] w-full object-cover shadow-2xl" 
                alt="Key Monastery"
                />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
                <img 
                src="https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=600" 
                className="rounded-[30px] h-[217px] w-full object-cover shadow-xl" 
                alt="Pine Forests"
                />
                <div className="bg-[#1D70B7] rounded-[30px] h-[217px] flex flex-col items-center justify-center p-8 text-center shadow-xl">
                    <Mountain className="text-[#00AEEF] mb-2" size={32} />
                    <p className="text-white font-black uppercase text-xs tracking-widest leading-tight">
                        Explore the Highest Villages in the World
                    </p>
                </div>
            </div>
          </div>

          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter pt-4">
            The Enchanted Forests of Jibhi
          </h2>
          <p className="text-lg">
            If Spiti is about raw power, Jibhi is about pure serenity. Tucked away in the Tirthan Valley, this small hamlet is known for its traditional wooden houses and the freshwater river that flows through its heart. It’s the perfect sanctuary for those looking to disconnect from the digital world.
          </p>

          <div className="bg-blue-50 p-12 rounded-[40px] border-l-[12px] border-[#00AEEF] my-16">
            <h4 className="text-[#00AEEF] font-black uppercase text-xs mb-4 tracking-[0.3em]">Pro Tip</h4>
            <p className="text-gray-800 text-xl font-bold italic leading-relaxed">
              "When visiting Jibhi, take the short trek to the Jalori Pass. On a clear day, the 360-degree view of the snow-capped Himalayan peaks is unparalleled."
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-24 pt-12 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-[#1D70B7] rounded-2xl flex items-center justify-center text-white font-black text-2xl rotate-3 shadow-lg">
              DW
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Dream World Travel</p>
              <p className="text-xs text-gray-400 font-bold uppercase">Adventure Specialists</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#00AEEF] transition-colors font-black uppercase text-[10px] tracking-widest">
                <Share2 size={18} /> Share Story
            </button>
            <Link href="/Contact" className="bg-black text-white px-10 py-4 rounded-full transition-all text-xs font-black uppercase tracking-widest hover:bg-[#00AEEF] hover:scale-105 shadow-xl">
              Plan Your Adventure
            </Link>
          </div>
        </div>
      </article>

      {/* RECENT ARTICLES SECTION */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-[#FFA524] pl-6">
            <h2 className="text-5xl font-black text-[#1D70B7] uppercase tracking-tighter leading-none">
              Recent Articles
            </h2>
            <p className="text-gray-500 font-bold mt-2 text-lg uppercase tracking-wide">
              Stay Updated with Dream World
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