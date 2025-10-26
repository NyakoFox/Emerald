import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./page.module.css";
import { faCode, faHeadphones, faHeart, faImage, faMicrochip, faMusic, faNoteSticky, faPaintBrush, faTerminal, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { faGit, faGitAlt, faWindows } from "@fortawesome/free-brands-svg-icons";

export function Category({ children, name,  icon }) {
    return <section className={styles.category}>
        <h2 className={styles.category_title}>
            <span className={styles.category_icon}><FontAwesomeIcon icon={icon} /></span>
            {name}
        </h2>
        <div className={styles.category_child}>{children}</div>
    </section>
}

export function Entry({ children, name,  icon }) {
    return <section className={styles.entry}>
        <h3 className={styles.entry_title}>
            <span className={styles.entry_icon}><FontAwesomeIcon icon={icon}/></span>
            {name}
        </h3>

        <div className={styles.entry_child}>{children}</div>
    </section>
}

export default async function Page(props) {
    return <>
        <h1>/uses</h1>
        <p>After seeing a few of these /uses pages floating around my friend circle, I figured I'd make one of my own.</p>
        <p>I LOVE talking about myself.</p>

        <Category name="Hardware" icon={faMicrochip}>
            <Entry name="Lilith" icon={faMicrochip}>
                <p>Lilith is my main PC, built late 2023.</p>
                <ul>
                    <li><strong>CPU</strong>: Intel Core i5-12600K</li>
                    <li><strong>CPU Cooler</strong>: Thermalright Peerless Assassin 120 SE</li>
                    <li><strong>Thermal Paste</strong>: ARCTIC MX-4 (2019) 4g</li>
                    <li><strong>Motherboard</strong>: ASRock B760M Steel Legend WiFi</li>
                    <li><strong>Memory</strong>: G.Skill Ripjaws S5 32GB (2x16 GB) DDR5-5600 CL36</li>
                    <li><strong>GPU</strong>: Gigabyte GeForce RTX 4060 Ti 8GB EAGLE</li>
                    <li><strong>Power Supply</strong>: EVGA 500 GD 500W 80+ Gold</li>
                    <li><strong>Case</strong>: Deepcool CH370 MicroATX</li>
                </ul>
                <p>
                    My main regret was getting a GPU with only 8 GB of VRAM. I didn't notice before buying it...</p>
                <p>
                    Going with Intel was also a mistake...
                    Unfortunately, if I want to upgrade my CPU in the future, I'll have to get a new motherboard too...
                </p>
            </Entry>
        </Category>

        <Category name="Software" icon={faWindowMaximize}>
            <Entry name="Windows 11 Pro for Workstations (25H2)" icon={faWindows}>
                <p>
                    I've always been a Windows user, and I honestly don't see myself switching off of it any time soon.

                    Please do not argue with me about this.
                </p>
            </Entry>
            <Entry name="ShareX" icon={faImage}>
                <p>
                    Literally can't live without this. I use it constantly, every day. Highly configurable and powerful.
                </p>
            </Entry>
            <Entry name="PowerToys" icon={faWindowMaximize}>
                <p>
                    Windows Command Palette (formerly Powertoys Run) is an absolute must-have for me. I literally only use it as a calculator.
                </p>
                <p>
                    Bulk renaming is also super useful, despite not needing to do it very often.
                </p>
            </Entry>
        </Category>

        <Category name="Development" icon={faCode}>
            <Entry name="Windows Terminal" icon={faTerminal}>
                <p>
                    A wonderful upgrade from conhost. The customization, tabs, and overall polish make it a joy to use.
                </p>
                <p>
                    Plus, ANSI escape sequences work by default... <FontAwesomeIcon icon={faHeart} />
                </p>
            </Entry>
            <Entry name="Notepad++" icon={faNoteSticky}>
                <p>
                    Useful for quick editing and viewing files, without having to open a full environment.
                </p>
            </Entry>
            <Entry name="Visual Studio Code (Insiders)" icon={faCode}>
                <p>
                    My main code editor. I find it comfortable, especially with the cocktail of extensions I use.
                </p>
            </Entry>
            <Entry name="Intellij IDEA" icon={faCode}>
                <p>
                    My go-to for Java. I prefer specialized IDEs for certain languages over Visual Studio Code, and IDEA is fantastic.
                </p>
            </Entry>
            <Entry name="Visual Studio" icon={faCode}>
                <p>Not my favorite IDE, but the one I use for C++ (and for the C# class I take in college).</p>
            </Entry>
            <Entry name="Git" icon={faGitAlt}>
                <p>
                    I personally think desktop clients for Git are horrible.
                    They abstract everything away and get your repository in states which you do not know how to fix.
                    Maybe you can't, even.
                </p>
                <p>
                    Do yourself a favor and learn Git. You'll thank me later.
                </p>
            </Entry>
        </Category>

        <Category name="Media Manipulation" icon={faImage}>
            <Entry name="FL Studio" icon={faMusic}>
                <p>
                    FL Studio is wonderful software and I've used it for almost every song I've made.
                </p>
                <p>
                    Well, every song, if you include the super early BeepBox and Bosca Ceoil stuff.
                </p>
            </Entry>
            <Entry name="Audacity" icon={faHeadphones}>
                <p>
                    Audacity is like, fine. I don't really like it much, but it works.
                </p>
            </Entry>
            <Entry name="Paint.net" icon={faPaintBrush}>
                <p>
                    A wonderful image manipulation program I've been using for over a decade.
                </p>
                <p>
                    It may not be the most powerful nowadays, but it gets the job done.
                </p>
            </Entry>
            <Entry name="Aseprite" icon={faImage}>
                <p>
                    While most of my pixel art happens inside of Paint.net, I use Aseprite for animations.
                </p>
            </Entry>
        </Category>
    </>
}