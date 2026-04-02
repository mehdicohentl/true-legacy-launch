/**
 * Minimal page-level SEO helper for SPA meta management.
 * Sets document.title and updates the meta[name="description"] tag in place.
 */
export function setPageMeta(title: string, description: string): void {
  document.title = title;
  const descTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (descTag) descTag.setAttribute("content", description);

  // Also sync Open Graph / Twitter
  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", title);
  const twitterTitle = document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute("content", title);
  const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", description);
  const twitterDesc = document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute("content", description);
}
