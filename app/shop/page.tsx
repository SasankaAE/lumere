"use client";
import React, { useState, useMemo } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import {
  Wallet,
  PackageCheck,
  Truck,
  RotateCcw,
  Droplets,
  Waves,
  Wind,
  Footprints,
  Sprout,
  Flower2,
  Sun,
  Crown,
  ShoppingBag,
} from "lucide-react";
import { products as eudoraProducts } from "@/lib/data";

type OrderTabKey = "to-pay" | "to-ship" | "to-receive" | "returns";
type CategoryKey = "skin" | "body" | "hair" | "foot";
type NonSkinCategoryKey = Exclude<CategoryKey, "skin">;
type TierKey = "teen" | "divine" | "golden" | "timeless";

interface OrderTab {
  key: OrderTabKey;
  label: string;
  icon: React.ElementType;
}

interface OrderItem {
  id: string;
  item: string;
  qty: number;
  price: number;
  action: string;
}

interface Category {
  key: CategoryKey;
  label: string;
  icon: React.ElementType;
}

interface AgeTier {
  key: TierKey;
  label: string;
  range: string;
  icon: React.ElementType;
  prefix: string;
}

interface Product {
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

interface BagItem extends Product {
  qty: number;
}

const ORDER_TABS: OrderTab[] = [
  { key: "to-pay", label: "To pay", icon: Wallet },
  { key: "to-ship", label: "To ship", icon: PackageCheck },
  { key: "to-receive", label: "To receive", icon: Truck },
  { key: "returns", label: "Returns & cancellations", icon: RotateCcw },
];

function parsePrice(label: string | number): number {
  return parseInt(String(label).replace(/[^0-9]/g, ""), 10) || 0;
}

const ORDERS: Record<OrderTabKey, OrderItem[]> = {
  "to-pay": [
    {
      id: "ORD-3391",
      item: eudoraProducts[0].name,
      qty: 1,
      price: parsePrice(eudoraProducts[0].price),
      action: "Pay now",
    },
    {
      id: "ORD-3388",
      item: eudoraProducts[3].name,
      qty: 2,
      price: parsePrice(eudoraProducts[3].price),
      action: "Pay now",
    },
  ],
  "to-ship": [
    {
      id: "ORD-3372",
      item: eudoraProducts[1].name,
      qty: 1,
      price: parsePrice(eudoraProducts[1].price),
      action: "Track order",
    },
  ],
  "to-receive": [
    {
      id: "ORD-3350",
      item: eudoraProducts[2].name,
      qty: 1,
      price: parsePrice(eudoraProducts[2].price),
      action: "Confirm receipt",
    },
  ],
  returns: [
    {
      id: "ORD-3298",
      item: eudoraProducts[0].name,
      qty: 1,
      price: parsePrice(eudoraProducts[0].price),
      action: "View return",
    },
  ],
};

const CATEGORIES: Category[] = [
  { key: "skin", label: "Skin care", icon: Droplets },
  { key: "body", label: "Body care", icon: Waves },
  { key: "hair", label: "Hair care", icon: Wind },
  { key: "foot", label: "Foot care", icon: Footprints },
];

const AGE_TIERS: AgeTier[] = [
  {
    key: "teen",
    label: "Teen angels",
    range: "Ages 15–18",
    icon: Sprout,
    prefix: "Fresh Start",
  },
  {
    key: "divine",
    label: "Divine femininity",
    range: "Ages 19–25",
    icon: Flower2,
    prefix: "Glow",
  },
  {
    key: "golden",
    label: "Golden aura",
    range: "Ages 25–45",
    icon: Sun,
    prefix: "Radiance",
  },
  {
    key: "timeless",
    label: "Timeless grace",
    range: "Ages 45+",
    icon: Crown,
    prefix: "Renewal",
  },
];

const NOUNS: Record<NonSkinCategoryKey, string[]> = {
  body: ["Body Butter", "Body Scrub", "Body Oil"],
  hair: ["Shampoo", "Hair Mask", "Hair Oil"],
  foot: ["Foot Cream", "Foot Scrub", "Foot Soak"],
};

function buildProducts(): Product[] {
  const products: Product[] = [];

  // Real EUDORA products map 1:1 onto the four life stages under Skin care.
  eudoraProducts.forEach((item, i) => {
    const tier = AGE_TIERS[i % AGE_TIERS.length];
    products.push({
      id: `skin-${item.id}`,
      category: "skin",
      tier: tier.key,
      name: item.name,
      tagline: item.tagline,
      tag: item.tag,
      image: item.image,
      price: parsePrice(item.price),
      priceLabel: item.price,
    });
  });

  // Body, hair, and foot care are generated placeholders until real SKUs exist.
  let priceSeed = 18;
  const nonSkinCategories = CATEGORIES.filter(
    (category): category is Category & { key: NonSkinCategoryKey } =>
      category.key !== "skin",
  );

  for (const cat of nonSkinCategories) {
    for (const tier of AGE_TIERS) {
      NOUNS[cat.key].slice(0, 2).forEach((noun, i) => {
        priceSeed += 3;
        const price = (16 + (priceSeed % 27)) * 100;
        products.push({
          id: `${cat.key}-${tier.key}-${i}`,
          category: cat.key,
          tier: tier.key,
          name: `${tier.prefix} ${noun}`,
          price,
          priceLabel: `LKR ${price}`,
        });
      });
    }
  }
  return products;
}

const PRODUCTS = buildProducts();

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

