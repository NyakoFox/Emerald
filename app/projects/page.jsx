import { Fragment } from "react";
import styles from "./page.module.css";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

    const projects = [
        {
            header: "Upcoming projects",
            content: [
                {
                    title: "???",
                    description: "Secret project...",
                    info: "This project is in early development. Can't show it off yet!"
                },
                {
                    title: "???",
                    description: "Secret project...",
                    info: "This project is secret until it's out..."
                }
            ]
        },
        {
            header: "My projects/things I maintain",
            content: [
                {
                    title: "Kristal",
                    description: "A DELTARUNE fangame engine, written in LÖVE.",
                    link: "https://kristal.cc/",
                    image: "kristal.gif",
                    position: "center",
                    pixelated: true,
                    darken: false,
                    info: "Kristal is a DELTARUNE fangame engine written in LÖVE. Written with the goal of extreme accuracy and an easy to use, extensible API, Kristal is a perfect base for DELTARUNE fangames. Maybe UNDERTALE, as well, if you feel like it."
                },
                {
                    title: "Shadow",
                    description: "The website for Kristal.",
                    link: "https://github.com/KristalTeam/Shadow",
                    image: "kristal.gif",
                    position: "bottom",
                    pixelated: true,
                    darken: false,
                    info: "Shadow is Kristal's website, written in Next.js, with hand-written tutorials, guides, and an auto-generated API reference."
                },
                {
                    title: "Emerald",
                    description: "This website.",
                    info: "Written mainly to have a serious place to show off my projects, this was made to look professional while still being easy to update and maintain. Written in Next.js, it even has a blog.",
                },
                {
                    title: "Team Switched's Website",
                    description: "The website for Team Switched.",
                    link: "https://teamswitched.dev/",
                    image: "teamswitched.png",
                    darken: false,
                    info: "I programmed, maintain and host the current website for Team Switched. The content nor the design is mine, but creating the page was, being a rewrite of our old site."
                },
                {
                    title: "VSIX / Niveaux Neo",
                    description: "VSIX is a community website for VVVVVV, which contains a level database.",
                    link: "https://vsix.dev/",
                    image: "vvvvvv.jpg",
                    info: "I maintain and host VSIX which is the current community hub for VVVVVV. It contains a level database, a user system, and various other features, making it my most featureful website to date. It was named \"Niveaux Neo\" during development, as it was a rewrite of the unreleased \"Niveaux\".",
                },
                {
                    title: "NyakoMod",
                    description: "A personal Minecraft mod containing whatever I feel like adding.",
                    link: "https://github.com/NyakoFox/NyakoMod",
                    info: "NyakoMod is my personal Minecraft mod, where I add whatever I want to it. Despite being a joke mod, it has a large amount of features, some even being split off into their own, released mods."
                },
                {
                    title: "VanitySlots",
                    description: "A Minecraft mod which adds slots for vanity armor.",
                    link: "https://github.com/NyakoFox/VanitySlots",
                    info: "VanitySlots is a Minecraft mod which adds slots for vanity armor, similar to the ones in Terraria. It was my first, and most popular mod."
                },
                {
                    title: "VeinDigging",
                    description: "A Minecraft mod which adds vein mining to modern Minecraft.",
                    link: "https://github.com/NyakoFox/VeinDigging",
                    info: "VeinDigging is a Minecraft mod which adds vein mining to modern Minecraft. Despite not being as featureful as other similar mods, it's easy to update, so it can always stay up to date. Client-side is completely optional, and both sides have lots of settings for behavior."
                },
                {
                    title: "Cropped",
                    description: "A Minecraft mod which has QOL improvements for crops.",
                    link: "https://github.com/NyakoFox/Cropped",
                    info: "Cropped adds things like right-click harvesting, and replanting to Minecraft, making farming much less of a chore."
                },
                {
                    title: "ItemRename",
                    description: "A Minecraft mod which allows you to rename items, and add lore to them, using PlaceholderAPI formatting.",
                    link: "https://github.com/NyakoFox/ItemRename",
                    info: "ItemRename is a simple server-sided Minecraft mod which lets you easily rename your items with formatting. It also lets you add and modify the lore of items."
                },
                {
                    title: "Sparked",
                    description: "A small game written in Processing for a highschool project.",
                    link: "https://github.com/NyakoFox/Platformer",
                    info: "Crunched in a week, finished on the 8th of June 2022, Sparked was a small platformer project I made for a Java class in high school. I did not need to make it in any way (the assignment was \"just make something cool in Processing\") but I decided to go above and beyond, and make a game. Unfortunately, my teacher didn't understand how to play it properly, and refused to play it..."
                },
                {
                    title: "Terminal",
                    description: "A Discord bot for the VVVVVV Discord server.",
                    image: "vvvvvv.jpg",
                    info: "Written in Discord.py, Terminal is the VVVVVV Discord server's bot, with faetures like tags, a \"submission\" system (to submit content to our \"community newsfeed\" channel) and various other things."
                }
            ]
        },
        {
            header: "Abandoned projects",
            content: [
                {
                    title: "From The Stars",
                    description: "Cave Story-inspired platformer.",
                    info: "Yet another attempt for me to make a Cave Story-inspired platformer, but I unfortunately lost motivation as I once again remembered that my main roadblocks for making games are art and level design..."
                }
            ]
        },
        {
            header: "Projects I've contributed to",
            content: [
                {
                    title: "TS!Underswap",
                    description: "An UNDERTALE fangame, by Team Switched.",
                    link: "https://teamswitched.dev/",
                    info: "Originally writing the base of the released game (some did come before), I took more of a backseat role as the project went on, but I'm still the coding co-lead. Hoping to return back to active work at some point, but with college and everything it's a little difficult... They are genuinely the nicest and friendliest team I've ever been a part of."
                },
                {
                    title: "VVVVVV",
                    description: "A retro-styled platformer game by Terry Cavanagh where you flip gravity.",
                    link: "https://store.steampowered.com/app/70300/VVVVVV/",
                    image: "vvvvvv.jpg",
                    info: "Despite not being an official contributor in any way, I am one of the main developers, mainly adding custom level features and rewriting parts of the game to be cleaner, without sacrificing any bugs which speedrunners or level creators rely on."
                },
                {
                    title: "Ved",
                    description: "A level editor for VVVVVV.",
                    link: "https://tolp.nl/ved",
                    info: "I contribute features and fixes to Ved, when I'm not writing plugins for it."
                },
                {
                    title: "UndertaleModTool",
                    description: "A modding tool for games made with GameMaker.",
                    link: "https://github.com/UnderminersTeam/UndertaleModTool",
                    info: "While I don't work on it very often, I contributed things like the updater button, the plus button to easily add code entries, and room editor improvements."
                },
                {
                    title: "Create Your Frisk",
                    description: "An UNDERTALE fangame engine.",
                    link: "https://github.com/RhenaudTheLukark/CreateYourFrisk",
                    info: "I don't contribute to this anymore, but when I did, I added things like using items \"silently\" (running their effects without writing dialogue), dynamic enemies, and UI controls."
                }
            ]
        }
    ]

    return <>
        <h1>Projects</h1>
        <p>Keep in mind I have two separate GitHub accounts, and a ton of unfinished projects.</p>
        <br />
        {
            projects.map((category, i) => {
                const content = category.content.map((project, j) => <ProjectCard key={`${project.title} ${i} ${j}`} project={project} />);

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
