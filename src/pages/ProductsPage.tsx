import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/seo";
import imgK8 from "@/assets/product-k8-real.png";
import imgEmguarde from "@/assets/product-emguarde-real.png";
import emguardeDevice from "@/assets/emguarde-device.png";
import imgSd501dx from "@/assets/product-sd501dx-real.png";
import imgSd501super from "@/assets/product-sd501super-real.png";
import imgJriv from "@/assets/product-jriv-real.png";
import imgAnespa from "@/assets/product-anespa-real.png";
import imgWagyu from "@/assets/product-wagyu-real.png";
import imgKangenAir from "@/assets/kangen-air.png";
import imgUkon from "@/assets/product-ukon-real.png";
import imgEmgo from "@/assets/product-emgo.png";

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
  image2?: string;
  href?: string;
  featured?: boolean;
  type?: "emguarde" | "kangenair" | "standard" | "duo" | "emgo";
  enOnly?: boolean;
}

const products: Product[] = [
  {
    id: "duo-package",
    nameEn: "K8 + EmGuarde — Duo Package",
    nameEs: "K8 + EmGuarde — Paquete Duo",
    descEn: "The ultimate power combo. Leveluk K8 Kangen Water machine + EmGuarde EMF protection device. Two commission points. Two life-changing products.",
    descEs: "La combinación definitiva de poder. Máquina de Agua Kangen Leveluk K8 + dispositivo de protección EMF EmGuarde. Dos puntos de comisión. Dos productos que cambian vidas.",
    image: imgK8,
    image2: emguardeDevice,
    featured: true,
    type: "duo",
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
    href: `${enagicBase}&product_id=1062`,
    type: "standard",
  },
  {
    id: "anespa-dx",
    nameEn: "Anespa DX",
    nameEs: "Anespa DX",
    descEn: "Transform your shower and bath with mineral ion water. Removes chlorine and adds natural hot spring minerals for softer skin and healthier hair.",
    descEs: "Transforma tu ducha y baño con agua de iones minerales. Elimina el cloro y agrega minerales de aguas termales naturales para una piel más suave.",
    image: imgAnespa,
    href: `${enagicBase}&product_id=1041`,
    type: "standard",
  },
  {
    id: "ukon",
    nameEn: "Kangen Ukon Sigma",
    nameEs: "Kangen Ukon Sigma",
    descEn: "Premium organic turmeric supplement sourced from Okinawa, Japan. Supports overall wellness, anti-inflammation, and healthy digestion.",
    descEs: "Suplemento premium de cúrcuma orgánica de Okinawa, Japón. Apoya el bienestar general, antiinflamación y digestión saludable.",
    image: imgUkon,
    href: `${enagicBase}&product_id=2011`,
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
  {
    id: "emgo",
    nameEn: "emGo",
    nameEs: "",
    descEn: "emGuarde 2.0 (Coming soon to the U.S. market)",
    descEs: "",
    image: imgEmgo,
    type: "emgo",
    enOnly: true,
  },
];

const ProductsPage = ({ lang }: ProductsPageProps) => {
  const isLatam = lang === "es";
  const whatsappLatam = "https://wa.me/573001844049";
  const whatsappEn = "https://wa.me/18649072149";
  const contactLink = isLatam ? whatsappLatam : whatsappEn;

  useEffect(() => {
    setPageMeta(
      lang === "en"
        ? "Kangen Water Products & EMF Protection | Leveluk K8, SD501, EmGuarde | Mehdi Cohen True Legacy"
        : "Productos Agua Kangen y Protección EMF | Leveluk K8, SD501, EmGuarde | Mehdi Cohen True Legacy",
      lang === "en"
        ? "Buy official Enagic Kangen Water machines — Leveluk K8, SD501 DX, JR IV, Anespa DX — and EmGuarde EMF protection. Trusted by Mehdi Cohen's global True Legacy team operating in 51+ countries worldwide."
        : "Compra Máquinas de Agua Kangen Enagic oficiales — Leveluk K8, SD501 DX, JR IV, Anespa DX — y protección EMF EmGuarde. Confiado por el equipo global True Legacy de Mehdi Cohen en más de 51 países."
    );
  }, [lang]);

  const t = {
    en: {
      micro: "Official Enagic® Products — Mehdi Cohen True Legacy",
      headline: "Kangen Water Machines & Wellness Products",
      subhead: "Shop the official Enagic product line — Leveluk K8, SD501 DX, EmGuarde EMF protection, and more. Trusted by millions worldwide for 51+ years. Distributed by Mehdi Cohen's True Legacy global team.",
      order: "Order Now",
      howToBuy: "How to Buy",
      contactWhatsApp: "Contact Us",
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
      micro: "Productos Oficiales Enagic® — Mehdi Cohen True Legacy",
      headline: "Máquinas Agua Kangen y Productos de Bienestar",
      subhead: "Compra la línea oficial de productos Enagic — Leveluk K8, SD501 DX, EmGuarde protección EMF y más. Confiada por millones en todo el mundo durante 51+ años. Distribuida por el equipo global True Legacy de Mehdi Cohen.",
      order: "Ordenar Ahora",
      howToBuy: "Cómo Comprar",
      contactWhatsApp: "Contáctanos",
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
        <div className="relative h-44 flex items-center justify-center overflow-hidden rounded-t-2xl bg-transparent">
          {product.featured && (
            <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold z-10">
              {product.type === "duo" ? "DUO" : c.featured}
            </span>
          )}
          {product.type === "duo" && product.image2 ? (
            <div className="flex items-end justify-center gap-2 w-full h-full p-4">
              <img src={product.image} alt={name} className="h-full w-auto max-w-[48%] object-contain drop-shadow-lg" />
              <img src={product.image2} alt="EmGuarde" className="h-[80%] w-auto max-w-[36%] object-contain drop-shadow-lg" />
            </div>
          ) : (
            <img src={product.image} alt={name} className="h-full w-auto max-w-[80%] object-contain p-4 drop-shadow-lg" />
          )}
        </div>

        <div className="p-4 md:p-5 flex flex-col flex-1">
          <h3 className="font-display font-black text-sm md:text-lg text-foreground mb-1.5 leading-snug">{name}</h3>
          <p className="font-body text-xs md:text-sm text-foreground/60 font-bold leading-relaxed mb-4">{desc}</p>

          {product.type === "duo" && (
            <div className="flex flex-col gap-2 mt-auto pt-4">
              <motion.a
                href={`${enagicBase}&product_id=1016`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-colors"
              >
                {lang === "en" ? "Order Kangen K8" : "Ordenar Kangen K8"}
              </motion.a>
              <motion.a
                href={lang === "en" ? "/global/emguarde" : "/latam/emguarde"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] border border-emguarde/40 text-emguarde hover:bg-emguarde/10 transition-colors"
              >
                {lang === "en" ? "EmGuarde Instructions" : "Instrucciones de EmGuarde"}
              </motion.a>
              <motion.a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                {lang === "en" ? "Contact Us" : "Contáctanos"}
              </motion.a>
              <a
                href={isLatam ? "/latam/latam-duo-package" : "/global/duopackage"}
                className="block text-center text-xs font-mono font-bold uppercase tracking-[0.12em] text-accent/50 hover:text-accent/80 transition-colors pt-1"
              >
                {lang === "en" ? "View Full Duo Package →" : "Ver Paquete Duo Completo →"}
              </a>
            </div>
          )}

          {product.type === "emguarde" && (
            <div className="flex flex-col gap-2 mt-auto pt-4">
              {isLatam ? (
                <div className="flex flex-col gap-2">
                  <motion.a
                    href={contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                    {c.contactWhatsApp}
                  </motion.a>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
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
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-colors"
                  >
                    {c.howToBuy}
                  </motion.a>
                  <motion.a
                    href={contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-body font-black text-xs uppercase tracking-[0.12em] border border-[#25D366]/30 text-[#25D366]/70 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                    {c.contactWhatsApp}
                  </motion.a>
                </div>
              )}
            </div>
          )}

          {product.type === "kangenair" && (
            <div className="flex flex-col gap-2 mt-auto pt-4">
              {isLatam ? (
                <motion.a
                  href={contactLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                  {c.contactWhatsApp}
                </motion.a>
              ) : (
                <>
                  <div className="mb-3 p-3 rounded-xl bg-primary/5 border border-primary/10 space-y-1.5">
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
                  <motion.a
                    href={contactLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                    {lang === "en" ? "Contact for Kangen Air" : "Contactar por Kangen Air"}
                  </motion.a>
                </>
              )}
            </div>
          )}

          {product.type === "standard" && product.href && (
            <div className="flex flex-col gap-2 mt-auto pt-4">
              <motion.a
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="cta-shimmer inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-accent text-accent-foreground shadow-gold transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {c.order}
              </motion.a>
              <motion.a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl font-body font-black text-xs uppercase tracking-[0.12em] border border-[#25D366]/30 text-[#25D366]/70 hover:text-[#25D366] hover:border-[#25D366]/50 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                {c.contactWhatsApp}
              </motion.a>
            </div>
          )}

          {product.type === "emgo" && (
            <div className="flex flex-col gap-2 mt-auto pt-4">
              <motion.a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 14.4l-2-1c-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.4c.1-.1.1-.3 0-.4l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.3 0-.2-.2-.3-.4-.4z"/></svg>
                {c.contactWhatsApp}
              </motion.a>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar lang={lang} />

      <section className="pt-16 pb-6 md:pt-24 md:pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

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

      <section className="pb-12 md:pb-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 max-w-6xl mx-auto items-start">
            {products
              .filter((p) => !(isLatam && p.enOnly))
              .map((product, i) => renderProductCard(product, i))}
          </div>

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
