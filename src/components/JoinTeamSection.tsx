import { motion } from "framer-motion";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";

interface JoinTeamSectionProps {
  lang: "en" | "es";
}

const JoinTeamSection = ({ lang }: JoinTeamSectionProps) => {
  const t = {
    en: {
      micro: "This Is Your Invitation",
      headline: "Stop Watching.",
      headline2: "Start Building.",
      desc: "Every person on this team started exactly where you are right now — scrolling, wondering, hoping. The difference? They clicked the button. They said yes. They chose themselves.",
      quote: "\"The best time to start was yesterday. The second best time is right now.\"",
      cta: "Start Building With True Legacy",
      cta2: "See How The Team Operates",
      stats: [
        { num: "50+", label: "Years Enagic" },
        { num: "100+", label: "Countries" },
        { num: "1", label: "Decision Away" },
      ],
      bottom: "Your background, your age, your education — none of it matters here. What matters is your decision.",
    },
    es: {
      micro: "Esta Es Tu Invitación",
      headline: "Deja de Mirar.",
      headline2: "Empieza a Construir.",
      desc: "Cada persona en este equipo empezó exactamente donde tú estás ahora — navegando, preguntándose, esperando. ¿La diferencia? Hicieron clic en el botón. Dijeron que sí. Se eligieron a sí mismos.",
      quote: "\"El mejor momento para empezar fue ayer. El segundo mejor momento es ahora mismo.\"",
      cta: "Empieza a Construir Con True Legacy",
      cta2: "Mira Como Opera El Equipo",
      stats: [
        { num: "50+", label: "Años Enagic" },
        { num: "100+", label: "Países" },
        { num: "1", label: "Decisión" },
      ],
      bottom: "Tu origen, tu edad, tu educación — nada de eso importa aquí. Lo que importa es tu decisión.",
    },
  };

  return (
    <section id="join" className="py-28 bg-card relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent/80 mb-6 text-center"
        >
          {t[lang].micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{t[lang].headline}</span><br />
            <span className="text-gradient-gold italic">{t[lang].headline2}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-secondary-foreground font-body leading-[1.9] text-center max-w-2xl mx-auto mb-10 font-light"
        >
          {t[lang].desc}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display italic text-xl md:text-2xl text-foreground/60 mb-14 max-w-2xl mx-auto"
        >
          {t[lang].quote}
        </motion.blockquote>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-10 md:gap-20 mb-16"
        >
          {t[lang].stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-4xl md:text-6xl font-display font-black text-gradient-gold block">{s.num}</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground mt-2 block">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <motion.a
            href="https://truelegacyworld.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-12 py-6 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            {t[lang].cta}
          </motion.a>

          <motion.a
            href="https://www.youtube.com/@Mehdicohen/videos"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-6 rounded-xl font-body font-bold text-sm uppercase tracking-[0.12em] border border-foreground/15 text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all duration-300"
          >
            <svg className="w-5 h-5 text-destructive" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            {t[lang].cta2}
          </motion.a>
        </div>

        <p className="text-center font-body text-sm text-muted-foreground font-light italic max-w-xl mx-auto">
          {t[lang].bottom}
        </p>
      </div>
    </section>
  );
};

export default JoinTeamSection;
