-- Let the shared CRM administrator roles authorize the existing Mehdi CRM.
INSERT INTO public.crm_admin_allowlist (email)
VALUES ('mehdicohen1@proton.me')
ON CONFLICT DO NOTHING;

INSERT INTO public.crm_memberships (user_id, role)
SELECT id, 'admin'
FROM auth.users
WHERE lower(email) IN (SELECT email FROM public.crm_admin_allowlist)
ON CONFLICT (user_id) DO UPDATE
SET role = 'admin', distributor_id = NULL, active = true;

DROP POLICY IF EXISTS "True Legacy admin can view Kangen guide leads" ON public.kangen_pdf_leads;
CREATE POLICY "CRM admins can view Kangen guide leads"
  ON public.kangen_pdf_leads FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can view emGuarde guide leads" ON public.emguarde_pdf_leads;
CREATE POLICY "CRM admins can view emGuarde guide leads"
  ON public.emguarde_pdf_leads FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can view event registrations" ON public.event_registrations;
CREATE POLICY "CRM admins can view event registrations"
  ON public.event_registrations FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can view team applications" ON public.team_applications;
CREATE POLICY "CRM admins can view team applications"
  ON public.team_applications FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can view email preferences" ON public.email_preferences;
CREATE POLICY "CRM admins can view email preferences"
  ON public.email_preferences FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can update email preferences" ON public.email_preferences;
CREATE POLICY "CRM admins can update email preferences"
  ON public.email_preferences FOR UPDATE TO authenticated
  USING (public.crm_is_admin())
  WITH CHECK (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can view email activity" ON public.email_queue;
CREATE POLICY "CRM admins can view email activity"
  ON public.email_queue FOR SELECT TO authenticated
  USING (public.crm_is_admin());

DROP POLICY IF EXISTS "True Legacy admin can update email activity" ON public.email_queue;
CREATE POLICY "CRM admins can update email activity"
  ON public.email_queue FOR UPDATE TO authenticated
  USING (public.crm_is_admin())
  WITH CHECK (public.crm_is_admin());
