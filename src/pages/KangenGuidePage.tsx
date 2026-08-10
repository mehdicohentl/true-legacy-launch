import { FormEvent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, Download, Droplets, FileText, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PhoneNumberField from "@/components/PhoneNumberField";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import { setPageMeta } from "@/lib/seo";
import { deliverLeadEmail } from "@/lib/crmEmail";
import kangenMachine from "@/assets/kangen-water-machine.png";

interface KangenGuidePageProps {
  lang: "en" | "es";
}

const KangenGuidePage = ({ lang }: KangenGuidePageProps) => {
  const [submitting, setSubmitting] = useState(false);
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const isSpanish = lang === "es";

  const t = isSpanish
    ? {
        metaTitle: "Guía Gratuita de Agua Kangen | True Legacy",
        metaDescription: "Conoce el sistema Kangen K8 y descarga la guía educativa de Agua Kangen de True Legacy.",
        eyebrow: "Guía gratuita de 21 páginas",
        title: "Descubre el Agua Kangen,",
        titleAccent: "de principio a fin.",
        intro: "Una introducción clara al K8, los diferentes tipos de agua que produce y cómo comenzar con Enagic.",
        bullets: ["Cómo funciona la ionización", "Los niveles de agua y sus usos", "Qué esperar al comenzar", "Guía paso a paso para adquirir tu equipo"],
        preview: "Lo que aprenderás",
        videoEyebrow: "Mira la presentación",
        videoTitle: "Conoce la historia completa del Agua Kangen",
        videoText: "Descubre visualmente cómo funciona el sistema y por qué tantas familias están cambiando la manera en que utilizan el agua.",
        sections: [
          ["01", "El sistema K8", "Conoce el ionizador insignia de 8 placas de Enagic y el proceso de electrólisis que separa el agua en diferentes niveles de pH."],
          ["02", "Más que agua potable", "Aprende cómo se utilizan los distintos niveles de Agua Kangen, desde la hidratación diaria hasta usos comunes en el hogar."],
          ["03", "Tu próximo paso", "Revisa el proceso de compra, las opciones generales de pago, la instalación y los recursos disponibles después de recibir tu equipo."],
        ],
        formTitle: "Recibe tu guía gratuita",
        formText: "Completa tus datos y tendrás acceso inmediato al e-book en español.",
        first: "Nombre",
        last: "Apellido",
        email: "Correo electrónico",
        phone: "Teléfono / WhatsApp",
        country: "País",
        social: "Usuario de Instagram o Facebook",
        consent: "Acepto recibir la guía y comunicaciones de seguimiento de True Legacy. Puedo cancelar en cualquier momento.",
        submit: "Desbloquear mi guía gratuita",
        submitting: "Preparando tu guía...",
        successTitle: "Tu guía está lista",
        successText: "Gracias por registrarte. Descarga ahora tu e-book de Agua Kangen.",
        download: "Descargar guía en español",
        privacy: "Tu información se utiliza únicamente para entregarte la guía y dar seguimiento a tu solicitud.",
        formError: "No pudimos completar tu registro. Revisa tus datos e inténtalo nuevamente.",
      }
    : {
        metaTitle: "Free Kangen Water Guide | True Legacy",
        metaDescription: "Explore the Kangen K8 system and download True Legacy's educational Kangen Water guide.",
        eyebrow: "Free 21-page guide",
        title: "Understand Kangen Water,",
        titleAccent: "from start to finish.",
        intro: "A clear introduction to the K8, the different water types it produces, and how to get started with Enagic.",
        bullets: ["How water ionization works", "Water levels and everyday uses", "What to expect when getting started", "A step-by-step path to your machine"],
        preview: "What you will learn",
        videoEyebrow: "Watch the presentation",
        videoTitle: "See the complete Kangen Water story",
        videoText: "Take a closer look at how the system works and why families are changing the way they use water every day.",
        sections: [
          ["01", "The K8 system", "Meet Enagic's flagship 8-plate ionizer and understand the electrolysis process that separates water into different pH levels."],
          ["02", "Beyond drinking water", "See how the different Kangen Water levels are used, from daily hydration to practical applications throughout the home."],
          ["03", "Your next step", "Review the ordering journey, general payment paths, installation, and the resources available after your machine arrives."],
        ],
        formTitle: "Get your free guide",
        formText: "Share your details and receive immediate access to the English e-book.",
        first: "First name",
        last: "Last name",
        email: "Email address",
        phone: "Phone / WhatsApp",
        country: "Country",
        social: "Instagram or Facebook handle",
        consent: "I agree to receive the guide and follow-up communications from True Legacy. I can unsubscribe at any time.",
        submit: "Unlock my free guide",
        submitting: "Preparing your guide...",
        successTitle: "Your guide is ready",
        successText: "Thank you for registering. Download your Kangen Water e-book now.",
        download: "Download the English guide",
        privacy: "Your information is used only to deliver the guide and follow up on your request.",
        formError: "We could not complete your registration. Please review your details and try again.",
      };

  useEffect(() => {
    setPageMeta(t.metaTitle, t.metaDescription);
  }, [t.metaDescription, t.metaTitle]);

  const guideUrl = isSpanish
    ? "/guides/true-legacy-kangen-water-guide-es.pdf"
    : "/guides/true-legacy-kangen-water-guide-en.pdf";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    const data = new FormData(event.currentTarget);

    if (data.get("website")) {
      setComplete(true);
      setSubmitting(false);
      return;
    }

    const leadEmail = String(data.get("email") || "").trim().toLowerCase();
    const { error: insertError } = await kangenSupabase.from("kangen_pdf_leads").insert({
      first_name: String(data.get("firstName") || "").trim(),
      last_name: String(data.get("lastName") || "").trim(),
      email: leadEmail,
      phone: `${String(data.get("phoneCountryCode") || "").trim()} ${String(data.get("phone") || "").trim()}`.trim(),
      country: String(data.get("country") || "").trim(),
      social_handle: String(data.get("socialHandle") || "").trim(),
      language: lang,
      consent: data.get("consent") === "on",
    });

    if (insertError) {
      setError(t.formError);
    } else {
      await deliverLeadEmail("kangen", leadEmail);
      setComplete(true);
    }
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} />
      <main>
        <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-primary/[0.03]" />
          <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 lg:grid-cols-[1.05fr_.95fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent">{t.eyebrow}</p>
              <h1 className="max-w-3xl text-4xl font-black leading-[1.02] md:text-6xl xl:text-7xl">
                {t.title} <span className="text-gradient-gold">{t.titleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">{t.intro}</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {t.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm font-semibold text-foreground/85">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
              <a href="#get-guide" className="cta-shimmer mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 font-black uppercase tracking-[0.1em] text-primary-foreground shadow-glow transition hover:brightness-110">
                <Download className="h-5 w-5" /> {t.submit}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} className="relative mx-auto w-full max-w-lg">
              <div className="absolute inset-10 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative rounded-3xl border border-accent/20 bg-card/60 p-8 shadow-deep backdrop-blur-sm">
                <div className="absolute right-5 top-5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-accent">PDF • 21 pages</div>
                <img src={kangenMachine} alt="Enagic Leveluk K8 water ionizer" className="mx-auto mt-5 w-full max-w-[390px] drop-shadow-2xl" />
                <div className="mt-2 flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider text-foreground/70">
                  <FileText className="h-5 w-5 text-accent" /> True Legacy Kangen Water E-Book
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-card/25 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto mb-20 max-w-5xl text-center">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent">{t.videoEyebrow}</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">{t.videoTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-foreground/60">{t.videoText}</p>
              <div className="mt-9 overflow-hidden rounded-2xl border border-accent/20 bg-black shadow-deep">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${isSpanish ? "Gi0ufLMcH6E" : "fJdfllJpdAg"}?rel=0`}
                    title={t.videoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <p className="text-center font-mono text-xs font-bold uppercase tracking-[0.3em] text-accent">{t.preview}</p>
            <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
              {t.sections.map(([number, title, text], index) => {
                const icons = [Droplets, Sparkles, ShieldCheck];
                const Icon = icons[index];
                return (
                  <article key={number} className="rounded-2xl border border-border/70 bg-background/70 p-7 shadow-deep">
                    <div className="flex items-center justify-between">
                      <Icon className="h-7 w-7 text-accent" />
                      <span className="font-mono text-xs text-muted-foreground">{number}</span>
                    </div>
                    <h2 className="mt-6 text-2xl font-bold">{title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">{text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="get-guide" className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl rounded-3xl border border-accent/20 bg-card/70 p-6 shadow-glow backdrop-blur-sm md:p-10">
              {!complete ? (
                <>
                  <div className="text-center">
                    <Download className="mx-auto h-10 w-10 text-accent" />
                    <h2 className="mt-4 text-3xl font-black md:text-4xl">{t.formTitle}</h2>
                    <p className="mx-auto mt-3 max-w-lg text-foreground/60">{t.formText}</p>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
                    <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                    {[
                      ["firstName", t.first, "text", "given-name"],
                      ["lastName", t.last, "text", "family-name"],
                    ].map(([name, label, type, autoComplete]) => (
                      <label key={name} className="grid gap-2 text-sm font-semibold text-foreground/80">
                        {label}
                        <input required name={name} type={type} autoComplete={autoComplete} className="h-12 rounded-xl border border-border bg-background/80 px-4 font-normal outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15" />
                      </label>
                    ))}
                    <label className="grid gap-2 text-sm font-semibold text-foreground/80 sm:col-span-2">
                      {t.email}
                      <input required name="email" type="email" autoComplete="email" className="h-12 rounded-xl border border-border bg-background/80 px-4 font-normal outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15" />
                    </label>
                    <PhoneNumberField label={t.phone} lang={lang} />
                    <label className="grid gap-2 text-sm font-semibold text-foreground/80 sm:col-span-2">
                      {t.country}
                      <input required name="country" autoComplete="country-name" className="h-12 rounded-xl border border-border bg-background/80 px-4 font-normal outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15" />
                    </label>
                    <label className="grid gap-2 text-sm font-semibold text-foreground/80 sm:col-span-2">
                      {t.social}
                      <input required name="socialHandle" autoComplete="off" placeholder="@yourhandle" className="h-12 rounded-xl border border-border bg-background/80 px-4 font-normal outline-none transition focus:border-accent/60 focus:ring-2 focus:ring-accent/15" />
                    </label>
                    <label className="flex items-start gap-3 text-xs leading-relaxed text-foreground/60 sm:col-span-2">
                      <input required name="consent" type="checkbox" className="mt-1 h-4 w-4 accent-cyan-400" />
                      <span>{t.consent}</span>
                    </label>
                    {error && <p role="alert" className="text-sm text-destructive sm:col-span-2">{error}</p>}
                    <button disabled={submitting} className="cta-shimmer inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-7 font-black uppercase tracking-[0.1em] text-primary-foreground shadow-glow transition hover:brightness-110 disabled:opacity-60 sm:col-span-2">
                      <Download className="h-5 w-5" /> {submitting ? t.submitting : t.submit}
                    </button>
                    <p className="text-center font-mono text-[10px] leading-relaxed text-muted-foreground sm:col-span-2">{t.privacy}</p>
                  </form>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="py-8 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent"><Check className="h-8 w-8" /></div>
                  <h2 className="mt-6 text-3xl font-black md:text-4xl">{t.successTitle}</h2>
                  <p className="mx-auto mt-3 max-w-md text-foreground/65">{t.successText}</p>
                  <a href={guideUrl} download className="cta-shimmer mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-8 font-black uppercase tracking-[0.1em] text-primary-foreground shadow-glow">
                    <Download className="h-5 w-5" /> {t.download}
                  </a>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default KangenGuidePage;
