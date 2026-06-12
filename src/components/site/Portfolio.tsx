import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import p1 from "@/assets/port-1.jpg";
import p2 from "@/assets/port-2.jpg";
import p3 from "@/assets/port-3.jpg";
import p4 from "@/assets/port-4.jpg";
import p5 from "@/assets/port-5.jpg";
import p6 from "@/assets/port-6.jpg";

const works = [
  { src: p1, title: "Véu Carmesim", cat: "Editorial", year: "2026" },
  { src: p2, title: "Horas de Concreto", cat: "Arquitetura", year: "2025" },
  { src: p3, title: "Promessa de Brasas", cat: "Cerimônia", year: "2025" },
  { src: p4, title: "Deriva", cat: "Paisagem", year: "2024" },
  { src: p5, title: "Polite Aarne", cat: "Produto", year: "2025" },
  { src: p6, title: "Silêncio Neon", cat: "Rua", year: "2024" },
];

export function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-72%"]);

  return (
    <section id="work" className="relative bg-background">
      {/* Header */}
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-40">
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <span className="text-fluid-eyebrow text-ink-soft">Índice — 001 / Selecionados</span>
            <h2 className="mt-6 font-serif text-fluid-display text-ink">
              Onde a emoção<br />
              <span className="italic text-ink-soft">encontra a imagem.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft">
            Seis capítulos de comissões recentes entre eventos, campanha politica e cerimônia.
            Cada enquadramento é revelado, capturado com autenticidade.
          </p>
        </div>
      </div>

      {/* Desktop horizontal */}
      <div ref={ref} className="relative mt-16 hidden h-[400vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 pl-10 pr-[20vw] will-change-transform">
            {works.map((w, idx) => (
              <figure
                key={w.title}
                data-cursor-hover
                className="group relative h-[78vh] shrink-0 overflow-hidden"
                style={{ width: idx % 2 === 0 ? "62vh" : "78vh" }}
              >
                <img
                  src={w.src}
                  alt={w.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div>
                    <div className="text-fluid-eyebrow text-ink-soft">{String(idx + 1).padStart(2, "0")} — {w.cat}</div>
                    <h3 className="mt-2 font-serif text-3xl text-ink">{w.title}</h3>
                  </div>
                  <span className="text-fluid-eyebrow text-ink-soft">{w.year}</span>
                </figcaption>
              </figure>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile masonry */}
      <div className="mt-12 grid grid-cols-2 gap-3 px-5 md:hidden">
        {works.map((w, idx) => (
          <motion.figure
            key={w.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden ${idx % 3 === 0 ? "aspect-[3/4] col-span-2" : "aspect-[3/4]"}`}
          >
            <img src={w.src} alt={w.title} loading="lazy" className="h-full w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background to-transparent p-3">
              <div>
                <div className="text-[0.6rem] tracking-[0.25em] uppercase text-ink-soft">{w.cat}</div>
                <div className="font-serif text-lg text-ink">{w.title}</div>
              </div>
              <span className="text-[0.6rem] tracking-[0.25em] text-ink-soft">{w.year}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
