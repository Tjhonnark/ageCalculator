import Image from 'next/image'
/* COMPONENTS */
import { ResultAge } from '../components/Age'
import Toggle from '../components/Toggle'
/* STYLES */
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Age Calculator</h1>
          <ResultAge></ResultAge>
          <Toggle></Toggle>
        </section>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
