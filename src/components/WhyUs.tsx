import { Truck, Sparkles, Palette, MapPin, HeartHandshake } from "lucide-react";

const items = [
  { icon: Sparkles, title: "Full setup & pack down", desc: "We handle every detail from start to finish." },
  { icon: Truck, title: "We come to you", desc: "Delivered and styled at your venue." },
  { icon: Palette, title: "Custom themes available", desc: "Tailored colours, styles and accents." },
  { icon: MapPin, title: "Melbourne based", desc: "Servicing Melbourne and surrounds." },
  { icon: HeartHandshake, title: "Stress-free experience", desc: "Sit back — we make it effortless." },
];

const WhyUs = () => (
  <section id="why" className="py-20 md:py-28 bg-gradient-luxe relative">
    <div className="container">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Why Choose Us</p>
        <h2 className="font-serif text-4xl md:text-5xl">
          The <span className="text-neon-purple">JK Difference</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {items.map((it) => (
          <div key={it.title} className="luxe-card rounded-2xl p-6 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center">
              <it.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
