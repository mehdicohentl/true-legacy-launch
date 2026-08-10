import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarCheck, Check, Send, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COUNTRY_CODES } from "@/components/PhoneNumberField";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import { setPageMeta } from "@/lib/seo";
import { deliverLeadEmail } from "@/lib/crmEmail";

interface TeamApplicationPageProps {
  lang: "en" | "es";
}

interface Answers {
  entrepreneurialFit: "" | "yes" | "no";
  commitmentLevel: "" | "committed" | "exploring";
  fullName: string;
  countryCode: string;
  phone: string;
  email: string;
  country: string;
  occupation: string;
  socialHandle: string;
  businessExperience: string;
  growthInvestment: "" | "invested" | "open" | "willing";
  incomeGoal: string;
  motivation: string;
  investmentLevel: "" | "2000" | "6000" | "8000";
  startTimeline: "" | "immediately" | "week" | "month" | "unsure";
  callCommitment: "" | "yes" | "no";
  additionalMessage: string;
}

const initialAnswers = (lang: "en" | "es"): Answers => ({
  entrepreneurialFit: "",
  commitmentLevel: "",
  fullName: "",
  countryCode: lang === "es" ? "+57" : "+1",
  phone: "",
  email: "",
  country: "",
  occupation: "",
  socialHandle: "",
  businessExperience: "",
  growthInvestment: "",
  incomeGoal: "",
  motivation: "",
  investmentLevel: "",
  startTimeline: "",
  callCommitment: "",
  additionalMessage: "",
});

