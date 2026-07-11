"use client";

import React from "react";
import Link from "next/link";
import type { ServiceItem } from "@/lib/content-data";

type ServicesProps = {
  services: ServiceItem[];
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <>
      <div id="services" className="bg-fcfbfb pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Услуги</h2>
            <p>
              Собираем технические, интеграционные и маркетинговые задачи в
              единую систему: от идеи и требований до запуска, аналитики и
              дальнейшего развития.
            </p>
          </div>

          <div className="row justify-content-center">
            {services &&
              services.map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="service-card-one"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={`${(i + 1) * 100}`}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      <Link href={value.detailPath}>{value.title}</Link>
                    </h3>
                    <p>{value.shortText}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
