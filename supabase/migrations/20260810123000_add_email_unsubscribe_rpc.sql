CREATE OR REPLACE FUNCTION public.unsubscribe_from_true_legacy(token UUID)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  target_email TEXT;
BEGIN
  SELECT email INTO target_email
  FROM public.email_preferences
  WHERE unsubscribe_token = token;

  IF target_email IS NULL THEN
    RETURN FALSE;
  END IF;

  UPDATE public.email_preferences
  SET unsubscribed_at = now(), updated_at = now()
  WHERE email = target_email;

  UPDATE public.email_queue
  SET status = 'cancelled', updated_at = now()
  WHERE recipient_email = target_email AND status = 'pending';

  RETURN TRUE;
END;
$$;

REVOKE ALL ON FUNCTION public.unsubscribe_from_true_legacy(UUID) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.unsubscribe_from_true_legacy(UUID) TO anon, authenticated;
