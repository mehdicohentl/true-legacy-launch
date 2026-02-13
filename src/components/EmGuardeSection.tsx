import { motion } from "framer-motion";
import { useState } from "react";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const t = {
    en: {
      micro: "Now Available in USA, Canada & Mexico",
      headline: "EmGuarde",
      headline2: "EMF Protection by Enagic",
      intro: "Embracing the philosophy of \"True Health,\" Enagic has been dedicated to manufacturing and selling a range of products — the Leveluk series, Anespa, Ukon products, Kangen Air and Kangen Farm products — all aimed at enhancing overall health and well-being.",
      intro2: "Now, we are excited to introduce our new product, \"emGuarde\" — the device which reduces or mitigates the disruptive effects of electromagnetic fields (EMFs) produced by electronic devices, aiming to create a more balanced and healthier environment.",
      history: "First launched in Malaysia in May 2023, emGuarde is now also being sold in Malaysia, Hong Kong, Singapore, Dubai, Indonesia, Philippines, Thailand, Australia and Europe. We are pleased to announce it is now available in the North American region — USA, Canada, and Mexico.",
      privateImport: "Please note that this is a private import product from Malaysia.",
      contact: "For more information, contact emgsales@enagic-my.com or WhatsApp: +60133096234",
      badge: "Launching in USA, Canada & Mexico",
      salesDate: "Sales Start Date: November 1, 2024",
      price: "$1,520 USD",
      priceLocal: "(MYR 6,620)",
      shippingTitle: "Shipping Fees",
      shippingItems: [
        { country: "USA", fee: "$160 USD", method: "DHL" },
        { country: "Canada", fee: "$160 USD", method: "DHL" },
        { country: "Mexico", fee: "$160 USD", method: "FedEx" },
      ],
      shippingNote: "Shipping fees are subject to change based on airfare fluctuations and will be reviewed and updated monthly.",
      quickFacts: [
        { label: "Contents", value: "1 Unit" },
        { label: "Payment", value: "Visa / MC" },
        { label: "Warranty", value: "1 Year" },
        { label: "Limit", value: "5 Units" },
        { label: "SP Status", value: "3 Months" },
        { label: "Delivery", value: "10–14 Days" },
      ],
      ctaBuy: "Purchase EmGuarde (USA)",
      ctaBuyOther: "Purchase EmGuarde (Canada/Mexico)",
      ctaVideo: "Watch EmGuarde In Action →",
      showMore: "View Full Details & Commission Info",
      showLess: "Hide Details",
      purchaseFlowTitle: "How to Purchase EmGuarde",
      steps: [
        {
          num: "1",
          title: "Make Payment",
          desc: "Pay by credit card (single payment):",
          links: [
            { label: "For US orders, click here", url: "https://shop.enagic-my.com/product/emguarde-us-only/" },
            { label: "For Canada/Mexico orders, click here", url: "https://shop.enagic-my.com/product/emguarde/" },
          ],
          extra: "You may select your preferred currency: USD or MYR. You can also add accessories (pouch and USB cable) to be shipped with your order.",
        },
        {
          num: "2",
          title: "Submit Your Application",
          desc: "Take a screenshot of your payment confirmation email. Attach it along with your completed emGuarde Product Application Form. Email both documents to your GOC:",
          contacts: [
            "USA: goc.usa@enagic.com",
            "Canada: goc.can@enagic.com",
            "Mexico: goc.mx@enagic.com",
          ],
          extra: "CC: emgsales@enagic-my.com",
        },
        {
          num: "3",
          title: "Order Confirmation",
          desc: "The GOC will register your order and the Malaysia Office will process it. Once payment is verified, shipment will be scheduled and you will receive a tracking number.",
        },
        {
          num: "4",
          title: "Shipping",
          desc: "Malaysia inventory staff will ship the emGuarde. The warranty period begins from the invoice date.",
        },
        {
          num: "5",
          title: "Receive Your Product",
          desc: "Delivery takes approximately 10–14 working days to USA, Canada and Mexico.",
        },
      ],
      importNotice: "Import fees, GST, or VAT may apply once the shipment reaches your country. Any additional customs charges must be paid by the recipient.",
      commissionTitle: "Commission Structure",
      commissions: [
        { type: "Kangen Distributors", desc: "(those who have purchased any core products — Kangen Machines, Anespa, Ukon DD or Ukon Sigma)", amount: "MYR 392 / per point" },
        { type: "EmGuarde-Only Distributors", desc: "(new distributors who joined by purchasing emGuarde, no core products)", amount: "MYR 305 / per point" },
      ],
      commissionNotes: [
        "Commissions may vary slightly based on exchange rates.",
        "A 10% withholding tax will be applied to commissions paid to non-resident distributors (USA, Canada, Mexico), in accordance with Malaysian tax regulations.",
        "Distributors within the 8-point system can earn commission even if they have not purchased emGuarde.",
      ],
      registrationTitle: "Registration & Policies",
      registrationItems: [
        "ID# will be issued for each emGuarde purchase. Only one (1) emGuarde distributor account is allowed — subsequent purchases will be User accounts.",
        "Enroller: Not allowed.",
        "Count for 1A to 6A Achievements: 1 unit",
        "Title Incentives, Bonuses, Awards: 0.5 unit",
        "Return Policy: Refer to Enagic® Malaysia Sdn Bhd's website — www.enagic-my.com",
      ],
      coolingOff: "Option to waive the cooling-off period: You may waive the cooling-off period (shipment proceeds immediately) or keep your right to cancel during the cooling-off period (shipment proceeds after 10 working days).",
      coolingOffLink: "Submit Cooling Off Period Form",
      paymentGuide: "Payment guide",
      distributorId: "Distributor ID# 37000004829",
    },
    es: {
      micro: "Ahora Disponible en USA, Canadá y México",
      headline: "EmGuarde",
      headline2: "Protección EMF por Enagic",
      intro: "Abrazando la filosofía de \"Salud Verdadera,\" Enagic se ha dedicado a fabricar y vender una gama de productos — la serie Leveluk, Anespa, productos Ukon, Kangen Air y productos Kangen Farm — todos dirigidos a mejorar la salud y el bienestar general.",
      intro2: "Ahora, estamos emocionados de presentar nuestro nuevo producto, \"emGuarde\" — el dispositivo que reduce o mitiga los efectos disruptivos de los campos electromagnéticos (EMF) producidos por dispositivos electrónicos, con el objetivo de crear un ambiente más equilibrado y saludable.",
      history: "Lanzado por primera vez en Malasia en mayo de 2023, emGuarde ahora también se vende en Malasia, Hong Kong, Singapur, Dubái, Indonesia, Filipinas, Tailandia, Australia y Europa. Nos complace anunciar que ahora está disponible en la región de América del Norte — USA, Canadá y México.",
      privateImport: "Ten en cuenta que este es un producto de importación privada desde Malasia.",
      contact: "Para más información, contacta emgsales@enagic-my.com o WhatsApp: +60133096234",
      badge: "Lanzamiento en USA, Canadá y México",
      salesDate: "Fecha de Inicio de Ventas: 1 de Noviembre, 2024",
      price: "$1,520 USD",
      priceLocal: "(MYR 6,620)",
      shippingTitle: "Costos de Envío",
      shippingItems: [
        { country: "USA", fee: "$160 USD", method: "DHL" },
        { country: "Canadá", fee: "$160 USD", method: "DHL" },
        { country: "México", fee: "$160 USD", method: "FedEx" },
      ],
      shippingNote: "Los costos de envío están sujetos a cambios según las fluctuaciones del flete aéreo y se revisarán y actualizarán mensualmente.",
      quickFacts: [
        { label: "Contenido", value: "1 Unidad" },
        { label: "Pago", value: "Visa / MC" },
        { label: "Garantía", value: "1 Año" },
        { label: "Límite", value: "5 Unidades" },
        { label: "Estado SP", value: "3 Meses" },
        { label: "Entrega", value: "10–14 Días" },
      ],
      ctaBuy: "Comprar EmGuarde (USA)",
      ctaBuyOther: "Comprar EmGuarde (Canadá/México)",
      ctaVideo: "Ver EmGuarde en Acción →",
      showMore: "Ver Detalles Completos y Comisiones",
      showLess: "Ocultar Detalles",
      purchaseFlowTitle: "Cómo Comprar EmGuarde",
      steps: [
        {
          num: "1",
          title: "Realizar el Pago",
          desc: "Paga con tarjeta de crédito (pago único):",
          links: [
            { label: "Para pedidos en USA, haz clic aquí", url: "https://shop.enagic-my.com/product/emguarde-us-only/" },
            { label: "Para pedidos de Canadá/México, haz clic aquí", url: "https://shop.enagic-my.com/product/emguarde/" },
          ],
          extra: "Puedes seleccionar tu moneda preferida: USD o MYR. También puedes agregar accesorios (funda y cable USB) para enviar junto con tu pedido.",
        },
        {
          num: "2",
          title: "Enviar Tu Solicitud",
          desc: "Toma una captura de pantalla de tu confirmación de pago por email. Adjúntala junto con tu Formulario de Solicitud de Producto emGuarde. Envía ambos documentos a tu GOC:",
          contacts: [
            "USA: goc.usa@enagic.com",
            "Canadá: goc.can@enagic.com",
            "México: goc.mx@enagic.com",
          ],
          extra: "CC: emgsales@enagic-my.com",
        },
        {
          num: "3",
          title: "Confirmación de Pedido",
          desc: "El GOC registrará tu pedido y la oficina de Malasia lo procesará. Una vez verificado el pago, se programará el envío y recibirás un número de seguimiento.",
        },
        {
          num: "4",
          title: "Envío",
          desc: "El personal de inventario de Malasia enviará el emGuarde. El período de garantía comienza desde la fecha de la factura.",
        },
        {
          num: "5",
          title: "Recibe Tu Producto",
          desc: "La entrega toma aproximadamente 10–14 días hábiles a USA, Canadá y México.",
        },
      ],
      importNotice: "Pueden aplicar tarifas de importación, GST o IVA una vez que el envío llegue a tu país. Cualquier cargo aduanero adicional debe ser pagado por el destinatario.",
      commissionTitle: "Estructura de Comisiones",
      commissions: [
        { type: "Distribuidores Kangen", desc: "(quienes han comprado productos principales — Máquinas Kangen, Anespa, Ukon DD o Ukon Sigma)", amount: "MYR 392 / por punto" },
        { type: "Distribuidores Solo EmGuarde", desc: "(nuevos distribuidores que se unieron comprando emGuarde, sin productos principales)", amount: "MYR 305 / por punto" },
      ],
      commissionNotes: [
        "Las comisiones pueden variar ligeramente según los tipos de cambio.",
        "Se aplicará un impuesto de retención del 10% a las comisiones pagadas a distribuidores no residentes (USA, Canadá, México), de acuerdo con las regulaciones fiscales de Malasia.",
        "Los distribuidores dentro del sistema de 8 puntos pueden ganar comisión incluso si no han comprado emGuarde.",
      ],
      registrationTitle: "Registro y Políticas",
      registrationItems: [
        "Se emitirá un ID# por cada compra de emGuarde. Solo se permite una (1) cuenta de distribuidor emGuarde — las compras posteriores serán cuentas de Usuario.",
        "Patrocinador: No permitido.",
        "Cuenta para Logros 1A a 6A: 1 unidad",
        "Incentivos de Título, Bonos, Premios: 0.5 unidad",
        "Política de Devolución: Consulta el sitio web de Enagic® Malaysia Sdn Bhd — www.enagic-my.com",
      ],
      coolingOff: "Opción de renunciar al período de enfriamiento: Puedes renunciar al período de enfriamiento (el envío procede inmediatamente) o mantener tu derecho a cancelar durante el período de enfriamiento (el envío procede después de 10 días hábiles).",
      coolingOffLink: "Enviar Formulario de Período de Enfriamiento",
      paymentGuide: "Guía de pago",
      distributorId: "ID de Distribuidor# 37000004829",
    },
  };

  const c = t[lang];

  return (
    <section id="emguarde" className="py-20 md:py-28 bg-background relative overflow-hidden noise-overlay">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-accent/4 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-accent/80 mb-6 text-center"
        >
          {c.micro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{c.headline}</span><br />
            <span className="text-gradient-primary italic">{c.headline2}</span>
          </h2>
        </motion.div>

        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card font-mono text-xs uppercase tracking-[0.2em] text-primary border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {c.badge}
          </span>
        </motion.div>

        {/* Intro + Video grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-foreground/80 font-body leading-[1.9] mb-6 font-medium">
              {c.intro}
            </p>
            <p className="text-base md:text-lg text-foreground/80 font-body leading-[1.9] mb-6 font-medium">
              {c.intro2}
            </p>
            <p className="text-base md:text-lg text-foreground/70 font-body leading-[1.9] mb-6 font-medium">
              {c.history}
            </p>
            <p className="text-base font-body font-bold text-accent mb-4">
              ⚠️ {c.privateImport}
            </p>
            <p className="text-sm text-foreground/60 font-body font-medium">
              {c.contact}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/8 rounded-2xl blur-2xl" />
              <div className="relative aspect-video rounded-xl overflow-hidden border border-border/50 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/rNLBZ1NEtDI"
                  title="EmGuarde Review"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-border/30">
              <iframe
                src="https://www.youtube.com/embed/I8fFj7-FaPw"
                title="EmGuarde Presentation"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>

        {/* Pricing + Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/10" />
            <div className="relative m-px rounded-2xl bg-secondary p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Price */}
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">{c.salesDate}</p>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl md:text-6xl font-display font-black text-foreground">{c.price}</span>
                  </div>
                  <p className="text-sm text-foreground/50 font-body font-medium mb-6">{c.priceLocal}</p>

                  <h4 className="font-body font-bold text-base text-foreground mb-3">{c.shippingTitle}</h4>
                  <div className="space-y-2 mb-4">
                    {c.shippingItems.map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="font-body font-bold text-sm text-foreground">{s.country}:</span>
                        <span className="font-body text-sm text-foreground/70 font-medium">{s.fee} ({s.method})</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground/50 font-body italic">{c.shippingNote}</p>
                </div>

                {/* Quick facts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {c.quickFacts.map((f, i) => (
                    <div key={i} className="glass-card rounded-lg p-4 text-center">
                      <span className="block font-body font-bold text-base text-foreground">{f.value}</span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60 mt-1">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            href="https://shop.enagic-my.com/product/emguarde-us-only/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-black text-base uppercase tracking-[0.1em] bg-primary text-primary-foreground shadow-glow"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" /></svg>
            {c.ctaBuy}
          </motion.a>
          <motion.a
            href="https://shop.enagic-my.com/product/emguarde/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-bold text-base uppercase tracking-[0.1em] border border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5 transition-all"
          >
            {c.ctaBuyOther}
          </motion.a>
        </motion.div>

        <div className="flex justify-center gap-6 mb-10">
          <motion.a
            href="https://www.youtube.com/watch?v=rNLBZ1NEtDI"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 8 }}
            className="inline-flex items-center gap-3 group"
          >
            <span className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all">
              <svg className="w-4 h-4 text-primary ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
            </span>
            <span className="font-body font-bold text-sm text-foreground uppercase tracking-[0.1em]">{c.ctaVideo}</span>
          </motion.a>
        </div>

        <p className="text-center text-xs text-foreground/40 font-mono tracking-wider mb-12">{c.distributorId}</p>

        {/* Expandable Details Section */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-body font-bold text-sm uppercase tracking-[0.1em] border border-border/50 text-foreground/80 hover:border-accent/40 hover:bg-accent/5 transition-all"
          >
            <svg className={`w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            {showDetails ? c.showLess : c.showMore}
          </button>
        </div>

        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-12"
          >
            {/* Purchase Flow */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.purchaseFlowTitle}</h3>
                <div className="space-y-8">
                  {c.steps.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                        <span className="font-display font-black text-primary text-sm">{step.num}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-body font-bold text-lg text-foreground mb-2">{step.title}</h4>
                        <p className="font-body text-base text-foreground/70 font-medium leading-relaxed mb-3">{step.desc}</p>
                        {"links" in step && step.links && (
                          <div className="space-y-2 mb-3">
                            {step.links.map((link, j) => (
                              <a
                                key={j}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block font-body font-bold text-sm text-primary hover:text-primary/80 underline transition-colors"
                              >
                                → {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                        {"contacts" in step && step.contacts && (
                          <div className="space-y-1 mb-3">
                            {step.contacts.map((c2, j) => (
                              <p key={j} className="font-mono text-sm text-foreground/60 font-medium">{c2}</p>
                            ))}
                          </div>
                        )}
                        {"extra" in step && step.extra && (
                          <p className="font-body text-sm text-foreground/50 font-medium italic">{step.extra}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                  <p className="font-body text-sm text-foreground/80 font-bold">⚠️ {c.importNotice}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://information.enagic.com/pdf/HOW_TO_MAKE_PAYMENT_FOR_OVERSEAS_EMGUARDE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-sm text-primary hover:text-primary/80 underline"
                  >
                    📄 {c.paymentGuide}
                  </a>
                  <a
                    href="https://information.enagic.com/pdf/Cooling-Off-Period.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-sm text-primary hover:text-primary/80 underline"
                  >
                    📄 {c.coolingOffLink}
                  </a>
                </div>
              </div>
            </div>

            {/* Commission Info */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.commissionTitle}</h3>
                <div className="space-y-6 mb-8">
                  {c.commissions.map((com, i) => (
                    <div key={i} className="glass-card rounded-xl p-6">
                      <h4 className="font-body font-bold text-base text-accent mb-1">{com.type}</h4>
                      <p className="font-body text-sm text-foreground/60 font-medium mb-3">{com.desc}</p>
                      <p className="font-display font-black text-2xl text-foreground">{com.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {c.commissionNotes.map((note, i) => (
                    <p key={i} className="font-body text-sm text-foreground/60 font-medium leading-relaxed">
                      • {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration & Policies */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.registrationTitle}</h3>
                <div className="space-y-4 mb-6">
                  {c.registrationItems.map((item, i) => (
                    <p key={i} className="font-body text-base text-foreground/70 font-medium leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/15">
                  <p className="font-body text-sm text-foreground/70 font-medium leading-relaxed">{c.coolingOff}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EmGuardeSection;
