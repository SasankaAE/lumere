"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  C,
  formatLKR,
  mono,
  salaries,
  salaryBreakdown,
  SectionLabel,
} from "../lib/shared";

interface SalariesSectionProps {
  setRef: (el: HTMLElement | null) => void;
}

export default function SalariesSection({ setRef }: SalariesSectionProps) {
  const [selected, setSelected] = React.useState<
    (typeof salaries)[number] | null
  >(null);

  return (
    <section id="salaries" data-section-id="salaries" ref={setRef}>
      <SectionLabel id="SEC-04" title="Salaries" icon={DollarSign} />
      <Card style={{ background: C.panel, border: `1px solid ${C.line}` }}>
        <CardHeader>
          <CardTitle
            style={{ color: C.text, fontFamily: mono, fontSize: "0.9rem" }}
          >
            AVERAGE BASE SALARY BY LEVEL (LKR)
          </CardTitle>
          <CardDescription style={{ color: C.muted }}>
            Reported base salary ranges across engineering, design, and
            analytics roles.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ width: "100%", height: 280 }}>
            <ResponsiveContainer>
              <BarChart
                data={salaries}
                margin={{ top: 5, right: 10, left: -10, bottom: 0 }}
              >
                <CartesianGrid stroke={C.line} strokeDasharray="3 3" />
                <XAxis
                  dataKey="level"
                  stroke={C.muted}
                  tick={{ fill: C.muted, fontSize: 12 }}
                />
                <YAxis
                  stroke={C.muted}
                  tick={{ fill: C.muted, fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    background: C.panel,
                    border: `1px solid ${C.line}`,
                    borderRadius: 8,
                    color: C.text,
                  }}
                />
                <Bar
                  dataKey="avg"
                  name="Avg. base (LKR K)"
                  fill={C.cyan}
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
            {salaries.map((s) => (
              <button
                key={s.level}
                type="button"
                onClick={() => setSelected(s)}
                className="text-left rounded-lg px-4 py-3 transition-colors hover:opacity-80 focus:outline-none focus:ring-2"
                style={{
                  background: C.panelSoft,
                  border: `1px solid ${C.line}`,
                  cursor: "pointer",
                }}
              >
                <div
                  className="text-xs"
                  style={{ color: C.muted, fontFamily: mono }}
                >
                  {s.level.toUpperCase()}
                </div>
                <div className="text-sm font-medium" style={{ color: C.text }}>
                  {formatLKR(s.low)}K – {formatLKR(s.high)}K
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent
          style={{
            background: C.panel,
            border: `1px solid ${C.line}`,
            color: C.text,
          }}
        >
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle style={{ fontFamily: mono, color: C.text }}>
                  {selected.level.toUpperCase()}
                </DialogTitle>
                <DialogDescription style={{ color: C.muted }}>
                  Base salary range and monthly departmental breakdown.
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-3 gap-3 mt-2">
                <div
                  className="rounded-lg px-3 py-2"
                  style={{
                    background: C.panelSoft,
                    border: `1px solid ${C.line}`,
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: C.muted, fontFamily: mono }}
                  >
                    LOW
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: C.text }}
                  >
                    {formatLKR(selected.low)}K
                  </div>
                </div>
                <div
                  className="rounded-lg px-3 py-2"
                  style={{
                    background: C.panelSoft,
                    border: `1px solid ${C.line}`,
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: C.muted, fontFamily: mono }}
                  >
                    AVG
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: C.cyan }}
                  >
                    {formatLKR(selected.avg)}K
                  </div>
                </div>
                <div
                  className="rounded-lg px-3 py-2"
                  style={{
                    background: C.panelSoft,
                    border: `1px solid ${C.line}`,
                  }}
                >
                  <div
                    className="text-xs"
                    style={{ color: C.muted, fontFamily: mono }}
                  >
                    HIGH
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: C.text }}
                  >
                    {formatLKR(selected.high)}K
                  </div>
                </div>
              </div>

              {salaryBreakdown[selected.level]?.length > 0 && (
                <div className="mt-4">
                  <div
                    className="text-xs mb-2"
                    style={{
                      color: C.muted,
                      fontFamily: mono,
                      letterSpacing: "0.05em",
                    }}
                  >
                    DEPARTMENT BREAKDOWN
                  </div>
                  <div
                    className="max-h-64 overflow-y-auto rounded-lg"
                    style={{ border: `1px solid ${C.line}` }}
                  >
                    {salaryBreakdown[selected.level].map((item, i) => (
                      <div
                        key={item.role}
                        className="flex items-center justify-between px-3 py-2 text-sm"
                        style={{
                          borderTop: i === 0 ? "none" : `1px solid ${C.line}`,
                          background: i % 2 === 0 ? C.panel : C.panelSoft,
                        }}
                      >
                        <span style={{ color: C.text }}>{item.role}</span>
                        <span style={{ color: C.cyan, fontFamily: mono }}>
                          {formatLKR(item.amount)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div
                    className="flex items-center justify-between px-3 py-2 mt-2 rounded-lg text-sm font-medium"
                    style={{
                      background: C.panelSoft,
                      border: `1px solid ${C.line}`,
                    }}
                  >
                    <span style={{ color: C.text }}>Total</span>
                    <span style={{ color: C.text, fontFamily: mono }}>
                      {formatLKR(
                        salaryBreakdown[selected.level].reduce(
                          (sum, item) => sum + item.amount,
                          0,
                        ),
                      )}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
