"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Lock, Smartphone, RefreshCcw, 
  CheckCircle, ArrowRight, Headphones, Globe, 
  Zap, ShieldAlert, CreditCard, Landmark
} from 'lucide-react';
import Navbar from '../components/Navbar';

import Footer from "@/app/components/Footer";
// --- CONFIGURATION DATA ---
const SECURITY_FEATURES = [
  { 
    icon: <Lock className="text-[#00AEEF]" />, 
    title: "End-to-End Encryption", 
    desc: "AES-256 bit military-grade standards secure every packet of data.",
    accent: "border-b-blue-500"
  },
  { 
    icon: <ShieldCheck className="text-[#FFA524]" />, 
    title: "PCI-DSS Level 1", 
    desc: "Certified for the highest level of payment card industry security.",
    accent: "border-b-orange-500"
  },
  { 
    icon: <Smartphone className="text-[#00AEEF]" />, 
    title: "Tokenized Data", 
    desc: "We never store your card details. Transactions use secure one-time tokens.",
    accent: "border-b-cyan-500"
  }
];

const STEPS = [
  { id: "01", title: "Review Details", sub: "Verify your itinerary and final costs." },
  { id: "02", title: "Select Method", sub: "Choose UPI, Bank Transfer, or Card." },
  { id: "03", title: "Authorize", sub: "Securely complete the transaction." },
  { id: "04", title: "Confirm", sub: "Instant digital vouchers in your inbox." }
];

// --- REUSABLE ANIMATIONS ---
const containerVar = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVar = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const PayNowPage = () => {
  return (
    <main className="min-h-screen bg-[#FDFDFD] selection:bg-[#00AEEF] selection:text-white">
      <Navbar />

      {/* --- 1. ARCHITECTURAL HERO SECTION --- */}
      <section className="relative min-h-[70vh] flex items-center bg-[#0a0a0a] overflow-hidden pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#00AEEF]/10 rounded-full blur-[120px]" 
          />
          <img 
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2070" 
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
            alt="Secure Transaction"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-12 bg-[#FFA524]" />
              <span className="text-[#FFA524] text-xs font-black uppercase tracking-[0.4em]">Secure Terminal v4.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]"
            >
              Transact <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00AEEF] to-[#FFA524]">
                Without Limits.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-xl font-medium leading-relaxed mb-10 border-l-2 border-[#00AEEF]/30 pl-6"
            >
              Access our high-speed, encrypted payment infrastructure. 
              Designed for the modern traveler who demands security and speed.
            </motion.p>
          </div>
        </div>
      </section>

      {/* --- 2. SECURITY BENTO GRID --- */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12 -mt-32 relative z-30">
        <motion.div 
          variants={containerVar}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {SECURITY_FEATURES.map((feature, i) => (
            <motion.div 
              key={i}
              variants={itemVar}
              whileHover={{ y: -5 }}
              className={`bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 border-b-4 ${feature.accent}`}
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- 3. THE "DIRECT-PAY" ALTERNATIVE --- */}
      <section className="py-20 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="bg-[#0a0a0a] rounded-[3.5rem] p-1 lg:p-2 border border-white/5">
          <div className="bg-gradient-to-br from-neutral-900 to-black rounded-[3rem] overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="p-10 lg:p-20 lg:w-3/5">
              <div className="inline-flex items-center gap-3 bg-red-500/10 text-red-500 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-red-500/20">
                <ShieldAlert size={14} /> Gateway Optimization in Progress
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
                Fast-Track your booking via <span className="text-[#00AEEF]">Direct Deposit.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 font-medium">
                Our gateway is being upgraded for regional API compliance. For immediate confirmation, 
                our finance desk is ready to process your UPI/NEFT transfers 24/7.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="https://wa.me/919530609262" className="flex items-center justify-between bg-white text-black p-5 rounded-2xl font-black hover:bg-[#FFA524] transition-colors group">
                  <span>PAY VIA WHATSAPP</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl text-white">
                  <Landmark className="text-[#00AEEF]" />
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black">Direct Support</p>
                    <p className="text-lg font-bold tracking-tight">+91 9530609262</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 h-full min-h-[400px] relative">
              <img 
                src="https://images.unsplash.com/photo-1554224155-169641357599?q=80&w=2070" 
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                alt="Finance Specialist"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. TRANSACTION TIMELINE --- */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-[#00AEEF] tracking-[0.5em] uppercase mb-4">The Workflow</h2>
            <p className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter">Instant Confirmation Path</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className="group text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-20 h-20 bg-white rounded-[2rem] shadow-xl shadow-gray-200 flex items-center justify-center text-3xl font-black text-[#0a0a0a] group-hover:bg-[#FFA524] group-hover:text-white transition-all duration-500">
                    {step.id}
                  </div>
                  {i < 3 && <div className="hidden md:block absolute top-10 -right-12 w-12 h-[2px] bg-gray-200" />}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tighter">{step.title}</h4>
                <p className="text-gray-500 text-sm font-medium">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. GLOBAL TRUST CENTER --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl font-black text-gray-900 leading-none tracking-tighter">
                Global Network. <br />
                <span className="text-[#00AEEF]">Local Trust.</span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                We support localized payment methods across 40+ countries, ensuring you avoid 
                hidden forex fees and enjoy the best exchange rates available.
              </p>
              <div className="flex gap-10">
                <div>
                  <p className="text-4xl font-black text-gray-900">45k+</p>
                  <p className="text-xs uppercase font-black text-[#FFA524] tracking-widest">Successful Bookings</p>
                </div>
                <div className="h-12 w-[1px] bg-gray-200" />
                <div>
                  <p className="text-4xl font-black text-gray-900">24/7</p>
                  <p className="text-xs uppercase font-black text-[#FFA524] tracking-widest">Fraud Monitoring</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-gray-50">
                <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-[#00AEEF] mb-6">
                  <Headphones />
                </div>
                <p className="text-sm font-black text-gray-900 uppercase mb-2">Concierge Support</p>
                <p className="text-xs text-gray-400 font-medium italic">Resolving payment queries in under 60 seconds.</p>
              </div>
              <div className="bg-[#00AEEF] p-8 rounded-[3rem] shadow-xl shadow-blue-900/20">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6">
                  <Globe />
                </div>
                <p className="text-sm font-black text-white uppercase mb-2">Worldwide</p>
                <p className="text-xs text-blue-100 font-medium italic">Multi-currency support for USD, EUR, INR & more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
     
       
      <Footer />
    </main>
  );
};

export default PayNowPage;