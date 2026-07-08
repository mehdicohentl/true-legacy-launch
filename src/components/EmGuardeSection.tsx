import { motion } from "framer-motion";
import imgEmgo from "@/assets/product-emgo.png";
import { MessageCircle } from "lucide-react";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";

  const t = {
    en: {
      micro: "Portable EMF Protection",
      headline: "emGuarde GO:",
      headline2: "Your On-The-Go Shield.",
      applicationProcess: "Introducing Enagic's latest breakthrough: emGuarde GO (set of 2). Powerful, portable, and designed for your active life. Keep yourself and your family shielded from electromagnetic frequencies (EMF) from mobile phones, laptops, and 5G signals wherever you go. Available in USA, Canada, and Mexico.",
      badge: "Now Available in USA, Canada, and Mexico",
      ctaPdf: "Get a Free EmGuarde GO PDF",
      ctaBuy: "Buy emGuarde GO Now",
      whatsappCta: "Contact Us",
      demoTitle: "Watch the emGuarde GO Demo",
    },
    es: {
      micro: "Protección EMF Portátil",
      headline: "emGuarde GO:",
      headline2: "Tu Escudo en Movimiento.",
      applicationProcess: "Presentamos el último avance de Enagic: emGuarde GO (set de 2). Potente, portátil y diseñado para tu vida activa. Mantén a ti y a tu familia protegidos de las frecuencias electromagnéticas (EMF) de teléfonos móviles, laptops y señales 5G donde quiera que vayas. Disponible en EE.UU., Canadá y México.",
      badge: "Ahora Disponible en EE.UU., Canadá y México",
      ctaPdf: "Obtén un PDF Gratis del emGuarde GO",
      ctaBuy: "Comprar emGuarde GO Ahora",
      whatsappCta: "Contáctanos",
      demoTitle: "Mira la Demostración de emGuarde GO",
    }
  };

  const c = t[lang];

  return (
    <section id="emguarde" className="py-20 md:py-28 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6 text-center">
          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05]">
            <span className="text-foreground">{c.headline}</span><br />
            <span className="text-gradient-emguarde italic">{c.headline2}</span>
          </h2>
        </motion.div>

        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12">
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold">
            {c.applicationProcess}
          </p>
        </motion.div>

        {/* EmGuarde Image & Videos centered */}
        <div className="max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6">

            {/* emGuarde GO Device Image */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
              <img
                src={imgEmgo}
                alt="Mehdi Cohen True Legacy CEO emGuarde GO EMF protection device Enagic wellness mehdicohen.com"
                className="relative w-full max-w-[340px] mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-emguarde/60 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-emguarde/60 rounded-br-lg" />
            </div>

            {/* Videos — 3 videos in responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-emguarde/8 rounded-2xl blur-2xl" />
                <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                  <iframe
                    src="https://www.youtube.com/embed/vPlD1fZEdvE"
                    title="emGuarde GO Unboxing"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-2 bg-emguarde/8 rounded-2xl blur-2xl" />
                <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                  <iframe
                    src="https://www.youtube.com/embed/I8fFj7-FaPw"
                    title="EmGuarde Presentation"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* emGuarde GO Demo Video */}
            <div className="relative">
              <div className="absolute -inset-2 bg-emguarde/8 rounded-2xl blur-2xl" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emguarde font-bold mb-3 text-center">
                {c.demoTitle}
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/mfA6RE7FGQg"
                  title="emGuarde GO Demo"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">

          <motion.a
            href={lang === "en" ? "https://mehdicohen1.systeme.io/englishemguarde" : "https://mehdicohen1.systeme.io/mehdicohen-00d27fa4"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
            style={{ boxShadow: "var(--shadow-emguarde)" }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {c.ctaPdf}
          </motion.a>
          <motion.a
            href={`${enagicBase}&product_id=9026`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            {c.ctaBuy}
          </motion.a>
          <motion.a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors">
            <MessageCircle size={20} />
            {c.whatsappCta}
          </motion.a>
        </motion.div>

      </div>
    </section>);
};

export default EmGuardeSection;
