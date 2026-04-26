import logo from "@/assets/logo.png";
import { Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/40 py-12">
    <div className="container grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="flex items-center gap-3 justify-center md:justify-start">
        <img src={logo} alt="JK Party Hire" className="h-14 w-14 rounded-full" />
        <div>
          <p className="font-serif text-lg"><span className="text-gold">JK</span> Party Hire</p>
          <p className="text-xs text-muted-foreground uppercase tracking-widest">Premium Event Styling</p>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground space-y-1">
        <a href="tel:0410235755" className="flex items-center justify-center gap-2 text-primary hover:text-primary-glow">
          <Phone className="h-4 w-4" /> 0410 235 755
        </a>
        <p className="flex items-center justify-center gap-2">
          <MapPin className="h-4 w-4 text-primary" /> Melbourne, Australia
        </p>
      </div>

      <p className="text-xs text-muted-foreground text-center md:text-right">
        © {new Date().getFullYear()} JK Party Hire. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
