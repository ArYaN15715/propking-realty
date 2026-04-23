import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    id: "faq-1",
    q: "How does the property buying process work in Ahmedabad?",
    a: "The process starts with understanding your needs and budget, followed by curated shortlisting. After site visits and negotiation, we assist with Agreement to Sale, home loan coordination, and guide you through final registration at the Sub-Registrar's office. PropKing handles every stage end-to-end.",
  },
  {
    id: "faq-2",
    q: "What legal checks should I do before buying a property?",
    a: "Essential checks include verifying the title deed and chain of ownership, RERA registration (mandatory for projects above 500 sqm), encumbrance certificate, occupancy certificate, AUDA/BDA approvals, and the builder's track record. PropKing verifies all documents on your behalf before you commit.",
  },
  {
    id: "faq-3",
    q: "What is the current price range for flats near SG Highway?",
    a: "Flat prices near SG Highway currently range from ₹80 Lakh for compact 2 BHK units to ₹2.5 Cr for premium 4 BHK configurations. Prices vary based on project, floor, view, and amenities. Book a consultation for a tailored comparison across your preferred budget band.",
  },
  {
    id: "faq-4",
    q: "How long does it take to complete a property purchase?",
    a: "A typical transaction takes 45–90 days from agreement to registration. This includes document verification (7–10 days), home loan processing if applicable (15–30 days), and final registration (1–3 days). PropKing coordinates all parties to keep timelines on track.",
  },
  {
    id: "faq-5",
    q: "Do you help with home loan arrangements?",
    a: "Yes, we have established partnerships with leading banks and NBFCs including HDFC, SBI, ICICI, and Axis Bank. We help you compare rates, prepare documentation, and fast-track approvals — often getting pre-approved offers before you finalize a property.",
  },
  {
    id: "faq-6",
    q: "Is Ahmedabad a good city to invest in real estate?",
    a: "Ahmedabad has seen 15–20% year-on-year appreciation in key micro-markets over the last three years, driven by infrastructure growth (metro, ring roads), IT/pharma sector expansion, and strong in-migration. It ranks among India's top 5 cities for real estate ROI. The right timing and location selection are critical — that's where PropKing adds the most value.",
  },
  {
    id: "faq-7",
    q: "What are the best areas to invest in Ahmedabad right now?",
    a: "Science City leads for capital appreciation driven by corporate demand. SG Highway offers strong rental income and steady appreciation. Bopal is the sweet spot for mid-budget families with good connectivity. Prahlad Nagar gives high rental yields for studios and compact 2 BHKs. We advise based on your investment horizon and risk profile.",
  },
  {
    id: "faq-8",
    q: "How are your consultation services different from a regular broker?",
    a: "Unlike traditional brokers, PropKing is data-driven — we present shortlisted options with market comparisons and price-per-sqft analysis. We offer end-to-end support from search to registration, full legal due diligence, and transparent pricing with no hidden fees. Consultations for buyers are free — we earn from developer partnerships on new projects.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 px-4 bg-secondary/40">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            <HelpCircle className="w-3.5 h-3.5" /> FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Everything you need to know about buying property in Ahmedabad
          </p>
        </div>

        {/* 2-col grid on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 max-w-6xl mx-auto">
          {FAQS.map((faq, i) => (
            <Accordion
              key={faq.id}
              type="single"
              collapsible
              data-ocid={`faq.item.${i + 1}`}
            >
              <AccordionItem
                value={faq.id}
                className="bg-card border border-border/50 rounded-xl px-5 shadow-card hover:border-primary/20 transition-smooth data-[state=open]:border-primary/30 data-[state=open]:shadow-elevated"
              >
                <AccordionTrigger className="text-sm font-semibold text-primary text-left py-4 hover:no-underline [&>svg]:text-muted-foreground [&[data-state=open]>svg]:text-accent [&[data-state=open]>svg]:rotate-180 transition-smooth">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Still have questions?{" "}
            <button
              type="button"
              onClick={() =>
                document
                  .querySelector("#lead-capture")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-primary font-semibold hover:text-accent transition-colors"
              data-ocid="faq.contact_link"
            >
              Talk to our expert →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
