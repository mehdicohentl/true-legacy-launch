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
