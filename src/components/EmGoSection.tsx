import { motion } from "framer-motion";
import imgEmgo from "@/assets/product-emgo.png";
import { MessageCircle } from "lucide-react";

interface EmGoSectionProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const EmGoSection = ({ lang }: EmGoSectionProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";

  const t = {
    en: {
      micro: "Portable EMF Protection",
      headline: "emGuarde GO:",
      headline2: "Your On-The-Go Shield.",
      badge: "Content coming soon",
      desc: "Introducing Enagic's latest breakthrough: emGuarde GO (set of 2). Powerful, portable, and designed for your active life. Keep yourself and your family shielded from electromagnetic frequencies (EMF) from mobile phones, laptops, and 5G signals wherever you go.",
      features: [
        { title: "Set of 2 Devices", desc: "Keep one on you and share the other, or double up on protection" },
        { title: "10-Foot Diameter", desc: "Creates a spherical personal protection shield around you" },
        { title: "USB-C Rechargeable", desc: "Long-lasting 5,000 mAh rechargeable battery for constant shield" },
        { title: "Total Portability", desc: "Lightweight and sleek — fits in your pocket, bag, or backpack" }
      ],
      ctaBuy: "Buy emGuarde GO Now",
      ctaWa: "WhatsApp Us",
      demoTitle: "Watch the emGuarde GO Demo",
    },
    es: {
      micro: "Protección EMF Portátil",
      headline: "emGuarde GO:",
      headline2: "Tu Escudo en Movimiento.",
      badge: "Contenido próximamente",
      desc: "Presentamos el último avance de Enagic: emGuarde GO (set de 2). Potente, portátil y diseñado para tu vida activa. Mantén a ti y a tu familia protegidos de las frecuencias electromagnéticas (EMF) de teléfonos móviles, laptops y señales 5G donde quiera que vayas.",
      features: [
        { title: "Juego de 2 Dispositivos", desc: "Lleva uno contigo y comparte el otro, o duplica tu protección" },
        { title: "Diámetro de 10 Pies", desc: "Crea un escudo de protección personal esférico a tu alrededor" },
        { title: "Recargable por USB-C", desc: "Batería recargable de 5,000 mAh de larga duración para un escudo constante" },
        { title: "Portabilidad Total", desc: "Ligero y elegante — cabe en tu bolsillo, bolso o mochila" }
      ],
      ctaBuy: "Comprar emGuarde GO Ahora",
      ctaWa: "Escríbenos por WhatsApp",
      demoTitle: "Mira la Demostración de emGuarde GO",
    }
  };

  const c = t[lang];

  return (
    <section id="emgo-section" className="py-20 md:py-28 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emguarde/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Coming soon badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 font-mono text-[10px] uppercase tracking-[0.2em] text-red-500 font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
            </span>
            {c.badge}
          </span>
        </motion.div>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-4 text-center">
          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05]">
            <span className="text-foreground">{c.headline}</span><br />
            <span className="text-gradient-emguarde italic">{c.headline2}</span>
          </h2>
        </motion.div>

        {/* Intro text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-foreground/80 font-body leading-[1.8] font-bold">
            {c.desc}
          </p>
        </motion.div>

        {/* emGuarde GO Image & Demo Video */}
        <div className="grid lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto mb-16">
          
          {/* Left: Device details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative flex items-center justify-center py-6 bg-gradient-to-br from-emguarde/5 to-transparent rounded-2xl border border-emguarde/10">
              <img
                src={imgEmgo}
                alt="emGuarde GO EMF device mehdicohen.com"
                className="w-full max-w-[220px] mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {c.features.map((f, i) => (
                <div key={i} className="glass-card p-4 rounded-xl border border-emguarde/15">
                  <h4 className="font-body font-black text-sm text-foreground mb-1">{f.title}</h4>
                  <p className="font-body text-xs text-foreground/60 leading-relaxed font-bold">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Demo Video & Buttons */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative">
              <div className="absolute -inset-2 bg-emguarde/8 rounded-2xl blur-2xl" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-emguarde font-bold mb-3 text-center">
                {c.demoTitle}
              </p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/mfA6RE7FGQg"
                  title="emGuarde GO Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <motion.a
                href={`${enagicBase}&product_id=9026`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground w-full sm:flex-1 text-center"
                style={{ boxShadow: "var(--shadow-emguarde)" }}>
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 md:px-10 md:py-5 rounded-xl font-body font-black text-xs md:text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors w-full sm:w-auto">
                <MessageCircle size={20} />
                {c.ctaWa}
              </motion.a>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default EmGoSection;
