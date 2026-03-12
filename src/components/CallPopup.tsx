import { useEffect, useState } from "react";
import { Phone, X, Zap, Users, Shield } from "lucide-react";

const PHONE_NUMBER = "tel:+18001234567";
const PHONE_DISPLAY = "1-800-123-4567";

const CallPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-cinematic-darker/80 backdrop-blur-sm animate-fade-in"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-primary/20 bg-background p-8 text-center shadow-2xl animate-scale-in" style={{ animation: "fadeInUp 0.4s ease-out forwards" }}>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
          <Phone className="h-8 w-8 text-primary animate-pulse-glow" />
        </div>

        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground leading-tight">
          Internet or Cable{" "}
          <span className="text-gradient-electric">Not Working?</span>
        </h2>

        <p className="mt-3 text-muted-foreground text-sm md:text-base leading-relaxed">
          Get instant help for slow internet, outages, setup issues, or cable problems.
        </p>

        <div className="mt-6 space-y-3">
          <p className="text-2xl font-bold text-primary tracking-wide">{PHONE_DISPLAY}</p>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center justify-center gap-3 w-full rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-6 w-6" />
            CALL SUPPORT NOW
          </a>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 text-muted-foreground text-xs">
          <span className="flex items-center gap-1">
            <Zap className="h-3.5 w-3.5 text-primary" /> Quick assistance
          </span>
          <span className="flex items-center gap-1">
            <Shield className="h-3.5 w-3.5 text-primary" /> No forms
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-primary" /> Real agent
          </span>
        </div>
      </div>
    </div>
  );
};

export default CallPopup;
