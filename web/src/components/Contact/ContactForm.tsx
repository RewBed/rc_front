"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormProps = {
  email: string;
};

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setIsSent(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) return;

    const body = [
      `Имя: ${form.name}`,
      `Email: ${form.email}`,
      `Телефон: ${form.phone}`,
      "",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      form.subject,
    )}&body=${encodeURIComponent(body)}`;
    setForm(initialState);
    setIsSent(true);
  };

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
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Телефон"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
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
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!email}
                >
                  Отправить сообщение
                </button>
                {isSent && (
                  <p className="contact-form-status">
                    Почтовый клиент открыт для отправки сообщения.
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
