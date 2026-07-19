export type CategoryId = "skin" | "body" | "hair" | "foot";
export type TierId = "teen" | "divine" | "golden" | "timeless";
export type ProductKey = `${CategoryId}-${TierId}`;

export interface Product {
  name: string;
  desc: string;
  ingredients: string;
  benefits: string;
  price: number;
  image: string;
}

/* Each product's image points to a local file path following a
   simple convention: /images/products/<slug-of-name>.jpg
   Drop your real product photos into that folder using matching
   filenames and they'll appear automatically — no other code
   needs to change. Until a file exists at that path, the card
   falls back to the on-brand monogram tile (see ProductImage in
   BeautyCategories.tsx). */
export const slugify = (name: string): string =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const img = (name: string): string => `/images/products/${slugify(name)}.jpg`;

export const PRODUCTS: Record<ProductKey, Product[]> = {
  "skin-teen": [
    {
      name: "Eudora Lumière Cleanser",
      desc: "A gentle daily cleanser that clears without stripping",
      ingredients: "Ingredients: Salicylic acid (low %), Niacinamide, Aloe vera, Green tea extract, Vitamin B5 ",
      benefits: "Benefits: Clears excess oil and impurities, keeps pores clear, soothes redness without over-drying",
      price: 18,
      image: img("Eudora Lumière Cleanser"),
    },
    {
      name: "Eudora Rosée Toner",
      desc: "A light toning mist to balance and prep skin.",
      ingredients: "Ingredients: Witch hazel (alcohol-free), Niacinamide, Aloe vera, Vitamin B3",
      benefits: "Benefits: Balances oil production, minimizes the look of pores, preps skin to absorb the next steps better.",
      price: 16,
      image: img("Eudora Rosée Toner"),
    },
    {
      name: "Eudora Clarté Serum",
      desc: "A targeted serum for clarity and even tone.",
      ingredients: "Ingredients: Niacinamide, Vitamin C, Zinc PCA, Licorice root extract",
      benefits: "Benefits: Fades post-acne marks, brightens dull patches, controls shine, calms active breakouts",
      price: 16,
      image: img("Eudora Clarté Serum"),
    },
    {
      name: "Eudora Velours Moisturizer",
      desc: "A lightweight, oil-free daily moisturizer.",
      ingredients: "Ingredients: Hyaluronic acid, Vitamin E, Niacinamide, Centella asiatica, Ceramides",
      benefits: "Benefits: Deep hydration without heaviness, strengthens the skin barrier, calms irritation",
      price: 16,
      image: img("Eudora Velours Moisturizer"),
    },
    {
      name: "Eudora Éclat Suncream SPF 50",
      desc: "Daily, invisible-finish sun protection.",
      ingredients: "Ingredients: Vitamin C, Vitamin E, Zinc oxide, Niacinamide, Hyaluronic acid",
      benefits: "Benefits: No white cast, protects against dark spots and sun damage, doubles as light hydration",
      price: 16,
      image: img("Eudora Éclat Suncream SPF 50"),
    },
    {
      name: "Eudora Baume Lip Balm",
      desc: "A nourishing daily lip balm.",
      ingredients: "Ingredients: Shea butter, Vitamin E, Hyaluronic acid, Sunflower seed oil",
      benefits: "Benefits: Softens and protects lips, locks in moisture, light natural sheen.",
      price: 16,
      image: img("Eudora Baume Lip Balm"),
    },
  ],
  "skin-divine": [
    {
      name: "Eudora Pureté Gel Cleanser",
      desc: "A deeper daily cleanser with light exfoliation.",
      ingredients: "ngredients: Salicylic acid (higher %), Glycolic acid (low %), Niacinamide, Green tea extract",
      benefits: "Benefits: Clears pores more thoroughly, gently exfoliates dead skin, refines texture over time.",
      price: 34,
      image: img("Eudora Pureté Gel Cleanser"),
    },
    {
      name: "Eudora Renouveau Exfoliating Toner",
      desc: "An AHA/BHA toner for smoother, brighter skin.",
      ingredients: "Ingredients: Glycolic acid, Lactic acid, Salicylic acid, Niacinamide, Aloe vera",
      benefits: "Benefits: Resurfaces skin, fades dullness and rough texture, helps fade old acne scars and dark spots.",
      price: 29,
      image: img("Eudora Renouveau Exfoliating Toner"),
    },
    {
      name: "Eudora Éclat Vitamin C Serum",
      desc: "A high-strength brightening serum.",
      ingredients: "Ingredients: Vitamin C (15–20%), Vitamin E, Ferulic acid, Hyaluronic acid",
      benefits: "Benefits: Fades hyperpigmentation and dullness, boosts collagen, strong antioxidant defense against pollution/sun damage.",
      price: 29,
      image: img("Eudora Éclat Vitamin C Serum"),
    },
    {
      name: "Eudora Velours Moisturizer",
      desc: "A richer daily moisturizer for barrier support.",
      ingredients: "Ingredients: Hyaluronic acid, Ceramides, Vitamin E, Peptides, Squalane",
      benefits: "Benefits: Deep, lasting hydration, repairs barrier stressed by actives like retinol/AHA, keeps skin plump and resilient",
      price: 29,
      image: img("Eudora Velours Moisturizer Glow"),
    },
    {
      name: "Eudora Éclat Suncream SPF 50+",
      desc: "Daily broad-spectrum protection, formulated for melanin-rich skin.",
      ingredients: "Ingredients: Vitamin C, Vitamin E, Zinc oxide, Niacinamide, Hyaluronic acid",
      benefits: "Benefits: No white cast, prevents further pigmentation, protects skin actively renewing from retinol/acids.",
      price: 29,
      image: img("Eudora Éclat Suncream SPF 50+ skin"),
    },
    {
      name: "Eudora Contour Eye Cream",
      desc: "A targeted cream for the eye area.",
      ingredients: "Ingredients: Peptides, Caffeine, Hyaluronic acid, Vitamin E, Niacinamide",
      benefits: "Benefits: Reduces puffiness and dark circles, firms delicate skin, hydrates without creasing.",
      price: 29,
      image: img("Eudora Contour Eye Cream"),
    },
    {
      name: "Eudora Clarté Spot Treatment",
      desc: "A fast-acting treatment for occasional breakouts.",
      ingredients: "Ingredients: Salicylic acid, Niacinamide, Tea tree extract, Zinc PCA",
      benefits: "Benefits: Reduces blemishes quickly, controls oil, minimizes scarring risk.",
      price: 29,
      image: img("Eudora Clarté Spot Treatment"),
    },
    {
      name: "Eudora Brume Hydrating Mist",
      desc: "A setting and refreshing mist.",
      ingredients: "Ingredients: Rosewater, Hyaluronic acid, Niacinamide, Vitamin B5",
      benefits: "Benefits: Refreshes and re-hydrates through the day, helps actives absorb, calms redness from exfoliants.",
      price: 29,
      image: img("Eudora Brume Hydrating Mist"),
    },
    {
      name: "Eudora Baume Lip Treatment",
      desc: "A repairing lip balm with light plumping effect.",
      ingredients: "Ingredients: Shea butter, Peptides, Vitamin E, Hyaluronic acid",
      benefits: "Benefits: Softens, hydrates, and subtly plumps lips, protects against dryness from active skincare routines.",
      price: 29,
      image: img("Eudora Baume Lip Treatment"),
    },
  ],
  "skin-golden": [
    {
      name: "Renewal Nectar Serum",
      desc: "Peptide serum that firms and softens fine lines.",
      ingredients: "",
      benefits: "",
      price: 48,
      image: img("Renewal Nectar Serum"),
    },
    {
      name: "Aura Lift Cream",
      desc: "Rich night cream targeting early signs of aging.",
      ingredients: "",
      benefits: "",
      price: 52,
      image: img("Aura Lift Cream"),
    },
  ],
  "skin-timeless": [
    {
      name: "Silk Restore Elixir",
      desc: "Deep-repair facial oil for mature, delicate skin.",
      ingredients: "",
      benefits: "",
      price: 64,
      image: img("Silk Restore Elixir"),
    },
    {
      name: "Grace Barrier Balm",
      desc: "Ceramide-rich balm that rebuilds the skin barrier.",
      ingredients: "",
      benefits: "",
      price: 58,
      image: img("Grace Barrier Balm"),
    },
  ],
  "body-teen": [
    {
      name: "Fresh Bloom Body Wash",
      desc: "Gentle citrus wash that keeps skin fresh, not dry.",
      ingredients: "",
      benefits: "",
      price: 14,
      image: img("Fresh Bloom Body Wash"),
    },
    {
      name: "Citrus Balance Lotion",
      desc: "Fast-absorbing lotion for active, everyday days.",
      ingredients: "",
      benefits: "",
      price: 16,
      image: img("Citrus Balance Lotion"),
    },
  ],
  "body-divine": [
    {
      name: "Silk Bloom Body Butter",
      desc: "Whipped butter that softens without feeling heavy.",
      ingredients: "",
      benefits: "",
      price: 26,
      image: img("Silk Bloom Body Butter"),
    },
    {
      name: "Radiance Body Oil",
      desc: "Dry oil that leaves a soft, healthy sheen.",
      ingredients: "",
      benefits: "",
      price: 24,
      image: img("Radiance Body Oil"),
    },
  ],
  "body-golden": [
    {
      name: "Firming Gold Cream",
      desc: "Elasticity-support cream for décolletage & body.",
      ingredients: "",
      benefits: "",
      price: 36,
      image: img("Firming Gold Cream"),
    },
    {
      name: "Contour Renewal Scrub",
      desc: "Exfoliating scrub that smooths and refines texture.",
      ingredients: "",
      benefits: "",
      price: 30,
      image: img("Contour Renewal Scrub"),
    },
  ],
  "body-timeless": [
    {
      name: "Nourish Deep Balm",
      desc: "Rich, slow-melt balm for very dry mature skin.",
      ingredients: "",
      benefits: "",
      price: 42,
      image: img("Nourish Deep Balm"),
    },
    {
      name: "Velvet Repair Butter",
      desc: "Overnight butter for elbows, knees & heels.",
      ingredients: "",
      benefits: "",
      price: 40,
      image: img("Velvet Repair Butter"),
    },
  ],
  "hair-teen": [
    {
      name: "Clarity Shampoo",
      desc: "Balances oily roots without drying the lengths.",
      ingredients: "",
      benefits: "",
      price: 15,
      image: img("Clarity Shampoo"),
    },
    {
      name: "Light Bloom Conditioner",
      desc: "Weightless conditioner for fine, young hair.",
      ingredients: "",
      benefits: "",
      price: 15,
      image: img("Light Bloom Conditioner"),
    },
  ],
  "hair-divine": [
    {
      name: "Glow Shine Serum",
      desc: "Frizz-taming serum with a glassy finish.",
      ingredients: "",
      benefits: "",
      price: 22,
      image: img("Glow Shine Serum"),
    },
    {
      name: "Hydra Bloom Mask",
      desc: "Weekly mask for soft, bouncy strands.",
      ingredients: "",
      benefits: "",
      price: 26,
      image: img("Hydra Bloom Mask"),
    },
  ],
  "hair-golden": [
    {
      name: "Strength Renewal Oil",
      desc: "Fortifying oil for thinning or brittle strands.",
      ingredients: "",
      benefits: "",
      price: 32,
      image: img("Strength Renewal Oil"),
    },
    {
      name: "Volume Revive Shampoo",
      desc: "Builds body back into flattened, tired hair.",
      ingredients: "",
      benefits: "",
      price: 28,
      image: img("Volume Revive Shampoo"),
    },
  ],
  "hair-timeless": [
    {
      name: "Silver Grace Shampoo",
      desc: "Brightens grey and silver tones, no yellowing.",
      ingredients: "",
      benefits: "",
      price: 34,
      image: img("Silver Grace Shampoo"),
    },
    {
      name: "Deep Restore Mask",
      desc: "Intensive mask for dry, mature hair.",
      ingredients: "",
      benefits: "",
      price: 38,
      image: img("Deep Restore Mask"),
    },
  ],
  "foot-teen": [
    {
      name: "Fresh Step Scrub",
      desc: "Light exfoliant for smooth, active feet.",
      ingredients: "",
      benefits: "",
      price: 12,
      image: img("Fresh Step Scrub"),
    },
    {
      name: "Cooling Foot Gel",
      desc: "Refreshing gel for feet on the move.",
      ingredients: "",
      benefits: "",
      price: 13,
      image: img("Cooling Foot Gel"),
    },
  ],
  "foot-divine": [
    {
      name: "Soft Bloom Foot Cream",
      desc: "Daily cream that keeps soles soft & smooth.",
      ingredients: "",
      benefits: "",
      price: 18,
      image: img("Soft Bloom Foot Cream"),
    },
    {
      name: "Silk Sole Balm",
      desc: "Overnight balm for silky, cared-for feet.",
      ingredients: "",
      benefits: "",
      price: 19,
      image: img("Silk Sole Balm"),
    },
  ],
  "foot-golden": [
    {
      name: "Renewal Heel Butter",
      desc: "Rich butter for hard-working, tired heels.",
      ingredients: "",
      benefits: "",
      price: 22,
      image: img("Renewal Heel Butter"),
    },
    {
      name: "Golden Sole Repair",
      desc: "Repair cream for cracks and rough patches.",
      ingredients: "",
      benefits: "",
      price: 24,
      image: img("Golden Sole Repair"),
    },
  ],
  "foot-timeless": [
    {
      name: "Deep Comfort Balm",
      desc: "Cushioning balm for sensitive mature skin.",
      ingredients: "",
      benefits: "",
      price: 26,
      image: img("Deep Comfort Balm"),
    },
    {
      name: "Timeless Sole Elixir",
      desc: "Restorative oil blend for very dry feet.",
      ingredients: "",
      benefits: "",
      price: 28,
      image: img("Timeless Sole Elixir"),
    },
  ],
};
