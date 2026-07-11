"use client";

import Link from "next/link";
import type { Project } from "@/lib/content-data";

type ProjectPortfolioGridProps = {
  projects: Project[];
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Веб-проекты",
  app: "Приложения",
  enterprise: "Корпоративные системы",
};

const fallbackImages = [
  "/images/works/work1.jpg",
  "/images/works/work2.jpg",
  "/images/works/work3.jpg",
  "/images/works/work4.jpg",
  "/images/works/work5.jpg",
  "/images/works/work6.jpg",
  "/images/works/work7.jpg",
  "/images/works/work8.jpg",
  "/images/works/work9.jpg",
  "/images/works/work10.jpg",
  "/images/works/work11.jpg",
  "/images/works/work12.jpg",
];

const projectImage = (project: Project, index: number) =>
  project.imageUrls[0] ?? fallbackImages[index % fallbackImages.length];

const ProjectPortfolioGrid: React.FC<ProjectPortfolioGridProps> = ({
  projects,
}) => {
  return (
    <div className="case-studies-area ptb-100 bg-fcfbfb">
      <div className="container">
        <div className="section-title">
          <h2>Проекты</h2>
          <p>
            Работы для государственных, медицинских, корпоративных и
            коммерческих задач: от личных кабинетов и карт до CRM-интеграций и
            внутренних систем.
          </p>
        </div>

        <div className="row justify-content-center">
          {projects.map((project, index) => {
            const href = `/portfolio/${project.slug}/`;
            const category =
              categoryLabels[project.category] ?? project.category;

            return (
              <div
                className="col-lg-4 col-sm-6"
                key={project.slug}
                data-aos="fade-in"
                data-aos-duration="1000"
                data-aos-delay={`${(index + 1) * 100}`}
              >
                <div className="work-card project-work-card">
                  <img
                    src={projectImage(project, index)}
                    alt={project.title}
                    width={510}
                    height={700}
                  />

                  <div className="content">
                    <span>
                      <Link href={href}>{category}</Link>
                    </span>

                    <h3>
                      <Link href={href}>
                        {project.shortName ?? project.title}
                      </Link>
                    </h3>

                    <p>{project.shortDescription}</p>

                    <Link href={href} className="custom-btn">
                      Подробнее
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolioGrid;
