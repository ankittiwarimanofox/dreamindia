"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plane, Car, ShieldCheck, Clock, Star, Phone, CheckCircle, XCircle, MapPin, ChevronRight } from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link';

import Footer from "@/app/components/Footer";
const ManaliPackage = () => {
  const { scrollY } = useScroll();
  
  // Parallax effect for the hero image
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const itinerary = [
    {
      day: "Day 1",
      title: "Delhi to Manali (Overnight)",
      details: "Arrive at the Delhi Volvo Boarding point by 5:00 PM. Depart for a scenic overnight journey to Manali.",
      icon: <Car className="w-6 h-6" />
    },
    {
      day: "Day 2",
      title: "Arrival & Local Sightseeing",
      details: "Morning arrival and hotel check-in. Visit Hadimba Devi Temple, Vashisht Village, and Mall Road.",
      icon: <Star className="w-6 h-6" />
    },
    {
      day: "Day 3",
      title: "Solang Valley Excursion",
      details: "Full day excursion to Solang Valley for adventure sports. Optional Rohtang Pass visit.",
      icon: <Star className="w-6 h-6" />
    }
    // ... rest of itinerary items
  ];

 // Logic to handle phone calls
  const handleCall = () => {
    window.location.href = "tel:9530609262";
  };

  // Data for sidebar package navigation
  const popularPackages = [
    { 
        name: "Shimla Kullu Manali", 
        path: "/tours-package/shimla-cab",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=150"
    },
    { 
        name: "Himachal with Amritsar", 
        path: "/tours-package/himachal-tour-with-amritsar",
        img: "https://media.istockphoto.com/id/155152862/photo/the-golden-temple-in-amritsar-india.jpg?s=612x612&w=0&k=20&c=Fj-KNmuPVHRdfFsREa868rQJoZR7ZLELDeM8liRHs0w="
    },
    { 
        name: "Dharamshala Dalhousie", 
        path: "/tours-package/kullu-manali-tour",
        img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=150"
    }
  ];

  return (
    <div className="bg-white font-sans text-slate-900">
      <Navbar />
      
      {/* IMPROVED HERO SECTION */}
      <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center bg-slate-900">
        {/* Parallax Background Image */}
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000" 
            alt="Manali Landscape" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-white"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          {/* Glassmorphism Breadcrumbs */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 shadow-xl">
            <Link href="/" className="text-white/80 hover:text-orange-400 text-xs font-bold uppercase tracking-widest transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <Link href="/destinations/himachal" className="text-white/80 hover:text-orange-400 text-xs font-bold uppercase tracking-widest transition-colors">Himachal</Link>
            <ChevronRight className="w-3 h-3 text-white/40" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Best of Manali</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tighter uppercase">
            Best Of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">Manali</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
            Experience the magic of the Himalayas with our curated 5-day luxury Volvo retreat.
          </p>
        </motion.div>
      </section>

      {/* IMPROVED QUICK STATS */}
      <div className="max-w-6xl mx-auto -mt-20 relative z-20 px-6">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-2 grid grid-cols-1 md:grid-cols-4 gap-2 border border-slate-100">
          <div className="flex flex-col items-center justify-center py-6 px-4 bg-slate-50/50 rounded-2xl transition-colors hover:bg-orange-50 group">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Price Start</p>
            <p className="text-2xl font-black text-slate-800 group-hover:text-orange-600">₹ 8,999/-</p>
          </div>
          <div className="flex flex-col items-center justify-center py-6 px-4 bg-slate-50/50 rounded-2xl">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Duration</p>
            <p className="text-2xl font-black text-slate-800">05 Days</p>
          </div>
          <div className="flex flex-col items-center justify-center py-6 px-4 bg-slate-50/50 rounded-2xl">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Rating</p>
            <div className="flex items-center gap-2">
                <p className="text-2xl font-black text-slate-800">4.9</p>
                <div className="flex text-orange-400">
                    <Star size={16} fill="currentColor" />
                </div>
            </div>
          </div>
          <button 
            onClick={handleCall}
            className="bg-orange-500 text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all shadow-lg hover:-translate-y-1 active:scale-95"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-16">
        {/* Left Column */}
        <div className="lg:col-span-2">
            {/* Itinerary logic remains same as previous version */}
            <h2 className="text-4xl font-black text-slate-800 mb-12 uppercase tracking-tighter">Your Journey Map</h2>
            <div className="relative border-l-2 border-slate-100 ml-4 md:ml-6 mb-20 space-y-16">
                {itinerary.map((item, index) => (
                <div key={index} className="relative pl-12">
                    <div className="absolute -left-[22px] top-0 bg-white border-4 border-orange-500 text-orange-500 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10">
                    {item.icon}
                    </div>
                    <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">{item.day}</span>
                    <h3 className="text-2xl font-black mt-2 mb-4 text-slate-800 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium text-lg">{item.details}</p>
                </div>
                ))}
            </div>
        </div>

       
        {/* Sidebar Sidebar Widget */}
        <aside className="lg:col-span-1">
          <div className="bg-gray-50 p-8 rounded-2xl sticky top-32 border border-gray-200">
            <h3 className="text-2xl font-bold text-[#FFA524] mb-8">Book Your Trip</h3>
            
            <div className="space-y-6">
              <button 
                onClick={handleCall}
                className="w-full bg-[#FFA524] hover:bg-[#C38E2D] text-white py-4 rounded-xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95"
              >
                <Phone className="w-6 h-6 fill-white" /> Call Us
              </button>
              <p 
                className="text-center text-2xl font-extrabold text-gray-700 tracking-tight cursor-pointer hover:text-[#1D70B7] transition-colors"
                onClick={handleCall}
              >
                9530609262
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Popular Packages</p>
              <div className="space-y-6">
                {popularPackages.map((pkg, index) => (
                  <Link href={pkg.path} key={index} className="flex gap-3 group cursor-pointer">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={pkg.img} 
                        alt={pkg.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase">Popular Package</p>
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#1D70B7] transition-colors">
                        {pkg.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}

export default ManaliPackage;