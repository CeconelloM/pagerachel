import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [hero1, hero2, hero3];

export function Hero() {
  const [i, setI] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={i}
            src={slides[i]}
            alt=""
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-5 pb-10 pt-28 md:px-10 md:pb-16 md:pt-32"
      >
        <div className="flex items-end justify-end">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden text-fluid-eyebrow text-ink-soft md:block"
          >
            Editorial · Moda · Cinema
          </motion.span>
        </div>

        <div className="flex flex-col">
          <motion.h1
            className="font-serif text-fluid-hero text-ink"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
          >
            {["A imagem", "Autêntica"].map((line, idx) => (
              <motion.span
                key={line}
                className={`block ${idx === 1 ? "italic text-ink-soft pl-[15%] md:pl-[28%] -mt-2 md:-mt-6" : ""}`}
                variants={{
                  hidden: { opacity: 0, y: 60 },
                  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-sm text-base leading-relaxed text-ink-soft md:max-w-md">
              Especializada em fotografia editorial e de moda, traduzindo conceitos, texturas e
              expressões em imagens marcantes. Criando narrativas visuais com base em Lisboa e
              produções em escala internacional.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setI(idx)}
                    aria-label={`Imagem ${idx + 1}`}
                    className="h-11 w-11 flex items-center justify-center"
                  >
                    <span
                      className={`block h-px transition-all ${
                        idx === i ? "w-8 bg-ink" : "w-4 bg-ink-soft"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <a
                href="#work"
                className="text-fluid-eyebrow text-ink underline-offset-8 underline decoration-ink/30 hover:decoration-ink"
              >
                Rolar · Índice
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
