import fs from "fs";
import fsPromises from "fs/promises"
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeUnwrapImages from 'rehype-unwrap-images'
import rehypePrettyCode from 'rehype-pretty-code';
import styles from "./page.module.css";
import { notFound } from "next/navigation";
import { useMDXComponents } from "@/mdx-components";
import { VFile } from "vfile";
import { matter } from "vfile-matter";
import ContentWarning from "@/components/ContentWarning";

async function checkPostExists(slug) {
    const folder = "/posts/";

    const fileExists = async (path) => !!(await fsPromises.stat(process.cwd() + path).catch((e) => false));
    return await fileExists(folder + slug + ".mdx");
}

export async function generateMetadata({ params, searchParams }, parent) {
    const { slug } = params;

    if (!(await checkPostExists(slug))) return notFound();

    const folder = "/posts/";

    const source = await fsPromises.readFile(process.cwd() + folder + slug + ".mdx", "utf8");

    // This API looks... very... interesting.
    // Whatever, handling frontmatter ourselves is a LOT faster than using compileMDX and throwing away the MDX...
    const vfile = new VFile(source);
    matter(vfile, { strip: true });
    const frontmatter = vfile.data.matter;

    return {
        title: frontmatter.title,
        description: frontmatter.description,
        image: "/pfps/selene.png",
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
                    url: "/pfps/selene.png",
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

    const folder = "/posts/";
    const components = useMDXComponents({
        ContentWarning : ContentWarning
    });
    const moonlightTheme = JSON.parse(fs.readFileSync(process.cwd() + "/moonlight-ii.json", "utf8"));

    const { content, frontmatter } = await compileMDX({
        source: await fsPromises.readFile(process.cwd() + folder + slug + ".mdx", "utf8"),
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