import fs from "fs/promises"
import styles from "./page.module.css";
import Link from "next/link";
import { VFile } from "vfile";
import { matter } from "vfile-matter";

export default async function Page(props) {

    const files = await fs.readdir("posts");
    const ids = files.map((file) => file.replace(/\.mdx$/, ""));

    const posts = await Promise.all(ids.map(async (id) => {
        const source = await fs.readFile(`posts/${id}.mdx`, "utf8");

        // This API looks... very... interesting.
        // Whatever, handling frontmatter ourselves is a LOT faster than using compileMDX and throwing away the MDX...
        const vfile = new VFile(source);
        matter(vfile, { strip: true });
        const frontmatter = vfile.data.matter;

        return { id, frontmatter };
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
                    {/*<img src={post.frontmatter.image} />*/}
                    <div className={styles.description}>{post.frontmatter.description}</div>
                </Link>
            })
        }
    </>
}