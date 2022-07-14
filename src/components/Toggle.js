import { useState } from 'react'
import Age from '../components/Age'
import Time from '../components/Time'
import Test from '../components/Test'
/* STYLES */
import styles from '../styles/Toggle.module.css'

export default function Toggle() {
    const [toggle, setToggle] = useState(true);

    return (
        <div className={styles.body}>
            <div className={styles.toggle}>
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