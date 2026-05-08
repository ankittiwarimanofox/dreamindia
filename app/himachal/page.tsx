"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Mountain, Star, Phone, ArrowRight, CheckCircle2, 
  Clock, ShieldCheck, Target, Zap, Compass, MapPin
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

import Footer from "@/app/components/Footer";
const fIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
};

const HimachalPage = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const packages = [
    {
      title: "Shimla & Kufri Royal Escape",
      price: "12,499",
      duration: "5 Days / 4 Nights",
      img: "https://images.unsplash.com/photo-1597074866923-dc0589150358?q=80&w=2070",
      tag: "Limited Offer",
      rating: "4.8",
      path: "/tours-package/shimla-volvo-package"
    },
    {
      title: "Manali Adventure & Solang",
      price: "14,999",
      duration: "6 Days / 5 Nights",
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070",
      tag: "Most Popular",
      rating: "4.9",
      path: "/tours-package/best-of-manali-volvo-package"
    },
    {
      title: "Dharamshala & Dalhousie",
      price: "11,200",
      duration: "4 Days / 3 Nights",
      img: "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1752070207_180814-Dharamshala-Dalhousie-Group-Tour-Package-Slider-image.webp",
      tag: "New Itinerary",
      rating: "4.7",
      path: "/tours-package/kullu-manali-tour"
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#FFA524] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* --- 1. PREMIUM HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-center bg-[#0a0a0a] overflow-hidden">
        <motion.div style={{ y: yParallax }} className="absolute inset-0 w-full h-[120%]">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070" 
            className="w-full h-full object-cover opacity-50 grayscale-[30%] scale-110"
            alt="Himalayan Ranges"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a]" />
        </motion.div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full">
              <Compass className="text-[#FFA524] animate-spin-slow" size={16} />
              <span className="text-white/90 text-[10px] font-black uppercase tracking-[0.5em]">The 2026 Himalayan Collection</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.85] tracking-tighter mb-10 uppercase">
              Pure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#FFA524]">
                HIMACHAL
              </span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-10">
                <p className="text-gray-400 text-lg max-w-md leading-relaxed border-l-4 border-[#FFA524] pl-8 italic font-medium">
                  Experience the zenith of luxury trekking and spiritual retreats in the heart of the snow-capped giants.
                </p>
                <Link href="\blogs">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#FFA524] text-white px-10 py-6 rounded-2xl font-black text-xs tracking-[0.2em] uppercase flex items-center gap-4 group"
                    >
                        Explore Journal <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. STATS OVERLAY (ALL CLICKABLE) --- */}
      <section className="relative z-30 -mt-24 max-w-7xl mx-auto px-6">
        <motion.div {...fIn} className="bg-white rounded-[3rem] p-4 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-slate-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: "15k+", label: "Travelers", icon: <CheckCircle2 size={20} className="text-[#00AEEF]" /> },
              { val: "100+", label: "Luxury Stays", icon: <Mountain size={20} className="text-[#FFA524]" /> },
              { val: "4.9/5", label: "Guest Rating", icon: <Star size={20} fill="#FFA524" className="text-[#FFA524]" /> },
              { val: "24/7", label: "VIP Support", icon: <Clock size={20} className="text-[#00AEEF]" /> }
            ].map((stat, i) => (
              <Link href="/articals/blog5" key={i} className="group">
                <div className="flex flex-col items-center gap-4 py-8 rounded-[2.5rem] hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-white group-hover:shadow-md transition-all">
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-black text-slate-900 tracking-tighter">{stat.val}</p>
                    <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- 3. DYNAMIC PACKAGES GRID --- */}
      <section className="pt-40 pb-20 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#00AEEF] font-black uppercase tracking-[0.3em] text-[10px]">
                <MapPin size={14}/> Destination Spotlight
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase">
              Curated <span className="text-[#FFA524]">Paths</span>
            </h2>
          </div>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] max-w-[200px] text-right leading-loose">
            High-Performance Itineraries for the Modern Explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {packages.map((pkg, i) => (
            <Link href={pkg.path} key={i}>
                <motion.div 
                {...fIn} 
                whileHover={{ y: -20 }} 
                className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden group transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]"
                >
                <div className="relative h-80 overflow-hidden">
                    <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl text-[9px] font-black uppercase tracking-[0.2em] shadow-xl">
                    {pkg.tag}
                    </div>
                    <img src={pkg.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={pkg.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                        <span className="text-white font-black text-xs uppercase tracking-widest flex items-center gap-2">View Itinerary <ArrowRight size={14}/></span>
                    </div>
                </div>
                <div className="p-10 space-y-6">
                    <div className="flex justify-between items-center text-[10px] font-black tracking-widest uppercase text-slate-400">
                    <span className="text-[#00AEEF] flex gap-2 items-center"><Target size={14}/> {pkg.duration}</span>
                    <span className="flex items-center gap-1.5 text-slate-900"><Star size={14} fill="#FFA524" className="text-[#FFA524]" /> {pkg.rating}</span>
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 leading-none group-hover:text-[#FFA524] transition-colors uppercase tracking-tight">{pkg.title}</h3>
                    <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                    <div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">All-Inclusive From</span>
                        <p className="text-3xl font-black text-slate-900">₹{pkg.price}</p>
                    </div>
                    <div className="bg-slate-900 text-white p-5 rounded-2xl group-hover:bg-[#00AEEF] group-hover:rotate-[-10deg] transition-all shadow-xl">
                        <ArrowRight size={20} />
                    </div>
                    </div>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- 4. THE ELITE STANDARD (CLICKABLE TILES) --- */}
      <section className="py-40 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00AEEF]/5 blur-[120px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
          <motion.div {...fIn}>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-slate-900 uppercase leading-[0.9]">
              The <span className="text-[#FFA524]">Standard</span> <br /> of Luxury
            </h2>
            <div className="grid gap-6">
              {[
                { t: "Verified Stays", d: "Boutique high-altitude luxury hotels verified for safety and views.", path: "/articals/blog6" },
                { t: "Elite Logistics", d: "Private SUV transport with our most senior mountain navigators.", path: "/articals/blog7" },
                { t: "Concierge 2.0", d: "A dedicated destination manager available for real-time adjustments.", path: "/articals/blog8" }
              ].map((item, i) => (
                <Link href={item.path} key={i}>
                    <div className="flex gap-8 p-8 bg-white rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:border-[#FFA524]/20 transition-all group cursor-pointer">
                        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[#00AEEF]/10 transition-colors">
                            <ShieldCheck className="text-[#00AEEF] group-hover:scale-110 transition-transform" size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{item.t}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.d}</p>
                        </div>
                    </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-12 md:p-16 rounded-[4rem] border border-slate-100 shadow-[0_100px_150px_-30px_rgba(0,0,0,0.2)] relative overflow-hidden"
          >
            <Zap className="absolute top-[-20px] right-[-20px] text-[#FFA524] opacity-10 rotate-12" size={200} />
            <h3 className="text-4xl font-black mb-12 text-slate-900 uppercase tracking-tighter leading-none">Book Your <br /><span className="text-[#FFA524]">Consultation</span></h3>
            <div className="space-y-5">
              <input type="text" placeholder="FULL NAME" className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl text-xs font-black tracking-widest focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all" />
              <input type="tel" placeholder="CONTACT NUMBER" className="w-full bg-slate-50 border border-slate-100 p-6 rounded-2xl text-xs font-black tracking-widest focus:ring-2 focus:ring-[#00AEEF] outline-none transition-all" />
              <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-[#FFA524] transition-all shadow-2xl active:scale-[0.98]">
                Send Inquiry
              </button>
            </div>
            
            <Link href="/articals/blog9">
                <div className="mt-12 pt-10 border-t border-slate-100 flex items-center gap-6 group">
                    <div className="w-16 h-16 bg-[#00AEEF] rounded-2xl flex items-center justify-center text-white shadow-lg shadow-[#00AEEF]/30 group-hover:scale-110 transition-transform">
                        <Phone size={28} />
                    </div>
                    <div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em] mb-1">Direct VIP Line</p>
                        <p className="text-2xl font-black text-slate-900 group-hover:text-[#00AEEF] transition-colors">9530609262</p>
                    </div>
                </div>
            </Link>
          </motion.div>
        </div>
      </section>

    
      <Footer />
    </main>
  );
};

export default HimachalPage;