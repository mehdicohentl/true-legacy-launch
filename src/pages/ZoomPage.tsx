import { motion } from "framer-motion";
import mehdiLogo from "@/assets/mehdi-logo.png";

interface ZoomPageProps {
  lang: "en" | "es";
}

const ZoomPage = ({ lang }: ZoomPageProps) => {
  /* ── Easy-to-update zoom details ── */
  const zoom = {
    en: {
      link: "https://us02web.zoom.us/j/87614486219?pwd=YcmJqE7nyYnShh2jdFVz4kRdFygQpv.1",
      meetingId: "876 1448 6219",
      passcode: "Truelegacy",
      date: "Every Thursday",
      time: "8:00 PM EST / 5:00 PM PST",
    },
    es: {
      link: "https://us02web.zoom.us/j/83000043957?pwd=QtD967lagWROXR8ajaMkmNhhuxM09y.1",
      meetingId: "830 0004 3957",
      passcode: "Truelegacy",
      date: "Cada Jueves",
      time: "8:00 PM (Hora de Bogotá) — 8 PM EST / 5 PM PST",
    },
  };

  const t = {
    en: {
      heading: "You're Registered!",
      sub: "Thank you for signing up. Join us live on Zoom using the details below.",
      joinBtn: "Join Zoom Meeting",
      dateLabel: "When",
      idLabel: "Meeting ID",
      passLabel: "Passcode",
      note: "Bookmark this page — it will always have the latest Zoom link.",
      back: "← Back to Home",
    },
    es: {
      heading: "¡Estás Registrado!",
      sub: "Gracias por inscribirte. Únete a nosotros en vivo por Zoom con los datos a continuación.",
      joinBtn: "Unirse a la Reunión Zoom",
      dateLabel: "Cuándo",
      idLabel: "ID de Reunión",
      passLabel: "Código de Acceso",
      note: "Guarda esta página — siempre tendrá el enlace de Zoom más reciente.",
      back: "← Volver al Inicio",
    },
  };

  const c = t[lang];
  const z = zoom[lang];

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg text-center space-y-8"
      >
        {/* Logo */}
        <img
          src={mehdiLogo}
          alt="Mehdi Cohen Logo"
          className="h-14 mx-auto opacity-90"
        />

        {/* Heading */}
        <div>
          <h1 className="text-3xl md:text-4xl font-display font-black text-gradient-gold leading-tight">
            {c.heading}
          </h1>
          <p className="mt-3 font-body text-base text-foreground/80 font-bold leading-relaxed">
            {c.sub}
          </p>
        </div>

        {/* Zoom details card */}
        <div className="glass-card rounded-2xl p-6 border border-accent/20 text-left space-y-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{c.dateLabel}</p>
            <p className="font-display font-black text-xl text-foreground">{z.date}</p>
            <p className="font-body text-sm text-foreground/70 font-bold">{z.time}</p>
          </div>
          <div className="flex gap-6 font-mono text-xs text-foreground/60">
            <span>{c.idLabel}: {z.meetingId}</span>
            <span>{c.passLabel}: {z.passcode}</span>
          </div>
        </div>

        {/* Join CTA */}
        <motion.a
          href={z.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow w-full sm:w-auto"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {c.joinBtn}
        </motion.a>

        {/* Note */}
        <p className="font-mono text-xs text-foreground/40 italic">{c.note}</p>

        {/* Back link */}
        <a
          href={lang === "en" ? "/global" : "/latam"}
          className="inline-block font-body text-sm text-accent/70 hover:text-accent transition-colors font-bold"
        >
          {c.back}
        </a>
      </motion.div>
    </div>
  );
};

export default ZoomPage;
