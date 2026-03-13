import Layout from "@/components/Layout";
import { Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PHONE_NUMBER = "tel:+18337084183";

const faqs = [
  { q: "What services do you provide?", a: "We provide expert guidance and troubleshooting assistance for all internet and cable-related issues including outages, slow speeds, router setup, and billing questions." },
  { q: "Is this a free service?", a: "Our initial consultation is free. Depending on your issue, additional support may involve service fees which will be clearly communicated before proceeding." },
  { q: "Are you affiliated with my internet provider?", a: "We are an independent assistance service. We are not directly affiliated with any specific internet or cable provider." },
  { q: "How quickly will I reach an agent?", a: "Most calls are answered within 60 seconds." },
  { q: "What if my issue isn't resolved?", a: "We offer a satisfaction guarantee. If we can't resolve your issue, we'll guide you to the right resource or provide a full refund." },
  { q: "Do you handle billing disputes?", a: "Yes, we can help you understand your bills and guide you through dispute processes with your provider." },
  { q: "What hours are you available?", a: "Our support lines are available 24/7, 365 days a year." },
  { q: "Can you set up my new router?", a: "Absolutely. We provide step-by-step guidance for setting up any brand of router or modem." },
];

const FAQPage = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-secondary min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Frequently Asked <span className="text-gradient-electric">Questions</span>
          </h1>
          <p className="text-center text-muted-foreground mb-16">Everything you need to know about our service.</p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card-light px-6 border-none">
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Still have questions?</p>
            <a href={PHONE_NUMBER} className="inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-bold text-primary-foreground electric-glow hover:scale-105 transition-transform">
              <Phone className="h-5 w-5" /> Call Now (833) 708-4183
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
