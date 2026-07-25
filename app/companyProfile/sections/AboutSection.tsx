"use client";

import React from "react";
import { Users } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { C, mono, roles, SectionLabel } from "../lib/shared";

interface AboutSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export default function AboutSection({ setRef }: AboutSectionProps) {
  return (
<section id="about" data-section-id="about" ref={setRef}>
  <SectionLabel id="SEC-02" title="About — open roles" icon={Users} />
  <div className="grid md:grid-cols-3 gap-5">
    {roles.map((r, i) => (
      <Card
        key={`${r.title}-${i}`}
        style={{ background: C.panel, border: `1px solid ${C.line}`, overflow: "hidden" }}
      >
        <div className="w-full h-100 overflow-hidden">
          <img src={r.img} alt={r.title} className="w-full h-full object-cover" />
        </div>
        <CardHeader className="pb-2">
          <Badge
            style={{
              background: C.cyanSoft,
              color: C.cyan,
              border: `1px solid ${C.cyan}55`,
              width: "fit-content",
            }}
          >
            {r.dept}
          </Badge>
          <CardTitle style={{ color: C.text, fontSize: "1rem", marginTop: 6 }}>
            {r.title}
          </CardTitle>
          {r.name && (
            <CardDescription style={{ color: C.text, fontFamily: mono, fontSize: "0.8rem" }}>
              {r.name}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>

          {r.education && (
            <p className="text-sm mb-1" style={{ color: C.muted }}>
              {r.education}
            </p>
          )}
          {r.dob && (
            <p className="text-xs mb-1" style={{ color: C.muted, fontFamily: mono }}>
              DOB: {r.dob}
            </p>
          )}
          {r.phone && (
            <p className="text-xs mb-1" style={{ color: C.muted, fontFamily: mono }}>
              {r.phone}
            </p>
          )}
          {r.email && (
            <p className="text-xs mb-3" style={{ color: C.muted, fontFamily: mono }}>
              {r.email}
            </p>
          )}
        </CardContent>
      </Card>
    ))}
  </div>
</section>
  );
}