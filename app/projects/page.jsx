import { Fragment } from "react";
import styles from "./page.module.css";

export default function Projects() {

    const projects = [
        {
            header: "Upcoming projects",
            content: [
                {
                    title: "From The Stars",
                    description: "Cave Story-inspired platformer.",
                }
            ]
        },
        {
            header: "My projects/things I maintain",
            content: [
                {
                    title: "Emerald",
                    description: "This website.",
                },
                {
                    title: "Kristal",
                    description: "A DELTARUNE fangame engine, written in LÖVE.",
                    link: "https://kristal.cc/",
                    image: "kristal.gif",
                    position: "center",
                    pixelated: true,
                    darken: false
                },
                {
                    title: "Shadow",
                    description: "The website for Kristal.",
                    link: "https://github.com/KristalTeam/Shadow",
                    image: "kristal.gif",
                    position: "bottom",
                    pixelated: true,
                    darken: false
                },
                {
                    title: "Team Switched's Website",
                    description: "The website for Team Switched.",
                    link: "https://teamswitched.dev/"
                },
                {
                    title: "VSIX / Niveaux Neo",
                    description: "VSIX is a community website for VVVVVV, which contains a level database.",
                    link: "https://vsix.dev/",
                },
                {
                    title: "ally.moe",
                    description: "My old website.",
                    link: "https://ally.moe/",
                    image: "allymoe.jpg",
                },
                {
                    title: "Sparked",
                    description: "A small game written in Processing for a highschool project.",
                    link: "https://github.com/NyakoFox/Platformer"
                },
                {
                    title: "NyakoMod",
                    description: "A Minecraft mod containing whatever I feel like adding. It's a joke mod, with way too much effort put into it.",
                    link: "https://github.com/NyakoFox/NyakoMod"
                },
                {
                    title: "VanitySlots",
                    description: "A Minecraft mod which adds slots for vanity armor.",
                    link: "https://github.com/NyakoFox/VanitySlots"
                },
                {
                    title: "VeinDigging",
                    description: "A Minecraft mod which adds vein mining to modern Minecraft.",
                    link: "https://github.com/NyakoFox/VeinDigging"
                },
                {
                    title: "Cropped",
                    description: "A Minecraft mod which has QOL improvements for crops.",
                    link: "https://github.com/NyakoFox/Cropped"
                },
                {
                    title: "ItemRename",
                    description: "A Minecraft mod which allows you to rename items, and add lore to them, using PlaceholderAPI formatting.",
                    link: "https://github.com/NyakoFox/ItemRename"
                },
                {
                    title: "Singularity",
                    description: "A Kitchen-sink Minecraft mod which adds a bunch of random stuff.",
                    link: "https://github.com/NyakoFox/Singularity"
                },
                {
                    title: "VVVVVV Textbox Generator",
                    description: "A tool to generate VVVVVV-styled textboxes, with extreme accuracy.",
                    link: "https://github.com/AllyTally/VVVVVV-Text",
                    image: "vvvvvv.jpg",
                },
                {
                    title: "Terminal",
                    description: "A Discord bot for the VVVVVV Discord server.",
                    image: "vvvvvv.jpg",
                }
            ]
        },
        {
            header: "Projects I've contributed to",
            content: [
                {
                    title: "TS!Underswap",
                    description: "An UNDERTALE fangame, by Team Switched.",
                    link: "https://teamswitched.dev/"
                },
                {
                    title: "VVVVVV",
                    description: "A retro-styled platformer game by Terry Cavanagh where you flip gravity.",
                    link: "https://store.steampowered.com/app/70300/VVVVVV/",
                    image: "vvvvvv.jpg",
                },
                {
                    title: "Ved",
                    description: "A level editor for VVVVVV.",
                    link: "https://tolp.nl/ved"
                },
                {
                    title: "UndertaleModTool",
                    description: "A modding tool for games made with GameMaker.",
                    link: "https://github.com/UnderminersTeam/UndertaleModTool"
                },
                {
                    title: "Create Your Frisk",
                    description: "An UNDERTALE fangame engine.",
                    link: "https://github.com/RhenaudTheLukark/CreateYourFrisk"
                }
            ]
        }
    ]

    return <>
        <h1>Projects</h1>
        <p>Keep in mind I have two separate GitHub accounts, and a ton of unfinished projects.</p>
        <br />
        {
            projects.map((category) => {
                const content = category.content.map((project) => {
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
                    const content = (<Fragment>
                        <div className={styles.header}>
                            <strong className={styles.title}>
                                {project.title}
                            </strong>
                        </div>
                        <div className={styles.description}>{project.description}</div>
                    </Fragment>)

                    if (project.link) {
                        return (<a className={styles.project} key={project.title} href={project.link} style={style}>
                            {content}
                        </a>)
                    }
                    return (<div className={styles.project} key={project.title} style={style}>
                        {content}
                    </div>)
                })

                return (<div key={category.header} className={styles.category}>
                    <h2 className={styles.category_header}>{category.header}</h2>
                    <div className={styles.projects}>
                        {content}
                    </div>
                </div>)
            })
        }
    </>
}
