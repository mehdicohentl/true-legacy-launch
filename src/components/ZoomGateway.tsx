import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const ZOOM_URLS = {
  en: "https://us02web.zoom.us/j/87614486219?pwd=YcmJqE7nyYnShh2jdFVz4kRdFygQpv.1",
  es: "https://us02web.zoom.us/j/83000043957?pwd=Truelegacy",
};

const t = {
  en: {
    heading: "Join the Live Zoom Call",
    subtitle: "Thursday Live — True Legacy World",
    instruction: "Select below to join the live Zoom call",
    question: "Have you attended before?",
    yes: "Yes — Join Zoom Now",
    no: "No — Register First",
    formHeading: "Register for Access",
    formSubtitle: "First-Time Attendee Registration",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    referral: "Who Referred You?",
    back: "Back",
    submit: "Register and Join the Call",
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
    subtitle: "Jueves en Vivo — True Legacy World",
    instruction: "Selecciona abajo para unirte a la llamada Zoom en vivo",
    question: "¿Has asistido antes?",
    yes: "Sí — Unirme al Zoom",
    no: "No — Registrarme Primero",
    formHeading: "Regístrate para Acceder",
    formSubtitle: "Registro de Primera Vez",
    firstName: "Nombre",
    lastName: "Apellido",
    email: "Correo Electrónico",
    phone: "Número de Teléfono",
    referral: "¿Quién te refirió?",
    back: "Volver",
    submit: "Registrarse y Unirse a la Llamada",
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
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", referral: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleYes = () => {
    window.open(zoomUrl, "_blank", "noopener,noreferrer");
  };

  const handleNo = () => setState("form");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = c.errFirst;
    if (!form.lastName.trim()) e.lastName = c.errLast;
    if (!form.email.trim()) e.email = c.errEmail;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = c.errEmailInvalid;
    if (!form.phone.trim()) e.phone = c.errPhone;
    if (!form.referral.trim()) e.referral = c.errReferral;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    const { error } = await supabase.from("zoom_registrations").insert({
      first_name: form.firstName.trim(),
      last_name: form.lastName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      referral: form.referral.trim() || null,
    });

    if (error) {
      toast({ title: lang === "en" ? "Something went wrong" : "Algo salió mal", description: lang === "en" ? "Please try again." : "Por favor intenta de nuevo.", variant: "destructive" });
      setSubmitting(false);
      return;
    }

    window.open(zoomUrl, "_blank", "noopener,noreferrer");
    setState("success");
    setSubmitting(false);
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
        {/* Subtle pulsing glow */}
        <div className="absolute inset-0 rounded-2xl bg-accent/5 animate-pulse pointer-events-none" />

        <div className="relative z-10">
          <AnimatePresence mode="wait">
            {state === "question" && (
              <motion.div key="question" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="text-center">
                {/* Video icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/15 border border-accent/30 text-accent mb-5">
                  <IconVideo />
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-2">{c.heading}</h2>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-3">{c.subtitle}</p>
                <p className="font-body text-sm md:text-base text-foreground/70 mb-8">{c.instruction}</p>

                <p className="font-body text-base md:text-lg text-foreground/90 font-bold mb-6">{c.question}</p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleYes}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.08em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors"
                  >
                    <IconCheck />
                    {c.yes}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNo}
                    className="flex-1 inline-flex items-center justify-center gap-3 px-6 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.08em] bg-accent text-accent-foreground shadow-gold"
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input type="text" placeholder={c.firstName} value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} className={inputClass} />
                      {errors.firstName && <p className="text-destructive text-xs mt-1 font-body">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input type="text" placeholder={c.lastName} value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className={inputClass} />
                      {errors.lastName && <p className="text-destructive text-xs mt-1 font-body">{errors.lastName}</p>}
                    </div>
                  </div>
                  <div>
                    <input type="email" placeholder={c.email} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    {errors.email && <p className="text-destructive text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                  <div>
                    <input type="tel" placeholder={c.phone} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    {errors.phone && <p className="text-destructive text-xs mt-1 font-body">{errors.phone}</p>}
                  </div>
                  <div>
                    <input type="text" placeholder={c.referral} value={form.referral} onChange={(e) => setForm({ ...form, referral: e.target.value })} className={inputClass} />
                    {errors.referral && <p className="text-destructive text-xs mt-1 font-body">{errors.referral}</p>}
                  </div>
                  <motion.button type="submit" disabled={submitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full inline-flex items-center justify-center gap-3 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold hover:brightness-110 transition-all disabled:opacity-60">
                    <IconSend />
                    {submitting ? c.submitting : c.submit}
                  </motion.button>
                  <button type="button" onClick={() => { setState("question"); setErrors({}); }} className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-body font-bold text-sm text-foreground/60 hover:text-foreground transition-colors">
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
                <motion.a href={zoomUrl} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="inline-flex w-full items-center justify-center gap-3 px-8 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-accent text-accent-foreground shadow-gold">
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
