import { motion } from "framer-motion";
import emguardeDevice from "@/assets/emguarde-device.png";

interface EmGuardeSectionProps {
  lang: "en" | "es";
}

const EmGuardeSection = ({ lang }: EmGuardeSectionProps) => {

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
      purchaseFlowTitle: "How to Purchase EmGuarde",
      steps: [
        {
          num: "1",
          title: "Make Payment",
          desc: "Pay by credit card (single payment). For US orders visit: shop.enagic-my.com/product/emguarde-us-only/ — For Canada/Mexico orders visit: shop.enagic-my.com/product/emguarde/ — You may select your preferred currency: USD or MYR. You can also add accessories (pouch and USB cable) to be shipped with your order.",
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
        { type: "Kangen Distributors", desc: "(those who have purchased any core products — Kangen Machines, Anespa, Ukon DD or Ukon Sigma)", amount: "$80 USD / per point" },
        { type: "EmGuarde-Only Distributors", desc: "(new distributors who joined by purchasing emGuarde, no core products)", amount: "$65 USD / per point" },
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
      purchaseFlowTitle: "Cómo Comprar EmGuarde",
      steps: [
        {
          num: "1",
          title: "Realizar el Pago",
          desc: "Paga con tarjeta de crédito (pago único). Para pedidos en USA visita: shop.enagic-my.com/product/emguarde-us-only/ — Para pedidos de Canadá/México visita: shop.enagic-my.com/product/emguarde/ — Puedes seleccionar tu moneda preferida: USD o MYR. También puedes agregar accesorios (funda y cable USB) para enviar junto con tu pedido.",
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
        { type: "Distribuidores Kangen", desc: "(quienes han comprado productos principales — Máquinas Kangen, Anespa, Ukon DD o Ukon Sigma)", amount: "$80 USD / por punto" },
        { type: "Distribuidores Solo EmGuarde", desc: "(nuevos distribuidores que se unieron comprando emGuarde, sin productos principales)", amount: "$65 USD / por punto" },
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
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emguarde/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-emguarde/4 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-emguarde font-bold mb-6 text-center"
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
            <span className="text-gradient-emguarde italic">{c.headline2}</span>
          </h2>
        </motion.div>

        {/* Launch badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card font-mono text-xs uppercase tracking-[0.2em] text-emguarde border border-emguarde/20 font-bold">
            <span className="w-2 h-2 rounded-full bg-emguarde animate-pulse" />
            {c.badge}
          </span>
        </motion.div>

        {/* Intro + EmGuarde Image & Video grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.intro}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.intro2}
            </p>
            <p className="text-base md:text-lg text-foreground font-body leading-[1.9] mb-6 font-bold">
              {c.history}
            </p>
            <p className="text-base font-body font-bold text-emguarde mb-4">
              ⚠️ {c.privateImport}
            </p>
            <p className="text-sm text-foreground font-body font-bold">
              {c.contact}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* EmGuarde Device Image */}
            <div className="relative flex items-center justify-center py-8">
              <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
              <img
                src={emguardeDevice}
                alt="EmGuarde Device - EMF Protection"
                className="relative w-full max-w-[280px] mx-auto drop-shadow-2xl"
              />
            </div>

            {/* Videos */}
            <div className="relative">
              <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
              <div className="relative aspect-video rounded-xl overflow-hidden border border-emguarde/20 shadow-deep">
                <iframe
                  src="https://www.youtube.com/embed/rNLBZ1NEtDI"
                  title="EmGuarde Review"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden border border-emguarde/20">
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
            <div className="absolute inset-0 bg-gradient-to-r from-emguarde/15 to-emguarde/10" />
            <div className="relative m-px rounded-2xl bg-secondary p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Price */}
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-emguarde font-bold mb-3">{c.salesDate}</p>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl md:text-6xl font-display font-black text-foreground">{c.price}</span>
                  </div>
                  <p className="text-sm text-foreground font-body font-bold mb-6">{c.priceLocal}</p>

                  <h4 className="font-body font-black text-base text-foreground mb-3">{c.shippingTitle}</h4>
                  <div className="space-y-2 mb-4">
                    {c.shippingItems.map((s, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="font-body font-bold text-sm text-foreground">{s.country}:</span>
                        <span className="font-body text-sm text-foreground font-bold">{s.fee} ({s.method})</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-foreground font-body italic font-bold">{c.shippingNote}</p>
                </div>

                {/* Quick facts */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {c.quickFacts.map((f, i) => (
                    <div key={i} className="glass-card rounded-lg p-4 text-center">
                      <span className="block font-body font-black text-base text-foreground">{f.value}</span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-emguarde mt-1 font-bold">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Buy CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="https://shop.enagic-my.com/product/emguarde-us-only/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="cta-shimmer inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-emguarde text-emguarde-foreground"
            style={{ boxShadow: "var(--shadow-emguarde)" }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            {c.ctaBuy}
          </motion.a>

          <motion.a
            href="https://shop.enagic-my.com/product/emguarde/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 md:px-10 md:py-6 rounded-xl font-body font-black text-sm md:text-base uppercase tracking-[0.1em] border-2 border-emguarde/40 text-emguarde hover:border-emguarde hover:bg-emguarde/10 transition-all duration-300"
          >
            {c.ctaBuyOther}
          </motion.a>
        </motion.div>

        {/* Purchase Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
            {/* Purchase Flow */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emguarde/5 to-emguarde/5" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
                  <h3 className="text-2xl md:text-3xl font-display font-black text-foreground">{c.purchaseFlowTitle}</h3>
                  <span className="inline-flex items-center px-5 py-2 rounded-full bg-emguarde/15 border border-emguarde/30 font-body font-black text-base md:text-lg text-emguarde tracking-wide">{c.distributorId}</span>
                </div>
                <div className="space-y-8">
                  {c.steps.map((step, i) => (
                    <div key={i} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emguarde/20 border border-emguarde/30 flex items-center justify-center">
                        <span className="font-display font-black text-emguarde text-sm">{step.num}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-body font-black text-lg text-foreground mb-2">{step.title}</h4>
                        <p className="font-body text-base text-foreground font-bold leading-relaxed mb-3">{step.desc}</p>
                        {"contacts" in step && step.contacts && (
                          <div className="space-y-1 mb-3">
                            {step.contacts.map((c2, j) => (
                              <p key={j} className="font-mono text-sm text-emguarde font-bold">{c2}</p>
                            ))}
                          </div>
                        )}
                        {"extra" in step && step.extra && (
                          <p className="font-body text-sm text-foreground font-bold italic">{step.extra}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                  <p className="font-body text-sm text-foreground font-bold">⚠️ {c.importNotice}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href="https://information.enagic.com/pdf/HOW_TO_MAKE_PAYMENT_FOR_OVERSEAS_EMGUARDE.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-sm text-emguarde hover:text-emguarde/80 underline"
                  >
                    📄 {c.paymentGuide}
                  </a>
                  <a
                    href="https://information.enagic.com/pdf/Cooling-Off-Period.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body font-bold text-sm text-emguarde hover:text-emguarde/80 underline"
                  >
                    📄 {c.coolingOffLink}
                  </a>
                </div>
              </div>
            </div>

            {/* Commission Info */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emguarde/5 to-emguarde/5" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.commissionTitle}</h3>
                <div className="space-y-6 mb-8">
                  {c.commissions.map((com, i) => (
                    <div key={i} className="glass-card rounded-xl p-6 border border-emguarde/10">
                      <h4 className="font-body font-black text-base text-emguarde mb-1">{com.type}</h4>
                      <p className="font-body text-sm text-foreground font-bold mb-3">{com.desc}</p>
                      <p className="font-display font-black text-2xl text-foreground">{com.amount}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {c.commissionNotes.map((note, i) => (
                    <p key={i} className="font-body text-sm text-foreground font-bold leading-relaxed">
                      • {note}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration & Policies */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emguarde/5 to-transparent" />
              <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.registrationTitle}</h3>
                <div className="space-y-4 mb-6">
                  {c.registrationItems.map((item, i) => (
                    <p key={i} className="font-body text-base text-foreground font-bold leading-relaxed">
                      • {item}
                    </p>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-emguarde/5 border border-emguarde/15">
                  <p className="font-body text-sm text-foreground font-bold leading-relaxed">{c.coolingOff}</p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default EmGuardeSection;
