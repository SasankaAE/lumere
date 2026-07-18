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
import { Sparkles, Droplets, Scissors, Footprints } from "lucide-react";

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

type CategoryId = (typeof CATEGORIES)[number]["id"];
type TierId = (typeof TIERS)[number]["id"];
type ProductKey = `${CategoryId}-${TierId}`;

/* Each product's image points to a local file path following a
   simple convention: /images/products/<slug-of-name>.jpg
   Drop your real product photos into that folder using matching
   filenames and they'll appear automatically — no other code
   needs to change. Until a file exists at that path, the card
   falls back to the on-brand monogram tile (see ProductImage). */
interface SlugifyFn {
  (name: string): string;
}

const slugify: SlugifyFn = (name) =>
  name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const img = (name: string): string => `/images/products/${slugify(name)}.jpg`;

const PRODUCTS: Record<
  ProductKey,
  { name: string; desc: string; price: number; image: string }[]
> = {
  "skin-teen": [
    {
      name: "Clear Bloom Cleanser",
      desc: "Oil-balancing gel wash for breakout-prone skin.",
      price: 18,
      image: img("Clear Bloom Cleanser"),
    },
    {
      name: "Matte Petal Toner",
      desc: "Witch-hazel toner that refines pores without stripping.",
      price: 16,
      image: img("Matte Petal Toner"),
    },
  ],
  "skin-divine": [
    {
      name: "Dew Drop Serum",
      desc: "Hyaluronic serum for all-day plump hydration.",
      price: 34,
      image: img("Dew Drop Serum"),
    },
    {
      name: "Glow Veil Moisturizer",
      desc: "Lightweight cream for a natural, luminous finish.",
      price: 29,
      image: img("Glow Veil Moisturizer"),
    },
  ],
  "skin-golden": [
    {
      name: "Renewal Nectar Serum",
      desc: "Peptide serum that firms and softens fine lines.",
      price: 48,
      image: img("Renewal Nectar Serum"),
    },
    {
      name: "Aura Lift Cream",
      desc: "Rich night cream targeting early signs of aging.",
      price: 52,
      image: img("Aura Lift Cream"),
    },
  ],
  "skin-timeless": [
    {
      name: "Silk Restore Elixir",
      desc: "Deep-repair facial oil for mature, delicate skin.",
      price: 64,
      image: img("Silk Restore Elixir"),
    },
    {
      name: "Grace Barrier Balm",
      desc: "Ceramide-rich balm that rebuilds the skin barrier.",
      price: 58,
      image: img("Grace Barrier Balm"),
    },
  ],
  "body-teen": [
    {
      name: "Fresh Bloom Body Wash",
      desc: "Gentle citrus wash that keeps skin fresh, not dry.",
      price: 14,
      image: img("Fresh Bloom Body Wash"),
    },
    {
      name: "Citrus Balance Lotion",
      desc: "Fast-absorbing lotion for active, everyday days.",
      price: 16,
      image: img("Citrus Balance Lotion"),
    },
  ],
  "body-divine": [
    {
      name: "Silk Bloom Body Butter",
      desc: "Whipped butter that softens without feeling heavy.",
      price: 26,
      image: img("Silk Bloom Body Butter"),
    },
    {
      name: "Radiance Body Oil",
      desc: "Dry oil that leaves a soft, healthy sheen.",
      price: 24,
      image: img("Radiance Body Oil"),
    },
  ],
  "body-golden": [
    {
      name: "Firming Gold Cream",
      desc: "Elasticity-support cream for décolletage & body.",
      price: 36,
      image: img("Firming Gold Cream"),
    },
    {
      name: "Contour Renewal Scrub",
      desc: "Exfoliating scrub that smooths and refines texture.",
      price: 30,
      image: img("Contour Renewal Scrub"),
    },
  ],
  "body-timeless": [
    {
      name: "Nourish Deep Balm",
      desc: "Rich, slow-melt balm for very dry mature skin.",
      price: 42,
      image: img("Nourish Deep Balm"),
    },
    {
      name: "Velvet Repair Butter",
      desc: "Overnight butter for elbows, knees & heels.",
      price: 40,
      image: img("Velvet Repair Butter"),
    },
  ],
  "hair-teen": [
    {
      name: "Clarity Shampoo",
      desc: "Balances oily roots without drying the lengths.",
      price: 15,
      image: img("Clarity Shampoo"),
    },
    {
      name: "Light Bloom Conditioner",
      desc: "Weightless conditioner for fine, young hair.",
      price: 15,
      image: img("Light Bloom Conditioner"),
    },
  ],
  "hair-divine": [
    {
      name: "Glow Shine Serum",
      desc: "Frizz-taming serum with a glassy finish.",
      price: 22,
      image: img("Glow Shine Serum"),
    },
    {
      name: "Hydra Bloom Mask",
      desc: "Weekly mask for soft, bouncy strands.",
      price: 26,
      image: img("Hydra Bloom Mask"),
    },
  ],
  "hair-golden": [
    {
      name: "Strength Renewal Oil",
      desc: "Fortifying oil for thinning or brittle strands.",
      price: 32,
      image: img("Strength Renewal Oil"),
    },
    {
      name: "Volume Revive Shampoo",
      desc: "Builds body back into flattened, tired hair.",
      price: 28,
      image: img("Volume Revive Shampoo"),
    },
  ],
  "hair-timeless": [
    {
      name: "Silver Grace Shampoo",
      desc: "Brightens grey and silver tones, no yellowing.",
      price: 34,
      image: img("Silver Grace Shampoo"),
    },
    {
      name: "Deep Restore Mask",
      desc: "Intensive mask for dry, mature hair.",
      price: 38,
      image: img("Deep Restore Mask"),
    },
  ],
  "foot-teen": [
    {
      name: "Fresh Step Scrub",
      desc: "Light exfoliant for smooth, active feet.",
      price: 12,
      image: img("Fresh Step Scrub"),
    },
    {
      name: "Cooling Foot Gel",
      desc: "Refreshing gel for feet on the move.",
      price: 13,
      image: img("Cooling Foot Gel"),
    },
  ],
  "foot-divine": [
    {
      name: "Soft Bloom Foot Cream",
      desc: "Daily cream that keeps soles soft & smooth.",
      price: 18,
      image: img("Soft Bloom Foot Cream"),
    },
    {
      name: "Silk Sole Balm",
      desc: "Overnight balm for silky, cared-for feet.",
      price: 19,
      image: img("Silk Sole Balm"),
    },
  ],
  "foot-golden": [
    {
      name: "Renewal Heel Butter",
      desc: "Rich butter for hard-working, tired heels.",
      price: 22,
      image: img("Renewal Heel Butter"),
    },
    {
      name: "Golden Sole Repair",
      desc: "Repair cream for cracks and rough patches.",
      price: 24,
      image: img("Golden Sole Repair"),
    },
  ],
  "foot-timeless": [
    {
      name: "Deep Comfort Balm",
      desc: "Cushioning balm for sensitive mature skin.",
      price: 26,
      image: img("Deep Comfort Balm"),
    },
    {
      name: "Timeless Sole Elixir",
      desc: "Restorative oil blend for very dry feet.",
      price: 28,
      image: img("Timeless Sole Elixir"),
    },
  ],
};

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

