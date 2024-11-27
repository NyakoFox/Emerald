import fs from "fs/promises"
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from 'rehype-unwrap-images'
import rehypePrettyCode from 'rehype-pretty-code';
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";

async function checkPostExists(slug) {
    const folder = "/posts/";

    const fileExists = async (path) => !!(await fs.stat(process.cwd() + path).catch((e) => false));
    return await fileExists(folder + slug + ".mdx");
}

async function getPostData(slug) {
    const folder = "/posts/";

    const components = useMDXComponents({});

    const moonlightTheme = JSON.parse(await fs.readFile(process.cwd() + "/public/moonlight-ii.json", "utf8"));

    return await compileMDX({
        source: await fs.readFile(process.cwd() + folder + slug + ".mdx", "utf8"),
        options: {
            mdxOptions: {
                remarkPlugins: [
                    remarkGfm,
                ],
                rehypePlugins: [
                    rehypeUnwrapImages,
                    [rehypePrettyCode, { theme: moonlightTheme, keepBackground: false }],
                ],
                format: "mdx",
            },
            parseFrontmatter: true,
        },
        components,
    });
}

export async function generateMetadata({ params, searchParams }, parent) {
    const { slug } = params;

    if (!(await checkPostExists(slug))) return notFound();

    const { content, frontmatter } = await getPostData(slug);

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        image: "/nyako.png",
        colorScheme: "dark",
        metadataBase: process.env.BASE_URL,
        openGraph: {
            title: frontmatter.title,
            description: frontmatter.description,
            type: "article",
            publishedTime: new Date(frontmatter.date * 1000).toISOString(),
            authors: [frontmatter.author],
            url: `/posts/${slug}`,
            site_name: "Nyako's website",
            locale: "en_US",
            images: [
                {
                    url: "/nyako.png",
                    width: 512,
                    height: 512,
                    alt: "Nyako",
                },
            ],
        },
        twitter: {
            card: "summary",
        },
    };
}

export default async function BlogPost(props) {
    const { slug } = props.params;

    if (!(await checkPostExists(slug))) return notFound();

    const { content, frontmatter } = await getPostData(slug);

    return (
        <>
            <div className={styles.wrapper}>
                <span className={styles.date}>
                    {new Date(frontmatter.date * 1000).toDateString()}
                </span>
                <h2 className={styles.title}>{frontmatter.title}</h2>

                <div className={styles.description}>{frontmatter.description}</div>
                <div className={styles.content}>{content}</div>
            </div>
        </>
    );
}