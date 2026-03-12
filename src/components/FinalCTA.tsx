import { Phone } from "lucide-react";
import streamingImage from "@/assets/streaming.jpg";

const PHONE_NUMBER = "tel:+18001234567";
const PHONE_DISPLAY = "1-800-123-4567";

const FinalCTA = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={streamingImage}
          alt="Family streaming entertainment"
          className="w-full h-full object-cover slow-zoom"
        />
        <div className="cinematic-overlay-heavy" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl">
          <h2 className="font-display text-3xl md:text-6xl font-bold text-primary-foreground leading-tight">
            Get Back Online{" "}
            <span className="text-gradient-electric">Now</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/60 max-w-xl mx-auto">
            Don't let connectivity issues hold you back. One call is all it takes.
          </p>
          <a
            href={PHONE_NUMBER}
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-12 py-6 text-xl font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-7 w-7" />
            {PHONE_DISPLAY}
          </a>
          <p className="mt-6 text-primary-foreground/40 text-sm">
            Available 24/7 • Average wait time under 60 seconds
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
