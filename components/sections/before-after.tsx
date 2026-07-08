"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <section
      className="relative py-24 sm:py-32"
      aria-label="Before and after results"
    >
      <div className="container-lux">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Real Results</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Four weeks, same light, no filter.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-soft">
            Drag the divider to compare. Results shown reflect consistent
            twice-daily use of the full ritual.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto max-w-3xl">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-lg shadow-lift sm:aspect-[16/10]"
            onMouseMove={(e) =>
              dragging.current && updateFromClientX(e.clientX)
            }
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          >
            <Image
              src="/images/skin-before.png"
              alt="Skin after four weeks of consistent LUMÈRE use, showing improved texture and tone"
              fill
              sizes="(max-width: 768px) 90vw, 720px"
              className="object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/skin-after.jpg"
                alt="Skin after four weeks of consistent LUMÈRE use, showing improved texture and tone"
                fill
                sizes="(max-width: 768px) 90vw, 720px"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone">
                After
              </span>
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs text-bone">
              Before
            </span>

            <motion.div
              className="absolute top-0 bottom-0 flex w-1 cursor-grab items-center justify-center bg-bone active:cursor-grabbing"
              style={{ left: `${position}%` }}
              onMouseDown={() => (dragging.current = true)}
              onTouchStart={() => (dragging.current = true)}
            >
              <div className="glass flex h-11 w-11 items-center justify-center rounded-full shadow-soft">
                <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
              </div>
            </motion.div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Comparison slider position"
            className="mt-6 w-full accent-[var(--color-moss-deep)]"
          />
        </Reveal>
      </div>
    </section>
  );
}
