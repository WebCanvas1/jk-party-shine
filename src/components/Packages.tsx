import { useState } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { packages } from "@/data/packages";

const Packages = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewAlt, setPreviewAlt] = useState("");

  return (
    <section
      id="packages"
      className="relative py-20 md:py-28 bg-[radial-gradient(circle_at_top_left,#4c1d95_0%,#0a0115_60%,#000000_100%)]"
    >
      <div className="absolute inset-0 bg-purple-700/10 blur-3xl pointer-events-none" />

      {previewImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm pointer-events-none">
          <img
            src={previewImage}
            alt={previewAlt}
            className="max-h-[85vh] max-w-[85vw] rounded-2xl border border-primary/40 shadow-2xl glow-gold object-contain"
          />
        </div>
      )}

      <div className="container relative">
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
              <div
                className="relative h-[220px] md:h-[260px] overflow-hidden cursor-zoom-in"
                onMouseEnter={() => {
                  setPreviewImage(p.image);
                  setPreviewAlt(p.name);
                }}
                onMouseLeave={() => {
                  setPreviewImage(null);
                  setPreviewAlt("");
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-serif text-xl mb-2 text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 italic">{p.tagline}</p>

                <p className="text-[11px] uppercase tracking-[0.25em] text-primary/80 mb-2">What's included</p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="rounded-xl border border-primary/40 bg-gradient-to-r from-primary/15 via-primary/5 to-secondary/15 px-4 py-3 mb-3 text-center glow-gold">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Package Price</p>
                    <p className="font-serif text-2xl text-gold leading-tight">{p.price}</p>
                  </div>

                  <Link
                    to={`/book?package=${encodeURIComponent(p.name)}`}
                    className="w-full inline-flex justify-center items-center gap-2 bg-gradient-purple text-secondary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:glow-purple transition-all"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
