"use client";

import React from "react";
import Link from "next/link";

const BlogSidebar: React.FC = () => {
  // Dynamic data for popular posts
  const popularPosts = [
    {
      image: "/images/blog/blog1.jpg",
      title: "The Best Marketing top use Management Tools",
      date: "March 15, 2025",
      link: "/blog/blog-details/",
      bgClass: "bg1",
    },
    {
      image: "/images/blog/blog2.jpg",
      title: "Top 21 Must-Read Blogs For Creative Agencies",
      date: "March 16, 2025",
      link: "/blog/blog-details/",
      bgClass: "",
    },
    {
      image: "/images/blog/blog3.jpg",
      title: "Protect your workplace from cyber attacks",
      date: "March 17, 2025",
      link: "/blog/blog-details/",
      bgClass: "",
    },
  ];

  // Dynamic data for recent posts
  const recentPosts = [
    {
      title: "The security risks of changing package owners",
      date: "March 15, 2025",
      link: "/blog/blog-details/",
    },
    {
      title: "Tips to protecting business and Family",
      date: "March 16, 2025",
      link: "/blog/blog-details/",
    },
    {
      title: "Protect your workplace from cyber attacks",
      date: "March 17, 2025",
      link: "/blog/blog-details/",
    },
    {
      title: "Business debit Fees to increase in 2025",
      date: "March 18, 2025",
      link: "/blog/blog-details/",
    },
    {
      title: "10 tips to reduce your card processing costs",
      date: "March 19, 2025",
      link: "/blog/blog-details/",
    },
  ];

  // Dynamic data for categories
  const categories = [
    { name: "Business", count: 5, link: "/blog" },
    { name: "Privacy", count: 10, link: "/blog" },
    { name: "Technology", count: 15, link: "/blog" },
    { name: "Tips", count: 12, link: "/blog" },
    { name: "Uncategorized", count: 2, link: "/blog" },
  ];

  // Dynamic data for tags
  const tags = [
    { name: "IT", count: 3, link: "/blog" },
    { name: "React", count: 3, link: "/blog" },
    { name: "Games", count: 2, link: "/blog" },
    { name: "Development", count: 2, link: "/blog" },
    { name: "Design", count: 1, link: "/blog" },
    { name: "Apps", count: 1, link: "/blog" },
    { name: "Marketing", count: 1, link: "/blog" },
    { name: "Tips", count: 2, link: "/blog" },
  ];

  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit" className="search-submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* Popular posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular posts</h3>

          {popularPosts.map((post, index) => (
            <article className="item" key={index}>
              <Link href={post.link} className="thumb">
                <span
                  className={`fullimage cover ${post.bgClass}`}
                  role="img"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></span>
              </Link>
              <div className="info">
                <time>{post.date}</time>
                <h4 className="title usmall">
                  <Link href={post.link}>{post.title}</Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>
          ))}
        </div>

        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>

          <ul>
            {recentPosts.map((post, index) => (
              <li key={index}>
                <Link href={post.link}>{post.title}</Link>
                <span className="post-date">{post.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <Link href={category.link}>
                  {category.name} <span className="post-count">({category.count})</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags.map((tag, index) => (
              <Link href={tag.link} key={index}>
                {tag.name} <span className="tag-link-count">({tag.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;