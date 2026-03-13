import Layout from "@/components/Layout";
import { Phone, MessageSquare, CheckCircle, ArrowRight, Wifi, Clock, Shield, Headphones, Settings, Zap } from "lucide-react";
import technicianImage from "@/assets/technician-help.jpg";
import routerImage from "@/assets/router-setup.jpg";
import officeImage from "@/assets/home-office.jpg";

const PHONE_NUMBER = "tel:+18337084183";
const PHONE_DISPLAY = "(833) 708-4183";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Call Our Support Line",
    desc: "Dial our toll-free number. You'll be connected to a trained agent in under 60 seconds — no automated menus, no hold music.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Explain Your Problem",
    desc: "Whether it's an outage, slow speeds, router setup, or billing confusion — simply tell us what's going on. We handle every type of issue.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Get Step-by-Step Help",
    desc: "Our expert walks you through the solution in real-time. We stay on the line until your issue is fully resolved.",
  },
];

const benefits = [
  { icon: Clock, title: "Under 60s Wait", desc: "Average connection time to a live agent." },
  { icon: Headphones, title: "Real Human Support", desc: "No bots. No automated systems. Just experts." },
  { icon: Shield, title: "100% Secure", desc: "Your information is never shared or stored." },
  { icon: Settings, title: "All Issues Covered", desc: "Internet, cable, WiFi, streaming — we handle it all." },
  { icon: Wifi, title: "Remote Diagnostics", desc: "We guide you through fixes without needing a tech visit." },
  { icon: Zap, title: "Fast Resolution", desc: "98% of issues resolved on the first call." },
];

const commonIssues = [
  "Internet keeps disconnecting",
  "WiFi signal is weak in some rooms",
  "Cable TV channels not loading",
  "Router needs to be set up",
  "Streaming buffering issues",
  "Slow download or upload speeds",
  "No internet after power outage",
  "Need help switching providers",
];

const HowItWorksPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={technicianImage} alt="Technician helping" className="w-full h-full object-cover slow-zoom" />
          <div className="cinematic-overlay-heavy" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground">
              How It <span className="text-gradient-electric">Works</span>
            </h1>
            <p className="mt-4 text-primary-foreground/60 max-w-xl mx-auto">
              Getting help is simple. Here's exactly what happens when you call.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {steps.map((step, i) => (
            <div key={step.number} className="glass-card-light p-10 flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <span className="text-6xl font-display font-bold text-primary/20">{step.number}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-6 w-6 text-primary/30 mt-4 flex-shrink-0" />
              )}
            </div>
          ))}

          <div className="text-center pt-8">
            <a
              href={PHONE_NUMBER}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
            >
              <Phone className="h-6 w-6" />
              Call Now {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img src={officeImage} alt="Home office setup" className="w-full h-full object-cover" />
          <div className="cinematic-overlay-heavy" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
              Why <span className="text-gradient-electric">Choose Us</span>
            </h2>
            <p className="mt-4 text-primary-foreground/60 max-w-xl mx-auto">
              We're built for speed, simplicity, and real results.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="glass-card p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <b.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-primary-foreground mb-2">{b.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Issues We <span className="text-gradient-electric">Solve</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              No matter what the problem is, our agents can help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commonIssues.map((issue) => (
              <div key={issue} className="glass-card-light p-5 flex items-center gap-4">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{issue}</span>
              </div>
            ))}
          </div>
          <div className="text-center pt-12">
            <a
              href={PHONE_NUMBER}
              className="inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
            >
              <Phone className="h-6 w-6" />
              Call Now {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Visual CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img src={routerImage} alt="Router setup" className="w-full h-full object-cover" />
          <div className="cinematic-overlay-heavy" />
        </div>
        <div className="relative text-center px-6">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
            Ready to Get <span className="text-gradient-electric">Connected?</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 max-w-lg mx-auto">
            One call is all it takes. Our team is standing by right now.
          </p>
          <a
            href={PHONE_NUMBER}
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-6 w-6" />
            Call Now {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorksPage;
