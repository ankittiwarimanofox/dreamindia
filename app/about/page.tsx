"use client";

import React, { useEffect, useState } from 'react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { 
  CheckCircle2, 
  ChevronRight, 
  Quote, 
  Sparkles, 
  TrendingUp, 
  Users, 
  MapPin,
  Globe,
  ShieldCheck,
  Compass
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import Footer from '../components/Footer';

// --- CREATIVE ANIMATION VARIANTS ---

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  },
};

// --- COMPONENTS ---

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = useState(0);
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        let start = 0;
        const timer = setInterval(() => {
          start += Math.ceil(end / 50);
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(start);
          }
        }, 30);
      }}
      className="text-center"
    >
      <h3 className="text-5xl font-black text-[#FFA524] tabular-nums">{count.toLocaleString()}+</h3>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60 mt-2">{label}</p>
    </motion.div>
  );
};

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#FFA524] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* 1. CINEMATIC HERO SECTION - Reduced Height */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#004381]">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071"
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Taj Mahal"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#004381]/80 via-transparent to-[#004381]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full border border-[#FFA524]/40 text-[#FFA524] text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
              Est. 2011 — Dream India Travel
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
              OUR <span className="text-[#FFA524] italic">LEGACY</span>
            </h1>
            <p className="max-w-xl mx-auto text-base md:text-lg text-blue-100/80 leading-relaxed font-medium">
              Redefining Indian tourism through personalized itineraries and local insights that turn journeys into lifelong memories.
            </p>
          </motion.div>
        </div>

        {/* Simplified Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-50"
        >
          <div className="w-1 h-4 bg-white/30 rounded-full" />
        </motion.div>
      </section>

      {/* 2. THE VISION (Interactive Grid) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <div>
              <motion.h2 variants={fadeInUp} className="text-5xl font-black text-[#004381] leading-tight">
                Crafting Experiences with <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA524] to-orange-600">Pure Passion</span>
              </motion.h2>
              <motion.div variants={fadeInUp} className="w-20 h-2 bg-[#FFA524] mt-6 rounded-full" />
            </div>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed italic border-l-4 border-gray-100 pl-8">
              "We don't just book trips; we curate the magic of India for every traveler who walks through our doors".
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Globe, title: "Global Standards", desc: "International quality service." },
                { icon: ShieldCheck, title: "Safe Travels", desc: "Your safety is our top priority." },
              ].map((item, i) => (
                <motion.div 
                  variants={fadeInUp}
                  key={i} 
                  className="p-6 bg-gray-50 rounded-[2rem] hover:bg-white hover:shadow-xl transition-all duration-500 group"
                >
                  <item.icon className="text-[#FFA524] mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h4 className="font-black text-[#004381] mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <img src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800" alt="Varanasi" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[2rem] shadow-2xl hidden md:block">
              <Compass className="text-[#FFA524] animate-spin-slow mb-4" size={40} />
              <p className="text-[#004381] font-black">15+ Years of<br/>Expertise</p>
            </div>
          </motion.div> {/* Corrected closing tag */}
        </div>
      </section>

      {/* 3. IMPACT NUMBERS */}
      <section className="py-24 bg-[#004381] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFA524]/10 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          <Counter end={15} label="Years of Excellence" />
          <Counter end={12000} label="Happy Travelers" />
          <Counter end={500} label="Curated Destinations" />
          <Counter end={98} label="Success Rate (%)" />
        </div>
      </section>

      {/* 4. CREATIVE CAROUSEL */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-5xl font-black text-[#004381] text-center">Why Choose <span className="text-[#FFA524]">Dream India?</span></h2>
        </div>
        
        <div className="flex gap-8 px-6 animate-scroll hover:pause">
          {[
            "Unbeatable Local Knowledge", "Transparent Pricing", "24/7 On-Trip Support", 
            "Personalized Itineraries", "Luxury & Budget Options", "Eco-Friendly Tourism"
          ].map((text, i) => (
            <div key={i} className="whitespace-nowrap px-12 py-6 bg-white rounded-full shadow-md border border-gray-100 flex items-center gap-4">
              <CheckCircle2 className="text-green-500" />
              <span className="text-[#004381] font-black text-lg">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-32 px-6">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="max-w-6xl mx-auto rounded-[4rem] bg-gradient-to-br from-[#004381] to-[#002a52] p-20 text-center relative overflow-hidden"
        >
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 border-2 border-white/5 w-64 h-64 rounded-full" 
          />
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter">
            Your Indian Odyssey <br/>
            <span className="text-[#FFA524]">Starts Here.</span>
          </h2>
          
          <Link href="/Contact">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: "#fff", color: "#004381" }}
              whileTap={{ scale: 0.9 }}
              className="bg-[#FFA524] text-white px-12 py-6 rounded-2xl font-black text-xl shadow-2xl shadow-orange-500/40 transition-all duration-300"
            >
              Request Custom Itinerary →
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: fit-content;
          animation: scroll 30s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;