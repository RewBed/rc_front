"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

const About: React.FC = () => {
  // Rotation for 3D effect
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const rotateY = (deltaX / (rect.width / 2)) * 15; // Max 15 degrees rotation
    const rotateX = -(deltaY / (rect.height / 2)) * 15; // Negative for correct direction

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                ref={imageRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovering
                    ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                    : "perspective(1000px) rotateX(0deg) rotateY(0deg)",
                  transition: isHovering
                    ? "transform 0.1s ease-out"
                    : "transform 0.5s ease",
                }}
              >
                <Image
                  src="/images/about-img1.jpg"
                  alt="image"
                  className="rounded-10"
                  width={500}
                  height={750}
                  style={{
                    transform: isHovering ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div
                className="about-content about-content-two"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <div className="section-title">
                  <h2>О компании</h2>
                  <p>
                    ООО «Артель» помогает компаниям и организациям запускать
                    цифровые продукты, автоматизировать продажи и выстраивать
                    прозрачную работу с заявками, клиентами и внутренними
                    процессами.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Что делаем</h4>
                  <p>
                    Разрабатываем программное обеспечение под ключ, интегрируем
                    CRM и телефонию, готовим интерфейсы, посадочные страницы и
                    маркетинговую инфраструктуру, которая связана с реальными
                    бизнес-показателями.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Как подходим к проектам</h4>
                  <p>
                    Сначала разбираем цель, ограничения и будущую эксплуатацию,
                    затем фиксируем требования, согласуем приоритеты и
                    двигаемся короткими этапами с понятными результатами.
                  </p>
                </div>

                <div className="about-text">
                  <h4>Для кого работаем</h4>
                  <p>
                    Беремся за задачи малого и среднего бизнеса, команд продаж,
                    сервисных подразделений и проектов, где важны формальные
                    требования, документация и аккуратная сдача результата.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
