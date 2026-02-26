import { motion } from "framer-motion";
import eventGlobal from "@/assets/event-global.png";
import eventLatam from "@/assets/event-latam.png";

interface EventSectionProps {
  lang: "en" | "es";
}

const EventSection = ({ lang }: EventSectionProps) => {
  const t = {
    en: {
      micro: "Upcoming Live Event",
      headline: "Unlock Your True Legacy",
      headline2: "Live Zoom Presentation",
      desc: "Mehdi Cohen & Zah Naderi — True Legacy Team Leaders — are hosting a live Duo Presentation on the Kangen K8 & EmGuarde. Discover how biohacking technology and a global wellness team can help you earn $5K+ monthly with purpose.",
      topics: [
        "Biohacking technology the marketplace is craving",
        "How to build $5K to $10K per month with purpose",
        "A global vision to expand and build beyond borders",
      ],
      dateLabel: "Zoom Date",
      date: "Every Thursday",
      time: "8:00 PM EST / 5:00 PM PST",
      ctaMain: "Register for the Zoom Event",
      zoomLink: "https://form.jotform.com/260565024605048",
      meetingId: "876 1448 6219",
      passcode: "Truelegacy",
      hosts: "Hosted by Mehdi Cohen & Zah Naderi",
      bottomCta: "Your legacy doesn't wait. Join us and take charge. Reserve your seat now.",
      image: eventGlobal,
      imageAlt: "Mehdi Cohen and Zah Naderi True Legacy team leaders Kangen water wealth health legacy mehdicohen.com",
      ctaKangen: "Get Your Kangen Machine",
      ctaEmguarde: "Get EmGuarde Protection",
      ctaJoin: "Join True Legacy Team",
    },
    es: {
      micro: "Evento en Vivo",
      headline: "Desbloquea Tu Legado Verdadero",
      headline2: "Presentación en Vivo por Zoom",
      desc: "Mehdi Cohen te invita a un evento exclusivo: Transforma tu Futuro en LATAM. Sumérgete en una revolución con propósito — donde tus ingresos, salud y libertad se alinean.",
      topics: [
        "Tecnología de biohacking que el mercado desea",
        "Cómo generar $5K a $10K USD al mes con propósito",
        "Una visión global para expandir y crecer más allá de las fronteras",
      ],
      dateLabel: "Fecha del Zoom",
      date: "24 de Febrero, 2026",
      time: "8:00 PM (Hora de Bogotá) — 8 PM EST / 5 PM PST",
      ctaMain: "Regístrate para el Evento Zoom",
      zoomLink: "https://form.jotform.com/260565024605048",
      meetingId: "830 0004 3957",
      passcode: "Truelegacy",
      hosts: "Presentado por Mehdi Cohen",
      bottomCta: "Tu legado no espera. Únete y toma el control. Reserva tu lugar ahora.",
      image: eventLatam,
      imageAlt: "Mehdi Cohen True Legacy CEO LATAM Kangen water biohacking evento en vivo mehdicohen.com",
      ctaKangen: "Obtener Máquina Kangen (EE. UU., Australia, Dubai, etc.)",
      ctaEmguarde: "Obtener EmGuarde",
      ctaJoin: "Únete al Equipo True Legacy",
    },
  };

  const c = t[lang];

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
              src={c.image}
              alt={c.imageAlt}
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
              {c.desc}
            </p>

            {/* Topics */}
            <div className="space-y-3">
              <p className="font-display font-black text-accent text-sm uppercase tracking-[0.15em]">
                {lang === "en" ? "Topics Covered" : "Temas a Tratar"}
              </p>
              {c.topics.map((topic, i) => (
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

            {/* Date & time */}
            <div className="glass-card rounded-xl p-5 border border-accent/20">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-2">{c.dateLabel}</p>
              <p className="font-display font-black text-2xl md:text-3xl text-foreground">{c.date}</p>
              <p className="font-body text-sm text-foreground/80 font-bold mt-1">{c.time}</p>
              <div className="flex gap-6 mt-3 font-mono text-xs text-foreground/60">
                <span>ID: {c.meetingId}</span>
                <span>Pass: {c.passcode}</span>
              </div>
            </div>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                href={c.zoomLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {c.ctaMain}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display font-bold italic text-lg text-foreground mb-10 max-w-2xl mx-auto"
        >
          {c.bottomCta}
        </motion.p>

        {/* Secondary CTAs — smaller, not overpowering */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href={lang === "en"
              ? "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016"
              : "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-body font-bold text-xs uppercase tracking-[0.1em] border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
            {c.ctaKangen}
          </a>
          <a
            href={lang === "en" ? "/global/emguarde" : "/latam/emguarde"}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-body font-bold text-xs uppercase tracking-[0.1em] border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            {c.ctaEmguarde}
          </a>
          <a
            href={lang === "en" ? "https://form.jotform.com/260564894519066" : "https://form.jotform.com/260246489849069"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-body font-bold text-xs uppercase tracking-[0.1em] border border-foreground/15 text-foreground hover:border-accent/30 hover:bg-accent/5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {c.ctaJoin}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EventSection;
