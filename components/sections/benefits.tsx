"use client";

import { benefits } from "@/lib/data";
import { Reveal, RevealStagger, staggerItem } from "@/components/motion/reveal";
import { motion } from "framer-motion";

export function Benefits() {
  return (
    <section id="benefits" className="relative overflow-hidden bg-ink py-24 text-bone sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-moss-deep/30 blur-3xl"
      />
      <div className="container-lux relative">
        <Reveal className="mb-16 max-w-xl">
          <p className="eyebrow mb-4 !text-dew">Why LUMÈRE</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Formulated with proof, not promises.
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-px overflow-hidden rounded-lg bg-bone/10 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={staggerItem}
              whileHover={{ backgroundColor: "rgba(247,244,238,0.06)" }}
              className="flex flex-col justify-between gap-10 bg-ink p-8"
            >
              <div>
                <h3 className="font-display text-xl">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone/70">
                  {benefit.description}
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-dew">{benefit.stat}</p>
                <p className="mt-1 text-xs text-bone/50">{benefit.statLabel}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
