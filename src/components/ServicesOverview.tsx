import { Wifi, Monitor, Router, Wrench, Phone as PhoneIcon, Lightbulb } from "lucide-react";
import { Phone } from "lucide-react";

const PHONE_NUMBER = "tel:+18337084183";

const services = [
  {
    icon: Wifi,
    title: "Internet Connectivity",
    items: [
      "Slow internet speed guidance",
      "Connection dropout assistance",
      "Wi-Fi signal optimization tips",
      "Network performance advice",
    ],
  },
  {
    icon: Router,
    title: "Equipment Setup",
    items: [
      "Router configuration guidance",
      "Modem setup assistance",
      "Network device troubleshooting",
      "Equipment compatibility advice",
    ],
  },
  {
    icon: Monitor,
    title: "Cable TV Support",
    items: [
      "Channel lineup information",
      "Picture quality troubleshooting",
      "DVR and on-demand guidance",
      "Service plan comparisons",
    ],
  },
  {
    icon: Wrench,
    title: "Technical Guidance",
    items: [
      "Connection troubleshooting steps",
      "Network security recommendations",
      "Service upgrade options",
      "Alternative provider information",
    ],
  },
  {
    icon: PhoneIcon,
    title: "Service Management",
    items: [
      "Understanding your bill",
      "Account access assistance",
      "Service cancellation guidance",
      "Provider contact information",
    ],
  },
  {
    icon: Lightbulb,
    title: "Expert Advice",
    items: [
      "Best practices for connectivity",
      "Technology recommendations",
      "Cost-saving tips",
      "Service comparison insights",
    ],
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How We Can <span className="text-gradient-electric">Help You</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Independent assistance for all your internet, cable, and connectivity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-6 hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground pt-2">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-foreground mb-3">
            Need Help Now?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our independent advisors are standing by to provide guidance and support for your connectivity issues.
          </p>
          <a
            href={PHONE_NUMBER}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform"
          >
            <Phone className="h-5 w-5" />
            Call Now (833) 708-4183
          </a>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Independent third-party service • Not affiliated with any ISP or cable provider
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
