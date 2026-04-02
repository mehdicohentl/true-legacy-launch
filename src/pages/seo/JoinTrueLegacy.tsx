import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";

const JoinTrueLegacy = () => {
  useEffect(() => {
    setPageMeta(
      "Join True Legacy | Build Wealth, Health & Legacy with Mehdi Cohen | 51+ Countries",
      "Join True Legacy — Mehdi Cohen's global wellness and wealth movement operating in 51+ countries. Earn income distributing Kangen Water and EmGuarde EMF protection. CEO mentorship, done-for-you system."
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Your Invitation</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              How to Join the True Legacy Team — <span className="text-gradient-gold">Build Income in 51+ Countries</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground font-body leading-[1.9] font-bold mb-8">
              Join Mehdi Cohen's True Legacy team and start building your wellness income opportunity today. Whether you're looking to earn income from home in 2026, build generational wealth, or simply improve your health — True Legacy gives you the system, the community, and the mentorship to make it happen.
            </p>
          </motion.div>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">What You Get When You Join True Legacy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Done-For-You System", desc: "Access a proven, high-ticket wellness business model with multiple income streams and passive income potential." },
                { title: "Global Community", desc: "Join a brotherhood and sisterhood of wellness entrepreneurs operating in 51+ countries with real accountability." },
                { title: "CEO Mentorship", desc: "Learn directly from Mehdi Cohen — thought leadership, personal brand building, and the elite mindset needed to scale." },
                { title: "Wellness Products", desc: "Distribute Kangen Water machines and EmGuarde EMF protection devices — products backed by decades of science and trust." },
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-6">
                  <h3 className="font-display font-black text-lg text-accent mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-foreground font-bold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4">How to Get Started</h2>
            <div className="space-y-4">
              {[
                "Fill out the True Legacy application form below.",
                "A team member will reach out to schedule your one-on-one clarity call.",
                "Get onboarded into the True Legacy system — training, community access, and your personal business plan.",
                "Start building your wellness income from anywhere in the world."
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <span className="font-display font-black text-accent text-sm">{i + 1}</span>
                  </div>
                  <p className="font-body text-base md:text-lg text-foreground font-bold leading-relaxed pt-1.5">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://form.jotform.com/260564894519066" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow">
              Apply to Join True Legacy Now
            </a>
            <a href="https://calendly.com/aquacharged/true-legacy-one-on-one" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors">
              Book a Clarity Call
            </a>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  );
};

export default JoinTrueLegacy;