        {/* Orders section */}
        <section className="mb-14">
          <h2 className="font-display text-xl font-medium mb-4 text-[#2A3324]">
            My orders
          </h2>
          <Tabs value={orderTab} onValueChange={setOrderTab}>
            <TabsList className="bg-[#E7E9DE] p-1 rounded-full h-auto flex-wrap justify-start gap-1">
              {ORDER_TABS.map(({ key, label, icon: Icon }) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="rounded-full px-4 py-2 text-sm data-[state=active]:bg-[#2A3324] data-[state=active]:text-[#F5F6F1] flex items-center gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  <Badge
                    variant="secondary"
                    className="ml-1 bg-[#D8DFC9] text-[#2A3324]"
                  >
                    {ORDERS[key]?.length ?? 0}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>

            {ORDER_TABS.map(({ key }) => (
              <TabsContent key={key} value={key} className="mt-4">
                <div className="grid gap-3">
                  {ORDERS[key].length === 0 && (
                    <p className="text-sm text-[#6B7A5E] py-6">
                      Nothing here right now.
                    </p>
                  )}
                  {ORDERS[key].map((order) => (
                    <Card
                      key={order.id}
                      className="border-[#DEDFD3] bg-white/70"
                    >
                      <CardContent className="flex items-center justify-between py-4">
                        <div>
                          <p className="font-medium text-sm text-[#2A3324]">
                            {order.item}
                          </p>
                          <p className="text-xs text-[#8A917E] font-mono mt-1">
                            {order.id} · Qty {order.qty}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-sm">
                            LKR {order.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-[#2A3324] hover:bg-[#3B4A3A] text-[#F5F6F1] rounded-full"
                          >
                            {order.action}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        <Separator className="mb-14 bg-[#DEDFD3]" />

        {/* Shop section */}
        <section>
          <h2 className="font-display text-xl font-medium mb-1 text-[#2A3324]">
            Shop by category
          </h2>
          <p className="text-sm text-[#6B7A5E] mb-6">
            Care, matched to where you are right now.
          </p>

          {/* Category selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {CATEGORIES.map(({ key, label, icon: Icon }) => {
              const active = key === category;
              return (
                <button
                  key={key}
                  onClick={() => setCategory(key)}
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

          {/* Life-stage stepper (signature element) */}
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
                      onClick={() => setTier(key)}
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

          {/* Product grid */}
          <div className="flex items-baseline justify-between mb-4">
            <h3 className="font-display text-lg text-[#2A3324]">
              {activeCategoryMeta?.label} · {activeTierMeta?.label}
            </h3>
            <span className="text-xs text-[#8A917E]">
              {visibleProducts.length} products
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {visibleProducts.map((p) => (
              <Card
                key={p.id}
                className="border-[#DEDFD3] bg-white/80 overflow-hidden"
              >
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
                    onClick={() => addToBag(p)}
                    className="rounded-full border-[#B7BFA6] text-[#2A3324]"
                  >
                    Add
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Shopping bag drawer */}
      <Sheet open={bagOpen} onOpenChange={setBagOpen}>
        <SheetContent className="bg-[#F5F6F1] border-[#DEDFD3] font-body">
          <SheetHeader>
            <SheetTitle className="font-display text-[#2A3324]">
              Your bag
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-3">
            {bagItems.length === 0 && (
              <div className="flex flex-col items-center text-center py-12 px-6">
                <div className="w-16 h-16 rounded-full bg-[#E7E9DE] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-7 h-7 text-[#8A917E]" />
                </div>
                <p className="text-sm font-medium text-[#2A3324] mb-1">
                  Your bag is empty
                </p>
                <p className="text-xs text-[#8A917E] mb-6">
                  Add something you'll love and it'll show up here.
                </p>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setBagOpen(false)}
                  className="rounded-full border-[#B7BFA6] text-[#2A3324]"
                >
                  Continue shopping
                </Button>
              </div>
            )}
            {bagItems.map((item) => (
              <Card key={item.id} className="border-[#DEDFD3] bg-white/80">
                <CardContent className="flex items-center justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-[#2A3324]">
                      {item.name}
                    </p>
                    <p className="text-xs text-[#8A917E] font-mono mt-1">
                      Qty {item.qty} · LKR {item.price} each
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm">
                      LKR {item.qty * item.price}
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFromBag(item.id)}
                      className="text-[#8A917E] hover:text-[#2A3324]"
                    >
                      Remove
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {bagItems.length > 0 && (
            <SheetFooter className="mt-6 flex-col gap-3 sm:flex-col">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm text-[#6B7A5E]">Total</span>
                <span className="font-mono text-base text-[#2A3324]">
                  LKR {bagTotal}
                </span>
              </div>
              <Button className="w-full bg-[#2A3324] hover:bg-[#3B4A3A] text-[#F5F6F1] rounded-full">
                Checkout
              </Button>
            </SheetFooter>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
