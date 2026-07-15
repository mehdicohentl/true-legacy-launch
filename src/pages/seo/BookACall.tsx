import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import mehdiHeadshot from "@/assets/mehdi-headshot.png";
import { setPageMeta } from "@/lib/seo";

const BookACall = () => {
  useEffect(() => {
    setPageMeta(
      "Book a Wellness Call with Mehdi Cohen | Kangen Water & True Legacy Consultation",
      "Schedule a free one-on-one wellness call with Mehdi Cohen — CEO of True Legacy. Learn about Kangen Water, EmGuarde EMF protection, and how to build income with a global team in 170+ countries."
    );
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar lang="en" />
      <main className="pt-24 pb-20">
        <article className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">Start Your Journey</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.1] mb-6">
              Book a Call with Mehdi Cohen — <span className="text-gradient-gold">Start Your True Legacy Journey</span>
            </h1>
          </motion.div>

          <div className="flex justify-center mb-10">
            <img src={mehdiHeadshot} alt="Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com" className="w-32 h-32 rounded-full object-cover object-top border-4 border-accent/40" />
          </div>

          <section className="mb-12 text-center">
            <p className="text-lg md:text-xl text-foreground font-body leading-[1.9] font-bold mb-6 max-w-2xl mx-auto">
              Ready to scale your health and wealth? Book a free 30-minute clarity call with Mehdi Cohen or a True Legacy team leader. This call is for anyone serious about building a wellness income opportunity, joining the global True Legacy team, or learning how Kangen Water can transform your life.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-black mb-4 text-center">What We'll Cover on Your Clarity Call</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                "Your goals — health, income, or both",
                "How True Legacy works in 170+ countries",
                "The Kangen Water business model explained",
                "Your personalized next steps to get started",
              ].map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-5 flex gap-3 items-start">
                  <span className="text-accent font-bold">✦</span>
                  <p className="font-body text-base text-foreground font-bold">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-col items-center gap-4">
            <a href="https://calendly.com/aquacharged/true-legacy-one-on-one" target="_blank" rel="noopener noreferrer" className="cta-shimmer inline-flex items-center justify-center gap-3 px-12 py-6 rounded-xl font-body font-black text-lg uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow">
              Book Your Free 30-Minute Call Now
            </a>
            <a href="https://wa.me/18649072149" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors">
              Or Message Mehdi on WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  );
};

export default BookACall;
