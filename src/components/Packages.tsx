import { Link } from "react-router-dom";
import { packages } from "@/data/packages";

const Packages = () => {
  return (
    <section id="packages" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-primary mb-3">Our Packages</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-4">
            Curated <span className="text-gold">Luxury Setups</span>
          </h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-muted-foreground">
            Every package is designed, set up and packed down by our team — so you can simply enjoy the moment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {packages.map((p) => (
            <article key={p.slug} className="luxe-card rounded-2xl overflow-hidden flex flex-col group">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <span className="absolute top-4 right-4 bg-gradient-gold text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {p.price}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1">{p.tagline}</p>
                <Link
                  to={`/book?package=${encodeURIComponent(p.name)}`}
                  className="inline-flex justify-center items-center gap-2 bg-gradient-purple text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:glow-purple transition-all"
                >
                  Book Now
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
