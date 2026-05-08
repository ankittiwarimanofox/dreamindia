"use client";
import React from 'react';
import { Phone, CheckCircle, XCircle, Clock, MapPin, Star, ChevronRight } from 'lucide-react';
import Navbar from "@/app/components/Navbar";
import Link from 'next/link'; // Import Link for internal navigation

import Footer from "@/app/components/Footer";
export default function DharamshalaDalhousieTour() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrive Pathankot / Dharamshala",
      details: "Pickup from Pathankot Railway Station or Dharamshala Airport. Transfer to your hotel in Mcleodganj. Spend a relaxing evening at the local market."
    },
    {
      day: "Day 2",
      title: "Dharamshala Local Sightseeing",
      details: "Visit the Dalai Lama Temple complex, Bhagsunath Temple & Waterfall, St. John in the Wilderness Church, and the scenic Dal Lake."
    },
    {
      day: "Day 3",
      title: "Dharamshala – Dalhousie",
      details: "Morning drive to Dalhousie. On arrival, check-in at the hotel. Explore the colonial charm of Dalhousie and visit Gandhi Chowk in the evening."
    },
    {
      day: "Day 4",
      title: "Dalhousie – Khajjiar (Mini Switzerland)",
      details: "Full day excursion to Khajjiar. Enjoy the cedar forests, vast meadows, and the ancient Khajji Nag Temple. Perfect for photography and nature walks."
    },
    {
      day: "Day 5",
      title: "Dalhousie – Chamba – Departure",
      details: "Visit the historic Chamba town and Lakshmi Narayan Temple. Later, drive back to Pathankot for your onward journey home."
    }
  ];

  // Data for Popular Packages Widget
  const otherPackages = [
    { 
      name: "Best of Manali", 
      path: "/tours-package/kullu-manali-tour", 
      img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=150" 
    },
    { 
      name: "Shimla Cab Package", 
      path: "/tours-package/shimla-cab", 
      img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=150" 
    },
    { 
      name: "Best Of Himachal", 
      path: "/tours-package/himachal-tour-with-amritsar", 
      img: "https://images.unsplash.com/photo-1597033554101-9f9333a8848c?q=80&w=150" 
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
    <div className="bg-white min-h-screen font-sans text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] w-full mt-[110px] overflow-hidden flex items-center justify-center bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1752070207_180814-Dharamshala-Dalhousie-Group-Tour-Package-Slider-image.webp" 
            className="w-full h-full object-cover brightness-[0.6]" 
            alt="Dharamshala Mountains"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-2xl uppercase tracking-tighter">
            Dharamshala Dalhousie Tour
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest bg-black/20 backdrop-blur-md py-2 px-4 rounded-full w-fit mx-auto border border-white/10">
            <Link href="/" className="text-[#FFA524] hover:text-white transition-colors">Home</Link>
            <span className="text-white/40"><ChevronRight size={12}/></span>
            <Link href="/destinations/himachal" className="text-[#FFA524] hover:text-white transition-colors">Himachal</Link>
            <span className="text-white/40"><ChevronRight size={12}/></span>
            <span className="text-white">Dharamshala Package</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        
        {/* Left Content */}
        <div className="lg:col-span-2">
          <div className="border-b border-gray-100 pb-8 mb-10">
            <div className="flex justify-between items-start flex-wrap gap-4">
               <div>
                  <h2 className="text-3xl font-black text-gray-800 mb-2 uppercase tracking-tight">Package Highlights</h2>
                  <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">Code: HIM-DDA | Duration: 04 Nights / 05 Days</p>
               </div>
               <div className="text-right">
                  <p className="text-[#FFA524] text-3xl font-black">₹ On Request</p>
                  <div className="flex justify-end text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor"/>)}
                  </div>
               </div>
            </div>
            <div className="flex flex-wrap gap-6 mt-6 text-[11px] font-black text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl">
                <Clock className="w-4 h-4 text-[#1D70B7]"/> 04 Nights / 05 Days
              </span>
              <span className="flex items-center gap-2 bg-gray-50 border border-gray-100 px-4 py-2 rounded-xl">
                <MapPin className="w-4 h-4 text-[#1D70B7]"/> Location: Himachal
              </span>
            </div>
          </div>

          <div className="space-y-12">
            {itinerary.map((item, index) => (
              <div key={index} className="group relative">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-[#1D70B7] text-white px-3 py-1 rounded text-xs font-black uppercase">{item.day}</span>
                    <h3 className="text-2xl font-black text-gray-800 group-hover:text-[#FFA524] transition-colors uppercase tracking-tight">
                    {item.title}
                    </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-lg font-medium border-l-4 border-gray-100 pl-6 group-hover:border-[#FFA524] transition-all">
                  {item.details}
                </p>
              </div>
            ))}
          </div>

          {/* Inclusions & Exclusions */}
          <div className="mt-20 pt-12 border-t border-gray-100 grid md:grid-cols-2 gap-10">
            <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100">
              <h4 className="text-xl font-black mb-6 text-green-800 uppercase tracking-tighter flex items-center gap-2">
                <CheckCircle className="text-green-500"/> Inclusions
              </h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li>• Private Cab for All Sightseeing</li>
                <li>• Luxury Hotel Stay (MAP Plan)</li>
                <li>• Daily Breakfast & Dinner</li>
                <li>• Toll, Parking & Driver Fees</li>
              </ul>
            </div>
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h4 className="text-xl font-black mb-6 text-red-800 uppercase tracking-tighter flex items-center gap-2">
                <XCircle className="text-red-500"/> Exclusions
              </h4>
              <ul className="space-y-4 text-gray-700 font-bold text-sm">
                <li>• 5% GST on Final Bill</li>
                <li>• Adventure Activity Costs</li>
                <li>• Personal Meals & Laundry</li>
                <li>• Any Travel Insurance</li>
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