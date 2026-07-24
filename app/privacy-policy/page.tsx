import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How EUDORA collects, uses, and protects your personal information.",
};

const LAST_UPDATED = "July 24, 2026";

const SECTIONS = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-it", title: "How We Use Your Information" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "payment-processing", title: "Payment Processing" },
  { id: "sharing", title: "How We Share Information" },
  { id: "retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights & Choices" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="bg-bone">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <span className="font-body text-xs uppercase tracking-[0.25em] text-ink/50">
          Legal
        </span>
        <h1 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="font-body mt-3 text-sm text-ink/50">
          Last updated {LAST_UPDATED}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-16">
          {/* Table of contents */}
          <nav
            aria-label="Table of contents"
            className="h-fit space-y-1 border-t border-ink/10 pt-6 md:sticky md:top-24 md:border-t-0 md:pt-0"
          >
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="font-body block py-1 text-sm text-ink/60 hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>

          {/* Content */}
          <div className="font-body max-w-2xl space-y-14 text-ink/80">
            <p className="text-ink/80">
              EUDORA ("we," "us," or "our") respects your privacy and is
              committed to protecting the personal information you share with
              us. This policy explains what we collect, how we use it, and
              the choices you have. By using our website or purchasing our
              products, you agree to the practices described here.
            </p>

            <section id="information-we-collect" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                1. Information We Collect
              </h2>
              <p>We collect information you provide directly, including:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Contact details — name, email address, phone number, and
                  shipping/billing address when you place an order or
                  contact us.
                </li>
                <li>
                  Account information — if you create an account, we store
                  your login credentials and order history.
                </li>
                <li>
                  Payment information — processed securely by our payment
                  partners; we do not store full card numbers on our servers.
                </li>
                <li>
                  Communications — messages you send via our contact form,
                  email, or social channels.
                </li>
              </ul>
              <p className="mt-3">
                We also automatically collect some technical information,
                such as your IP address, browser type, device information,
                and pages visited, through cookies and similar technologies.
              </p>
            </section>

            <section id="how-we-use-it" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Process and fulfill your orders, including shipping and customer support.</li>
                <li>Send order confirmations, shipping updates, and respond to inquiries.</li>
                <li>Improve our website, products, and shopping experience.</li>
                <li>Send marketing communications, only where you've opted in — you can unsubscribe at any time.</li>
                <li>Detect and prevent fraud, and comply with legal obligations.</li>
              </ul>
            </section>

            <section id="cookies" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                3. Cookies & Tracking
              </h2>
              <p>
                We use cookies and similar technologies to keep your cart
                working, remember your preferences, and understand how
                visitors use our site. You can control cookies through your
                browser settings; disabling them may affect some site
                features, such as checkout.
              </p>
            </section>

            <section id="payment-processing" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                4. Payment Processing
              </h2>
              <p>
                Payments are handled by third-party payment processors. When
                you check out, your payment details are sent directly to
                these providers under their own privacy and security
                policies — we do not have access to, or store, your full
                card or bank details.
              </p>
            </section>

            <section id="sharing" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                5. How We Share Information
              </h2>
              <p>We do not sell your personal information. We share it only with:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Service providers who help us operate — shipping carriers, payment processors, and email/communications platforms.</li>
                <li>Legal authorities, where required by law or to protect our rights.</li>
                <li>A successor entity, in the event of a merger, acquisition, or sale of assets.</li>
              </ul>
            </section>

            <section id="retention" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                6. Data Retention
              </h2>
              <p>
                We retain personal information for as long as needed to
                fulfill the purposes outlined in this policy, including
                order records for accounting and legal purposes, unless a
                longer retention period is required by law.
              </p>
            </section>

            <section id="your-rights" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                7. Your Rights & Choices
              </h2>
              <p>Depending on where you live, you may have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Access, correct, or delete the personal information we hold about you.</li>
                <li>Opt out of marketing emails at any time via the unsubscribe link.</li>
                <li>Request a copy of your data in a portable format.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us using the
                details below.
              </p>
            </section>

            <section id="children" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                8. Children's Privacy
              </h2>
              <p>
                Our products and website are not directed at children under
                16, and we do not knowingly collect personal information from
                children. If you believe a child has provided us with
                personal information, please contact us so we can remove it.
              </p>
            </section>

            <section id="changes" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this policy from time to time. Changes will be
                posted on this page with an updated "Last updated" date. We
                encourage you to review it periodically.
              </p>
            </section>

            <section id="contact" className="scroll-mt-24">
              <h2 className="font-display mb-4 text-2xl text-ink">
                10. Contact Us
              </h2>
              <p>
                Questions about this policy or how your data is handled?
                Reach us at{" "}
                <a
                  href="mailto:hello@eudoraskincare.com"
                  className="text-ink underline-offset-4 hover:underline"
                >
                  hello@eudoraskincare.com
                </a>{" "}
                or via our{" "}
                <a href="/contact" className="text-ink underline-offset-4 hover:underline">
                  contact page
                </a>
                .
              </p>
            </section>

            <p className="border-t border-ink/10 pt-6 text-xs text-ink/40">
              This policy is provided as a general template and should be
              reviewed by legal counsel before publishing, to ensure it
              reflects your actual data practices and complies with
              applicable laws in the regions you operate and ship to.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}