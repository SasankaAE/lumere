export const products = [
  {
    id: "01",
    name: "Skin Care",
    volume: "30ml",
    image: "/images/Eudora-Skin-Care.jpg",
    description:
      "Revitalize your skin with personalized treatments that cleanse, nourish, and restore a healthy, radiant glow.",
    tag: "Eudora Skin Care",
  },
  {
    id: "02",
    name: "Body Care",
    volume: "50ml",
    image: "/images/Eudora-Body-Care.jpg",
    description:
      "Relax and refresh with luxurious body treatments designed to hydrate, rejuvenate, and enhance your overall well-being.",
    tag: "Eudora Body Care",
  },
  {
    id: "03",
    name: "Hair Care",
    image: "/images/Eudora-Hair-Care.jpg",
    description:
      "Restore strength and shine with professional hair treatments tailored to keep your hair healthy, smooth, and beautiful.",
    tag: "Eudora Hair Care",
  },
  {
    id: "04",
    name: "Foot Care",
    image: "/images/Eudora-Foot-Care.jpg",
    description:
      "Pamper your feet with soothing treatments that relieve fatigue, soften skin, and promote lasting comfort and wellness.",
    tag: "Eudora Foot Care",
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

export const offers = [
  {
    name: "Welcome Voucher",
    origin: "First-time customers",
    benefit: "Get 15% off your first order with code WELCOME15 at checkout.",
    image: "/images/Voucher.jpg",
  },
  {
    name: "Gift Pack Bundle",
    origin: "Curated 4-piece set",
    benefit: "Save 20% when you bundle four best-selling actives together.",
    image: "/images/GiftPack.jpg",
  },
  {
    name: "Refer a Friend",
    origin: "Loyalty rewards",
    benefit:
      "Earn a $10 credit for every friend who makes their first purchase.",
    image: "/images/Referral.jpg",
  },
  {
    name: "Seasonal Discount",
    origin: "Limited-time offer",
    benefit: "Enjoy 25% off site-wide during our seasonal skincare edit.",
    image: "/images/Seasonal.jpg",
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
  { label: "Offers", href: "#offers" },
  { label: "Ritual", href: "#routine" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Gallery", href: "#gallery" },
  { label: "Compnay Profile", href: "/companyProfile" },
] as const;
