import { useState } from 'react'
import Age from '../components/Age'
import Time from '../components/Time'
/* STYLES */
import styles from '../styles/Toggle.module.css'

export function prueba() {
    const [toggle, setToggle] = useState(true);
    return { toggle, setToggle }
}

export default function Toggle() {
    const { toggle, setToggle } = prueba();
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