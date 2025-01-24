import Button from "components/Button";
import ImageLink from "components/ImageLink";
import links from "data/links";
import Head from "next/head";
import { FaDev, FaMediumM } from "react-icons/fa";
import { Article, Section } from "types/Sections";
import { formatDateString, getSectionHeading, openURLInNewTab } from "utils";

type Props = {
  articles: Article[];
};

const Blog = ({ articles }: Props) => {
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

      <div id={Section.Blog}>
        {getSectionHeading(Section.Blog)}

        {articles.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">Loading articles...</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div
                  key={article.id}
                  className="flex flex-col gap-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <ImageLink
                    href={article.url}
                    alt={article.title}
                    src={article.social_image}
                    height={200}
                    className="w-full object-cover"
                  />

                  <div className="p-4 flex flex-col gap-2 flex-grow">
                    <div>
                      <h4 className="text-lg font-bold line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                          {article.title}
                        </a>
                      </h4>
                      <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                        {formatDateString(article.published_at)} • {article.public_reactions_count} Reactions
                      </p>
                    </div>

                    <p className="prose prose-sm prose-neutral dark:prose-invert line-clamp-3">
                      {article.description}
                    </p>

                    {article.tag_list.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-auto pt-2">
                        {article.tag_list.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button icon={FaDev} onClick={() => openURLInNewTab(links.dev)}>
                Follow on DEV
              </Button>
              <Button icon={FaMediumM} onClick={() => openURLInNewTab(links.medium)}>
                Follow on Medium
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
