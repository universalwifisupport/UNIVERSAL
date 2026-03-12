import { Phone } from "lucide-react";

const PHONE_NUMBER = "tel:+18001234567";
const PHONE_DISPLAY = "1-800-123-4567";

const StickyCallBar = () => {
  return (
    <>
      {/* Sticky bottom bar - mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-cinematic-darker/95 backdrop-blur-xl border-t border-primary/20 px-4 py-3">
        <a
          href={PHONE_NUMBER}
          className="flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground animate-pulse-glow w-full"
        >
          <Phone className="h-5 w-5" />
          CALL SUPPORT NOW — {PHONE_DISPLAY}
        </a>
      </div>

      {/* Floating call button - desktop */}
      <a
        href={PHONE_NUMBER}
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-3 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground animate-pulse-glow hover:scale-105 transition-transform shadow-2xl"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </a>
    </>
  );
};

export default StickyCallBar;
