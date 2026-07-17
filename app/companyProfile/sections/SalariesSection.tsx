"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { DollarSign } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { C, mono, salaries, SectionLabel } from "../lib/shared";

interface SalariesSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export default function SalariesSection({ setRef }: SalariesSectionProps) {
  return (
    <section id="salaries" data-section-id="salaries" ref={setRef}>
      <SectionLabel id="SEC-04" title="Salaries" icon={DollarSign} />
      <Card style={{ background: C.panel, border: `1px solid ${C.line}` }}>
        <CardHeader>
          <CardTitle style={{ color: C.text, fontFamily: mono, fontSize: "0.9rem" }}>
            AVERAGE BASE SALARY BY LEVEL ($K)
          </CardTitle>
          <CardDescription style={{ color: C.muted }}>
            Reported base salary ranges across engineering, design, and analytics roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <BarChart data={salaries} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
                <CartesianGrid stroke={C.line} strokeDasharray="3 3" />
                <XAxis dataKey="level" stroke={C.muted} tick={{ fill: C.muted, fontSize: 12 }} />
                <YAxis stroke={C.muted} tick={{ fill: C.muted, fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: C.panel,
                    border: `1px solid ${C.line}`,
                    borderRadius: 8,
                    color: C.text,
                  }}
                />
                <Bar dataKey="avg" name="Avg. base ($K)" fill={C.cyan} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {salaries.map((s) => (
              <div
                key={s.level}
                className="rounded-lg px-4 py-3"
                style={{ background: C.panelSoft, border: `1px solid ${C.line}` }}
              >
                <div className="text-xs" style={{ color: C.muted, fontFamily: mono }}>
                  {s.level.toUpperCase()}
                </div>
                <div className="text-sm font-medium" style={{ color: C.text }}>
                  ${s.low}K – ${s.high}K
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}