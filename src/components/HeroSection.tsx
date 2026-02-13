import { motion } from "framer-motion";
import mehdiHero from "@/assets/mehdi-hero.png";

interface HeroSectionProps {
  lang: "en" | "es";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const t = {
    en: {
      tagline: "True Legacy World",
      headline: "Build Your Life.",
      subline: "Regardless of Where You Came From.",
      desc: "Your background doesn't define your future. With the right system, the right water, and the right team — you write your own story.",
      cta1: "Get Your Kangen Water",
      cta2: "Join The Team",
    },
    es: {
      tagline: "True Legacy World",
      headline: "Construye Tu Vida.",
      subline: "Sin Importar De Dónde Vengas.",
      desc: "Tu origen no define tu futuro. Con el sistema correcto, el agua correcta y el equipo correcto — tú escribes tu propia historia.",
      cta1: "Obtén Tu Agua Kangen",
      cta2: "Únete Al Equipo",
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(hsl(213 70% 45% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(213 70% 45% / 0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary text-accent font-body font-bold text-xs uppercase tracking-[0.25em] mb-6 border border-accent/20"
          >
            {t[lang].tagline}
          </motion.span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-2">
            <span className="text-foreground">{t[lang].headline}</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-gradient-gold mb-6">
            {t[lang].subline}
          </h2>

          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-lg mb-10">
            {t[lang].desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-bold text-base uppercase tracking-widest bg-accent text-accent-foreground shadow-gold animate-pulse-glow transition-all"
            >
              {t[lang].cta1}
            </motion.a>

            <motion.a
              href="https://truelegacyworld.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-bold text-base uppercase tracking-widest border-2 border-primary text-primary-foreground bg-primary/10 hover:bg-primary/20 shadow-glow transition-all"
            >
              {t[lang].cta2}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
          <img
            src={mehdiHero}
            alt="Mehdi Cohen"
            className="relative z-10 w-full max-w-md lg:max-w-lg object-cover rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
