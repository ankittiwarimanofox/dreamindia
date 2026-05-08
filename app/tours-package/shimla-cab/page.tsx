"use client";
import React from 'react';
import { Phone, CheckCircle, XCircle, Clock, MapPin } from 'lucide-react';
import Navbar from "@/app/components/Navbar";

import Footer from "@/app/components/Footer";
import Link from 'next/link';

export default function ShimlaKulluManaliByCab() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Chandigarh – Shimla",
      details: "Arrive at Chandigarh Airport/Railway Station. Our driver will pick you up for a scenic drive to Shimla. Check-in at the hotel and enjoy a peaceful evening at the Mall Road."
    },
    {
      day: "Day 2",
      title: "Shimla Local & Kufri Sightseeing",
      details: "After breakfast, visit Kufri, Green Valley, and Indira Holiday Home. In the afternoon, explore the Ridge, Christ Church, and Jakhoo Temple."
    },
    {
      day: "Day 3",
      title: "Shimla – Kullu – Manali",
      details: "Travel to Manali via the beautiful Kullu Valley. Stop for river rafting and visit the Vaishno Devi Temple in Kullu. Reach Manali by evening."
    },
    {
      day: "Day 4",
      title: "Manali Local Sightseeing",
      details: "Explore Hadimba Devi Temple, Vashisht Hot Springs, and the Tibetan Monastery. Spend your evening shopping at the Manali Mall Road."
    },
    {
      day: "Day 5",
      title: "Solang Valley Excursion",
      details: "Full day excursion to Solang Valley for adventure sports like paragliding and zorbing. Return to the hotel for dinner."
    },
    {
      day: "Day 6",
      title: "Manali – Chandigarh Departure",
      details: "After breakfast, drive back to Chandigarh for your onward journey. Tour ends with sweet memories."
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

      {/* Hero Banner Section */}
      <section className="relative h-[45vh] w-full mt-[110px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2000" 
            className="w-full h-full object-cover object-center" 
            alt="Shimla Hills"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Shimla Kullu Manali By Cab
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-sm font-black uppercase tracking-widest">
            <Link href="/" className="text-[#FFA524] hover:text-white transition-colors">Home</Link>
            <span className="text-white">›</span>
            <Link href="/destinations/himachal" className="text-[#FFA524] hover:text-white transition-colors">Himachal</Link>
            <span className="text-white">›</span>
            <span className="text-[#FFA524]">Cab Package</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-6 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-2">Package Highlights</h2>
            <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-500 uppercase">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-[#1D70B7]"/> 05 Nights / 06 Days</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-[#1D70B7]"/> Location: Himachal</span>
              <span className="text-[#1D70B7]">Price: On Request</span>
            </div>
          </div>

          <div className="space-y-12">
            {itinerary.map((item, index) => (
              <div key={index} className="relative">
                <h3 className="text-2xl font-bold text-[#1D70B7] mb-4">{item.day}: {item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.details}</p>
              </div>
            ))}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="mt-16 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">Inclusions</h4>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Personal Cab (Sedan/SUV)</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Breakfast & Dinner</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Toll & Parking Taxes</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5 text-green-500"/> Deluxe Hotel Stay</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-800">Exclusions</h4>
              <ul className="space-y-3 text-gray-600 font-medium">
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500"/> Adventure Activity Fees</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500"/> 5% GST on Final Bill</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500"/> Rohtang Pass Permit</li>
                <li className="flex items-center gap-2"><XCircle className="w-5 h-5 text-red-500"/> Laundry & Drinks</li>
              </ul>
            </div>
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