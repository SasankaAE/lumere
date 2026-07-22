"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Sparkles,
  Droplets,
  Scissors,
  Footprints,
  Leaf,
  Layers,
} from "lucide-react";
import {
  PRODUCTS,
  EUDORA_PRODUCTS,
  type ProductKey,
  type EudoraSubId,
} from "@/lib/products";

/* ---------------------------------------------------------
   Design tokens
   Ivory + botanical-plum palette. The signature element is a
   4-petal "bloom" mark: the number of filled petals encodes
   the life-stage tier (1 = youngest, 4 = most mature) — a
   real progression, not decoration.
--------------------------------------------------------- */

const INK = "#2B2420";
const CREAM = "#FBF7F1";

const CATEGORIES = [
  {
    id: "skin",
    label: "Skin Care",
    icon: Sparkles,
    tag: "For your face & complexion",
  },
  {
    id: "body",
    label: "Body Care",
    icon: Droplets,
    tag: "For skin, head to toe",
  },
  {
    id: "hair",
    label: "Hair Care",
    icon: Scissors,
    tag: "For strands & scalp",
  },
  {
    id: "foot",
    label: "Foot Care",
    icon: Footprints,
    tag: "For soles & soft skin",
  },
];

const TIERS = [
  {
    id: "teen",
    label: "Teen Angels",
    age: "15–18",
    stage: 1,
    color: "#E8A6B8",
    soft: "#FBEAF0",
    focus: "Balance & clarity",
  },
  {
    id: "divine",
    label: "Divine Femininity",
    age: "19–25",
    stage: 2,
    color: "#C4577E",
    soft: "#F7E4EC",
    focus: "Hydration & glow",
  },
  {
    id: "golden",
    label: "Golden Aura",
    age: "25–45",
    stage: 3,
    color: "#C9963F",
    soft: "#F7ECD6",
    focus: "Renewal & firmness",
  },
  {
    id: "timeless",
    label: "Timeless Grace",
    age: "45+",
    stage: 4,
    color: "#6B2E42",
    soft: "#EFE1E5",
    focus: "Nourish & restore",
  },
];

/* Eudora Naturals — type-based subcategories, no age tier. */
const EUDORA_SUBCATEGORIES: {
  id: EudoraSubId;
  label: string;
  icon: typeof Leaf;
  tag: string;
  color: string;
  soft: string;
}[] = [
  {
    id: "sheet-mask",
    label: "Sheet Masks",
    icon: Layers,
    tag: "Single-use botanical masks",
    color: "#2F8F6E",
    soft: "#E3F3EC",
  },
  {
    id: "face-scrub",
    label: "Face Scrub",
    icon: Leaf,
    tag: "Natural exfoliation",
    color: "#B5652F",
    soft: "#F5E6D8",
  },
];

function BloomMark({ stage, color, size = 22 }: { stage: number; color: string; size?: number }) {
  const petals = [0, 90, 180, 270];
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="20" r="3.5" fill={color} />
      {petals.map((angle, i) => {
        const filled = i < stage;
        const rad = (angle * Math.PI) / 180;
        const cx = 20 + Math.cos(rad) * 11;
        const cy = 20 + Math.sin(rad) * 11;
        return (
          <ellipse
            key={angle}
            cx={cx}
            cy={cy}
            rx="6.5"
            ry="4.2"
            transform={`rotate(${angle} ${cx} ${cy})`}
            fill={filled ? color : "none"}
            stroke={color}
            strokeWidth="1.3"
            opacity={filled ? 0.9 : 0.55}
          />
        );
      })}
    </svg>
  );
}

