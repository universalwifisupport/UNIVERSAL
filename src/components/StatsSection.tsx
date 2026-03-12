import { Users, Phone, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    number: "50,000+",
    label: "Customers Assisted",
    description: "People we've helped with connectivity issues",
  },
  {
    icon: Phone,
    number: "24/7",
    label: "Always Available",
    description: "Round-the-clock support when you need it",
  },
  {
    icon: Clock,
    number: "< 2 Min",
    label: "Average Wait Time",
    description: "Quick connection to live advisors",
  },
  {
    icon: ThumbsUp,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Customers satisfied with our service",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by <span className="text-gradient-electric">Thousands</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join the growing number of people who rely on our independent assistance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card p-8 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground text-lg mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 backdrop-blur-sm">
            <span className="text-sm text-foreground">
              Independent third-party assistance • No ISP affiliation • Unbiased guidance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
