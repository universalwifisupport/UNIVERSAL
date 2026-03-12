import { Phone, MessageSquare, CheckCircle } from "lucide-react";
import technicianImage from "@/assets/technician-help.jpg";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call Us",
    desc: "Dial our number and you'll be connected to a live agent in seconds.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Describe the Issue",
    desc: "Tell us what's happening — outages, slow speeds, cable problems, anything.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Guided Help",
    desc: "Our expert walks you through the fix step by step until you're back online.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative min-h-screen">
      {/* Fixed background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={technicianImage}
          alt="Technician helping customer"
          className="w-full h-full object-cover slow-zoom"
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}
        />
      </div>
      <div className="cinematic-overlay-heavy" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }} />

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 py-24 w-full">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
              How It <span className="text-gradient-electric">Works</span>
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-xl mx-auto">
              Three simple steps to getting your connection fixed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="glass-card p-8 text-center">
                <span className="text-5xl font-display font-bold text-primary/30">{step.number}</span>
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center my-5">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{step.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
