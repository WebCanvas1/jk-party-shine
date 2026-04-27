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
  features: string[];
  image: string;
};

export const packages: Package[] = [
  {
    slug: "weekend-bucks",
    name: "Weekend Bucks Party Deal",
    price: "From $800",
    tagline: "The ultimate weekend bucks setup — drinks, games & full styling.",
    features: [
      "Drink station setup",
      "Buckets with ice",
      "Games + dart board",
      "Bluetooth speaker",
      "Grazing boxes included",
      "Personalised welcome sign",
      "Full setup & pack down",
    ],
    image: bucks,
  },
  {
    slug: "elegant-wedding",
    name: "Elegant Wedding Package",
    price: "$950",
    tagline: "Make your special day unforgettable with our full wedding setup service.",
    features: [
      "Wedding table cloths in your colour palette",
      "Elegant centrepieces",
      "Artificial floral arrangements",
      "LED candles for romantic glow",
      "Welcome / seating sign",
      "Cake plinth & dessert table setup",
      "NEW dessert table risers",
      "Full setup & pack down",
    ],
    image: wedding,
  },
  {
    slug: "glam-hens",
    name: "Glam Hens Package",
    price: "$995",
    tagline: "Our most popular package — the ultimate glam hens experience.",
    features: [
      "Balloon garland + backdrop",
      "“Bride to Be” neon signage",
      "Full table setup for guests",
      "Table styling (runners, florals, candles)",
      "Champagne / drink station",
      "Personalised welcome sign",
      "Dessert table setup + risers",
      "Personalised robes & slippers",
      "Full setup & pack down",
    ],
    image: hens,
  },
  {
    slug: "romantic-setup",
    name: "Romantic Setup Package",
    price: "$450",
    tagline: "Create an unforgettable romantic evening for two.",
    features: [
      "Balloon garland or heart backdrop",
      "“Love” or “Be Mine” neon sign",
      "Rose petals setup (bed or table)",
      "LED candles / romantic lighting",
      "Small table setup for 2 people",
      "Personalised welcome sign",
      "Full setup & pack down",
    ],
    image: romantic,
  },
  {
    slug: "engagement",
    name: "Engagement Package",
    price: "$350",
    tagline: "Make your engagement moment truly unforgettable.",
    features: [
      "Table cloths for your tables",
      "Gold & black LED candles",
      "Dessert table sign",
      "“Please Sign Our Guest Book” sign",
      "Glow stick sign for the tables",
      "Mini love heart lolly jars",
      "Custom engagement invitations",
      "Wooden glow stick box",
      "Table runner & customised seating chart",
    ],
    image: engagement,
  },
  {
    slug: "21st-birthday",
    name: "21st Birthday Package",
    price: "$450",
    tagline: "A luxe black & gold 21st birthday celebration to remember.",
    features: [
      "Table cloths & full table setup",
      "Bluetooth speaker",
      "Dessert sign + lollie jar with scoop",
      "Mini love heart thank-you jars",
      "Plates, cutlery, cups & napkins",
      "Number 21 balloon (your colours)",
      "Number 21 LED light & cake plinth",
      "Table runner & fake LED candles",
      "Full setup & pack down",
    ],
    image: b21,
  },
  {
    slug: "glam-18th",
    name: "Glam 18th Package",
    price: "$450",
    tagline: "The perfect glam setup to make your 18th unforgettable.",
    features: [
      "Number 18 balloon in your colours",
      "Dessert table with donut stand & lollie jars",
      "Bluetooth music speaker",
      "Full table setup for guests",
      "Gold “18” centrepiece & cake plinth",
      "Table cloths in your chosen colours",
      "Plates, napkins & cups",
      "Dessert table sign & table styling",
      "Full setup & pack down",
    ],
    image: b18,
  },
  {
    slug: "full-birthday",
    name: "Full Birthday Package",
    price: "From $350",
    tagline: "Everything you need for a stress-free birthday celebration.",
    features: [
      "Full setup",
      "Table cloths in any theme",
      "Cups, plates, napkins & cutlery",
      "Party bags filled with lollies",
      "Decorations & number balloon",
      "Birthday invitations",
      "Birthday gift for the birthday child",
      "Lollie jars with scoop",
    ],
    image: fullbday,
  },
  {
    slug: "toddler-fun",
    name: "Toddler Fun Package",
    price: "From $300",
    tagline: "Adorable, safe & colourful setups for your little one's big day.",
    features: [
      "Painting station or colouring station (your theme)",
  "Piñatas,Chips,Fairy bread",
  "Pass the parcel game",
  "Lollie station for guests",
  "Choice of lollie bags or party favour bags (filled with toys)",
  "Party hats for each child",
  "Balloons on weights for tables",
  "Themed table cloths",
  "Art smocks provided (for painting option)",
  "Colouring pencils & sheets (for colouring option)",
  "Full setup & pack down included",
    ],
    image: toddler,
  },
  {
    slug: "premium-drinks-bar",
    name: "Premium Drinks Bar Package",
    price: "From $700",
    tagline: "A luxury drinks bar to elevate any event.",
    features: [
      "Choice of drink dispenser or slushie machine",
  "Cups provided for all guests",
  "Drinks provided for slushie machine (customer choice)",
  "Balloon garland styling",
  "Custom drinks bar sign or chalkboard signage",
  "Themed table cloths",
  "Table runner",
  "Ice included for guests",
  "1–2 staff members to run the station",
  "Full setup & pack down service",
    ],
    image: drinksbar,
  },
  {
    slug: "flower-arch",
    name: "Flower Arch Package",
    price: "From $400",
    tagline: "A stunning floral arch as your event centrepiece.",
    features: [
      "Stunning flower arch backdrop (your colour theme)",
  "Dessert table setup + styling",
  "Cake plinth / stand",
  "Table styling (runners + décor)",
  "LED candles / decorative pieces",
  "“Happy Birthday”, “Oh Baby” or custom signage",
  "Full setup & pack down",
    ],
    image: floral,
  },
  {
    slug: "gender-reveal",
    name: "Gender Reveal Package",
    price: "From $500",
    tagline: "Capture the magical moment with a beautifully styled reveal.",
    features: [
      "Balloon garland backdrop (pink, blue or neutral tones)",
  "Gender reveal balloon (confetti inside – pink/blue)",
  "Confetti cannons or smoke bombs (optional)",
  "“Boy or Girl?” signage",
  "Dessert table setup",
  "Table styling to match theme",
  "Guest tables setup",
  "Full setup & pack down included",
    ],
    image: gender,
  },
  {
    slug: "baby-shower",
    name: "Baby Shower Package",
    price: "From $550",
    tagline: "Soft, dreamy styling to celebrate the new arrival.",
    features: [
      "Balloon garland backdrop",
  "Dessert table setup",
  "Table styling (soft, neutral tones)",
  "“Oh Baby” signage",
  "Guest tables setup",
  "Baby shower cake included",
  "Full setup & pack down",
    ],
    image: babyshower,
  },
];
