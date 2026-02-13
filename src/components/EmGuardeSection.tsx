import { motion } from "framer-motion";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {
  const t = {
    en: {
      micro: "Exclusive · Limited Availability",
      headline: "Your Phone is Cooking You.",
      headline2: "EmGuarde Stops It.",
      desc: "Every device you own emits electromagnetic radiation. Your phone. Your laptop. Your Wi-Fi router. EmGuarde is Enagic's breakthrough EMF protection device — now available in North America for the first time.",
      price: "$1,520",
      priceSub: "One-time payment · No subscription",
      shipping: "+ $160 shipping via DHL/FedEx",
      badge: "Just Launched in USA, Canada & Mexico",
      cta: "Apply to Purchase",
      ctaNote: "Processed as private import from Malaysia — application required",
      video: "See It In Action →",
      features: [
        { label: "Ships in", value: "10–14 days" },
        { label: "Warranty", value: "1 Year" },
        { label: "Payment", value: "Visa / MC" },
        { label: "Limit", value: "5 Units" },
      ],
      contact: "Questions? emgsales@enagic-my.com · WhatsApp +60133096234",
    },
    es: {
      micro: "Exclusivo · Disponibilidad Limitada",
      headline: "Tu Teléfono Te Está Cocinando.",
      headline2: "EmGuarde Lo Detiene.",
      desc: "Cada dispositivo que posees emite radiación electromagnética. Tu teléfono. Tu laptop. Tu router Wi-Fi. EmGuarde es el dispositivo revolucionario de protección EMF de Enagic — ahora disponible en Norteamérica por primera vez.",
      price: "$1,520",
      priceSub: "Pago único · Sin suscripción",
      shipping: "+ $160 envío vía DHL/FedEx",
      badge: "Recién Lanzado en USA, Canadá y México",
      cta: "Solicitar Compra",
      ctaNote: "Procesado como importación privada desde Malasia — solicitud requerida",
      video: "Ver en Acción →",
      features: [
        { label: "Envío en", value: "10–14 días" },
        { label: "Garantía", value: "1 Año" },
        { label: "Pago", value: "Visa / MC" },
        { label: "Límite", value: "5 Unidades" },
      ],
      contact: "¿Preguntas? emgsales@enagic-my.com · WhatsApp +60133096234",
    },
  };

  return (
    <section id="emguarde" className="py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[120px]" />

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
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{t[lang].headline}</span><br />
            <span className="text-gradient-primary italic">{t[lang].headline2}</span>
          </h2>
        </motion.div>

        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card font-mono text-[10px] uppercase tracking-[0.25em] text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {t[lang].badge}
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-secondary-foreground font-body leading-[1.9] mb-10 font-light">
              {t[lang].desc}
            </p>

            {/* Price card */}
            <div className="relative rounded-xl overflow-hidden mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/10" />
              <div className="relative m-px rounded-xl bg-secondary p-8">
                <div className="flex items-end gap-3 mb-2">
                  <span className="text-5xl font-display font-black text-foreground">{t[lang].price}</span>
                  <span className="text-sm text-accent font-mono uppercase tracking-wider pb-2">USD</span>
                </div>
                <p className="text-sm text-secondary-foreground font-body mb-1">{t[lang].priceSub}</p>
                <p className="text-xs text-muted-foreground font-body">{t[lang].shipping}</p>
              </div>
            </div>

            {/* Quick specs */}
            <div className="grid grid-cols-4 gap-3 mb-10">
              {t[lang].features.map((f, i) => (
                <div key={i} className="glass-card rounded-lg p-3 text-center">
                  <span className="block font-body font-bold text-sm text-foreground">{f.value}</span>
                  <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{f.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-6">
              <motion.a
                href="mailto:emgsales@enagic-my.com?subject=EmGuarde%20Purchase%20Application%20-%20North%20America&body=I%20would%20like%20to%20apply%20to%20purchase%20EmGuarde.%0A%0AMy%20country:%0AMy%20Enagic%20ID%20(if%20applicable):"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-bold text-sm uppercase tracking-[0.15em] bg-primary text-primary-foreground shadow-glow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                {t[lang].cta}
              </motion.a>

              <motion.a
                href="https://www.youtube.com/watch?v=rNLBZ1NEtDI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-3 group"
              >
                <span className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <svg className="w-4 h-4 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                </span>
                <span className="font-body font-bold text-sm text-foreground uppercase tracking-[0.1em]">{t[lang].video}</span>
              </motion.a>
            </div>

            <p className="text-[10px] text-muted-foreground font-mono tracking-wider">{t[lang].ctaNote}</p>
            <p className="text-[10px] text-muted-foreground/60 font-mono tracking-wider mt-2">{t[lang].contact}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/8 rounded-2xl blur-2xl" />
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/rNLBZ1NEtDI"
                  title="EmGuarde Review"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="aspect-video rounded-xl overflow-hidden border border-border/30">
              <iframe
                src="https://www.youtube.com/embed/I8fFj7-FaPw"
                title="EmGuarde Presentation"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmGuardeSection;
