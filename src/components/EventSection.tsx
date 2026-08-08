import { useState } from "react";
import { motion } from "framer-motion";
import ZoomGateway from "@/components/ZoomGateway";


interface EventSectionProps {
  lang: "en" | "es";
}

const EventSection = ({ lang }: EventSectionProps) => {
  const [activeEvent, setActiveEvent] = useState<"weekly" | "monthly">("weekly");

  const t = {
    en: {
      micro: "Upcoming Live Event",
      headline: "Unlock Your True Legacy",
      headline2: "Live Zoom Presentation",
      desc: "Unlock $5K–$10K monthly potential across 29 countries with 44 locations — all tied to the global opportunity. This live Zoom presentation reveals the biohacking products and team-based model behind those results. No experience needed. No pressure. Just a real look at what's possible.",
      topics: [
        "Biohacking technology the marketplace is craving",
        "How real people are earning $5K–$10K per month",
        "Escape the 9 to 5 rat race",
        "A global vision to expand and build beyond borders",
      ],
      dateLabel: "Zoom Date",
      date: "Wednesday",
      time: "8:30 PM EST / 5:30 PM PST",
      meetingId: "885 7773 4807",
      passcode: "Truelegacy",
      hosts: "Hosted by True Legacy Team Leaders",
      bottomCta: "Your legacy doesn't wait. Join us and take charge. Reserve your seat now.",
      image: "/event-flyer-global-wednesday-weekly.png",
      imageAlt: "True Legacy World weekly Wednesday presentation featuring Kangen K8 and EmGuarde Go",
      ctaKangen: "Order Kangen K8",
      ctaEmguarde: "Get EmGuarde Protection",
      ctaJoin: "Join True Legacy Team",
      ctaDuo: "View Duo Package",
      duoLink: "/global/duopackage",
    },
    es: {
      micro: "Evento en Vivo",
      headline: "La Revolución del Biohacking Llega a LATAM",
      headline2: "Presentación en Vivo por Zoom",
      desc: "Descubre cómo los biohackers en LATAM están transformando su ingreso a nivel global. Presente en 29 países con 44 oficinas a nivel global — todo vinculado a la oportunidad global con tecnología de punta como Kangen K8 y EmGuarde. No se necesita experiencia. Sin presión. Solo un vistazo real a lo que es posible.",
      topics: [
        "La tecnología de biohacking que está llegando a LATAM",
        "Cómo personas comunes generan ingresos de $5K–$10K USD al mes",
        "La salida real del 9 a 5",
        "Cómo expandir un negocio global desde casa",
      ],
      dateLabel: "Fecha del Zoom",
      date: "Martes",
      time: "7:00 PM (Hora Colombia) — 8:00 PM EST / 5:00 PM PST",
      meetingId: "848 5224 4046",
      passcode: "Truelegacy",
      hosts: "Presentado por Líderes del Equipo True Legacy",
      bottomCta: "Tu legado no espera. Únete y toma el control. Reserva tu lugar ahora.",
      image: "/event-flyer-latam-weekly.jpg",
      imageAlt: "La Revolución del Biohacking LATAM Kangen K8 EmGuarde Mehdi Cohen Magaly Cardona",
      ctaKangen: "Obtener Máquina Kangen (EE. UU., Australia, Dubai, etc.)",
      ctaEmguarde: "Obtener EmGuarde",
      ctaJoin: "Únete al Equipo True Legacy",
      ctaDuo: "Ver Paquete Duo",
      duoLink: "/latam/latam-duo-package",
    },
  };

  const c = t[lang];

  const esWeeklyDesc = "Descubre cómo los biohackers en LATAM están transformando su ingreso a nivel global. Una introducción rápida al modelo de negocio de True Legacy, la oportunidad global con tecnología de punta como Kangen K8 y EmGuarde. Sin presión, solo un vistazo real a lo que es posible.";
  const esMonthlyDesc = "Un análisis profundo de la estrategia global para emprendedores serios. Conoce a detalle la visión de expansión de True Legacy en LATAM, el plan de compensación, la estructura de liderazgo y cómo construir un legado financiero sólido.";

  const esWeeklyTopics = [
    "La tecnología de biohacking que está revolucionando el mercado",
    "Introducción rápida al modelo de negocio y comisiones",
    "Cómo personas sin experiencia previa están teniendo éxito",
    "Primeros pasos para iniciar tu negocio global desde casa"
  ];
  const esMonthlyTopics = [
    "Análisis detallado de la estrategia de expansión en LATAM",
    "Plan de compensación y estructura de regalías a largo plazo",
    "Liderazgo, mentalidad empresarial y desarrollo de equipos",
    "Cómo construir un negocio rentable y heredable"
  ];

  const enWeeklyDesc = "Unlock $5K–$10K monthly potential across 29 countries with 44 locations — all tied to the global opportunity. A quick intro to the smarter business model revealing the biohacking products and team-based model. No experience needed. No pressure.";
  const enMonthlyDesc = "A deep-dive session for serious entrepreneurs building global income. Learn the advanced scaling strategies, long-term compensation structure, and leadership blueprint to build, automate, and multiply your income globally.";

  const enWeeklyTopics = [
    "Biohacking technology the marketplace is craving",
    "How real people are earning $5K–$10K per month",
    "Escape the 9 to 5 rat race",
    "A global vision to expand and build beyond borders"
  ];
  const enMonthlyTopics = [
    "Advanced strategies to build, automate, and multiply income",
    "Deep-dive into the global compensation plan",
    "Leadership mastery and team building",
    "Unlocking real, global income across borders"
  ];

  const currentDesc = lang === "es" 
    ? (activeEvent === "weekly" ? esWeeklyDesc : esMonthlyDesc)
    : (activeEvent === "weekly" ? enWeeklyDesc : enMonthlyDesc);

  const currentTopics = lang === "es"
    ? (activeEvent === "weekly" ? esWeeklyTopics : esMonthlyTopics)
    : (activeEvent === "weekly" ? enWeeklyTopics : enMonthlyTopics);

  const currentImage = lang === "es"
    ? (activeEvent === "weekly" ? "/event-flyer-latam-weekly.jpg" : "/event-flyer-latam-monthly.png")
    : (activeEvent === "weekly" ? "/event-flyer-global-wednesday-weekly.png" : "/event-flyer-global-monthly.jpg");

  const currentImageAlt = lang === "es"
    ? (activeEvent === "weekly" ? "Presentación Semanal LATAM - Transforma tu Ingreso Global" : "Masterclass Mensual LATAM - La Revolución del Biohacking")
    : (activeEvent === "weekly" ? "Weekly Wednesday Presentation - Kangen K8 and EmGuarde Go" : "Monthly Masterclass - Unlock The Global Blueprint");

  return (
    <section id="event" className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
      {/* Ambient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/3 via-transparent to-primary/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[200px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Micro label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-4 text-center"
        >
          {c.micro}
        </motion.p>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.05]">
            <span className="text-gradient-gold">{c.headline}</span>
          </h2>
          <p className="text-lg md:text-2xl font-display font-bold text-foreground mt-3">{c.headline2}</p>
        </motion.div>

        {/* Hosts */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-xs uppercase tracking-[0.2em] text-accent mb-10"
        >
          {c.hosts}
        </motion.p>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-14">
          {/* Event image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={currentImage}
              alt={currentImageAlt}
              className="w-full max-w-md rounded-2xl shadow-deep border border-border/20"
            />
          </motion.div>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-base md:text-lg text-foreground font-bold leading-[1.9]">
              {currentDesc}
            </p>

            {/* Topics */}
            <div className="space-y-3">
              <p className="font-display font-black text-accent text-sm uppercase tracking-[0.15em]">
                {lang === "en" ? "Topics Covered" : "Temas a Tratar"}
              </p>
              {currentTopics.map((topic, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-body text-sm md:text-base text-foreground font-bold">{topic}</p>
                </div>
              ))}
            </div>

            {/* Date & time cards */}
            <div className="space-y-4">
              <p className="font-display font-black text-accent text-sm uppercase tracking-[0.15em] mb-2">
                {lang === "en" ? "Upcoming Events" : "Próximos Eventos"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: Weekly Presentation */}
                <div 
                  onClick={() => setActiveEvent("weekly")}
                  className={`glass-card rounded-xl p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    activeEvent === "weekly" 
                      ? "border-accent bg-accent/10 shadow-gold scale-[1.02]" 
                      : "border-accent/20 hover:border-accent/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${
                        activeEvent === "weekly" ? "bg-accent text-accent-foreground" : "bg-accent/20 text-accent"
                      }`}>
                        {lang === "en" ? "Weekly" : "Semanal"}
                      </span>
                      {activeEvent === "weekly" && (
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
                    <h4 className="font-display font-black text-lg text-foreground">
                      {lang === "en" ? "Weekly Presentation" : "Presentación Semanal"}
                    </h4>
                    <p className="font-mono text-xs text-accent mt-1">
                      {lang === "en" ? "Every Wednesday, 8:30 PM Eastern (5:30 PM Pacific)" : "Cada Martes, 7 PM Colombia"}
                    </p>
                    <p className="font-body text-xs md:text-sm text-foreground/80 font-bold mt-3 leading-relaxed">
                      {lang === "en" 
                        ? "A quick intro to the smarter business model." 
                        : "Una introducción rápida al modelo de negocio."}
                    </p>
                  </div>
                  <div className="border-t border-accent/10 mt-4 pt-3 font-mono text-[11px] text-foreground/60 space-y-1">
                    <div>ID: {c.meetingId}</div>
                    <div>{lang === "en" ? "Passcode" : "Contraseña"}: {c.passcode}</div>
                  </div>
                </div>

                {/* Card 2: Monthly Masterclass */}
                <div 
                  onClick={() => setActiveEvent("monthly")}
                  className={`glass-card rounded-xl p-5 border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    activeEvent === "monthly" 
                      ? "border-accent bg-accent/10 shadow-gold scale-[1.02]" 
                      : "border-accent/20 hover:border-accent/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase ${
                        activeEvent === "monthly" ? "bg-accent text-accent-foreground" : "bg-accent/20 text-accent"
                      }`}>
                        {lang === "en" ? "Monthly" : "Mensual"}
                      </span>
                      {activeEvent === "monthly" && (
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
                    <h4 className="font-display font-black text-lg text-foreground">
                      {lang === "en" ? "Monthly Masterclass" : "Masterclass Mensual"}
                    </h4>
                    <p className="font-mono text-xs text-accent mt-1">
                      {lang === "en" ? "Last Thursday, 8 PM Eastern (5 PM PST)" : "Último Martes del Mes, 7 PM Colombia"}
                    </p>
                    <p className="font-body text-xs md:text-sm text-foreground/80 font-bold mt-3 leading-relaxed">
                      {lang === "en"
                        ? "A deep-dive session for serious entrepreneurs building global income."
                        : "Un análisis profundo de la estrategia global para emprendedores serios."}
                    </p>
                  </div>
                  <div className="border-t border-accent/10 mt-4 pt-3 font-mono text-[11px] text-foreground/60 space-y-1">
                    <div>ID: {c.meetingId}</div>
                    <div>{lang === "en" ? "Passcode" : "Contraseña"}: {c.passcode}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Inline Zoom Gateway — Secure Your Spot */}
        <div className="max-w-3xl mx-auto mt-8">
          <ZoomGateway lang={lang} />
        </div>


        {/* Duo Package CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
        >
          <motion.a
            href={c.duoLink}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {c.ctaDuo}
          </motion.a>
          <motion.a
            href={lang === "en" ? "/global/emguarde" : "/latam/emguarde"}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] border-2 border-emguarde text-emguarde hover:bg-emguarde/10 transition-colors"
          >
            {c.ctaEmguarde}
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default EventSection;
