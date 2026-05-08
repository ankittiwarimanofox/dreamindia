"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, MapPin, ArrowRight, Phone, Mail, Plane, Hotel, Map, 
  Bus, Utensils, Clock, Quote
} from 'lucide-react';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';
import Navbar from './components/Navbar';

import Footer from "@/app/components/Footer";
// --- DATA CONSTANTS ---

const heroSlides = [
  "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070",
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070",
  "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=2070",
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070"
];

const reasons = [
  { title: "Expertly Crafted Packages", desc: "Thoughtfully designed itineraries for a stress-free holiday.", icon: "🎨", color: "bg-blue-50 text-blue-600" },
  { title: "Best Stay Options", desc: "Handpicked hotels and resorts for comfort and scenic beauty.", icon: "🏨", color: "bg-orange-50 text-orange-600" },
  { title: "Comfortable Travel", desc: "Safe, smooth journeys with verified transport partners.", icon: "🚐", color: "bg-green-50 text-green-600" },
  { title: "Affordable Pricing", desc: "Transparent rates with no hidden costs — value for every budget.", icon: "💰", color: "bg-purple-50 text-purple-600" }
];

const services = [
  { title: "Hotel Bookings", icon: <Hotel />, desc: "Luxury accommodations at exclusive prices." },
  { title: "Private Transport", icon: <Bus />, desc: "Reliable fleet options for a safe journey." },
  { title: "Customized Tours", icon: <Map />, desc: "Tailor-made itineraries for your perfect trip." },
  { title: "Flight/Train", icon: <Plane />, desc: "Seamless booking for all logistical needs." },
  { title: "Dining", icon: <Utensils />, desc: "Experience local cuisine with authentic dining." }
];

const tours = [
  { 
    title: "Dharamshala Dalhousie Tour", 
    duration: "04 N / 05 D", 
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=600", 
    path: "/tours-package/kullu-manali-tour",
    code: "DIT-DD-05" 
  },
  { 
    title: "Best Of Shimla Volvo Tour", 
    duration: "03 N / 04 D", 
    img: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=600", 
    path: "/tours-package/shimla-volvo-package",
    code: "DIT-SV-04" 
  },
  { 
    title: "Best Of Manali Volvo Package", 
    duration: "04 N / 05 D", 
    img: "https://www.bharatbooking.com/admin/webroot/img/uploads/holiday-package-gallery/1699706266_964687-shimla-manali-package-from-delhi-by-volvo-slider-image.webp", 
    path: "tours-package/best-of-manali-volvo-package",
    code: "DIT-MV-05" 
  },
  { 
    title: "Shimla Kullu Manali By Cab", 
    duration: "05 N / 06 D", 
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=600", 
    path: "/tours-package/shimla-cab",
    code: "DIT-SKM-06" 
  },
  { 
    title: "Himachal Tour With Amritsar", 
    duration: "05 N / 06 D", 
    img: "https://media.istockphoto.com/id/155152862/photo/the-golden-temple-in-amritsar-india.jpg?s=612x612&w=0&k=20&c=Fj-KNmuPVHRdfFsREa868rQJoZR7ZLELDeM8liRHs0w=", 
    path: "/tours-package/himachal-tour-with-amritsar",
    code: "DIT-HTA-06" 
  },
  { 
    title: "Shimla Manali Chandigarh Honeymoon", 
    duration: "06 N / 07 D", 
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=600", 
    path: "/tours-package/shimla",
    code: "DIT-SMC-07" 
  }    
];

