import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";

const WhatIsTrueLegacy = () => {
  useEffect(() => {
    setPageMeta(
      "What Is True Legacy? Wealth, Health & Legacy Movement | Mehdi Cohen | Global 170+ Countries",
      "True Legacy is Mehdi Cohen's global movement for building wealth, health, and generational legacy. Distributes Kangen Water and EmGuarde in 170+ countries. Faith, discipline, and purpose-driven entrepreneurship."
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">The Movement</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              What Is True Legacy — <span className="text-gradient-gold">The Global Wealth Health and Legacy Movement</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground font-body leading-[1.9] font-bold mb-8">
              True Legacy is more than a team — it's a global wellness ecosystem founded by Mehdi Cohen, operating in 170+ countries. Built on the three pillars of wealth, health, and legacy, True Legacy empowers ordinary people to build extraordinary lives through Kangen Water distribution, personal development, and community accountability.
            </p>
          </motion.div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">The Three Pillars: Wealth, Health & Legacy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Wealth", desc: "Scale your income with multiple income streams, passive income opportunities, and a high-ticket wellness business. Financial freedom is not a dream — it's a plan." },
                { title: "Health", desc: "Fuel your body with alkaline ionized water, molecular hydrogen, and holistic wellness practices. Longevity, anti-aging, and peak performance start with what you drink." },
                { title: "Legacy", desc: "Build generational wealth and leave a legacy of purpose. True Legacy is about faith, discipline, and building something that outlasts you." },
              ].map((pillar, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-black text-lg text-accent mb-2">{pillar.title}</h3>
                  <p className="font-body text-sm text-foreground font-bold leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Why True Legacy Is Different</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Unlike generic network marketing teams, True Legacy is built on brotherhood and sisterhood, accountability, and real results. Led by CEO Mehdi Cohen, every member gets access to a done-for-you system, thought leadership training, and a global community of wellness entrepreneurs who are building in public — sharing their journey, their wins, and their growth.
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold">
              Whether you're a solopreneur looking to earn income from home in 2026, or someone seeking holistic wellness and purpose, True Legacy meets you where you are and helps you scale to where you want to be.
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

export default WhatIsTrueLegacy;
