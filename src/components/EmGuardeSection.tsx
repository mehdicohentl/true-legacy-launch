import { motion } from "framer-motion";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {
  const t = {
    en: {
      tag: "New Product Launch",
      headline: "EmGuarde",
      subline: "EMF Protection — Now Available in USA, Canada & Mexico",
      desc: "Embracing the philosophy of \"True Health,\" Enagic introduces EmGuarde — a revolutionary device that reduces the disruptive effects of electromagnetic fields (EMFs) from electronic devices, creating a healthier environment for you and your family.",
      price: "USD $1,520",
      shipping: "Shipping: $160 (DHL/FedEx)",
      note: "Private import from Malaysia. Available November 1, 2024.",
      cta: "Apply to Purchase EmGuarde",
      ctaDesc: "EmGuarde is processed through application since it's a Malaysia product.",
      video: "Watch EmGuarde Review",
      details: [
        "1 Unit per order • Up to 5 units max",
        "One-time credit card payment (Visa/MasterCard)",
        "Delivery: 10-14 working days",
        "1 Year Warranty from invoice date",
      ],
      contact: "Contact: emgsales@enagic-my.com | WhatsApp: +60133096234",
    },
    es: {
      tag: "Nuevo Producto",
      headline: "EmGuarde",
      subline: "Protección EMF — Ahora Disponible en USA, Canadá y México",
      desc: "Con la filosofía de \"Salud Verdadera,\" Enagic presenta EmGuarde — un dispositivo revolucionario que reduce los efectos disruptivos de los campos electromagnéticos (EMFs) de dispositivos electrónicos, creando un ambiente más saludable para ti y tu familia.",
      price: "USD $1,520",
      shipping: "Envío: $160 (DHL/FedEx)",
      note: "Importación privada desde Malasia. Disponible desde el 1 de noviembre de 2024.",
      cta: "Solicitar Compra de EmGuarde",
      ctaDesc: "EmGuarde se procesa a través de una solicitud ya que es un producto de Malasia.",
      video: "Ver Reseña de EmGuarde",
      details: [
        "1 Unidad por orden • Máximo 5 unidades",
        "Pago único con tarjeta de crédito (Visa/MasterCard)",
        "Entrega: 10-14 días hábiles",
        "1 Año de Garantía desde la fecha de factura",
      ],
      contact: "Contacto: emgsales@enagic-my.com | WhatsApp: +60133096234",
    },
  };

  return (
    <section id="emguarde" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-body font-bold text-sm uppercase tracking-[0.25em]">{t[lang].tag}</span>
          <h2 className="text-4xl md:text-6xl font-display font-black mt-3 text-gradient-primary">{t[lang].headline}</h2>
          <p className="text-xl text-muted-foreground font-body mt-4 max-w-2xl mx-auto">{t[lang].subline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">{t[lang].desc}</p>

            <div className="bg-secondary rounded-xl p-6 border border-border mb-8">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-3xl font-display font-black text-accent">{t[lang].price}</span>
                <span className="text-sm text-muted-foreground font-body">{t[lang].shipping}</span>
              </div>
              <p className="text-sm text-muted-foreground font-body">{t[lang].note}</p>
            </div>

            <div className="space-y-3 mb-8">
              {t[lang].details.map((d, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-body text-secondary-foreground">{d}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground font-body mb-6">{t[lang].ctaDesc}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:emgsales@enagic-my.com?subject=EmGuarde%20Purchase%20Application&body=I%20would%20like%20to%20apply%20to%20purchase%20EmGuarde.%20My%20Enagic%20ID%20is%20(if%20applicable):"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-body font-bold text-base uppercase tracking-widest bg-primary text-primary-foreground shadow-glow"
              >
                {t[lang].cta}
              </motion.a>

              <motion.a
                href="https://www.youtube.com/watch?v=rNLBZ1NEtDI"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-body font-bold text-sm uppercase tracking-widest border border-border hover:border-primary/40 transition-all text-foreground"
              >
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                {t[lang].video}
              </motion.a>
            </div>

            <p className="text-xs text-muted-foreground font-body mt-6">{t[lang].contact}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="aspect-video rounded-xl overflow-hidden border border-border shadow-glow">
              <iframe
                src="https://www.youtube.com/embed/rNLBZ1NEtDI"
                title="EmGuarde Review"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="aspect-video rounded-xl overflow-hidden border border-border">
              <iframe
                src="https://www.youtube.com/embed/I8fFj7-FaPw"
                title="EmGuarde Copywriting"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmGuardeSection;
