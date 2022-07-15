import { useState } from 'react'
import Image from 'next/image'
/* COMPONENTS */
import { selected, AgeResultAge, AgeResultAgeCompleted, AgeResultBirthday, AgeResultDays } from '../components/Age'
import { TimeResultAge, TimeResultAgeCompleted, TimeResultDays } from '../components/Time'
import Calendar, { Toggle } from '../components/Calendar'
/* STYLES */
import styles from '../styles/Home.module.css'

const dayjs = require('dayjs')

export default function Home() {
  const { toggle } = Toggle();

  var test1 = dayjs();
  var test2 = dayjs(selected);
  var daystest = test1.diff(test2, 'day')
  console.log(daystest)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.section}>
          <h1>Age Calculator</h1>
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
          <Calendar></Calendar>
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
