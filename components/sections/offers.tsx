"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { offers } from "@/lib/data";
import { Reveal, RevealStagger, staggerItem } from "@/components/motion/reveal";

export function Offers() {
  return (
    <section id="offers" className="relative py-24 sm:py-32">
      <div className="container-lux">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow mb-4">Special Offers</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Value that earns its place.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-ink-soft">
            No gimmicks, no hidden terms. Every offer is designed to reward
            genuine loyalty and first-time discovery.
          </p>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <motion.div
              key={offer.name}
              variants={staggerItem}
              className="group relative overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={offer.image}
                    alt={`${offer.name} — ${offer.origin}`}
                    fill
                    sizes="(max-width: 768px) 45vw, 300px"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
                  <h3 className="font-display text-lg">{offer.name}</h3>
                  <p className="text-xs text-bone/70">{offer.origin}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {offer.benefit}
              </p>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}