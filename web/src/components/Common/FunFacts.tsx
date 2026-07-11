"use client";

import React from "react";

interface FunFact {
  iconName: string;
  number: string;
  suffix: string;
  shortText: string;
  aosDelay: string;
}

const funFactsData: FunFact[] = [
  {
    iconName: "pe-7s-like",
    number: "7",
    suffix: "",
    shortText:
      "ключевых направлений: разработка, госсектор, CRM, телефония, маркетинг и дизайн",
    aosDelay: "100",
  },
  {
    iconName: "pe-7s-diamond",
    number: "1",
    suffix: "",
    shortText:
      "ответственный подрядчик вместо разрозненных исполнителей на разработку и интеграции",
    aosDelay: "200",
  },
  {
    iconName: "pe-7s-portfolio",
    number: "6",
    suffix: "",
    shortText:
      "этапов работы от анализа и требований до запуска, приемки и сопровождения",
    aosDelay: "300",
  },
];

const FunFacts: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70 bg-fcfbfb">
        <div className="container">
          <div className="row justify-content-center">
            {funFactsData &&
              funFactsData.slice(0, 3).map((value, i) => (
                <div className="col-lg-4 col-sm-6" key={i}>
                  <div
                    className="funfact-card"
                    data-aos="fade-in"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <i className={value.iconName}></i>
                    <h3>
                      {value.number} {value.suffix && <span>{value.suffix}</span>}
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

export default FunFacts;
