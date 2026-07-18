"use client";
import React from "react";
import { CATEGORIES } from "@/lib/shop-meta";
import type { CategoryKey } from "@/lib/shop-types";

interface CategorySelectorProps {
  category: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

export default function CategorySelector({
  category,
  onCategoryChange,
}: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
      {CATEGORIES.map(({ key, label, icon: Icon }) => {
        const active = key === category;
        return (
          <button
            key={key}
            onClick={() => onCategoryChange(key)}
            className={`rounded-2xl border p-4 text-left transition-colors ${
              active
                ? "bg-[#2A3324] border-[#2A3324] text-[#F5F6F1]"
                : "bg-white border-[#DEDFD3] text-[#2A3324] hover:border-[#B7BFA6]"
            }`}
          >
            <Icon
              className={`w-5 h-5 mb-3 ${active ? "text-[#D8DFC9]" : "text-[#6B7A5E]"}`}
            />
            <p className="font-display text-base">{label}</p>
          </button>
        );
      })}
    </div>
  );
}