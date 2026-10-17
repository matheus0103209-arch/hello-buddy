import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "bg-background/95 shadow-soft backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#inicio" className="font-display text-2xl tracking-tight text-foreground">
          {siteConfig.name}
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton className="px-5 py-2.5">Agendar atendimento</WhatsAppButton>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-foreground md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Menu mobile"
          className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-4 font-display text-xl text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <WhatsAppButton className="mt-6 w-full">Agendar atendimento</WhatsAppButton>
        </nav>
      )}
    </header>
  );
}
