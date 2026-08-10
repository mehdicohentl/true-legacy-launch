import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";

interface JoinTeamSectionProps {
  lang: "en" | "es";
}

const JoinTeamSection = ({ lang }: JoinTeamSectionProps) => {
  const t = {
    en: {
      micro: "This Is Your Invitation",
      headline: "Lead the Expansion",
      headline2: "U.S. Market.",
      desc: "We’re expanding now. If you’re a driven entrepreneur ready to lead our U.S. market expansion and plug into our proven system click the button now. We want action-takers, not spectators.",
      quote: "\"The future belongs to those who act today.\"",
      cta: "Start Building With True Legacy",
      cta2: "Watch Duo Demo",
      stats: [
        { num: "52+", label: "Years Enagic" },
        { num: "170+", label: "Countries" },
        { num: "1", label: "Decision Away" },
      ],
      bottom: "Your background, your age, your education — none of it matters here. What matters is your decision.",
    },
    es: {
      micro: "Esta Es Tu Invitación",
      headline: "Sé Parte del",
      headline2: "Crecimiento—LATAM.",
      desc: "Estamos buscando emprendedores y pioneros ahora mismo. Si tienes la visión para liderar la expansión en LATAM y quieres unirte a un sistema global probado, este es tu momento. No esperes. Haz clic ahora y construyamos tu legado.",
      quote: "“El éxito es para los que actúan sin dudar.”",
      cta: "Empieza a Construir Con True Legacy",
      cta2: "Ver Demo de Duo",
      stats: [
        { num: "52+", label: "Años Enagic" },
        { num: "170+", label: "Países" },
        { num: "1", label: "Decisión" },
      ],
      bottom: "Tu origen, tu edad, tu educación — nada de eso importa aquí. Lo que importa es tu decisión.",
    },
  };

  return (
    <section id="join" className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/4 via-transparent to-accent/4" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-6 text-center"
        >
          {t[lang].micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05]">
            <span className="text-foreground">{t[lang].headline}</span><br />
            <span className="text-gradient-gold italic">{t[lang].headline2}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-foreground font-body leading-[1.9] text-center max-w-2xl mx-auto mb-10 font-bold"
        >
          {t[lang].desc}
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display italic text-xl md:text-2xl text-foreground mb-14 max-w-2xl mx-auto"
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
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground font-bold mt-2 block">{s.label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <motion.a
            href={lang === "en" ? "/global/join" : "/latam/unete"}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-12 py-6 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            {t[lang].cta}
          </motion.a>

          <Link to={lang === "en" ? "/global/duopackage" : "/latam/latam-duo-package"} className="inline-flex">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-6 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.12em] bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white shadow-emergency animate-pulse-emergency cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              {t[lang].cta2}
            </motion.div>
          </Link>
        </div>

        <p className="text-center font-body text-base text-foreground font-bold italic max-w-xl mx-auto">
          {t[lang].bottom}
        </p>
      </div>
    </section>
  );
};

export default JoinTeamSection;
