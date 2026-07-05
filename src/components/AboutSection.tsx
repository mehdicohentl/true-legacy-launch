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
      micro: "Why this mission exists.",
      headline: "Real leadership begins with a reason",
      headline2: "bigger than yourself",
      quote: "\"When I was 11, my mother brought our family to the United States, searching for a future we couldn't yet see. Watching her sacrifice taught me that real freedom isn't given, it's built.\"",
      p1: "That journey became the foundation of this mission, helping people build healthier lives, stronger leadership, and lasting freedom. Today, we’re building that future together, one leader at a time.",
      p2: "",
      video: "See the mission behind the movement",
      imgLabels: ["The Mission", "The Journey", "Recognition", "Lifestyle"],
      galleryHeading: "What this mission looks like in real life",
      gallerySubhead: "A look at our daily impact, values, and community in action.",
    },
    es: {
      micro: "El Hombre Detrás de la Misión",
      headline: "¿Quién Es Mehdi Cohen?",
      headline2: "La Historia de True Legacy",
      quote: "\"Cuando tenía 11 años, mi madre nos trajo a EE.UU., persiguiendo un futuro mejor. Sin estatus legal, no podía trabajar ni ir a la escuela, así que tuve que luchar solo para sobrevivir. Cada día me esforzaba, vendiendo lo que podía y aprendiendo a la fuerza. Entonces, en 2016, descubrí esta tecnología y vi su poder. Fue cuando tomé la decisión de tratarlo como un negocio, invirtiendo en mi habilidades, construyendo una base profesional. Ahora viajo, crezco y ayudo a otros a construir su propio éxito para que ellos también puedan salir adelante.\"",
      p1: "Ver a mi madre luchar forjó mi determinación—cada 'no' se convirtió en combustible, cada puerta cerrada en un muro que derribé.\n\nMehdi Cohen no es un orador motivacional, es la prueba viviente. De raíces como inmigrante indocumentado a liderar uno de los equipos de más rápido crecimiento en Enagic, su camino desafía la suerte, se trata de la decisión de nunca conformarse. Hoy lidera el equipo True Legacy, un movimiento de personas comunes haciendo cosas extraordinarias: salud, riqueza, propósito, los tres o ninguno.",
      p2: "",
      video: "Mira la misión detrás del movimiento",
      imgLabels: ["La Misión", "El Camino", "El Reconocimiento", "El Estilo de Vida"],
      galleryHeading: "Cómo se ve esta misión en la vida real",
      gallerySubhead: "Un vistazo a nuestro impacto diario, valores y comunidad en acción.",
    },
  };

  const galleryItems = lang === "en"
    ? [
        { img: mehdiEnagic, label: "The Mission" },
        { img: mehdiPortrait, label: "The Journey" },
        { img: mehdiAwards, label: "Recognition" },
        { img: mehdiLifestyle, label: "Lifestyle" },
      ]
    : [
        { img: mehdiEnagic, label: "La Misión" },
        { img: mehdiPortrait, label: "El Camino" },
        { img: mehdiAwards, label: "El Reconocimiento" },
        { img: mehdiLifestyle, label: "El Estilo de Vida" },
      ];

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
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.05]">
            <span className="text-foreground">
              {t[lang].headline}
            </span>
            <br />
            <span className="text-gradient-gold italic">
              {t[lang].headline2}
            </span>
          </h2>
        </motion.div>

        {/* Quote */}
        <motion.blockquote
          {...fadeIn}
          className="max-w-3xl mx-auto text-center text-base md:text-2xl font-display italic text-foreground leading-relaxed mb-16 md:mb-20 px-4"
        >
          {t[lang].quote}
          <div className="flex items-center justify-center gap-3 mt-6">
            <img src={mehdiHeadshot} alt="Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com" className="w-12 h-12 rounded-full object-cover object-top border-2 border-accent/40" />
            <span className="font-mono text-xs not-italic uppercase tracking-[0.3em] text-accent font-bold">
              — Mehdi Cohen
            </span>
          </div>
        </motion.blockquote>

        {/* Story copy (centered stack) */}
        <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-foreground/90 font-body leading-[1.8] whitespace-pre-line font-medium">
            {t[lang].p1}
          </p>
          {t[lang].p2 && (
            <p className="text-base md:text-lg text-foreground/90 font-body leading-[1.8] mt-6 font-medium">
              {t[lang].p2}
            </p>
          )}
        </motion.div>

        {/* Eyebrow & Video block (centered stack) */}
        <div className="flex flex-col items-center mb-28">
          <motion.p 
            {...fadeIn} 
            className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80 font-bold mb-6 text-center"
          >
            {t[lang].video}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative w-full max-w-4xl"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 rounded-2xl blur-xl" />
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
              <iframe
                src={lang === "es" ? "https://www.youtube.com/embed/ANey4YDlVrw" : "https://www.youtube.com/embed/86KYc3Gl3vw"}
                title="Mehdi Cohen Story"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            {/* Corner accent */}
            <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-accent/30 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-accent/30 rounded-bl-lg" />
          </motion.div>
        </div>

        {/* Gallery Section with Generous Spacing */}
        <div className="pt-8">
          <motion.div {...fadeIn} className="text-center mb-12">
            <h3 className="text-2xl md:text-4xl font-display font-black text-foreground mb-4">
              {t[lang].galleryHeading}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-body max-w-xl mx-auto">
              {t[lang].gallerySubhead}
            </p>
          </motion.div>

          {/* Photo gallery grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group relative"
              >
                <img
                  src={item.img}
                  alt={`Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com — ${item.label}`}
                  className="rounded-xl w-full h-64 sm:h-72 md:h-80 object-cover object-top border border-border/50 group-hover:border-accent/30 transition-all duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded font-bold">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
