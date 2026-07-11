"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { WorkArea } from "@/lib/content-data";

type OurWorksProps = {
  workAreas: WorkArea[];
  showViewMore?: boolean;
};

const OurWorks: React.FC<OurWorksProps> = ({
  workAreas,
  showViewMore = true,
}) => {
  return (
    <div id="work-areas" className="case-studies-area ptb-100 bg-fcfbfb">
      <div className="container">
        <div className="section-title">
          <h2>С какими задачами работаем</h2>
          <p>
            Выбираем решение под задачу, а не под модный инструмент:
            автоматизация, интеграции, интерфейсы и маркетинг должны работать
            вместе и давать измеримый результат.
          </p>
        </div>

        <div className="row justify-content-center">
          {workAreas.slice(0, 6).map((value, i) => {
            const detailHref = `/work-areas/${value.slug}/`;

            return (
              <div className="col-lg-4 col-md-6" key={value.slug}>
                <div
                  className="single-case-studies"
                  style={{
                    backgroundImage: `url(${value.imageUrl ?? "/images/case-studies/studie1.jpg"})`,
                  }}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={`${(i + 1) * 100}`}
                >
                  <div className="content">
                    <span>
                      <Link href={detailHref}>{value.category}</Link>
                    </span>
                    <h3>
                      <Link href={detailHref}>{value.title}</Link>
                    </h3>
                  </div>

                  <Link href={detailHref} className="btn btn-primary">
                    Подробнее
                  </Link>

                  {value.shapeImageUrl && (
                    <div className="shape">
                      <Image
                        src={value.shapeImageUrl}
                        alt="shape Image"
                        width={250}
                        height={250}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {showViewMore && (
          <div className="view-more-work">
            <Link href="/work-areas/" className="btn btn-primary">
              Все задачи
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurWorks;
