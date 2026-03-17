import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import combinedLogo from "@/assets/combined-logo.png";

interface ProductsPageProps {
  lang: "en" | "es";
}

const products = [
  {
    id: "k8",
    nameEn: "Kangen K8",
    nameEs: "Kangen K8",
    descEn: "The flagship Kangen Water machine with 8 platinum-coated titanium plates. Produces 5 types of water for drinking, cooking, cleaning, and beauty care. The most powerful antioxidant hydration system for your home.",
    descEs: "La máquina insignia de Agua Kangen con 8 placas de titanio recubiertas de platino. Produce 5 tipos de agua para beber, cocinar, limpiar y cuidado de belleza. El sistema de hidratación antioxidante más poderoso para tu hogar.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1016",
    featured: true,
  },
  {
    id: "sd501-super",
    nameEn: "SD 501 Super",
    nameEs: "SD 501 Super",
    descEn: "The enhanced SD 501 with 7 platinum-coated titanium plates and extra-large electrolysis surface. Built for families and heavy use — superior Kangen Water production for households that demand more.",
    descEs: "El SD 501 mejorado con 7 placas de titanio recubiertas de platino y superficie de electrólisis extra grande. Diseñado para familias y uso intensivo — producción superior de Agua Kangen.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1007",
  },
  {
    id: "sd501-dx",
    nameEn: "SD 501 DX",
    nameEs: "SD 501 DX",
    descEn: "The most popular Kangen Water machine worldwide. 7 platinum-coated titanium plates deliver consistent, high-quality hydrogen-rich water. A proven workhorse trusted by millions.",
    descEs: "La máquina de Agua Kangen más popular del mundo. 7 placas de titanio recubiertas de platino ofrecen agua rica en hidrógeno de alta calidad. Un caballo de batalla confiable por millones.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1064",
  },
  {
    id: "anespa-dx",
    nameEn: "Anespa DX",
    nameEs: "Anespa DX",
    descEn: "Transform your shower and bath with mineral ion water. The Anespa DX removes chlorine and adds natural hot spring minerals for softer skin, healthier hair, and a spa-like experience at home.",
    descEs: "Transforma tu ducha y baño con agua de iones minerales. El Anespa DX elimina el cloro y agrega minerales de aguas termales naturales para una piel más suave, cabello más saludable y una experiencia de spa en casa.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=1062",
  },
  {
    id: "ukon-sigma",
    nameEn: "Ukon Sigma",
    nameEs: "Ukon Sigma",
    descEn: "Premium wild turmeric supplement from Okinawa, Japan. 100% organic Ukon (turmeric) in easy-to-take capsules. Supports liver health, anti-inflammation, and overall vitality.",
    descEs: "Suplemento premium de cúrcuma silvestre de Okinawa, Japón. 100% orgánico Ukon (cúrcuma) en cápsulas fáciles de tomar. Apoya la salud hepática, antiinflamación y vitalidad general.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=2006",
  },
  {
    id: "kangen-beef",
    nameEn: "Kangen Beef SET",
    nameEs: "Kangen Beef SET",
    descEn: "Premium Kangen Farm beef raised with Kangen Water. A unique product from Enagic's farm-to-table initiative. Experience the difference that hydrogen-rich water makes in premium beef quality.",
    descEs: "Carne premium de Kangen Farm criada con Agua Kangen. Un producto único de la iniciativa de granja a mesa de Enagic. Experimenta la diferencia que el agua rica en hidrógeno hace en la calidad de la carne.",
    href: "https://information.enagic.com/en/introduction?company_id=2&h=65c8bc2eba9f21e83eb4b6aae8ae3fd4&enroller_id=37000004828&sponsor_id=37000004829&representative_id=37000004828&line_rank=0&product_id=2115",
  },
];

const ProductsPage = ({ lang }: ProductsPageProps) => {
  const t = {
    en: {
      micro: "Official Enagic Products",
      headline: "Explore the Full Product Line",
      subhead: "Premium Japanese technology for water, wellness, and vitality — trusted by millions worldwide for over 50 years.",
      cta: "Order Now",
      kangenAirTitle: "Kangen Air",
      kangenAirDesc: "A revolutionary air purifier combining photocatalysis and UV LED technology. Now available in USA and Canada as a private import from Singapore. Contact kangenair@enagicsg.com for more information.",
      kangenAirAvail: "Available in USA & Canada — Contact for details",
      kangenAirCta: "Contact for Kangen Air",
      bookCall: "Book a Wellness Call",
      featured: "FLAGSHIP",
    },
    es: {
      micro: "Productos Oficiales Enagic",
      headline: "Explora la Línea Completa de Productos",
      subhead: "Tecnología japonesa premium para agua, bienestar y vitalidad — confiada por millones en todo el mundo durante más de 50 años.",
      cta: "Ordenar Ahora",
      kangenAirTitle: "Kangen Air",
      kangenAirDesc: "Un purificador de aire revolucionario que combina fotocatálisis y tecnología LED UV. Ahora disponible en EE. UU. y Canadá como importación privada desde Singapur. Contacta kangenair@enagicsg.com para más información.",
      kangenAirAvail: "Disponible en EE. UU. y Canadá — Contacta para detalles",
      kangenAirCta: "Contactar por Kangen Air",
      bookCall: "Agenda una Llamada",
      featured: "INSIGNIA",
    },
  };

  const c = t[lang];

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`glass-card rounded-2xl overflow-hidden border transition-all duration-300 hover:border-accent/30 hover:shadow-gold flex flex-col ${
                  product.featured ? "md:col-span-2 lg:col-span-1 border-accent/20" : "border-border/20"
                }`}
              >
                {/* Placeholder */}
                <div className="relative aspect-square bg-background/50 flex items-center justify-center p-6 overflow-hidden">
                  {product.featured && (
                    <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold z-10">
                      {c.featured}
                    </span>
                  )}
                  <div className="w-full h-full flex items-center justify-center">
                    <img src={combinedLogo} alt="True Legacy" className="w-32 opacity-30" />
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-black text-xl text-foreground mb-2">
                    {lang === "en" ? product.nameEn : product.nameEs}
                  </h3>
                  <p className="font-body text-sm text-foreground/60 font-bold leading-relaxed mb-6 flex-1">
                    {lang === "en" ? product.descEn : product.descEs}
                  </p>
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
                    {c.cta}
                  </motion.a>
                </div>
              </motion.div>
            ))}

            {/* Kangen Air Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl overflow-hidden border border-primary/20 transition-all duration-300 hover:border-primary/40 hover:shadow-deep flex flex-col"
            >
              <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center p-6">
                <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold">
                  {lang === "en" ? "NEW" : "NUEVO"}
                </span>
                <div className="text-center">
                  <svg className="w-16 h-16 text-primary/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                  <p className="font-display font-black text-2xl text-foreground">{c.kangenAirTitle}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display font-black text-xl text-foreground mb-2">{c.kangenAirTitle}</h3>
                <p className="font-body text-sm text-foreground/60 font-bold leading-relaxed mb-3 flex-1">
                  {c.kangenAirDesc}
                </p>
                <p className="font-mono text-xs text-accent mb-6">{c.kangenAirAvail}</p>
                <a
                  href="mailto:kangenair@enagicsg.com"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl font-body font-black text-sm uppercase tracking-[0.12em] border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {c.kangenAirCta}
                </a>
              </div>
            </motion.div>
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
