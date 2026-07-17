"use client";

import React from "react";

/* ---------------------------------- tokens --------------------------------- */
export const C = {
  ink: "#fff",
  panel: "#FBF7F0",
  panelSoft: "#ECE0CD90",
  line: "#DDCEB4",
  text: "#3A3350",
  muted: "#8C82A0",
  cyan: "#8B7FD4",
  cyanSoft: "#8B7FD42E",
  amber: "#C6A15B",
  amberSoft: "#C6A15B33",
  rose: "#C97B92",
  roseSoft: "#C97B9233",
  blue: "#6F5FA0",
};

export const mono = "'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace";
export const sans = "'Inter', system-ui, -apple-system, sans-serif";

/* ---------------------------------- data ----------------------------------- */
export const growth = [
  { year: "2021", revenue: 42, headcount: 310 },
  { year: "2022", revenue: 68, headcount: 480 },
  { year: "2023", revenue: 95, headcount: 690 },
  { year: "2024", revenue: 132, headcount: 940 },
  { year: "2025", revenue: 178, headcount: 1240 },
];

export const challenges = [
  {
    title: "Senior SRE attrition",
    severity: "High",
    color: C.rose,
    detail:
      "Senior site-reliability engineers are leaving faster than they can be backfilled, concentrated in the on-call-heavy infrastructure team.",
  },
  {
    title: "Hyperscaler price pressure",
    severity: "Medium",
    color: C.amber,
    detail:
      "AWS and GCP committed-use discounts are squeezing margins on mid-market renewal deals.",
  },
  {
    title: "Support response lag",
    severity: "Medium",
    color: C.amber,
    detail:
      "Enterprise ticket first-response time has drifted past the 4-hour SLA during peak incident windows.",
  },
];

export const roles = [
  {
    title: "Site Reliability Engineer II",
    dept: "Infrastructure",
    level: "Mid–Senior",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=450&fit=crop",
    desc: "Owns uptime for the core routing fabric, leads incident response, and builds the automation that keeps 3am pages rare.",
    skills: ["Kubernetes", "Go", "On-call"],
  },
  {
    title: "Product Designer, Platform",
    dept: "Design",
    level: "Mid",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop",
    desc: "Shapes the dashboard and CLI experience developers live in daily, from first deploy to production incident.",
    skills: ["Figma", "Design systems", "Dev tools"],
  },
  {
    title: "Data Platform Analyst",
    dept: "Analytics",
    level: "Mid",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=450&fit=crop",
    desc: "Turns raw usage telemetry into the pricing, retention, and capacity decisions leadership relies on.",
    skills: ["SQL", "dbt", "Forecasting"],
  },
];

export const reviewMix = [
  { name: "Email surveys", value: 45, color: C.cyan },
  { name: "Annual report mentions", value: 20, color: C.blue },
  { name: "Public / negative comments", value: 35, color: C.rose },
];

export const reviewSamplesMeta = [
  { label: "Email survey", color: C.cyan, iconKey: "mail" as const },
  { label: "Annual report", color: C.blue, iconKey: "file" as const },
  { label: "Public comment", color: C.rose, iconKey: "thumbsDown" as const },
];

export const reviewSampleQuotes: Record<string, string> = {
  "Email survey":
    "Onboarding was fast and my manager checked in every week for the first month.",
  "Annual report":
    "Headcount grew 32% year over year while voluntary attrition held below industry average.",
  "Public comment":
    "On-call rotation is brutal for infra roles and comp hasn't kept pace with the workload.",
};

export const salaries = [
  { level: "Junior", low: 78, high: 98, avg: 88 },
  { level: "Mid", low: 108, high: 140, avg: 124 },
  { level: "Senior", low: 148, high: 182, avg: 165 },
  { level: "Staff / Lead", low: 188, high: 226, avg: 207 },
];

export const photos = [
  { seed: "meridian-hq", caption: "Austin HQ atrium" },
  { seed: "meridian-floor", caption: "Server floor, Building 2" },
  { seed: "meridian-design", caption: "Design studio" },
  { seed: "meridian-allhands", caption: "Quarterly all-hands" },
  { seed: "meridian-offsite", caption: "Team offsite, 2025" },
  { seed: "meridian-roof", caption: "Rooftop lounge" },
];

/* --------------------------------- nav sections ------------------------------ */
export interface NavSection {
  id: string;
  label: string;
}

export const NAV_SECTIONS: NavSection[] = [
  { id: "overview", label: "Overview" },
  { id: "about", label: "About" },
  { id: "reviews", label: "Reviews analysis" },
  { id: "salaries", label: "Salaries" },
  { id: "photos", label: "Photos" },
];

/* --------------------------------- helpers ---------------------------------- */
type SectionLabelProps = {
  id: string;
  title: React.ReactNode;
  icon: React.ComponentType<any>;
};

export function SectionLabel({
  id,
  title,
  icon: Icon,
}: SectionLabelProps): React.ReactElement {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span
        className="text-xs px-2 py-1 rounded"
        style={{
          fontFamily: mono,
          color: C.cyan,
          background: C.cyanSoft,
          letterSpacing: "0.08em",
        }}
      >
        {id}
      </span>
      <Icon size={18} color={C.muted} />
      <h2
        className="text-xl md:text-2xl font-semibold"
        style={{ color: C.text, fontFamily: sans }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: C.line }} />
    </div>
  );
}

export function StatusDot({ color = C.cyan }: { color?: string }) {
  return (
    <span className="relative inline-flex h-2.5 w-2.5">
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
        style={{ background: color }}
      />
      <span
        className="relative inline-flex rounded-full h-2.5 w-2.5"
        style={{ background: color }}
      />
    </span>
  );
}

export function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; color?: string }>;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center gap-3 rounded-lg px-4 py-3"
      style={{ background: C.panel, border: `1px solid ${C.line}` }}
    >
      <Icon size={16} color={C.cyan} />
      <div>
        <div
          className="text-[11px] uppercase tracking-wide"
          style={{ color: C.muted, fontFamily: mono }}
        >
          {label}
        </div>
        <div className="text-sm font-medium" style={{ color: C.text }}>
          {value}
        </div>
      </div>
    </div>
  );
}

export interface Pill {
  left: number;
  width: number;
}

export type SectionRef = React.MutableRefObject<
  Record<string, HTMLElement | null>
>;