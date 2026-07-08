"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: 1 | -1) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative bg-moss-pale py-24 sm:py-32"
      aria-label="Customer testimonials"
    >
      <div className="container-lux">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <p className="eyebrow mb-4">In Their Words</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Trusted by 40,000 skin journeys.
          </h2>
        </Reveal>

        <div className="relative mx-auto max-w-2xl">
          <div className="relative min-h-[220px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.figure
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass rounded-lg p-8 text-center sm:p-12"
              >
                <div className="mb-5 flex justify-center gap-1" aria-hidden="true">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="text-balance font-display text-xl leading-snug sm:text-2xl">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink-soft">
                  <span className="font-semibold text-ink">{current.name}</span>
                  {" · "}
                  {current.role}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-bone shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Select testimonial">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === index ? "w-6 bg-ink" : "w-2 bg-ink/20"
                  )}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-bone shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
