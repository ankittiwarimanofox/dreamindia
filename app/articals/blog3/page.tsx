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
  Lightbulb,
  ArrowRight,
  Check
} from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
export default function TravelTipsBlogPage() {
  const travelTips = [
    { title: "Pack Light", detail: "Stick to the essentials. If you can't carry your own bag for 15 minutes, you've packed too much." },
    { title: "Document Everything", detail: "Keep digital and physical copies of your passport, visa, and insurance." },
    { title: "Learn Local Phrases", detail: "A simple 'Thank You' in the local language goes a long way with the locals." },
    { title: "Stay Flexible", detail: "Don't over-schedule. Leave room for spontaneous adventures and rest." },
    { title: "Get Travel Insurance", detail: "It's better to have it and not need it than to need it and not have it." },
    { title: "Eat Local", detail: "Avoid big chains. The best food is often found in small, crowded local stalls." },
    { title: "Wake Up Early", detail: "The most iconic landmarks are best experienced at dawn without the crowds." },
    { title: "Carry a Power Bank", detail: "Google Maps and photos drain batteries fast. Stay powered up." },
    { title: "Respect the Culture", detail: "Research local customs and dress codes before you arrive." },
    { title: "Talk to Locals", detail: "They know the hidden spots that aren't on TripAdvisor or Instagram." }
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

      {/* LENGTHY HERO SECTION (85vh) */}
      <section className="relative h-[85vh] w-full mt-[110px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Travel Planning"
          />
          {/* Gold/Orange gradient to match the Travel Tips theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFA524]/40 via-black/30 to-white"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Link href="/" className="absolute top-12 left-8 flex items-center gap-2 text-white/80 hover:text-[#FFA524] transition-all uppercase text-[10px] font-black tracking-[0.4em]">
            <ChevronLeft size={16} /> Back to Stories
          </Link>
          
          <div className="space-y-6 max-w-5xl">
            <span className="inline-block border-2 border-[#FFA524] text-[#FFA524] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-4">
              Travel Guide
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-[0.9] uppercase tracking-tighter">
              Top 10 Tips <br/>
              <span className="text-[#FFA524]">For Your First</span> <br/>
              Big Adventure
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-white/90 font-bold uppercase text-[11px] tracking-[0.3em]">
              <span className="flex items-center gap-3"><User size={16} className="text-[#FFA524]"/> Travel Desk</span>
              <span className="flex items-center gap-3"><Lightbulb size={16} className="text-[#FFA524]"/> Essential Guide</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-[#FFA524]"/> 12 Min Read</span>
            </div>
          </div>

          <div className="absolute bottom-12 flex flex-col items-center gap-2 animate-bounce">
             <span className="text-gray-400 uppercase text-[10px] font-black tracking-widest">Scroll to Begin</span>
             <div className="w-[1px] h-12 bg-gradient-to-b from-[#FFA524] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        
        <div className="relative mb-20 italic text-2xl md:text-4xl text-gray-800 font-serif leading-relaxed pl-16">
          <Quote className="absolute top-0 left-0 text-[#FFA524] w-12 h-12 opacity-30" />
          "Travel is the only thing you buy that makes you richer. But a little bit of planning makes the journey much smoother."
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-12">
          <p className="text-2xl font-medium text-gray-800 first-letter:text-8xl first-letter:font-black first-letter:text-[#FFA524] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
            Your first major trip can be overwhelming. The logistics, the packing, and the fear of missing out can turn a dream vacation into a stressful ordeal. To help you navigate the world with confidence, we've compiled our top 10 essential tips.
          </p>

          {/* Tips List Layout */}
          <div className="space-y-16 py-10">
            {travelTips.map((tip, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-3xl font-black text-[#FFA524] group-hover:bg-[#FFA524] group-hover:text-white transition-all duration-300">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter mb-2 group-hover:text-[#1D70B7] transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed">
                    {tip.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-12 rounded-[40px] text-white my-16 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Lightbulb size={120} />
            </div>
            <h4 className="text-[#FFA524] font-black uppercase text-xs mb-4 tracking-[0.3em]">Final Word</h4>
            <p className="text-xl font-bold italic leading-relaxed relative z-10">
              "Don't forget to put your phone down. Some of the best memories are the ones you capture with your heart, not just your camera lens."
            </p>
          </div>
        </div>

        {/* Article Footer */}
        <div className="mt-24 pt-12 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white font-black text-2xl rotate-3 shadow-lg">
              TD
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Travel Desk</p>
              <p className="text-xs text-gray-400 font-bold uppercase">Pro Travelers Since 2018</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 text-gray-400 hover:text-[#FFA524] transition-colors font-black uppercase text-[10px] tracking-widest">
                <Share2 size={18} /> Share Guide
            </button>
            <Link href="/Contact" className="bg-[#FFA524] text-white px-10 py-4 rounded-full transition-all text-xs font-black uppercase tracking-widest hover:bg-black hover:scale-105 shadow-xl">
              Start Planning
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