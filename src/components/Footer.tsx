import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-cinematic-darker text-primary-foreground/70 py-16 pb-28 md:pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <Logo textSize="text-lg" />
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Independent third-party service assistance provider for internet, cable, and streaming services. We provide guidance and support only.
            </p>
            <div className="text-xs text-primary-foreground/60 bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
              <strong className="text-yellow-400">Important:</strong> We are an independent third-party service assistance startup, launched in 2026, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider.
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/how-it-works" className="text-sm hover:text-primary transition-colors">How It Works</Link>
              <Link to="/faq" className="text-sm hover:text-primary transition-colors">FAQ</Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/refund" className="text-sm hover:text-primary transition-colors">Refund Policy</Link>
              <Link to="/disclaimer" className="text-sm hover:text-primary transition-colors">Disclaimer</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-primary-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+18001234567" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="h-4 w-4 text-primary" /> 1-800-123-4567
              </a>
              <a href="mailto:help@universalwifisupport.com" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Mail className="h-4 w-4 text-primary" /> help@universalwifisupport.com
              </a>
              <span className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary" /> Available Nationwide
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 space-y-3">
          <p className="text-center text-sm text-primary-foreground/70">
            <strong>Transparency Disclosure:</strong> Universal WiFi Support is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, cable, or streaming service provider. We provide informational guidance and assistance only. Brand names, if mentioned, are used strictly for informational purposes.
          </p>
          <p className="text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Universal WiFi Support. All rights reserved. All trademarks belong to their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