const TeamApplicationPage = ({ lang }: TeamApplicationPageProps) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(lang));
  const [submitting, setSubmitting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const isSpanish = lang === "es";

  const t = isSpanish
    ? {
        metaTitle: "Únete al Equipo True Legacy LATAM",
        metaDescription: "Solicita unirte a True Legacy LATAM y agenda una llamada estratégica con nuestro equipo.",
        eyebrow: "Solicitud de liderazgo",
        title: "Construye tu futuro con",
        accent: "True Legacy.",
        intro: "Buscamos líderes con mentalidad emprendedora que quieran construir algo con propósito, libertad y alcance global.",
        stepNames: ["Alineación", "Tus datos", "Visión y metas"],
        alignmentTitle: "Primero, conozcamos tu nivel de alineación",
        fitQuestion: "¿Quieres construir algo con propósito y generar ingresos pasivos?",
        commitmentQuestion: "¿Qué tan comprometido estás con aprender un sistema probado?",
        contactTitle: "Cuéntanos quién eres",
        goalsTitle: "Ahora conozcamos tu visión",
        fullName: "Nombre completo",
        phone: "Número de teléfono / WhatsApp",
        email: "Correo electrónico",
        country: "País",
        occupation: "Ocupación actual",
        social: "Usuario de Instagram o Facebook",
        business: "¿Estás involucrado en redes de mercadeo, ventas u otro negocio? Cuéntanos brevemente.",
        growth: "¿Has invertido en tu crecimiento personal o empresarial?",
        income: "Meta de ingresos mensuales para los próximos 6–12 meses",
        motivation: "¿Qué te motiva a querer más en tu vida o negocio ahora?",
        investment: "¿Qué nivel estarías dispuesto a invertir si el sistema se alinea contigo?",
        timeline: "¿Qué tan pronto te gustaría comenzar?",
        call: "¿Puedes comprometerte a presentarte al 100% a una llamada estratégica gratuita?",
        additional: "¿Hay algo más que quieras que sepamos?",
        yes: "Sí",
        no: "No",
        committed: "Estoy 100% comprometido",
        exploring: "Estoy explorando, pero aún no estoy listo al 100%",
        invested: "Sí — mentorías, cursos o coaching",
        open: "Todavía no, pero estoy abierto",
        willing: "No, pero invertiría cuando comprenda el valor",
        immediate: "De inmediato",
        week: "Dentro de una semana",
        month: "Dentro de un mes",
        unsure: "Aún no estoy seguro",
        previous: "Anterior",
        next: "Continuar",
        submit: "Enviar mi solicitud",
        submitting: "Enviando solicitud...",
        required: "Completa todos los campos requeridos para continuar.",
        formError: "No pudimos enviar tu solicitud. Inténtalo nuevamente.",
        successTitle: "¡Solicitud recibida!",
        successText: "Tu información ya está con el equipo de True Legacy LATAM. El siguiente paso es reservar tu llamada estratégica.",
        book: "Reservar mi llamada estratégica",
        bookingUrl: "https://calendly.com/truelegacylatamenagic/45min",
      }
    : {
        metaTitle: "Join the True Legacy Team",
        metaDescription: "Apply to join True Legacy and book a complimentary strategy call with our team.",
        eyebrow: "Leadership application",
        title: "Build your future with",
        accent: "True Legacy.",
        intro: "We’re looking for entrepreneurial-minded leaders who want to build something meaningful, create freedom, and make a global impact.",
        stepNames: ["Alignment", "Your details", "Vision & goals"],
        alignmentTitle: "First, let’s understand your alignment",
        fitQuestion: "Do you want to build something meaningful and generate passive income?",
        commitmentQuestion: "How committed are you to learning a proven global system?",
        contactTitle: "Tell us who you are",
        goalsTitle: "Now let’s understand your vision",
        fullName: "Full name",
        phone: "Phone / WhatsApp number",
        email: "Email address",
        country: "Country",
        occupation: "Current occupation",
        social: "Instagram or Facebook handle",
        business: "Are you involved in network marketing, sales, or another business? Tell us briefly.",
        growth: "Have you invested in your personal or business growth before?",
        income: "Target monthly income for the next 6–12 months",
        motivation: "What drives you to want more in life or business right now?",
        investment: "What level would you invest if the system aligns with you?",
        timeline: "How soon would you like to get started?",
        call: "Can you commit to showing up 100% for a complimentary strategy call?",
        additional: "Is there anything else you would like us to know?",
        yes: "Yes",
        no: "No",
        committed: "I’m fully committed",
        exploring: "I’m exploring, but not fully ready yet",
        invested: "Yes — mentorships, courses, or coaching",
        open: "Not yet, but I’m open",
        willing: "No, but I would invest once I understand the value",
        immediate: "Immediately",
        week: "Within a week",
        month: "Within a month",
        unsure: "Not sure yet",
        previous: "Previous",
        next: "Continue",
        submit: "Submit my application",
        submitting: "Submitting application...",
        required: "Please complete every required field before continuing.",
        formError: "We could not submit your application. Please try again.",
        successTitle: "Application received!",
        successText: "Your information is now with the True Legacy team. Your next step is to reserve your complimentary strategy call.",
        book: "Book my strategy call",
        bookingUrl: "https://calendly.com/aquacharged/true-legacy-one-on-one",
      };

  useEffect(() => setPageMeta(t.metaTitle, t.metaDescription), [t.metaDescription, t.metaTitle]);

  const update = <K extends keyof Answers>(key: K, value: Answers[K]) => setAnswers((current) => ({ ...current, [key]: value }));
  const inputClass = "h-12 w-full rounded-xl border border-border bg-background/80 px-4 text-sm outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15";
  const textareaClass = "min-h-28 w-full resize-y rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15";

  const isStepValid = () => {
    if (step === 1) return Boolean(answers.entrepreneurialFit && answers.commitmentLevel);
    if (step === 2) return Boolean(answers.fullName.trim() && answers.phone.trim() && answers.email.trim() && answers.country.trim() && answers.occupation.trim() && answers.socialHandle.trim());
    return Boolean(answers.businessExperience.trim() && answers.growthInvestment && answers.incomeGoal.trim() && answers.motivation.trim() && answers.investmentLevel && answers.startTimeline && answers.callCommitment);
  };

  const nextStep = () => {
    if (!isStepValid()) {
      setError(t.required);
      return;
    }
    setError("");
    setStep((current) => Math.min(3, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!isStepValid()) {
      setError(t.required);
      return;
    }
    setSubmitting(true);
    setError("");
    const { error: insertError } = await kangenSupabase.from("team_applications").insert({
      entrepreneurial_fit: answers.entrepreneurialFit,
      commitment_level: answers.commitmentLevel,
      full_name: answers.fullName.trim(),
      phone: `${answers.countryCode} ${answers.phone.trim()}`,
      email: answers.email.trim().toLowerCase(),
      country: answers.country.trim(),
      occupation: answers.occupation.trim(),
      social_handle: answers.socialHandle.trim(),
      business_experience: answers.businessExperience.trim(),
      growth_investment: answers.growthInvestment,
      income_goal: answers.incomeGoal.trim(),
      motivation: answers.motivation.trim(),
      investment_level: answers.investmentLevel,
      start_timeline: answers.startTimeline,
      strategy_call_commitment: answers.callCommitment === "yes",
      additional_message: answers.additionalMessage.trim() || null,
      language: lang,
    });
    if (insertError) setError(t.formError);
    else {
      await deliverLeadEmail("team", answers.email);
      setComplete(true);
    }
    setSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Choice = ({ value, selected, onClick, children }: { value: string; selected: boolean; onClick: (value: string) => void; children: React.ReactNode }) => (
    <button type="button" onClick={() => onClick(value)} className={`min-h-14 rounded-xl border px-4 py-3 text-left text-sm font-bold transition ${selected ? "border-accent bg-accent/12 text-accent shadow-glow" : "border-border bg-background/60 text-foreground/75 hover:border-accent/35"}`}>
      <span className="flex items-center gap-3"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${selected ? "border-accent bg-accent text-accent-foreground" : "border-foreground/25"}`}>{selected && <Check className="h-3 w-3" />}</span>{children}</span>
    </button>
  );

  if (complete) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar lang={lang} />
        <main className="flex min-h-[85vh] items-center px-4 pb-16 pt-32">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mx-auto w-full max-w-2xl rounded-3xl border border-accent/25 bg-card/70 p-8 text-center shadow-glow md:p-12">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/12 text-accent"><Check className="h-10 w-10" /></div>
            <h1 className="mt-7 text-4xl font-black md:text-5xl">{t.successTitle}</h1>
            <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-foreground/65">{t.successText}</p>
            <a href={t.bookingUrl} target="_blank" rel="noopener noreferrer" className="cta-shimmer mt-9 inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-xl bg-primary px-7 font-black uppercase tracking-[0.1em] text-primary-foreground shadow-glow sm:w-auto">
              <CalendarCheck className="h-6 w-6" /> {t.book}
            </a>
          </motion.div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <main className="relative overflow-hidden px-4 pb-24 pt-28 md:pt-36">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-emguarde/[0.05]" />
        <div className="relative mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent">{t.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black md:text-6xl">{t.title} <span className="text-gradient-gold">{t.accent}</span></h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/65">{t.intro}</p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl">
            <div className="grid grid-cols-3 gap-2">
              {t.stepNames.map((name, index) => {
                const number = index + 1;
                return <div key={name} className="text-center"><div className={`mx-auto flex h-9 w-9 items-center justify-center rounded-full border font-mono text-xs font-bold ${step >= number ? "border-accent bg-accent/12 text-accent" : "border-border text-muted-foreground"}`}>{step > number ? <Check className="h-4 w-4" /> : number}</div><p className={`mt-2 text-[10px] font-bold uppercase tracking-wider ${step >= number ? "text-foreground/75" : "text-muted-foreground"}`}>{name}</p></div>;
              })}
            </div>
            <div className="mt-4 h-1 overflow-hidden rounded-full bg-border"><div className="h-full bg-accent transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }} /></div>
          </div>

          <form onSubmit={submit} className="mx-auto mt-8 max-w-3xl rounded-3xl border border-accent/20 bg-card/75 p-6 shadow-deep backdrop-blur-sm md:p-10">
            {step === 1 && <motion.section initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}><Users className="h-8 w-8 text-accent" /><h2 className="mt-4 text-2xl font-black md:text-3xl">{t.alignmentTitle}</h2><div className="mt-8 grid gap-7"><fieldset><legend className="mb-3 font-bold">{t.fitQuestion}</legend><div className="grid gap-3 sm:grid-cols-2"><Choice value="yes" selected={answers.entrepreneurialFit === "yes"} onClick={(value) => update("entrepreneurialFit", value as Answers["entrepreneurialFit"])}>{t.yes}</Choice><Choice value="no" selected={answers.entrepreneurialFit === "no"} onClick={(value) => update("entrepreneurialFit", value as Answers["entrepreneurialFit"])}>{t.no}</Choice></div></fieldset><fieldset><legend className="mb-3 font-bold">{t.commitmentQuestion}</legend><div className="grid gap-3"><Choice value="committed" selected={answers.commitmentLevel === "committed"} onClick={(value) => update("commitmentLevel", value as Answers["commitmentLevel"])}>{t.committed}</Choice><Choice value="exploring" selected={answers.commitmentLevel === "exploring"} onClick={(value) => update("commitmentLevel", value as Answers["commitmentLevel"])}>{t.exploring}</Choice></div></fieldset></div></motion.section>}

            {step === 2 && <motion.section initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}><h2 className="text-2xl font-black md:text-3xl">{t.contactTitle}</h2><div className="mt-7 grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold sm:col-span-2">{t.fullName}<input required value={answers.fullName} onChange={(e) => update("fullName", e.target.value)} autoComplete="name" className={inputClass} /></label><label className="grid gap-2 text-sm font-bold">{isSpanish ? "Código de país" : "Country calling code"}<select value={answers.countryCode} onChange={(e) => update("countryCode", e.target.value)} className={inputClass}>{COUNTRY_CODES.map(([value, label]) => <option key={`${value}-${label}`} value={value}>{label}</option>)}</select></label><label className="grid gap-2 text-sm font-bold">{t.phone}<input required value={answers.phone} onChange={(e) => update("phone", e.target.value)} type="tel" inputMode="tel" autoComplete="tel-national" className={inputClass} /></label><label className="grid gap-2 text-sm font-bold">{t.email}<input required value={answers.email} onChange={(e) => update("email", e.target.value)} type="email" autoComplete="email" className={inputClass} /></label><label className="grid gap-2 text-sm font-bold">{t.country}<input required value={answers.country} onChange={(e) => update("country", e.target.value)} autoComplete="country-name" className={inputClass} /></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">{t.occupation}<input required value={answers.occupation} onChange={(e) => update("occupation", e.target.value)} className={inputClass} /></label><label className="grid gap-2 text-sm font-bold sm:col-span-2">{t.social}<input required value={answers.socialHandle} onChange={(e) => update("socialHandle", e.target.value)} placeholder="@yourhandle" className={inputClass} /></label></div></motion.section>}

            {step === 3 && <motion.section initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}><h2 className="text-2xl font-black md:text-3xl">{t.goalsTitle}</h2><div className="mt-7 grid gap-7"><label className="grid gap-2 text-sm font-bold">{t.business}<textarea required value={answers.businessExperience} onChange={(e) => update("businessExperience", e.target.value)} className={textareaClass} /></label><fieldset><legend className="mb-3 font-bold">{t.growth}</legend><div className="grid gap-3"><Choice value="invested" selected={answers.growthInvestment === "invested"} onClick={(value) => update("growthInvestment", value as Answers["growthInvestment"])}>{t.invested}</Choice><Choice value="open" selected={answers.growthInvestment === "open"} onClick={(value) => update("growthInvestment", value as Answers["growthInvestment"])}>{t.open}</Choice><Choice value="willing" selected={answers.growthInvestment === "willing"} onClick={(value) => update("growthInvestment", value as Answers["growthInvestment"])}>{t.willing}</Choice></div></fieldset><label className="grid gap-2 text-sm font-bold">{t.income}<input required value={answers.incomeGoal} onChange={(e) => update("incomeGoal", e.target.value)} placeholder="$10,000 / month" className={inputClass} /></label><label className="grid gap-2 text-sm font-bold">{t.motivation}<textarea required value={answers.motivation} onChange={(e) => update("motivation", e.target.value)} className={textareaClass} /></label><fieldset><legend className="mb-3 font-bold">{t.investment}</legend><div className="grid gap-3 md:grid-cols-3"><Choice value="2000" selected={answers.investmentLevel === "2000"} onClick={(value) => update("investmentLevel", value as Answers["investmentLevel"])}>$2,000 — emGuarde</Choice><Choice value="6000" selected={answers.investmentLevel === "6000"} onClick={(value) => update("investmentLevel", value as Answers["investmentLevel"])}>$6,000 — K8</Choice><Choice value="8000" selected={answers.investmentLevel === "8000"} onClick={(value) => update("investmentLevel", value as Answers["investmentLevel"])}>$8,000 — Duo</Choice></div></fieldset><fieldset><legend className="mb-3 font-bold">{t.timeline}</legend><div className="grid gap-3 sm:grid-cols-2"><Choice value="immediately" selected={answers.startTimeline === "immediately"} onClick={(value) => update("startTimeline", value as Answers["startTimeline"])}>{t.immediate}</Choice><Choice value="week" selected={answers.startTimeline === "week"} onClick={(value) => update("startTimeline", value as Answers["startTimeline"])}>{t.week}</Choice><Choice value="month" selected={answers.startTimeline === "month"} onClick={(value) => update("startTimeline", value as Answers["startTimeline"])}>{t.month}</Choice><Choice value="unsure" selected={answers.startTimeline === "unsure"} onClick={(value) => update("startTimeline", value as Answers["startTimeline"])}>{t.unsure}</Choice></div></fieldset><fieldset><legend className="mb-3 font-bold">{t.call}</legend><div className="grid gap-3 sm:grid-cols-2"><Choice value="yes" selected={answers.callCommitment === "yes"} onClick={(value) => update("callCommitment", value as Answers["callCommitment"])}>{t.yes}</Choice><Choice value="no" selected={answers.callCommitment === "no"} onClick={(value) => update("callCommitment", value as Answers["callCommitment"])}>{t.no}</Choice></div></fieldset><label className="grid gap-2 text-sm font-bold">{t.additional}<textarea value={answers.additionalMessage} onChange={(e) => update("additionalMessage", e.target.value)} className={textareaClass} /></label></div></motion.section>}

            {error && <p role="alert" className="mt-6 rounded-xl border border-destructive/25 bg-destructive/8 p-3 text-center text-sm text-destructive">{error}</p>}
            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              {step > 1 ? <button type="button" onClick={() => { setError(""); setStep((current) => current - 1); }} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border px-5 font-bold text-foreground/65 hover:border-accent/35 hover:text-accent"><ArrowLeft className="h-4 w-4" /> {t.previous}</button> : <span />}
              {step < 3 ? <button type="button" onClick={nextStep} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 font-black uppercase tracking-wider text-primary-foreground shadow-glow">{t.next} <ArrowRight className="h-4 w-4" /></button> : <button type="submit" disabled={submitting} className="cta-shimmer inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 font-black uppercase tracking-wider text-primary-foreground shadow-glow disabled:opacity-60"><Send className="h-4 w-4" /> {submitting ? t.submitting : t.submit}</button>}
            </div>
          </form>
        </div>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default TeamApplicationPage;
