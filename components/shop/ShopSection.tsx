"use client";
import React, { useState, useMemo } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag } from "lucide-react";

import { PRODUCTS } from "@/lib/products";
import { CATEGORIES, AGE_TIERS } from "@/lib/shop-meta";
import type { CategoryKey, TierKey, OrderTabKey, Product, BagItem } from "@/lib/shop-types";

import OrdersSection from "./OrdersSection";
import CategorySelector from "./CategorySelector";
import LifeStageSelector from "./LifeStageSelector";
import ProductGrid from "./ProductGrid";
import BagDrawer from "./BagDrawer";

export default function ShopSection() {
  const [orderTab, setOrderTab] = useState<OrderTabKey>("to-pay");
  const [category, setCategory] = useState<CategoryKey>("skin");
  const [tier, setTier] = useState<TierKey>("divine");
  const [bagOpen, setBagOpen] = useState(false);
  const [bagItems, setBagItems] = useState<BagItem[]>([]);

  const visibleProducts = useMemo<Product[]>(
    () => PRODUCTS.filter((p) => p.category === category && p.tier === tier),
    [category, tier],
  );

  const activeTierMeta = AGE_TIERS.find((t) => t.key === tier);
  const activeCategoryMeta = CATEGORIES.find((c) => c.key === category);

  const bagCount = bagItems.reduce((sum, item) => sum + item.qty, 0);
  const bagTotal = bagItems.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  const addToBag = (product: Product): void => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setBagOpen(true);
  };

  const removeFromBag = (id: string): void => {
    setBagItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-[#F5F6F1] text-[#23281F]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
        .font-display { font-family: 'Fraunces', serif; }
        .font-body { font-family: 'Manrope', sans-serif; }
        .font-mono { font-family: 'IBM Plex Mono', monospace; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 py-10 font-body">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-[#6B7A5E] mb-1">
              Terra &amp; Bloom
            </p>
            <h1 className="font-display text-3xl font-medium text-[#2A3324]">
              Your account
            </h1>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setBagOpen(true)}
            className="relative h-10 w-10 rounded-full border-[#DEDFD3] bg-white p-0 hover:bg-[#E7E9DE]"
            aria-label="Open shopping bag"
          >
            <ShoppingBag className="w-5 h-5 text-[#2A3324]" />
            {bagCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 rounded-full bg-[#B08D57] text-white text-[10px] flex items-center justify-center">
                {bagCount}
              </Badge>
            )}
          </Button>
        </div>

        <OrdersSection orderTab={orderTab} onOrderTabChange={setOrderTab} />

        <Separator className="mb-14 bg-[#DEDFD3]" />

        {/* Shop section */}
        <section>
          <h2 className="font-display text-xl font-medium mb-1 text-[#2A3324]">
            Shop by category
          </h2>
          <p className="text-sm text-[#6B7A5E] mb-6">
            Care, matched to where you are right now.
          </p>

          <CategorySelector category={category} onCategoryChange={setCategory} />
          <LifeStageSelector tier={tier} onTierChange={setTier} />

          <ProductGrid
            products={visibleProducts}
            activeCategoryMeta={activeCategoryMeta}
            activeTierMeta={activeTierMeta}
            onAddToBag={addToBag}
          />
        </section>
      </div>

      <BagDrawer
        open={bagOpen}
        onOpenChange={setBagOpen}
        bagItems={bagItems}
        bagTotal={bagTotal}
        onRemoveItem={removeFromBag}
      />
    </div>
  );
}