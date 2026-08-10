CREATE TABLE public.email_preferences (
  email TEXT PRIMARY KEY CHECK (email = lower(email)),
  unsubscribe_token UUID NOT NULL DEFAULT gen_random_uuid() UNIQUE,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.email_queue (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  source_lead_id UUID NOT NULL,
  lead_type TEXT NOT NULL CHECK (lead_type IN ('kangen', 'emguarde', 'event', 'team')),
  template_key TEXT NOT NULL,
  recipient_email TEXT NOT NULL CHECK (recipient_email = lower(recipient_email)),
  recipient_name TEXT NOT NULL,
  language TEXT NOT NULL CHECK (language IN ('en', 'es')),
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  scheduled_for TIMESTAMPTZ NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'sending', 'sent', 'failed', 'cancelled')),
  attempts INTEGER NOT NULL DEFAULT 0,
  provider_message_id TEXT,
  last_error TEXT,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source_lead_id, lead_type, template_key)
);

CREATE INDEX email_queue_due_idx ON public.email_queue (status, scheduled_for);
CREATE INDEX email_queue_recipient_idx ON public.email_queue (recipient_email, created_at DESC);

ALTER TABLE public.email_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_queue ENABLE ROW LEVEL SECURITY;

CREATE POLICY "True Legacy admin can view email preferences"
  ON public.email_preferences FOR SELECT TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');

CREATE POLICY "True Legacy admin can update email preferences"
  ON public.email_preferences FOR UPDATE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com')
  WITH CHECK ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');

CREATE POLICY "True Legacy admin can view email activity"
  ON public.email_queue FOR SELECT TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');

CREATE POLICY "True Legacy admin can update email activity"
  ON public.email_queue FOR UPDATE TO authenticated
  USING ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com')
  WITH CHECK ((auth.jwt() ->> 'email') = 'truelegacyworld@gmail.com');

CREATE OR REPLACE FUNCTION public.queue_true_legacy_emails()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_data JSONB;
  normalized_email TEXT;
  recipient TEXT;
BEGIN
  new_data := to_jsonb(NEW);
  normalized_email := lower(trim(new_data ->> 'email'));
  recipient := COALESCE(
    NULLIF(trim(new_data ->> 'full_name'), ''),
    trim(COALESCE(new_data ->> 'first_name', '') || ' ' || COALESCE(new_data ->> 'last_name', ''))
  );

  INSERT INTO public.email_preferences (email)
  VALUES (normalized_email)
  ON CONFLICT (email) DO UPDATE SET updated_at = now();

  IF TG_TABLE_NAME = 'kangen_pdf_leads' AND COALESCE((new_data ->> 'consent')::BOOLEAN, false) THEN
    INSERT INTO public.email_queue (source_lead_id, lead_type, template_key, recipient_email, recipient_name, language, payload, scheduled_for)
    VALUES
      ((new_data ->> 'id')::UUID, 'kangen', 'kangen_guide', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now()),
      ((new_data ->> 'id')::UUID, 'kangen', 'kangen_education', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now() + interval '2 days'),
      ((new_data ->> 'id')::UUID, 'kangen', 'kangen_conversation', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now() + interval '5 days');
  ELSIF TG_TABLE_NAME = 'emguarde_pdf_leads' AND COALESCE((new_data ->> 'consent')::BOOLEAN, false) THEN
    INSERT INTO public.email_queue (source_lead_id, lead_type, template_key, recipient_email, recipient_name, language, payload, scheduled_for)
    VALUES
      ((new_data ->> 'id')::UUID, 'emguarde', 'emguarde_guide', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now()),
      ((new_data ->> 'id')::UUID, 'emguarde', 'emguarde_research', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now() + interval '2 days'),
      ((new_data ->> 'id')::UUID, 'emguarde', 'emguarde_conversation', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('first_name', new_data ->> 'first_name'), now() + interval '5 days');
  ELSIF TG_TABLE_NAME = 'event_registrations' THEN
    INSERT INTO public.email_queue (source_lead_id, lead_type, template_key, recipient_email, recipient_name, language, payload)
    VALUES ((new_data ->> 'id')::UUID, 'event', 'event_confirmation', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('event_interest', new_data ->> 'event_interest'));
  ELSIF TG_TABLE_NAME = 'team_applications' THEN
    INSERT INTO public.email_queue (source_lead_id, lead_type, template_key, recipient_email, recipient_name, language, payload)
    VALUES ((new_data ->> 'id')::UUID, 'team', 'team_confirmation', normalized_email, recipient, new_data ->> 'language', jsonb_build_object('start_timeline', new_data ->> 'start_timeline'));
  END IF;

  RETURN NEW;
END;
$$;

CREATE TRIGGER queue_kangen_lead_emails
  AFTER INSERT ON public.kangen_pdf_leads
  FOR EACH ROW EXECUTE FUNCTION public.queue_true_legacy_emails();

CREATE TRIGGER queue_emguarde_lead_emails
  AFTER INSERT ON public.emguarde_pdf_leads
  FOR EACH ROW EXECUTE FUNCTION public.queue_true_legacy_emails();

CREATE TRIGGER queue_event_registration_email
  AFTER INSERT ON public.event_registrations
  FOR EACH ROW EXECUTE FUNCTION public.queue_true_legacy_emails();

CREATE TRIGGER queue_team_application_email
  AFTER INSERT ON public.team_applications
  FOR EACH ROW EXECUTE FUNCTION public.queue_true_legacy_emails();
