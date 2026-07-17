export const products = [
  {
    id: "01",
    name: "Bio-Renew Serum",
    tagline: "Overnight cellular repair",
    price: "LKR 2500",
    volume: "30ml",
    image: "/images/Bio-Renew Serum.jpg",
    description:
      "A concentrated bakuchiol and peptide complex that renews skin while you sleep, softening fine lines by morning.",
    tag: "Bestseller",
  },
  {
    id: "02",
    name: "Cloud Barrier Cream",
    tagline: "48-hour moisture lock",
    price: "LKR 2000",
    volume: "50ml",
    image: "/images/Cloud-Barrier-Cream.jpg",
    description:
      "Ceramide-rich and whipped to a cloud finish, this cream rebuilds the skin barrier without a heavy after-feel.",
    tag: "New",
  },
  {
    id: "03",
    name: "Dew Drop Essence",
    tagline: "Instant luminosity",
    price: "LKR 1500",
    volume: "120ml",
    image: "/images/Dewdrop-Essence.jpg",
    description:
      "A featherlight essence of fermented rice and centella that preps skin to absorb everything applied after.",
    tag: "Editor's Pick",
  },
  {
    id: "04",
    name: "Botanical Cleansing Oil",
    tagline: "Gentle daily reset",
    price: "LKR 1000",
    volume: "150ml",
    image: "/images/Botanical-Cleansing-Oil.jpg",
    description:
      "Camellia and marula oils dissolve makeup and SPF in seconds, rinsing clean without stripping the skin.",
    tag: "Cult Classic",
  },
] as const;

export const benefits = [
  {
    title: "Clinically Proven",
    description:
      "Every formula is tested in independent dermatological trials before it reaches your shelf.",
    stat: "94%",
    statLabel: "saw visible results in 4 weeks",
  },
  {
    title: "Sustainably Sourced",
    description:
      "Botanicals are wild-harvested or regeneratively farmed, traced back to a named grower.",
    stat: "100%",
    statLabel: "traceable plant origins",
  },
  {
    title: "Dermatologist Formulated",
    description:
      "Developed alongside board-certified dermatologists for sensitive, reactive, and mature skin.",
    stat: "12",
    statLabel: "years of formulation research",
  },
  {
    title: "Consciously Packaged",
    description:
      "Refillable glass vessels and post-consumer recycled cartons, designed to be kept, not discarded.",
    stat: "0%",
    statLabel: "virgin plastic",
  },
] as const;

export const ingredients = [
  {
    name: "Bakuchiol",
    origin: "Psoralea corylifolia seed",
    benefit: "A gentle retinol alternative that smooths texture without irritation.",
    image: "/images/Bakuchiol.jpg",
  },
  {
    name: "Centella Asiatica",
    origin: "Wetland herb, Jeju Island",
    benefit: "Calms visible redness and strengthens the skin's moisture barrier.",
    image: "/images/Centella.jpg",
  },
  {
    name: "Squalane",
    origin: "Sugarcane-derived",
    benefit: "Mirrors skin's own lipids for weightless, non-comedogenic hydration.",
    image: "/images/Squalane.jpg",
  },
  {
    name: "Niacinamide",
    origin: "Vitamin B3 complex",
    benefit: "Refines the look of pores and evens tone over sustained use.",
    image: "/images/Niacinamide.jpg",
  },
] as const;

export const routineSteps = [
  {
    time: "AM",
    step: "01",
    name: "Botanical Cleansing Oil",
    duration: "60 sec",
    detail: "Massage onto dry skin, emulsify with water, rinse.",
  },
  {
    time: "AM",
    step: "02",
    name: "Dew Drop Essence",
    duration: "30 sec",
    detail: "Press into damp skin with palms until fully absorbed.",
  },
  {
    time: "PM",
    step: "03",
    name: "Bio-Renew Serum",
    duration: "45 sec",
    detail: "Apply three drops, focusing on areas of concern.",
  },
  {
    time: "PM",
    step: "04",
    name: "Cloud Barrier Cream",
    duration: "30 sec",
    detail: "Seal the routine with a generous layer, neck included.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "My skin has never held moisture like this. The Cloud Barrier Cream changed how I think about winter skincare entirely.",
    name: "Amara O.",
    role: "Verified Buyer",
    rating: 5,
  },
  {
    quote:
      "Three weeks into the Bio-Renew Serum and colleagues are asking what changed. Subtle, but undeniable.",
    name: "Priya K.",
    role: "Verified Buyer",
    rating: 5,
  },
  {
    quote:
      "I have sensitive, reactive skin and this is the first 'active' serum that has never once made me flare up.",
    name: "Jonas M.",
    role: "Verified Buyer",
    rating: 5,
  },
  {
    quote:
      "The Dew Drop Essence is the closest thing to a filter in a bottle. Mornings feel effortless now.",
    name: "Sofia R.",
    role: "Verified Buyer",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How long until I see results?",
    answer:
      "Most people notice a difference in texture and hydration within one to two weeks. Visible changes in fine lines and tone typically emerge around four to six weeks of consistent use.",
  },
  {
    question: "Is EUDORA suitable for sensitive skin?",
    answer:
      "Yes. Every formula is fragrance-free at the core, dermatologist-tested, and free of known irritants like alcohol denat, synthetic dyes, and essential oil blends.",
  },
  {
    question: "Can I use these products while pregnant or nursing?",
    answer:
      "Our Cloud Barrier Cream, Dew Drop Essence, and Botanical Cleansing Oil are safe throughout pregnancy. We recommend consulting your physician before introducing the Bio-Renew Serum.",
  },
  {
    question: "What is your return policy?",
    answer:
      "If a formula isn't right for your skin, return it within 60 days of purchase for a full refund, no questions asked, even if the bottle is empty.",
  },
  {
    question: "Are your ingredients cruelty-free?",
    answer:
      "EUDORA is certified cruelty-free by Leaping Bunny and never tests on animals at any stage of formulation or production.",
  },
] as const;

export const instagramPosts = [
  { image: "/images/inst1.jpg", likes: "2,481" },
  { image: "/images/inst2.jpg", likes: "1,932" },
  { image: "/images/inst3.jpg", likes: "3,104" },
  { image: "/images/inst4.jpg", likes: "1,558" },
  { image: "/images/inst5.jpg", likes: "2,760" },
  { image: "/images/inst6.jpg", likes: "4,215" },
] as const;

export const navLinks = [
  { label: "Shop", href: "#products" },
  { label: "Benefits", href: "#benefits" },
  { label: "Ritual", href: "#routine" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Compnay Profile", href: "/companyProfile" },
] as const;
