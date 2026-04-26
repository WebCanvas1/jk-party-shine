import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 md:py-28 bg-gradient-luxe">
    <div className="container">
      <div className="luxe-card rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto glow-purple">
        <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Let's Make It Magic</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-4">
          Ready to <span className="text-gold">Celebrate?</span>
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get in touch today and let us bring your vision to life with premium styling and zero stress.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:0410235755" className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
            <Phone className="h-5 w-5" /> Call 0410 235 755
          </a>
          <Link to="/book" className="border border-secondary bg-secondary/10 text-foreground px-8 py-4 rounded-full font-semibold hover:glow-purple transition-all">
            Book Now
          </Link>
        </div>

        <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" /> Melbourne based — we come to you
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
