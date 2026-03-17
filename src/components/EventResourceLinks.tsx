import { motion } from "framer-motion";

interface EventResourceLinksProps {
  lang: "en" | "es";
}

/* ── SVG icon components ── */
const IconCalendar = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconAlertTriangle = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const IconDroplet = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const IconFilter = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </svg>
);
const IconGrid = () => (
  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconPlay = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const IconCamera = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" />
  </svg>
);
const IconMusic = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
  </svg>
);
const IconBriefcase = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
  </svg>
);
const IconMessageCircle = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  </svg>
);
const IconExternalLink = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const EventResourceLinks = ({ lang }: EventResourceLinksProps) => {
  const whatsappUrl = lang === "es" ? "https://wa.me/573001844049" : "https://wa.me/18649072149";
  const linkedinUrl = lang === "en"
    ? "https://www.linkedin.com/in/mehdicohen-tl/"
    : "https://co.linkedin.com/in/mehdi-cohen";

  const resources: { label: string; href: string; icon: React.ReactNode; internal?: boolean }[] = [
    {
      label: lang === "en" ? "Schedule a Free Wellness Consultation" : "Agenda Tu Consulta de Bienestar Gratuita",
      href: "https://calendly.com/aquacharged/true-legacy-one-on-one",
      icon: <IconCalendar />,
    },
    {
      label: lang === "en" ? "Check Your Tap Water (EWG)" : "Revisa Tu Agua del Grifo (EWG)",
      href: "https://www.ewg.org/tapwater/",
      icon: <IconAlertTriangle />,
    },
    {
      label: lang === "en" ? "Watch the Kangen Water Demo" : "Ver Demo de Agua Kangen",
      href: "https://youtu.be/fJdfllJpdAg?si=c87_3pu1CuJkdJKQ",
      icon: <IconDroplet />,
    },
    {
      label: lang === "en" ? "Watch the EmGuarde Demo" : "Ver Demo de EmGuarde",
      href: "https://youtu.be/vPlD1fZEdvE?si=QCrNzTGVsNetRGrS",
      icon: <IconShield />,
    },
    {
      label: lang === "en" ? "Pre-Filters (Multipure)" : "Pre-Filtros (Multipure)",
      href: "https://www.multipure.com/mcardona",
      icon: <IconFilter />,
    },
    {
      label: lang === "en" ? "Pre-Filters (Ionfaucet)" : "Pre-Filtros (Ionfaucet)",
      href: "https://ionfaucet.com/pre-filtration-systems",
      icon: <IconFilter />,
    },
    {
      label: lang === "en" ? "Browse All Resources" : "Ver Todos los Recursos",
      href: lang === "en" ? "/global/resources" : "/latam/resources",
      icon: <IconGrid />,
      internal: true,
    },
  ];

  const socials: { label: string; href: string; icon: React.ReactNode }[] = [
    { label: "YouTube", href: "https://www.youtube.com/@Mehdicohen", icon: <IconPlay /> },
    { label: "Instagram", href: "https://instagram.com/mehdicohen_", icon: <IconCamera /> },
    { label: "TikTok", href: "https://www.tiktok.com/@mehdi_cohen", icon: <IconMusic /> },
    { label: "LinkedIn", href: linkedinUrl, icon: <IconBriefcase /> },
    { label: "WhatsApp", href: whatsappUrl, icon: <IconMessageCircle /> },
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
              <span className="text-accent/70">{r.icon}</span>
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
              <IconExternalLink />
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
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
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
              {s.icon}
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventResourceLinks;
