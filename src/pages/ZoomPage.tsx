import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import zoomLogo from "@/assets/zoom-logo.png";

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
      time: "8:00 PM EST / 5:00 PM PST"
    },
    es: {
      link: "https://us06web.zoom.us/j/84852244046?pwd=Ci7k3oLkcaBa5odDvrw6O9fokzXbK8.1",
      meetingId: "848 5224 4046",
      passcode: "Truelegacy",
      date: "Cada Martes",
      time: "7:00 PM (Hora Colombia) — 8:00 PM EST / 5:00 PM PST"
    }
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
      back: "← Back to Home"
    },
    es: {
      heading: "¡Estás Registrado!",
      sub: "Gracias por inscribirte. Únete a nosotros en vivo por Zoom con los datos a continuación.",
      joinBtn: "Unirse a la Reunión Zoom",
      dateLabel: "Cuándo",
      idLabel: "ID de Reunión",
      passLabel: "Código de Acceso",
      note: "Guarda esta página — siempre tendrá el enlace de Zoom más reciente.",
      back: "← Volver al Inicio"
    }
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
        className="relative z-10 w-full max-w-lg text-center space-y-8">

        {/* Logo */}
        <img
          src={combinedLogo}
          alt="True Legacy"
          className="h-16 md:h-20 mx-auto opacity-90" />


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

        {/* Join CTA with Zoom branding */}
        <div className="space-y-4">
          
          <motion.a
            href={z.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.12em] bg-[hsl(213,100%,50%)] text-white shadow-lg w-full sm:w-auto">

            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.585 6.836h8.98c1.246 0 2.254 1.009 2.254 2.254v4.57c0 .476-.146.917-.396 1.283l3.098-2.141c.346-.239.794-.037.794.358v3.68c0 .395-.448.597-.794.358l-3.098-2.141c.25.366.396.807.396 1.283v.24c0 1.246-1.008 2.254-2.254 2.254H4.585c-1.245 0-2.254-1.008-2.254-2.254V9.09c0-1.245 1.009-2.254 2.254-2.254z" />
            </svg>
            {c.joinBtn}
          </motion.a>
        </div>

        {/* Note */}
        <p className="font-mono text-xs text-foreground/40 italic">{c.note}</p>

        {/* Back link */}
        <Link
          to={lang === "en" ? "/global" : "/latam"}
          className="inline-block font-body text-sm text-accent/70 hover:text-accent transition-colors font-bold">
          {c.back}
        </Link>
      </motion.div>
    </div>);

};

export default ZoomPage;