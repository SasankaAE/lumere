import { Instagram, Facebook, Youtube } from "lucide-react";
import { navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-linen pt-16 pb-8">
      <div className="container-lux">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a href="#top" className="font-display text-2xl">
              EUDORA
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Bioactive botanical skincare, formulated in small batches for
              skin that changes with you.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-bone transition-colors hover:bg-ink hover:text-bone"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Shop</h3>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              <li><a href="#" className="transition-colors hover:text-ink">About</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Sustainability</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Careers</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Support</h3>
            <ul className="flex flex-col gap-3 text-sm text-ink-soft">
              <li><a href="#faq" className="transition-colors hover:text-ink">FAQ</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Shipping &amp; Returns</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-ink">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-ink-faint sm:flex-row">
          <p>&copy; {new Date().getFullYear()} EUDORA. All rights reserved.</p>
          <p>Formulated and produced with care.</p>
        </div>
      </div>
    </footer>
  );
}
