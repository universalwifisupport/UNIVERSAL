import { Wifi, WifiOff, Tv, Settings, Phone, AlertTriangle } from "lucide-react";

const PHONE_NUMBER = "tel:+18001234567";

const problems = [
  { icon: WifiOff, title: "Internet Outage", desc: "Complete loss of connectivity" },
  { icon: Wifi, title: "Slow WiFi", desc: "Buffering & lag issues" },
  { icon: Tv, title: "Cable Problems", desc: "No signal or poor quality" },
  { icon: Settings, title: "Router Setup", desc: "New installation help" },
  { icon: AlertTriangle, title: "Billing Issues", desc: "Account & payment questions" },
  { icon: Phone, title: "Other Issues", desc: "Any connectivity problem" },
];

const ProblemCards = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What's Your <span className="text-gradient-electric">Issue?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Select your problem below and get connected to an expert instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <a
              key={problem.title}
              href={PHONE_NUMBER}
              className="glass-card-light p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-xl group cursor-pointer"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm">{problem.desc}</p>
              <div className="mt-5 text-primary text-sm font-semibold flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Phone className="h-4 w-4" /> Call Now
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
