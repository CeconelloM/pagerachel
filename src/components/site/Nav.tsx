import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Trabalho", href: "#work" },
  { label: "História", href: "#story" },
  { label: "Serviços", href: "#services" },
  { label: "Contato", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-background/40 backdrop-blur-xl border-b border-border" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-5 md:h-20 md:px-10">
          <a href="#top" className="font-logo text-[2rem] leading-none text-ink md:text-[2.4rem]">
            De Vecchi
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-fluid-eyebrow text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden text-fluid-eyebrow text-ink underline underline-offset-8 decoration-ink/40 hover:decoration-ink md:inline-block"
          >
            Agendar sessão
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="flex h-11 w-11 items-center justify-center md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-7 bg-ink" />
              <span className="h-px w-5 bg-ink ml-auto" />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-logo text-[2rem] leading-none text-ink">De Vecchi</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex h-11 w-11 items-center justify-center text-2xl"
              >
                ×
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-5 pt-10">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                  className="font-serif text-6xl tracking-tight text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 border-t border-border pt-8 text-fluid-eyebrow text-ink-soft"
              >
                racheldevecchi@gmail.com<br />Lisboa · Almada · São Paulo
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
