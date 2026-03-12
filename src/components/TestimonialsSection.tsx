import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "Austin, TX",
    rating: 5,
    text: "I was so frustrated with my internet constantly dropping. The advisor helped me understand what was happening and gave me clear steps to resolve it. Very helpful!",
  },
  {
    name: "Michael Chen",
    location: "Seattle, WA",
    rating: 5,
    text: "Great service! They explained everything in simple terms and didn't try to upsell me on services I didn't need. Really appreciated the unbiased advice.",
  },
  {
    name: "Jennifer Martinez",
    location: "Miami, FL",
    rating: 5,
    text: "Quick response and knowledgeable staff. They helped me troubleshoot my cable TV issues when I couldn't get through to my provider. Highly recommend!",
  },
  {
    name: "David Thompson",
    location: "Chicago, IL",
    rating: 5,
    text: "Finally, someone who actually listens and helps! No automated menus, no endless holds. Just real assistance from real people.",
  },
  {
    name: "Lisa Anderson",
    location: "Denver, CO",
    rating: 5,
    text: "I needed help setting up my home network and they walked me through everything patiently. Made a complicated process so much easier.",
  },
  {
    name: "Robert Williams",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Best decision I made was calling them. They helped me understand my service options and what to look for. Very professional and informative.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-gradient-electric">Customers Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from people who've experienced our independent assistance service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
