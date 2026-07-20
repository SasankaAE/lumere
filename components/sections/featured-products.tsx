"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/lib/data";
import { Reveal, RevealStagger, staggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FeaturedProducts() {
  return (
    <section
      id="products"
      className="relative py-24 sm:py-32"
      aria-label="Featured products"
    >
      <div className="container-lux">
        <Reveal className="mb-16 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">The Collection</p>
            <h2 className="max-w-lg text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
              Four formulas. One complete ritual.
            </h2>
          </div>
          <p className="max-w-sm text-ink-soft">
            Each product is designed to work in concert &mdash; layered together
            or used alone, without compromise.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={staggerItem}
              whileHover="hover"
              className="group relative flex flex-col overflow-hidden rounded-lg bg-linen"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Link href="/shop">
                  <motion.div
                    variants={{ hover: { scale: 1.06 } }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={product.image}
                      alt={`${product.name}`}
                      fill
                      sizes="(max-width: 768px) 90vw, 320px"
                      className="object-fill"
                    />
                  </motion.div>

                  <span className="absolute left-4 top-4 rounded-full bg-bone/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                    {product.tag}
                  </span>
                </Link>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl leading-snug">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {product.description}
                </p>
              </div>
            </motion.article>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
