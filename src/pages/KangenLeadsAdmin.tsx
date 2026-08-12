import { useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { Download, LogOut, Search, Users } from "lucide-react";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import type { Tables } from "@/integrations/supabase/types";
import combinedLogo from "@/assets/combined-logo.png";
import { setPageMeta } from "@/lib/seo";
import CrmNavigation from "@/components/CrmNavigation";
import WhatsAppContactButton from "@/components/WhatsAppContactButton";
import CrmLoginCard from "@/components/CrmLoginCard";
import { isCrmAdminEmail } from "@/lib/crmAuth";

type Lead = Tables<"kangen_pdf_leads">;

const KangenLeadsAdmin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPageMeta("Kangen Guide Leads | True Legacy", "Private True Legacy lead portal.");
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
    setLoadingLeads(true);
    kangenSupabase
      .from("kangen_pdf_leads")
      .select("*")
      .order("registered_at", { ascending: false })
      .then(({ data, error }) => {
        setLeads(data || []);
        if (error) setMessage("The leads could not be loaded. Please refresh or try again.");
        setLoadingLeads(false);
      });
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return leads;
    return leads.filter((lead) =>
      [lead.first_name, lead.last_name, lead.email, lead.phone, lead.country, lead.social_handle || "", lead.language]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [leads, search]);

  const exportCsv = () => {
    const clean = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const header = ["Registered", "First name", "Last name", "Email", "Phone", "Country", "Social handle", "Language"];
    const rows = filtered.map((lead) => [lead.registered_at, lead.first_name, lead.last_name, lead.email, lead.phone, lead.country, lead.social_handle || "", lead.language.toUpperCase()]);
    const csv = [header, ...rows].map((row) => row.map((value) => clean(String(value))).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `kangen-guide-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  if (loadingSession) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!session || !isAdmin) {
    return <CrmLoginCard message={message} redirectPath="/crm" setMessage={setMessage} />;
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={combinedLogo} alt="True Legacy" className="mb-6 h-12" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Internal CRM</p>
            <h1 className="mt-2 text-3xl font-black md:text-5xl">Kangen guide registrations</h1>
            <p className="mt-2 text-sm text-foreground/50">Signed in as {session.user.email}</p>
          </div>
          <button onClick={() => kangenSupabase.auth.signOut()} className="inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:border-accent/40 hover:text-accent">
            <LogOut className="h-4 w-4" /> Sign out
          </button>
        </header>
        <CrmNavigation />

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <Users className="h-5 w-5 text-accent" />
            <p className="mt-4 text-3xl font-black">{leads.length}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Total registrations</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <p className="font-mono text-xs text-accent">EN</p>
            <p className="mt-4 text-3xl font-black">{leads.filter((lead) => lead.language === "en").length}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">English guide</p>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <p className="font-mono text-xs text-accent">ES</p>
            <p className="mt-4 text-3xl font-black">{leads.filter((lead) => lead.language === "es").length}</p>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Spanish guide</p>
          </div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 sm:max-w-md">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, email, phone, country, or social handle" className="w-full bg-transparent text-sm outline-none" />
            </label>
            <button onClick={exportCsv} disabled={!filtered.length} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-accent/30 px-4 text-sm font-bold text-accent hover:bg-accent/10 disabled:opacity-40">
              <Download className="h-4 w-4" /> Export CSV
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px] text-left text-sm">
              <thead className="bg-background/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                <tr>{["Registered", "Name", "Email", "Phone", "Country", "IG / Facebook", "Guide", "Contact"].map((label) => <th key={label} className="px-5 py-4 font-medium">{label}</th>)}</tr>
              </thead>
              <tbody className="divide-y divide-border/70">
                {filtered.map((lead) => (
                  <tr key={lead.id} className="hover:bg-accent/[0.03]">
                    <td className="whitespace-nowrap px-5 py-4 text-foreground/55">{new Date(lead.registered_at).toLocaleString()}</td>
                    <td className="px-5 py-4 font-bold">{lead.first_name} {lead.last_name}</td>
                    <td className="px-5 py-4"><a href={`mailto:${lead.email}`} className="text-accent hover:underline">{lead.email}</a></td>
                    <td className="px-5 py-4"><a href={`tel:${lead.phone}`} className="hover:text-accent">{lead.phone}</a></td>
                    <td className="px-5 py-4">{lead.country}</td>
                    <td className="px-5 py-4 text-foreground/70">{lead.social_handle || "—"}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">{lead.language.toUpperCase()}</span></td>
                    <td className="px-5 py-4"><WhatsAppContactButton phone={lead.phone} message={lead.language === "es" ? `Hola ${lead.first_name}, soy Mehdi de True Legacy. Gracias por descargar nuestra guía de Agua Kangen. Quería saber si tienes alguna pregunta sobre el K8 o los próximos pasos.` : `Hi ${lead.first_name}, this is Mehdi from True Legacy. Thank you for downloading our Kangen Water guide. I wanted to see if you have any questions about the K8 or your next steps.`} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!loadingLeads && !filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">No registrations found.</div>}
          {loadingLeads && <div className="p-12 text-center text-sm text-muted-foreground">Loading registrations...</div>}
          {message && <div className="border-t border-border p-4 text-sm text-destructive">{message}</div>}
        </section>
      </div>
    </main>
  );
};

export default KangenLeadsAdmin;
