import { motion } from "framer-motion";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";
import mehdiAwards from "@/assets/mehdi-awards.jpg";
import mehdiEnagic from "@/assets/mehdi-enagic.jpg";

interface AboutSectionProps {
  lang: "en" | "es";
}

const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = {
    en: {
      tag: "Meet Mehdi Cohen",
      headline: "From Struggle to Legacy",
      p1: "Mehdi's mission is simple: help you build a life for yourself regardless of your background. Coming from nothing, he built everything — and now he's showing others the way.",
      p2: "As a Team Leader at True Legacy World and a top Enagic distributor, Mehdi has helped hundreds of people across the globe transform their health and finances.",
      video: "Watch Mehdi's Story",
    },
    es: {
      tag: "Conoce a Mehdi Cohen",
      headline: "De la Lucha al Legado",
      p1: "La misión de Mehdi es simple: ayudarte a construir una vida sin importar tu origen. Viniendo de nada, construyó todo — y ahora muestra el camino a otros.",
      p2: "Como Líder de Equipo en True Legacy World y distribuidor top de Enagic, Mehdi ha ayudado a cientos de personas alrededor del mundo a transformar su salud y finanzas.",
      video: "Mira la Historia de Mehdi",
    },
  };

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/3 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-bold text-sm uppercase tracking-[0.25em]">{t[lang].tag}</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3">{t[lang].headline}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6">{t[lang].p1}</p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">{t[lang].p2}</p>

            <motion.a
              href="https://www.youtube.com/watch?v=86KYc3Gl3vw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-secondary border border-border hover:border-accent/40 transition-all font-body font-bold text-foreground"
            >
              <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-foreground ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
              </span>
              {t[lang].video}
            </motion.a>

            {/* Photo gallery */}
            <div className="grid grid-cols-3 gap-3 mt-10">
              {[mehdiPortrait, mehdiAwards, mehdiEnagic].map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt="Mehdi Cohen"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="rounded-lg w-full h-32 object-cover border border-border hover:border-accent/40 transition-all"
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-glow">
              <iframe
                src="https://www.youtube.com/embed/86KYc3Gl3vw"
                title="Mehdi Cohen Story"
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

export default AboutSection;
