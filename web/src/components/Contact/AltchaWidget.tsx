"use client";

import { useEffect, useRef, useState } from "react";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";

type AltchaWidgetProps = {
  onVerified: (payload: string) => void;
};

export default function AltchaWidget({ onVerified }: AltchaWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let disposed = false;
    let widget: HTMLElement | null = null;

    const mountWidget = async () => {
      try {
        await import("altcha");
        await import("altcha/i18n/ru");
        if (disposed || !containerRef.current) return;

        widget = document.createElement("altcha-widget");
        widget.setAttribute("auto", "off");
        widget.setAttribute("challenge", `${API}/contact/challenge`);
        widget.setAttribute("configuration", JSON.stringify({ minDuration: 800 }));
        widget.setAttribute("display", "standard");
        widget.setAttribute("language", "ru");
        widget.setAttribute("name", "altcha");
        widget.setAttribute("type", "checkbox");
        widget.setAttribute("workers", "2");
        widget.addEventListener("verified", handleVerified);
        containerRef.current.replaceChildren(widget);
      } catch {
        if (!disposed) setLoadFailed(true);
      }
    };

    const handleVerified = (event: Event) => {
      const payload = (event as CustomEvent<{ payload?: string }>).detail
        ?.payload;
      if (payload) onVerified(payload);
    };

    void mountWidget();

    return () => {
      disposed = true;
      widget?.removeEventListener("verified", handleVerified);
      widget?.remove();
    };
  }, [onVerified]);

  if (loadFailed) {
    return (
      <p className="contact-form-status contact-form-status-error" role="alert">
        Не удалось загрузить проверку. Обновите страницу и попробуйте снова.
      </p>
    );
  }

  return <div className="contact-captcha" ref={containerRef} />;
}
