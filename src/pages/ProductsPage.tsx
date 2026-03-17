import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import imgK8 from "@/assets/product-k8-real.png";
import imgEmguarde from "@/assets/product-emguarde-real.png";
import imgSd501dx from "@/assets/product-sd501dx-real.png";
import imgSd501super from "@/assets/product-sd501super-real.png";
import imgJriv from "@/assets/product-jriv-real.png";
import imgAnespa from "@/assets/product-anespa-real.png";
import imgWagyu from "@/assets/product-wagyu-real.png";
import imgKangenAir from "@/assets/kangen-air.png";

interface ProductsPageProps {
  lang: "en" | "es";
}

const enagicBase = "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0";

interface Product {
  id: string;
  nameEn: string;
  nameEs: string;
  descEn: string;
  descEs: string;
  image: string;
  href?: string;
  featured?: boolean;
  type?: "emguarde" | "kangenair" | "standard";
}

const products: Product[] = [
  {
    id: "k8",
    nameEn: "Leveluk K8",
    nameEs: "Leveluk K8",
    descEn: "The flagship Kangen Water machine with 8 platinum-coated titanium plates. Produces 5 types of water for drinking, cooking, cleaning, and beauty care.",
    descEs: "La máquina insignia de Agua Kangen con 8 placas de titanio recubiertas de platino. Produce 5 tipos de agua para beber, cocinar, limpiar y cuidado de belleza.",
    image: imgK8,
    href: `${enagicBase}&product_id=1016`,
    featured: true,
    type: "standard",
  },
  {
    id: "emguarde",
    nameEn: "EmGuarde",
    nameEs: "EmGuarde",
    descEn: "Personal EMF protection device. Shields you from electromagnetic frequencies with cutting-edge Japanese technology.",
    descEs: "Dispositivo personal de protección contra EMF. Te protege de las frecuencias electromagnéticas con tecnología japonesa de vanguardia.",
    image: imgEmguarde,
    type: "emguarde",
  },
  {
    id: "sd501dx",
    nameEn: "Leveluk SD501 DX",
    nameEs: "Leveluk SD501 DX",
    descEn: "The most popular Kangen Water machine worldwide. 7 platinum-coated titanium plates deliver consistent, high-quality hydrogen-rich water.",
    descEs: "La máquina de Agua Kangen más popular del mundo. 7 placas de titanio recubiertas de platino ofrecen agua rica en hidrógeno de alta calidad.",
    image: imgSd501dx,
    href: `${enagicBase}&product_id=1064`,
    type: "standard",
  },
  {
    id: "sd501-super",
    nameEn: "Leveluk Super 501",
    nameEs: "Leveluk Super 501",
    descEn: "The enhanced model with 7 platinum-coated titanium plates and extra-large electrolysis surface. Built for families and heavy use.",
    descEs: "El modelo mejorado con 7 placas de titanio recubiertas de platino y superficie de electrólisis extra grande. Diseñado para familias y uso intensivo.",
    image: imgSd501super,
    href: `${enagicBase}&product_id=1007`,
    type: "standard",
  },
  {
    id: "jr-iv",
    nameEn: "Leveluk Jr IV",
    nameEs: "Leveluk Jr IV",
    descEn: "Compact and affordable entry-level Kangen Water machine. 4 platinum-coated titanium plates — perfect for individuals and small households.",
    descEs: "Máquina de Agua Kangen compacta y accesible. 4 placas de titanio recubiertas de platino — perfecta para individuos y hogares pequeños.",
    image: imgJriv,
    href: `${enagicBase}&product_id=1006`,
    type: "standard",
  },
  {
    id: "anespa-dx",
    nameEn: "Anespa DX",
    nameEs: "Anespa DX",
    descEn: "Transform your shower and bath with mineral ion water. Removes chlorine and adds natural hot spring minerals for softer skin and healthier hair.",
    descEs: "Transforma tu ducha y baño con agua de iones minerales. Elimina el cloro y agrega minerales de aguas termales naturales para una piel más suave.",
    image: imgAnespa,
    href: `${enagicBase}&product_id=1062`,
    type: "standard",
  },
  {
    id: "kangen-air",
    nameEn: "Kangen Air",
    nameEs: "Kangen Air",
    descEn: "Revolutionary air purifier combining photocatalysis and UV LED technology. Available in USA & Canada as a private import from Singapore.",
    descEs: "Purificador de aire revolucionario que combina fotocatálisis y tecnología LED UV. Disponible en EE. UU. y Canadá como importación privada desde Singapur.",
    image: imgKangenAir,
    type: "kangenair",
  },
  {
    id: "wagyu",
    nameEn: "Kangen Wagyu™",
    nameEs: "Kangen Wagyu™",
    descEn: "Premium Kangen Farm beef raised with Kangen Water. A unique farm-to-table initiative — experience the difference hydrogen-rich water makes.",
    descEs: "Carne premium de Kangen Farm criada con Agua Kangen. Una iniciativa única de granja a mesa — experimenta la diferencia del agua rica en hidrógeno.",
    image: imgWagyu,
    href: `${enagicBase}&product_id=2115`,
    type: "standard",
  },
];

