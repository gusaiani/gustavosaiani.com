"use client";

import { useEffect } from "react";

export function FaviconSwitcher() {
  useEffect(() => {
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      const link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
      if (link) {
        link.href = "/favicon-local.svg";
      }
    }
  }, []);
  return null;
}
