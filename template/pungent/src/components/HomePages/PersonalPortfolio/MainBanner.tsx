"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const MainBanner: React.FC = () => {
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
      <div className="personal-portfolio-banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="personal-portfolio-banner-content">
                <span
                  className="sub-title"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  Hello I&apos;m
                </span>

                <h1
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Kathleen Lavelle
                </h1>

                <h4
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  Digital Product Designer
                </h4>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>

                <Link
                  href="/contact-us/"
                  className="default-btn-two"
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  Connect With Me
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                ref={imageRef}
                className="personal-portfolio-banner-image"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
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
                {/* profile image  */}
                <Image
                  src="/images/personal-portfolio/banner-profile.jpg"
                  alt="image"
                  width={616}
                  height={620}
                  style={{
                    transform: isHovering ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pp-shape1">
          <Image
            src="/images/personal-portfolio/shape1.png"
            alt="image"
            width={503}
            height={507}
          />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
