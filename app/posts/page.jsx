import fs from "fs/promises"
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Page(props) {

    const files = await fs.readdir("posts");
    const ids = files.map((file) => file.replace(/\.mdx$/, ""));

    const posts = await Promise.all(ids.map(async (id) => {
        const source = await fs.readFile(`posts/${id}.mdx`, "utf8");
        const { content, frontmatter } = await compileMDX({
            source: source,
            options: {
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm
                    ],
                    rehypePlugins: [],
                    format: "mdx"
                },
                parseFrontmatter: true
            }
        });
        return { id, content, frontmatter };
    }));

    // reverse sort by post.frontmatter.date

    posts.sort((a, b) => {
        return b.frontmatter.date - a.frontmatter.date;
    });

    return <>
        {
            posts.map((post) => {
                return <Link className={styles.post} key={post.id} href={`/posts/${post.id}`}>
                    <div className={styles.header}>
                        <strong className={styles.title}>
                            {post.frontmatter.title}
                        </strong>
                        {" "}
                        •
                        {" "}
                        <span className={styles.date}>
                            {(new Date(post.frontmatter.date * 1000)).toLocaleDateString()}
                        </span></div>
                    <img src={post.frontmatter.image} />
                    <div className={styles.description}>{post.frontmatter.description}</div>
                </Link>
            })
        }
    </>
}