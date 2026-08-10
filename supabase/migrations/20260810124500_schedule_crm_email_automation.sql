CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

DO $$
DECLARE
  existing_job BIGINT;
BEGIN
  SELECT jobid INTO existing_job FROM cron.job WHERE jobname = 'true-legacy-email-nurture' LIMIT 1;
  IF existing_job IS NOT NULL THEN
    PERFORM cron.unschedule(existing_job);
  END IF;
END;
$$;

SELECT cron.schedule(
  'true-legacy-email-nurture',
  '*/10 * * * *',
  $$
  SELECT net.http_post(
    url := 'https://mzadjxuylfphlpytmwfs.supabase.co/functions/v1/crm-email',
    headers := '{"Content-Type":"application/json","Authorization":"Bearer sb_publishable_ls2RRkWYCU5RVdbGRg-c1A_koMxCwA1"}'::jsonb,
    body := '{"mode":"process_due_cron"}'::jsonb,
    timeout_milliseconds := 10000
  );
  $$
);
