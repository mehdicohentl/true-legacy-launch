import { motion } from "framer-motion";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";
import mehdiAwards from "@/assets/mehdi-awards.jpg";
import mehdiEnagic from "@/assets/mehdi-enagic.jpg";
import mehdiLifestyle from "@/assets/mehdi-lifestyle.jpg";
import mehdiHeadshot from "@/assets/mehdi-headshot.png";
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
      quote: "\"Watching my mother struggle shaped my resolve—every 'no' became fuel, every closed door a wall I broke through.\"",
      p1: "Mehdi Cohen isn't a motivational speaker he's proof. From undocumented immigrant roots to leading one of the fastest-growing teams in Enagic, his journey defies luck it's about the decision never to settle.",
      p2: "Today, he leads the True Legacy team a movement of ordinary people doing extraordinary things health, wealth, purpose all three, or none at all.",
      video: "Watch the Full Story →",
      imgLabels: ["The Journey", "The Recognition", "The Mission", "The Lifestyle"],
    },
    es: {
      micro: "El Hombre Detrás de la Misión",
      headline: "No Tenía Plan B.",
      headline2: "Hice Que el Plan A Funcionara.",
      quote: "\"Ver a mi madre luchar forjó mi determinación—cada 'no' se convirtió en combustible, cada puerta cerrada en un muro que derribé.\"",
      p1: "Mehdi Cohen no es un orador motivacional, es la prueba viviente. De raíces como inmigrante indocumentado a liderar uno de los equipos de más rápido crecimiento en Enagic, su camino desafía la suerte, se trata de la decisión de nunca conformarse.",
      p2: "Hoy lidera el equipo True Legacy, un movimiento de personas comunes haciendo cosas extraordinarias: salud, riqueza, propósito, los tres o ninguno.",
      video: "Ver la Historia Completa →",
      imgLabels: ["El Camino", "El Reconocimiento", "La Misión", "El Estilo de Vida"],
    },
  };

  return (
    <section id="story" className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/3 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Micro label */}
        <motion.p {...fadeIn} className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-6 text-center">
          {t[lang].micro}
        </motion.p>

        {/* Headline */}
        <motion.div {...fadeIn} className="text-center mb-6">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{t[lang].headline}</span><br />
            <span className="text-gradient-gold italic">{t[lang].headline2}</span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          {...fadeIn}
          className="max-w-3xl mx-auto text-center text-base md:text-2xl font-display italic text-foreground leading-relaxed mb-16 md:mb-20 px-4"
        >
          {t[lang].quote}
          <div className="flex items-center justify-center gap-3 mt-6">
            <img src={mehdiHeadshot} alt="Mehdi Cohen" className="w-12 h-12 rounded-full object-cover object-top border-2 border-accent/40" />
            <span className="font-mono text-xs not-italic uppercase tracking-[0.3em] text-accent font-bold">
              — Mehdi Cohen
            </span>
          </div>
        </motion.blockquote>

        {/* Two column: text left, video right */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          {/* Text side */}
          <motion.div {...fadeIn}>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {t[lang].p1}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-10 font-bold">
              {t[lang].p2}
            </p>

            <motion.a
              href={lang === "es" ? "https://youtu.be/ANey4YDlVrw?si=lKzAIE6AqBxQ4vQ6" : "https://www.youtube.com/watch?v=86KYc3Gl3vw"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8 }}
              className="inline-flex items-center gap-4 group"
            >
              <span className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                <svg className="w-5 h-5 text-accent ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
              </span>
              <span className="font-body font-bold text-base text-foreground uppercase tracking-[0.1em]">
                {t[lang].video}
              </span>
            </motion.a>
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
                src={lang === "es" ? "https://www.youtube.com/embed/ANey4YDlVrw" : "https://www.youtube.com/embed/86KYc3Gl3vw"}
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

        {/* Photo gallery — separate row, full width */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[mehdiPortrait, mehdiAwards, mehdiEnagic, mehdiLifestyle].map((img, i) => (
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
                className="rounded-xl w-full h-64 sm:h-72 md:h-80 object-cover object-top border border-border/50 group-hover:border-accent/30 transition-all duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded font-bold">
                {t[lang].imgLabels[i]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
