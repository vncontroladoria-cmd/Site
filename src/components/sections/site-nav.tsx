"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // A barra só ganha fundo/borda depois que a página sai do topo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled
          ? "border-b border-white/[0.06] bg-base/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-accent/20 text-[13px] font-semibold text-fg shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]">
            VN
          </span>
          <span className="text-[15px] font-medium tracking-tight text-fg">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-fg-muted transition-colors duration-200 hover:bg-white/[0.05] hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" href="#ebooks">
            eBooks
          </Button>
          <Button size="sm" href="/diagnostico">
            Fazer diagnóstico
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-fg-muted transition-colors hover:bg-white/[0.05] hover:text-fg md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/[0.06] bg-base/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-fg-muted transition-colors hover:bg-white/[0.05] hover:text-fg"
                >
                  {item.label}
                </a>
              ))}
              <Button className="mt-3 w-full" href="/diagnostico">
                Fazer diagnóstico
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
