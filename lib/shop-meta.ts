import {
  Droplets,
  Waves,
  Wind,
  Footprints,
  Sprout,
  Flower2,
  Sun,
  Crown,
} from "lucide-react";
import type { Category, AgeTier } from "./shop-types";

export const CATEGORIES: Category[] = [
  { key: "skin", label: "Skin care", icon: Droplets },
  { key: "body", label: "Body care", icon: Waves },
  { key: "hair", label: "Hair care", icon: Wind },
  { key: "foot", label: "Foot care", icon: Footprints },
];

export const AGE_TIERS: AgeTier[] = [
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