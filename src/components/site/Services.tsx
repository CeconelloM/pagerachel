import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import p1 from "@/assets/port-1.jpg";
import p3 from "@/assets/port-3.jpg";
import p5 from "@/assets/port-5.jpg";
import p2 from "@/assets/port-2.jpg";

const services = [
  { id: "editorial", title: "Editorial & Moda", price: "a partir de €6.400", img: p1, body: "Produção de dia completo. Conceito, casting, iluminação, retoque. Entregue em 14 dias." },
  { id: "wedding", title: "Cerimônia & Votos", price: "a partir de €4.800", img: p3, body: "Um dia documental em dois capítulos. 400+ frames, selecionados à mão e finalizados em tons de arquivo." },
  { id: "product", title: "Objeto & Produto", price: "a partir de €2.200", img: p5, body: "Campanhas de estúdio com iluminação escultural. Precificação por peça para catálogos acima de 12 SKUs." },
  { id: "spaces", title: "Arquitetura & Espaços", price: "a partir de €3.600", img: p2, body: "Interiores, hotéis e imóveis fotografados com profundidade cinematográfica. Trabalho com drone disponível." },
];

export function Services() {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="mb-16 md:mb-24">
          <span className="text-fluid-eyebrow text-ink-soft">Capítulo III — Comissões</span>
          <h2 className="mt-6 font-serif text-fluid-display text-ink">
            Escolha um serviço.<br /><span className="italic text-ink-soft">Veja-o à luz.</span>
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <div className="border-t border-border">
            {services.map((s) => {
              const open = s.id === active;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s.id)}
                  className="block w-full border-b border-border py-6 text-left transition-colors hover:bg-accent/30 md:py-8"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                    <div className="min-w-0">
                      <div className="flex items-baseline gap-4">
                        <span className="text-fluid-eyebrow text-ink-soft">{services.indexOf(s) < 9 ? `0${services.indexOf(s) + 1}` : services.indexOf(s) + 1}</span>
                        <h3 className="font-serif text-2xl text-ink md:text-3xl">{s.title}</h3>
                      </div>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="max-w-md pl-0 text-sm leading-relaxed text-ink-soft md:pl-12"
                          >
                            {s.body}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="shrink-0 text-fluid-eyebrow text-ink">{s.price}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.id}
                src={current.img}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background/80 to-transparent p-6">
              <span className="font-serif text-xl italic text-ink">{current.title}</span>
              <span className="text-fluid-eyebrow text-ink-soft">— agendando agora</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
