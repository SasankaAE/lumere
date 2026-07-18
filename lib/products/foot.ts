import { generatePlaceholderProducts, type PlaceholderNoun } from "./generate-placeholder";
import type { Product } from "../shop-types";

const FOOT_NOUNS: PlaceholderNoun[] = [
  { noun: "Foot Cream", image: "/images/Foot-Cream.jpg" },
  { noun: "Foot Scrub", image: "/images/Foot-Scrub.jpg" },
  { noun: "Foot Soak", image: "/images/Foot-Soak.jpg" },
  { noun: "Foot Balm", image: "/images/Foot-Balm.jpg" },
  { noun: "Foot Spray", image: "/images/Foot-Spray.jpg" },
  { noun: "Foot Mask", image: "/images/Foot-Mask.jpg" },
];

// Continues the sequence right after hair.ts (90 + 24 items * 3 = 162).
export function buildFootProducts(): Product[] {
  return generatePlaceholderProducts("foot", FOOT_NOUNS, 162);
}