export default function BeautyCategories() {
  const [category, setCategory] = useState(CATEGORIES[0].id);
  const [tier, setTier] = useState(TIERS[0].id);

  const activeCategory = CATEGORIES.find((c) => c.id === category);
  const activeTier = TIERS.find((t) => t.id === tier) ?? TIERS[0];
  const products = PRODUCTS[`${category}-${tier}` as ProductKey] || [];

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
          life — from Teen Angels to Timeless Grace.
        </p>
      </div>

      {/* Main category tabs */}
      <Tabs value={category} onValueChange={setCategory} className="mb-8">
        <TabsList className="h-auto w-full flex flex-wrap gap-2 bg-transparent p-0">
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
          <Card
            key={p.name}
            className="overflow-hidden border"
            style={{ borderColor: "#E4DACE", background: "white" }}
          >
            <ProductImage
              name={p.name}
              color={activeTier.color}
              image={p.image}
            />
            <CardHeader className="pb-2">
              <CardTitle className="font-serif text-lg" style={{ color: INK }}>
                {p.name}
              </CardTitle>
              <CardDescription className="text-sm" style={{ color: "#6B5E52" }}>
                {p.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Badge
                variant="secondary"
                className="text-[10px] font-normal"
                style={{ background: activeTier.soft, color: activeTier.color }}
              >
                {activeTier.label}
              </Badge>
            </CardContent>
            <CardFooter className="flex items-center justify-between pt-0">
              <span className="font-serif text-xl" style={{ color: INK }}>
                ${p.price}
              </span>
              <Button
                size="sm"
                style={{ background: INK, color: CREAM }}
                className="rounded-full hover:opacity-90"
              >
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
