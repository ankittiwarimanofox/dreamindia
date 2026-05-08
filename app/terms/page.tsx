"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Scale, FileText, CreditCard, XCircle, MapPin, Phone, Mail } from 'lucide-react';
import Navbar from "@/app/components/Navbar";

import Footer from "@/app/components/Footer";
const sections = [
  {
    title: "1. General Terms of Use",
    icon: <FileText className="text-[#C38E2D]" size={24} />,
    content: [
      "By accessing this website, you agree to comply with these Terms & Conditions and our Privacy Policy.",
      "Website content is for general information only and may change without notice.",
      "We do not provide a warranty for the accuracy, completeness, or reliability of the information provided.",
      "Use of any materials on this website is entirely at your own risk.",
      "Unauthorized use of this website may lead to claims for damages or be a criminal offense."
    ]
  },
  {
    title: "2. Booking and Payments",
    icon: <CreditCard className="text-[#C38E2D]" size={24} />,
    content: [
      "Advance Payment: A minimum of 25% of the total package cost is required to confirm a booking.",
      "Full Payment: Must be completed at least 15 days before the travel or check-in date.",
      "Last-Minute Bookings: Requires 100% payment at the time of booking.",
      "Payment Methods: Bank transfer, UPI, or authorized gateways are accepted; no cheques are allowed.",
      "Confirmation: Bookings are processed only after payment confirmation. Late payments may result in automatic cancellation without a refund."
    ]
  },
  {
    title: "3. Cancellation & Refund Policy",
    icon: <XCircle className="text-[#C38E2D]" size={24} />,
    isTable: true,
    tableData: [
      { timeline: "60+ Days", refund: "80% Refund" },
      { timeline: "59–40 Days", refund: "50% Refund" },
      { timeline: "39–25 Days", refund: "25% Refund" },
      { timeline: "24–15 Days", refund: "15% Refund" },
      { timeline: "Less than 15 Days", refund: "No Refund" }
    ],
    note: "No refunds are issued for cancellations due to natural disasters (floods, landslides, heavy snow) or mechanical failures. No cancellations for special occasion offers."
  },
  {
    title: "4. Safety and Liability",
    icon: <ShieldCheck className="text-[#C38E2D]" size={24} />,
    content: [
      "Participation in adventure activities (rafting, paragliding, etc.) is at the traveler's own risk.",
      "Travel insurance is strongly recommended to cover accidents or loss of property.",
      "We are not responsible for the loss, theft, or damage of personal luggage.",
      "Guests must inform us of any health issues; we reserve the right to refuse participation if necessary."
    ]
  },
  {
    title: "5. Jurisdiction",
    icon: <Scale className="text-[#C38E2D]" size={24} />,
    content: [
      "All disputes related to services offered by Dream India Travel are subject to the exclusive jurisdiction of Shimla, Himachal Pradesh, India."
    ]
  }
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Header Section */}
      <section className="bg-[#004381] pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#C38E2D]/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
            Terms & <span className="text-[#C38E2D]">Conditions</span>
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg italic">
            Ensuring transparency and safety for every journey with Dream India Travel.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-50 rounded-2xl">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#004381]">{section.title}</h2>
              </div>

              {section.isTable ? (
                <div className="space-y-6">
                  <div className="overflow-hidden rounded-2xl border border-slate-100">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[#004381] font-bold">
                        <tr>
                          <th className="px-6 py-4">Timeline Before Travel</th>
                          <th className="px-6 py-4">Refund Percentage</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {section.tableData?.map((row, i) => (
                          <tr key={i} className="text-slate-600 hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium">{row.timeline}</td>
                            <td className="px-6 py-4 text-[#C38E2D] font-bold">{row.refund}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-slate-400 italic bg-amber-50 p-4 rounded-xl border-l-4 border-[#C38E2D]">
                    <strong>Note:</strong> {section.note}
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {section.content?.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C38E2D] mt-2.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}

          {/* Contact Footer Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#004381] text-white rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="https://www.transparentpng.com/download/monuments/S8VwzO-monuments-transparent-background.png" alt="monuments" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-8">Need Clarification?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center gap-2">
                  <MapPin className="text-[#C38E2D]" />
                  <p className="text-sm opacity-80">Shimla, Himachal Pradesh</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Phone className="text-[#C38E2D]" />
                  <p className="text-sm opacity-80">+91-8336-060-9668</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Mail className="text-[#C38E2D]" />
                  <p className="text-sm opacity-80">info@dreamindiatravel.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}