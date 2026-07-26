export interface ServiceItem {
  id: string;
  name: string;
  category: 'hair' | 'beard' | 'skincare' | 'bridal' | 'nails';
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
  image?: string;
}

export interface SalonConfig {
  name: string;
  tagline: string;
  address: string;
  locality: string;
  city: string;
  pincode: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  mapEmbedUrl: string;
  businessHours: {
    days: string;
    hours: string;
  }[];
  brandPartners: {
    name: string;
    tagline: string;
    logoText: string;
  }[];
  integrations: {
    googlePlaceId: string; // Leave empty to test graceful fallback
    instagramHandle: string; // Set empty to toggle off
    youtubeChannelId: string; // Set empty to toggle off
    enableGoogleReviewsWidget: boolean;
    enableInstagramFeed: boolean;
    enableYouTubeFeed: boolean;
  };
  services: ServiceItem[];
}

export const salonConfig: SalonConfig = {
  name: "Shape-Up Hair & Beauty Studio",
  tagline: "Kolkata's Premier Full-Service Hair, Beauty & Bridal Destination",
  address: "43, Barrackpore Trunk Road",
  locality: "Dunlop / Sinthee Crossing",
  city: "Kolkata",
  pincode: "700050",
  phone: "+91 6292021352",
  whatsappNumber: "916292021352",
  email: "swapna@shape-up.in",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5283921829145!2d88.3742!3d22.6341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c2522736bb%3A0x2a1975e52c8038ab!2s43%2C%20Barrackpore%20Trunk%20Rd%2C%20Kolkata%2C%20West%20Bengal%20700050!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  businessHours: [
    { days: "Monday - Saturday", hours: "10:00 AM - 8:30 PM" },
    { days: "Sunday", hours: "10:00 AM - 9:00 PM" },
  ],

  // ONLY verified brands from client's existing site: L'Oréal, Wella Professionals, Rica, Blossom Kochhar Aroma Magic
  brandPartners: [
    { name: "L'Oréal", tagline: "Professional Paris Haircare", logoText: "L'ORÉAL" },
    { name: "Wella Professionals", tagline: "German Precision Hair Color", logoText: "WELLA" },
    { name: "Rica", tagline: "Italian Luxury Waxing & Skin Spa", logoText: "RICA" },
    { name: "Blossom Kochhar Aroma Magic", tagline: "Aromatherapy Skincare", logoText: "AROMA MAGIC" },
  ],

  integrations: {
    googlePlaceId: "", // Empty to demonstrate graceful fallback
    instagramHandle: "shapeupsalon_kolkata",
    youtubeChannelId: "",
    enableGoogleReviewsWidget: true,
    enableInstagramFeed: true,
    enableYouTubeFeed: false,
  },

  services: [
    // HAIR SERVICES
    {
      id: "hair-cut-style",
      category: "hair",
      name: "Signature Cut & Styling",
      description: "Personalized hair architecture with deep wash, scalp massage, and blow-dry finish.",
      price: "₹499",
      duration: "45 mins",
      popular: true,
    },
    {
      id: "hair-color-global",
      category: "hair",
      name: "L'Oréal Global Color & Gloss",
      description: "Ammonia-free vibrant color transformation using authentic L'Oréal Professionnel shades.",
      price: "₹2,499",
      duration: "120 mins",
      popular: true,
    },
    {
      id: "keratin-treatment",
      category: "hair",
      name: "Kera-Smooth Protein Therapy",
      description: "Frizz-eliminating structural keratin rebuilding for silky, high-shine manageable hair.",
      price: "₹3,999",
      duration: "150 mins",
    },
    {
      id: "scalp-spa",
      category: "hair",
      name: "Aroma Scalp Detox Spa",
      description: "Deep steam nourishment with essential oils to arrest hair fall and stimulate roots.",
      price: "₹899",
      duration: "60 mins",
    },

    // BEARD & GROOMING
    {
      id: "beard-shape-style",
      category: "beard",
      name: "Precision Beard Sculpting",
      description: "Razor-sharp contouring tailored to your face structure with beard oil massage.",
      price: "₹299",
      duration: "30 mins",
      popular: true,
    },
    {
      id: "royal-hot-towel",
      category: "beard",
      name: "Royal Hot Towel Shave",
      description: "Traditional hot steam towel softened shave followed by cooling aftershave balm.",
      price: "₹450",
      duration: "40 mins",
    },
    {
      id: "beard-spa-color",
      category: "beard",
      name: "Beard Color & Nourish Spa",
      description: "Natural gray coverage coupled with deep hydrating beard butter treatment.",
      price: "₹650",
      duration: "45 mins",
    },

    // SKINCARE & FACIALS
    {
      id: "o3-radiance-facial",
      category: "skincare",
      name: "O3+ Professional Brightening Facial",
      description: "Dermatologically recommended instant glow treatment targeting pigmentation & tan.",
      price: "₹1,899",
      duration: "75 mins",
      popular: true,
    },
    {
      id: "hydra-glow-facial",
      category: "skincare",
      name: "Hydra-Infusion Moisture Facial",
      description: "Multi-step hyaluronic acid deep pore cleansing and oxygen skin rejuvenation.",
      price: "₹2,499",
      duration: "90 mins",
      popular: true,
    },
    {
      id: "charcoal-detox",
      category: "skincare",
      name: "Aroma Magic Detox & Anti-Acne Spa",
      description: "Pure aromatherapy botanical formulation to clarify pores and balance oil skin.",
      price: "₹1,299",
      duration: "60 mins",
    },
    {
      id: "rica-body-polish",
      category: "skincare",
      name: "Rica Italian Skin Exfoliation",
      description: "Full body velvet smoothing peel enriched with avocado butter for silky texture.",
      price: "₹2,199",
      duration: "80 mins",
    },

    // BRIDAL & PARTY MAKEUP
    {
      id: "bengali-bridal-hd",
      category: "bridal",
      name: "Royal Bengali HD Bridal Package",
      description: "High-definition sweatproof bridal makeup, saree draping, hair design & jewelry setting.",
      price: "₹12,500",
      duration: "240 mins",
      popular: true,
    },
    {
      id: "airbrush-bridal",
      category: "bridal",
      name: "Luxury Airbrush Bridal Makeup",
      description: "Weightless 24-hour ultra-flawless airbrush finish customized for high-res photography.",
      price: "₹16,999",
      duration: "270 mins",
      popular: true,
    },
    {
      id: "party-glam-makeup",
      category: "bridal",
      name: "Cocktail & Reception Glam",
      description: "Elegant party makeup look with soft smoky eye, sculpted contouring, and lash installation.",
      price: "₹3,499",
      duration: "90 mins",
    },

    // NAIL ARTISTRY
    {
      id: "gel-nail-extensions",
      category: "nails",
      name: "Luxury Gel Extensions & Nail Art",
      description: "Sculpted builder gel extensions with custom chrome, ombre, or glitter embellishments.",
      price: "₹1,799",
      duration: "90 mins",
      popular: true,
    },
    {
      id: "french-manicure-spa",
      category: "nails",
      name: "Signature Spa Manicure",
      description: "Exfoliating hand soak, cuticle care, relaxing hand massage, and long-wear gel polish.",
      price: "₹799",
      duration: "45 mins",
    },
    {
      id: "deluxe-spa-pedicure",
      category: "nails",
      name: "Restorative Spa Pedicure",
      description: "Deep heel callus smoothing, aromatic foot scrub, steam massage, and nail shaping.",
      price: "₹999",
      duration: "60 mins",
      popular: true,
    },
  ],
};
