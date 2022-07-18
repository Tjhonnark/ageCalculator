import { useState } from 'react'
import Image from 'next/image'
/* COMPONENTS */
import { AgeResultAge, AgeResultAgeCompleted, AgeResultBirthday, AgeResultDays } from '../components/Age'
import { TimeResultAge, TimeResultAgeCompleted, TimeResultDays } from '../components/Time'
import Calendar, { Toggle } from '../components/Calendar'
/* STYLES */
import styles from '../styles/Home.module.css'

const dayjs = require('dayjs')

export default function Home() {

  const { toggle } = Toggle();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Age Calculator</h1>
        <section className={styles.section}>
          <Calendar></Calendar>
          {toggle ?
            <div className={styles.data}>
              <AgeResultAge />
              <AgeResultAgeCompleted />
              <AgeResultBirthday />
              <AgeResultDays />
            </div> :
            <div className={styles.data}>
              <TimeResultAge />
              <TimeResultAgeCompleted />
              <TimeResultDays />
            </div>}
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
