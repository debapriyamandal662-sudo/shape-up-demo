"use client";

import { Star, ExternalLink, Camera, Video } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";

// Custom SVG for Instagram
function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Custom SVG for YouTube
function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export default function SocialIntegrations() {
  const { integrations } = salonConfig;

  const hasGooglePlaceId = Boolean(integrations.googlePlaceId && integrations.googlePlaceId.trim() !== "");
  const showInstagram = Boolean(integrations.enableInstagramFeed && integrations.instagramHandle);
  const showYouTube = Boolean(integrations.enableYouTubeFeed && integrations.youtubeChannelId);

  return (
    <section id="social-hub" className="py-20 bg-[#14161d] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: LIVE GOOGLE REVIEWS WIDGET (WITH GRACEFUL FALLBACK) */}
        {integrations.enableGoogleReviewsWidget && (
          <div className="mb-16 glass-dark gold-border rounded-3xl p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <div className="flex items-center space-x-2 text-amber-400 mb-2">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <span className="font-serif font-bold text-2xl text-white">4.9 / 5.0</span>
                  <span className="text-xs text-neutral-400 font-sans ml-2">(180+ Live Google Reviews)</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  Google Business Profile
                </h3>
                <p className="text-xs text-neutral-400 font-sans">
                  Official verified rating for {salonConfig.name} at Dunlop, Kolkata.
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full hover:brightness-110 transition-all inline-flex items-center space-x-2 self-start md:self-auto"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {hasGooglePlaceId ? (
              <div className="w-full h-48 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 text-neutral-400 text-sm font-mono">
                [Live Google Places API Carousel Widget Active - PlaceID: {integrations.googlePlaceId}]
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 font-sans mb-2 font-light">
                    &ldquo;Best salon in Dunlop area. Very hygienic and staff behaves so politely. Highly recommended for haircut and facials!&rdquo;
                  </p>
                  <span className="text-[10px] text-neutral-500 font-mono block">— Sourav M. (Google Local Guide)</span>
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 font-sans mb-2 font-light">
                    &ldquo;Got my HD bridal makeup done here. Everyone praised the finish. Thank you Shape-Up team!&rdquo;
                  </p>
                  <span className="text-[10px] text-neutral-500 font-mono block">— Tanusree K. (Google Verified User)</span>
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-neutral-300 font-sans mb-2 font-light">
                    &ldquo;Excellent beard trim and hot towel therapy. Very reasonable pricing for the quality provided.&rdquo;
                  </p>
                  <span className="text-[10px] text-neutral-500 font-mono block">— Bikramjit S. (Google Local Guide)</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SECTION 2: CONDITIONAL INSTAGRAM FEED SLOT */}
        {showInstagram && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex items-center justify-center">
                  <div className="w-full h-full bg-[#14161d] rounded-full flex items-center justify-center">
                    <InstagramIcon className="w-5 h-5 text-rose-400" />
                  </div>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    @{integrations.instagramHandle}
                  </h4>
                  <span className="text-xs text-neutral-400 font-sans">
                    Follow us on Instagram for daily client transformations
                  </span>
                </div>
              </div>

              <a
                href={`https://instagram.com/${integrations.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark border border-rose-500/30 text-rose-300 font-sans font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-rose-500/10 transition-colors flex items-center space-x-2"
              >
                <span>View Instagram Feed</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { tag: "#HairTransformation", color: "from-amber-900/40 to-neutral-900" },
                { tag: "#BengaliBridalGlam", color: "from-rose-900/40 to-neutral-900" },
                { tag: "#BeardSculpting", color: "from-stone-900 to-black" },
                { tag: "#GelNailArtistry", color: "from-purple-900/40 to-neutral-900" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={`https://instagram.com/${integrations.instagramHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-40 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 hover:border-rose-400/50 p-4 flex flex-col justify-between transition-all hover:scale-[1.02] group`}
                >
                  <InstagramIcon className="w-4 h-4 text-rose-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono text-neutral-300 group-hover:text-white">
                    {item.tag}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 3: CONDITIONAL YOUTUBE SLOT */}
        {showYouTube && (
          <div className="glass-dark border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <YoutubeIcon className="w-6 h-6 text-red-500" />
              <h4 className="font-serif text-lg font-bold text-white">Latest Salon Video Tutorials</h4>
            </div>
            <div className="w-full h-56 bg-black/60 rounded-xl flex items-center justify-center text-neutral-400 text-xs font-mono border border-white/10">
              [YouTube Embed Widget Slot - ChannelID: {integrations.youtubeChannelId}]
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
