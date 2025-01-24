import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FaDev, FaMediumM, FaCalendar, FaHeart, FaTags, FaArrowRight } from "react-icons/fa";
import { Article, Section } from "types/Sections";
import { formatDateString, getSectionHeading, openURLInNewTab } from "utils";
import Button from "components/Button";
import links from "data/links";

const INITIAL_DISPLAY_COUNT = 3;

type Props = {
  articles: Article[];
};

const BlogCard: React.FC<{ 
  article: Article;
  priority?: boolean;
}> = ({ article, priority = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="group relative rounded-xl overflow-hidden bg-white dark:bg-gray-800/50
                 border border-gray-200 dark:border-gray-700
                 hover:border-blue-500/50 dark:hover:border-blue-500/50
                 transition-all duration-300"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Article Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.social_image}
          alt={article.title}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500
                   group-hover:scale-110 group-hover:blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0
                      group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Article Content */}
      <div className="p-6 space-y-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-2
                       group-hover:text-blue-500 dark:group-hover:text-blue-400
                       transition-colors duration-300">
            {article.title}
          </h3>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FaCalendar className="text-xs" />
              <span>{formatDateString(article.published_at)}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaHeart className="text-xs text-red-500" />
              <span>{article.public_reactions_count} Reactions</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
          {article.description}
        </p>

        {article.tag_list.length > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaTags className="flex-shrink-0" />
            <div className="flex flex-wrap gap-2">
              {article.tag_list.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded-full text-xs
                         bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                         text-gray-700 dark:text-gray-300
                         border border-gray-200 dark:border-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 cursor-pointer"
            onClick={() => openURLInNewTab(article.url)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="flex items-center gap-2 text-white font-medium"
            >
              <span>Read Article</span>
              <FaArrowRight className="text-sm" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const Blog = ({ articles }: Props) => {
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll 
    ? articles 
    : articles.slice(0, INITIAL_DISPLAY_COUNT);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Rahul Ladumor's Technical Blog",
    "author": {
      "@type": "Person",
      "name": "Rahul Ladumor",
      "url": "https://codelamda.com"
    },
    "blogPost": articles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.description,
      "url": article.url,
      "image": article.social_image,
      "datePublished": article.published_at,
      "author": {
        "@type": "Person",
        "name": "Rahul Ladumor"
      }
    }))
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <section id={Section.Blog} className="space-y-8">
        {getSectionHeading(Section.Blog)}

        {articles.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-12 px-4
                     bg-white dark:bg-gray-800/50 rounded-xl
                     border border-gray-200 dark:border-gray-700"
          >
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4" />
            <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
          </motion.div>
        ) : (
          <>
            <motion.div 
              layout
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedArticles.map((article, index) => (
                <BlogCard
                  key={article.id}
                  article={article}
                  priority={index < 3}
                />
              ))}
            </motion.div>

            <div className="flex justify-center gap-4">
              {!showAll && articles.length > INITIAL_DISPLAY_COUNT && (
                <Button
                  icon={FaArrowRight}
                  onClick={() => setShowAll(true)}
                  className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                           hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
                >
                  Show More Articles
                </Button>
              )}
              <Button 
                icon={FaDev}
                onClick={() => openURLInNewTab(links.dev)}
                className="bg-gradient-to-r from-black/10 via-black/10 to-black/10
                         hover:from-black/20 hover:via-black/20 hover:to-black/20"
              >
                Follow on DEV
              </Button>
              <Button 
                icon={FaMediumM}
                onClick={() => openURLInNewTab(links.medium)}
                className="bg-gradient-to-r from-gray-500/10 via-gray-600/10 to-gray-700/10
                         hover:from-gray-500/20 hover:via-gray-600/20 hover:to-gray-700/20"
              >
                Follow on Medium
              </Button>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default Blog;
