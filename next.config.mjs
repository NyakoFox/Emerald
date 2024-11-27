import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeUnwrapImages from 'rehype-unwrap-images';
import rehypePrettyCode from 'rehype-pretty-code';
import fs from "fs";
import moonlightTheme from "./moonlight-ii.json" with { type: 'json' };

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
                theme: moonlightTheme,
                keepBackground: false
            }]
        ],
    },
});

export default withMDX(nextConfig)
