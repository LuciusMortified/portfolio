import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Блог",
};

export default function BlogPosts() {
  let posts = getBlogPosts();
  posts = posts.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) >
      new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Блог</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Здесь я буду иногда публиковать небольшие статьи или новости.</p>
      </div>
      <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 transition-opacity duration-200 hover:opacity-80"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <p className="text-black dark:text-white tracking-tight">
                {post.metadata.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
            </div>
          </Link>
        ))}
        {!posts.length && <p>Блог пуст {':('}</p>}
      </div>
    </section>
  );
}
