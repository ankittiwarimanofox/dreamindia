"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, Variants } from 'framer-motion';
import { 
  ChevronRight, CheckCircle2, Sparkles, MapPin, 
  ShieldCheck, Clock, Headphones, ArrowUpRight, 
  Star, Quote, Plus, Minus, MoveRight, ArrowRight,
  Compass, Luggage, Plane, Map
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

// --- ANIMATION VARIANTS ---
const containerVar: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVar: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const driftVar: Variants = {
  float: {
    y: [0, -20, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  }
};

const ServicesPage = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [heroTextIndex, setHeroTextIndex] = useState(0);
  const heroKeywords = ["Himalayan Treks", "Luxury Stays", "Corporate Tours", "Solo Travels"];

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroTextIndex((prev) => (prev + 1) % heroKeywords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#FBFBFD] selection:bg-[#FFA524] selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FFA524] origin-left z-[100]" style={{ scaleX }} />
      
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div initial="hidden" animate="visible" variants={containerVar} className="z-10">
            <motion.div variants={itemVar} className="inline-flex items-center gap-3 px-4 py-2 bg-[#004381]/5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFA524] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFA524]"></span>
              </span>
              <span className="text-[#004381] font-bold text-xs uppercase tracking-widest">Premium Travel Services</span>
            </motion.div>
            
            <motion.h1 variants={itemVar} className="text-7xl md:text-8xl font-black text-[#004381] mb-8 tracking-tighter leading-[0.85]">
              Expertly <br />
              <span className="text-[#FFA524] italic font-serif">Crafted</span> <br />
              <div className="h-[1em] overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={heroTextIndex}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    className="inline-block text-[#004381] font-black text-5xl md:text-6xl"
                  >
                    {heroKeywords[heroTextIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>
            
            <motion.p variants={itemVar} className="text-xl text-gray-500 max-w-lg mb-10 leading-relaxed font-medium">
              We specialize in turning complex logistics into effortless adventures across the Indian subcontinent.
            </motion.p>

            <motion.div variants={itemVar} className="flex flex-wrap gap-6">
              <Link href="/Contact" className="bg-[#004381] text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-[#FFA524] transition-all group shadow-xl shadow-blue-900/20">
                Book Consultation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070" 
                className="w-full aspect-[4/5] object-cover" 
                alt="Travel Destination" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004381]/60 to-transparent" />
            </div>
            <div className="absolute -inset-4 border-2 border-[#FFA524] rounded-[4.5rem] -rotate-3 z-0" />
            
            <motion.div 
              variants={driftVar}
              animate="float"
              className="absolute -left-12 bottom-20 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-white/50"
            >
              <div className="w-12 h-12 bg-[#FFA524] rounded-2xl flex items-center justify-center text-white">
                <Star size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Top Rated</p>
                <p className="text-[#004381] font-black italic">Himalayan Agency</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PROCESS SECTION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-[#004381] text-5xl font-black tracking-tighter">OUR <span className="text-[#FFA524]">WORKFLOW</span></h2>
            <p className="text-gray-400 font-bold mt-4 tracking-widest uppercase text-sm">Four Steps to Perfection</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gray-100 -translate-y-1/2 z-0" />
            
            {[
              { icon: <Compass />, title: "Discovery", desc: "Consultation to find your ideal destination." },
              { icon: <Map />, title: "Curation", desc: "Crafting a personalized, minute-by-minute plan." },
              { icon: <Luggage />, title: "Execution", desc: "Seamless logistics, transport & stays." },
              { icon: <Plane />, title: "Departure", desc: "Safe return with memories of a lifetime." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="relative z-10 bg-white p-8 rounded-[3rem] text-center border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 bg-[#FFA524] text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#FFA524]/30">
                  {step.icon}
                </div>
                <h4 className="text-[#004381] text-2xl font-black mb-3">{step.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed">{step.desc}</p>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[#004381] text-[#FFA524] rounded-full flex items-center justify-center font-black">
                  0{i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* --- 3. THE SERVICES GRID (ALL CARDS CLICKABLE) --- */}
<section className="py-32 bg-[#f8f9fa]">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
      
      {/* CLICKABLE HEADER BLOCK */}
      <Link href="/Contact" className="group block max-w-2xl">
        <motion.div 
          whileHover={{ x: 10 }} 
          className="cursor-pointer"
        >
          <h2 className="text-[#004381] text-6xl font-black tracking-tighter leading-none mb-6 uppercase group-hover:text-[#FFA524] transition-colors flex items-center gap-4">
            Our <br/> Expertises
            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all text-[#FFA524] translate-y-2 group-hover:translate-y-0" size={48} />
          </h2>
          <div className="w-24 h-2 bg-[#FFA524] rounded-full mb-6 group-hover:w-48 transition-all duration-500" />
        </motion.div>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "Mountain Treks", desc: "Certified guides & premium gear for the peaks.", icon: <MapPin />, col: "md:col-span-2", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b" },
        { title: "Luxury Fleets", desc: "Premium SUVs for rugged terrain.", icon: <ShieldCheck />, col: "md:col-span-1", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf" },
        { title: "Boutique Stays", desc: "Handpicked hidden gems with soul.", icon: <Star />, col: "md:col-span-1", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945" },
        { title: "Custom Tours", desc: "Tailored logistics for solo and group travel.", icon: <Sparkles />, col: "md:col-span-2", img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1" }
      ].map((item, i) => (
        <Link href="/Contact" key={i} className={`${item.col} block`}>
          <motion.div 
            whileHover={{ y: -10 }}
            className="relative h-[400px] group rounded-[3rem] overflow-hidden shadow-lg cursor-pointer"
          >
            <img 
              src={item.img} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              alt={item.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#004381] via-[#004381]/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="w-12 h-12 bg-[#FFA524] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-[360deg] transition-transform duration-500 shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-2">{item.title}</h3>
              <p className="text-white/70 font-medium max-w-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.desc}
              </p>
              <div className="flex items-center gap-2 text-[#FFA524] font-bold text-sm tracking-widest uppercase group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={16} />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* --- 4. TRUST BANNER --- */}
      <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-20 mx-10">
              <span className="text-[#004381]/10 text-7xl font-black italic uppercase tracking-tighter">Safety First</span>
              <div className="w-4 h-4 bg-[#FFA524] rounded-full" />
              <span className="text-[#004381]/10 text-7xl font-black italic uppercase tracking-tighter">Luxury Fleets</span>
              <div className="w-4 h-4 bg-[#FFA524] rounded-full" />
              <span className="text-[#004381]/10 text-7xl font-black italic uppercase tracking-tighter">24/7 Concierge</span>
              <div className="w-4 h-4 bg-[#FFA524] rounded-full" />
            </div>
          ))}
        </div>
      </section>

      {/* --- 5. FAQ SECTION --- */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-[2px] flex-grow bg-gray-100" />
            <h2 className="text-[#004381] text-4xl font-black tracking-tighter whitespace-nowrap">HAVE QUESTIONS?</h2>
            <div className="h-[2px] flex-grow bg-gray-100" />
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How do you ensure traveler safety?", a: "We monitor weather patterns in real-time and all our drivers are trained in defensive mountain driving." },
              { q: "Can we book group tours?", a: "Yes, we specialize in corporate and family group logistics." },
              { q: "What is your cancellation policy?", a: "Flexible booking allows cancellations up to 7 days before the trip." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-[2.5rem] border border-gray-100 hover:border-[#FFA524]/40 transition-all overflow-hidden group">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex justify-between items-center text-left"
                >
                  <span className="text-xl font-black text-[#004381] group-hover:text-[#FFA524] transition-colors">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-all ${activeFaq === i ? 'bg-[#FFA524] text-white rotate-180' : 'bg-gray-100 text-[#004381]'}`}>
                    {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8 text-gray-500 text-lg font-medium leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. FINAL CALL TO ACTION --- */}
      <section className="py-40 px-6">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="max-w-6xl mx-auto bg-[#004381] rounded-[5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter leading-tight">
            Ready for your <br/> <span className="text-[#FFA524]">Next Chapter?</span>
          </h2>
          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 font-medium">
            Join 5,000+ travelers who have explored the soul of India through our boutique services.
          </p>

          <Link href="/Contact" className="inline-flex items-center gap-4 bg-[#FFA524] text-white px-16 py-6 rounded-full font-black text-xl hover:bg-white hover:text-[#004381] transition-all group">
            START YOUR JOURNEY <MoveRight className="group-hover:translate-x-3 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;