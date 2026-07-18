import { buildSkinProducts } from "./skin";
import { buildBodyProducts } from "./body";
import { buildHairProducts } from "./hair";
import { buildFootProducts } from "./foot";
import type { Product } from "@/lib/shop-types";

export function buildProducts(): Product[] {
  return [
    ...buildSkinProducts(),
    ...buildBodyProducts(),
    ...buildHairProducts(),
    ...buildFootProducts(),
  ];
}

export const PRODUCTS = buildProducts();