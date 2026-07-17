"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Radio, Mail, FileText, ThumbsDown } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  C,
  mono,
  reviewMix,
  reviewSamplesMeta,
  reviewSampleQuotes,
  SectionLabel,
} from "../lib/shared";

interface ReviewsSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

const ICONS = { mail: Mail, file: FileText, thumbsDown: ThumbsDown };

export default function ReviewsSection({ setRef }: ReviewsSectionProps) {
  return (
    <section id="reviews" data-section-id="reviews" ref={setRef}>
      <SectionLabel id="SEC-03" title="Reviews analysis" icon={Radio} />
      <div className="grid md:grid-cols-2 gap-5">
        <Card style={{ background: C.panel, border: `1px solid ${C.line}` }}>
          <CardHeader>
            <CardTitle style={{ color: C.text, fontFamily: mono, fontSize: "0.9rem" }}>
              FEEDBACK CHANNEL MIX
            </CardTitle>
            <CardDescription style={{ color: C.muted }}>
              Share of reviews analyzed, by source.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={reviewMix}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={3}
                  >
                    {reviewMix.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} stroke={C.ink} strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      background: C.panel,
                      border: `1px solid ${C.line}`,
                      borderRadius: 8,
                      color: C.text,
                    }}
                  />
                  <Legend wrapperStyle={{ color: C.muted, fontSize: 12 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {reviewSamplesMeta.map((s) => {
            const Icon = ICONS[s.iconKey];
            return (
              <Card key={s.label} style={{ background: C.panel, border: `1px solid ${C.line}` }}>
                <CardContent className="pt-5 flex gap-3 items-start">
                  <div
                    className="h-8 w-8 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: `${s.color}22`, border: `1px solid ${s.color}55` }}
                  >
                    <Icon size={15} color={s.color} />
                  </div>
                  <div>
                    <div
                      className="text-xs mb-1"
                      style={{ color: s.color, fontFamily: mono, letterSpacing: "0.04em" }}
                    >
                      {s.label.toUpperCase()}
                    </div>
                    <p className="text-sm" style={{ color: C.text }}>
                      {reviewSampleQuotes[s.label]}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}