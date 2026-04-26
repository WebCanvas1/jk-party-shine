import { Link } from "react-router-dom";
import { Phone, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-props.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background">
      
      <div className="container relative py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">
          <img
            src={logo}
            alt="JK Party Hire"
            className="h-28 md:h-36 w-28 md:w-36 rounded-full glow-purple animate-pulse-glow mb-8 mx-auto lg:mx-0"
          />

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 text-xs uppercase tracking-[0.3em] text-primary mb-6">
            <Sparkles className="h-3 w-3" /> Melbourne · We come to you
          </span>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
            Premium <span className="text-gold">Party Hire</span> &amp;<br />
            Event Styling in <span className="text-neon-purple">Melbourne</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
            We create unforgettable setups for birthdays, weddings, engagements, baby showers, hens nights, romantic occasions &amp; more.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          <a
            href="tel:0410235755"
            className="mt-8 inline-flex items-center gap-2 text-primary hover:text-primary-glow transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span className="font-semibold tracking-wide text-lg">0410 235 755</span>
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          <div className="relative rounded-[2rem] overflow-hidden border border-primary/30 shadow-2xl bg-gradient-to-br from-purple-900 to-black p-6">
            
            <img
              src={heroBg}
              alt="Premium party props"
              className="w-full h-[380px] md:h-[500px] object-contain"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
