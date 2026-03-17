import { motion } from "framer-motion";

interface EventResourceLinksProps {
  lang: "en" | "es";
}

const EventResourceLinks = ({ lang }: EventResourceLinksProps) => {
  const whatsappUrl = lang === "es" ? "https://wa.me/573001844049" : "https://wa.me/18649072149";
  const linkedinUrl = lang === "en"
    ? "https://www.linkedin.com/in/mehdicohen-tl/"
    : "https://co.linkedin.com/in/mehdi-cohen";

  const resources = [
    {
      label: lang === "en" ? "Schedule a Free Wellness Consultation" : "Agenda Tu Consulta de Bienestar Gratuita",
      href: "https://calendly.com/aquacharged/true-legacy-one-on-one",
      icon: "📞",
    },
    {
      label: lang === "en" ? "Check Your Tap Water (EWG)" : "Revisa Tu Agua del Grifo (EWG)",
      href: "https://www.ewg.org/tapwater/",
      icon: "⚠️",
    },
    {
      label: lang === "en" ? "Watch the Kangen Water Demo" : "Ver Demo de Agua Kangen",
      href: "https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ",
      icon: "💧",
    },
    {
      label: lang === "en" ? "Watch the EmGuarde Demo" : "Ver Demo de EmGuarde",
      href: "https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS",
      icon: "🛡️",
    },
    {
      label: lang === "en" ? "Pre-Filters (Multipure)" : "Pre-Filtros (Multipure)",
      href: "https://www.multipure.com/mcardona",
      icon: "🔧",
    },
    {
      label: lang === "en" ? "Pre-Filters (Ionfaucet)" : "Pre-Filtros (Ionfaucet)",
      href: "https://ionfaucet.com/pre-filtration-systems",
      icon: "🔧",
    },
    {
      label: lang === "en" ? "Browse All Resources" : "Ver Todos los Recursos",
      href: lang === "en" ? "/global/resources" : "/latam/resources",
      icon: "📋",
      internal: true,
    },
  ];

  const socials = [
    { label: "YouTube", href: "https://www.youtube.com/@Mehdicohen", icon: "▶️" },
    { label: "Instagram", href: "https://instagram.com/mehdicohen_", icon: "📸" },
    { label: "TikTok", href: "https://www.tiktok.com/@mehdi_cohen", icon: "🎵" },
    { label: "LinkedIn", href: linkedinUrl, icon: "💼" },
    { label: "WhatsApp", href: whatsappUrl, icon: "💬" },
  ];

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-accent/3 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-2">
            {lang === "en" ? "Resources & Links" : "Recursos y Enlaces"}
          </p>
          <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">
            {lang === "en" ? "Everything You Need" : "Todo Lo Que Necesitas"}
          </h3>
        </motion.div>

        <div className="space-y-3 mb-12">
          {resources.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              target={r.internal ? undefined : "_blank"}
              rel={r.internal ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-4 w-full rounded-xl bg-card/50 border border-border/20 hover:border-accent/30 hover:bg-card/80 transition-all duration-200 px-5 py-4"
            >
              <span className="text-lg flex-shrink-0">{r.icon}</span>
              <span className="font-body font-bold text-sm text-foreground">{r.label}</span>
              <svg className="w-4 h-4 text-foreground/40 ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Join True Legacy CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-accent/30 bg-accent/5 p-8 md:p-10 text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-3">
            {lang === "en" ? "Opportunity" : "Oportunidad"}
          </p>
          <h3 className="text-xl md:text-2xl font-display font-black text-foreground mb-3">
            {lang === "en"
              ? "Get Paid to Sell World-Changing Products"
              : "Gana Dinero Vendiendo Productos Que Cambian el Mundo"}
          </h3>
          <p className="font-body text-sm md:text-base text-foreground/80 font-bold mb-6 max-w-lg mx-auto leading-relaxed">
            {lang === "en"
              ? "Join the True Legacy team and build a global wellness business with purpose. Earn income while helping people transform their health with cutting-edge biohacking technology."
              : "Únete al equipo True Legacy y construye un negocio global de bienestar con propósito. Genera ingresos mientras ayudas a las personas a transformar su salud con tecnología de biohacking."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="https://truelegacyworld.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold hover:brightness-110 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.7 0 3-4 3-9s-1.3-9-3-9m0 18c-1.7 0-3-4-3-9s1.3-9 3-9" /></svg>
              {lang === "en" ? "Visit TrueLegacyWorld.com" : "Visita TrueLegacyWorld.com"}
            </motion.a>
            <motion.a
              href={lang === "en" ? "https://form.jotform.com/260564894519066" : "https://form.jotform.com/260246489849069"}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {lang === "en" ? "Join the Team" : "Únete al Equipo"}
            </motion.a>
          </div>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-body font-bold text-xs uppercase tracking-[0.08em] border border-border/20 text-foreground/70 hover:text-accent hover:border-accent/30 transition-colors"
            >
              <span>{s.icon}</span>
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventResourceLinks;
