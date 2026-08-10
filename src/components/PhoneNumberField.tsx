export const COUNTRY_CODES = [
  ["+1", "🇺🇸 USA / Canada (+1)"], ["+57", "🇨🇴 Colombia (+57)"],
  ["+52", "🇲🇽 México (+52)"], ["+34", "🇪🇸 España (+34)"],
  ["+44", "🇬🇧 United Kingdom (+44)"], ["+61", "🇦🇺 Australia (+61)"],
  ["+971", "🇦🇪 UAE (+971)"], ["+55", "🇧🇷 Brasil (+55)"],
  ["+51", "🇵🇪 Perú (+51)"], ["+56", "🇨🇱 Chile (+56)"],
  ["+593", "🇪🇨 Ecuador (+593)"], ["+54", "🇦🇷 Argentina (+54)"],
  ["+58", "🇻🇪 Venezuela (+58)"], ["+591", "🇧🇴 Bolivia (+591)"],
  ["+595", "🇵🇾 Paraguay (+595)"], ["+598", "🇺🇾 Uruguay (+598)"],
  ["+506", "🇨🇷 Costa Rica (+506)"], ["+507", "🇵🇦 Panamá (+507)"],
  ["+502", "🇬🇹 Guatemala (+502)"], ["+503", "🇸🇻 El Salvador (+503)"],
  ["+504", "🇭🇳 Honduras (+504)"], ["+505", "🇳🇮 Nicaragua (+505)"],
  ["+1-809", "🇩🇴 República Dominicana (+1-809)"], ["+1-787", "🇵🇷 Puerto Rico (+1-787)"],
  ["+39", "🇮🇹 Italia (+39)"], ["+33", "🇫🇷 France (+33)"],
  ["+49", "🇩🇪 Deutschland (+49)"], ["+351", "🇵🇹 Portugal (+351)"],
  ["+31", "🇳🇱 Netherlands (+31)"], ["+41", "🇨🇭 Switzerland (+41)"],
  ["+81", "🇯🇵 Japan (+81)"], ["+60", "🇲🇾 Malaysia (+60)"],
  ["+65", "🇸🇬 Singapore (+65)"], ["+63", "🇵🇭 Philippines (+63)"],
  ["+91", "🇮🇳 India (+91)"], ["+27", "🇿🇦 South Africa (+27)"],
] as const;

interface PhoneNumberFieldProps {
  label: string;
  lang: "en" | "es";
  variant?: "kangen" | "emguarde";
}

const PhoneNumberField = ({ label, lang, variant = "kangen" }: PhoneNumberFieldProps) => {
  const focusClass = variant === "emguarde"
    ? "focus:border-emguarde/60 focus:ring-emguarde/15"
    : "focus:border-accent/60 focus:ring-accent/15";

  return (
    <fieldset className="grid gap-2 text-sm font-semibold text-foreground/80 sm:col-span-2">
      <legend>{label}</legend>
      <div className="grid gap-3 sm:grid-cols-[minmax(210px,0.85fr)_minmax(0,1.4fr)]">
        <label className="sr-only" htmlFor={`phone-code-${variant}`}>{lang === "es" ? "Código de país" : "Country calling code"}</label>
        <select required id={`phone-code-${variant}`} name="phoneCountryCode" defaultValue={lang === "es" ? "+57" : "+1"} autoComplete="tel-country-code" className={`h-12 min-w-0 rounded-xl border border-border bg-background/80 px-3 font-normal outline-none transition focus:ring-2 ${focusClass}`}>
          {COUNTRY_CODES.map(([value, country]) => <option key={`${value}-${country}`} value={value}>{country}</option>)}
        </select>
        <label className="sr-only" htmlFor={`phone-number-${variant}`}>{label}</label>
        <input required id={`phone-number-${variant}`} name="phone" type="tel" inputMode="tel" autoComplete="tel-national" placeholder={lang === "es" ? "Número de teléfono" : "Phone number"} className={`h-12 min-w-0 rounded-xl border border-border bg-background/80 px-4 font-normal outline-none transition focus:ring-2 ${focusClass}`} />
      </div>
    </fieldset>
  );
};

export default PhoneNumberField;
