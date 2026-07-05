import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import imgK8 from "@/assets/product-k8-real.png";
import imgEmgo from "@/assets/product-emgo.png";

interface DuoPackageSectionProps {
  lang: "en" | "es";
}

const enagicBase =
  "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

const DuoPackageSection = ({ lang }: DuoPackageSectionProps) => {
  const isLatam = lang === "es";
  const whatsapp = isLatam ? "https://wa.me/573001844049" : "https://wa.me/18649072149";

  const t = {
    en: {
      micro: "Limited Availability — Act Now",
      badge: "NEW DUO PACKAGE",
      headline: "K8 + emGuarde GO.",
      headline2: "The Power Combo.",
      desc: "The two most powerful Enagic products — combined for your health and income revolution.",
      step1label: "Step 1 • Flagship Machine",
      step1name: "Leveluk K8",
      step1desc: "8-plate platinum titanium ionizer. Medical-grade hydrogen-rich water. Trusted in hospitals for 52+ years. Ships to 190+ countries.",
      step2label: "Step 2 • EMF Protection",
      step2name: "emGuarde GO (set of 2)",
      step2desc: "Set of 2 portable devices for personal EMF support. Covers 10-foot diameter per device. USB-C charging. Available in USA only.",
      ctaK8: "Order Kangen K8",
      ctaEmguarde: "Order emGuarde GO",
      ctaWa: "WhatsApp Us",
      commissionNote: "2 commission points — earn independently on both products in the 8-point system.",
    },
    es: {
      micro: "Disponibilidad Limitada — Actúa Ahora",
      badge: "NUEVO PAQUETE DUO",
      headline: "K8 + emGuarde GO.",
      headline2: "La Combinación Poderosa.",
      desc: "Los dos productos más poderosos de Enagic — combinados para tu revolución de salud e ingresos.",
      step1label: "Paso 1 • Máquina Insignia",
      step1name: "Leveluk K8",
      step1desc: "Ionizador de titanio platinado de 8 placas. Agua rica en hidrógeno de grado médico. Confiado en hospitales durante más de 52 años. Envío a más de 190 países.",
      step2label: "Paso 2 • Protección EMF",
      step2name: "emGuarde GO (set de 2)",
      step2desc: "Juego de 2 dispositivos portátiles para protección EMF personal. Cobertura de 10 pies de diámetro por dispositivo. Carga USB-C. Disponible solo en EE.UU.",
      ctaK8: "Ordenar Kangen K8",
      ctaEmguarde: "Ordenar emGuarde GO",
      ctaWa: "WhatsApp",
      commissionNote: "2 puntos de comisión — gana independientemente por ambos productos en el sistema de 8 puntos.",
    },
  };

  const c = t[lang];

  return (
    <section id="duo-package" className="py-20 md:py-28 relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">

        {/* Badge + headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-5"
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
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold mb-3">
            {c.micro}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-[1.02]">
            <span className="text-gradient-gold">{c.headline}</span>
            <br />
            <span className="text-foreground">{c.headline2}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-base md:text-lg text-foreground/60 font-bold max-w-xl mx-auto text-center mb-4"
        >
          {c.desc}
        </motion.p>

        {/* Commission note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.2em] text-accent/80 font-bold max-w-xl mx-auto text-center mb-12"
        >
          {c.commissionNote}
        </motion.p>

        {/* Main grid: products + video */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-8">

          {/* K8 card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl overflow-hidden border border-accent/20 hover:border-accent/40 transition-all group flex flex-col"
          >
            <div className="bg-gradient-to-br from-accent/10 to-transparent p-8 flex items-center justify-center h-52">
              <img
                src={imgK8}
                alt="Kangen K8 machine duo package mehdicohen.com"
                className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2 block">
                {c.step1label}
              </span>
              <h3 className="font-display font-black text-xl text-foreground mb-2">{c.step1name}</h3>
              <p className="font-body text-sm font-bold text-foreground/60 leading-relaxed mb-5 flex-1">
                {c.step1desc}
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

          {/* emGuarde GO card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="glass-card rounded-2xl overflow-hidden border border-emguarde/20 hover:border-emguarde/40 transition-all group flex flex-col"
          >
            <div className="bg-gradient-to-br from-emguarde/10 to-transparent p-8 flex items-center justify-center h-52">
              <img
                src={imgEmgo}
                alt="emGuarde GO EMF device duo package mehdicohen.com"
                className="h-full w-auto object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-emguarde font-bold mb-2 block">
                {c.step2label}
              </span>
              <h3 className="font-display font-black text-xl text-foreground mb-2">{c.step2name}</h3>
              <p className="font-body text-sm font-bold text-foreground/60 leading-relaxed mb-5 flex-1">
                {c.step2desc}
              </p>
              <motion.a
                href={`${enagicBase}&product_id=9026`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-emguarde text-emguarde-foreground"
                style={{ boxShadow: "var(--shadow-emguarde)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {c.ctaEmguarde}
              </motion.a>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default DuoPackageSection;
