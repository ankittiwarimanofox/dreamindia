// GA4 helpers. The gtag snippet is loaded in app/layout.tsx.
// Events (mark these as Key events in GA4 > Admin > Events):
//   whatsapp_click  - any click on a WhatsApp link/button
//   phone_click     - any click on a tel: link or "Call" button
//   generate_lead   - enquiry form submitted successfully
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, { page_path: window.location.pathname, ...params });
}

export const trackPhone = (label = "call") => trackEvent("phone_click", { link_text: label });
export const trackWhatsApp = (label = "whatsapp") => trackEvent("whatsapp_click", { link_text: label });
export const trackLead = (source: string) =>
  trackEvent("generate_lead", { form_source: source, currency: "INR" });
