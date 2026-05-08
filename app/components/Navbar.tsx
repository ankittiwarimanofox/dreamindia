"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 shadow-sm">
      {/* 1. TOP MINI HEADER - Hidden on mobile */}
      <div className="hidden sm:flex bg-gray-50 border-b border-gray-200 py-1.5 px-6 md:px-12 justify-between items-center text-[11px] font-medium text-gray-500 uppercase tracking-wider">
       <div className="flex items-center gap-2">
  <span className="text-gray-400">✉</span> 
  <a 
    href="mailto:INFO@DREAMINDIATRAVEL.COM" 
    className="hover:text-[#FFA524] transition-colors uppercase font-medium"
  >
    INFO@DREAMINDIATRAVEL.COM
  </a>
</div>
        <div className="flex gap-4">
          <Link href="/Contact" className="hover:text-[#C38E2D] transition">BOOK A TOUR</Link>
          <span className="text-gray-300">|</span>
          <Link href="/Contact" className="hover:text-[#C38E2D] transition">CONTACT US</Link>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <nav className="bg-white py-3 px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img 
            src="/logo.png" 
            alt="Dream India Logo" 
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#1D70B7]">
          <li><Link href="/" className="hover:text-[#C38E2D] transition">Home</Link></li>
          <li>
            <Link href="/about" className="hover:text-[#C38E2D] transition">
              About Us
            </Link>
          </li>
          <li><Link href="/services" className="hover:text-[#C38E2D] transition">Services</Link></li>
          <li><Link href="/blogs" className="hover:text-[#C38E2D] transition">Blogs</Link></li>
          <li><Link href="/pay-now" className="hover:text-[#C38E2D] transition">Pay Now</Link></li>
        
        </ul>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 sm:gap-6">
          {/* ENQUIRY BUTTON - Hidden on small mobile, show on sm and up */}
          <Link href="/Contact" className="hidden sm:block">
            <button className="bg-[#FFA524] hover:bg-[#C38E2D] text-white px-6 sm:px-8 py-2 sm:py-2.5 rounded-xl font-bold text-sm sm:text-lg shadow-sm transition-all">
              Enquiry
            </button>
          </Link>
          
          {/* Phone Number - Hidden on mobile, show on xl */}
          <div className="hidden xl:flex items-center gap-3">
            <div className="bg-[#1D70B7] p-2 rounded-lg text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a 
  href="https://wa.me/919530609262?text=Hello%20Dream%20India%20Travel,%20I'm%20interested%20in%20booking%20a%20tour%20package." 
  target="_blank" 
  rel="noopener noreferrer"
  className="text-xl font-bold text-gray-700 hover:text-[#25D366] transition-colors"
>
  9530609262
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1D70B7]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1D70B7]" />
            )}
          </button>
        </div>
      </nav>

      {/* 3. MOBILE MENU - Slides down on mobile */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col py-4 px-4 space-y-1 text-[#1D70B7] font-semibold">
            <li>
              <Link 
                href="/" 
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-50 hover:text-[#C38E2D] transition rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-50 hover:text-[#C38E2D] transition rounded-lg"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-50 hover:text-[#C38E2D] transition rounded-lg"
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/blogs" 
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-50 hover:text-[#C38E2D] transition rounded-lg"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link 
                href="/pay-now" 
                onClick={closeMenu}
                className="block px-4 py-3 hover:bg-gray-50 hover:text-[#C38E2D] transition rounded-lg"
              >
                Pay Now
              </Link>
            </li>
            
            
            {/* Mobile Enquiry Button */}
            <li className="sm:hidden pt-2 border-t border-gray-200">
              <Link href="/Contact" onClick={closeMenu}>
                <button className="w-full bg-[#FFA524] hover:bg-[#C38E2D] text-white px-4 py-3 rounded-xl font-bold text-lg shadow-sm transition-all">
                  Enquiry
                </button>
              </Link>
            </li>

            {/* Mobile Phone */}
            <li className="pt-2 border-t border-gray-200">
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="bg-[#1D70B7] p-2 rounded-lg text-white flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
               <a 
    href="https://wa.me/919530609262?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services." 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-xl font-bold text-[#25D366] flex items-center gap-2"
  >
    Chat on WhatsApp
  </a>
              </div>
            </li>

            {/* Mobile Contact Email */}
            <li className="sm:hidden px-4 py-3 text-xs text-gray-500">
              <a href="mailto:INFO@DREAMINDIATRAVEL.COM" className="hover:text-[#C38E2D] transition">
                ✉ INFO@DREAMINDIATRAVEL.COM
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}