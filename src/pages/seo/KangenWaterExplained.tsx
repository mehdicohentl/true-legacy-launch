import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kangenMachine from "@/assets/kangen-water-machine.png";

const KangenWaterExplained = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Kangen Water Science</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              Kangen Water Explained — <span className="text-gradient-gold">Why Mehdi Cohen Uses and Recommends It</span>
            </h1>
          </motion.div>

          <div className="flex justify-center mb-12">
            <img src={kangenMachine} alt="Mehdi Cohen True Legacy CEO Kangen K8 water machine alkaline ionized water wellness mehdicohen.com" className="max-w-sm w-full drop-shadow-2xl" />
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">What Is Kangen Water?</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Kangen Water is alkaline ionized water produced by Enagic's medical-grade water ionizers. Rich in molecular hydrogen and antioxidant properties, Kangen Water has been used in Japanese hospitals for decades. The Enagic K8 machine — the flagship model recommended by Mehdi Cohen — produces water with negative ORP (oxidation-reduction potential) that supports cellular hydration, longevity, and anti-aging at the molecular level.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Kangen Water Credibility — Why Athletes and Doctors Trust It</h2>
            <ul className="space-y-3 text-base md:text-lg text-foreground font-body font-bold">
              <li>✦ Used by professional athletes worldwide for peak performance and recovery</li>
              <li>✦ ISO certified manufacturer with 38+ years of Japanese engineering excellence</li>
              <li>✦ Used in hospitals across Japan for over five decades</li>
              <li>✦ Alkaline ionized water with negative ORP antioxidant properties</li>
              <li>✦ Micro-clustered for superior cellular hydration — penetrates cells 6x faster</li>
              <li>✦ The Enagic K8 machine is the best water ionizer for longevity in 2026</li>
              <li>✦ 7 pH levels — from strong acidic disinfectant to strong alkaline for drinking</li>
              <li>✦ Molecular hydrogen provides anti-aging and antioxidant benefits at the cellular level</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Why Mehdi Cohen Chose Kangen Water</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              As a wellness entrepreneur and CEO of True Legacy, Mehdi Cohen doesn't just distribute Kangen Water — he lives it. His morning routine starts with hydrogen-rich alkaline water, fueling his elite mindset, discipline, and peak performance throughout the day. For Mehdi, Kangen Water is the foundation of holistic wellness — the first step in scaling your health before scaling your income.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-primary text-primary-foreground shadow-glow">
              Get Your Kangen Water Machine
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

export default KangenWaterExplained;
