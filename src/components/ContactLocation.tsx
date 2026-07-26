"use client";

import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function ContactLocation() {
  return (
    <section id="contact" className="py-24 bg-[#0c0d10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Visit Our Studio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Location &amp; Operating Hours
          </h2>
          <p className="text-neutral-400 font-sans font-light text-base sm:text-lg">
            Located conveniently on Barrackpore Trunk Road near Dunlop Crossing. Drop in or reserve your slot in advance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-dark gold-border rounded-3xl p-8 space-y-6 gold-border-hover transition-all">
              <h3 className="font-serif text-2xl font-bold text-white border-b border-white/10 pb-4">
                Studio Information
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans font-semibold block">
                    Address
                  </span>
                  <p className="font-sans text-neutral-200 font-medium mt-0.5">
                    {salonConfig.address}
                  </p>
                  <p className="text-xs text-neutral-400 font-sans mt-0.5">
                    {salonConfig.locality}, {salonConfig.city} – {salonConfig.pincode}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans font-semibold block">
                    Appointments &amp; Direct Call
                  </span>
                  <a
                    href={`tel:${salonConfig.phone}`}
                    className="font-sans text-lg font-bold text-[#f3e5ab] hover:text-[#d4af37] transition-colors mt-0.5 block"
                  >
                    {salonConfig.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center shrink-0 border border-[#d4af37]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 font-sans font-semibold block">
                    Email Enquiries
                  </span>
                  <a
                    href={`mailto:${salonConfig.email}`}
                    className="font-sans text-sm text-neutral-300 hover:text-white transition-colors mt-0.5 block"
                  >
                    {salonConfig.email}
                  </a>
                </div>
              </div>

              {/* Business Hours Table */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-[#c5a880] font-sans font-semibold mb-3">
                  <Clock className="w-4 h-4 text-[#d4af37]" />
                  <span>Studio Hours</span>
                </div>
                <div className="space-y-2">
                  {salonConfig.businessHours.map((schedule, i) => (
                    <div key={i} className="flex justify-between text-xs font-sans text-neutral-300">
                      <span>{schedule.days}</span>
                      <span className="font-semibold text-[#f3e5ab]">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Contact CTAs */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={`tel:${salonConfig.phone}`}
                className="glass-dark gold-border py-3.5 px-4 rounded-2xl font-sans text-xs uppercase tracking-wider font-bold text-center text-white hover:bg-white/10 transition-all flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Now</span>
              </a>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-[#0c0d10] py-3.5 px-4 rounded-2xl font-sans text-xs uppercase tracking-wider font-bold text-center hover:brightness-110 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#d4af37]/20"
              >
                <MessageSquare className="w-4 h-4 fill-[#0c0d10]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Real Google Map (7 cols) */}
          <div className="lg:col-span-7 glass-dark gold-border rounded-3xl p-3 min-h-[420px] flex flex-col relative overflow-hidden">
            <div className="relative w-full h-full min-h-[400px] rounded-2xl overflow-hidden">
              <iframe
                title="Shape-Up Hair & Beauty Studio Google Map"
                src={salonConfig.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[400px] rounded-2xl filter contrast-105"
              />
              <div className="absolute bottom-4 left-4 glass-dark border border-white/10 px-4 py-2 rounded-xl text-xs font-sans text-neutral-200 flex items-center space-x-2 shadow-xl backdrop-blur-md">
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>43 BT Road, Dunlop Crossing, Kolkata 700050</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
