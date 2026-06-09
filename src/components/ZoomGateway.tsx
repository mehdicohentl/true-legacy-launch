import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ZOOM_URLS = {
  en: "https://us02web.zoom.us/j/87614486219?pwd=YcmJqE7nyYnShh2jdFVz4kRdFygQpv.1",
  es: "https://us06web.zoom.us/j/84852244046?pwd=Ci7k3oLkcaBa5odDvrw6O9fokzXbK8.1",
};

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

const t = {
  en: {
    heading: "Join the Live Zoom Call",
    subtitle: "Thursday Live — True Legacy World",
    instruction: "Select below to join the live Zoom call",
    question: "Have you attended before?",
    yes: "YES — JOIN NOW",
    no: "NO — REGISTER",
    formHeading: "Register for Access",
    formSubtitle: "First-Time Attendee Registration",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    countryCode: "Country Code",
    eventLabel: "Which event are you interested in?",
    heardFrom: "How did you hear about us?",
    optionGlobal: "Global Event",
    optionLatam: "LATAM Event",
    optionInstagram: "Instagram",
    optionFacebook: "Facebook",
    optionReferral: "Referral",
    optionOther: "Other",
    back: "Back",
    submit: "Register & Join Call",
    submitting: "Registering...",
    successHeading: "Welcome to True Legacy World",
    successText: "You are registered. Your Zoom link has opened in a new tab. Check your email for your access link.",
    joinBtn: "Join the Zoom Call Now",
    errFirst: "First name is required",
    errLast: "Last name is required",
    errEmail: "Email is required",
    errEmailInvalid: "Invalid email address",
    errPhone: "Phone number is required",
    errReferral: "This field is required",
  },
  es: {
    heading: "Únete a la Llamada Zoom en Vivo",
    subtitle: "Martes en Vivo — True Legacy LATAM",
    instruction: "Selecciona abajo para unirte a la llamada Zoom en vivo",
    question: "¿Has asistido antes?",
    yes: "SÍ — UNIRME AHORA",
    no: "NO — REGISTRARME",
    formHeading: "Regístrate para Acceder",
    formSubtitle: "Registro de Primera Vez",
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
    back: "Volver",
    submit: "Registrarse y Unirse",
    submitting: "Registrando...",
    successHeading: "Bienvenido a True Legacy World",
    successText: "Estás registrado. Tu enlace de Zoom se ha abierto en una nueva pestaña. Revisa tu correo para tu enlace de acceso.",
    joinBtn: "Unirse a la Llamada Zoom Ahora",
    errFirst: "El nombre es obligatorio",
    errLast: "El apellido es obligatorio",
    errEmail: "El correo es obligatorio",
    errEmailInvalid: "Correo electrónico inválido",
    errPhone: "El teléfono es obligatorio",
    errReferral: "Este campo es obligatorio",
  },
};

interface ZoomGatewayProps {
  lang: "en" | "es";
}

type GatewayState = "question" | "form" | "success";

const IconVideo = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const IconUser = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const IconArrowLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m7-7l-7 7 7 7" />
  </svg>
);

