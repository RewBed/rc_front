import Link from "next/link";
import type { Project } from "@/lib/content-data";

type ProjectDetailsContentProps = {
  project: Project;
};

const categoryLabels: Record<Project["category"], string> = {
  web: "Веб-проект",
  app: "Приложение",
  enterprise: "Корпоративная система",
};

const fallbackImages = [
  "/images/portfolio/portfolio1.jpg",
  "/images/portfolio/portfolio2.jpg",
  "/images/portfolio/portfolio3.jpg",
  "/images/portfolio/portfolio4.jpg",
  "/images/portfolio/portfolio5.jpg",
  "/images/portfolio/portfolio6.jpg",
];

const galleryImages = (project: Project) => {
  const uniqueImages = Array.from(
    new Set([...project.imageUrls, ...fallbackImages]),
  );
  return uniqueImages.slice(0, 6);
};

const BulletList = ({ items }: { items: string[] }) => {
  if (!items.length) return null;

  return (
    <ul className="project-detail-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

const ProjectDetailsContent: React.FC<ProjectDetailsContentProps> = ({
  project,
}) => {
  const images = galleryImages(project);
  const category = categoryLabels[project.category] ?? project.category;

  return (
    <div className="portfolio-details ptb-100">
      <div className="container">
        <div className="row m-0 project-gallery-grid">
          {images.map((image) => (
            <div className="col-lg-4 col-md-6 p-0" key={image}>
              <div className="portfolio-details-image project-gallery-image">
                <img src={image} alt={project.title} width={480} height={360} />
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio-desc">
              <h2>{project.title}</h2>
              <p>{project.intro ?? project.shortDescription}</p>

              {project.goals.length > 0 && (
                <>
                  <h2>Цели проекта</h2>
                  <BulletList items={project.goals} />
                </>
              )}

              {project.works.length > 0 && (
                <>
                  <h2>Что было сделано</h2>
                  <BulletList items={project.works} />
                </>
              )}

              {project.features.length > 0 && (
                <>
                  <h2>Особенности решения</h2>
                  <BulletList items={project.features} />
                </>
              )}
            </div>

            <div className="service-details-info">
              <div className="single-info-box">
                <h4>Категория</h4>
                <span>{category}</span>
              </div>

              <div className="single-info-box">
                <h4>Технологии</h4>
                <span>{project.technologies.join(", ") || "Под задачу"}</span>
              </div>

              <div className="single-info-box">
                <h4>Источник</h4>
                <span>{project.sourceUrl ? "Донорский сайт" : "Портфолио"}</span>
              </div>

              <div className="single-info-box">
                <Link href="/contact-us/" className="default-btn">
                  Обсудить похожий проект
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
