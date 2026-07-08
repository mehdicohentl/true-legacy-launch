import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import mehdiPortrait from "@/assets/mehdi-portrait.jpg";
import mehdiAwards from "@/assets/mehdi-awards.jpg";
import mehdiEnagic from "@/assets/mehdi-enagic.jpg";
import mehdiLifestyle from "@/assets/mehdi-lifestyle.jpg";
import mehdiHeadshot from "@/assets/mehdi-headshot.png";
import newMission from "@/assets/media__1783315269977.jpg";
import newRecognition from "@/assets/new-recognition-2.jpg";
import newJourney from "@/assets/new-journey-2.jpg";
import newLifestyle from "@/assets/new-lifestyle-petronas.jpg";

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

  const sets = [
    [
      { img: mehdiEnagic, label: t[lang].imgLabels[0], position: "object-top" },
      { img: mehdiPortrait, label: t[lang].imgLabels[1], position: "object-top" },
      { img: mehdiAwards, label: t[lang].imgLabels[2], position: "object-top" },
      { img: mehdiLifestyle, label: t[lang].imgLabels[3], position: "object-top" },
    ],
    [
      { img: newMission, label: t[lang].imgLabels[0], position: "object-center" },
      { img: newJourney, label: t[lang].imgLabels[1], position: "object-center" },
      { img: newRecognition, label: t[lang].imgLabels[2], position: "object-top" },
      { img: newLifestyle, label: t[lang].imgLabels[3], position: "object-center" },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Preload all carousel images on mount
  useEffect(() => {
    const imagesToPreload = [
      mehdiEnagic,
      mehdiPortrait,
      mehdiAwards,
      mehdiLifestyle,
      newMission,
      newJourney,
      newRecognition,
      newLifestyle,
    ];
    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sets.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + sets.length) % sets.length);
  };

  const handleUserInteraction = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);

    setIsPaused(true);

    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleMouseEnter = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    handleUserInteraction();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      nextSlide();
    } else if (diff < -swipeThreshold) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);

    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 7000);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const currentSet = sets[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
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
          <div 
            className="relative group/gallery"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Minimal left/right arrows for desktop */}
            <button
              onClick={() => {
                handleUserInteraction();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/60 border border-border/50 text-foreground/75 hover:text-accent hover:border-accent/50 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg md:opacity-0 md:group-hover/gallery:opacity-100 hidden md:flex"
              aria-label="Previous slide set"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => {
                handleUserInteraction();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-background/60 border border-border/50 text-foreground/75 hover:text-accent hover:border-accent/50 flex items-center justify-center backdrop-blur-md transition-all duration-300 shadow-lg md:opacity-0 md:group-hover/gallery:opacity-100 hidden md:flex"
              aria-label="Next slide set"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 overflow-hidden">
              {currentSet.map((item, i) => (
                <div key={i} className="group relative w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded-xl border border-border/50 group-hover:border-accent/30 transition-colors duration-500">
                  <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                      key={`${currentIndex}-${i}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "tween", ease: "easeInOut", duration: 0.75 },
                        opacity: { duration: 0.6 }
                      }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <img
                        src={item.img}
                        alt={`Mehdi Cohen True Legacy CEO Kangen water wealth health legacy mehdicohen.com — ${item.label}`}
                        className={`w-full h-full object-cover ${item.position || "object-top"} transition-transform duration-700 group-hover:scale-[1.03]`}
                      />
                      <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 bg-background/70 backdrop-blur-sm px-3 py-1.5 rounded font-bold z-10">
                        {item.label}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Understated pagination dots */}
            <div className="flex justify-center items-center gap-2 mt-8">
              {sets.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    handleUserInteraction();
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "bg-accent w-6 shadow-[0_0_8px_rgba(212,175,55,0.5)]"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                  aria-label={`Go to slide set ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
