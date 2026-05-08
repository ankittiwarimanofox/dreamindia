"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, AlertCircle, CreditCard, FileText, 
  MapPin, Scale, HeartPulse, Clock, Trash2 
} from 'lucide-react';
import Navbar from '../components/Navbar'; // Adjust path as needed

import Footer from "@/app/components/Footer";

const PolicySection = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow mb-8"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-[#004381]">
        <Icon size={24} />
      </div>
      <h2 className="text-2xl font-black text-[#004381] uppercase tracking-tight">{title}</h2>
    </div>
    <div className="space-y-4 text-slate-600 leading-relaxed">
      {children}
    </div>
  </motion.div>
);

export default function TermsAndPolicies() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-20 bg-[#004381] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C38E2D]/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C38E2D] font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            Dream India Travel
          </motion.p>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Policies & <span className="text-[#C38E2D]">Terms</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl font-light italic">
            "Your trusted partner in planning memorable journeys across India. Please read our terms carefully to ensure a hassle-free experience."
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Cancellation Policy */}
          <PolicySection title="Cancellation Policy" icon={Trash2}>
            <p>Cancellations must be communicated in writing. Dream India Travel reserves the right to apply charges based on the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requests must be made within 72 hours of placing an order.</li>
              <li>No cancellations allowed for **Same Day bookings**.</li>
              <li>Special occasions (Diwali, Christmas, New Year, etc.) are non-cancellable.</li>
              <li>We act as a booking agent and are not liable for third-party service standards.</li>
            </ul>
          </PolicySection>

          {/* Reservation & Payments */}
          <PolicySection title="Reservation & Refunds" icon={CreditCard}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#C38E2D]">
                <p className="font-bold text-[#004381]">50% Deposit</p>
                <p className="text-sm">Required at time of reservation.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border-l-4 border-[#C38E2D]">
                <p className="font-bold text-[#004381]">Full Payment</p>
                <p className="text-sm">Due at the time of check-in.</p>
              </div>
            </div>
            <h4 className="font-bold text-[#004381] mb-2">Refund Timeline:</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-slate-100">
                    <th className="py-2">Days Before Travel</th>
                    <th className="py-2 text-right">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="text-slate-500">
                  <tr className="border-b border-slate-50"><td>60+ Days</td><td className="text-right">80%</td></tr>
                  <tr className="border-b border-slate-50"><td>59 – 40 Days</td><td className="text-right">50%</td></tr>
                  <tr className="border-b border-slate-50"><td>39 – 25 Days</td><td className="text-right">25%</td></tr>
                  <tr className="border-b border-slate-50"><td>24 – 15 Days</td><td className="text-right">15%</td></tr>
                  <tr><td>Less than 15 Days</td><td className="text-right font-bold text-red-500">No Refund</td></tr>
                </tbody>
              </table>
            </div>
          </PolicySection>

          {/* General Terms */}
          <PolicySection title="General Terms" icon={FileText}>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <ShieldCheck className="text-[#C38E2D] shrink-0" size={20} />
                <p>Content is for general information and may change without notice.</p>
              </li>
              <li className="flex gap-3">
                <AlertCircle className="text-[#C38E2D] shrink-0" size={20} />
                <p>Use of any information on this website is strictly at your own risk.</p>
              </li>
              <li className="flex gap-3">
                <Scale className="text-[#C38E2D] shrink-0" size={20} />
                <p>All disputes are subject to the **Jurisdiction of Shimla, Himachal Pradesh**.</p>
              </li>
            </ul>
          </PolicySection>

          {/* Safety & Health */}
          <PolicySection title="Safety & Health" icon={HeartPulse}>
            <p>Guests are solely responsible for their belongings and health conditions.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We strongly recommend adequate travel insurance.</li>
              <li>Guests must inform us of any medical conditions prior to activities.</li>
              <li>We reserve the right to deny participation for safety reasons with no refund.</li>
            </ul>
          </PolicySection>

          {/* Contact Details */}
          <div className="bg-[#C38E2D] p-10 rounded-[40px] text-white flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-3xl font-black uppercase mb-2">Need Help?</h3>
              <p className="opacity-90 italic">Our team is available to clarify any policy details.</p>
            </div>
            <div className="space-y-2 text-right md:text-right text-center">
              <p className="flex items-center gap-2 justify-center md:justify-end font-bold"><MapPin size={18}/> Shimla, Himachal Pradesh – 171001</p>
              <p className="font-bold">+91-836-060-9668</p>
              <p className="font-bold underline">info@dreamindiatravel.com</p>
            </div>
          </div>

        </div>
      </section>
<Footer />
      
    </main>
  );
}