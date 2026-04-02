import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";
import mehdiAwards from "@/assets/mehdi-awards.jpg";
import { setPageMeta } from "@/lib/seo";

const WhoIsMehdiCohen = () => {
  useEffect(() => {
    setPageMeta(
      "Who Is Mehdi Cohen? CEO of True Legacy | Kangen Water Distributor | USA & Global",
      "Mehdi Cohen is the CEO and founder of True Legacy — a global wealth, health, and legacy movement in 51+ countries. Top Enagic Kangen Water distributor. From zero to global CEO. mehdicohen.com"
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">The True Legacy Story</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              Who Is Mehdi Cohen? <span className="text-gradient-gold">The CEO Behind True Legacy</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground font-body leading-[1.9] font-bold mb-8">
              Mehdi Cohen is the CEO and founder of True Legacy — a global wealth, health, and legacy movement operating in 51+ countries. As a top Kangen Water distributor and wellness entrepreneur, Mehdi has built a community of thousands who are scaling their health and their income simultaneously.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <img src={mehdiPortrait} alt="Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com" className="rounded-xl w-full h-80 object-cover object-top border border-border/50" />
            <img src={mehdiAwards} alt="Mehdi Cohen True Legacy CEO awards recognition Enagic Kangen water mehdicohen.com" className="rounded-xl w-full h-80 object-cover object-top border border-border/50" />
          </div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">From Zero to Global CEO — The Mehdi Cohen Story</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Mehdi Cohen's journey is one of discipline, faith, and relentless purpose. Arriving in the United States at age 11 with his mother, Mehdi grew up without legal status — unable to work, attend school, or access the opportunities most people take for granted. Instead of giving up, he developed an elite mindset, hustling every day to survive and eventually thrive.
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              In 2016, Mehdi discovered Kangen Water technology and saw its transformative power — both for personal wellness and as a vehicle for financial freedom. He made the decision to treat it as a real business, investing in his personal brand, building a professional foundation, and leading with thought leadership. Today, Mehdi Cohen leads the True Legacy team, a brotherhood and sisterhood of wellness entrepreneurs building generational wealth across 51+ countries.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">The CEO Wealth Health Legacy Lifestyle</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Mehdi Cohen embodies the CEO lifestyle — peak performance, morning routine discipline, holistic wellness, and accountability. His approach combines faith and purpose with multiple income streams, passive income strategies, and a done-for-you wellness ecosystem that helps solopreneurs and entrepreneurs build in public while scaling their health and wealth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Why Follow Mehdi Cohen?</h2>
            <ul className="space-y-3 text-base md:text-lg text-foreground font-body font-bold">
              <li>✦ CEO & founder of True Legacy — operating in 51+ countries</li>
              <li>✦ Top Kangen Water distributor and wellness educator</li>
              <li>✦ Proven track record of helping people earn income from home in 2026</li>
              <li>✦ Advocate for longevity, anti-aging, cellular hydration, and holistic wellness</li>
              <li>✦ Building generational wealth through faith, discipline, and community</li>
            </ul>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://form.jotform.com/260564894519066" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold">
              Join True Legacy Today
            </a>
            <a href="/global" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors">
              Explore mehdicohen.com
            </a>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  );
};

export default WhoIsMehdiCohen;
