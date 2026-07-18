import { AGE_TIERS } from "../shop-meta";
import type { Product, NonSkinCategoryKey } from "../shop-types";

export interface PlaceholderNoun {
  noun: string;
  image: string;
}

/**
 * Generates placeholder products for a non-skin category until real
 * SKUs exist. `startSeed` lets each category continue the price
 * sequence from the previous category (body -> hair -> foot) so
 * values don't collide. Pass exactly 6 nouns so every tier ends up
 * with 6 products, matching the skin category.
 */
export function generatePlaceholderProducts(
  categoryKey: NonSkinCategoryKey,
  nouns: PlaceholderNoun[],
  startSeed: number,
): Product[] {
  const products: Product[] = [];
  let priceSeed = startSeed;

  for (const tier of AGE_TIERS) {
    nouns.forEach(({ noun, image }, i) => {
      priceSeed += 3;
      const price = (16 + (priceSeed % 27)) * 100;
      products.push({
        id: `${categoryKey}-${tier.key}-${i}`,
        category: categoryKey,
        tier: tier.key,
        name: `${tier.prefix} ${noun}`,
        image,
        price,
        priceLabel: `LKR ${price}`,
      });
    });
  }

  return products;
}