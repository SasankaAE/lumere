"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { routineSteps } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const angleFor = (index: number) => index * 90 - 90;

export function Routine() {
  const [active, setActive] = useState(0);
  const step = routineSteps[active];

  return (
    <section id="routine" className="relative py-24 sm:py-32">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">The Ritual</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Four steps.
            <br />
            Two minutes, twice daily.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Turn the dial to move through the morning and evening ritual.
            Each step is timed so the actives beneath it are given room to
            absorb before the next.
          </p>

          <div className="mt-10 flex gap-3" role="tablist" aria-label="Routine steps">
            {routineSteps.map((s, i) => (
              <button
                key={s.step}
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-all duration-300",
                  active === i
                    ? "border-ink bg-ink text-bone"
                    : "border-ink/15 text-ink-soft hover:border-ink/40"
                )}
              >
                {s.time} · {s.step}
              </button>
            ))}
          </div>

          <div className="relative mt-8 min-h-[140px] overflow-hidden rounded-lg bg-linen p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl">{step.name}</h3>
                  <span className="text-xs text-ink-faint">{step.duration}</span>
                </div>
                <p className="mt-2 text-sm text-ink-soft">{step.detail}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto">
          <div className="relative h-[320px] w-[320px] sm:h-[380px] sm:w-[380px]">
            {/* Static ring */}
            <svg viewBox="0 0 380 380" className="absolute inset-0 h-full w-full -rotate-90">
              <circle
                cx="190"
                cy="190"
                r="170"
                fill="none"
                stroke="var(--color-moss-pale)"
                strokeWidth="1.5"
              />
              {routineSteps.map((s, i) => {
                const gap = 6;
                const start = i * 90 + gap;
                const end = (i + 1) * 90 - gap;
                const circumference = 2 * Math.PI * 170;
                const dash = ((end - start) / 360) * circumference;
                const offset = (start / 360) * circumference;
                return (
                  <circle
                    key={s.step}
                    cx="190"
                    cy="190"
                    r="170"
                    fill="none"
                    stroke={active === i ? "var(--color-moss-deep)" : "var(--color-ink-faint)"}
                    strokeOpacity={active === i ? 1 : 0.35}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${circumference - dash}`}
                    strokeDashoffset={-offset}
                    style={{ transition: "stroke 0.4s ease, stroke-opacity 0.4s ease" }}
                  />
                );
              })}
            </svg>

            {/* Rotating pointer */}
            <motion.div
              className="absolute inset-0 flex items-start justify-center"
              animate={{ rotate: angleFor(active) }}
              transition={{ type: "spring", stiffness: 90, damping: 16 }}
            >
              <div className="mt-2 h-4 w-4 rounded-full bg-dew-deep shadow-soft" />
            </motion.div>

            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="glass flex h-40 w-40 flex-col items-center justify-center rounded-full sm:h-48 sm:w-48">
                <span className="eyebrow">{step.time} Ritual</span>
                <span className="mt-2 font-display text-3xl">{step.step}</span>
                <span className="mt-1 text-xs text-ink-soft">of 04</span>
              </span>
            </div>

            {/* Step buttons at quadrant positions */}
            {routineSteps.map((s, i) => {
              const angle = (i * 90 * Math.PI) / 180;
              const radius = 170;
              const x = 190 + radius * Math.sin(angle);
              const y = 190 - radius * Math.cos(angle);
              return (
                <button
                  key={s.step}
                  onClick={() => setActive(i)}
                  aria-label={`View ${s.time} step ${s.step}: ${s.name}`}
                  style={{
                    left: `${(x / 380) * 100}%`,
                    top: `${(y / 380) * 100}%`,
                  }}
                  className={cn(
                    "absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 text-xs font-semibold transition-all duration-300",
                    active === i
                      ? "scale-110 border-moss-deep bg-moss-deep text-bone"
                      : "border-bone bg-bone text-ink-soft shadow-soft hover:scale-105"
                  )}
                >
                  {s.step}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
