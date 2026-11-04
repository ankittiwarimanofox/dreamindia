"use client";

import { useEffect } from "react";
import { trackPhone, trackWhatsApp } from "@/app/lib/analytics";

/**
 * Site-wide click tracking for GA4: one listener catches every tel: and WhatsApp link,
 * including links added to pages later. Renders nothing.
 */
export default function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      const label = (a.textContent || a.getAttribute("aria-label") || "").trim().slice(0, 60);
      if (href.startsWith("tel:")) trackPhone(label || href);
      else if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/.test(href)) trackWhatsApp(label || "whatsapp");
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
