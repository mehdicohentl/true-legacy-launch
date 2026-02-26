import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mehdiLifestyle from "@/assets/mehdi-lifestyle.jpg";

const CeoDailyProtocol = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Peak Performance</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              The CEO Daily Protocol — <span className="text-gradient-gold">Mehdi Cohen's Morning Routine for Peak Performance</span>
            </h1>
          </motion.div>

          <img src={mehdiLifestyle} alt="Mehdi Cohen True Legacy CEO lifestyle peak performance morning routine mehdicohen.com" className="rounded-xl w-full h-80 object-cover object-top border border-border/50 mb-12" />

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Scale Your Body and Your Income — The Mehdi Cohen Way</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold mb-4">
              Mehdi Cohen's daily protocol is designed for one thing: peak performance in every area of life. As the CEO of True Legacy, Mehdi believes that scaling your health is the prerequisite to scaling your income. His morning routine combines faith and purpose, discipline, holistic wellness, and the elite mindset needed to build generational wealth.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">The Morning Routine</h2>
            <div className="space-y-4">
              {[
                { time: "5:00 AM", action: "Wake up — start with gratitude and faith. No phone for the first 30 minutes." },
                { time: "5:30 AM", action: "Hydrate with Kangen Water — alkaline ionized water rich in molecular hydrogen for cellular hydration and anti-aging benefits." },
                { time: "6:00 AM", action: "Physical training — strength, cardio, or mobility work. Peak performance demands a strong body." },
                { time: "7:00 AM", action: "Cold shower and personal development — read, listen, or study. Thought leadership starts with learning." },
                { time: "8:00 AM", action: "Business time — team calls, content creation, building in public. Scale your income with discipline and consistency." },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 flex gap-4">
                  <span className="font-mono text-sm text-accent font-bold whitespace-nowrap">{item.time}</span>
                  <p className="font-body text-base text-foreground font-bold leading-relaxed">{item.action}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">Faith, Purpose, and Generational Wealth</h2>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold">
              For Mehdi Cohen, the CEO lifestyle isn't about luxury — it's about purpose. Every decision, every habit, and every relationship is filtered through faith and the desire to build something that lasts. True Legacy isn't just a business — it's a movement rooted in accountability, brotherhood and sisterhood, and the belief that everyone deserves the opportunity to scale their health and wealth.
            </p>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://form.jotform.com/260564894519066" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold">
              Start Your True Legacy Journey
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

export default CeoDailyProtocol;
