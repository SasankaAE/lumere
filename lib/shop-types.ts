import React from "react";

export type OrderTabKey = "to-pay" | "to-ship" | "to-receive" | "returns";
export type CategoryKey = "skin" | "body" | "hair" | "foot";
export type NonSkinCategoryKey = Exclude<CategoryKey, "skin">;
export type TierKey = "teen" | "divine" | "golden" | "timeless";

export interface OrderTab {
  key: OrderTabKey;
  label: string;
  icon: React.ElementType;
}

export interface OrderItem {
  id: string;
  item: string;
  qty: number;
  price: number;
  action: string;
}

export interface Category {
  key: CategoryKey;
  label: string;
  icon: React.ElementType;
}

export interface AgeTier {
  key: TierKey;
  label: string;
  range: string;
  icon: React.ElementType;
  prefix: string;
}

export interface Product {
  id: string;
  category: CategoryKey;
  tier: TierKey;
  name: string;
  tagline?: string;
  tag?: string;
  image?: string;
  price: number;
  priceLabel: string;
}

export interface BagItem extends Product {
  qty: number;
}

export function parsePrice(label: string | number): number {
  return parseInt(String(label).replace(/[^0-9]/g, ""), 10) || 0;
}