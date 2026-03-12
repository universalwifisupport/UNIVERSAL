import { Wifi } from "lucide-react";

interface LogoProps {
  className?: string;
  textSize?: string;
}

const Logo = ({ className = "", textSize = "text-xl" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
          <Wifi className="h-6 w-6 text-primary-foreground" />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`font-display ${textSize} font-bold text-primary-foreground drop-shadow-lg`}>
          Universal
        </span>
        <span className={`font-display text-xs font-semibold text-primary tracking-wider uppercase`}>
          WiFi Support
        </span>
      </div>
    </div>
  );
};

export default Logo;
