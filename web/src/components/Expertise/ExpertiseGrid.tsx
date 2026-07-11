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

const getTags = (item: ExpertiseItem) => Array.from(new Set(item.tags ?? []));

const ExpertiseGrid: React.FC<ExpertiseGridProps> = ({ expertise, initialTag = null }) => {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = useMemo(() => {
    const categoryMap = new Map<string, number>();
    expertise.forEach((item) => {
      categoryMap.set(item.category, (categoryMap.get(item.category) ?? 0) + 1);
    });
    return Array.from(categoryMap, ([name, count]) => ({ name, count }));
  }, [expertise]);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    expertise.forEach((item) => getTags(item).forEach((tag) => tagSet.add(tag)));
    return Array.from(tagSet);
  }, [expertise]);

  const initialCategory = categories.some((category) => category.name === initialTag)
    ? initialTag
    : null;
  const initialStandaloneTag = initialCategory ? null : initialTag;
  const [activeCategory, setActiveCategory] = useState<string | null>(initialCategory);
  const [activeTag, setActiveTag] = useState<string | null>(initialStandaloneTag);

  const filteredExpertise = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return expertise.filter((item) => {
      const itemTags = getTags(item);
      const matchesCategory = !activeCategory || item.category === activeCategory;
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

      return (
        matchesCategory &&
        matchesTag &&
        (!normalizedQuery || haystack.includes(normalizedQuery))
      );
    });
  }, [activeCategory, activeTag, expertise, query]);

  const totalPages = Math.max(1, Math.ceil(filteredExpertise.length / postsPerPage));
  const page = Math.min(currentPage, totalPages);
  const currentPosts = filteredExpertise.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage,
  );

  const selectCategory = (category: string | null) => {
    setActiveCategory(category);
    setActiveTag(null);
    setCurrentPage(1);
  };

  const selectTag = (tag: string) => {
    setActiveTag((value) => (value === tag ? null : tag));
    setCurrentPage(1);
  };

  const updateQuery = (value: string) => {
    setQuery(value);
    setCurrentPage(1);
  };

  const popularPosts = expertise.slice(0, 3);
  const recentPosts = expertise.slice(0, 5);

  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row justify-content-center">
              {currentPosts.map((item, index) => (
                <div
                  className="col-lg-6 col-md-6"
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
                        <button type="button" onClick={() => selectCategory(item.category)}>
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
                <div className="col-lg-12">
                  <div className="expertise-empty">
                    <h3>Материалы не найдены</h3>
                    <p>Измените поисковый запрос, категорию или тег.</p>
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

          <div className="col-lg-4 col-md-12">
            <div className="pl-20">
              <div className="widget-area expertise-sidebar" id="secondary">
                <div className="widget widget_search">
                  <form className="search-form" onSubmit={(event) => event.preventDefault()}>
                    <label>
                      <input
                        type="search"
                        className="search-field"
                        placeholder="Поиск..."
                        value={query}
                        onChange={(event) => updateQuery(event.target.value)}
                      />
                    </label>
                    <button type="submit" className="search-submit" aria-label="Поиск">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>

                <div className="widget widget_posts_thumb">
                  <h3 className="widget-title">Популярные материалы</h3>

                  {popularPosts.map((item, index) => (
                    <article className="item" key={item.slug}>
                      <Link href={item.detailPath} className="thumb">
                        <span
                          className={`fullimage cover ${index === 0 ? "bg1" : ""}`}
                          role="img"
                          aria-label={item.title}
                          style={{ backgroundImage: `url(${item.imageUrl})` }}
                        ></span>
                      </Link>
                      <div className="info">
                        <time>{item.publishedLabel}</time>
                        <h4 className="title usmall">
                          <Link href={item.detailPath}>{item.title}</Link>
                        </h4>
                      </div>

                      <div className="clear"></div>
                    </article>
                  ))}
                </div>

                <div className="widget widget_recent_entries">
                  <h3 className="widget-title">Последние материалы</h3>

                  <ul>
                    {recentPosts.map((item) => (
                      <li key={item.slug}>
                        <Link href={item.detailPath}>{item.title}</Link>
                        <span className="post-date">{item.publishedLabel}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget widget_categories">
                  <h3 className="widget-title">Категории</h3>

                  <ul>
                    <li>
                      <button
                        type="button"
                        className={!activeCategory ? "current" : ""}
                        onClick={() => selectCategory(null)}
                      >
                        Все <span className="post-count">({expertise.length})</span>
                      </button>
                    </li>
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          type="button"
                          className={activeCategory === category.name ? "current" : ""}
                          onClick={() => selectCategory(category.name)}
                        >
                          {category.name} <span className="post-count">({category.count})</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="widget widget_tag_cloud">
                  <h3 className="widget-title">Теги</h3>

                  <div className="tagcloud">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseGrid;
