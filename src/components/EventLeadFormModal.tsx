import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EventLeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventType: "GLOBAL" | "LATAM";
  lang: "en" | "es";
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const EventLeadFormModal = ({ isOpen, onClose, eventType, lang }: EventLeadFormModalProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [heardFrom, setHeardFrom] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isLatam = eventType === "LATAM";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      "form-name": "event-leads",
      fullName,
      email,
      phone: `${countryCode} ${phone}`.trim(),
      eventInterest: isLatam ? "LATAM Event" : "GLOBAL Event",
      heardFrom,
      "bot-field": "",
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(lang === "en" ? "Something went wrong. Please try again." : "Algo salió mal. Por favor intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const t = {
    en: {
      title: "Reserve Your Seat",
      subtitle: isLatam ? "LATAM Event Registration" : "Global Event Registration",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone",
      countryCode: "Country Code",
      eventLabel: "Which event are you interested in?",
      heardFrom: "How did you hear about us?",
      optionGlobal: "Global Event",
      optionLatam: "LATAM Event",
      optionInstagram: "Instagram",
      optionFacebook: "Facebook",
      optionReferral: "Referral",
      optionOther: "Other",
      submit: "Submit Registration",
      submitting: "Submitting...",
      thankYouTitle: "You're In.",
      thankYouBody: "Thank you for reserving your seat. Check your email for next steps. Our team may contact you directly to confirm details.",
      close: "Close",
    },
    es: {
      title: "Reserva Tu Lugar",
      subtitle: isLatam ? "Registro Evento LATAM" : "Registro Evento Global",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      countryCode: "Código de País",
      eventLabel: "¿En qué evento estás interesado?",
      heardFrom: "¿Cómo nos conociste?",
      optionGlobal: "Evento Global",
      optionLatam: "Evento LATAM",
      optionInstagram: "Instagram",
      optionFacebook: "Facebook",
      optionReferral: "Referencia",
      optionOther: "Otro",
      submit: "Enviar Registro",
      submitting: "Enviando...",
      thankYouTitle: "Ya Estás Dentro.",
      thankYouBody: "Gracias por reservar tu lugar. Revisa tu correo para los siguientes pasos. Nuestro equipo puede contactarte para confirmar detalles.",
      close: "Cerrar",
    },
  }[lang];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-lg rounded-2xl bg-background border border-accent/30 shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-foreground/50 hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="px-6 pt-6 pb-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent/80 mb-2">
                {isLatam ? "LATAM · LIVE EVENT" : "GLOBAL · LIVE EVENT"}
              </p>
              <h2 className="font-display font-black text-2xl md:text-3xl text-foreground mb-1">
                {t.title}
              </h2>
              <p className="font-body text-xs md:text-sm text-foreground/70 font-bold mb-4">
                {t.subtitle}
              </p>
            </div>

            {!submitted ? (
              <form
                name="event-leads"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="px-6 pb-6 space-y-4"
              >
                <input type="hidden" name="form-name" value="event-leads" />
                <input name="bot-field" type="hidden" />
                <input type="hidden" name="eventInterest" value={isLatam ? "LATAM Event" : "GLOBAL Event"} />

                <div className="grid grid-cols-3 gap-3">
                  <div className="col-span-2">
                    <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                      {t.fullName} *
                    </label>
                    <input
                      required
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                      {t.countryCode} *
                    </label>
                    <select
                      required
                      name="countryCode"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full rounded-xl bg-background/60 border border-border/30 px-3 py-3 text-sm font-body text-foreground focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                    >
                      <option value="+1">+1 USA / CAN</option>
                      <option value="+57">+57 Colombia</option>
                      <option value="+52">+52 México</option>
                      <option value="+34">+34 España</option>
                      <option value="+44">+44 UK</option>
                      <option value="+61">+61 Australia</option>
                      <option value="+971">+971 UAE</option>
                      <option value="+55">+55 Brazil</option>
                      <option value="+51">+51 Perú</option>
                      <option value="+56">+56 Chile</option>
                      <option value="+593">+593 Ecuador</option>
                      <option value="+54">+54 Argentina</option>
                      <option value="+39">+39 Italy</option>
                      <option value="+33">+33 France</option>
                      <option value="+49">+49 Germany</option>
                      <option value="+81">+81 Japan</option>
                      <option value="+65">+65 Singapore</option>
                      <option value="+62">+62 Indonesia</option>
                      <option value="+63">+63 Philippines</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                    {t.email} *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                    {t.phone} *
                  </label>
                  <input
                    required
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3 text-sm font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                    {t.eventLabel} *
                  </label>
                  <select
                    required
                    name="eventInterest"
                    defaultValue={isLatam ? "LATAM Event" : "GLOBAL Event"}
                    className="w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                  >
                    <option value="GLOBAL Event">{t.optionGlobal}</option>
                    <option value="LATAM Event">{t.optionLatam}</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/70">
                    {t.heardFrom} *
                  </label>
                  <select
                    required
                    name="heardFrom"
                    value={heardFrom}
                    onChange={(e) => setHeardFrom(e.target.value)}
                    className="w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3 text-sm font-body text-foreground focus:outline-none focus:border-accent/70 focus:ring-1 focus:ring-accent/40"
                  >
                    <option value="">{lang === "en" ? "Select an option" : "Selecciona una opción"}</option>
                    <option value="Instagram">{t.optionInstagram}</option>
                    <option value="Facebook">{t.optionFacebook}</option>
                    <option value="Referral">{t.optionReferral}</option>
                    <option value="Other">{t.optionOther}</option>
                  </select>
                </div>

                {error && (
                  <p className="text-destructive text-xs font-body">{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={submitting}
                  whileHover={{ scale: submitting ? 1 : 1.02, y: submitting ? 0 : -2 }}
                  whileTap={{ scale: submitting ? 1 : 0.97 }}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold disabled:opacity-60"
                >
                  {submitting && (
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z" />
                    </svg>
                  )}
                  {submitting ? t.submitting : t.submit}
                </motion.button>
              </form>
            ) : (
              <div className="px-6 pb-6 pt-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/15 border border-accent/40 flex items-center justify-center text-accent">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-display font-black text-xl md:text-2xl text-foreground mb-2 text-center">
                  {t.thankYouTitle}
                </h3>
                <p className="font-body text-sm text-foreground/80 font-bold mb-5 text-center leading-relaxed">
                  {t.thankYouBody}
                </p>
                <button
                  onClick={onClose}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] border border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                >
                  {t.close}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventLeadFormModal;

