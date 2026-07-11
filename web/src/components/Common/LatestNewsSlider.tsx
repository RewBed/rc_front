"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import type { ExpertiseItem } from "@/lib/content-data";

type LatestNewsSliderProps = {
  expertise: ExpertiseItem[];
};

const LatestNewsSlider: React.FC<LatestNewsSliderProps> = ({ expertise }) => {
  return (
    <>
      <div id="expertise" className="blog-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Экспертиза</h2>
            <p>
              Материалы для будущего раздела: о разработке, CRM, телефонии,
              госсекторе, маркетинге и дизайне цифровых продуктов.
            </p>
          </div>

          <Swiper
            autoHeight={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination]}
            className="blog-slides"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {expertise &&
              expertise.slice(0, 5).map((value, i) => (
                <SwiperSlide key={i}>
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={value.detailPath}>
                        <Image
                          src={value.imageUrl}
                          alt="image"
                          width={510}
                          height={383}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={value.detailPath}>{value.category}</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">{value.publishedLabel}</span>
                      <h3>
                        <Link href={value.detailPath}>{value.title}</Link>
                      </h3>

                      <p>{value.shortText}</p>

                      <Link href={value.detailPath} className="read-more-btn">
                        Читать
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNewsSlider;
