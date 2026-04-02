import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import imgK8 from "@/assets/product-k8-real.png";
import emguardeDevice from "@/assets/emguarde-device.png";

interface DuoPackageSectionProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const DuoPackageSection = ({ lang }: DuoPackageSectionProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";
  const emguardeRoute = isLatam ? "/latam/emguarde" : "/global/emguarde";
  const duoRoute = isLatam ? "/latam/latam-duo-package" : "/global/duopackage";

  const t = {
    en: {
      micro: "Limited Availability — Act Now",
      badge: "NEW DUO PACKAGE",
      headline: "K8 + EmGuarde.",
      headline2: "The Power Combo.",
      desc: "The two most powerful Enagic products — the Leveluk K8 Kangen Water machine and the EmGuarde EMF protection device — combined for your health and income revolution.",
      highlights: [
        { label: "Kangen K8", detail: "8-plate ionizer. Medical-grade water. Ships worldwide." },
        { label: "EmGuarde", detail: "Wearable EMF protection. Available USA, Canada, Mexico." },
        { label: "2 Commission Points", detail: "Earn independently on both products in the 8-point system." },
      ],
      ctaDuo: "View Full Duo Package",
      ctaK8: "Order Kangen K8",
      ctaEmguarde: "Get EmGuarde Info",
      ctaWa: "WhatsApp Us",
    },
    es: {
      micro: "Disponibilidad Limitada — Actúa Ahora",
      badge: "NUEVO PAQUETE DUO",
      headline: "K8 + EmGuarde.",
      headline2: "La Combinación Poderosa.",
      desc: "Los dos productos más poderosos de Enagic — la máquina de Agua Kangen Leveluk K8 y el dispositivo de protección EMF EmGuarde — combinados para tu revolución de salud e ingresos.",
      highlights: [
        { label: "Kangen K8", detail: "Ionizador de 8 placas. Agua de grado médico. Envío mundial." },
        { label: "EmGuarde", detail: "Protección EMF wearable. Disponible EE.UU., Canadá, México." },
        { label: "2 Puntos de Comisión", detail: "Gana independientemente por ambos productos en el sistema de 8 puntos." },
      ],
      ctaDuo: "Ver Paquete Duo Completo",
      ctaK8: "Ordenar Kangen K8",
      ctaEmguarde: "Información de EmGuarde",
      ctaWa: "WhatsApp",
    },
  };

  const c = t[lang];

  return (
    <section id="duo-package" className="py-20 md:py-28 bg-card relative overflow-hidden noise-overlay">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-accent/6 rounded-full blur-[160px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-emguarde/5 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/15 border border-accent/30 font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {c.badge}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold mb-4">
            {c.micro}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[1.02]">
            <span className="text-gradient-gold">{c.headline}</span>
            <br />
            <span className="text-foreground">{c.headline2}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-base md:text-lg text-foreground/60 font-bold max-w-2xl mx-auto text-center mb-14"
        >
          {c.desc}
        </motion.p>

        {/* Products side-by-side promo */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-14">
          {/* K8 card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/40 transition-all group"
          >
            <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 flex items-center justify-center min-h-[220px]">
              <img
                src={imgK8}
                alt="Kangen K8 machine duo package mehdicohen.com"
                className="w-40 md:w-52 drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">
                {lang === "en" ? "Step 1 • Flagship Machine" : "Paso 1 • Máquina Insignia"}
              </span>
              <h3 className="font-display font-black text-xl text-foreground mb-2">Leveluk K8</h3>
              <p className="font-body text-sm font-bold text-foreground/60 leading-relaxed mb-5">
                {lang === "en"
                  ? "8-plate platinum titanium ionizer. Medical-grade hydrogen-rich water. Trusted in hospitals for 51+ years. Ships to 190+ countries."
                  : "Ionizador de titanio platinado de 8 placas. Agua rica en hidrógeno de grado médico. Confiado en hospitales durante más de 51 años. Envío a más de 190 países."}
              </p>
              <motion.a
                href={`${enagicBase}&product_id=1016`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {c.ctaK8}
              </motion.a>
            </div>
          </motion.div>

          {/* EmGuarde card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card rounded-2xl overflow-hidden border border-emguarde/20 hover:border-emguarde/40 transition-all group"
          >
            <div className="bg-gradient-to-br from-emguarde/10 to-transparent p-8 flex items-center justify-center min-h-[220px]">
              <img
                src={emguardeDevice}
                alt="EmGuarde EMF device duo package mehdicohen.com"
                className="w-32 md:w-44 drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emguarde font-bold mb-2 block">
                {lang === "en" ? "Step 2 • EMF Protection" : "Paso 2 • Protección EMF"}
              </span>
              <h3 className="font-display font-black text-xl text-foreground mb-2">EmGuarde</h3>
              <p className="font-body text-sm font-bold text-foreground/60 leading-relaxed mb-5">
                {lang === "en"
                  ? "Wearable EMF protection. Available USA, Canada & Mexico. $1,520 USD + ~$160 shipping. 10–14 day delivery from Malaysia."
                  : "Protección EMF wearable. Disponible EE.UU., Canadá y México. $1,520 USD + ~$160 envío. Entrega en 10–14 días desde Malasia."}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.a
                  href={emguardeRoute}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 flex-1 px-5 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
                  style={{ boxShadow: "var(--shadow-emguarde)" }}
                >
                  {c.ctaEmguarde}
                </motion.a>
                <motion.a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.1em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <MessageCircle size={16} />
                  {c.ctaWa}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-4xl mx-auto mb-12"
        >
          {c.highlights.map((h, i) => (
            <div key={i} className="flex-1 glass-card rounded-xl p-5 border border-border/20 text-center">
              <p className="font-display font-black text-sm text-accent mb-1">{h.label}</p>
              <p className="font-body text-xs font-bold text-foreground/60 leading-relaxed">{h.detail}</p>
            </div>
          ))}
        </motion.div>

        {/* View full duo page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.a
            href={duoRoute}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] border-2 border-accent/40 text-accent hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            {c.ctaDuo}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DuoPackageSection;
