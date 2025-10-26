import styles from "./NavBar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faHouse, faPencil, faQuestion } from '@fortawesome/free-solid-svg-icons'

export function MenuItem({ href, text, icon }) {
    return <Link className={styles.link} href={href}>
        <span className={styles.text}>{text}</span>
        <span className={styles.icon}><FontAwesomeIcon icon={icon} /></span>
    </Link>
}

export default function NavBar() {
    return <div className={styles.navbar}>
        <MenuItem href="/" text="Home" icon={faHouse} />
        <MenuItem href="/posts" text="Posts" icon={faPencil} />
        <MenuItem href="/projects" text="Projects" icon={faGamepad} />
        <MenuItem href="/about" text="About" icon={faQuestion} />
        <MenuItem href="/uses" text="/uses" icon={faQuestion} />
    </div>
}