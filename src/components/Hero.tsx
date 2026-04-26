import { Link } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </div>

      <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
        <img src={logo} alt="JK Party Hire" className="h-28 md:h-36 w-28 md:w-36 rounded-full glow-purple animate-pulse-glow mb-8" />

        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-xs uppercase tracking-[0.3em] text-primary mb-6">
          <Sparkles className="h-3 w-3" /> Melbourne · We come to you
        </span>

        {/* 🔥 FIXED: Removed gold shimmer block */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
          Premium <span className="text-gold">Party Hire</span> &amp;<br />
          Event Styling in <span className="text-neon-purple">Melbourne</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          We create unforgettable setups for birthdays, weddings, engagements, baby showers, hens nights, romantic occasions &amp; more.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#packages"
            className="bg-gradient-gold text-primary-foreground px-8 py-4 rounded-full font-semibold tracking-wide hover:scale-105 transition-transform"
          >
            View Packages
          </a>
          <Link
            to="/book"
            className="border border-secondary text-secondary-foreground bg-secondary/10 px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-secondary/20 hover:glow-purple transition-all"
          >
            Book Now
          </Link>
        </div>

        <a href="tel:0410235755" className="mt-8 flex items-center gap-2 text-primary hover:text-primary-glow transition-colors">
          <Phone className="h-5 w-5" />
          <span className="font-semibold tracking-wide text-lg">0410 235 755</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
