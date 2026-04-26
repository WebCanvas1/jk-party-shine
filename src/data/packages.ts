import bucks from "@/assets/pkg-bucks.png";
import wedding from "@/assets/pkg-wedding.png";
import hens from "@/assets/pkg-hens.png";
import romantic from "@/assets/pkg-romantic.jpg";
import engagement from "@/assets/pkg-engagement.png";
import b21 from "@/assets/pkg-21st.png";
import b18 from "@/assets/pkg-18th.png";
import fullbday from "@/assets/pkg-fullbday.jpg";
import toddler from "@/assets/pkg-toddler.jpg";
import drinksbar from "@/assets/pkg-drinksbar.jpg";
import floral from "@/assets/pkg-floral.jpg";
import gender from "@/assets/pkg-gender.jpg";
import babyshower from "@/assets/pkg-babyshower.jpg";

export type Package = {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  image: string;
};

export const packages: Package[] = [
  { slug: "weekend-bucks", name: "Weekend Bucks Party Deal", price: "From $800", tagline: "Drink station, buckets, games & more", image: bucks },
  { slug: "elegant-wedding", name: "Elegant Wedding Package", price: "$950", tagline: "Full wedding setup service", image: wedding },
  { slug: "glam-hens", name: "Glam Hens Package", price: "$995", tagline: "Most popular — full glam setup", image: hens },
  { slug: "romantic-setup", name: "Romantic Setup Package", price: "$450", tagline: "Unforgettable romantic evenings", image: romantic },
  { slug: "engagement", name: "Engagement Package", price: "$350", tagline: "Make your special moment unforgettable", image: engagement },
  { slug: "21st-birthday", name: "21st Birthday Package", price: "$450", tagline: "Black & gold luxury 21st setup", image: b21 },
  { slug: "glam-18th", name: "Glam 18th Package", price: "$450", tagline: "Pink glam 18th birthday styling", image: b18 },
  { slug: "full-birthday", name: "Full Birthday Package", price: "From $350", tagline: "All-in-one birthday setup", image: fullbday },
  { slug: "toddler-fun", name: "Toddler Fun Package", price: "From $300", tagline: "Adorable setups for little ones", image: toddler },
  { slug: "premium-drinks-bar", name: "Premium Drinks Bar Package", price: "From $700", tagline: "Luxury bar setup with premium styling", image: drinksbar },
  { slug: "flower-arch", name: "Flower Arch Package", price: "From $400", tagline: "Stunning floral arches & backdrops", image: floral },
  { slug: "gender-reveal", name: "Gender Reveal Package", price: "From $500", tagline: "Magical reveal moments", image: gender },
  { slug: "baby-shower", name: "Baby Shower Package", price: "From $550", tagline: "Soft, dreamy baby shower styling", image: babyshower },
];
