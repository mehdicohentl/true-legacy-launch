import { motion } from "framer-motion";
import emguardeDevice from "@/assets/emguarde-device.png";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {

  const t = {
    en: {
      micro: "Now Available in the U.S., Canada, and Mexico",
      headline: "EmGuarde:",
      headline2: "EMF Protection by Enagic.",
      intro: "EmGuarde is Enagic's newest innovation, designed to reduce the harmful effects of EMFs from everyday electronic devices—helping you create a cleaner, healthier environment.",
      history: "After a successful launch in Malaysia, EmGuarde is now available in the U.S., Canada, and Mexico.",
      applicationProcess: "EmGuarde is only available through an application process—it is a private import from Malaysia. Click below to get a free info PDF or book a call with our team to walk you through the purchase.",
      badge: "Now Available in the U.S., Canada, and Mexico",
      ctaPdf: "Get a Free EmGuarde PDF"
    },
    es: {
      micro: "Ahora Disponible en EE.UU., Canadá y México",
      headline: "EmGuarde:",
      headline2: "Protección EMF por Enagic.",
      intro: "EmGuarde es la innovación más reciente de Enagic, diseñada para reducir los efectos dañinos de los EMF de los dispositivos electrónicos cotidianos—ayudándote a crear un ambiente más limpio y saludable.",
      history: "Después de un lanzamiento exitoso en Malasia, EmGuarde ahora está disponible en EE.UU., Canadá y México.",
      applicationProcess: "EmGuarde solo está disponible a través de un proceso de solicitud—es una importación privada de Malasia. Haz clic abajo para obtener un PDF informativo gratuito o agenda una llamada con nuestro equipo para guiarte en la compra.",
      badge: "Ahora Disponible en EE.UU., Canadá y México",
      ctaPdf: "Obtén un PDF Gratis del EmGuarde"
    }
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
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6 text-center">

          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6">

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
          className="flex justify-center mb-12">

          



        </motion.div>

        {/* Intro + EmGuarde Image & Video grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}>

            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.intro}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.history}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] font-bold">
              {c.applicationProcess}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6">

            {/* EmGuarde Device Image */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
              <img
                src={emguardeDevice}
                alt="EmGuarde Device - EMF Protection"
                className="relative w-full max-w-[280px] mx-auto drop-shadow-2xl" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-emguarde/60 rounded-tl-lg" />
              
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-emguarde/60 rounded-br-lg" />
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
                    allowFullScreen />

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
                    allowFullScreen />

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">

          <motion.a
            href="https://mehdicohen1.systeme.io/mehdicohen-00d27fa4"
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
            href={lang === "en" ? "/emguarde" : "/es/emguarde"}
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            {lang === "en" ? "How to Buy EmGuarde" : "Cómo Comprar EmGuarde"}
          </motion.a>
          <motion.a
            href="https://calendly.com/aquacharged/true-legacy-one-on-one"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            {lang === "en" ? "Book an EmGuarde Info Call" : "Agenda una Llamada Informativa"}
          </motion.a>
        </motion.div>

      </div>
    </section>);

};

export default EmGuardeSection;