import { useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import { duoIconMap } from "@/components/Icons";
import Footer from "@/components/Footer";
import imgK8 from "@/assets/product-k8-real.png";
import imgEmgo from "@/assets/product-emgo.png";
import { setPageMeta } from "@/lib/seo";

interface DuoPackagePageProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const DuoPackagePage = ({ lang }: DuoPackagePageProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";
  const emguardeRoute = isLatam ? "/latam/emguarde" : "/global/emguarde";

  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "Leveluk K8 + emGo DUO Package | Double Commission | Mehdi Cohen True Legacy"
        : "Paquete DUO Leveluk K8 + emGo | Doble Comisión | Mehdi Cohen True Legacy",
      lang === "en"
        ? "The ultimate wellness combo: Leveluk K8 Kangen Water machine + emGo EMF protection. Two products, two commission points. Join Mehdi Cohen's True Legacy team worldwide."
        : "El combo de bienestar definitivo: Máquina de Agua Kangen Leveluk K8 + protección EMF emGo. Dos productos, dos puntos de comisión. Únete al equipo global True Legacy de Mehdi Cohen."
    );
  }, [lang]);

  const t = {
    en: {
      micro: "The Ultimate Biohacking Bundle",
      headline: "Leveluk K8 + emGo",
      headline2: "DUO Package",
      subhead:
        "Transform your health and income with the most powerful pairing in the Enagic ecosystem — the Leveluk K8 Kangen Water machine and the brand new emGo EMF protection device.",
      whyTitle: "Why the Duo Package?",
      whyItems: [
        {
          icon: "droplet",
          title: "Kangen Water K8",
          desc: "The flagship 8-plate ionizer — medical-grade hydrogen-rich alkaline water proven by 52+ years of Japanese science. Used in hospitals, by athletes, and high-performers worldwide.",
        },
        {
          icon: "shield",
          title: "emGo EMF Protection",
          desc: "Enagic's cutting-edge wearable device reducing the harmful effects of electromagnetic frequencies from phones, laptops, and Wi-Fi — your invisible shield.",
        },
        {
          icon: "coins",
          title: "Build Income Together",
          desc: "Each product generates commissions independently within the Enagic 8-point system. Combining both earns 2 commission points per sale — amplify your income potential.",
        },
        {
          icon: "globe",
          title: "Global Business",
          desc: "Market both products to a worldwide audience — K8 ships to 190+ countries. emGo information and pre-orders are available globally.",
        },
      ],
      k8Title: "Step 1 — Order Your Kangen K8",
      k8Desc:
        "The Leveluk K8 is the most advanced Kangen Water machine in the core line. 8 platinum-coated titanium plates. 5 types of ionized water. Built to last a lifetime.",
      k8Price: "From ~$5,890 USD",
      k8Financing: "Financing available through Enagic's direct debit program",
      k8DistId: "Distributor ID: 37000004828",
      k8Cta: "Order Kangen K8 Now",
      k8Benefits: [
        "8 platinum-coated titanium plates",
        "Medical-grade ionization",
        "Ships to 190+ countries",
        "52+ years of Japanese engineering",
        "Lifetime machine support",
        "Full commission in Enagic system",
      ],
      emguardeTitle: "Step 2 — Order Your emGuarde GO (set of 2)",
      emguardeDesc:
        "The emGuarde GO comes as a set of two compact devices for portable EMF support. Each covers about 10 feet in diameter, helping create a more balanced environment. Rechargeable 5,000 mAh battery with convenient USB-C charging. Please note that there is no financing option through Enagic.",
      emguardePrice: "$2,880.00 USD",
      emguardePriceLocal: "(plus shipping)",
      emguardeDistId: "Distributor ID: 37000004828",
      emguardeBenefits: [
        "Set of 2 portable devices",
        "10-foot protection diameter per device",
        "Rechargeable 5,000 mAh battery",
        "USB-C charging support",
        "Full commission points in the Enagic system",
        "No financing option through Enagic",
      ],
      emguardeCta: "Order emGuarde GO Now",
      emguardeWa: "Contact Us",
      ctaTitle: "Ready to Start Your Duo Journey?",
      ctaDesc:
        "Book a free strategy call with Mehdi's team. We'll walk you through both orders step by step.",
      ctaBook: "Book a Free Info Call",
      ctaEvent: "Join the Live Zoom Event",
    },
    es: {
      micro: "El Paquete Definitivo de Biohacking",
      headline: "Leveluk K8 + emGo",
      headline2: "Paquete DUO",
      subhead:
        "Transforma tu salud y tus ingresos con la combinación más poderosa del ecosistema Enagic — la máquina de Agua Kangen Leveluk K8 y el dispositivo de protección EMF emGo.",
      whyTitle: "¿Por Qué el Paquete Duo?",
      whyItems: [
        {
          icon: "droplet",
          title: "Agua Kangen K8",
          desc: "El ionizador insignia con 8 placas — agua alcalina ionizada rica en hidrógeno de grado médico, respaldada por más de 52 años de ciencia japonesa. Usada en hospitales, por atletas y personas de alto rendimiento en todo el mundo.",
        },
        {
          icon: "shield",
          title: "Protección EMF emGo",
          desc: "El dispositivo wearable de vanguardia de Enagic que reduce los efectos dañinos de las frecuencias electromagnéticas de teléfonos, laptops y Wi-Fi — tu escudo invisible.",
        },
        {
          icon: "coins",
          title: "Construye Ingresos Juntos",
          desc: "Cada producto genera comisiones independientemente dentro del sistema de 8 puntos de Enagic. Al combinar ambos, obtienes 2 puntos de comisión por venta — amplifica tu potencial de ingresos.",
        },
        {
          icon: "globe",
          title: "Negocio Global",
          desc: "Comercializa ambos productos a una audiencia mundial — el K8 se envía a más de 190 países. La información y pre-órdenes de emGo están disponibles a nivel global.",
        },
      ],
      k8Title: "Paso 1 — Ordena Tu Kangen K8",
      k8Desc:
        "El Leveluk K8 es la máquina de Agua Kangen más avanzada de la línea principal. 8 placas de titanio recubiertas de platino. 5 tipos de agua ionizada. Construida para durar toda la vida.",
      k8Price: "Desde ~$5,890 USD",
      k8Financing: "Financiamiento disponible a través del programa de débito directo de Enagic",
      k8DistId: "ID de Distribuidor: 37000004828",
      k8Cta: "Ordenar Kangen K8 Ahora",
      k8Benefits: [
        "8 placas de titanio recubiertas de platino",
        "Ionización de grado médico",
        "Envío a más de 190 países",
        "Más de 52 años de ingeniería japonesa",
        "Soporte vitalicio de la máquina",
        "Comisión completa en el sistema Enagic",
      ],
      emguardeTitle: "Paso 2 — Ordena Tu emGuarde GO (set de 2)",
      emguardeDesc:
        "El emGuarde GO viene en un juego de dos dispositivos compactos para protección EMF portátil. Cada uno cubre aproximadamente 10 pies de diámetro, ayudando a crear un ambiente más equilibrado. Batería recargable de 5,000 mAh con práctica carga USB-C. Tenga en cuenta que no hay opción de financiamiento a través de Enagic.",
      emguardePrice: "$2,880.00 USD",
      emguardePriceLocal: "(más envío)",
      emguardeDistId: "ID de Distribuidor: 37000004828",
      emguardeBenefits: [
        "Juego de 2 dispositivos portátiles",
        "Diámetro de protección de 10 pies por dispositivo",
        "Batería recargable de 5,000 mAh",
        "Carga rápida por USB-C",
        "Puntos de comisión completos en el sistema Enagic",
        "Sin opción de financiamiento a través de Enagic",
      ],
      emguardeCta: "Ordenar emGuarde GO Ahora",
      emguardeWa: "Contáctanos",
      ctaTitle: "¿Listo para Comenzar Tu Camino Duo?",
      ctaDesc:
        "Agenda una llamada gratuita de estrategia con el equipo de Mehdi. Te guiaremos a través de ambos pedidos paso a paso.",
      ctaBook: "Agenda una Llamada Gratuita",
      ctaEvent: "Únete al Evento Zoom en Vivo",
    },
  };

  const c = t[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar lang={lang} />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-28 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/8 via-transparent to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/6 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs uppercase tracking-[0.4em] text-accent font-bold mb-6"
          >
            {c.micro}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-black leading-[0.95] mb-4"
          >
            <span className="text-gradient-gold">{c.headline}</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl font-display font-black text-foreground mb-6"
          >
            {c.headline2}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-foreground/70 font-bold max-w-2xl mx-auto mb-10"
          >
            {c.subhead}
          </motion.p>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="aspect-video rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${isLatam ? "tctiae20KRs" : "9eKelJoT4vE"}?rel=0`}
                title={isLatam ? "Duo Package LATAM" : "Duo Package Global"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Product Images side-by-side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-end justify-center gap-6 md:gap-16 mb-12"
          >
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-4 bg-accent/8 rounded-2xl blur-3xl" />
              <img
                src={imgK8}
                alt="Kangen K8 machine duo package mehdicohen.com"
                className="relative w-32 md:w-48 lg:w-60 drop-shadow-2xl"
              />
              <span className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold">
                Leveluk K8
              </span>
            </div>
            <div className="relative flex flex-col items-center self-center">
              <span className="text-4xl md:text-6xl font-display font-black text-accent/40">+</span>
            </div>
            <div className="relative flex flex-col items-center">
              <div className="absolute -inset-4 bg-emguarde/8 rounded-2xl blur-3xl" />
              <img
                src={imgEmgo}
                alt="emGo device duo package mehdicohen.com"
                className="relative w-36 md:w-52 lg:w-64 drop-shadow-2xl"
              />
              <span className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-accent font-bold">
                EmGuarde GO
              </span>
            </div>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            <motion.a
              href={`${enagicBase}&product_id=1016`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {c.k8Cta}
            </motion.a>
            <motion.a
              href={`${enagicBase}&product_id=9026`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              {c.emguardeCta}
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Duo section */}
      <section className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-black text-center text-foreground mb-14"
          >
            {c.whyTitle}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {c.whyItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card rounded-2xl p-6 border border-border/20 hover:border-accent/30 transition-all"
              >
                <div className="mb-4 text-accent">{duoIconMap[item.icon]}</div>
                <h3 className="font-display font-black text-base text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-foreground/60 font-bold leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* K8 Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/4 rounded-full blur-[180px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute -inset-6 bg-accent/6 rounded-3xl blur-3xl" />
              <img
                src={imgK8}
                alt="Kangen K8 Leveluk machine order duo package mehdicohen.com"
                className="relative w-full max-w-sm drop-shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-4">
                {lang === "en" ? "Step 1 of 2" : "Paso 1 de 2"}
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
                {c.k8Title}
              </h2>
              <p className="font-body text-base md:text-lg text-foreground/70 font-bold leading-relaxed mb-6">
                {c.k8Desc}
              </p>

              <div className="glass-card rounded-xl p-5 border border-accent/20 mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-2xl md:text-3xl font-display font-black text-accent">{c.k8Price}</span>
                </div>
                <p className="font-body text-xs text-foreground/50 font-bold mb-1">{c.k8Financing}</p>
                <p className="font-mono text-xs text-accent/70 font-bold">{c.k8DistId}</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {c.k8Benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm font-bold text-foreground/70">{b}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href={`${enagicBase}&product_id=1016`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {c.k8Cta}
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EmGuarde Section */}
      <section className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emguarde/4 rounded-full blur-[180px]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-4">
                {lang === "en" ? "Step 2 of 2" : "Paso 2 de 2"}
              </p>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
                {(() => {
                  const match = c.emguardeTitle.match(/(.*)(\((?:set of|set de) \d+\))/i);
                  if (match) {
                    return (
                      <>
                        {match[1]}
                        <span className="text-lg md:text-2xl lg:text-3xl font-bold text-foreground/50 block sm:inline sm:ml-2">
                          {match[2]}
                        </span>
                      </>
                    );
                  }
                  return c.emguardeTitle;
                })()}
              </h2>
              <p className="font-body text-base md:text-lg text-foreground/70 font-bold leading-relaxed mb-6">
                {c.emguardeDesc}
              </p>

              <div className="glass-card rounded-xl p-5 border border-emguarde/20 mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl md:text-3xl font-display font-black text-emguarde">{c.emguardePrice}</span>
                  <span className="font-body text-sm text-foreground/50 font-bold">{c.emguardePriceLocal}</span>
                </div>
                <p className="font-mono text-xs text-emguarde/70 font-bold">{c.emguardeDistId}</p>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {c.emguardeBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-emguarde flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-body text-sm font-bold text-foreground/70">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={`${enagicBase}&product_id=9026`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
                  style={{ boxShadow: "var(--shadow-emguarde)" }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                  </svg>
                  {c.emguardeCta}
                </motion.a>
                <motion.a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={18} />
                  {c.emguardeWa}
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative flex items-center justify-center"
            >
              <div className="absolute -inset-6 bg-emguarde/6 rounded-3xl blur-3xl" />
              <img
                src={imgEmgo}
                alt="emGo EMF protection device duo package mehdicohen.com"
                className="relative w-full max-w-sm drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/3 to-transparent" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-display font-black text-foreground mb-4"
          >
            {c.ctaTitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-base md:text-lg text-foreground/60 font-bold max-w-xl mx-auto mb-10"
          >
            {c.ctaDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="https://calendly.com/aquacharged/true-legacy-one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {c.ctaBook}
            </motion.a>
            <motion.a
              href={isLatam ? "/latam/events" : "/global/events"}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              {c.ctaEvent}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default DuoPackagePage;
