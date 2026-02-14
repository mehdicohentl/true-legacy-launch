import { motion } from "framer-motion";
import emguardeDevice from "@/assets/emguarde-device.png";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {

  const t = {
    en: {
      micro: "Now Available in USA, Canada & Mexico",
      headline: "EmGuarde",
      headline2: "EMF Protection by Enagic",
      intro: "Embracing the philosophy of \"True Health,\" Enagic has been dedicated to manufacturing and selling a range of products — the Leveluk series, Anespa, Ukon products, Kangen Air and Kangen Farm products — all aimed at enhancing overall health and well-being.",
      intro2: "Now, we are excited to introduce our new product, \"emGuarde\" — the device which reduces or mitigates the disruptive effects of electromagnetic fields (EMFs) produced by electronic devices, aiming to create a more balanced and healthier environment.",
      history: "First launched in Malaysia in May 2023, emGuarde is now also being sold in Malaysia, Hong Kong, Singapore, Dubai, Indonesia, Philippines, Thailand, Australia and Europe. We are pleased to announce it is now available in the North American region — USA, Canada, and Mexico.",
      privateImport: "Please note that this is a private import product from Malaysia.",
      contact: "For more information, contact emgsales@enagic-my.com or WhatsApp: +60133096234",
      badge: "Launching in USA, Canada & Mexico",
      ctaPdf: "Get a Free EmGuarde PDF",
    },
    es: {
      micro: "Ahora Disponible en USA, Canadá y México",
      headline: "EmGuarde",
      headline2: "Protección EMF por Enagic",
      intro: "Abrazando la filosofía de \"Salud Verdadera,\" Enagic se ha dedicado a fabricar y vender una gama de productos — la serie Leveluk, Anespa, productos Ukon, Kangen Air y productos Kangen Farm — todos dirigidos a mejorar la salud y el bienestar general.",
      intro2: "Ahora, estamos emocionados de presentar nuestro nuevo producto, \"emGuarde\" — el dispositivo que reduce o mitiga los efectos disruptivos de los campos electromagnéticos (EMF) producidos por dispositivos electrónicos, con el objetivo de crear un ambiente más equilibrado y saludable.",
      history: "Lanzado por primera vez en Malasia en mayo de 2023, emGuarde ahora también se vende en Malasia, Hong Kong, Singapur, Dubái, Indonesia, Filipinas, Tailandia, Australia y Europa. Nos complace anunciar que ahora está disponible en la región de América del Norte — USA, Canadá y México.",
      privateImport: "Ten en cuenta que este es un producto de importación privada desde Malasia.",
      contact: "Para más información, contacta emgsales@enagic-my.com o WhatsApp: +60133096234",
      badge: "Lanzamiento en USA, Canadá y México",
      ctaPdf: "Obtén un PDF Gratis del EmGuarde",
    },
  };

  const c = t[lang];

  return (
    <section id="emguarde" className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emguarde/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emguarde/4 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6 text-center"
        >
          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{c.headline}</span><br />
            <span className="text-gradient-emguarde italic">{c.headline2}</span>
          </h2>
        </motion.div>

        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card font-mono text-xs uppercase tracking-[0.2em] text-emguarde border border-emguarde/20 font-bold">
            <span className="w-2 h-2 rounded-full bg-emguarde animate-pulse" />
            {c.badge}
          </span>
        </motion.div>

        {/* Intro + EmGuarde Image & Video grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.intro}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.intro2}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.history}
            </p>
            <p className="text-base font-body font-bold text-emguarde mb-4">
              ⚠️ {c.privateImport}
            </p>
            <p className="text-sm text-foreground font-body font-bold">
              {c.contact}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* EmGuarde Device Image */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
              <img
                src={emguardeDevice}
                alt="EmGuarde Device - EMF Protection"
                className="relative w-full max-w-[280px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Videos side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-emguarde/8 rounded-2xl blur-2xl" />
                <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                  <iframe
                    src="https://www.youtube.com/embed/rNLBZ1NEtDI"
                    title="EmGuarde Review"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Free PDF CTA - below videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.a
            href="https://mehdicohen1.systeme.io/mehdicohen-00d27fa4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
            style={{ boxShadow: "var(--shadow-emguarde)" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {c.ctaPdf}
          </motion.a>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://mehdicohen1.systeme.io/mehdicohen-00d27fa4"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
            style={{ boxShadow: "var(--shadow-emguarde)" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            {c.ctaPdf}
          </motion.a>
          <motion.a
            href={lang === "en" ? "/emguarde" : "/es/emguarde"}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            {lang === "en" ? "How to Buy EmGuarde" : "Cómo Comprar EmGuarde"}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default EmGuardeSection;
