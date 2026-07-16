import React from "react";
import Image from "next/image";
import Link from "next/link";

import bannerImg from "../../../../public/images/banner-img1-blue.png";

const capabilities = [
  {
    icon: "fa-solid fa-code",
    label: "Разработка ПО и веб-сервисов",
  },
  {
    icon: "fa-solid fa-gears",
    label: "Интеграции и автоматизация",
  },
  {
    icon: "fa-solid fa-shield-halved",
    label: "Работаем по 44-ФЗ и 223-ФЗ",
  },
  {
    icon: "fa-solid fa-headset",
    label: "Сопровождение и поддержка",
  },
];

const benefits = [
  "Полный цикл работ: от анализа задачи до поддержки",
  "Собственный отдел тендерных специалистов по IT",
  "Опыт реализации проектов любой сложности",
  "Понимаем специфику бизнеса и государственных закупок",
];

const MainBanner: React.FC = () => (
  <section className="artel-hero">
    <div className="container artel-hero-container">
      <div className="artel-hero-content">
        <span className="artel-hero-eyebrow">ООО «Артель»</span>

        <h1 className="artel-hero-title">
          <span>Цифровые решения</span>
          <span>для бизнеса</span>
          <span>
            и <strong>госсектора</strong>
          </span>
        </h1>

        <p className="artel-hero-description">
          Разрабатываем и интегрируем программное обеспечение, которое помогает
          бизнесу расти, а государственным организациям — работать эффективнее.
        </p>

        <div className="artel-hero-capabilities" aria-label="Направления работы">
          {capabilities.map((capability) => (
            <div className="artel-hero-capability" key={capability.label}>
              <i className={capability.icon} aria-hidden="true" />
              <span>{capability.label}</span>
            </div>
          ))}
        </div>

        <ul className="artel-hero-benefits">
          {benefits.map((benefit) => (
            <li key={benefit}>
              <i className="fa-solid fa-circle-check" aria-hidden="true" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="artel-hero-actions">
          <Link href="/contact-us/" className="artel-hero-button primary">
            <strong>Обсудить проект</strong>
            <span>Получите консультацию</span>
          </Link>
          <Link href="#services" className="artel-hero-button secondary">
            <strong>Наши услуги</strong>
            <span>Что мы умеем</span>
          </Link>
        </div>
      </div>

      <div className="artel-hero-visual" aria-hidden="true">
        <Image
          src={bannerImg}
          alt=""
          priority
          sizes="(max-width: 767px) 92vw, (max-width: 1199px) 48vw, 560px"
        />
      </div>
    </div>
  </section>
);

export default MainBanner;
