import { kangenSupabase } from "@/integrations/supabase/kangenClient";

export type LeadEmailType = "kangen" | "emguarde" | "event" | "team";

export const deliverLeadEmail = async (leadType: LeadEmailType, email: string) => {
  try {
    const { error } = await kangenSupabase.functions.invoke("crm-email", {
      body: { mode: "deliver", leadType, email: email.trim().toLowerCase() },
    });
    if (error) console.warn("Confirmation email will be retried automatically.", error);
  } catch (error) {
    console.warn("Confirmation email will be retried automatically.", error);
  }
};
