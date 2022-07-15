import { useState } from 'react'
import Age from './Age'
import Time from './Time'
/* STYLES */
import styles from '../styles/Calendar.module.css'

export function Toggle() {
    const [toggle, setToggle] = useState(true);
    return { toggle, setToggle }
}

export default function Calendar() {
    const { toggle, setToggle } = Toggle();
    return (
        <div className={styles.body}>
            <div className={styles.toggle}>
                {toggle ? <p>Today</p> : <p>Date two</p> 
                }
                <label className={styles.switch}>
                    <input type="checkbox" onClick={() => setToggle(!toggle)} />
                    <span className={styles.slider}></span>
                </label>
            </div>
            <div className={styles.ageCalculator}>
                {toggle ? <Age /> : <Time />}
            </div>
        </div>
    )
}