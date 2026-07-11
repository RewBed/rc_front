import Link from "next/link";
import type { WorkArea } from "@/lib/content-data";

type WorkAreaDetailsContentProps = {
  workArea: WorkArea;
  relatedWorkAreas: WorkArea[];
};

const fallbackImage = "/images/services/single-service.jpg";

const WorkAreaDetailsContent: React.FC<WorkAreaDetailsContentProps> = ({
  workArea,
  relatedWorkAreas,
}) => {
  const imageUrl = workArea.imageUrl ?? fallbackImage;

  return (
    <div className="services-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="services-details-image work-area-details-image">
              <img src={imageUrl} alt={workArea.title} width={1250} height={700} />
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <div className="services-details-desc">
              <h2>{workArea.title}</h2>
              <p>{workArea.shortText}</p>

              <h3>Как подходим к задаче</h3>
              <p>
                Начинаем с разбора процесса, ограничений и ожидаемого результата.
                После этого фиксируем объем работ, подбираем стек и собираем
                понятный план внедрения.
              </p>

              <p>
                Для задач категории «{workArea.category}» важно не просто
                разработать отдельный экран или интеграцию, а связать решение с
                реальными ролями, данными и дальнейшей поддержкой.
              </p>

              <h3>Что обычно входит</h3>
              <ul>
                <li>анализ текущего процесса и требований;</li>
                <li>проектирование сценариев, структуры данных и интерфейсов;</li>
                <li>разработка, интеграции и настройка окружения;</li>
                <li>проверка, запуск и сопровождение результата.</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="services-details-info">
              <h3>Направление</h3>
              <ul>
                <li>
                  <span>Категория:</span> {workArea.category}
                </li>
                <li>
                  <span>Формат:</span> проектирование и разработка
                </li>
                <li>
                  <span>Результат:</span> рабочее цифровое решение
                </li>
              </ul>
            </div>

            <div className="services-details-info work-area-related">
              <h3>Другие задачи</h3>
              <ul>
                {relatedWorkAreas.slice(0, 5).map((item) => (
                  <li key={item.slug}>
                    <Link href={`/work-areas/${item.slug}/`}>{item.title}</Link>
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

export default WorkAreaDetailsContent;
