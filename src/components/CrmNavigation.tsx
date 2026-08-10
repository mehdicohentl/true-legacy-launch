import { BookOpen, CalendarDays, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

const sections = [
  { to: "/admin/kangen-leads", label: "Kangen guides", icon: BookOpen },
  { to: "/admin/emguarde-leads", label: "emGuarde guides", icon: ShieldCheck },
  { to: "/admin/event-registrations", label: "Event registrations", icon: CalendarDays },
];

const CrmNavigation = () => (
  <nav aria-label="CRM sections" className="mt-7 flex flex-wrap gap-2">
    {sections.map(({ to, label, icon: Icon }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          `inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
            isActive
              ? "border-accent/50 bg-accent/10 text-accent"
              : "border-border bg-card/40 text-foreground/55 hover:border-accent/30 hover:text-accent"
          }`
        }
      >
        <Icon className="h-4 w-4" /> {label}
      </NavLink>
    ))}
  </nav>
);

export default CrmNavigation;
