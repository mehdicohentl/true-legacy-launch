import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";
import kangenMachine from "@/assets/kangen-water-machine.png";

interface KangenWaterSubpageProps {
  lang: "en" | "es";
}

const WATER_LINK =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016";

const KangenWaterSubpage = ({ lang }: KangenWaterSubpageProps) => {
  const isLatam = lang === "es";

  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "Kangen Water K8 — Medical-Grade Alkaline Ionizer | Mehdi Cohen True Legacy"
        : "Agua Kangen K8 — Ionizador de Grado Médico | Mehdi Cohen True Legacy",
      lang === "en"
        ? "Discover Kangen Water K8 — Enagic's premier 8-plate alkaline water ionizer. Restore cellular hydration, increase antioxidant capacity, and align with the True Legacy wellness mission."
        : "Descubre Agua Kangen K8 — el ionizador de agua alcalina de 8 placas de Enagic. Restaura la hidratación celular y aumenta la capacidad antioxidante."
    );
  }, [lang]);

  const t = {
    en: {
      micro: "The Wellness Foundation",
      headline: "Kangen Water K8:",
      headline2: "Alkaline Ionized Power.",
      desc: "Your body is 70% water. Yet most of the water we consume daily is structurally dead, acidic, and lacks active hydrogen. Kangen Water is medical-grade, hydrogen-rich, ionized water used by over 6,500 doctors in Japan. It is not a wellness trend—it is 52+ years of clinical science designed to restore your cellular environment.",
      
      storyTitle: "Why Water is the First Pillar of Legacy",
      storySubtitle: "The High-Performance Fuel for Global Leaders",
      storyP1: "Every empire is built on the energy of its founder. Yet, millions of high-performers compromise their cognitive clarity and physical stamina by drinking micro-clustered, acidic tap or bottled water. When your body is in a state of chronic acidosis, fatigue setting in is not a matter of 'if,' but 'when.'",
      storyP2: "Molecular Hydrogen (H2) is the smallest element in the universe. It crosses the blood-brain barrier instantly, neutralizing free radicals at the cellular level. By hydrating with Kangen Water, you are optimizing ATP production—the currency of cellular energy. You think faster, recover quicker, and operate at your absolute peak.",
      storyP3: "True Legacy is not just about financial freedom. It is about having the physical longevity to enjoy it and pass it down. We protect our health first so we can protect our families and build our mission.",

      benefitsTitle: "Medical-Grade Technology & Benefits",
      benefits: [
        { title: "Antioxidant Power", desc: "Contains massive amounts of molecular hydrogen, acting as a powerful antioxidant that neutralizes free radicals on contact." },
        { title: "Cellular Hydration", desc: "Micro-clustered structure allows the water to penetrate your cells 6x faster than regular bottled or tap water." },
        { title: "Medical-Grade Tech", desc: "Equipped with 8 platinum-coated titanium plates, recognized as a medical device by the Japanese Ministry of Health since 1974." },
        { title: "7 Diverse pH Levels", desc: "Generates waters ranging from pH 2.5 (strong acidic sanitizer) to pH 11.5 (alkaline cleaner that emulsifies oils)." }
      ],

      demoTitle: "Watch the Kangen Water Demonstration",
      buyGuideTitle: "How to Secure Your Kangen K8 Machine",
      buyGuideSteps: [
        "Click the order button below to visit Enagic's official ordering gateway.",
        "Select your country. If you are based in South America, contact our team directly using the WhatsApp link, and we will handle the manual paperwork for you.",
        "Choose the Leveluk K8 machine (Enagic's flagship 8-plate model).",
        "Complete your order securely directly through the Enagic system."
      ],
      buyGuideNote: "All purchases are processed securely directly through Enagic's official billing system, backed by a global manufacturer warranty.",
      needHelp: "Have questions about financing or installation? Connect with our team",
      cta: "Order Your Kangen K8 Now",
      ewgCta: "Check Your Local Tap Water Quality",
      whatsappCta: "WhatsApp Us",
      pdfCta: "Download Free Kangen PDF Guide"
    },
    es: {
      micro: "La Base del Bienestar",
      headline: "Agua Kangen K8:",
      headline2: "Poder Ionizado Alcalino.",
      desc: "Tu cuerpo es 70% agua. Sin embargo, la mayor parte del agua que consumimos está estructuralmente muerta y carece de hidrógeno activo. El Agua Kangen es agua ionizada de grado médico, rica en hidrógeno, utilizada por más de 6,500 médicos en Japón. No es una moda — son más de 52 años de ciencia clínica diseñada para restaurar tu entorno celular.",

      storyTitle: "Por qué el Agua es el Primer Pilar del Legado",
      storySubtitle: "El Combustible de Alto Rendimiento para Líderes Globales",
      storyP1: "Todo imperio se construye sobre la energía de su fundador. Sin embargo, millones de personas comprometen su claridad cognitiva y resistencia física tomando agua embotellada o del grifo ácida. Cuando tu cuerpo está en un estado de acidosis crónica, la fatiga no es una posibilidad, es una certeza.",
      storyP2: "El Hidrógeno Molecular (H2) es el elemento más pequeño del universo. Cruza la barrera hematoencefálica al instante, neutralizando radicales libres a nivel celular. Al hidratarte con Agua Kangen, optimizas la producción de ATP — la energía celular. Piensas más rápido, te recuperas antes y operas a tu máximo nivel.",
      storyP3: "True Legacy no se trata solo de libertad financiera. Se trata de tener la longevidad física para disfrutarla y transmitirla. Protegemos nuestra salud primero para proteger a nuestras familias y construir nuestra misión.",

      benefitsTitle: "Tecnología de Grado Médico y Beneficios",
      benefits: [
        { title: "Poder Antioxidante", desc: "Contiene grandes cantidades de hidrógeno molecular, actuando como un potente asistente que neutraliza los radicales libres al contacto." },
        { title: "Hidratación Celular", desc: "Su estructura micro-agrupada permite que el agua penetre en tus células 6 veces más rápido que el agua embotellada o del grifo normal." },
        { title: "Tecnología de Grado Médico", desc: "Equipada con 8 placas de titanio recubiertas de platino, certificada como dispositivo médico en Japón desde 1974." },
        { title: "7 Niveles de pH Diversos", desc: "Produce aguas que van desde pH 2.5 (desinfectante ácido fuerte) hasta pH 11.5 (alcalino fuerte que emulsiona aceites)." }
      ],

      demoTitle: "Mira la Demostración del Agua Kangen",
      buyGuideTitle: "Cómo Adquirir tu Máquina Kangen K8",
      buyGuideSteps: [
        "Haz clic en el botón de pedido para ir a la plataforma de compras de Enagic.",
        "Selecciona tu país de residencia. Si estás en Sudamérica, contáctanos directamente por WhatsApp para gestionar el papeleo de importación manual.",
        "Selecciona la máquina Leveluk K8 (el modelo estrella de 8 placas de Enagic).",
        "Completa tu pedido de forma segura directamente con Enagic."
      ],
      buyGuideNote: "Todas las compras se procesan de forma segura directamente a través del sistema oficial de facturación de Enagic, respaldado por garantía global.",
      needHelp: "¿Tienes preguntas sobre financiamiento o instalación? Conéctate con nuestro equipo",
      cta: "Ordena tu Kangen K8 Ahora",
      ewgCta: "Verifica la Calidad del Agua de tu Zona",
      whatsappCta: "Escríbenos por WhatsApp",
      pdfCta: "Descargar Guía PDF del Agua Kangen"
    }
  };

  const c = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />

      <main className="pt-24 pb-20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4"
            >
              {c.micro}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-display font-black leading-tight mb-6"
            >
              <span className="text-foreground">{c.headline}</span><br />
              <span className="text-gradient-gold italic">{c.headline2}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-foreground/80 leading-relaxed font-body font-bold max-w-2xl mx-auto"
            >
              {c.desc}
            </motion.p>
          </div>

          {/* Product Image & Key Specs Block */}
          <div className="grid lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto mb-20">
            {/* Left: Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 relative flex justify-center py-6"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/8 via-transparent to-primary/8 rounded-2xl blur-2xl" />
              <img
                src={kangenMachine}
                alt="Enagic Leveluk K8 Kangen Water machine"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-accent/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-accent/40 rounded-br-lg" />
            </motion.div>

            {/* Right: Spec Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <h3 className="text-2xl font-display font-black text-foreground">
                {c.benefitsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.benefits.map((b, i) => (
                  <div
                    key={i}
                    className="glass-card p-5 rounded-xl border border-accent/15 hover:border-accent/30 transition-all duration-300"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block font-bold">
                      0{i + 1}
                    </span>
                    <h4 className="font-body font-black text-base text-foreground mb-1">
                      {b.title}
                    </h4>
                    <p className="font-body text-xs text-foreground/75 leading-relaxed font-bold">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Deep Storytelling Narrative Section */}
          <div className="relative max-w-4xl mx-auto mb-20 p-8 md:p-12 rounded-2xl bg-card/40 border border-border/40 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative text-center md:text-left space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-bold block">
                {c.storySubtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-black text-foreground">
                {c.storyTitle}
              </h2>
              <div className="space-y-4 font-body text-foreground/80 text-sm md:text-base leading-relaxed font-bold">
                <p>{c.storyP1}</p>
                <p>{c.storyP2}</p>
                <p className="border-l-4 border-accent pl-4 italic text-foreground text-base md:text-lg">
                  {c.storyP3}
                </p>
              </div>
            </div>
          </div>

          {/* Demo Video Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold mb-4 text-center">
              {c.demoTitle}
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-accent/20 shadow-deep">
              <iframe
                src={isLatam ? "https://www.youtube.com/embed/Gi0ufLMcH6E" : "https://www.youtube.com/embed/fJdfllJpdAg"}
                title="Kangen Water Demonstration"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Order Steps & Final Action Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card/60 border border-accent/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/3 to-accent/5" />
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8 text-center">
                  {c.buyGuideTitle}
                </h3>

                <div className="space-y-6 mb-8 max-w-2xl mx-auto">
                  {c.buyGuideSteps.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
                        <span className="font-display font-black text-accent text-sm">
                          {i + 1}
                        </span>
                      </div>
                      <p className="font-body text-sm md:text-base text-foreground font-bold leading-relaxed pt-2">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="text-center text-xs md:text-sm text-foreground/60 font-body font-bold italic mb-8 max-w-xl mx-auto">
                  {c.buyGuideNote}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                  <motion.a
                    href={WATER_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-primary text-primary-foreground shadow-glow"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    {c.cta}
                  </motion.a>

                  <motion.a
                    href={isLatam ? "https://mehdicohen1.systeme.io/mehdicohen-1d62f4ad" : "https://mehdicohen1.systeme.io/mehdicohen"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {c.pdfCta}
                  </motion.a>

                  <motion.a
                    href="https://www.ewg.org/tapwater/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] border-2 border-foreground/20 text-foreground/70 hover:text-accent hover:border-accent/40 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    {c.ewgCta}
                  </motion.a>

                  <motion.a
                    href={isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/>
                    </svg>
                    {c.whatsappCta}
                  </motion.a>
                </div>

                <p className="text-center text-xs md:text-sm text-accent font-body font-bold mt-6">
                  {c.needHelp}: <a href={isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149"} className="underline hover:text-accent/80">WhatsApp</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default KangenWaterSubpage;
