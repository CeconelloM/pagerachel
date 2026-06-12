import { useRef, useState } from "react";
import { motion } from "framer-motion";

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  return (
    <motion.button
      ref={ref}
      type="submit"
      onMouseMove={onMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.4 }}
      className="group relative flex h-32 w-32 items-center justify-center rounded-full border border-ink/40 text-fluid-eyebrow text-ink transition-colors hover:border-ink md:h-40 md:w-40"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-2 rounded-full bg-ink scale-0 transition-transform duration-500 group-hover:scale-100" />
      <span className="absolute inset-2 flex items-center justify-center text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-fluid-eyebrow">Enviar →</span>
    </motion.button>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <div className="grid gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="text-fluid-eyebrow text-ink-soft">Capítulo IV — O Início</span>
            <h2 className="mt-6 font-serif text-fluid-hero text-ink leading-[0.85]">
              Criemos<br /><span className="italic text-ink-soft">algo silencioso.</span>
            </h2>
            <p className="mt-10 max-w-md text-sm leading-relaxed text-ink-soft">
              Fale-me sobre o trabalho. Respondo a cada consulta em dois dias, muitas vezes de
              uma estação de trem ou do saguão de um hotel.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-8"
          >
            {[
              { label: "Nome", type: "text", placeholder: "João da Silva" },
              { label: "E-mail", type: "email", placeholder: "joao.silva@gmail.com" },
              { label: "Projeto", type: "text", placeholder: "Editorial, cerimônia, campanha…" },
            ].map((f) => (
              <label key={f.label} className="flex flex-col gap-3">
                <span className="text-fluid-eyebrow text-ink-soft">{f.label}</span>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="min-h-11 border-b border-border bg-transparent pb-3 font-serif text-2xl text-ink placeholder:text-ink-soft/40 focus:border-ink focus:outline-none"
                />
              </label>
            ))}
            <label className="flex flex-col gap-3">
              <span className="text-fluid-eyebrow text-ink-soft">Mensagem</span>
              <textarea
                rows={3}
                placeholder="Algumas palavras…"
                className="resize-none border-b border-border bg-transparent pb-3 font-serif text-xl text-ink placeholder:text-ink-soft/40 focus:border-ink focus:outline-none"
              />
            </label>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-fluid-eyebrow text-ink-soft max-w-[12rem]">
                racheldevecchi@gmail.com<br />+55 (11) 97433-5459
              </span>
              <MagneticButton>Enviar</MagneticButton>
            </div>
          </form>
        </div>
      </div>

      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-6 px-5 py-8 text-fluid-eyebrow text-ink-soft md:grid-cols-3 md:px-10">
          <span className="flex flex-col gap-0.5">
            <span className="font-logo text-[2rem] leading-none text-ink">De Vecchi</span>
            <span className="text-fluid-eyebrow text-ink-soft">-</span>
          </span>
          <span className="md:text-center">Lisboa · Almada · São Paulo</span>
          <span className="md:text-right">Instagram — Facebook </span>
        </div>
      </footer>
    </section>
  );
}
