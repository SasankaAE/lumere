import { Wallet, PackageCheck, Truck, RotateCcw } from "lucide-react";
import { products as eudoraProducts } from "@/lib/data";
import { parsePrice, type OrderTab, type OrderItem, type OrderTabKey } from "./shop-types";

export const ORDER_TABS: OrderTab[] = [
  { key: "to-pay", label: "To pay", icon: Wallet },
  { key: "to-ship", label: "To ship", icon: PackageCheck },
  { key: "to-receive", label: "To receive", icon: Truck },
  { key: "returns", label: "Returns & cancellations", icon: RotateCcw },
];

export const ORDERS: Record<OrderTabKey, OrderItem[]> = {
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