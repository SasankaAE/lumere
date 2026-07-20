"use client"
import React, { useState } from "react";
import { Wallet, Truck, PackageCheck, RotateCcw, ChevronRight, MapPin } from "lucide-react";

const TABS = [
  { key: "pay", label: "To Pay", icon: Wallet },
  { key: "ship", label: "To Ship", icon: Truck },
  { key: "receive", label: "To Receive", icon: PackageCheck },
  { key: "returns", label: "Returns & cancellations", icon: RotateCcw },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Eudora Lumière Cleanser",
    variant: "A gentle daily cleanser that clears without stripping",
    qty: 1,
    price: 990.00,
    initials: "ELC",
  },
  {
    id: 2,
    name: "Eudora Renouveau Exfoliating Toner",
    variant: "An AHA/BHA toner for smoother, brighter skin.",
    qty: 2,
    price: 1100.00,
    initials: "ERET",
  },
  {
    id: 3,
    name: "Eudora Baume Lip Treatment",
    variant: "A repairing lip balm with light plumping effect.",
    qty: 1,
    price: 400.00,
    initials: "EBLT",
  },
];

const ORDER = {
  id: "WW-10482",
  placed: "Jul 18, 2026",
  status: "Packed — courier pickup scheduled",
  eta: "Arriving Jul 24",
};

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
      style={{ background: "var(--lavender-100)", color: "var(--plum-700)" }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--plum-500)" }} />
      {children}
    </span>
  );
}

function ProductRow({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div className="flex items-center gap-4 py-4" style={{ borderTop: "1px solid var(--hairline)" }}>
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-sm font-semibold"
        style={{ background: "var(--beige-200)", color: "var(--plum-600)" }}
      >
        {product.initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium" style={{ color: "var(--plum-900)" }}>
          {product.name}
        </p>
        <p className="mt-0.5 text-xs" style={{ color: "var(--plum-400)" }}>
          {product.variant} · Qty {product.qty}
        </p>
      </div>
      <p className="shrink-0 text-sm font-semibold" style={{ color: "var(--plum-800)" }}>
        LKR {(product.price * product.qty).toFixed(2)}
      </p>
    </div>
  );
}

function OrderCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{ background: "var(--card)", border: "1px solid var(--hairline)" }}
    >
      {children}
    </div>
  );
}

function ShipOrder() {
  const total = PRODUCTS.reduce((s, p) => s + p.price * p.qty, 0);
  return (
    <OrderCard>
      <div
        className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5"
        style={{ background: "var(--beige-100)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium" style={{ color: "var(--plum-500)" }}>
            Order #{ORDER.id}
          </span>
          <span className="text-xs" style={{ color: "var(--plum-300)" }}>
            Placed {ORDER.placed}
          </span>
        </div>
        <StatusPill>{ORDER.status}</StatusPill>
      </div>

      <div className="px-5">
        {PRODUCTS.map((p) => (
          <ProductRow key={p.id} product={p} />
        ))}
      </div>

      <div
        className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
        style={{ borderTop: "1px solid var(--hairline)" }}
      >
        <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--plum-400)" }}>
          <MapPin className="h-3.5 w-3.5" />
          {ORDER.eta}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm" style={{ color: "var(--plum-400)" }}>
            Order total
          </span>
          <span className="text-base font-semibold" style={{ color: "var(--plum-900)" }}>
            LKR {total.toFixed(2)}
          </span>
        </div>
      </div>

      <div
        className="flex flex-wrap justify-end gap-2 px-5 py-4"
        style={{ borderTop: "1px solid var(--hairline)", background: "var(--beige-50)" }}
      >
        <button
          className="rounded-lg px-4 py-2 text-sm font-medium transition-colors"
          style={{ border: "1px solid var(--hairline-strong)", color: "var(--plum-700)", background: "transparent" }}
        >
          Track shipment
        </button>
        <button
          className="rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
          style={{ background: "var(--plum-600)" }}
        >
          Contact seller
        </button>
      </div>
    </OrderCard>
  );
}

function EmptyState({
  icon: Icon,
  title,
  note,
}: {
  icon: React.ElementType;
  title: string;
  note: string;
}) {
  return (
    <OrderCard>
      <div className="flex flex-col items-center gap-3 px-6 py-16 text-center">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: "var(--lavender-100)" }}
        >
          <Icon className="h-5 w-5" style={{ color: "var(--plum-500)" }} />
        </div>
        <p className="text-sm font-medium" style={{ color: "var(--plum-700)" }}>
          {title}
        </p>
        <p className="max-w-xs text-xs" style={{ color: "var(--plum-400)" }}>
          {note}
        </p>
      </div>
    </OrderCard>
  );
}

export default function AccountOrdersSection() {
  const [active, setActive] = useState("ship");
  const containerStyle = {
    "--beige-50": "#FBF8F3",
    "--beige-100": "#F5EFE4",
    "--beige-200": "#EDE3D3",
    "--lavender-100": "#E8E1F0",
    "--lavender-300": "#C9B8DE",
    "--plum-300": "#A99BB8",
    "--plum-400": "#8C7C9F",
    "--plum-500": "#7A6890",
    "--plum-600": "#6B5680",
    "--plum-700": "#59456B",
    "--plum-800": "#453352",
    "--plum-900": "#332740",
    "--card": "#FFFDFA",
    "--hairline": "#E7DECF",
    "--hairline-strong": "#D9CCB8",
    background: "var(--beige-50)",
    fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
  } as React.CSSProperties & Record<`--${string}`, string>;

  return (
    <div
      className="mx-auto w-full max-w-2xl p-6 sm:p-8"
      style={containerStyle}
    >
      <div className="mb-6">
        <p
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "var(--plum-400)", letterSpacing: "0.12em" }}
        >
          My account
        </p>
        <h1
          className="mt-1 text-2xl font-semibold"
          style={{ color: "var(--plum-900)", fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Order status
        </h1>
      </div>

      <div className="mb-6 flex gap-1 overflow-x-auto rounded-xl p-1" style={{ background: "var(--beige-100)" }}>
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.key;
          const count = tab.key === "ship" ? PRODUCTS.length : 0;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className="flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2.5 text-xs font-medium transition-colors sm:text-sm"
              style={{
                background: isActive ? "var(--card)" : "transparent",
                color: isActive ? "var(--plum-800)" : "var(--plum-400)",
                boxShadow: isActive ? "0 1px 2px rgba(89,69,107,0.08)" : "none",
              }}
            >
              <Icon className="h-4 w-4" />
              {tab.label}
              {count > 0 && (
                <span
                  className="ml-0.5 flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold"
                  style={{
                    background: isActive ? "var(--plum-600)" : "var(--lavender-300)",
                    color: "#FFFDFA",
                  }}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {active === "ship" && <ShipOrder />}
      {active === "pay" && (
        <EmptyState icon={Wallet} title="No payments pending" note="Orders waiting on payment will show up here." />
      )}
      {active === "receive" && (
        <EmptyState
          icon={PackageCheck}
          title="Nothing out for delivery"
          note="Shipped orders move here once they're on their way to you."
        />
      )}
      {active === "returns" && (
        <EmptyState
          icon={RotateCcw}
          title="No returns or cancellations"
          note="Started a return or cancellation? Track its progress here."
        />
      )}

      <button className="mt-6 flex w-full items-center justify-center gap-1 text-xs font-medium" style={{ color: "var(--plum-500)" }}>
        View all orders
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}