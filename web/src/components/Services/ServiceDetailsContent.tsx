import Link from "next/link";
import type { ServiceItem } from "@/lib/content-data";

type ServiceDetailsContentProps = {
  service: ServiceItem;
  relatedServices: ServiceItem[];
};

const defaultContent = (service: ServiceItem) => [
  service.shortText,
  "На старте фиксируем цели, ограничения, ответственных и ожидаемый результат, чтобы команда понимала объем работ и критерии готовности.",
  "После запуска передаем понятную документацию и рекомендации по сопровождению, развитию и проверке качества решения.",
];

const defaultImplementationDetails = [
  "Уточняем цели, роли, ограничения и критерии готовности до старта активной реализации.",
  "Делим работу на понятные этапы, чтобы результат можно было проверять постепенно.",
  "После запуска оставляем инструкции и рекомендации для дальнейшей поддержки.",
];

const defaultTechnologies = [
  "TypeScript",
  "REST API",
  "PostgreSQL",
  "Docker",
];

const ServiceDetailsContent: React.FC<ServiceDetailsContentProps> = ({
  service,
  relatedServices,
}) => {
  const content = service.detailContent?.length
    ? service.detailContent
    : defaultContent(service);
  const implementationDetails = service.implementationDetails?.length
    ? service.implementationDetails
    : defaultImplementationDetails;
  const technologies = service.technologies?.length
    ? service.technologies
    : defaultTechnologies;

  return (
    <div className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <div className="service-details-icon">
                <i className={service.iconName}></i>
              </div>
              <h2>{service.title}</h2>
              <p>{service.shortText}</p>

              <h3>Что входит в услугу</h3>
              {content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <div className="service-insights">
                <div className="service-insights-panel">
                  <span className="service-insights-label">Нюансы работы</span>
                  <h3>Как подходим к реализации</h3>
                  <ul>
                    {implementationDetails.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-check"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-tech-panel">
                  <span className="service-insights-label">Технологии</span>
                  <h3>Что применяем</h3>
                  <div className="service-tech-list">
                    {technologies.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="services-details-info">
              <h3>Услуга</h3>
              <ul>
                <li>
                  <span>Формат:</span> проектирование и внедрение
                </li>
                <li>
                  <span>Результат:</span> рабочее решение и документация
                </li>
                <li>
                  <span>Следующий шаг:</span> обсуждение проекта
                </li>
              </ul>
            </div>

            <div className="services-details-info work-area-related">
              <h3>Другие услуги</h3>
              <ul>
                {relatedServices.map((item) => (
                  <li key={item.slug}>
                    <Link href={item.detailPath}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsContent;
