export default function MarkdownImage(props) {
    if (props.title !== undefined) {
        return (
            <figure>
                <img src={props.src} alt={props.alt} />
                <figcaption>{props.title}</figcaption>
            </figure>
        );
    } else {
        return <img src={props.src} alt={props.alt} />;
    }
}