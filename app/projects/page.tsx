import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { formatDateToYear, getProjectsPosts } from "app/lib/posts";

export const metadata: Metadata = {
  title: "Проекты",
};

export default function ProjectsPosts() {
  let posts = getProjectsPosts();
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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Проекты</h1>
      <div className="prose prose-neutral dark:prose-invert mb-4">
        <p>Список моих личных проектов, реализованных в свободное от работы время.</p>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/projects/${post.slug}`}
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {post.metadata.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {formatDateToYear(post.metadata.publishedAt)}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
        {!posts.length && <p>Проектов нет {":'("}</p>}
      </div>
    </section>
  );
}
