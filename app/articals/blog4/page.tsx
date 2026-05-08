"use client";
import React from 'react';
import { 
  ChevronLeft, 
  Quote, 
  Share2, 
  Clock, 
  User, 
  TrendingDown, 
  Mountain, 
  Tent, 
  ArrowRight,
  CheckCircle2,
  DollarSign
} from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';
import Footer from "@/app/components/Footer";
export default function BudgetTrekkingBlog() {
  const budgetTips = [
    { title: "Off-Season Exploration", desc: "Trek during the shoulder seasons. Permits and tea houses often drop prices by 30-50%." },
    { title: "Rent, Don't Buy", desc: "High-end down jackets and sleeping bags are expensive. Renting locally saves hundreds of dollars." },
    { title: "Water Purification", desc: "Carry a Lifestraw or purification tablets. Buying bottled water on the trail is costly and eco-unfriendly." },
    { title: "Public Transport", desc: "Avoid private jeeps. Local buses might be slower, but they cost a fraction of the price." }
  ];

  const gearChecklist = ["Broken-in Hiking Boots", "Lightweight Rain Shell", "Thermal Base Layers", "Headlamp with Extra Batteries", "First Aid Kit"];

  const relatedPosts = [
    {
      id: 2,
      category: "ADVENTURE",
      title: "Exploring Hidden Gems of Himachal",
      description: "Beyond the crowded malls of Shimla lies a land of high-altitude deserts...",
      date: "MAY 10, 2026",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800",
      link: "/articals/blog2"
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

      {/* HERO SECTION (85vh) */}
      <section className="relative h-[85vh] w-full mt-[110px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Trekker looking at mountains"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-white"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <Link href="/" className="absolute top-12 left-8 flex items-center gap-2 text-white/80 hover:text-[#FFA524] transition-all uppercase text-[10px] font-black tracking-[0.4em]">
            <ChevronLeft size={16} /> All Articles
          </Link>
          
          <div className="space-y-6 max-w-5xl">
            <span className="inline-block border-2 border-[#FFA524] text-[#FFA524] px-6 py-2 rounded-full text-xs font-black uppercase tracking-[0.4em] mb-4">
              Adventure Finance
            </span>
            
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 drop-shadow-2xl leading-[0.9] uppercase tracking-tighter">
              The Budget <br/>
              <span className="text-[#FFA524]">Trekker's</span> <br/>
              Playbook
            </h1>
            
            <div className="flex flex-wrap items-center justify-center gap-10 text-white/90 font-bold uppercase text-[11px] tracking-[0.3em]">
              <span className="flex items-center gap-3"><User size={16} className="text-[#FFA524]"/> Travel Desk</span>
              <span className="flex items-center gap-3"><TrendingDown size={16} className="text-[#FFA524]"/> Low Cost</span>
              <span className="flex items-center gap-3"><Clock size={16} className="text-[#FFA524]"/> 10 Min Read</span>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <article className="max-w-4xl mx-auto px-6 py-24">
        
        <div className="relative mb-20 italic text-2xl md:text-4xl text-gray-800 font-serif leading-relaxed pl-16">
          <Quote className="absolute top-0 left-0 text-[#FFA524] w-12 h-12 opacity-30" />
          "You don't need a mountain of gold to climb a mountain of stone. Adventure is about resourcefulness, not just resources."
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-[1.8] space-y-12">
          <p className="text-2xl font-medium text-gray-800 first-letter:text-8xl first-letter:font-black first-letter:text-[#FFA524] first-letter:mr-4 first-letter:float-left first-letter:leading-[0.8]">
            Many believe that trekking through iconic ranges like the Himalayas or the Andes requires a massive savings account. However, with the right strategy, you can witness the world's highest peaks without breaking the bank.
          </p>

          <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter pt-10 border-b-4 border-[#FFA524] inline-block mb-6">
            Smart Spending on the Trail
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 my-10">
            {budgetTips.map((tip, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-[#FFA524] transition-colors group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-6 text-[#FFA524] group-hover:bg-[#FFA524] group-hover:text-white transition-all">
                   <DollarSign size={24} />
                </div>
                <h3 className="text-xl font-black text-gray-900 uppercase mb-3">{tip.title}</h3>
                <p className="text-gray-500 leading-snug">{tip.desc}</p>
              </div>
            ))}
          </div>

          {/* CHECKLIST SECTION */}
          <div className="my-16 bg-[#1D70B7] rounded-[40px] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute -right-10 -bottom-10 opacity-10 rotate-12">
               <Mountain size={300} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-4">
                <CheckCircle2 className="text-[#FFA524]" size={32} /> Essential Gear Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {gearChecklist.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-bold">
                    <div className="w-2 h-2 bg-[#FFA524] rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-lg">
            The secret to budget trekking isn't just about spending less—it's about spending where it counts. Invest in good footwear and safety, but save on the luxuries that the mountains don't require.
          </p>
        </div>

        {/* FOOTER SECTION */}
        <div className="mt-24 pt-12 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white font-black text-2xl -rotate-3 shadow-lg">
              BT
            </div>
            <div>
              <p className="text-sm font-black text-gray-900 uppercase tracking-widest">Budget Traveler</p>
              <p className="text-xs text-gray-400 font-bold uppercase">Adventure on a Dime</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-400 hover:text-[#FFA524] transition-colors">
                <Share2 size={24} />
            </button>
            <Link href="/contact" className="bg-[#FFA524] text-white px-10 py-4 rounded-full transition-all text-xs font-black uppercase tracking-widest hover:bg-black hover:scale-105 shadow-xl">
              Get Itinerary
            </Link>
          </div>
        </div>
      </article>

      {/* MORE STORIES */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 border-l-4 border-[#FFA524] pl-6">
            <h2 className="text-5xl font-black text-[#1D70B7] uppercase tracking-tighter leading-none">
              Explore More
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {relatedPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer">
                <div className="relative h-[300px] w-full rounded-[40px] overflow-hidden mb-8 shadow-xl">
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-6 left-6 bg-white/95 px-5 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-[#1D70B7] transition-colors uppercase">{post.title}</h3>
                <Link href={post.link} className="flex items-center gap-2 text-[#00AEEF] font-black text-xs uppercase tracking-widest">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
<Footer />

    </div>
  );
}