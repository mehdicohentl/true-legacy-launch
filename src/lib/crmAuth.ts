export const CRM_ADMIN_EMAILS = new Set([
  "mehdicohen1@proton.me",
  "truelegacyworld@proton.me",
  "truelegacyworld@gmail.com",
]);

export const isCrmAdminEmail = (email?: string | null) => CRM_ADMIN_EMAILS.has(email?.toLowerCase() || "");
