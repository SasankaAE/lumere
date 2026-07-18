"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AgeTier, Category, Product } from "@/lib/shop-types";

interface ProductGridProps {
  products: Product[];
  activeCategoryMeta?: Category;
  activeTierMeta?: AgeTier;
  onAddToBag: (product: Product) => void;
}

export default function ProductGrid({
  products,
  activeCategoryMeta,
  activeTierMeta,
  onAddToBag,
}: ProductGridProps) {
  return (
    <>
      <div className="flex items-baseline justify-between mb-4">
        <h3 className="font-display text-lg text-[#2A3324]">
          {activeCategoryMeta?.label} · {activeTierMeta?.label}
        </h3>
        <span className="text-xs text-[#8A917E]">
          {products.length} products
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <Card key={p.id} className="border-[#DEDFD3] bg-white/80 overflow-hidden">
            <div className="relative h-32 bg-linear-to-br from-[#E7E9DE] to-[#D8DFC9]">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {p.tag && (
                <Badge className="absolute top-2 left-2 bg-white/90 text-[#2A3324] text-[10px]">
                  {p.tag}
                </Badge>
              )}
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#2A3324]">
                {p.name}
              </CardTitle>
              <CardDescription className="text-xs">
                {p.tagline ?? activeTierMeta?.range}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-between pt-0">
              <span className="font-mono text-sm text-[#2A3324]">
                {p.priceLabel}
              </span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => onAddToBag(p)}
                className="rounded-full border-[#B7BFA6] text-[#2A3324]"
              >
                Add
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}