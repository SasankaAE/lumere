"use client";

import React from "react";
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Activity,
  AlertTriangle,
  Calendar,
  MapPin,
  Users,
  Building2,
  PieChart as PieChartIcon,
  DollarSign,
  Package,
  TrendingUp,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { C, mono, growth, challenges, SectionLabel, StatChip } from "../lib/shared";

interface OverviewSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

// Eudora Skin Care — Revenue Segment Contribution (approximate, monthly)
const segmentData = [
  { segment: "Age 15–18", revenue: 5, units: 4000, color: "#22D3EE" },
  { segment: "Age 19–25", revenue: 5, units: 3000, color: "#A78BFA" },
  { segment: "Age 25–45", revenue: 6, units: 3500, color: "#F59E0B" },
  { segment: "Age 45+ & Specialty", revenue: 3, units: 1500, color: "#F472B6" },
  { segment: "Masks & Scrubs", revenue: 1, units: 1000, color: "#34D399" },
];

const grandTotals = {
  unitsRange: "12,000–13,000",
  revenue: "LKR. 20,000,000.00",
  productionCosts: "LKR. 15,000,000.00",
  netProfit: "LKR. 5,000,000.00",
};

function SegmentTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div
      style={{
        background: C.panel,
        border: `1px solid ${C.line}`,
        borderRadius: 8,
        padding: "8px 12px",
        color: C.text,
        fontSize: "0.8rem",
      }}
    >
      <div style={{ fontWeight: 600, marginBottom: 4 }}>{d.segment}</div>
      <div style={{ color: C.muted }}>Revenue: ≈ Rs. {d.revenue}M</div>
      <div style={{ color: C.muted }}>Units: ≈ {d.units.toLocaleString()}</div>
    </div>
  );
}

export default function OverviewSection({ setRef }: OverviewSectionProps) {
  return (
    <section id="overview" data-section-id="overview" ref={setRef}>
      <SectionLabel id="SEC-01" title="Overview" icon={Activity} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatChip icon={Calendar} label="Founded" value="2015" />
        <StatChip icon={MapPin} label="HQ" value="Austin, TX" />
        <StatChip icon={Users} label="Employees" value="1,240" />
        <StatChip icon={Building2} label="Industry" value="Cloud infrastructure" />
      </div>

      <Card style={{ background: C.panel, border: `1px solid ${C.line}` }} className="mb-8">
        <CardHeader>
          <CardTitle
            style={{
              color: C.text,
              fontFamily: mono,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
            }}
          >
            REVENUE &amp; HEADCOUNT — 5YR TREND
          </CardTitle>
          <CardDescription style={{ color: C.muted }}>
            Annual revenue ($M) plotted against total headcount, 2021–2025.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <AreaChart data={growth} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <defs>
                  <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={C.cyan} stopOpacity={0.5} />
                    <stop offset="100%" stopColor={C.cyan} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke={C.line} strokeDasharray="3 3" />
                <XAxis dataKey="year" stroke={C.muted} tick={{ fill: C.muted, fontSize: 12 }} />
                <YAxis stroke={C.muted} tick={{ fill: C.muted, fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: C.panel,
                    border: `1px solid ${C.line}`,
                    borderRadius: 8,
                    color: C.text,
                  }}
                  labelStyle={{ color: C.muted }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Revenue ($M)"
                  stroke={C.cyan}
                  fill="url(#revFill)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Eudora Skin Care Products — Revenue Segment Contribution */}
      <div className="flex items-center gap-2 mb-4">
        <PieChartIcon size={16} color={C.cyan} />
        <h3 className="text-sm font-medium" style={{ color: C.text, fontFamily: mono }}>
          EUDORA SKIN CARE — SEGMENT CONTRIBUTION
        </h3>
      </div>

      <Card style={{ background: C.panel, border: `1px solid ${C.line}` }} className="mb-8">
        <CardHeader>
          <CardTitle
            style={{
              color: C.text,
              fontFamily: mono,
              fontSize: "0.95rem",
              letterSpacing: "0.02em",
            }}
          >
            REVENUE SHARE BY SEGMENT (MONTHLY)
          </CardTitle>
          <CardDescription style={{ color: C.muted }}>
            Approximate revenue (Rs. M) and unit contribution across skincare segments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={segmentData}
                    dataKey="revenue"
                    nameKey="segment"
                    innerRadius={60}
                    outerRadius={95}
                    paddingAngle={2}
                  >
                    {segmentData.map((entry) => (
                      <Cell key={entry.segment} fill={entry.color} stroke={C.panel} strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip content={<SegmentTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="flex flex-col gap-2">
              {segmentData.map((s) => (
                <div
                  key={s.segment}
                  className="flex items-center justify-between rounded-md px-3 py-2"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${C.line}` }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: s.color,
                        display: "inline-block",
                      }}
                    />
                    <span className="text-sm" style={{ color: C.text }}>
                      {s.segment}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium" style={{ color: C.text, fontFamily: mono }}>
                      LKR.{s.revenue}M
                    </div>
                    <div className="text-xs" style={{ color: C.muted }}>
                      {s.units.toLocaleString()} units
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Grand Totals — Eudora Products (Monthly) */}
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp size={16} color={C.amber} />
        <h3 className="text-sm font-medium" style={{ color: C.text, fontFamily: mono }}>
          GRAND TOTALS — EUDORA PRODUCTS (MONTHLY)
        </h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <StatChip icon={Package} label="Total Units Sold" value={grandTotals.unitsRange} />
        <StatChip icon={DollarSign} label="Total Revenue" value={grandTotals.revenue} />
        <StatChip icon={DollarSign} label="Production Costs" value={grandTotals.productionCosts} />
        <StatChip icon={TrendingUp} label="Net Profit" value={grandTotals.netProfit} />
      </div>

      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={16} color={C.amber} />
        <h3 className="text-sm font-medium" style={{ color: C.text, fontFamily: mono }}>
          OPEN CHALLENGES
        </h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {challenges.map((c) => (
          <Card key={c.title} style={{ background: C.panel, border: `1px solid ${C.line}` }}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle style={{ color: C.text, fontSize: "0.95rem" }}>{c.title}</CardTitle>
                <Badge
                  style={{
                    background: `${c.color}22`,
                    color: c.color,
                    border: `1px solid ${c.color}55`,
                  }}
                >
                  {c.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm" style={{ color: C.muted }}>
                {c.detail}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}