"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  // Professional pre-typed message for Dream India Travel leads
  const phoneNumber = "919530609262";
  const message = encodeURIComponent("Hello! I'm interested in booking a tour with Dream India Travel.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        Chat with us!
      </span>
      <MessageCircle size={32} fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;