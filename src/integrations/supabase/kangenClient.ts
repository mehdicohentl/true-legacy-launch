import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const KANGEN_SUPABASE_URL = "https://mzadjxuylfphlpytmwfs.supabase.co";
const KANGEN_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_ls2RRkWYCU5RVdbGRg-c1A_koMxCwA1";

export const kangenSupabase = createClient<Database>(
  KANGEN_SUPABASE_URL,
  KANGEN_SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      storage: localStorage,
      storageKey: "true-legacy-kangen-crm-auth",
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  },
);
