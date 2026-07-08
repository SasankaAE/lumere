"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden py-24 sm:py-32" aria-label="Newsletter signup">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-dew-pale/60 blur-3xl"
      />
      <div className="container-lux relative max-w-2xl text-center">
        <Reveal>
          <p className="eyebrow mb-4">Stay in the Ritual</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            15% off your first order.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-ink-soft">
            Join our list for early access to launches, formulation notes,
            and skin science &mdash; no more than twice a month.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-moss-pale px-6 py-4 text-moss-deep"
            >
              <Check className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium">You&rsquo;re on the list. Check your inbox.</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              noValidate
            >
              <div className="flex-1 text-left">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="h-12 w-full rounded-full border border-ink/15 bg-bone px-5 text-sm outline-none transition-colors focus:border-ink"
                  aria-invalid={!!error}
                  aria-describedby={error ? "newsletter-error" : undefined}
                />
                {error && (
                  <p id="newsletter-error" className="mt-2 px-2 text-xs text-dew-deep">
                    {error}
                  </p>
                )}
              </div>
              <Button type="submit" size="lg" className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