const timelinePoints = [
  { img: "https://upload.wikimedia.org/wikipedia/commons/7/74/Trayambakeshwar_Temple_VK.jpg", country: "RISHIKESH", date: "AUGUST 2018" },
  { img: "https://www.indiantravelstore.com/images/blogs/things-to-know-about-goa.jpg", country: "GOA", date: "JUNE 2018" },
  { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpAsObJVcf1Jy1OLUTdB2g03P5Na_0POE44A&s", country: "SHIMLA", date: "JUNE 2018" }
];

const scrollingDestinations = [
  { name: 'Kerela', image: 'https://www.cholantours.com/blog/wp-content/uploads/2025/11/Best-Places-To-Visit-In-Kerala-For-World-Travellers.webp', path: '/Contact' },
  { name: 'Shimla', image: 'https://uttarakhandtravelagency.com/images/shimla_1753022198.jpg', path: '/Contact' },
  { name: 'Himachal', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh6uuy1OX9ehcJvPFK6M0hcch5U7DYQqQAA&s', path: '/Contact' },
  { name: 'Manali', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRh6uuy1OX9ehcJvPFK6M0hcch5U7DYQqQAA&s', path: '/Contact' },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Verified Traveler",
    title: "Excellent Experience",
    content: "The team was very responsive and delivered everything on time. The quality of travel exceeded my expectations.",
    date: "7 Days Ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100"
  },
  {
    name: "Priya Verma",
    role: "Verified Traveler",
    title: "Great Value for Money",
    content: "I was really impressed with the service quality compared to the price. Everything was smooth from start to finish.",
    date: "4 Months Ago",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100"
  }
];

export default function Home() {
  const containerRef = useRef(null);
  const [activeCard, setActiveCard] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert("Thank you! Our team will respond quickly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    }
  };

  // Smooth scroll function for the Explore button
  const scrollToServices = () => {
    const element = document.getElementById('services-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevCard = () => setActiveCard((prev) => (prev === 0 ? scrollingDestinations.length - 1 : prev - 1));
  const nextCard = () => setActiveCard((prev) => (prev === scrollingDestinations.length - 1 ? 0 : prev + 1));

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.15 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img src={heroSlides[currentSlide]} className="w-full h-full object-cover opacity-60" alt="Travel" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-white mt-[-10vh]">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <motion.p initial={{ letterSpacing: "0.1em", opacity: 0 }} animate={{ letterSpacing: "0.3em", opacity: 1 }} className="text-[#C38E2D] font-bold text-sm mb-6 uppercase">
            
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-black leading-[1] mb-8 uppercase tracking-tighter">
              DREAM <br />
              <span className="text-[#C38E2D]">INDIA</span> <span className="text-white/80 font-light">TRAVEL</span>
            </h1>
            <div className="border-l-4 border-[#C38E2D] pl-8 mb-12 py-2">
              <p className="text-gray-100 text-xl md:text-2xl font-light max-w-2xl italic">
                "Premium tour & travel services across the nation. <br /> Crafting experiences with passion."
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 max-w-2xl">
              
              <button 
                onClick={scrollToServices}
                className="w-full md:w-auto bg-[#C38E2D] text-white font-bold px-10 py-4 rounded-xl flex items-center justify-center gap-2"
              >
                Explore <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex gap-4">
            <div className="w-1/2 h-[500px] rounded-full overflow-hidden border-8 border-gray-50 shadow-2xl"><img src={heroSlides[0]} className="w-full h-full object-cover" /></div>
            <div className="w-1/2 flex flex-col gap-4">
              <div className="h-[240px] rounded-[100px] overflow-hidden shadow-xl"><img src="https://uttarakhandtravelagency.com/images/shimla_1753022198.jpg" className="w-full h-full object-cover" /></div>
              <div className="h-[240px] rounded-full overflow-hidden shadow-xl"><img src="https://images.wallpapersden.com/image/download/guy-mountains-travel_amhrZ2WUmZqaraWkpJRmbmdlrWZnZWU.jpg" className="w-full h-full object-cover" /></div>
            </div>
          </div>
          <div>
            <h2 className="text-[#004381] text-5xl font-bold mb-6">Crafting Experiences with <span className="text-[#C38E2D] italic">Passion</span></h2>
            <p className="text-gray-600 text-lg mb-8">At Dream India Travel, we believe every journey tells a story. Our team works tirelessly to bring you the best of India.</p>
           <Link href="/Contact">
              <button className="bg-[#004381] text-white px-10 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-[#003366] transition-colors">
                Learn More <ArrowRight size={20}/>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FOOTSTEPS TIMELINE - HORIZONTAL LAYOUT */}
      <section className="py-12 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 opacity-[0.03] select-none pointer-events-none z-0">
          <h3 className="text-[20vw] md:text-[15vw] font-black text-[#004381] leading-none">Discover</h3>
        </div>
        <div className="max-w-7xl mx-auto px-3 md:px-6 relative z-10">
          <div className="mb-8 md:mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#004381] text-center">NEVER ENDING <span className="text-[#C38E2D]">FOOTSTEPS</span></h2>
          </div>
          
          {/* Horizontal Layout for All Devices */}
          <div className="relative pt-10 pb-20">
            {/* SVG Curve - Hidden on Mobile */}
            <div className="hidden md:block">
              <svg className="absolute top-1/2 left-0 w-full h-[150px] -translate-y-1/2 opacity-20" viewBox="0 0 1440 150">
                <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 3 }} d="M-50,75 C200,-50 400,200 720,75 C1040,-50 1240,200 1490,75" stroke="#004381" strokeWidth="2" strokeDasharray="10 10" fill="none" />
              </svg>
            </div>
            
            <div className="flex flex-row gap-4 md:gap-24 relative z-20 justify-between md:justify-center items-start md:items-center overflow-x-auto md:overflow-visible px-2 md:px-0 pb-4 md:pb-0">
              {timelinePoints.map((point, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center flex-shrink-0"
                >
                  <motion.div whileHover={{ scale: 1.15 }} className="w-16 md:w-24 h-16 md:h-24 bg-white rounded-full overflow-hidden shadow-2xl mb-3 md:mb-8 border-4 border-slate-50">
                    <img src={point.img} alt={point.country} className="w-full h-full object-cover" />
                  </motion.div>
                  <MapPin className="text-[#C38E2D] mb-2 md:mb-6" size={16} />
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase text-center">{point.date}</p>
                  <p className="text-sm md:text-2xl font-black text-[#004381] mt-1 md:mt-2 text-center whitespace-nowrap">{point.country}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. DESTINATIONS */}
      <section ref={containerRef} className="bg-white text-black py-24 px-6 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
          <div>
            <h2 className="text-6xl font-extrabold tracking-tighter text-[#004381]">Destinations</h2>
            <p className="text-[#C38E2D] font-medium text-lg italic mt-2">Where do you want to go next?</p>
          </div>
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <button onClick={prevCard} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-[#C38E2D] hover:text-white transition-all"><FiArrowLeft /></button>
            <button onClick={nextCard} className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-black hover:bg-[#C38E2D] hover:text-white transition-all"><FiArrowRight /></button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto min-h-[450px]">
          <AnimatePresence mode="wait">
            {scrollingDestinations.map((destination, index) => {
              if (index !== activeCard && index !== (activeCard + 1) % scrollingDestinations.length) return null;
              return (
                <motion.div key={destination.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }} className="relative rounded-3xl overflow-hidden aspect-video shadow-lg border border-gray-100 group">
                  <Link href={destination.path}>
                    <img src={destination.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={destination.name} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">{destination.name}</h3>
                        <p className="text-white/80 text-sm font-semibold group-hover:text-[#C38E2D] transition-colors">Explore Package</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#C38E2D] text-white flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-lg">
                        <FiArrowUpRight />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* 5. TOURS SECTION */}
      <section className="py-24 bg-gray-50 overflow-hidden relative group/section">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-[#004381] text-5xl font-extrabold mb-4">Explore Our <span className="text-[#1D70B7]">Best Tours</span></h2>
        </div>
        
        <div id="tour-slider" className="flex w-fit animate-infinite-scroll gap-8 px-8 pb-12 hover:[animation-play-state:paused] no-scrollbar scroll-smooth">
          {[...tours, ...tours, ...tours].map((tour, index) => (
            <div key={index} className="w-[320px] md:w-[420px] bg-white rounded-[40px] overflow-hidden shadow-lg border border-gray-100 flex-shrink-0 group transition-all duration-500 hover:-translate-y-2">
              <Link href={tour.path}>
                <div className="relative h-72 overflow-hidden">
                  <img src={tour.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={tour.title} />
                  <div className="absolute top-6 left-6 bg-[#004381] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase">{tour.code}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor"/>)}</div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase italic">Top Rated</span>
                  </div>
                  <h3 className="text-[#004381] text-2xl font-black mb-6 group-hover:text-[#C38E2D] transition-colors">{tour.title}</h3>
                  <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                    <div className="flex items-center gap-2 text-gray-500 font-bold text-sm"><Clock size={16} className="text-[#C38E2D]" />{tour.duration}</div>
                    <span className="text-[#C38E2D] font-black text-xs uppercase group-hover:underline">View Itinerary →</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 6. SERVICES - Added id="services-section" */}
      <section id="services-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full h-[500px]">
            <div className="absolute top-0 left-0 w-4/5 h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-20"><img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800" className="w-full h-full object-cover" /></div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-0 right-0 w-3/5 h-[300px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white z-30"><img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=600" className="w-full h-full object-cover" /></motion.div>
          </div>
          <div>
            <h2 className="text-[#004381] text-5xl font-bold mb-6">Our <span className="text-[#C38E2D] italic">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {services.map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                  <div className="w-10 h-10 text-[#C38E2D] mb-4">{s.icon}</div>
                  <h4 className="text-[#004381] font-bold mb-1">{s.title}</h4>
                  <p className="text-gray-500 text-xs">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0"><img src="https://images.unsplash.com/photo-1502784444187-359ac186c5bb?q=80&w=2000" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-[#004381]/40 backdrop-blur-[2px]"></div></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="max-w-4xl bg-white/95 backdrop-blur-md rounded-[40px] p-8 md:p-16 shadow-2xl mx-auto">
            <h2 className="text-[#004381] text-4xl md:text-5xl font-bold text-center mb-12">Why <span className="text-[#C38E2D] italic">Choose Us</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reasons.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all group">
                  <div className={`w-12 h-12 shrink-0 ${item.color} rounded-xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-all`}>{item.icon}</div>
                  <div><h4 className="text-[#004381] font-bold text-lg">{item.title}</h4><p className="text-gray-500 text-sm">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. REVIEW & TESTIMONIALS SECTION */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#004381]/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C38E2D]/5 rounded-full blur-[100px] -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black text-[#004381] uppercase tracking-tighter"
            >
              Review & <span className="text-slate-900">Testimonials</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-[#C38E2D] italic font-serif"
            >
              Top Reviews for Dream India
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative mb-8 w-full group hover:shadow-xl transition-all duration-500">
                  <Quote className="absolute top-8 right-8 text-[#004381]/10 group-hover:text-[#004381]/20 transition-colors" size={60} />
                  <h3 className="text-xl md:text-2xl font-black text-[#004381] mb-4 uppercase tracking-tight">{item.title}</h3>
                  <div className="flex gap-1 mb-6">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#C38E2D" className="text-[#C38E2D]" />
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium italic mb-6">"{item.content}"</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">{item.date}</p>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-r border-b border-slate-100 rotate-45" />
                </div>
                <div className="text-center space-y-2">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#004381] to-[#C38E2D] rounded-full blur-md opacity-20" />
                    <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full border-4 border-white shadow-lg relative z-10 object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-[#C38E2D] uppercase tracking-tighter">{item.name}</h4>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GET IN TOUCH SECTION (Under Reviews) */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-6xl font-black text-[#1D70B7] tracking-tighter uppercase mb-2">
            Get In <span className="text-[#1D70B7]">Touch</span>
          </h2>
          <p className="text-[#C38E2D] text-2xl font-medium italic font-serif">
            our team will respond quickly to help you book your dream tour.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="max-w-6xl space-y-8"
        >
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Name <span className="text-red-500">*</span></label>
            <input 
              type="text" 
              name="name"
              required
              placeholder="Enter Your Name" 
              className="w-full border-2 border-[#C38E2D] rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#C38E2D]/20 transition-all text-gray-800 placeholder:text-gray-400"
              onChange={handleInputChange}
              value={formData.name}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Email <span className="text-red-500">*</span></label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="Enter Your Mail" 
              className="w-full border-2 border-[#C38E2D] rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#C38E2D]/20 transition-all text-gray-800 placeholder:text-gray-400"
              onChange={handleInputChange}
              value={formData.email}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Phone <span className="text-red-500">*</span></label>
            <input 
              type="tel" 
              name="phone"
              required
              placeholder="Enter Your Phone Number" 
              className="w-full border-2 border-[#C38E2D] rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#C38E2D]/20 transition-all text-gray-800 placeholder:text-gray-400"
              onChange={handleInputChange}
              value={formData.phone}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Your Message <span className="text-red-500">*</span></label>
            <textarea 
              name="message"
              required
              rows={5}
              placeholder="Enter Your Message" 
              className="w-full border-2 border-[#C38E2D] rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-[#C38E2D]/20 transition-all text-gray-800 placeholder:text-gray-400 resize-none"
              onChange={handleInputChange}
              value={formData.message}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-[#FA9B21] text-white font-bold px-12 py-4 rounded-lg shadow-lg hover:bg-[#e88a10] transition-all transform hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Background Decoration */}
      <div className="absolute right-[-5%] bottom-0 opacity-10 pointer-events-none select-none w-1/3">
        <img 
          src="https://www.transparentpng.com/download/monuments/S8VwzO-monuments-transparent-background.png" 
          alt="monuments" 
          className="grayscale" 
        />
      </div>
    </section>
    <Footer />
    </main>
  );
}