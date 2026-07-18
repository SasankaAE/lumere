import { generatePlaceholderProducts, type PlaceholderNoun } from "./generate-placeholder";
import type { Product } from "../shop-types";

const HAIR_NOUNS: PlaceholderNoun[] = [
  { noun: "Shampoo", image: "/images/Shampoo.jpg" },
  { noun: "Hair Mask", image: "/images/Hair-Mask.jpg" },
  { noun: "Hair Oil", image: "/images/Hair-Oil.jpg" },
  { noun: "Conditioner", image: "/images/Conditioner.jpg" },
  { noun: "Hair Serum", image: "/images/Hair-Serum.jpg" },
  { noun: "Scalp Tonic", image: "/images/Scalp-Tonic.jpg" },
];

// Continues the sequence right after body.ts (18 + 24 items * 3 = 90).
// Consumes another 24 increments, ending at 90 + 72 = 162.
export function buildHairProducts(): Product[] {
  return generatePlaceholderProducts("hair", HAIR_NOUNS, 90);
}