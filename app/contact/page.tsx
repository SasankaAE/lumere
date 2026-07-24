"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Instagram } from "lucide-react";

/**
 * Contact page — /contact
 * -----------------------------------------------------------------------
 * Two-column layout: brand info + ways to reach us on the left,
 * a contact form on the right. Posts to /api/contact — wire that
 * route up to Resend (or whichever mailer you're using elsewhere)
 * to actually deliver the message; this component only handles the
 * client-side submit state.
 *
 * Update the placeholders in CONTACT_DETAILS below with your real
 * email, address, and hours.
 */

const CONTACT_DETAILS = {
  email: "hello@eudoraskincare.com",
  address: "12 Orchard Lane, Colombo 05, Sri Lanka",
  hours: "Mon – Fri, 9:00 AM – 6:00 PM",
  instagram: "@eudoraskincare",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <main id="main-content" className="container-lux min-h-screen ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 py-20 md:grid-cols-2 md:gap-12 md:py-28">
        {/* Left — intro + details */}
        <div>
          <span className="font-body text-xs uppercase tracking-[0.25em] text-ink/50">
            Contact
          </span>
          <h1 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
            We'd love to hear from you.
          </h1>
          <p className="font-body mt-5 max-w-md text-ink/70">
            Questions about an order, a formulation, or your skin's specific
            needs — our team reads every message and typically replies within
            one business day.
          </p>

          <div className="mt-12 space-y-6 border-t border-ink/10 pt-8">
            <div className="flex items-start gap-4">
              <Mail className="mt-1 h-4 w-4 shrink-0 text-ink/50" />
              <div>
                <p className="font-body text-sm text-ink/50">Email</p>
                <a
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="font-body text-ink underline-offset-4 hover:underline"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-ink/50" />
              <div>
                <p className="font-body text-sm text-ink/50">Studio</p>
                <p className="font-body text-ink">{CONTACT_DETAILS.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="mt-1 h-4 w-4 shrink-0 text-ink/50" />
              <div>
                <p className="font-body text-sm text-ink/50">Hours</p>
                <p className="font-body text-ink">{CONTACT_DETAILS.hours}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="mt-1 h-4 w-4 shrink-0 text-ink/50" />
              <div>
                <p className="font-body text-sm text-ink/50">Instagram</p>
                <a
                  href={`https://instagram.com/${CONTACT_DETAILS.instagram.replace("@", "")}`}
                  className="font-body text-ink underline-offset-4 hover:underline"
                >
                  {CONTACT_DETAILS.instagram}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="border border-ink/10 bg-bone p-8 sm:p-10 rounded-4xl">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-16 text-center">
              <p className="font-display text-2xl text-ink">
                Message sent.
              </p>
              <p className="font-body mt-3 max-w-xs text-sm text-ink/60">
                Thank you for reaching out — we'll get back to you within one
                business day.
              </p>
              <Button
                variant="primary"
                className="font-body mt-8"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-body text-ink/70">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Your name"
                    className="font-body"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body text-ink/70">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@example.com"
                    className="font-body"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="font-body text-ink/70">
                  Subject
                </Label>
                <Input
                  id="subject"
                  required
                  value={form.subject}
                  onChange={update("subject")}
                  placeholder="Order, product question, wholesale…"
                  className="font-body"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="font-body text-ink/70">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Tell us how we can help"
                  className="font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="font-body w-full bg-ink text-bone hover:bg-ink/90"
                size="lg"
              >
                {status === "submitting" ? "Sending…" : "Send message"}
              </Button>

              {status === "error" && (
                <p className="font-body text-center text-sm text-red-600">
                  Something went wrong — please try again, or email us
                  directly at {CONTACT_DETAILS.email}.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </main>
  );
}