"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  Percent, 
  ArrowRight,
  ShieldCheck,
  Camera,   // Replacement for Instagram
  Share2,   // Replacement for Facebook
  PlayCircle // Replacement for Youtube
} from 'lucide-react';

const EnhancedFooter = () => {
  return (
    <footer className="relative bg-[#020617] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#1D70B7]/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 relative z-10">
        
        {/* Column 1: Brand & CTA */}
        <div className="flex flex-col space-y-8">
          <div>
            <h2 className="text-4xl font-black tracking-tighter leading-none mb-2">
              DREAM <span className="text-[#FA9B21]">INDIA</span>
            </h2>
            <p className="text-gray-400 text-sm font-medium italic">Your Trusted Travel Partner</p>
          </div>
          
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg font-bold mb-4 text-white">Planning a Trip?</h3>
            <Link href="/Contact">
              <button className="w-full bg-[#FA9B21] hover:bg-[#e88a10] text-white font-black py-4 rounded-2xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 group">
                BOOK TOUR <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

        {/* Column 2: Exploration Links */}
        <div>
          <h3 className="text-[#1D70B7] text-xs font-black uppercase tracking-[0.3em] mb-8">
            Explore
          </h3>
          <ul className="space-y-4 text-gray-300 font-semibold">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/Contact' },
              { name: 'Pay Now', path: '/pay-now' },
              { name: 'Tours & Packages', path: '/tours-package' },
              { name: 'Contact Us', path: '/Contact' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path} 
                  className="hover:text-[#FA9B21] hover:translate-x-2 transition-all flex items-center gap-2 group"
                >
                  <span className="w-0 h-[2px] bg-[#FA9B21] group-hover:w-4 transition-all" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Direct Contact */}
        <div>
          <h3 className="text-[#1D70B7] text-xs font-black uppercase tracking-[0.3em] mb-8">
            Get In Touch
          </h3>
          <div className="space-y-6">
            <div className="flex gap-4 group">
              <div className="w-10 h-10 bg-[#1D70B7]/20 rounded-xl flex items-center justify-center text-[#1D70B7] group-hover:bg-[#1D70B7] group-hover:text-white transition-all flex-shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Call Us</p>
                <a href="tel:+919530609262" className="text-white font-bold text-lg hover:text-[#FA9B21] transition-colors">
                  9530609262
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-10 h-10 bg-[#1D70B7]/20 rounded-xl flex items-center justify-center text-[#1D70B7] group-hover:bg-[#1D70B7] group-hover:text-white transition-all flex-shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Email</p>
                <a href="mailto:info@dreamindiatravel.com" className="text-white font-bold hover:text-[#FA9B21] transition-colors">
                  info@dreamindiatravel.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-10 h-10 bg-[#1D70B7]/20 rounded-xl flex items-center justify-center text-[#1D70B7] group-hover:bg-[#1D70B7] group-hover:text-white transition-all flex-shrink-0">
                <Percent size={18} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Tax Compliance</p>
                <p className="text-white font-bold tracking-widest text-sm">03DIQPB9937QIZF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 4: Payment & Trust */}
        <div>
          <h3 className="text-[#1D70B7] text-xs font-black uppercase tracking-[0.3em] mb-8">
            Secure Trust
          </h3>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
            <div className="flex items-center gap-2 text-[#FA9B21] mb-4">
              <ShieldCheck size={20} />
              <span className="font-black text-[10px] uppercase tracking-wider">100% Secure Payments</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed mb-6">
              Encrypted transactions via UPI, Net Banking, and Major Cards.
            </p>
            <div className="flex flex-wrap gap-4 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/UPI-Logo.png" alt="UPI" className="h-4 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Amazon_Pay_logo.svg/3840px-Amazon_Pay_logo.svg.png" alt="Amazon Pay" className="h-4 invert" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/5 pt-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          
          {/* Using guaranteed safe icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/dreamindiatourtravel.2226/" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FA9B21] hover:text-white transition-all">
              <Camera size={20} />
            </a>
            <a href="https://www.facebook.com/dreamindiatourtravel" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1D70B7] hover:text-white transition-all">
              <Share2 size={20} />
            </a>
            <a href="https://www.youtube.com/@DreamIndiaTourTravel" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all">
              <PlayCircle size={20} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest font-bold mb-1">
              Shimla, Himachal Pradesh Jurisdiction
            </p>
            <p className="text-xs text-gray-500">
              Copyright © 2026 <span className="text-white">Dream India Tour and Travel</span>
            </p>
          </div>

          <div className="flex gap-8 text-[11px] font-bold uppercase tracking-wider text-gray-500">
            <Link href="/privacypolicy" className="hover:text-[#FA9B21] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#FA9B21] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;