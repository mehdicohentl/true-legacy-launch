import { motion } from "framer-motion";
import trueLegacyLogo from "@/assets/true-legacy-logo.png";
import mehdiLogo from "@/assets/mehdi-logo.png";

interface HeroSectionProps {
  lang: "en" | "es";
}

const HeroSection = ({ lang }: HeroSectionProps) => {
  const videoId = lang === "en" ? "4Xq6np66vaE" : "8i8o6FbbleA";

  const t = {
    en: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Your Story",
      headline2: "Doesn't End",
      headline3: "Where You Started.",
      sub: "I went from nothing to building a global team, changing lives through health & financial freedom. Now it's your turn.",
      cta1: "Get The Healing Water Here",
      cta2: "Make Income With True Legacy",
      proof: "Join 50+ years of Enagic excellence",
    },
    es: {
      micro: "Mehdi Cohen · True Legacy World",
      headline1: "Tu Historia",
      headline2: "No Termina",
      headline3: "Donde Empezaste.",
      sub: "Pase de no tener nada a construir un equipo global, cambiando vidas a traves de la salud y la libertad financiera. Ahora es tu turno.",
      cta1: "Obtener El Agua Sanadora",
      cta2: "Genera Ingresos Con True Legacy",
      proof: "Unete a 50+ anos de excelencia Enagic",
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-hero-gradient noise-overlay overflow-hidden pt-20">
      {/* Ambient orbs */}
      <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-primary/6 rounded-full blur-[150px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center relative z-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-4xl text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] text-accent/80 mb-6"
          >
            {t[lang].micro}
          </motion.p>

          <h1 className="font-display font-black leading-[0.9] mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground">{t[lang].headline1}</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground/60">{t[lang].headline2}</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-gradient-gold">{t[lang].headline3}</span>
          </h1>

          <p className="text-sm md:text-base text-muted-foreground font-body leading-[1.8] max-w-2xl mx-auto mb-8 font-light">
            {t[lang].sub}
          </p>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-4xl mb-10"
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="VSL Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-3xl mb-6"
        >
          <motion.a
            href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow transition-all"
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
            className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.12em] border border-foreground/20 text-foreground hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {t[lang].cta2}
          </motion.a>
        </motion.div>

        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
          {t[lang].proof}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
