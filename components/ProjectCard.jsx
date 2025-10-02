'use client';

import { useState } from "react";
import styles from "./ProjectCard.module.css"; 

export default function ProjectCard(props) {
    const { project } = props;
    const [ open, setOpen ] = useState(false);

    const style = project.image ? { backgroundImage: `url(project_cards/${project.image})` } : {}
    if (project.position) {
        style.backgroundPosition = project.position
    }
    if (project.pixelated) {
        style.imageRendering = "pixelated"
    }
    if ((project.darken === undefined || project.darken === true) && project.image) {
        style.backgroundColor = "rgba(0, 0, 0, 0.75)"
        style.backgroundBlendMode = "multiply"
    }
    return <div className={`${styles.project_wrapper} ${open ? styles.expanded : undefined}`} key={project.title} onClick={() => (!open && setOpen(true))} aria-expanded={open}>
        <div className={styles.project_card} key={project.title} style={style} onClick={() => (open && setOpen(false))} aria-expanded={open}>
            <div className={styles.header}>
                <strong className={styles.title}>
                    {project.title}
                </strong>
            </div>
            <div className={styles.description}>{project.description}</div>
        </div>
        <div className={styles.project_info_wrapper}>
            <div className={styles.project_info}>
                <p>{project.info}</p>
                {
                    project.link && (<nav>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Visit site</a>
                    </nav>)
                }
            </div>
        </div>
    </div>
}