import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you deliver?", a: "Yes — we deliver across Melbourne. Delivery fees start from $30 depending on your location." },
  { q: "Is setup included?", a: "Absolutely. Every package includes full setup and pack down by our team." },
  { q: "How do I book?", a: "Choose a package, fill in the booking form or call us on 0410 235 755. A $100 non-refundable deposit confirms your booking." },
  { q: "Is the deposit refundable?", a: "No — the $100 booking deposit is non-refundable as it secures your date and styling materials." },
];

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28">
    <div className="container max-w-3xl">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">FAQ</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          Frequently <span className="text-gold">Asked</span>
        </h2>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="luxe-card rounded-xl px-5 border-0">
            <AccordionTrigger className="font-serif text-lg hover:no-underline text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;
