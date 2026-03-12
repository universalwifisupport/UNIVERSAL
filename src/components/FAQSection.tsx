import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Are you an official cable or internet service provider?",
    a: "No. We are an independent third-party assistance platform. We are not affiliated with, authorized by, or endorsed by any cable, internet, or streaming service provider. We do not provide internet or cable services directly.",
  },
  {
    q: "Do you sell internet, cable, or streaming plans?",
    a: "No. We do not sell internet, cable, or streaming plans. We provide guidance and informational assistance only. We help users understand their options and navigate service-related issues.",
  },
  {
    q: "Do you charge for your services?",
    a: "Yes. Our service fees are separate from any provider charges. We charge for the assistance and guidance we provide. These fees are distinct from any bills you receive from your internet, cable, or streaming service provider.",
  },
  {
    q: "Will I still be billed by my service provider?",
    a: "Yes. Provider billing remains completely unchanged. Our assistance service does not affect your existing provider relationship or billing. You will continue to receive bills from your service provider as usual.",
  },
  {
    q: "Do you need my account passwords or sensitive information?",
    a: "No. We never request provider account passwords or sensitive credentials. We provide guidance and informational support only, which does not require access to your provider accounts.",
  },
  {
    q: "Which providers do you support?",
    a: "We may reference multiple providers for guidance purposes only. We have no affiliation, partnership, or authorization from any provider. All provider names are used strictly for informational purposes.",
  },
  {
    q: "Are your services refundable?",
    a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether assistance has already been delivered. Please review our Refund Policy page for full eligibility details.",
  },
  {
    q: "How quickly will I reach someone?",
    a: "We aim to connect you with an advisor as quickly as possible. Our team is available to provide guidance and informational support for your connectivity concerns.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient-electric">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card-light px-6 border-none"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
