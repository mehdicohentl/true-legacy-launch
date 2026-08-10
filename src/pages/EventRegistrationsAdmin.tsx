import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { CalendarDays, Download, LockKeyhole, LogOut, Search } from "lucide-react";
import { kangenSupabase } from "@/integrations/supabase/kangenClient";
import type { Tables } from "@/integrations/supabase/types";
import combinedLogo from "@/assets/combined-logo.png";
import { setPageMeta } from "@/lib/seo";
import CrmNavigation from "@/components/CrmNavigation";

const ADMIN_EMAIL = "truelegacyworld@gmail.com";
type Registration = Tables<"event_registrations">;

const EventRegistrationsAdmin = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [loadingSession, setLoadingSession] = useState(true);
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setPageMeta("Event Registrations | True Legacy CRM", "Private True Legacy event registration portal.");
    kangenSupabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoadingSession(false);
    });
    const { data } = kangenSupabase.auth.onAuthStateChange((_event, nextSession) => setSession(nextSession));
    return () => data.subscription.unsubscribe();
  }, []);

  const isAdmin = session?.user.email?.toLowerCase() === ADMIN_EMAIL;

  useEffect(() => {
    if (!isAdmin) return;
    setLoading(true);
    kangenSupabase
      .from("event_registrations")
      .select("*")
      .order("registered_at", { ascending: false })
      .then(({ data, error }) => {
        setRegistrations(data || []);
        if (error) setMessage("The registrations could not be loaded. Please refresh or try again.");
        setLoading(false);
      });
  }, [isAdmin]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return registrations;
    return registrations.filter((registration) =>
      [registration.full_name, registration.email, registration.phone, registration.event_interest, registration.heard_from, registration.language]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [registrations, search]);

  const signIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage("");
    const email = String(new FormData(event.currentTarget).get("email") || "").trim().toLowerCase();
    if (email !== ADMIN_EMAIL) {
      setMessage("This portal is restricted to the authorized True Legacy administrator.");
      return;
    }
    const { error } = await kangenSupabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/admin/event-registrations` },
    });
    setMessage(error ? "The secure sign-in link could not be sent. Please try again." : "Check your email for your secure sign-in link.");
  };

  const exportCsv = () => {
    const clean = (value: string) => `"${value.replace(/"/g, '""')}"`;
    const header = ["Registered", "Name", "Email", "Phone", "Event", "Language", "Heard from"];
    const rows = filtered.map((item) => [item.registered_at, item.full_name, item.email, item.phone, item.event_interest.toUpperCase(), item.language.toUpperCase(), item.heard_from]);
    const csv = [header, ...rows].map((row) => row.map((value) => clean(String(value))).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `event-registrations-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  if (loadingSession) return <div className="min-h-screen bg-background" />;

  if (!session || !isAdmin) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="w-full max-w-md rounded-3xl border border-accent/20 bg-card/70 p-8 text-center shadow-glow">
          <img src={combinedLogo} alt="True Legacy" className="mx-auto h-16" />
          <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent"><LockKeyhole className="h-7 w-7" /></div>
          <h1 className="mt-5 text-3xl font-black">Private CRM portal</h1>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">Enter the authorized administrator email. We will send a secure sign-in link—no password required.</p>
          <form onSubmit={signIn} className="mt-7 grid gap-4">
            <input required name="email" type="email" autoComplete="email" placeholder="Administrator email" defaultValue={ADMIN_EMAIL} className="h-12 rounded-xl border border-border bg-background px-4 outline-none focus:border-accent/60" />
            <button className="h-12 rounded-xl bg-primary font-black uppercase tracking-wider text-primary-foreground shadow-glow">Send secure sign-in link</button>
          </form>
          {message && <p className="mt-4 text-sm text-accent">{message}</p>}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={combinedLogo} alt="True Legacy" className="mb-6 h-12" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-accent">Internal CRM</p>
            <h1 className="mt-2 text-3xl font-black md:text-5xl">Event registrations</h1>
            <p className="mt-2 text-sm text-foreground/50">Signed in as {session.user.email}</p>
          </div>
          <button onClick={() => kangenSupabase.auth.signOut()} className="inline-flex items-center gap-2 self-start rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground/70 hover:border-accent/40 hover:text-accent"><LogOut className="h-4 w-4" /> Sign out</button>
        </header>

        <CrmNavigation />

        <section className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/60 p-5"><CalendarDays className="h-5 w-5 text-accent" /><p className="mt-4 text-3xl font-black">{registrations.length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Total registrations</p></div>
          <div className="rounded-2xl border border-border bg-card/60 p-5"><p className="font-mono text-xs text-accent">GLOBAL</p><p className="mt-4 text-3xl font-black">{registrations.filter((item) => item.event_interest === "global").length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Wednesday call</p></div>
          <div className="rounded-2xl border border-border bg-card/60 p-5"><p className="font-mono text-xs text-accent">LATAM</p><p className="mt-4 text-3xl font-black">{registrations.filter((item) => item.event_interest === "latam").length}</p><p className="text-xs uppercase tracking-wider text-muted-foreground">Thursday call</p></div>
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/50">
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 sm:max-w-md"><Search className="h-4 w-4 text-muted-foreground" /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, email, phone, event, or source" className="w-full bg-transparent text-sm outline-none" /></label>
            <button onClick={exportCsv} disabled={!filtered.length} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-accent/30 px-4 text-sm font-bold text-accent hover:bg-accent/10 disabled:opacity-40"><Download className="h-4 w-4" /> Export CSV</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[950px] text-left text-sm">
              <thead className="bg-background/60 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><tr>{["Registered", "Name", "Email", "Phone", "Event", "Language", "Heard from"].map((label) => <th key={label} className="px-5 py-4 font-medium">{label}</th>)}</tr></thead>
              <tbody className="divide-y divide-border/70">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-accent/[0.03]">
                    <td className="whitespace-nowrap px-5 py-4 text-foreground/55">{new Date(item.registered_at).toLocaleString()}</td>
                    <td className="px-5 py-4 font-bold">{item.full_name}</td>
                    <td className="px-5 py-4"><a href={`mailto:${item.email}`} className="text-accent hover:underline">{item.email}</a></td>
                    <td className="px-5 py-4"><a href={`tel:${item.phone}`} className="hover:text-accent">{item.phone}</a></td>
                    <td className="px-5 py-4"><span className="rounded-full bg-accent/10 px-2.5 py-1 font-mono text-xs text-accent">{item.event_interest.toUpperCase()}</span></td>
                    <td className="px-5 py-4">{item.language.toUpperCase()}</td>
                    <td className="px-5 py-4 text-foreground/70">{item.heard_from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {!loading && !filtered.length && <div className="p-12 text-center text-sm text-muted-foreground">No event registrations found.</div>}
          {loading && <div className="p-12 text-center text-sm text-muted-foreground">Loading registrations...</div>}
          {message && <div className="border-t border-border p-4 text-sm text-destructive">{message}</div>}
        </section>
      </div>
    </main>
  );
};

export default EventRegistrationsAdmin;
