"use client";

import { Star, ExternalLink, MapPin, Globe } from "lucide-react";
import { salonConfig } from "@/config/salonConfig";

export default function SocialIntegrations() {
  const { integrations } = salonConfig;

  const hasGooglePlaceId = Boolean(integrations.googlePlaceId && integrations.googlePlaceId.trim() !== "");
  const showInstagram = Boolean(integrations.enableInstagramFeed && integrations.instagramHandle && integrations.instagramHandle.trim() !== "");
  const showYouTube = Boolean(integrations.enableYouTubeFeed && integrations.youtubeChannelId && integrations.youtubeChannelId.trim() !== "");

  return (
    <section id="social-hub" className="py-16 sm:py-20 bg-[#14161d] text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION 1: GOOGLE REVIEWS INTEGRATION (CLEAN HONEST FALLBACK) */}
        {integrations.enableGoogleReviewsWidget && (
          <div className="mb-12 glass-dark border border-white/10 rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <div className="flex items-center space-x-2 text-[#d4af37] mb-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-serif font-bold text-lg text-white">Google Business Profile</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Live Google Reviews Feed
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 font-sans mt-1">
                  Connect your official Google Business Profile Place ID to auto-pull live customer ratings &amp; reviews.
                </p>
              </div>

              <a
                href={salonConfig.mapEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-[#0c0d10] font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-full hover:brightness-110 transition-all inline-flex items-center space-x-2 self-start md:self-auto min-h-[44px]"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>View Studio on Google Maps</span>
              </a>
            </div>

            {hasGooglePlaceId ? (
              <div className="w-full h-48 bg-black/40 rounded-2xl flex items-center justify-center border border-white/10 text-neutral-400 text-sm font-mono p-4 text-center">
                [Live Google Places API Carousel Active - PlaceID: {integrations.googlePlaceId}]
              </div>
            ) : (
              <div className="bg-black/30 p-6 rounded-2xl border border-white/5 text-center max-w-2xl mx-auto">
                <Star className="w-8 h-8 text-[#d4af37]/40 mx-auto mb-2" />
                <h4 className="font-serif text-base font-bold text-white mb-1">
                  Ready for Google Place ID Connection
                </h4>
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Live customer reviews, star ratings, and review cards will populate this widget once the salon&apos;s Google Business Profile Place ID is added to <code className="text-amber-300 font-mono text-[11px]">salonConfig.ts</code>.
                </p>
              </div>
            )}
          </div>
        )}

        {/* SECTION 2: CONDITIONAL INSTAGRAM FEED SLOT (ONLY SHOWN WHEN HANDLE CONFIRMED) */}
        {showInstagram && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  @{integrations.instagramHandle}
                </h4>
                <span className="text-xs text-neutral-400 font-sans">
                  Official Instagram Feed
                </span>
              </div>

              <a
                href={`https://instagram.com/${integrations.instagramHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-dark border border-rose-500/30 text-rose-300 font-sans font-semibold text-xs uppercase tracking-wider px-4 py-2 rounded-full hover:bg-rose-500/10 transition-colors flex items-center space-x-2"
              >
                <span>View Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* SECTION 3: CONDITIONAL YOUTUBE SLOT */}
        {showYouTube && (
          <div className="glass-dark border border-red-500/20 rounded-2xl p-6">
            <h4 className="font-serif text-lg font-bold text-white mb-2">YouTube Channel</h4>
            <div className="w-full h-48 bg-black/60 rounded-xl flex items-center justify-center text-neutral-400 text-xs font-mono border border-white/10">
              [YouTube Channel Feed Active - ID: {integrations.youtubeChannelId}]
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
