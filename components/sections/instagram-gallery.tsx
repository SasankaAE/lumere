"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
import { instagramPosts } from "@/lib/data";
import { Reveal, RevealStagger, staggerItem } from "@/components/motion/reveal";

export function InstagramGallery() {
  return (
    <section className="relative py-24 sm:py-32" aria-label="Instagram gallery">
      <div className="container-lux">
        <Reveal className="mb-14 flex flex-col items-center gap-3 text-center">
          <p className="eyebrow">@lumereskincare</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Join the ritual, tag your glow.
          </h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post, i) => (
            <motion.a
              key={i}
              variants={staggerItem}
              href="#"
              aria-label={`View Instagram post with ${post.likes} likes`}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                <Image
                  src={post.image}
                  alt="LUMÈRE community skincare photo"
                  fill
                  sizes="(max-width: 768px) 45vw, 200px"
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 bg-ink/0 text-bone opacity-0 transition-all duration-300 group-hover:bg-ink/40 group-hover:opacity-100">
                <Heart className="h-4 w-4 fill-bone" aria-hidden="true" />
                <span className="text-sm font-medium">{post.likes}</span>
              </div>
            </motion.a>
          ))}
        </RevealStagger>

        <div className="mt-10 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition-all hover:border-ink"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
