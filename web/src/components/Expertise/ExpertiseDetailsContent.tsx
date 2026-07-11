import Image from "next/image";
import Link from "next/link";
import type { ExpertiseItem } from "@/lib/content-data";

type ExpertiseDetailsContentProps = {
  current: ExpertiseItem;
  allItems: ExpertiseItem[];
};

const getTags = (item: ExpertiseItem) => {
  const tags = item.tags?.length ? item.tags : [item.category];
  return Array.from(new Set([item.category, ...tags]));
};

const defaultContent = (item: ExpertiseItem) => [
  item.shortText,
  "В материале собраны практические ориентиры, которые помогают заранее увидеть ограничения проекта, оценить риски и выбрать реалистичный порядок внедрения.",
  "Такой подход особенно важен для задач, где дизайн, разработка, интеграции и последующая поддержка должны работать как единый процесс.",
];

const ExpertiseDetailsContent: React.FC<ExpertiseDetailsContentProps> = ({
  current,
  allItems,
}) => {
  const currentIndex = allItems.findIndex((item) => item.slug === current.slug);
  const previous = currentIndex > 0 ? allItems[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < allItems.length - 1
      ? allItems[currentIndex + 1]
      : null;
  const content = current.content?.length ? current.content : defaultContent(current);
  const related = allItems
    .filter((item) => item.slug !== current.slug)
    .filter((item) => item.category === current.category)
    .concat(allItems.filter((item) => item.slug !== current.slug))
    .filter((item, index, items) => items.findIndex((value) => value.slug === item.slug) === index)
    .slice(0, 3);

  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-12">
            <div className="blog-details expertise-details">
              <div className="article-img">
                <Image src={current.imageUrl} alt={current.title} width={1000} height={600} />
              </div>

              <div className="article-content">
                <ul className="entry-meta">
                  <li>
                    <i className="fa-solid fa-folder-open"></i>
                    <Link href="/expertise/">{current.category}</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-calendar-days"></i>
                    {current.publishedLabel}
                  </li>
                </ul>

                {content.map((paragraph, index) =>
                  index === 1 ? (
                    <blockquote className="wp-block-quote" key={paragraph}>
                      <p>{paragraph}</p>
                      <cite>ООО «Артель»</cite>
                    </blockquote>
                  ) : (
                    <p key={paragraph}>{paragraph}</p>
                  ),
                )}

                <ul className="category">
                  <li>
                    <span>Tags:</span>
                  </li>
                  {getTags(current).map((tag) => (
                    <li key={tag}>
                      <Link href={`/expertise/?tag=${encodeURIComponent(tag)}`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="post-controls-buttons">
              <div>{previous && <Link href={previous.detailPath}>Предыдущий материал</Link>}</div>
              <div>{next && <Link href={next.detailPath}>Следующий материал</Link>}</div>
            </div>

            {related.length > 0 && (
              <div className="expertise-related">
                <h3>Еще по теме</h3>
                <div className="row">
                  {related.map((item) => (
                    <div className="col-lg-4 col-md-6" key={item.slug}>
                      <div className="single-blog-item">
                        <div className="blog-image">
                          <Link href={item.detailPath}>
                            <Image
                              src={item.imageUrl}
                              alt={item.title}
                              width={510}
                              height={383}
                            />
                          </Link>
                          <div className="post-tag">
                            <Link href="/expertise/">{item.category}</Link>
                          </div>
                        </div>
                        <div className="blog-post-content">
                          <span className="date">{item.publishedLabel}</span>
                          <h3>
                            <Link href={item.detailPath}>{item.title}</Link>
                          </h3>
                          <p>{item.shortText}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseDetailsContent;
