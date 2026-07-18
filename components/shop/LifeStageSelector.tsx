"use client";
import React from "react";
import { AGE_TIERS } from "@/lib/shop-meta";
import type { TierKey } from "@/lib/shop-types";

interface LifeStageSelectorProps {
  tier: TierKey;
  onTierChange: (tier: TierKey) => void;
}

export default function LifeStageSelector({
  tier,
  onTierChange,
}: LifeStageSelectorProps) {
  return (
    <div className="mb-10">
      <p className="text-xs tracking-[0.15em] uppercase text-[#6B7A5E] mb-4">
        Life stage
      </p>
      <div className="relative">
        <div className="absolute left-0 right-0 top-5 h-px bg-[#DEDFD3]" />
        <div className="relative grid grid-cols-4 gap-2">
          {AGE_TIERS.map(({ key, label, range, icon: Icon }) => {
            const active = key === tier;
            return (
              <button
                key={key}
                onClick={() => onTierChange(key)}
                className="flex flex-col items-center gap-2 group"
              >
                <span
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                    active
                      ? "bg-[#B08D57] border-[#B08D57] text-white"
                      : "bg-[#F5F6F1] border-[#DEDFD3] text-[#8A917E] group-hover:border-[#B08D57]"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span
                  className={`text-xs font-medium text-center ${
                    active ? "text-[#2A3324]" : "text-[#8A917E]"
                  }`}
                >
                  {label}
                </span>
                <span className="text-[10px] font-mono text-[#8A917E]">
                  {range}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}