function ProductImage({
  name,
  color,
  image,
}: {
  name: string;
  color: string;
  image?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  const [failed, setFailed] = useState(false);

  if (image && !failed) {
    return (
      <div
        className="aspect-square w-full overflow-hidden rounded-t-lg"
        style={{ background: `${color}22` }}
      >
        <img
          src={image}
          alt={name}
          onError={() => setFailed(true)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="aspect-square w-full flex items-center justify-center rounded-t-lg"
      style={{
        background: `linear-gradient(160deg, ${color}22, ${color}55)`,
      }}
    >
      <span
        className="font-serif tracking-wide"
        style={{
          color,
          fontSize: 34,
          fontWeight: 600,
          letterSpacing: "0.04em",
        }}
      >
        {initials}
      </span>
    </div>
  );
}

const TAG_COLORS: Record<string, { bg: string; color: string; border: string }> = {
  Morning: { bg: "#E6F4EA", color: "#2E7D46", border: "#2E7D46" },
  Evening: { bg: "#E5EEFB", color: "#2A5DB0", border: "#2A5DB0" },
  Anytime: { bg: "#FFFFFF", color: "#6B5E52", border: "#D8CFC3" },
};

function getTagStyle(tag: string) {
  return TAG_COLORS[tag] ?? TAG_COLORS.Anytime;
}

/* Shared product card — used by both the life-stage grid and
   the Eudora Naturals grid so markup isn't duplicated. */
function ProductCard({
  p,
  accentColor,
  accentSoft,
  accentLabel,
}: {
  p: (typeof PRODUCTS)[ProductKey][number];
  accentColor: string;
  accentSoft: string;
  accentLabel: string;
}) {
  return (
    <Card
      className="overflow-hidden border"
      style={{ borderColor: "#E4DACE", background: "white" }}
    >
      <ProductImage name={p.name} color={accentColor} image={p.image} />
      <CardHeader className="pb-2">
        <CardTitle className="font-serif text-lg" style={{ color: INK }}>
          {p.name}
        </CardTitle>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.desc}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.ingredients}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.benefits}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.oily}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.dry}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.normal}
        </CardDescription>
        <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
          {p.combination}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <Badge
          variant="secondary"
          className="text-[10px] font-normal mr-3"
          style={{ background: accentSoft, color: accentColor }}
        >
          {accentLabel}
        </Badge>
        <Badge
          variant="secondary"
          className="text-[10px] font-normal"
          style={{
            background: getTagStyle(String(p.tag)).bg,
            color: getTagStyle(String(p.tag)).color,
            borderColor: getTagStyle(String(p.tag)).border,
          }}
        >
          {p.tag}
        </Badge>
      </CardContent>
      <CardFooter className="flex items-center justify-between pt-0 ">
        <span className="font-display text-xl mt-4" style={{ color: INK }}>
          LKR {p.price}
        </span>
        <Button
          size="sm"
          style={{ background: INK, color: CREAM }}
          className="rounded-full hover:opacity-90 mt-4"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function BeautyCategories() {
  // Top-level: life-stage lines (skin/body/hair/foot × age tier)
  // vs. Eudora Naturals (sheet masks / face scrub, no age tier).
  const [section, setSection] = useState<"lifestage" | "eudora">("lifestage");

  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [tier, setTier] = useState(TIERS[0].id);
  const [eudoraSub, setEudoraSub] = useState<EudoraSubId>("sheet-mask");

  const activeCategory = CATEGORIES.find((c) => c.id === category);
  const activeTier = TIERS.find((t) => t.id === tier) ?? TIERS[0];
  const products = PRODUCTS[`${category}-${tier}` as ProductKey] || [];

  const activeEudoraSub =
    EUDORA_SUBCATEGORIES.find((s) => s.id === eudoraSub) ?? EUDORA_SUBCATEGORIES[0];
  const eudoraProducts = EUDORA_PRODUCTS[eudoraSub] || [];

  return (
    <div
      style={{
        background: CREAM,
        color: INK,
        fontFamily: "'Inter', ui-sans-serif, sans-serif",
      }}
      className="w-full min-h-full px-6 py-10 md:px-12"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@400;500;600&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}</style>

      {/* Header */}
      <div className="mb-8 max-w-2xl">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-2"
          style={{ color: "#8A6A5A" }}
        >
          Categories
        </p>
        <h1
          className="font-serif text-4xl md:text-5xl mb-2"
          style={{ color: INK }}
        >
          Care, arranged by chapter
        </h1>
        <p className="text-sm md:text-base" style={{ color: "#5C5147" }}>
          Every category unfolds into four collections, one for each stage of
          life — from Teen Angels to Timeless Grace. Eudora Naturals sits
          alongside, sorted by product type instead.
        </p>
      </div>

      {/* Section switch: Life Stage vs Eudora Naturals */}
      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setSection("lifestage")}
          className="rounded-full border px-4 py-2 text-sm transition-colors"
          style={{
            borderColor: section === "lifestage" ? INK : "#E4DACE",
            background: section === "lifestage" ? INK : "white",
            color: section === "lifestage" ? CREAM : INK,
          }}
        >
          By Life Stage
        </button>
        <button
          onClick={() => setSection("eudora")}
          className="rounded-full border px-4 py-2 text-sm transition-colors"
          style={{
            borderColor: section === "eudora" ? "#2F8F6E" : "#E4DACE",
            background: section === "eudora" ? "#2F8F6E" : "white",
            color: section === "eudora" ? CREAM : INK,
          }}
        >
          Eudora Naturals
        </button>
      </div>

      {/* ---------------- LIFE STAGE SECTION (unchanged behavior) ---------------- */}
      {section === "lifestage" && (
        <>
          {/* Main category tabs */}
          <Tabs value={category} onValueChange={setCategory} className="mb-8">
            <TabsList className="h-auto w-full flex flex-wrap gap-2 bg-transparent p-0 mb-3">
              {CATEGORIES.map((c) => {
                const Icon = c.icon;
                const active = c.id === category;
                return (
                  <TabsTrigger
                    key={c.id}
                    value={c.id}
                    className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm data-[state=active]:shadow-none"
                    style={{
                      borderColor: active ? INK : "#E4DACE",
                      background: active ? INK : "white",
                      color: active ? CREAM : INK,
                    }}
                  >
                    <Icon size={15} />
                    {c.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>

          <p className="text-sm mb-6" style={{ color: "#8A6A5A" }}>
            {activeCategory?.tag ?? ""}
          </p>

          {/* Age-tier collections */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {TIERS.map((t) => {
              const active = t.id === tier;
              return (
                <button
                  key={t.id}
                  onClick={() => setTier(t.id)}
                  className="text-left rounded-xl border px-4 py-4 transition-colors"
                  style={{
                    borderColor: active ? t.color : "#E4DACE",
                    background: active ? t.soft : "white",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <BloomMark stage={t.stage} color={t.color} />
                    <Badge
                      variant="outline"
                      className="text-[10px] font-normal"
                      style={{ borderColor: t.color, color: t.color }}
                    >
                      Age {t.age}
                    </Badge>
                  </div>
                  <div
                    className="font-serif text-lg leading-tight"
                    style={{ color: INK }}
                  >
                    {t.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#8A6A5A" }}>
                    {t.focus}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Products */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-serif text-2xl" style={{ color: INK }}>
              {activeCategory?.label ?? ""} · {activeTier?.label ?? ""}
            </h2>
            <span className="text-xs" style={{ color: "#8A6A5A" }}>
              {products.length} products
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p) => (
              <ProductCard
                key={p.name}
                p={p}
                accentColor={activeTier.color}
                accentSoft={activeTier.soft}
                accentLabel={activeTier.label}
              />
            ))}
          </div>
        </>
      )}

      {/* ---------------- EUDORA NATURALS SECTION (type-based, no age) ---------------- */}
      {section === "eudora" && (
        <>
          <p className="text-sm mb-6" style={{ color: "#8A6A5A" }}>
            Botanical extras, sorted by product type — not by age.
          </p>

          {/* Subcategory tabs: Sheet Masks / Face Scrub */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            {EUDORA_SUBCATEGORIES.map((s) => {
              const Icon = s.icon;
              const active = s.id === eudoraSub;
              return (
                <button
                  key={s.id}
                  onClick={() => setEudoraSub(s.id)}
                  className="text-left rounded-xl border px-4 py-4 transition-colors"
                  style={{
                    borderColor: active ? s.color : "#E4DACE",
                    background: active ? s.soft : "white",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon size={20} color={s.color} />
                  </div>
                  <div
                    className="font-serif text-lg leading-tight"
                    style={{ color: INK }}
                  >
                    {s.label}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "#8A6A5A" }}>
                    {s.tag}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Products — filtered strictly by subcategory, no age tier involved */}
          <div className="flex items-baseline justify-between mb-4">
            <h2 className="font-serif text-2xl" style={{ color: INK }}>
              Eudora Naturals · {activeEudoraSub.label}
            </h2>
            <span className="text-xs" style={{ color: "#8A6A5A" }}>
              {eudoraProducts.length} products
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {eudoraProducts.map((p) => (
              <ProductCard
                key={p.name}
                p={p}
                accentColor={activeEudoraSub.color}
                accentSoft={activeEudoraSub.soft}
                accentLabel={activeEudoraSub.label}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}