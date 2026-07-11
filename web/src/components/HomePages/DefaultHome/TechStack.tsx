import React from "react";

const techStack = [
  {
    title: "Frontend",
    iconName: "fa-brands fa-react",
    description:
      "Интерфейсы на React, Next.js и TypeScript с серверным рендерингом, адаптивной версткой и аккуратной оптимизацией скорости.",
    items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    iconName: "fa-solid fa-server",
    description:
      "API, бизнес-логика и интеграции на Node.js/NestJS, REST-подходе и надежной работе с данными.",
    items: ["Node.js", "NestJS", "Go", "REST API", "PostgreSQL", "Redis"],
  },
  {
    title: "Интеграции",
    iconName: "fa-solid fa-plug",
    description:
      "Связываем сайты, CRM, телефонию, формы, платежи и внешние сервисы в прозрачные рабочие процессы.",
    items: ["Bitrix24", "amoCRM", "SIP", "Webhooks", "API"],
  },
  {
    title: "DevOps",
    iconName: "fa-brands fa-docker",
    description:
      "Готовим проекты к стабильному запуску: контейнеры, окружения, SSL, домены, мониторинг и CI/CD.",
    items: ["Docker", "GitHub Actions", "Nginx", "Linux", "SSL"],
  },
  {
    title: "Дизайн и контент",
    iconName: "fa-solid fa-pen-nib",
    description:
      "Проектируем понятные пользовательские сценарии, визуальную систему и страницы, которые удобно развивать.",
    items: ["Figma", "UI Kit", "UX", "Landing pages", "SEO"],
  },
  {
    title: "Качество",
    iconName: "fa-solid fa-shield-alt",
    description:
      "Поддерживаем кодовую базу проверками, типизацией, ревью и документацией для предсказуемой эксплуатации.",
    items: ["ESLint", "Testing", "Code review", "Docs", "Security"],
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="tech-stack-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>Технологический стек</h2>
          <p>
            Используем современные и распространенные инструменты, которые
            помогают быстро запускать проекты, поддерживать их после релиза и
            безболезненно развивать вместе с бизнесом.
          </p>
        </div>

        <div className="row justify-content-center">
          {techStack.map((group, index) => (
            <div className="col-lg-4 col-md-6" key={group.title}>
              <div
                className="tech-stack-card"
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className="tech-stack-icon">
                  <i className={group.iconName}></i>
                </div>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tech-stack-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
