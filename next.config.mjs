import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from "fs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkGfm
        ],
        rehypePlugins: [
            rehypeUnwrapImages,
            [rehypePrettyCode, {
                theme: JSON.parse(fs.readFileSync(process.cwd() + "/public/moonlight-ii.json", "utf8")),
                keepBackground: false
            }]
        ],
    },
});

export default withMDX(nextConfig)
