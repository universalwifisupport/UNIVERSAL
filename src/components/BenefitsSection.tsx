import { Clock, DollarSign, Headphones, CheckCircle, Zap, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get assistance any time, day or night. Our advisors are always ready to help with your connectivity concerns.",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    description: "Speak with knowledgeable advisors who understand internet and cable service issues inside and out.",
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "No waiting in automated phone trees. Connect with a live person who can provide immediate assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Independent & Unbiased",
    description: "We're not affiliated with any ISP or cable company. Get objective advice tailored to your needs.",
  },
  {
    icon: CheckCircle,
    title: "No Commitments",
    description: "Simple, straightforward assistance without contracts or long-term obligations.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear, upfront information about our service fees. No hidden charges or surprises.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-gradient-electric">Universal WiFi Support?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Independent third-party assistance designed to make your connectivity experience better
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
