"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Activity, AlertTriangle, Calendar, MapPin, Users, Building2 } from "lucide-react";
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