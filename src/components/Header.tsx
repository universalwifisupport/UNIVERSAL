import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const PHONE_NUMBER = "tel:+18337084183";
const PHONE_DISPLAY = "(833) 708-4183";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Pages that should always have solid header
  const solidHeaderPages = ['/faq', '/contact', '/privacy', '/terms', '/refund', '/disclaimer'];
  const shouldBeSolid = solidHeaderPages.includes(location.pathname) || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      shouldBeSolid ? "bg-cinematic-darker/95 backdrop-blur-xl shadow-lg" : ""
    }`}>
      <div className="mx-auto flex items-center justify-between px-6 py-4 max-w-7xl">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-primary-foreground/80 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={PHONE_NUMBER}
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground electric-glow transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            Call Now {PHONE_DISPLAY}
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 bg-cinematic-darker/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-primary-foreground/80 hover:text-primary text-lg font-medium py-2"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_NUMBER}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground mt-2"
            >
              <Phone className="h-4 w-4" />
              Call Now {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
