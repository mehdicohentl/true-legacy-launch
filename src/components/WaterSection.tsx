import { motion } from "framer-motion";
import kangenMachine from "@/assets/kangen-water-machine.png";

interface WaterSectionProps {
  lang: "en" | "es";
}

const WATER_LINK = "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016";

const WaterSection = ({ lang }: WaterSectionProps) => {
  const t = {
    en: {
      micro: "The Foundation of Everything",
      headline: "This Isn't Just Water.",
      headline2: "It's Kangen Water — The Power of Hydrogen.",
      desc: "The Foundation of Everything:\n\nThis Isn't Just Water.\n\nIt's Kangen Water—The Power of Molecular Hydrogen.\n\nYour body is 70% water. What if the water you've been drinking your entire life has been working against you? Kangen Water is medical-grade, hydrogen-rich, ionized water used by over 6,500 doctors in Japan. It's not a trend; it's 51-plus years of proven science.",
      benefits: [
      { title: "Antioxidant Power", desc: "More powerful than vitamin C, neutralizes free radicals on contact" },
      { title: "Cellular Hydration", desc: "Penetrates cells 6x faster than regular water" },
      { title: "Medical-Grade Technology", desc: "The same machines used in Japanese hospitals since 1974" },
      { title: "7 pH Levels", desc: "From strong acidic disinfectant (hypochlorous acid) to strong alkaline oil emulsifier" }],
      buyGuideTitle: "How to Get Your Kangen Water Machine",
      buyGuideSteps: [
      "Click the button below to visit the official Enagic ordering page.",
      "Select your country from the listed options, like the U.S. or Canada. If you're in South America, contact us directly to get started, and we'll guide you through the steps.",
      "Choose the Kangen Water machine that fits your needs (we recommend the K8).",
      "Complete your order—it's that simple."],
      buyGuideNote: "You'll be ordering directly through Enagic's official system—safe, secure, and backed by 51+ years of excellence.",
      needHelp: "Need help? Connect with us",
      cta: "Get Your Kangen Water Machine Now",
      ewgCta: "Check Your Tap Water Quality",
      demoTitle: "Watch the Kangen Water Demo",
    },
    es: {
      micro: "La Base de Todo",
      headline: "Esto No Es Solo Agua.",
      headline2: "Es Agua Kangen — El Poder del Hidrógeno.",
      desc: "La Base de Todo:\n\nEsto No Es Solo Agua.\n\nEs Agua Kangen—El Poder del Hidrógeno Molecular.\n\nTu cuerpo es 70% agua. ¿Qué pasaría si el agua que has estado tomando toda tu vida ha estado trabajando en tu contra? El Agua Kangen es agua ionizada, rica en hidrógeno, de grado médico, usada por más de 6,500 médicos en Japón. No es una moda; son más de 51 años de ciencia comprobada.\n\n1. Poder Antioxidante—Más poderoso que la vitamina C, neutraliza radicales libres al contacto.\n\n2. Hidratación Celular—Penetra las células 6x más rápido que el agua regular.\n\n3. Tecnología de Grado Médico—Las mismas máquinas usadas en hospitales japoneses desde 1974.\n\n4. 7 Niveles de pH—desde ácido fuerte desinfectante (ácido hipocloroso) hasta alcalino fuerte emulsionante de aceite.",
      benefits: [
      { title: "Poder Antioxidante", desc: "Más poderoso que la vitamina C — neutraliza radicales libres al contacto" },
      { title: "Hidratación Micro-Agrupada", desc: "Penetra las células 6x más rápido que el agua regular" },
      { title: "Tecnología de Grado Médico", desc: "Las mismas máquinas usadas en hospitales japoneses desde 1974" },
      { title: "7 Niveles de pH", desc: "Desde ácido fuerte (desinfectante) hasta alcalino fuerte (salud)" }],
      buyGuideTitle: "Cómo Obtener Tu Máquina de Agua Kangen",
      buyGuideSteps: [
      "Haz clic en el botón de abajo para visitar la página oficial de pedidos de Enagic.",
      "Selecciona tu país de las opciones disponibles, como EE.UU. o Canadá. Si estás en Sudamérica, contáctanos directamente para comenzar y te guiaremos a través de los pasos.",
      "Elige la máquina de Agua Kangen que se adapte a tus necesidades (recomendamos la K8).",
      "Completa tu pedido—así de simple."],
      buyGuideNote: "Estarás ordenando directamente a través del sistema oficial de Enagic—seguro, protegido y respaldado por más de 51 años de excelencia.",
      needHelp: "¿Necesitas ayuda? Conéctate con nosotros",
      cta: "Obtener Tu Máquina de Agua Kangen Ahora (EE. UU., Australia, Dubai, etc.)",
      ewgCta: "Revisa la Calidad de Tu Agua del Grifo",
      demoTitle: "Mira la Demostración del Agua Kangen",
    }
  };

  return (
    <section id="water" className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-card/95 to-card" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6 text-center">
          {t[lang].micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05] mb-4">
            <span className="text-foreground">{lang === "en" ? "Kangen Water — The Wellness Foundation" : "Agua Kangen — La Base del Bienestar"}</span>
          </h2>
          <p className="text-lg md:text-2xl font-display italic text-gradient-gold max-w-3xl mx-auto font-bold">
            {lang === "en" ? "Scale Your Body and Your Income With Alkaline Ionized Water" : "Escala Tu Cuerpo y Tus Ingresos Con Agua Alcalina Ionizada"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>
            {/* Benefits as cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {t[lang].benefits.map((b, i) =>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-xl p-5 hover:border-accent/30 transition-all duration-300 group">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block font-bold">0{i + 1}</span>
                  <h4 className="font-body font-black text-base text-foreground mb-1">{b.title}</h4>
                  <p className="font-body text-sm text-foreground font-bold leading-relaxed">{b.desc}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Kangen Water Machine Image + Demo Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8">
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/8 via-transparent to-primary/8 rounded-2xl blur-2xl" />
              <img
                src={kangenMachine}
                alt="Mehdi Cohen True Legacy CEO Kangen K8 water machine alkaline ionized water wellness mehdicohen.com"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl" />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/30 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/30 rounded-br-lg" />
            </div>

            {/* Kangen Water Demo Video */}
            <div className="relative">
              <div className="absolute -inset-2 bg-accent/8 rounded-2xl blur-2xl" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold mb-3 text-center">
                {t[lang].demoTitle}
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-accent/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/fJdfllJpdAg"
                  title="Kangen Water Demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Water Buying Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/15 via-primary/10 to-accent/15 rounded-2xl" />
            <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 text-center">
                {t[lang].buyGuideTitle}
              </h3>

              <div className="max-w-2xl mx-auto space-y-5 mb-8">
                {t[lang].buyGuideSteps.map((step, i) =>
                <div key={i} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                      <span className="font-display font-black text-accent text-sm">{i + 1}</span>
                    </div>
                    <p className="font-body text-base md:text-lg text-foreground font-bold leading-relaxed pt-1.5">
                      {step}
                    </p>
                  </div>
                )}
              </div>

              <p className="text-center text-sm text-foreground font-body font-bold italic mb-8 max-w-xl mx-auto">
                {t[lang].buyGuideNote}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                <motion.a
                  href={WATER_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-primary text-primary-foreground shadow-glow">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                  {t[lang].cta}
                </motion.a>
                <motion.a
                  href="https://mehdicohen1.systeme.io/mehdicohen"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  {lang === "en" ? "Get a Free Kangen Water PDF" : "Obtén un PDF Gratis del Agua Kangen"}
                </motion.a>
                <motion.a
                  href="https://www.ewg.org/tapwater/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] border-2 border-foreground/20 text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                  {t[lang].ewgCta}
                </motion.a>
              </div>

              <p className="text-center text-sm text-accent font-body font-bold mt-6">
                {t[lang].needHelp}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
};

export default WaterSection;
