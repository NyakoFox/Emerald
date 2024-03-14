import styles from "./NavBar.module.css";
import Link from "next/link";

export default function NavBar() {
    return <div className={styles.navbar}>
        <Link className={styles.link} href="/">
            Home
        </Link>
        <Link className={styles.link} href="/posts">
            Posts
        </Link>
        <Link className={styles.link} href="/projects">
            Projects
        </Link>
        <Link className={styles.link} href="/about">
            About
        </Link>
    </div>
}