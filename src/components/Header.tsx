import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { href: "#packages", label: "Packages" },
  { href: "#why", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/40">
      <div className="container flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="JK Party Hire logo" className="h-12 w-12 rounded-full object-cover" />
          <span className="hidden sm:inline font-serif text-xl tracking-wide">
            <span className="text-gold">JK</span> <span className="text-foreground">Party Hire</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:0410235755" className="hidden sm:flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors">
            <Phone className="h-4 w-4" /> 0410 235 755
          </a>
          <Link
            to="/book"
            className="hidden md:inline-flex bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform animate-shimmer"
          >
            Book Now
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/40 bg-background/95">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm uppercase tracking-widest text-muted-foreground">
                {n.label}
              </a>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm text-center">
              Book Now
            </Link>
            <a href="tel:0410235755" className="flex items-center gap-2 text-sm text-primary">
              <Phone className="h-4 w-4" /> 0410 235 755
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
