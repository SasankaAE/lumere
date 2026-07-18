import { AGE_TIERS } from "@/lib/shop-meta";
import { parsePrice, type Product } from "@/lib/shop-types";

const SKIN_PRODUCTS = [
  {
    id: "01",
    name: "Bio-Renew Serum",
    tagline: "Overnight cellular repair",
    price: "LKR 2500",
    image: "/images/Bio-Renew Serum.jpg",
    tag: "Bestseller",
  },
  {
    id: "02",
    name: "Cloud Barrier Cream",
    tagline: "48-hour moisture lock",
    price: "LKR 2000",
    image: "/images/Cloud-Barrier-Cream.jpg",
    tag: "New",
  },
  {
    id: "03",
    name: "Dew Drop Essence",
    tagline: "Instant luminosity",
    price: "LKR 1500",
    image: "/images/Dewdrop-Essence.jpg",
    tag: "Editor's Pick",
  },
  {
    id: "04",
    name: "Botanical Cleansing Oil",
    tagline: "Gentle daily reset",
    price: "LKR 1000",
    image: "/images/Botanical-Cleansing-Oil.jpg",
    tag: "Cult Classic",
  },
  {
    id: "05",
    name: "Velvet Renewal Mask",
    tagline: "Weekly resurfacing ritual",
    price: "LKR 3000",
    image: "/images/Velvet-Renewal-Mask.jpg",
    tag: "New",
  },
  {
    id: "06",
    name: "Citrus Glow Toner",
    tagline: "Brightening first step",
    price: "LKR 1200",
    image: "/images/Citrus-Glow-Toner.jpg",
    tag: "Fan Favorite",
  },
] as const;

/**
 * Skin care's own product data lives here (not imported from
 * @/lib/data), matching how body.ts, hair.ts, and foot.ts each keep
 * their own local list. Every product is shown under every life
 * stage, so each tier's "Skin care" section displays all 6.
 */
export function buildSkinProducts(): Product[] {
  const products: Product[] = [];

  for (const tier of AGE_TIERS) {
    SKIN_PRODUCTS.forEach((item) => {
      products.push({
        id: `skin-${tier.key}-${item.id}`,
        category: "skin",
        tier: tier.key,
        name: item.name,
        tagline: item.tagline,
        tag: item.tag,
        image: item.image,
        price: parsePrice(item.price),
        priceLabel: item.price,
      });
    });
  }

  return products;
}