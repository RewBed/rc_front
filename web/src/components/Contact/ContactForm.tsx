"use client";

import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useState,
} from "react";
import AltchaWidget from "./AltchaWidget";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";
const EMAIL_PATTERN = "[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}";
const PHONE_PATTERN = "\\+7 \\([0-9]{3}\\) [0-9]{3}-[0-9]{2}-[0-9]{2}";

const formatRussianPhone = (value: string) => {
  let digits = value.replace(/\D/g, "");
  if (!digits) return "";

  if (digits.startsWith("8")) digits = `7${digits.slice(1)}`;
  if (!digits.startsWith("7")) digits = `7${digits}`;

  const nationalNumber = digits.slice(1, 11);
  let formatted = "+7";
  if (nationalNumber.length > 0) {
    formatted += ` (${nationalNumber.slice(0, 3)}`;
  }
  if (nationalNumber.length >= 3) formatted += ")";
  if (nationalNumber.length > 3) {
    formatted += ` ${nationalNumber.slice(3, 6)}`;
  }
  if (nationalNumber.length > 6) {
    formatted += `-${nationalNumber.slice(6, 8)}`;
  }
  if (nationalNumber.length > 8) {
    formatted += `-${nationalNumber.slice(8, 10)}`;
  }

  return formatted;
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type SubmissionStatus =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [altchaPayload, setAltchaPayload] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0);
  const [status, setStatus] = useState<SubmissionStatus>({ type: "idle" });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const nextValue =
      name === "phone"
        ? formatRussianPhone(value)
        : name === "email"
          ? value.replace(/\s/g, "")
          : value;
    setForm((current) => ({ ...current, [name]: nextValue }));
    if (status.type !== "idle") setStatus({ type: "idle" });
  };

  const handleVerified = useCallback((payload: string) => {
    setAltchaPayload(payload);
    setStatus({ type: "idle" });
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status.type === "submitting") return;
    if (!altchaPayload) {
      setStatus({
        type: "error",
        message: "Подтвердите, что вы не робот.",
      });
      return;
    }

    const formData = new FormData(event.currentTarget);
    setStatus({ type: "submitting" });

    try {
      const response = await fetch(`${API}/contact/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          altcha: altchaPayload,
          sourceUrl: window.location.href,
          website: String(formData.get("website") ?? ""),
        }),
      });

      if (!response.ok) {
        throw new Error(
          response.status === 429
            ? "Слишком много попыток. Подождите несколько минут."
            : "Не удалось отправить заявку. Попробуйте еще раз или напишите нам на support@artelcode.ru.",
        );
      }

      setForm(initialState);
      setAltchaPayload("");
      setCaptchaKey((key) => key + 1);
      setStatus({
        type: "success",
        message: "Спасибо. Заявка отправлена, мы свяжемся с вами.",
      });
    } catch (error) {
      setAltchaPayload("");
      setCaptchaKey((key) => key + 1);
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Не удалось отправить заявку. Попробуйте еще раз.",
      });
    }
  };

  const isSubmitting = status.type === "submitting";

  return (
    <div className="contact-form">
      <div className="contact-title">
        <h2>Напишите нам</h2>
        <p>
          Опишите задачу, формат проекта или вопрос по сотрудничеству. Мы
          вернемся с ответом после первичного анализа обращения.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="contact-form-box">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Имя"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={120}
                    autoComplete="name"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={320}
                    autoComplete="email"
                    inputMode="email"
                    pattern={EMAIL_PATTERN}
                    title="Введите email в формате name@example.com"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={18}
                    autoComplete="tel"
                    inputMode="tel"
                    pattern={PHONE_PATTERN}
                    title="Введите телефон в формате +7 (999) 999-99-99"
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Тема"
                    className="form-control"
                    value={form.subject}
                    onChange={handleChange}
                    minLength={2}
                    maxLength={200}
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    cols={30}
                    rows={6}
                    placeholder="Сообщение"
                    className="form-control"
                    value={form.message}
                    onChange={handleChange}
                    minLength={10}
                    maxLength={5000}
                    required
                  />
                </div>
              </div>

              <div className="contact-honeypot" aria-hidden="true">
                <label htmlFor="contact-website">Ваш сайт</label>
                <input
                  id="contact-website"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="col-lg-12 col-sm-12">
                <AltchaWidget key={captchaKey} onVerified={handleVerified} />
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправляем..." : "Отправить сообщение"}
                </button>
                {status.type !== "idle" && status.type !== "submitting" && (
                  <p
                    className={`contact-form-status contact-form-status-${status.type}`}
                    role={status.type === "error" ? "alert" : "status"}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
