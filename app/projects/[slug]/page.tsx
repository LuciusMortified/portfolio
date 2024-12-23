import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDateToYear, getProjectsPosts, getProjectsPost } from "app/lib/posts";
import { metaData } from "app/config";

export async function generateStaticParams() {
    let posts = getProjectsPosts();

    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({
    params,
}): Promise<Metadata | undefined> {
    let post = getProjectsPost(params.slug);
    if (!post) {
        return;
    }

    let {
        title,
        publishedAt: publishedTime,
        summary: description,
        image,
    } = post.metadata;
    let ogImage = image
        ? image
        : `${metaData.baseUrl}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "article",
            publishedTime,
            url: `${metaData.baseUrl}/projects/${post.slug}`,
            images: [
                {
                    url: ogImage,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function ProjectPost({ params }) {
    let post = getProjectsPost(params.slug);
    if (!post) {
        notFound();
    }

    return (
        <section>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        headline: post.metadata.title,
                        datePublished: post.metadata.publishedAt,
                        dateModified: post.metadata.publishedAt,
                        description: post.metadata.summary,
                        image: post.metadata.image
                            ? `${metaData.baseUrl}${post.metadata.image}`
                            : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                        url: `${metaData.baseUrl}/blog/${post.slug}`,
                        author: {
                            "@type": "Person",
                            name: metaData.author,
                        },
                    }),
                }}
            />
            <h1 className="title mb-3 font-medium text-2xl tracking-tight">
                {post.metadata.title}
            </h1>
            <div className="flex justify-between items-center mt-2 mb-8 text-medium">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {formatDateToYear(post.metadata.publishedAt)}
                </p>
            </div>
            <article className="prose prose-quoteless prose-neutral dark:prose-invert">
                <CustomMDX source={post.content} />
            </article>
        </section>
    )
}