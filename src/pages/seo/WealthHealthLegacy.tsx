import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";

const WealthHealthLegacy = () => {
  useEffect(() => {
    setPageMeta(
      "Wealth, Health & Legacy | Build Generational Wealth with Kangen Water | Mehdi Cohen True Legacy",
      "Learn how to build wealth, optimize health with Kangen Water and molecular hydrogen, and create a lasting legacy. Mehdi Cohen's True Legacy framework — operating in 170+ countries worldwide."
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">The Three Pillars</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              Wealth Health Legacy — <span className="text-gradient-gold">The Three Pillars of True Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground font-body leading-[1.9] font-bold mb-8">
              True Legacy is built on three non-negotiable pillars: wealth, health, and legacy. Founded by CEO Mehdi Cohen, this global wellness movement teaches you how to scale all three simultaneously — because you can't build a lasting legacy without first building a strong body and a strong income.
            </p>
          </motion.div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Pillar 1: Wealth — Scale Your Income</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Financial freedom isn't optional — it's the foundation. True Legacy provides a high-ticket, done-for-you wellness business model with multiple income streams. Whether you're a solopreneur, a side-hustler, or ready to go all-in, the True Legacy system helps you earn income from home and build passive income that grows with your team. Generational wealth starts with the decision to build — and True Legacy gives you the blueprint.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Pillar 2: Health — Scale Your Body</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Your body is your most valuable asset. True Legacy promotes holistic wellness through Kangen Water — alkaline ionized water rich in molecular hydrogen, antioxidant water with negative ORP properties, and micro-clustered for superior cellular hydration. Combined with peak performance habits like morning routines, discipline, and anti-aging practices, True Legacy members optimize for longevity and vitality.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Pillar 3: Legacy — Build What Lasts</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold">
              Legacy isn't just about money — it's about purpose, faith, and impact. Mehdi Cohen built True Legacy on the belief that everyone has the capacity to leave something meaningful behind. Through community, accountability, brotherhood and sisterhood, and faith-driven leadership, True Legacy members build businesses and lives that transcend generations.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://form.jotform.com/260564894519066" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold">
              Join the True Legacy Movement
            </a>
            <a href="/global" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors">
              Back to Home
            </a>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  );
};

export default WealthHealthLegacy;
