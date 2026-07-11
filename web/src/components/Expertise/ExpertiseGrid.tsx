"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ExpertiseItem } from "@/lib/content-data";

type ExpertiseGridProps = {
  expertise: ExpertiseItem[];
  initialTag?: string | null;
};

const postsPerPage = 6;

const getTags = (item: ExpertiseItem) => {
  const tags = item.tags?.length ? item.tags : [item.category];
  return Array.from(new Set([item.category, ...tags]));
};

const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({ expertise, initialTag = null }) => {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(initialTag);
  const [currentPage, setCurrentPage] = useState(1);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    expertise.forEach((item) => getTags(item).forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [expertise]);

  const filteredExpertise = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return expertise.filter((item) => {
      const itemTags = getTags(item);
      const matchesTag = !activeTag || itemTags.includes(activeTag);
      const haystack = [
        item.title,
        item.category,
        item.publishedLabel,
        item.shortText,
        ...itemTags,
      ]
        .join(" ")
        .toLowerCase();

      return matchesTag && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [activeTag, expertise, query]);

  const totalPages = Math.max(1, Math.ceil(filteredExpertise.length / postsPerPage));
  const page = Math.min(currentPage, totalPages);
  const currentPosts = filteredExpertise.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  );

  const selectTag = (tag: string | null) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="widget-area expertise-filter">
          <div className="widget widget_search">
            <form className="search-form" onSubmit={(event) => event.preventDefault()}>
              <label>
                <input
                  type="search"
                  className="search-field"
                  placeholder="Поиск по экспертизе..."
                  value={query}
                  onChange={(event) => updateQuery(event.target.value)}
                />
              </label>
              <button type="submit" className="search-submit" aria-label="Поиск">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

          <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Теги</h3>
            <div className="tagcloud">
              <button
                type="button"
                className={!activeTag ? "current" : ""}
                onClick={() => selectTag(null)}
              >
                Все <span className="tag-link-count">({expertise.length})</span>
              </button>
              {tags.map((tag) => {
                const count = expertise.filter((item) => getTags(item).includes(tag)).length;

                return (
                  <button
                    type="button"
                    className={activeTag === tag ? "current" : ""}
                    key={tag}
                    onClick={() => selectTag(tag)}
                  >
                    {tag} <span className="tag-link-count">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {currentPosts.map((item, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={item.slug}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={`${(index + 1) * 100}`}
            >
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href={item.detailPath}>
                    <Image src={item.imageUrl} alt={item.title} width={510} height={383} />
                  </Link>

                  <div className="post-tag">
                    <button type="button" onClick={() => selectTag(item.category)}>
                      {item.category}
                    </button>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">{item.publishedLabel}</span>
                  <h3>
                    <Link href={item.detailPath}>{item.title}</Link>
                  </h3>

                  <p>{item.shortText}</p>

                  <Link href={item.detailPath} className="read-more-btn">
                    Читать
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {currentPosts.length === 0 && (
            <div className="col-lg-8">
              <div className="expertise-empty">
                <h3>Материалы не найдены</h3>
                <p>Измените поисковый запрос или выберите другой тег.</p>
              </div>
            </div>
          )}

          {filteredExpertise.length > postsPerPage && (
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <button
                  type="button"
                  className={`prev page-numbers ${page === 1 ? "disabled" : ""}`}
                  onClick={() => setCurrentPage((value) => Math.max(1, value - 1))}
                  disabled={page === 1}
                >
                  <i className="fa-solid fa-angles-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    type="button"
                    className={`page-numbers ${page === index + 1 ? "current" : ""}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  type="button"
                  className={`next page-numbers ${page === totalPages ? "disabled" : ""}`}
                  onClick={() => setCurrentPage((value) => Math.min(totalPages, value + 1))}
                  disabled={page === totalPages}
                >
                  <i className="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGrid;
