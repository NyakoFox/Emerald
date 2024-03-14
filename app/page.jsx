import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Nyako</h1>
      <p>Soft toy, shark, 100 cm (39 ¼")</p>

      <div className={styles.sections}>
        <Link className={styles.section} href="/projects">
          <div className={styles.header}>
            <strong className={styles.title}>
                Projects -&gt;
            </strong>
          </div>
          <div className={styles.description}>Click to see what I'm working on!</div>
        </Link>

        <Link className={styles.section} href="/posts">
          <div className={styles.header}>
            <strong className={styles.title}>
                Posts -&gt;
            </strong>
          </div>
          <div className={styles.description}>Read my ramblings!</div>
        </Link>

        <Link className={styles.section} href="/about">
          <div className={styles.header}>
            <strong className={styles.title}>
                About me -&gt;
            </strong>
          </div>
          <div className={styles.description}>Learn more about me!</div>
        </Link>
      </div>
    </>
  )
}
