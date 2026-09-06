import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { BriefcaseBusiness, ChevronDown, ChevronUp, Download, LogOut, Search } from "lucide-react";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import type { Tables } from "@/integrations/supabase/types";
import combinedLogo from "@/assets/combined-logo.png";
import { setPageMeta } from "@/lib/seo";
import CrmNavigation from "@/components/CrmNavigation";
import WhatsAppContactButton from "@/components/WhatsAppContactButton";
import CrmLoginCard from "@/components/CrmLoginCard";
import { isCrmAdminEmail } from "@/lib/crmAuth";

type Application = Tables<"team_applications">;

const TeamApplicationsAdmin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPageMeta("Team Applications | True Legacy CRM", "Private True Legacy team application portal.");
    kangenSupabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoadingSession(false);
    });
    const { data } = kangenSupabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => data.subscription.unsubscribe();
  }, []);

  const isAdmin = isCrmAdminEmail(session?.user.email);

  useEffect(() => {
    if (!isAdmin) return;
    setLoading(true);
    kangenSupabase.from("team_applications").select("*").order("submitted_at", { ascending: false }).then(({ data, error }) => {
      setApplications(data || []);
      if (error) setMessage("The applications could not be loaded. Please refresh or try again.");
      setLoading(false);
    });
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return applications;
    return applications.filter((item) => Object.values(item).join(" ").toLowerCase().includes(query));
  }, [applications, search]);

  const exportCsv = () => {
    const clean = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const header = ["Submitted", "Name", "Email", "Phone", "Country", "Language", "Occupation", "Social", "Entrepreneurial fit", "Commitment", "Business experience", "Growth investment", "Income goal", "Motivation", "Investment level", "Start timeline", "Strategy call commitment", "Additional message"];
    const rows = filtered.map((item) => [item.submitted_at, item.full_name, item.email, item.phone, item.country, item.language.toUpperCase(), item.occupation, item.social_handle, item.entrepreneurial_fit, item.commitment_level, item.business_experience, item.growth_investment, item.income_goal, item.motivation, `$${item.investment_level}`, item.start_timeline, item.strategy_call_commitment ? "Yes" : "No", item.additional_message || ""]);
    const csv = [header, ...rows].map((row) => row.map((value) => clean(String(value))).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `team-applications-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  if (loadingSession) return <div className="min-h-screen bg-background" />;

  if (!session || !isAdmin) {
    return <CrmLoginCard message={message} redirectPath="/admin/team-applications" setMessage={setMessage} />;
  }

  const detailLabel = (label: string, value: string | null) => <div className="rounded-xl border border-border/70 bg-background/60 p-4"><p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p><p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground/80">{value || "—"}</p></div>;

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between"><div><img src={combinedLogo} alt="True Legacy" className="mb-6 h-12" /><p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Internal CRM</p><h1 className="mt-2 text-3xl font-black md:text-5xl">Team applications</h1><p className="mt-2 text-sm text-foreground/50">Signed in as {session.user.email}</p></div><button onClick={() => kangenSupabase.auth.signOut()} className="inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:border-accent/40 hover:text-accent"><LogOut className="h-4 w-4" /> Sign out</button></header>
        <CrmNavigation />
        <section className="mt-8 grid gap-4 sm:grid-cols-3"><div className="rounded-2xl border border-border bg-card/60 p-5"><BriefcaseBusiness className="h-5 w-5 text-accent" /><p className="mt-4 text-3xl font-black">{applications.length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Total applications</p></div><div className="rounded-2xl border border-border bg-card/60 p-5"><p className="font-mono text-xs text-accent">READY</p><p className="mt-4 text-3xl font-black">{applications.filter((item) => item.commitment_level === "committed").length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Fully committed</p></div><div className="rounded-2xl border border-border bg-card/60 p-5"><p className="font-mono text-xs text-accent">CALL</p><p className="mt-4 text-3xl font-black">{applications.filter((item) => item.strategy_call_commitment).length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Committed to strategy call</p></div></section>
        <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/50"><div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between"><label className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 sm:max-w-md"><Search className="h-4 w-4 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search applications" className="w-full bg-transparent text-sm outline-none" /></label><button onClick={exportCsv} disabled={!filtered.length} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-accent/30 px-4 text-sm font-bold text-accent hover:bg-accent/10 disabled:opacity-40"><Download className="h-4 w-4" /> Export CSV</button></div>
          <div className="overflow-x-auto"><table className="w-full min-w-[1180px] text-left text-sm"><thead className="bg-background/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><tr>{["Submitted", "Applicant", "Phone", "Country", "Commitment", "Investment", "Timeline", "Contact", "Details"].map((label) => <th key={label} className="px-5 py-4 font-medium">{label}</th>)}</tr></thead><tbody className="divide-y divide-border/70">{filtered.map((item) => <tr key={item.id} className="group"><td className="whitespace-nowrap px-5 py-4 text-foreground/55">{new Date(item.submitted_at).toLocaleString()}</td><td className="px-5 py-4"><p className="font-bold">{item.full_name}</p><a href={`mailto:${item.email}`} className="text-xs text-accent hover:underline">{item.email}</a></td><td className="px-5 py-4"><a href={`tel:${item.phone}`} className="hover:text-accent">{item.phone}</a></td><td className="px-5 py-4">{item.country}</td><td className="px-5 py-4"><span className={`rounded-full px-2.5 py-1 font-mono text-xs ${item.commitment_level === "committed" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>{item.commitment_level}</span></td><td className="px-5 py-4 font-bold">${item.investment_level}</td><td className="px-5 py-4">{item.start_timeline}</td><td className="px-5 py-4"><WhatsAppContactButton phone={item.phone} message={item.language === "es" ? `Hola ${item.full_name.split(" ")[0]}, soy Mehdi de True Legacy. Gracias por enviar tu solicitud para unirte a nuestro equipo. Me gustaría conversar sobre tus objetivos y los próximos pasos. ¿Es un buen momento para hablar?` : `Hi ${item.full_name.split(" ")[0]}, this is Mehdi from True Legacy. Thank you for submitting your application to join our team. I’d like to connect about your goals and next steps. Is now a good time to chat?`} /></td><td className="px-5 py-4"><button onClick={() => setExpanded(expanded === item.id ? null : item.id)} className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-bold hover:border-accent/35 hover:text-accent">View {expanded === item.id ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}</button></td></tr>).flatMap((row, index) => {
            const item = filtered[index];
            if (expanded !== item.id) return [row];
            return [row, <tr key={`${item.id}-details`}><td colSpan={9} className="bg-background/45 p-5"><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{detailLabel("Occupation", item.occupation)}{detailLabel("Social handle", item.social_handle)}{detailLabel("Language", item.language.toUpperCase())}{detailLabel("Entrepreneurial fit", item.entrepreneurial_fit)}{detailLabel("Growth investment", item.growth_investment)}{detailLabel("Income goal", item.income_goal)}{detailLabel("Business experience", item.business_experience)}{detailLabel("Motivation", item.motivation)}{detailLabel("Strategy call commitment", item.strategy_call_commitment ? "Yes" : "No")}{detailLabel("Additional message", item.additional_message)}</div></td></tr>];
          })}</tbody></table></div>
          {!loading && !filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">No team applications found.</div>}{loading && <div className="p-12 text-center text-sm text-muted-foreground">Loading applications...</div>}{message && <div className="border-t border-border p-4 text-sm text-destructive">{message}</div>}
        </section>
      </div>
    </main>
  );
};

export default TeamApplicationsAdmin;
