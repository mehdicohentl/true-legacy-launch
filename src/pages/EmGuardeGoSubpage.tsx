import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";
import imgEmgo from "@/assets/product-emgo.png";
import { GraduationCap, MessageCircle } from "lucide-react";

interface EmGuardeGoSubpageProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const EmGuardeGoSubpage = ({ lang }: EmGuardeGoSubpageProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";

  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "emGuarde GO — Portable EMF Protection | Mehdi Cohen True Legacy"
        : "emGuarde GO — Protección EMF Portátil | Mehdi Cohen True Legacy",
      lang === "en"
        ? "Discover emGuarde GO — Enagic's revolutionary portable EMF protection device. Neutralize Wi-Fi, 5G, and cell phone radiation on-the-go to safeguard your health."
        : "Descubre emGuarde GO — el revolucionario dispositivo portátil de protección EMF de Enagic. Neutraliza la radiación de Wi-Fi, 5G y teléfonos celulares."
    );
  }, [lang]);

  const t = {
    en: {
      micro: "Portable EMF Protection",
      headline: "emGuarde GO:",
      headline2: "Your On-The-Go Shield.",
      desc: "Introducing Enagic's latest breakthrough: emGuarde GO (set of 2). Powerful, portable, and designed for your active life. Keep yourself and your family shielded from electromagnetic frequencies (EMF) from mobile phones, laptops, and 5G signals wherever you go. Available in USA, Canada, and Mexico.",
      
      storyTitle: "The Invisible Stressor of the Modern Age",
      storySubtitle: "Protecting Your Focus, Energy, and Cellular Health",
      storyP1: "We live in an ocean of invisible frequency signals. Wi-Fi, Bluetooth, 4G, 5G, laptops, and high-frequency power lines surround us 24/7. While invisible, this electromagnetic pollution generates chronic oxidative stress inside our cells. High-performers often experience this as brain fog, low energy, and poor sleep quality without realizing the source.",
      storyP2: "emGuarde GO creates a 10-foot spherical suppression shield. It does not block signals (your phone still works perfectly); instead, it neutralizes the biological stress responses caused by ambient radiation frequencies. By suppressing EMF stressors, your nervous system remains in a calm, focused, parasympathetic state.",
      storyP3: "True Legacy requires protecting your mental and physical bandwidth. Just as we filter our water, we must filter our environment. Shield your space, protect your focus, and operate at your peak.",

      techTitle: "Technical Specifications & Features",
      features: [
        { title: "Set of 2 Devices", desc: "Keep one on you and share the other, or double up on protection in your home and office." },
        { title: "10-Foot Diameter", desc: "Creates a spherical personal protection shield around you, neutralizing ambient EMF frequencies." },
        { title: "USB-C Rechargeable", desc: "Equipped with a long-lasting rechargeable battery for constant, uninterrupted protection." },
        { title: "Total Portability", desc: "Lightweight and sleek — fits easily in your pocket, computer bag, or backpack." }
      ],

      researchEyebrow: "University-Led Research",
      researchTitle: "Tested by Universiti Sains Malaysia",
      researchIntro: "In 2024, researchers at Universiti Sains Malaysia (USM) evaluated emGuarde's effective range for suppressing targeted RF white noise in a controlled test environment.",
      researchPoints: [
        { value: "3–1,000 MHz", label: "Targeted frequency range evaluated" },
        { value: "4 m", label: "Tested suppression radius" },
        { value: "2024", label: "USM test report" }
      ],
      researchNote: "The report supports the device's RF noise-suppression performance. It does not establish that emGuarde prevents, treats, or cures any medical condition, and the device is not a substitute for medical advice or established exposure-safety measures.",

      videoReviews: "Reviews & Presentations",
      demoTitle: "Watch the emGuarde GO Demonstration",
      ctaBuy: "Buy emGuarde GO Now",
      ctaWa: "WhatsApp Us",
      ctaPdf: "Get Free PDF Guide"
    },
    es: {
      micro: "Protección EMF Portátil",
      headline: "emGuarde GO:",
      headline2: "Tu Escudo en Movimiento.",
      desc: "Presentamos el último avance de Enagic: emGuarde GO (set de 2). Potente, portátil y diseñado para tu vida activa. Mantén a ti y a tu familia protegidos de las frecuencias electromagnéticas (EMF) de teléfonos móviles, laptops y señales 5G donde quiera que vayas. Disponible en EE.UU., Canadá y México.",

      storyTitle: "El Estresor Invisible de la Era Moderna",
      storySubtitle: "Protegiendo tu Enfoque, Energía y Salud Celular",
      storyP1: "Vivimos en un océano de señales de frecuencia invisibles. Wi-Fi, Bluetooth, 4G, 5G, computadoras y líneas de alta tensión nos rodean las 24 horas. Aunque es invisible, esta contaminación electromagnética genera estrés oxidativo crónico dentro de nuestras células, manifestándose en fatiga, neblina mental y mala calidad de sueño.",
      storyP2: "emGuarde GO crea un escudo de supresión esférico de 10 pies. No bloquea las señales (tu teléfono sigue funcionando perfectamente), sino que neutraliza las respuestas biológicas de estrés causadas por la radiación. Al suprimir estos estresores, tu sistema nervioso permanece en un estado enfocado y tranquilo.",
      storyP3: "True Legacy requiere proteger tu ancho de banda mental y físico. Al igual que filtramos el agua, debemos filtrar nuestro entorno. Protege tu espacio, cuida tu enfoque y opera a tu máximo nivel.",

      techTitle: "Especificaciones Técnicas y Características",
      features: [
        { title: "Juego de 2 Dispositivos", desc: "Lleva uno contigo y comparte el otro, o duplica la protección en tu hogar y oficina." },
        { title: "Diámetro de 10 Pies", desc: "Crea un escudo de protección personal esférico a tu alrededor, neutralizando las frecuencias EMF." },
        { title: "Recargable por USB-C", desc: "Equipado con batería recargable de larga duración para una protección constante sin interrupciones." },
        { title: "Portabilidad Total", desc: "Ligero y elegante — cabe fácilmente en tu bolsillo, maletín de laptop o mochila." }
      ],

      researchEyebrow: "Investigación Universitaria",
      researchTitle: "Evaluado por Universiti Sains Malaysia",
      researchIntro: "En 2024, investigadores de Universiti Sains Malaysia (USM) evaluaron el alcance efectivo de emGuarde para suprimir ruido blanco de radiofrecuencia específico en un entorno de prueba controlado.",
      researchPoints: [
        { value: "3–1.000 MHz", label: "Rango de frecuencias evaluado" },
        { value: "4 m", label: "Radio de supresión evaluado" },
        { value: "2024", label: "Informe de pruebas de USM" }
      ],
      researchNote: "El informe respalda el desempeño del dispositivo en la supresión de ruido de RF. No establece que emGuarde prevenga, trate o cure ninguna afección médica, y el dispositivo no sustituye el consejo médico ni las medidas de seguridad reconocidas para limitar la exposición.",

      videoReviews: "Reseñas y Presentaciones",
      demoTitle: "Mira la Demostración de emGuarde GO",
      ctaBuy: "Comprar emGuarde GO Ahora",
      ctaWa: "Escríbenos por WhatsApp",
      ctaPdf: "Obtén un PDF Informativo Gratis"
    }
  };

  const c = t[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />

      <main className="pt-24 pb-20 relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emguarde/5 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Header */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-4"
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
              <span className="text-gradient-emguarde italic">{c.headline2}</span>
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
              <div className="absolute -inset-4 bg-emguarde/10 rounded-2xl blur-2xl" />
              <img
                src={imgEmgo}
                alt="emGuarde GO EMF protection device set of 2"
                className="relative w-full max-w-md mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-emguarde/40 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-emguarde/40 rounded-br-lg" />
            </motion.div>

            {/* Right: Spec Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-6"
            >
              <h3 className="text-2xl font-display font-black text-foreground">
                {c.techTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {c.features.map((f, i) => (
                  <div
                    key={i}
                    className="glass-card p-5 rounded-xl border border-emguarde/15 hover:border-emguarde/35 transition-all duration-300"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-emguarde mb-2 block font-bold">
                      0{i + 1}
                    </span>
                    <h4 className="font-body font-black text-base text-foreground mb-1">
                      {f.title}
                    </h4>
                    <p className="font-body text-xs text-foreground/75 leading-relaxed font-bold">
                      {f.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Deep Storytelling Narrative Section */}
          <div className="relative max-w-4xl mx-auto mb-20 p-8 md:p-12 rounded-2xl bg-card/40 border border-border/40 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-emguarde/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="relative text-center md:text-left space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-emguarde font-bold block">
                {c.storySubtitle}
              </span>
              <h2 className="text-2xl md:text-4xl font-display font-black text-foreground">
                {c.storyTitle}
              </h2>
              <div className="space-y-4 font-body text-foreground/80 text-sm md:text-base leading-relaxed font-bold">
                <p>{c.storyP1}</p>
                <p>{c.storyP2}</p>
                <p className="border-l-4 border-emguarde pl-4 italic text-foreground text-base md:text-lg">
                  {c.storyP3}
                </p>
              </div>
            </div>
          </div>

          {/* University-Led Research */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative max-w-5xl mx-auto mb-20 overflow-hidden rounded-2xl border border-emguarde/20 bg-gradient-to-br from-emguarde/10 via-card/60 to-card/30 p-8 md:p-12"
            aria-labelledby="emguarde-research-title"
          >
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emguarde/10 blur-[100px] pointer-events-none" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <div className="mb-5 flex items-center gap-3 text-emguarde">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emguarde/20 bg-emguarde/10">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em]">
                    {c.researchEyebrow}
                  </span>
                </div>
                <h2 id="emguarde-research-title" className="mb-5 text-2xl font-black text-foreground md:text-4xl font-display">
                  {c.researchTitle}
                </h2>
                <p className="font-body text-sm font-bold leading-relaxed text-foreground/80 md:text-base">
                  {c.researchIntro}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {c.researchPoints.map((point) => (
                  <div key={point.label} className="rounded-xl border border-emguarde/15 bg-background/40 px-5 py-4 backdrop-blur-sm">
                    <strong className="block font-display text-xl font-black text-emguarde md:text-2xl">
                      {point.value}
                    </strong>
                    <span className="mt-1 block font-body text-xs font-bold leading-relaxed text-foreground/70">
                      {point.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative mt-8 border-t border-emguarde/15 pt-5 font-body text-[11px] font-semibold leading-relaxed text-foreground/60 md:text-xs">
              {c.researchNote}
            </p>
          </motion.section>

          {/* Videos Grid */}
          <div className="max-w-4xl mx-auto mb-20 space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emguarde font-bold text-center">
              {c.videoReviews}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/I8Fq7HVxszc"
                  title="emGuarde GO Doctor Presentation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/hqAtESRBBys"
                  title="emGuarde GO Demonstration"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
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
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emguarde font-bold mb-4 text-center">
              {c.demoTitle}
            </p>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-emguarde/20 shadow-deep">
              <iframe
                src="https://www.youtube.com/embed/5wuY1dKjHds"
                title="emGuarde GO 2-Minute Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Order Actions Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative rounded-2xl overflow-hidden bg-card/60 border border-emguarde/10 p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-r from-emguarde/5 via-transparent to-emguarde/5" />
              
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-6">
                  {lang === "en" ? "Ready to Shield Your Environment?" : "¿Listo para proteger tu entorno?"}
                </h3>
                <p className="font-body text-sm md:text-base text-foreground/80 font-bold max-w-xl mx-auto mb-8">
                  {lang === "en"
                    ? "Order the emGuarde GO set directly from the official Enagic Store, or download our free PDF detailing EMF mitigation research."
                    : "Ordena el set de emGuarde GO directamente en la tienda oficial de Enagic, o descarga nuestra guía PDF gratuita sobre la mitigación de ondas EMF."}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
                  <motion.a
                    href={lang === "en" ? "https://mehdicohen1.systeme.io/englishemguarde" : "https://mehdicohen1.systeme.io/mehdicohen-00d27fa4"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground shadow-glow"
                    style={{ boxShadow: "var(--shadow-emguarde)" }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {c.ctaPdf}
                  </motion.a>

                  <motion.a
                    href={`${enagicBase}&product_id=9026`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                    </svg>
                    {c.ctaBuy}
                  </motion.a>

                  <motion.a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04, y: -3 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageCircle size={20} />
                    {c.ctaWa}
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default EmGuardeGoSubpage;
