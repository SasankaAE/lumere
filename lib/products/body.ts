import { generatePlaceholderProducts, type PlaceholderNoun } from "./generate-placeholder";
import type { Product } from "../shop-types";

const BODY_NOUNS: PlaceholderNoun[] = [
  { noun: "Body Butter", image: "/images/Body-Butter.jpg" },
  { noun: "Body Scrub", image: "/images/Body-Scrub.jpg" },
  { noun: "Body Oil", image: "/images/Body-Oil.jpg" },
  { noun: "Body Lotion", image: "/images/Body-Lotion.jpg" },
  { noun: "Body Wash", image: "/images/Body-Wash.jpg" },
  { noun: "Body Mist", image: "/images/Body-Mist.jpg" },
];

// Starts at 18 - first category in the price sequence.
// Consumes 4 tiers * 6 nouns = 24 increments, ending at 18 + 24*3 = 90.
export function buildBodyProducts(): Product[] {
  return generatePlaceholderProducts("body", BODY_NOUNS, 18);
}