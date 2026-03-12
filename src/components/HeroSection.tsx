import { Phone, Shield, Users, Zap, Wifi, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const PHONE_NUMBER = "tel:+18001234567";
const PHONE_DISPLAY = "1-800-123-4567";

const HeroSection = () => {
  return (
    <section className="cinematic-section overflow-hidden">
      <div className="sticky-bg">
        <img
          src={heroImage}
          alt="Family using internet in modern home"
          className="slow-zoom"
        />
        <div className="cinematic-overlay-heavy" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Split Layout with Diagonal Effect */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Main Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm text-primary backdrop-blur-sm">
                  <Wifi className="h-4 w-4" />
                  <span className="font-medium">24/7 Expert Support</span>
                </div>

                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                  Independent
                  <span className="text-gradient-electric block mt-1">Cable & Internet</span>
                  <span className="block mt-2 text-3xl md:text-4xl text-primary-foreground/90">Service Assistance</span>
                </h1>

                <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed max-w-xl">
                  Get general guidance and informational support for internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="glass-card p-4 text-center hover:scale-105 transition-transform">
                  <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary-foreground">Independent</p>
                </div>
                <div className="glass-card p-4 text-center hover:scale-105 transition-transform">
                  <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary-foreground">Live Advisors</p>
                </div>
                <div className="glass-card p-4 text-center hover:scale-105 transition-transform">
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-xs font-medium text-primary-foreground">No Affiliation</p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="inline-flex items-center gap-2 rounded-lg border border-yellow-500/50 bg-yellow-500/20 px-4 py-2.5 text-xs text-yellow-200 backdrop-blur-sm">
                <Shield className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="font-medium">Not an ISP • No brand affiliation • Third-party guidance</span>
              </div>
            </div>

            {/* Right Side - CTA Card */}
            <div className="lg:flex lg:justify-end">
              <div className="glass-card p-8 space-y-6 max-w-md w-full border-2 border-primary/20">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-8 w-8 text-primary animate-pulse" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
                    Need Help Now?
                  </h3>
                  <p className="text-sm text-primary-foreground/70">
                    Speak with an independent advisor about your connectivity issues
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="text-center py-3 px-4 bg-primary/10 rounded-lg border border-primary/30">
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Call Now</p>
                    <p className="text-3xl font-bold text-primary">{PHONE_DISPLAY}</p>
                  </div>

                  <a
                    href={PHONE_NUMBER}
                    className="flex items-center justify-center gap-3 w-full rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
                  >
                    <Phone className="h-5 w-5" />
                    TALK TO AN ADVISOR
                    <ChevronRight className="h-5 w-5" />
                  </a>
                </div>

                <div className="flex items-center justify-around text-center pt-4 border-t border-primary-foreground/10">
                  <div>
                    <p className="text-2xl font-bold text-primary">24/7</p>
                    <p className="text-xs text-primary-foreground/60">Available</p>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20"></div>
                  <div>
                    <p className="text-2xl font-bold text-primary">&lt;2min</p>
                    <p className="text-xs text-primary-foreground/60">Wait Time</p>
                  </div>
                  <div className="w-px h-10 bg-primary-foreground/20"></div>
                  <div>
                    <p className="text-2xl font-bold text-primary">98%</p>
                    <p className="text-xs text-primary-foreground/60">Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
