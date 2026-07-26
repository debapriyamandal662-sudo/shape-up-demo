import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { salonConfig } from "@/config/salonConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${salonConfig.name} | Premium Hair, Beauty, Skincare & Bridal Studio Kolkata`,
  description: `${salonConfig.name} at 43 BT Road, Kolkata 700050. Dunlop's luxury studio offering Hair cut & styling, Beard sculpting, O3+ Facials, Bengali HD Bridal Makeup & Gel Nail Artistry. Call +91 6292021352.`,
  keywords: [
    "Shape-Up Hair & Beauty Studio",
    "Salon Dunlop Kolkata",
    "Hair Studio BT Road",
    "Bengali Bridal Makeup Kolkata",
    "Beard Sculpting Dunlop",
    "Hydra Facial Kolkata",
    "Nail Artistry Dunlop 700050",
    "L'Oreal Salon Kolkata",
  ],
  openGraph: {
    title: `${salonConfig.name} - Luxury Hair & Beauty Studio Kolkata`,
    description: "Experience premium hair architecture, beard grooming, clinical skincare, HD bridal makeup & nail artistry on BT Road, Kolkata.",
    url: "https://shape-up.in",
    siteName: salonConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: `${salonConfig.name} Luxury Interior`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${salonConfig.name} - Luxury Hair & Beauty Studio Kolkata`,
    description: "Premium hair, beard, skincare, Bengali HD bridal makeup & gel nail artistry at 43 BT Road, Dunlop Crossing, Kolkata.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: salonConfig.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: salonConfig.address,
      addressLocality: salonConfig.locality,
      addressRegion: "West Bengal",
      postalCode: salonConfig.pincode,
      addressCountry: "IN",
    },
    telephone: salonConfig.phone,
    email: salonConfig.email,
    url: "https://shape-up.in",
    priceRange: "₹₹",
    openingHoursSpecification: salonConfig.businessHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.includes("Monday")
        ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        : ["Sunday"],
      opens: h.hours.split(" - ")[0],
      closes: h.hours.split(" - ")[1],
    })),
  };

  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0c0d10] text-[#fbf9f5] selection:bg-[#d4af37] selection:text-[#0c0d10]">
        {children}
      </body>
    </html>
  );
}
