import MarkdownLink from "@/components/MarkdownLink"
import MarkdownImage from "@/components/MarkdownImage"

export function useMDXComponents(components) {
    return {
        a: (props) => (
            <MarkdownLink {...props} />
        ),
        img: (props) => (
            <MarkdownImage {...props} />
        ),
        ...components,
    }
}