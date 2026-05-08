"use client";
import React from 'react';
import { Phone, CheckCircle, XCircle, Clock, MapPin, Star } from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link'; // Added this missing import

import Footer from "@/app/components/Footer";
export default function HimachalAmritsarTour() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrive Amritsar",
      details: "Pickup from Amritsar Railway Station/Airport. Visit the Golden Temple and witness the Wagah Border ceremony in the evening. Overnight stay at Amritsar."
    },
    {
      day: "Day 2",
      title: "Amritsar – Dalhousie",
      details: "After breakfast, visit Jallianwala Bagh, then proceed to Dalhousie. Check-in at the hotel and enjoy a peaceful evening amidst the pine-clad hills."
    },
    {
      day: "Day 3",
      title: "Dalhousie – Khajjiar (Mini Switzerland)",
      details: "Full day excursion to Khajjiar. Enjoy the vast green meadows, floating island, and optional zorbing or horse riding. Return to Dalhousie."
    },
    {
      day: "Day 4",
      title: "Dalhousie – Dharamshala",
      details: "Travel to Dharamshala. Visit Mcleodganj, Bhagsunath Temple, and the Dalai Lama Temple complex. Overnight stay in Dharamshala."
    },
    {
      day: "Day 5",
      title: "Dharamshala – Manali",
      details: "A scenic drive to Manali. Enroute visit the Palampur tea gardens and Baijnath temple. Reach Manali by evening and check into your hotel."
    },
    {
      day: "Day 6",
      title: "Manali Local & Departure",
      details: "Visit Hadimba Devi Temple and Vashisht Village. Later, drop at the Volvo station or continue for your onward journey."
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
            src="https://media.istockphoto.com/id/155152862/photo/the-golden-temple-in-amritsar-india.jpg?s=612x612&w=0&k=20&c=Fj-KNmuPVHRdfFsREa868rQJoZR7ZLELDeM8liRHs0w=" 
            className="w-full h-full object-cover" 
            alt="Golden Temple Amritsar"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-xl uppercase tracking-tighter">
            Himachal Tour With Amritsar
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest">
            <Link href="/" className="text-[#FFA524] hover:text-white transition-colors">Home</Link>
            <span className="text-white">›</span>
            <span className="text-[#FFA524]">Himachal</span>
            <span className="text-white">›</span>
            <span className="text-[#FFA524]">Amritsar Package</span>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Content Column */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <div className="flex justify-between items-start">
               <div>
                  <h2 className="text-3xl font-black text-gray-800 mb-2 uppercase">Package Overview</h2>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Code: HIM-AMR | Destination: Himachal & Punjab</p>
               </div>
               <div className="text-right">
                  <p className="text-[#FFA524] text-2xl font-black">₹ On Request</p>
                  <div className="flex text-yellow-400 mt-1">
                    <Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/><Star size={14} fill="currentColor"/>
                  </div>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-6 text-[13px] font-bold text-gray-500 uppercase">
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-md">
                <Clock className="w-4 h-4 text-[#1D70B7]"/> 05 Nights / 06 Days
              </span>
              <span className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-md">
                <MapPin className="w-4 h-4 text-[#1D70B7]"/> Starting: Amritsar
              </span>
            </div>
          </div>

          {/* Itinerary */}
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

          {/* Inclusions & Exclusions */}
          <div className="mt-20 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-10">
            <div className="bg-green-50/50 p-8 rounded-3xl">
              <h4 className="text-xl font-black mb-6 text-green-800 uppercase italic">What's Included</h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Pickup & Drop via Private Cab</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Luxury Hotel Accommodations</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> Daily Breakfast & Dinner</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500"/> All Sightseeing as per Itinerary</li>
              </ul>
            </div>
            <div className="bg-red-50/50 p-8 rounded-3xl">
              <h4 className="text-xl font-black mb-6 text-red-800 uppercase italic">What's Excluded</h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> 5% GST on Final Bill</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Monument Entrance Fees</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Laundry & Personal Drinks</li>
                <li className="flex items-center gap-3"><XCircle className="w-5 h-5 text-red-500"/> Any Air or Train Fare</li>
              </ul>
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