import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPricing from "@/components/ServicesPricing";
import Gallery from "@/components/Gallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import SocialIntegrations from "@/components/SocialIntegrations";
import ContactLocation from "@/components/ContactLocation";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0d10] text-[#fbf9f5] relative selection:bg-[#d4af37] selection:text-[#0c0d10]">
      {/* Fixed Luxury Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services & Pricing Menu (Balanced Equal-Weight Hair, Beard, Skincare, Makeup, Nails) */}
      <ServicesPricing />

      {/* Lookbook Gallery */}
      <Gallery />

      {/* Why Choose Us & Verified Brand Partners */}
      <WhyChooseUs />

      {/* Written Client Testimonials */}
      <Testimonials />

      {/* Social Integrations (Google Reviews Widget, Instagram, YouTube) */}
      <SocialIntegrations />

      {/* Location & Embedded Map */}
      <ContactLocation />

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile impulse CTA Bar */}
      <StickyMobileCTA />
    </main>
  );
}
