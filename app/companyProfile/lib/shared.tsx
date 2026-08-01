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
    title: "Chief Executive Officer",
    name: "Amanda Wijethunge",
    dept: "Top Management",
    dob: "13.06.2007",
    img: "/images/rolesImages/amanda.jpg",
    phone: "074 2565952",
    email: "amandawijethunge1@gmail.com",
    education: "Undergraduate of Tourism and Hospitality Management",
  },
  {
    title: "Financial Officer",
    name: "Lochana Ariyarathna",
    dept: "Financial Department",
    dob: "29.07.2006",
    img: "/images/rolesImages/lochana.jpg",
    phone: "078 2972747",
    email: "lochanaariyarathna5@gmail.com",
    education: "Undergraduate of Tourism and Hospitality Management",
  },
  {
    title: "Marketing manager",
    name: "Thiseni Sadewma Vitharana",
    dept: "Marketing Department",
    dob: "16.12.2005",
    img: "/images/rolesImages/thiseni.jpg",
    phone: "070 2411852",
    email: "thisenivitharana2005@gmail.com",
    education: "Undergraduate of Tourism and Hospitality Management",
  },
  {
    title: "Human Resource Manager",
    name: "Chathumi Sooriyaarachchi",
    dept: "Human Resource Department",
    dob: "07.10.2006",
    img: "/images/rolesImages/chathumi.jpg",
    phone: "070 3208080",
    email: "chathumidevanga6@gmail.com",
    education: "Undergraduate of Tourism and Hospitality Management",
  },
  {
    title: "Business Development Manager",
    name: "Sanjana Nethurangi",
    dept: "Business Development Department",
    dob: "21.08.2006",
    img: "/images/rolesImages/sanjana.jpg",
    phone: "077 7047220",
    email: "sanjananethurangi@gmail.com",
    education: "Undergraduate of Tourism and Hospitality Management",
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
  { level: "CEO", low: 300, high: 300, avg: 300 },
  { level: "Managers", low: 150, high: 150, avg: 150 },
  { level: "Mid-Level Staff", low: 75, high: 75, avg: 75 },
  { level: "Support Staff", low: 40, high: 240, avg: 80 },
];

/* ------------------------------ salary breakdown ----------------------------- */
export interface SalaryBreakdownItem {
  role: string;
  amount: number; // LKR, monthly
}

export const salaryBreakdown: Record<string, SalaryBreakdownItem[]> = {
  "CEO": [{ role: "CEO", amount: 300000 }],
  "Managers": [
    { role: "Marketing", amount: 150000 },
    { role: "Operations", amount: 150000 },
    { role: "Finance", amount: 150000 },
    { role: "HR", amount: 150000 },
    { role: "Business Development", amount: 150000 },
  ],
  "Mid-Level Staff": [
    { role: "Digital Marketing", amount: 75000 },
    { role: "Social Media", amount: 75000 },
    { role: "Brand Manager", amount: 75000 },
    { role: "Customer Service", amount: 75000 },
    { role: "Production", amount: 75000 },
    { role: "Quality Control", amount: 75000 },
    { role: "Inventory", amount: 75000 },
    { role: "Logistics", amount: 75000 },
    { role: "Procurement", amount: 75000 },
    { role: "Accountant", amount: 75000 },
    { role: "Analyst", amount: 75000 },
    { role: "Payroll", amount: 75000 },
    { role: "Recruitment", amount: 75000 },
    { role: "Employee Relations", amount: 75000 },
    { role: "Performance Mgmt", amount: 75000 },
    { role: "Admin", amount: 75000 },
    { role: "Sales & Partnership", amount: 75000 },
    { role: "Market Research", amount: 75000 },
    { role: "Product Innovation", amount: 75000 },
    { role: "Export & Expansion", amount: 75000 },
  ],
  "Support Staff": [
    { role: "Customer Service Assistants", amount: 40000 },
    { role: "Inventory", amount: 40000 },
    { role: "Logistics Assistants", amount: 40000 },
    { role: "Admin", amount: 40000 },
    { role: "Other 6 Staff", amount: 240000 },
  ],
};

export function formatLKR(amount: number): string {
  return `LKR ${amount.toLocaleString("en-LK")}`;
}

export const photos = [
  { img: "/images/work/work1.jpg" },
  { img: "/images/work/work2.jpg" },
  { img: "/images/work/work3.jpg" },
  { img: "/images/work/work4.jpg" },
  { img: "/images/work/work5.jpg" },
  { img: "/images/work/work6.jpg" },
  { img: "/images/work/work7.jpg" },
  { img: "/images/work/work8.jpg" },
  { img: "/images/work/work9.jpg" },
  { img: "/images/work/work10.jpg" },
  { img: "/images/work/work11.jpg" },
  { img: "/images/work/work12.jpg" },
  { img: "/images/work/work13.jpg" },
  { img: "/images/work/work14.jpg" },
  { img: "/images/work/work15.jpg" },
  { img: "/images/work/work16.jpg" },
  { img: "/images/work/work17.jpg" },
  { img: "/images/work/work18.jpg" },
  { img: "/images/work/work19.jpg" },
  { img: "/images/work/work20.jpg" },
  { img: "/images/work/work21.jpg" },
  { img: "/images/work/work22.jpg" },
  { img: "/images/work/work23.jpg" },
  { img: "/images/work/work24.jpg" },
  { img: "/images/work/work25.jpg" },
  { img: "/images/work/work26.jpg" },
  { img: "/images/work/work27.jpg" },
  { img: "/images/work/work28.jpg" },
  { img: "/images/work/work29.jpg" },
  { img: "/images/work/work30.jpg" },
  { img: "/images/work/work31.jpg" },
  { img: "/images/work/work32.jpg" },
  { img: "/images/work/work33.jpg" },
  { img: "/images/work/work34.jpg" },
  { img: "/images/work/work35.jpg" },
  { img: "/images/work/work36.jpg" },
  { img: "/images/work/work37.jpg" },
  { img: "/images/work/work38.jpg" },
  { img: "/images/work/work39.jpg" },
  { img: "/images/work/work40.jpg" },
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