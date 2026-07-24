import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Truck, RotateCcw, PackageCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping & Returns",
  description:
    "Shipping timelines, costs, and our returns & exchanges policy.",
};

const SHIPPING_RATES = [
  { region: "Colombo & Suburbs", time: "1–2 business days", cost: "Free over Rs. 5,000 · Rs. 350" },
  { region: "Rest of Sri Lanka", time: "2–4 business days", cost: "Free over Rs. 7,000 · Rs. 550" },
  { region: "International", time: "7–14 business days", cost: "Calculated at checkout" },
];

const FAQ = [
  {
    q: "When will my order ship?",
    a: "Orders are processed within 1–2 business days. You'll receive a shipping confirmation email with a tracking link as soon as your order leaves our studio.",
  },
  {
    q: "Can I change my shipping address after ordering?",
    a: "If your order hasn't shipped yet, email us right away at hello@eudoraskincare.com with your order number and we'll do our best to update it before dispatch.",
  },
  {
    q: "What's your return window?",
    a: "Unopened, unused products can be returned within 14 days of delivery for a full refund. Opened products can be exchanged within 14 days if you have a reaction or the product isn't right for your skin.",
  },
  {
    q: "How do I start a return or exchange?",
    a: "Email hello@eudoraskincare.com with your order number and reason for return. We'll send you a return authorization and instructions — please don't send items back without this, as we can't guarantee they'll be matched to your order.",
  },
  {
    q: "Who pays for return shipping?",
    a: "For change-of-mind returns, return shipping is covered by the customer. If an item arrived damaged, defective, or incorrect, we cover the cost of return shipping and the replacement.",
  },
  {
    q: "How long do refunds take?",
    a: "Once we receive and inspect your return, refunds are processed within 3–5 business days to your original payment method. Your bank or card provider may take a few extra days to reflect it.",
  },
  {
    q: "What if my order arrives damaged?",
    a: "We're sorry! Email us within 48 hours of delivery with your order number and a photo of the damaged item, and we'll send a replacement or issue a full refund at no extra cost to you.",
  },
];

export default function ShippingReturnsPage() {
  return (
    <main id="main-content" className="bg-bone">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <span className="font-body text-xs uppercase tracking-[0.25em] text-ink/50">
          Support
        </span>
        <h1 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
          Shipping & Returns
        </h1>
        <p className="font-body mt-5 max-w-xl text-ink/70">
          Everything you need to know about how your order gets to you, and
          what to do if it's not quite right.
        </p>

        {/* Shipping rates table */}
        <section className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Truck className="h-4 w-4 text-ink/50" />
            <h2 className="font-display text-xl text-ink">
              Shipping Timelines & Rates
            </h2>
          </div>
          <div className="overflow-hidden border border-ink/10">
            <table className="font-body w-full text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 bg-ink/[0.03] text-ink/50">
                  <th className="px-5 py-3 font-medium">Region</th>
                  <th className="px-5 py-3 font-medium">Delivery Time</th>
                  <th className="px-5 py-3 font-medium">Cost</th>
                </tr>
              </thead>
              <tbody>
                {SHIPPING_RATES.map((row, i) => (
                  <tr
                    key={row.region}
                    className={i !== SHIPPING_RATES.length - 1 ? "border-b border-ink/10" : ""}
                  >
                    <td className="px-5 py-4 text-ink">{row.region}</td>
                    <td className="px-5 py-4 text-ink/70">{row.time}</td>
                    <td className="px-5 py-4 text-ink/70">{row.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="font-body mt-3 text-xs text-ink/40">
            Rates and timelines are estimates and may vary during peak
            seasons or for remote areas.
          </p>
        </section>

        {/* Returns overview */}
        <section className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div className="border border-ink/10 p-6">
            <RotateCcw className="h-4 w-4 text-ink/50" />
            <h3 className="font-display mt-3 text-lg text-ink">
              14-Day Returns
            </h3>
            <p className="font-body mt-2 text-sm text-ink/70">
              Unused, unopened products can be returned within 14 days of
              delivery for a full refund to your original payment method.
            </p>
          </div>
          <div className="border border-ink/10 p-6">
            <PackageCheck className="h-4 w-4 text-ink/50" />
            <h3 className="font-display mt-3 text-lg text-ink">
              Damaged on Arrival
            </h3>
            <p className="font-body mt-2 text-sm text-ink/70">
              If something arrives damaged or incorrect, tell us within 48
              hours and we'll replace it or refund you — no return shipping
              cost to you.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="font-display mb-4 text-xl text-ink">
            Common Questions
          </h2>
          <Accordion className="font-body">
            {FAQ.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-ink/10">
                <AccordionTrigger className="text-left text-ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink/70">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <p className="font-body mt-16 border-t border-ink/10 pt-6 text-sm text-ink/60">
          Still have a question we haven't covered? Reach out on our{" "}
          <a href="/contact" className="text-ink underline-offset-4 hover:underline">
            contact page
          </a>{" "}
          and we'll get back to you within one business day.
        </p>
      </div>
    </main>
  );
}