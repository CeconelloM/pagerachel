import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Portfolio } from "@/components/site/Portfolio";
import { Story } from "@/components/site/Story";
import { Services } from "@/components/site/Services";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "De Vecchi — Fotografia" },
      { name: "description", content: "Fotografia editorial e de moda por Rachel De Vecchi — moda, cerimônia, arquitetura." },
      { property: "og:title", content: "De Vecchi — Fotografia" },
      { property: "og:description", content: "Fotografia editorial e de moda por Rachel De Vecchi." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <Portfolio />
      <Story />
      <Services />
      <Contact />
    </main>
  );
}
