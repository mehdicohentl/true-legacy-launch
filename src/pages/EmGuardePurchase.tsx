import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import combinedLogo from "@/assets/combined-logo.png";
import emguardeDevice from "@/assets/emguarde-device.png";

interface EmGuardePurchaseProps {
  lang: "en" | "es";
}

const EmGuardePurchase = ({ lang }: EmGuardePurchaseProps) => {
  const navigate = useNavigate();

  const t = {
    en: {
      back: "← Back",
      headline: "How to Purchase",
      headline2: "EmGuarde",
      distributorId: "Distributor ID# 37000004829",
      price: "$1,520 USD",
      priceLocal: "(MYR 6,620)",
      salesDate: "Sales Start Date: November 1, 2024",
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
      purchaseFlowTitle: "Step-by-Step Purchase Guide",
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
          contacts: ["USA: goc.usa@enagic.com", "Canada: goc.can@enagic.com", "Mexico: goc.mx@enagic.com"],
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
      privateImport: "Please note that this is a private import product from Malaysia.",
      contact: "For more information, contact emgsales@enagic-my.com or WhatsApp: +60133096234",
    },
    es: {
      back: "← Volver",
      headline: "Cómo Comprar",
      headline2: "EmGuarde",
      distributorId: "ID de Distribuidor# 37000004829",
      price: "$1,520 USD",
      priceLocal: "(MYR 6,620)",
      salesDate: "Fecha de Inicio de Ventas: 1 de Noviembre, 2024",
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
      purchaseFlowTitle: "Guía de Compra Paso a Paso",
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
          contacts: ["USA: goc.usa@enagic.com", "Canadá: goc.can@enagic.com", "México: goc.mx@enagic.com"],
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
      privateImport: "Ten en cuenta que este es un producto de importación privada desde Malasia.",
      contact: "Para más información, contacta emgsales@enagic-my.com o WhatsApp: +60133096234",
    },
  };

  const c = t[lang];

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-3.5 px-4">
          <img src={combinedLogo} alt="Mehdi Cohen · True Legacy" className="h-14 md:h-18 w-auto" />
          <button
            onClick={() => navigate(lang === "en" ? "/en" : "/es")}
            className="font-mono text-xs font-bold text-foreground/70 hover:text-foreground uppercase tracking-[0.15em]"
          >
            {c.back}
          </button>
        </div>
      </div>

      <div className="pt-28 pb-20 container mx-auto px-4 relative">
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-emguarde/5 rounded-full blur-[150px]" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 relative z-10"
        >
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-display font-black leading-[0.92]">
            <span className="text-foreground">{c.headline}</span><br />
            <span className="text-gradient-emguarde italic">{c.headline2}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 relative z-10"
        >
          <span className="inline-flex items-center px-5 py-2 rounded-full bg-emguarde/15 border border-emguarde/30 font-body font-black text-base md:text-lg text-emguarde tracking-wide">
            {c.distributorId}
          </span>
        </motion.div>

        {/* Device image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative flex items-center justify-center py-8 mb-12"
        >
          <div className="absolute -inset-3 bg-emguarde/8 rounded-2xl blur-2xl" />
          <img src={emguardeDevice} alt="EmGuarde Device" className="relative w-full max-w-[220px] mx-auto drop-shadow-2xl" />
        </motion.div>

        {/* Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 relative z-10"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emguarde/15 to-emguarde/10" />
            <div className="relative m-px rounded-2xl bg-secondary p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
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

        {/* Purchase Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-12 relative z-10"
        >
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emguarde/5 to-emguarde/5" />
            <div className="relative m-px rounded-2xl bg-card p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-8">{c.purchaseFlowTitle}</h3>
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
                <a href="https://information.enagic.com/pdf/HOW_TO_MAKE_PAYMENT_FOR_OVERSEAS_EMGUARDE.pdf" target="_blank" rel="noopener noreferrer" className="font-body font-bold text-sm text-emguarde hover:text-emguarde/80 underline">
                  📄 {c.paymentGuide}
                </a>
                <a href="https://information.enagic.com/pdf/Cooling-Off-Period.pdf" target="_blank" rel="noopener noreferrer" className="font-body font-bold text-sm text-emguarde hover:text-emguarde/80 underline">
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
                  <p key={i} className="font-body text-sm text-foreground font-bold leading-relaxed">• {note}</p>
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
                  <p key={i} className="font-body text-base text-foreground font-bold leading-relaxed">• {item}</p>
                ))}
              </div>
              <div className="p-4 rounded-xl bg-emguarde/5 border border-emguarde/15">
                <p className="font-body text-sm text-foreground font-bold leading-relaxed">{c.coolingOff}</p>
              </div>
            </div>
          </div>

          {/* Private import notice */}
          <div className="text-center space-y-2 mb-8">
            <p className="text-base font-body font-bold text-emguarde">⚠️ {c.privateImport}</p>
            <p className="text-sm text-foreground font-body font-bold">{c.contact}</p>
          </div>

          {/* Book a call CTA */}
          <div className="flex justify-center">
            <motion.a
              href="https://calendly.com/aquacharged/true-legacy-one-on-one"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 md:px-12 md:py-6 rounded-xl font-body font-black text-sm md:text-lg uppercase tracking-[0.1em] bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {lang === "en" ? "Book an EmGuarde Info Call" : "Agenda una Llamada Informativa"}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp for Spanish */}
      {lang === "es" && (
        <a
          href="https://wa.me/+573001844049"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
        >
          <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current">
            <path d="M16.004 2.002c-7.72 0-13.996 6.276-13.996 13.996 0 2.468.655 4.878 1.9 6.99L2 30l7.212-1.89A13.94 13.94 0 0016.004 30c7.72 0 13.996-6.276 13.996-13.998S23.724 2.002 16.004 2.002zm0 25.594a11.58 11.58 0 01-5.908-1.62l-.424-.252-4.39 1.15 1.172-4.276-.276-.44a11.567 11.567 0 01-1.776-6.16c0-6.396 5.204-11.6 11.602-11.6 6.398 0 11.6 5.204 11.6 11.6 0 6.398-5.202 11.598-11.6 11.598zm6.36-8.686c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.552-.174-.784.174-.232.348-.9 1.134-1.102 1.366-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.153-.71.158-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-.1074-2.586-.282-.68-.57-.588-.784-.598l-.668-.012c-.232 0-.61.088-.928.436-.32.348-1.218 1.19-1.218 2.9s1.248 3.364 1.422 3.596c.174.232 2.456 3.75 5.95 5.26.832.358 1.482.572 1.988.732.836.266 1.596.228 2.198.138.67-.1 2.062-.844 2.352-1.66.29-.814.29-1.514.204-1.66-.088-.144-.32-.232-.668-.406z" />
          </svg>
        </a>
      )}
    </div>
  );
};

export default EmGuardePurchase;
