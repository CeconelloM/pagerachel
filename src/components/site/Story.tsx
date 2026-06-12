import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import rachelPhoto from "@/assets/rachel.foto.png";

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -80]);
  const clip = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["inset(20% 10% 20% 10%)", "inset(0% 0% 0% 0%)", "inset(8% 4% 8% 4%)"],
  );

  return (
    <section
      id="story"
      ref={ref}
      className="relative mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-40"
    >
      <div className="flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-fluid-eyebrow text-ink-soft"
        >
          Capítulo II — A Fotógrafa
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-serif text-fluid-display text-ink"
        >
          Trabalho onde o<br />
          <span className="italic text-ink-soft">silêncio toma forma.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 max-w-md space-y-6 text-base leading-relaxed text-ink-soft"
        >
          <p>
            Fotógrafa profissional com 6 anos de experiência em capturar momentos que
            transcendem o óbvio — onde a luz, a emoção e o instante se encontram numa
            única imagem.
          </p>
          <p>
            Trabalhei em <em className="text-ink not-italic">Estúdios de Fotografia</em>,{" "}
            <em className="text-ink not-italic">Campanha Presidencial</em> e{" "}
            <em className="text-ink not-italic">Eventos Corporativos</em>. E também em
            feiras, ensaios externos e casamentos.
          </p>
        </motion.div>
      </div>

      <motion.div style={{ y }} className="relative aspect-[3/4] w-full">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0 overflow-hidden">
          <img
            src={rachelPhoto}
            alt="Rachel De Vecchi — fotógrafa"
            loading="lazy"
            className="h-full w-full object-cover object-top"
          />
        </motion.div>
        <div className="pointer-events-none absolute -bottom-4 -left-4 border border-border p-4 backdrop-blur-md bg-background/30 md:-bottom-6 md:-left-6">
          <div className="text-fluid-eyebrow text-ink-soft">Rachel De Vecchi</div>
          <div className="font-serif text-xl text-ink">est. 2020</div>
        </div>
      </motion.div>
    </section>
  );
}
