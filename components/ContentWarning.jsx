import styles from "./ContentWarning.module.css"; 

export default function ContentWarning(props) {
    return (
        <figure className={styles.figure}>
            <figcaption className={styles.caption}>&#9888; Content Warning</figcaption>
            {props.children}
        </figure>
    )
}