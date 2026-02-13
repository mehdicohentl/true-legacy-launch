import { motion } from "framer-motion";
import productsBanner from "@/assets/products-banner.png";

interface WaterSectionProps {
  lang: "en" | "es";
}

const WaterSection = ({ lang }: WaterSectionProps) => {
  const t = {
    en: {
      tag: "Transform Your Health",
      headline: "Kangen Water",
      subline: "Ionized Alkaline Water That Changes Lives",
      desc: "For over 50 years, Enagic has been producing the world's finest water ionization systems. Kangen Water® is not just water — it's a lifestyle revolution that starts from within.",
      benefits: ["Antioxidant-Rich Hydrogen Water", "Medical-Grade Electrolysis Technology", "7 Different pH Levels for Every Need", "Used by Hospitals & Athletes Worldwide"],
      cta: "Learn More About Kangen Water",
      free: "🎁 Get Your FREE Healing Water Guide",
      freeDesc: "Discover how ionized water can transform your health — completely free, no strings attached.",
    },
    es: {
      tag: "Transforma Tu Salud",
      headline: "Agua Kangen",
      subline: "Agua Alcalina Ionizada Que Cambia Vidas",
      desc: "Por más de 50 años, Enagic ha producido los mejores sistemas de ionización de agua del mundo. Agua Kangen® no es solo agua — es una revolución de estilo de vida que comienza desde adentro.",
      benefits: ["Agua Rica en Hidrógeno Antioxidante", "Tecnología de Electrólisis de Grado Médico", "7 Niveles de pH Para Cada Necesidad", "Usado por Hospitales y Atletas Mundialmente"],
      cta: "Aprende Más Sobre Agua Kangen",
      free: "🎁 Obtén Tu Guía GRATUITA de Agua Curativa",
      freeDesc: "Descubre cómo el agua ionizada puede transformar tu salud — completamente gratis, sin compromiso.",
    },
  };

  return (
    <section id="water" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img src={productsBanner} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-bold text-sm uppercase tracking-[0.25em]">{t[lang].tag}</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-gradient-gold">{t[lang].headline}</h2>
          <p className="text-xl text-muted-foreground font-body mt-4">{t[lang].subline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">{t[lang].desc}</p>

            <div className="space-y-4 mb-10">
              {t[lang].benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="font-body font-semibold text-foreground">{b}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-bold text-base uppercase tracking-widest bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
            >
              {t[lang].cta}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src={productsBanner} alt="Kangen Water Products" className="rounded-xl border border-border w-full" />
          </motion.div>
        </div>

        {/* Free PDF CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-2xl p-8 md:p-12 border border-accent/20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-display font-black mb-4">{t[lang].free}</h3>
            <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">{t[lang].freeDesc}</p>
            <motion.a
              href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-lg uppercase tracking-widest bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              {lang === "en" ? "Download Now — It's Free" : "Descárgalo Ahora — Es Gratis"}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterSection;
