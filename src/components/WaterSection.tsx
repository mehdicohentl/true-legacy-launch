import { motion } from "framer-motion";
import productsBanner from "@/assets/products-banner.png";

interface WaterSectionProps {
  lang: "en" | "es";
}

const WaterSection = ({ lang }: WaterSectionProps) => {
  const t = {
    en: {
      micro: "The Foundation of Everything",
      headline: "This Isn't Just Water.",
      headline2: "It's a Weapon Against Aging, Disease & Mediocrity.",
      desc: "Your body is 70% water. What if the water you've been drinking your entire life has been working against you? Kangen Water is medical-grade, hydrogen-rich, ionized water used by over 6,500 doctors in Japan. It's not a trend — it's 50 years of proven science.",
      benefits: [
        { title: "Antioxidant Power", desc: "More powerful than vitamin C — neutralizes free radicals on contact" },
        { title: "Micro-Clustered Hydration", desc: "Penetrates cells 6x faster than regular water" },
        { title: "Medical-Grade Technology", desc: "The same machines used in Japanese hospitals since 1974" },
        { title: "7 pH Levels", desc: "From strong acidic (disinfectant) to strong alkaline (health)" },
      ],
      cta: "See Why 500,000+ Families Made The Switch",
      free: "Your Body is Begging For Better Water.",
      freeDesc: "Get the free guide that breaks down exactly what's in your tap water — and what Kangen Water does differently. No email required. Just click.",
      freeCta: "Get The Free Water Guide →",
    },
    es: {
      micro: "La Base de Todo",
      headline: "Esto No Es Solo Agua.",
      headline2: "Es un Arma Contra el Envejecimiento, la Enfermedad y la Mediocridad.",
      desc: "Tu cuerpo es 70% agua. ¿Qué pasaría si el agua que has estado tomando toda tu vida ha estado trabajando en tu contra? El Agua Kangen es agua ionizada, rica en hidrógeno, de grado médico, usada por más de 6,500 médicos en Japón. No es una moda — son 50 años de ciencia comprobada.",
      benefits: [
        { title: "Poder Antioxidante", desc: "Más poderoso que la vitamina C — neutraliza radicales libres al contacto" },
        { title: "Hidratación Micro-Agrupada", desc: "Penetra las células 6x más rápido que el agua regular" },
        { title: "Tecnología de Grado Médico", desc: "Las mismas máquinas usadas en hospitales japoneses desde 1974" },
        { title: "7 Niveles de pH", desc: "Desde ácido fuerte (desinfectante) hasta alcalino fuerte (salud)" },
      ],
      cta: "Descubre Por Qué 500,000+ Familias Hicieron El Cambio",
      free: "Tu Cuerpo Está Pidiendo Mejor Agua.",
      freeDesc: "Obtén la guía gratuita que explica exactamente qué hay en tu agua del grifo — y qué hace diferente el Agua Kangen. Sin email. Solo haz clic.",
      freeCta: "Obtener La Guía Gratuita →",
    },
  };

  return (
    <section id="water" className="py-28 bg-card relative overflow-hidden noise-overlay">
      {/* Background image with heavy overlay */}
      <div className="absolute inset-0">
        <img src={productsBanner} alt="" className="w-full h-full object-cover opacity-8" />
        <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />
      </div>

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.92] mb-4">
            <span className="text-foreground">{t[lang].headline}</span>
          </h2>
          <p className="text-lg md:text-2xl font-display italic text-gradient-gold max-w-3xl mx-auto">
            {t[lang].headline2}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-secondary-foreground font-body leading-[1.9] mb-12 font-light">
              {t[lang].desc}
            </p>

            {/* Benefits as cards instead of checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {t[lang].benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-2 block">0{i + 1}</span>
                  <h4 className="font-body font-bold text-sm text-foreground mb-1">{b.title}</h4>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
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
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/8 via-transparent to-primary/8 rounded-2xl blur-2xl" />
            <img src={productsBanner} alt="Kangen Water & EmGuarde Products" className="relative rounded-2xl border border-border/50 w-full shadow-deep" />
            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
          </motion.div>
        </div>

        {/* Free PDF CTA — redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <div className="relative rounded-2xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-2xl" />
            <div className="relative m-px rounded-2xl bg-card p-10 md:p-16 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent mb-4">Free · No Email Required · Instant Access</p>
              <h3 className="text-3xl md:text-5xl font-display font-black mb-5 leading-tight">
                {t[lang].free}
              </h3>
              <p className="text-muted-foreground font-body text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                {t[lang].freeDesc}
              </p>
              <motion.a
                href="https://information.enagic.com/home/article/TRAkt4bArepUdoS2JU9t"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center gap-3 px-12 py-6 rounded-xl font-body font-black text-base md:text-lg uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a2 2 0 002 2h14a2 2 0 002-2v-3" /></svg>
                {t[lang].freeCta}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WaterSection;
