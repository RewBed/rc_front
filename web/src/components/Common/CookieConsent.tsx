"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "artel-cookie-consent";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(localStorage.getItem(STORAGE_KEY) !== "accepted");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent" role="status" aria-live="polite">
      <p>
        Мы используем cookie, чтобы сайт работал корректно и помогал нам
        улучшать сервис.
      </p>
      <button type="button" onClick={accept}>
        Понятно
      </button>
    </div>
  );
}
