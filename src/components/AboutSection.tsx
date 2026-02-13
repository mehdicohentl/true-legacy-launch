import { motion } from "framer-motion";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";
import mehdiAwards from "@/assets/mehdi-awards.jpg";
import mehdiEnagic from "@/assets/mehdi-enagic.jpg";

interface AboutSectionProps {
  lang: "en" | "es";
}

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7 },
};

const AboutSection = ({ lang }: AboutSectionProps) => {
  const t = {
    en: {
      micro: "The Man Behind The Mission",
      headline: "I Didn't Have a Plan B.",
      headline2: "I Made Plan A Work.",
      quote: "\"I came to this country with nothing but a dream and a work ethic that wouldn't quit. Every 'no' I heard became fuel. Every closed door became a wall I broke through.\"",
      p1: "Mehdi Cohen isn't a motivational speaker. He's proof. From immigrant roots to leading one of the fastest-growing teams in the Enagic network — his story isn't about luck. It's about the decision to never settle.",
      p2: "Today, he leads the True Legacy team — a movement of ordinary people doing extraordinary things. Health. Wealth. Purpose. All three, or none at all.",
      video: "Watch the Full Story →",
      imgLabels: ["The Journey", "The Recognition", "The Mission"],
    },
    es: {
      micro: "El Hombre Detrás de la Misión",
      headline: "No Tenía Plan B.",
      headline2: "Hice Que el Plan A Funcionara.",
      quote: "\"Llegué a este país sin nada más que un sueño y una ética de trabajo que no se rinde. Cada 'no' que escuché se convirtió en combustible. Cada puerta cerrada se convirtió en un muro que derribé.\"",
      p1: "Mehdi Cohen no es un orador motivacional. Es la prueba viviente. De raíces inmigrantes a liderar uno de los equipos de más rápido crecimiento en la red Enagic — su historia no se trata de suerte. Se trata de la decisión de nunca conformarse.",
      p2: "Hoy, lidera el equipo True Legacy — un movimiento de personas comunes haciendo cosas extraordinarias. Salud. Riqueza. Propósito. Los tres, o ninguno.",
      video: "Ver la Historia Completa →",
      imgLabels: ["El Camino", "El Reconocimiento", "La Misión"],
    },
  };

  return (
    <section id="story" className="py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/3 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Micro label */}
        <motion.p {...fadeIn} className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent/80 mb-6 text-center">
          {t[lang].micro}
        </motion.p>

        {/* Headline */}
        <motion.div {...fadeIn} className="text-center mb-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{t[lang].headline}</span><br />
            <span className="text-gradient-gold italic">{t[lang].headline2}</span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          {...fadeIn}
          className="max-w-3xl mx-auto text-center text-lg md:text-xl font-display italic text-foreground/70 leading-relaxed mb-20 px-4"
        >
          {t[lang].quote}
          <span className="block mt-4 font-mono text-[10px] not-italic uppercase tracking-[0.3em] text-accent">
            — Mehdi Cohen
          </span>
        </motion.blockquote>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Text side */}
          <motion.div {...fadeIn}>
            <p className="text-base md:text-lg text-secondary-foreground font-body leading-[1.9] mb-6 font-light">
              {t[lang].p1}
            </p>
            <p className="text-base md:text-lg text-secondary-foreground font-body leading-[1.9] mb-10 font-light">
              {t[lang].p2}
            </p>

            <motion.a
              href="https://www.youtube.com/watch?v=86KYc3Gl3vw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-4 group"
            >
              <span className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <svg className="w-5 h-5 text-accent ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
              </span>
              <span className="font-body font-bold text-sm text-foreground uppercase tracking-[0.1em]">
                {t[lang].video}
              </span>
            </motion.a>

            {/* Photo gallery with labels */}
            <div className="grid grid-cols-3 gap-4 mt-14">
              {[mehdiPortrait, mehdiAwards, mehdiEnagic].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="group relative"
                >
                  <img
                    src={img}
                    alt={t[lang].imgLabels[i]}
                    className="rounded-xl w-full h-36 object-cover border border-border/50 group-hover:border-accent/30 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground/60 bg-background/70 backdrop-blur-sm px-2 py-1 rounded">
                    {t[lang].imgLabels[i]}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
              <iframe
                src="https://www.youtube.com/embed/86KYc3Gl3vw"
                title="Mehdi Cohen Story"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Corner accent */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
