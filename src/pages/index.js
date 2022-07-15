import Image from 'next/image'
/* COMPONENTS */
import { ResultAge, ResultAgeCompleted, ResultBirthday, ResultDays } from '../components/Age'
import Toggle, { prueba } from '../components/Toggle'
/* STYLES */
import styles from '../styles/Home.module.css'

export default function Home() {
  const { toggle } = prueba();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Age Calculator</h1>
          {toggle ?
            <div>
              <ResultAge /> <ResultAgeCompleted/> <ResultBirthday /> <ResultDays /> 
            </div> :
            <div>
              <ResultAge /> <ResultAgeCompleted/> <ResultBirthday /> <ResultDays />
            </div>}
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