const ProductsPage = ({ lang }: ProductsPageProps) => {
  const isLatam = lang === "es";
  const whatsapp = "https://wa.me/573001844049";

  const t = {
    en: {
      micro: "Official Enagic Products",
      headline: "Explore the Full Product Line",
      subhead: "Premium Japanese technology for water, wellness, and vitality — trusted by millions worldwide for over 50 years.",
      order: "Order Now",
      howToBuy: "How to Buy",
      contactWhatsApp: "Contact via WhatsApp",
      featured: "FLAGSHIP",
      bookCall: "Book a Wellness Call",
      emguardeTitle: "EmGuarde — How to Order",
      emguardeSteps: [
        "Price: $1,520 USD (plus shipping)",
        "Distributor ID#: 37000004828",
        "Contact us for step-by-step purchase instructions",
      ],
      kangenAirTitle: "Kangen Air — How to Order",
      kangenAirPrice: "SGD 1,860 (4 units: White, Black, Pink, Blue)",
      kangenAirShipUS: "Shipping USA: SGD 250–350",
      kangenAirShipCA: "Shipping Canada: SGD 280–380",
      kangenAirSteps: [
        "Fill out the Kangen Air Application Form (found on DSP)",
        "Email the form — Canada: goc.can@enagic.com | USA: goc.usa@enagic.com",
        "Once approved, you'll receive the payment link",
        "After payment, product ships from Singapore",
      ],
      kangenAirNote: "Private import from Singapore. Custom duties/taxes covered by customer.",
      newLabel: "NEW",
    },
    es: {
      micro: "Productos Oficiales Enagic",
      headline: "Explora la Línea Completa",
      subhead: "Tecnología japonesa premium para agua, bienestar y vitalidad — confiada por millones en todo el mundo durante más de 50 años.",
      order: "Ordenar Ahora",
      howToBuy: "Cómo Comprar",
      contactWhatsApp: "Contactar por WhatsApp",
      featured: "INSIGNIA",
      bookCall: "Agenda una Llamada",
      emguardeTitle: "EmGuarde — Cómo Ordenar",
      emguardeSteps: [
        "Precio: $1,520 USD (más envío)",
        "ID de Distribuidor#: 37000004828",
        "Contáctanos para instrucciones paso a paso",
      ],
      kangenAirTitle: "Kangen Air — Cómo Ordenar",
      kangenAirPrice: "SGD 1,860 (4 unidades: Blanco, Negro, Rosa, Azul)",
      kangenAirShipUS: "Envío EE.UU.: SGD 250–350",
      kangenAirShipCA: "Envío Canadá: SGD 280–380",
      kangenAirSteps: [
        "Completa el Formulario de Solicitud Kangen Air (disponible en DSP)",
        "Envía el formulario — Canadá: goc.can@enagic.com | USA: goc.usa@enagic.com",
        "Una vez aprobado, recibirás el enlace de pago",
        "Después del pago, el producto se envía desde Singapur",
      ],
      kangenAirNote: "Importación privada desde Singapur. Impuestos/aranceles a cargo del cliente.",
      newLabel: "NUEVO",
    },
  };

  const c = t[lang];

  const renderProductCard = (product: Product, i: number) => {
    const name = lang === "en" ? product.nameEn : product.nameEs;
    const desc = lang === "en" ? product.descEn : product.descEs;

    return (
      <motion.div
        key={product.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 hover:border-accent/30 hover:shadow-gold flex flex-col ${
          product.featured ? "border-accent/20" : "border-border/20"
        }`}
      >
        {/* Image */}
        {product.image ? (
          <div className="relative aspect-square bg-background/50 flex items-center justify-center overflow-hidden">
            {product.featured && (
              <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold z-10">
                {c.featured}
              </span>
            )}
            <img src={product.image} alt={name} className="w-full h-full object-contain p-4" />
          </div>
        ) : (
          <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center p-6">
            <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
              {c.newLabel}
            </span>
            <div className="text-center">
              <svg className="w-16 h-16 text-primary/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
              <p className="font-display font-black text-2xl text-foreground">{name}</p>
            </div>
          </div>
        )}

        {/* Details */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <h3 className="font-display font-black text-lg md:text-xl text-foreground mb-2">{name}</h3>
          <p className="font-body text-sm text-foreground/60 font-bold leading-relaxed mb-4 flex-1">{desc}</p>

          {/* EmGuarde CTA */}
          {product.type === "emguarde" && (
            <>
              {isLatam ? (
                <motion.a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-green-600 text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                  {c.contactWhatsApp}
                </motion.a>
              ) : (
                <>
                  <div className="mb-4 p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <p className="font-display font-black text-sm text-accent mb-2">{c.emguardeTitle}</p>
                    <ul className="space-y-1">
                      {c.emguardeSteps.map((step, si) => (
                        <li key={si} className="font-body text-xs text-foreground/60 font-bold">• {step}</li>
                      ))}
                    </ul>
                  </div>
                  <motion.a
                    href={`/${lang === "en" ? "global" : "latam"}/emguarde`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-colors"
                  >
                    {c.howToBuy}
                  </motion.a>
                </>
              )}
            </>
          )}

          {/* Kangen Air CTA */}
          {product.type === "kangenair" && (
            <>
              {isLatam ? (
                <motion.a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-green-600 text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                  {c.contactWhatsApp}
                </motion.a>
              ) : (
                <>
                  <div className="mb-4 p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-2">
                    <p className="font-display font-black text-sm text-primary mb-1">{c.kangenAirTitle}</p>
                    <p className="font-body text-xs text-foreground/70 font-bold">{c.kangenAirPrice}</p>
                    <p className="font-body text-xs text-foreground/60 font-bold">{c.kangenAirShipUS}</p>
                    <p className="font-body text-xs text-foreground/60 font-bold">{c.kangenAirShipCA}</p>
                    <div className="pt-2 border-t border-primary/10">
                      <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/50 mb-1">Application Flow</p>
                      {c.kangenAirSteps.map((step, si) => (
                        <p key={si} className="font-body text-xs text-foreground/60 font-bold">{si + 1}. {step}</p>
                      ))}
                    </div>
                    <p className="font-mono text-[10px] text-foreground/40 italic mt-2">{c.kangenAirNote}</p>
                  </div>
                  <a
                    href="mailto:kangenair@enagicsg.com"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {lang === "en" ? "Contact for Kangen Air" : "Contactar por Kangen Air"}
                  </a>
                </>
              )}
            </>
          )}

          {/* Standard product CTA */}
          {product.type === "standard" && product.href && (
            <motion.a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {c.order}
            </motion.a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar lang={lang} />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden noise-overlay">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-accent font-bold mb-6"
          >
            {c.micro}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black leading-[1.05] mb-6"
          >
            <span className="text-gradient-gold">{c.headline}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-base md:text-lg text-foreground/70 font-bold max-w-2xl mx-auto"
          >
            {c.subhead}
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-20 md:pb-28 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {products.map((product, i) => renderProductCard(product, i))}
          </div>

          {/* Book a call CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <motion.a
              href="https://calendly.com/aquacharged/true-legacy-one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="cta-shimmer inline-flex items-center gap-3 px-10 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold animate-pulse-glow"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {c.bookCall}
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
};

export default ProductsPage;