const IconSend = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const ZoomGateway = ({ lang }: ZoomGatewayProps) => {
  const c = t[lang];
  const zoomUrl = ZOOM_URLS[lang];
  const [state, setState] = useState<GatewayState>("question");
  const [submitting, setSubmitting] = useState(false);
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [heardFrom, setHeardFrom] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const isLatam = lang === "es";

  const handleYes = () => {
    window.open(zoomUrl, "_blank", "noopener,noreferrer");
  };

  const handleNo = () => setState("form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

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
      window.open(zoomUrl, "_blank", "noopener,noreferrer");
      setState("success");
    } catch (err) {
      console.error(err);
      setErrorMsg(lang === "en" ? "Something went wrong. Please try again." : "Algo salió mal. Por favor intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "w-full rounded-xl bg-background/60 border border-border/30 px-4 py-3.5 text-foreground placeholder:text-foreground/40 font-body text-sm focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <div id="zoom-gateway" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto rounded-2xl border-2 border-accent/40 bg-accent/5 p-6 md:p-10 shadow-gold relative overflow-hidden"
      >
        <div className="absolute inset-0 rounded-2xl bg-accent/5 animate-pulse pointer-events-none" />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {state === "question" && (
              <motion.div key="question" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/15 border border-accent/30 text-accent mb-5">
                  <IconVideo />
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-2">{c.heading}</h2>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-3">{c.subtitle}</p>
                <p className="font-body text-sm md:text-base text-foreground/70 mb-8">{c.instruction}</p>

                <p className="font-body text-base md:text-lg text-foreground/90 font-bold mb-6">{c.question}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full max-w-lg mx-auto">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleYes}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.08em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                  >
                    <IconCheck />
                    {c.yes}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNo}
                    className="w-full sm:w-1/2 flex items-center justify-center gap-2 px-4 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.08em] bg-accent text-accent-foreground shadow-gold"
                  >
                    <IconUser />
                    {c.no}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {state === "form" && (
              <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <h2 className="text-2xl md:text-4xl font-display font-black text-foreground mb-2 text-center">{c.formHeading}</h2>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-8 text-center">{c.formSubtitle}</p>
                <form name="event-leads" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                  <input type="hidden" name="form-name" value="event-leads" />
                  <input name="bot-field" type="hidden" />
                  <input type="hidden" name="eventInterest" value={isLatam ? "LATAM Event" : "GLOBAL Event"} />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <input required type="text" placeholder={c.fullName} name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
                    </div>
                    <div>
                      <select required name="countryCode" value={countryCode} onChange={(e) => setCountryCode(e.target.value)} className={inputClass}>
                        <option value="+1">+1 USA</option>
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
                      </select>
                    </div>
                  </div>
                  <div>
                    <input required type="email" placeholder={c.email} name="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <input required type="tel" placeholder={c.phone} name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                  </div>
                  <div>
                    <select required name="heardFrom" value={heardFrom} onChange={(e) => setHeardFrom(e.target.value)} className={inputClass}>
                      <option value="">{c.heardFrom}</option>
                      <option value="Instagram">{c.optionInstagram}</option>
                      <option value="Facebook">{c.optionFacebook}</option>
                      <option value="Referral">{c.optionReferral}</option>
                      <option value="Other">{c.optionOther}</option>
                    </select>
                  </div>
                  
                  {errorMsg && <p className="text-destructive text-xs font-body text-center">{errorMsg}</p>}

                  <motion.button type="submit" disabled={submitting} whileHover={{ scale: submitting ? 1 : 1.02 }} whileTap={{ scale: submitting ? 1 : 0.98 }} className="w-full inline-flex items-center justify-center gap-3 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold hover:brightness-110 transition-all disabled:opacity-60">
                    {submitting ? (
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3.5-3.5L12 0v4a8 8 0 00-8 8h4z" />
                      </svg>
                    ) : (
                      <IconSend />
                    )}
                    {submitting ? c.submitting : c.submit}
                  </motion.button>
                  <button type="button" onClick={() => { setState("question"); }} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-body font-bold text-sm text-foreground/60 hover:text-foreground transition-colors">
                    <IconArrowLeft />
                    {c.back}
                  </button>
                </form>
              </motion.div>
            )}

            {state === "success" && (
              <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/15 border border-accent/30 text-accent mb-5">
                  <IconCheck />
                </div>
                <h2 className="text-2xl md:text-4xl font-display font-black text-foreground mb-3">{c.successHeading}</h2>
                <p className="font-body text-base text-foreground/80 mb-8">{c.successText}</p>
                <motion.a href={zoomUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex w-full max-w-sm items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold">
                  <IconVideo />
                  {c.joinBtn}
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ZoomGateway;