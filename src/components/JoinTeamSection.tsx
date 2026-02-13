import { motion } from "framer-motion";

interface JoinTeamSectionProps {
  lang: "en" | "es";
}

const JoinTeamSection = ({ lang }: JoinTeamSectionProps) => {
  const t = {
    en: {
      tag: "Ready to Change Your Life?",
      headline: "Join The True Legacy Team",
      desc: "Whether you want to build a business, transform your health, or both — the True Legacy team has a proven system that works. No background required. Just commitment.",
      cta: "Join True Legacy World",
      youtube: "Watch Our Content",
      stats: [
        { num: "50+", label: "Years of Enagic" },
        { num: "100+", label: "Countries" },
        { num: "∞", label: "Potential" },
      ],
    },
    es: {
      tag: "¿Listo Para Cambiar Tu Vida?",
      headline: "Únete Al Equipo True Legacy",
      desc: "Ya sea que quieras construir un negocio, transformar tu salud, o ambos — el equipo True Legacy tiene un sistema probado que funciona. No importa tu origen. Solo compromiso.",
      cta: "Únete a True Legacy World",
      youtube: "Mira Nuestro Contenido",
      stats: [
        { num: "50+", label: "Años de Enagic" },
        { num: "100+", label: "Países" },
        { num: "∞", label: "Potencial" },
      ],
    },
  };

  return (
    <section id="join" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-body font-bold text-sm uppercase tracking-[0.25em]">{t[lang].tag}</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 mb-6">{t[lang].headline}</h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto mb-12">{t[lang].desc}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-12 md:gap-20 mb-14"
        >
          {t[lang].stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl md:text-5xl font-display font-black text-gradient-gold">{s.num}</span>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="https://truelegacyworld.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-10 py-5 rounded-xl font-body font-black text-lg uppercase tracking-widest bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
          >
            {t[lang].cta}
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@Mehdicohen/videos"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl font-body font-bold text-base uppercase tracking-widest border-2 border-border hover:border-primary/40 transition-all text-foreground"
          >
            <svg className="w-5 h-5 text-destructive" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            {t[lang].youtube}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
