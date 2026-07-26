"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Sparkles } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services & Rates", href: "#services" },
    { name: "Lookbook Gallery", href: "#gallery" },
    { name: "Why Shape-Up", href: "#why-us" },
    { name: "Client Stories", href: "#testimonials" },
    { name: "Visit Us", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-header shadow-2xl py-3" : "bg-gradient-to-b from-[#0c0d10]/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full border border-[#d4af37]/40 flex items-center justify-center bg-[#14161d] group-hover:border-[#d4af37] transition-all">
              <Sparkles className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#f3e5ab] transition-colors">
                SHAPE-UP
              </span>
              <span className="block text-[10px] tracking-[0.2em] text-[#c5a880] uppercase font-sans">
                Hair & Beauty Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-sans text-neutral-300 hover:text-[#d4af37] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${salonConfig.phone}`}
              className="inline-flex items-center space-x-2 text-xs tracking-wider uppercase font-semibold text-neutral-300 hover:text-white px-3 py-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{salonConfig.phone}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:brightness-110 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#d4af37]/20 flex items-center space-x-2"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-[#0c0d10]" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-[#d4af37] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-dark border-t border-[#d4af37]/20 px-4 pt-4 pb-6 mt-3 space-y-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-wider font-sans text-neutral-200 hover:text-[#d4af37] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col space-y-3">
            <a
              href={`tel:${salonConfig.phone}`}
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-[#d4af37]/40 text-xs font-semibold text-[#f3e5ab]"
            >
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <span>Call {salonConfig.phone}</span>
            </a>
            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg gold-gradient-bg text-[#0c0d10] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#d4af37]/20"
            >
              <MessageSquare className="w-4 h-4 fill-[#0c0d10]" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
