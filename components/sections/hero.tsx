"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImage from "/public/images/young-woman.jpg";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.to(imageRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(blobRef.current, {
        yPercent: -30,
        xPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.to(blob2Ref.current, {
        yPercent: 40,
        xPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
      aria-label="Hero"
    >
      {/* Ambient dew blobs */}
      <div
        ref={blobRef}
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-dew/40 blur-3xl"
      />
      <div
        ref={blob2Ref}
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-moss-pale/70 blur-3xl"
      />

      <div className="container-lux relative grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow mb-6"
          >
            Radiant skin, rooted in melanin
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-balance font-display text-[13vw] font-light leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Eudora,
            <br />
            <TypewriterEffectSmooth
              words={[
                { text: "where", className: "italic text-moss-deep" },
                { text: "melanin", className: "italic text-moss-deep" },
                { text: "glows.", className: "italic text-moss-deep" },
              ]}
              className="!text-[13vw] !font-light !leading-[0.98] !tracking-tight sm:!text-6xl lg:!text-7xl"
              cursorClassName="bg-moss-deep"
            />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft"
          >
            Formulated to work with deeper skin tones, not around them. Every
            product pairs potent, research-backed ingredients with nourishing
            botanicals in a simple daily ritual — made to even tone, deepen
            hydration, and reveal the glow that's already yours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button size="lg" asChild>
              <a href="#products">Shop the Ritual</a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="#ingredients">Explore Ingredients</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 flex items-center gap-6 text-sm text-ink-soft"
          >
            <span className="font-display text-2xl text-ink">4.9</span>
            <span className="max-w-[180px] leading-snug">
              from over 12,000 verified reviews
            </span>
          </motion.div>
        </div>

        <div className="relative z-10">
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl shadow-lift"
          >
            <Image
              src={heroImage}
              alt="LUMÈRE Bio-Renew Serum bottle resting on a linen surface beside dried botanicals"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 480px"
              className="object-fill"
            />
            <div className="glass absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-lg px-5 py-4">
              <div>
                <p className="font-display text-lg">Healthy Skin Starts Here</p>
                <p className="text-xs text-ink-soft">
                  Radiant • Hydrated • Naturally Glowing
                </p>
              </div>
              <Button size="sm" variant="light">
                Explore
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#products"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-ink-soft sm:flex"
        aria-label="Scroll to products"
      >
        <span className="eyebrow !text-ink-soft">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.span>
      </motion.a>
    </section>
  );
}
