"use client";
import React, { useState, ChangeEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from "@/app/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        alert("Thank you for reaching out! Our team will respond shortly.");
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#FFA524] selection:text-white">
      <Navbar />

      {/* --- 1. HERO SECTION --- */}
      <section className="relative h-[50vh] flex items-center bg-[#004381] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[30%]"
          alt="Contact Us"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#004381] to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-10">
          <h1 className="text-6xl font-black text-white mb-4 uppercase tracking-tighter">
            Contact <span className="text-[#FFA524]">Us</span>
          </h1>
          <nav className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-white/60 uppercase">
            <span className="hover:text-[#FFA524] cursor-pointer transition-colors">Home</span>
            <span className="text-white/20">/</span>
            <span className="text-white">Contact</span>
          </nav>
        </div>
      </section>

      {/* --- 2. INFO CARDS (Centered & Aligned) --- */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 -mt-16 relative z-30">
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { 
              icon: "📞", 
              label: "Enquiry Line", 
              info: <a href="tel:+919530609262" className="hover:text-[#FFA524] transition-colors">9530609262</a>, 
              color: "border-[#FFA524]" 
            },
            { 
              icon: "✉️", 
              label: "Official Email", 
              info: <a href="mailto:info@dreamindiatravel.com" className="hover:text-[#00AEEF] transition-colors">info@dreamindiatravel.com</a>, 
              color: "border-[#00AEEF]" 
            },
          ].map((card, i) => (
            <div key={i} className={`bg-white shadow-2xl p-8 rounded-[2rem] flex items-center space-x-6 border-b-8 ${card.color} hover:-translate-y-2 transition-all duration-300 w-full md:w-[45%] lg:w-[40%]`}>
              <div className="text-4xl bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl">{card.icon}</div>
              <div>
                <h3 className="font-black text-slate-400 text-[10px] uppercase tracking-[0.2em] mb-1">{card.label}</h3>
                <p className="text-slate-900 font-black text-lg tracking-tight">{card.info}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. FORM SECTION --- */}
      <section className="py-32 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl font-black text-[#004381] uppercase tracking-tighter leading-none mb-4">
              Get In <span className="text-[#FFA524]">Touch</span>
            </h2>
            <p className="text-slate-500 font-medium italic border-l-4 border-[#FFA524] pl-6">
              Our experts are ready to craft your personalized Himalayan itinerary.
            </p>
          </div>
          
          {/* Form now uses the Sleekhost API endpoint */}
          <form 
            onSubmit={handleSubmit}
            className="space-y-10"
          >
            <div className="border-b-2 border-slate-100 focus-within:border-[#FFA524] transition-colors pb-2">
              <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent text-xl font-bold outline-none" 
                placeholder="Your Name" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="border-b-2 border-slate-100 focus-within:border-[#00AEEF] transition-colors pb-2">
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-xl font-bold outline-none" 
                  placeholder="mail@example.com" 
                />
              </div>
              <div className="border-b-2 border-slate-100 focus-within:border-[#FFA524] transition-colors pb-2">
                <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-transparent text-xl font-bold outline-none" 
                  placeholder="+91 00000 00000" 
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="block text-[9px] font-black text-slate-400 uppercase tracking-widest">Message Details</label>
              <textarea 
                name="message" 
                required 
                rows={5} 
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-slate-50 p-6 rounded-[1.5rem] outline-none focus:ring-2 focus:ring-[#FFA524] transition-all resize-none font-bold" 
                placeholder="Tell us about your dream destination..." 
              />
            </div>

            <button type="submit" className="bg-[#FFA524] text-white px-12 py-5 rounded-2xl font-black text-xs tracking-[0.3em] uppercase hover:bg-[#004381] transition-all shadow-xl shadow-[#FFA524]/20 active:scale-95">
              Send Message
            </button>
          </form>
        </div>

        <div className="hidden lg:block">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FFA524] rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500" />
            <img 
              src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966" 
              className="relative rounded-[3rem] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 h-[650px] w-full object-cover"
              alt="Travel Planning"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;