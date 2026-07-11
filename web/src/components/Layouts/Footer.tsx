"use client";

import React from "react";
import Link from "next/link";
import { contactSettings, type Setting } from "@/lib/content-data";

type FooterProps = {
  settings: Setting[];
};

const Footer: React.FC<FooterProps> = ({ settings }) => {
  const currentYear = new Date().getFullYear();
  const contacts = contactSettings(settings);
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/" className="artel-brand">
                    {contacts.shortName}
                  </Link>
                </div>

                <p>
                  Разработка программного обеспечения, CRM-интеграции,
                  SIP-телефония, маркетинг и дизайн для бизнеса и проектов
                  с формальными требованиями.
                </p>

                <ul className="social-links">
                  <li>
                    <a href="https://t.me/" target="_blank">
                      <i className="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://vk.com/" target="_blank">
                      <i className="fa-brands fa-vk"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div 
                className="single-footer-widget ml-4 pl-5"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="200"
              >
                <h3>Навигация</h3>

                <ul className="list">
                  <li>
                    <Link href="/">
                      Главная
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/">
                      О компании
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/">
                      Услуги
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio/">
                      Проекты
                    </Link>
                  </li>
                  <li>
                    <Link href="/expertise/">
                      Экспертиза
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget ml-4"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="300"
              >
                <h3>Услуги</h3>

                <ul className="list">
                  <li>
                    <Link href="/services/software-development/">
                      Разработка ПО
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/government-projects/">
                      Проекты для госсектора
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/bitrix24-integration/">
                      Bitrix24
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/amocrm-integration/">
                      amoCRM
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/sip-telephony-integration/">
                      SIP-телефония
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <div 
                className="single-footer-widget"
                data-aos="fade-in" 
                data-aos-duration="1000" 
                data-aos-delay="400"
              >
                <h3>Контакты</h3>

                <ul className="get-in-touch">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {contacts.legalAddress}
                  </li>
                  {contacts.phone && (
                    <li>
                      <i className="fa-solid fa-headset"></i>
                      <a href={`tel:${contacts.phone.replace(/[^\d+]/g, "")}`}>
                        {contacts.phone}
                      </a>
                    </li>
                  )}
                  {contacts.email && (
                    <li>
                      <i className="fa-solid fa-envelope"></i>
                      <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <p>
              Copyright &copy; {currentYear} {contacts.shortName}. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
