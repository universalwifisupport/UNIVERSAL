import { Shield, Clock, Users, Award } from "lucide-react";
import routerImage from "@/assets/router-setup.jpg";

const trustItems = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock support whenever you need it" },
  { icon: Users, title: "Expert Agents", desc: "Trained professionals who know your issues" },
  { icon: Shield, title: "100% Secure", desc: "Your information is always protected" },
  { icon: Award, title: "Satisfaction Guaranteed", desc: "We don't stop until your issue is resolved" },
];

const TrustSection = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={routerImage}
          alt="Modern WiFi router with blue LED"
          className="w-full h-full object-cover slow-zoom"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -2 }}
        />
      </div>
      <div className="cinematic-overlay-heavy" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -2 }} />

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-24 w-full">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
              Why <span className="text-gradient-electric">Trust Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="glass-card p-8 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
