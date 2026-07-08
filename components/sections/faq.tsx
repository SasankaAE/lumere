"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 sm:py-32" aria-label="Frequently asked questions">
      <div className="container-lux max-w-3xl">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-4">Good to Know</p>
          <h2 className="text-balance font-display text-4xl font-light leading-tight sm:text-5xl">
            Frequently asked questions.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={faq.question}
                value={`item-${i}`}
                className="overflow-hidden rounded-lg bg-linen"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-lg">
                    {faq.question}
                    <Plus
                      className="h-4 w-4 flex-shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
                      aria-hidden="true"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-ink-soft data-[state=open]:animate-[accordion-down_0.3s_ease-out] data-[state=closed]:animate-[accordion-up_0.3s_ease-out]">
                  <p className="px-6 pb-6 leading-relaxed">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
