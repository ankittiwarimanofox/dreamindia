"use client";
import React from 'react';
import { Phone, CheckCircle, Clock, MapPin, Heart, Star } from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link'; // Added missing Link import

import Footer from "@/app/components/Footer";
export default function ShimlaManaliHoneymoon() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrive Delhi – Shimla",
      details: "Pickup from Delhi Airport/Railway Station. Drive to Shimla, the 'Queen of Hills'. Check-in at your honeymoon suite. Evening at leisure to explore the Mall Road."
    },
    {
      day: "Day 2",
      title: "Shimla & Kufri Sightseeing",
      details: "Visit Kufri, the winter sports capital. Explore the Himalayan Nature Park and Green Valley. Enjoy a romantic evening walk at the Ridge and Christ Church."
    },
    {
      day: "Day 3",
      title: "Shimla – Kullu – Manali",
      details: "Scenic drive to Manali via Kullu Valley. Visit the Hanogi Mata Temple and Pandoh Dam. Enjoy river rafting in Kullu (optional). Arrive in Manali for overnight stay."
    },
    {
      day: "Day 4",
      title: "Manali Local Exploration",
      details: "Visit Hadimba Devi Temple, Vashisht Hot Springs, and the Tibetan Monastery. Enjoy a special candlelight dinner at the hotel."
    },
    {
      day: "Day 5",
      title: "Solang Valley Adventure",
      details: "Full day excursion to Solang Valley. Enjoy paragliding and zorbing. Visit the Anjani Mahadev Temple. Evening at the Manali Mall Road."
    },
    {
      day: "Day 6",
      title: "Manali – Chandigarh",
      details: "Drive to Chandigarh. Visit the famous Rock Garden, Sukhna Lake, and Rose Garden. Check-in at the hotel for your final night."
    },
    {
      day: "Day 7",
      title: "Chandigarh – Delhi Departure",
      details: "After breakfast, drop back to Delhi Airport/Railway Station for your onward journey with sweet honeymoon memories."
    }
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
    <div className="bg-white min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] w-full mt-[110px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Honeymoon in Manali"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex justify-center mb-4">
            <Heart className="text-[#FFA524] w-10 h-10 fill-[#FFA524] animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-xl uppercase tracking-tighter">
            Shimla Manali Chandigarh Honeymoon
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest text-[#FFA524]">
            <Link href="/" className="text-white hover:text-[#FFA524] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-white">Himachal</span>
            <span>›</span>
            <span className="text-white">Honeymoon Package</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Column - Content */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-3xl font-black text-gray-800 mb-2 uppercase">Honeymoon Highlights</h2>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">06 Nights / 07 Days Special Couple Tour</p>
               </div>
               <div className="text-right hidden md:block">
                  <p className="text-[#FFA524] text-3xl font-black italic">Special Rates</p>
                  <div className="flex text-yellow-400 justify-end">
                    <Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8 text-[13px] font-bold text-gray-500 uppercase">
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <Clock className="w-4 h-4 text-[#1D70B7]"/> 07 Days
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
                <MapPin className="w-4 h-4 text-[#1D70B7]"/> Shimla • Manali • Chandigarh
              </span>
            </div>
          </div>

          <div className="space-y-12">
            {itinerary.map((item, index) => (
              <div key={index} className="relative group pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-100 group-hover:bg-[#FFA524] transition-colors rounded-full"></div>
                <h3 className="text-2xl font-black text-[#1D70B7] mb-4 uppercase leading-tight group-hover:translate-x-2 transition-transform">
                  {item.day}: {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Special Honeymoon Inclusions */}
          <div className="mt-20 p-10 bg-orange-50 rounded-[40px] border-2 border-dashed border-[#FFA524]">
             <h4 className="text-2xl font-black mb-8 text-gray-800 uppercase text-center">Honeymoon Add-ons</h4>
             <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Candlelight Dinner in Manali",
                  "Flower Bed Decoration (Once)",
                  "Honeymoon Cake & Milk",
                  "Luxury Private Sedan Cab"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm">
                    <CheckCircle className="text-green-500 shrink-0" />
                    <p className="font-bold text-gray-700">{text}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Sidebar Widget */}
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
                      <p className="text-xs font-bold text-gray-400 uppercase">Himachal</p>
                      <p className="text-sm font-bold text-gray-700 group-hover:text-[#1D70B7] transition-colors leading-tight">
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