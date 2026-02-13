import { motion } from "framer-motion";
import mehdiHero from "@/assets/mehdi-hero.png";

interface HeroSectionProps {
  lang: "en" | "es";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const t = {
    en: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Your Story",
      headline2: "Doesn't End",
      headline3: "Where You Started.",
      sub: "I went from nothing to building a global team, changing lives through health & financial freedom. Now it's your turn.",
      cta1: "I Want The Water",
      cta2: "I Want The Business",
      proof: "Join 50+ years of Enagic excellence",
    },
    es: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Tu Historia",
      headline2: "No Termina",
      headline3: "Donde Empezaste.",
      sub: "Pasé de no tener nada a construir un equipo global, cambiando vidas a través de la salud y la libertad financiera. Ahora es tu turno.",
      cta1: "Quiero El Agua",
      cta2: "Quiero El Negocio",
      proof: "Únete a 50+ años de excelencia Enagic",
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient noise-overlay overflow-hidden pt-16">
      {/* Ambient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      {/* Thin horizontal line accent */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />

      <div className="container mx-auto px-4 grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent/80 mb-8"
          >
            {t[lang].micro}
          </motion.p>

          <h1 className="font-display font-black leading-[0.88] mb-8">
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] text-foreground">{t[lang].headline1}</span>
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] text-foreground/60">{t[lang].headline2}</span>
            <span className="block text-5xl md:text-7xl lg:text-[5.5rem] text-gradient-gold italic">{t[lang].headline3}</span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground font-body leading-[1.8] max-w-xl mb-12 font-light">
            {t[lang].sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.a
              href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.15em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              {t[lang].cta1}
            </motion.a>

            <motion.a
              href="https://truelegacyworld.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.15em] border border-foreground/20 text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {t[lang].cta2}
            </motion.a>
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
            ── {t[lang].proof}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-primary/5 to-transparent rounded-3xl blur-3xl scale-110" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-[60px]" />
          
          <div className="relative">
            <img
              src={mehdiHero}
              alt="Mehdi Cohen — Team Leader, True Legacy World"
              className="relative z-10 w-full max-w-sm lg:max-w-md object-cover rounded-2xl shadow-deep"
            />
            {/* Accent corner marks */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent/40 rounded-tl-lg z-20" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent/40 rounded-br-lg z-20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
