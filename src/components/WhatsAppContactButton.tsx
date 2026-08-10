import { MessageCircle } from "lucide-react";

interface WhatsAppContactButtonProps {
  phone: string;
  message: string;
  label?: string;
  variant?: "accent" | "emguarde";
}

const WhatsAppContactButton = ({ phone, message, label = "WhatsApp", variant = "accent" }: WhatsAppContactButtonProps) => {
  const normalizedPhone = phone.replace(/\D/g, "").replace(/^00/, "");
  const href = normalizedPhone ? `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}` : undefined;
  const colors = variant === "emguarde"
    ? "border-emguarde/35 text-emguarde hover:bg-emguarde/10"
    : "border-emerald-400/35 text-emerald-400 hover:bg-emerald-400/10";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} ${phone}`}
      className={`inline-flex min-h-9 items-center justify-center gap-2 whitespace-nowrap rounded-lg border px-3 py-2 text-xs font-bold transition ${colors} ${!href ? "pointer-events-none opacity-40" : ""}`}
    >
      <MessageCircle className="h-4 w-4" /> {label}
    </a>
  );
};

export default WhatsAppContactButton;
