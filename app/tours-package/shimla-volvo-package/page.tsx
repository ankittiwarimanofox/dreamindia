"use client";
import React from 'react';
import { Phone, CheckCircle, XCircle, Clock, MapPin, Star, Bus } from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link'; // FIXED: Added this import to solve the error

import Footer from "@/app/components/Footer";
export default function BestOfShimlaVolvoTour() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Delhi – Shimla (Overnight Journey)",
      details: "Report at Delhi Volvo Pickup point (Majnu Ka Tilla / RK Ashram) by 8:00 PM. Depart for Shimla. Enjoy an overnight journey in a comfortable Luxury AC Volvo."
    },
    {
      day: "Day 2",
      title: "Shimla Arrival & Local Sightseeing",
      details: "Pickup from Shimla Bus Stand and transfer to hotel. Afternoon visit to the famous Jakhu Temple (Hanuman Statue), Christ Church, The Ridge, and the bustling Mall Road for shopping."
    },
    {
      day: "Day 3",
      title: "Kufri & Green Valley Excursion",
      details: "Full day excursion to Kufri, the winter sports capital. Visit the Himalayan Nature Park and Green Valley. In the evening, return to Shimla for a relaxing dinner at your hotel."
    },
    {
      day: "Day 4",
      title: "Shimla – Delhi (Departure)",
      details: "After breakfast, check out from the hotel. Spend free time at the local market. Board the evening Volvo (approx 8:00 PM) from Shimla for your return journey to Delhi."
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
            src="https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2000" 
            className="w-full h-full object-cover" 
            alt="Shimla Hills"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-xl uppercase tracking-tighter">
            Best Of Shimla Volvo Tour
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest">
            <Link href="/" className="text-[#FFA524] hover:text-white transition-colors">Home</Link>
            <span className="text-white">›</span>
            <Link href="/destinations/himachal" className="text-[#FFA524] hover:text-white transition-colors">Himachal</Link>
            <span className="text-white">›</span>
            <span className="text-[#FFA524]">Volvo Package</span>
          </div>
        </div>
      </section>
      

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Content Column */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-3xl font-black text-gray-800 mb-2 uppercase">Package Highlights</h2>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Code: HIM-SV1 | Duration: 03 Nights / 04 Days</p>
               </div>
               <div className="text-right">
                  <p className="text-[#FFA524] text-2xl font-black">₹ 5,999/-</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor"/>)}
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-6 text-[13px] font-bold text-gray-500 uppercase">
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-md">
                <Clock className="w-4 h-4 text-[#1D70B7]"/> 03 Nights / 04 Days
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-md">
                <Bus className="w-4 h-4 text-[#1D70B7]"/> AC Volvo Included
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-md">
                <MapPin className="w-4 h-4 text-[#1D70B7]"/> Location: Shimla
              </span>
            </div>
          </div>

          <div className="space-y-12">
            {itinerary.map((item, index) => (
              <div key={index} className="group relative">
                <h3 className="text-2xl font-black text-[#1D70B7] mb-4 group-hover:text-[#FFA524] transition-colors uppercase">
                  {item.day}: {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-medium border-l-4 border-gray-100 pl-6 group-hover:border-[#FFA524] transition-all">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Inclusions & Exclusions Sections */}
          <div className="mt-20 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-10">
            <div className="bg-green-50/50 p-8 rounded-3xl">
              <h4 className="text-xl font-black mb-6 text-green-800 uppercase">Inclusions</h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Delhi-Shimla-Delhi AC Volvo Seats</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> 02 Nights Hotel Stay (Shimla)</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Pickup & Drop from Bus Stand</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Breakfast & Dinner at Hotel</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Full Day Kufri Sightseeing</li>
              </ul>
            </div>
            <div className="bg-red-50/50 p-8 rounded-3xl">
              <h4 className="text-xl font-black mb-6 text-red-800 uppercase">Exclusions</h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Lunch & Personal Expenses</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Monument Entrance Fees</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Horse Riding / Adventure Sports</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> 5% GST Extra</li>
              </ul>
            </div>
          </div>
        </div>
        

        {/* Sidebar Sticky Widget */}
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