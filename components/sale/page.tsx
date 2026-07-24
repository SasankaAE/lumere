"use client";

import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * MidSeasonOfferPopup
 * -----------------------------------------------------------------------
 * A large, split-layout promo dialog (image left, offer + countdown
 * right) in a lavender + beige palette to match the mid-season
 * campaign artwork. Opens automatically on page load, once per
 * browser session.
 *
 * Setup:
 *   1. Place the campaign image at /public/images/mid-season-offer.png
 *      (the file you generated works as-is).
 *   2. Make sure shadcn's dialog + button exist:
 *        npx shadcn@latest add dialog button
 *   3. Render once near the top of your layout or homepage:
 *
 *   <MidSeasonOfferPopup
 *     endsAt="2026-08-03T23:59:59+05:30"
 *     discountLabel="Up to 40% off"
 *     ctaHref="/sale"
 *   />
 */

interface MidSeasonOfferPopupProps {
  /** ISO date string for when the offer ends (include timezone offset) */
  endsAt: string;
  /** Short headline for the discount, e.g. "Up to 40% off" */
  discountLabel?: string;
  /** Where the CTA button should navigate */
  ctaHref?: string;
  /** Path to the campaign image, relative to /public */
  imageSrc?: string;
  /** Session storage key, change if you run multiple campaigns */
  storageKey?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  expired: boolean;
}

function getTimeLeft(target: number): TimeLeft {
  const diff = target - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    expired: false,
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-[#B9A9D9]/50 bg-white/70 shadow-sm sm:h-16 sm:w-16">
        <span className="font-serif text-2xl tabular-nums text-[#5B4B7A] sm:text-3xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.15em] text-[#6B5D52]/60">
        {label}
      </span>
    </div>
  );
}

export function MidSeasonOfferPopup({
  endsAt,
  discountLabel = "Up to 40% off",
  ctaHref = "/sale",
  imageSrc = "/images/mid-season-offer.jpg",
  storageKey = "eudora_mid_season_popup_seen",
}: MidSeasonOfferPopupProps) {
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  const target = new Date(endsAt).getTime();

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(storageKey, "1");
    } catch {
      // sessionStorage unavailable (private mode etc.) — fail silently
    }
  }, [storageKey]);

  // Decide whether to show the popup on mount
  useEffect(() => {
    if (Date.now() >= target) return; // offer already ended, never show
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(storageKey) === "1";
    } catch {
      // ignore
    }
    if (!alreadySeen) {
      const timer = setTimeout(() => setOpen(true), 600); // small delay after load
      return () => clearTimeout(timer);
    }
  }, [storageKey, target]);

  // Live countdown tick
  useEffect(() => {
    if (!open) return;
    setTimeLeft(getTimeLeft(target));
    const interval = setInterval(() => {
      const t = getTimeLeft(target);
      setTimeLeft(t);
      if (t.expired) clearInterval(interval);
    }, 1000);
    return () => clearInterval(interval);
  }, [open, target]);

  return (
    <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : close())}>
      <AnimatePresence>
        {open && (
          <DialogContent
            className="max-w-3xl overflow-hidden border border-[#B9A9D9]/30 bg-[#FBF6ED] p-0 text-[#4A3F35] shadow-[0_20px_60px_-15px_rgba(139,123,168,0.35)] sm:rounded-2xl"
            showCloseButton={false}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid grid-cols-1 sm:grid-cols-2"
            >
              <button
                onClick={close}
                aria-label="Close offer"
                className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 text-[#5B4B7A] transition hover:bg-white"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image half */}
              <div className="relative h-56 sm:h-full">
                <Image
                  src={imageSrc}
                  alt="Eudora mid-season offer — up to 40% off"
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FBF6ED]/40 via-transparent to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-[#FBF6ED]/10" />
              </div>

              {/* Content half */}
              <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#F3EAF7] to-[#FBF6ED] px-8 py-10 text-center">
                <span className="mb-3 rounded-full border border-[#B9A9D9]/60 bg-white/60 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#7A6A9A]">
                  Mid-Season Offer
                </span>

                <h2 className="font-serif text-[28px] leading-tight text-[#5B4B7A] sm:text-[32px]">
                  {discountLabel}
                </h2>
                <p className="mt-2 max-w-xs text-sm text-[#6B5D52]/80">
                  Across Teen Angels, Divine Feminity, Golden Aura &amp;
                  Timeless Grace — while the season lasts.
                </p>

                {timeLeft && !timeLeft.expired ? (
                  <div className="mt-6 flex items-center gap-3">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <span className="pb-4 text-[#B9A9D9]">:</span>
                    <TimeUnit value={timeLeft.hours} label="Hrs" />
                    <span className="pb-4 text-[#B9A9D9]">:</span>
                    <TimeUnit value={timeLeft.minutes} label="Min" />
                    <span className="pb-4 text-[#B9A9D9]">:</span>
                    <TimeUnit value={timeLeft.seconds} label="Sec" />
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-[#6B5D52]/60">
                    This offer has ended.
                  </p>
                )}

                <Link href={ctaHref} onClick={close} className="mt-8 w-full">
                  <Button
                    className="w-full bg-[#8B7BA8] text-white hover:bg-[#7A6A9A]"
                    size="lg"
                  >
                    Shop the offer
                  </Button>
                </Link>

                <button
                  onClick={close}
                  className="mt-3 text-xs text-[#6B5D52]/50 underline-offset-4 hover:text-[#6B5D52] hover:underline"
                >
                  Maybe later
                </button>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}

export default MidSeasonOfferPopup;