import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
/* STYLES */
import styles from '../styles/Age.module.css'

const useCounter = () => {

    const [selected, setSelected] = useState();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p className={styles.footer}>{format(selected, 'PP')}.</p>;
    }

    const send = e => {
        e.preventDefault()
        /* TODAY */
        const today = new Date();
        const todayYear = parseInt(today.getFullYear());
        const todayMonth = parseInt(today.getMonth()) + 1;
        const todayDay = parseInt(today.getDate());

        /* BIRTHDAY */
        const birth = selected;
        const birthYear = parseInt(birth.getFullYear());
        const birthMonth = parseInt(birth.getMonth()) + 1;
        const birthDay = parseInt(birth.getDate());

        /* CONDITIONAL */
        let age = todayYear - birthYear;
        if (todayMonth < birthMonth) {
            age--;
        } else if (todayMonth === birthMonth) {
            if (todayDay < birthDay) {
                age--;
            }
        }
        document.getElementById('result').innerHTML = age + " Age";
    }

    return { selected, footer, setSelected, send }
}

export function ResultAge() {
    return <p className={styles.ageage}>{<span id='result'></span>}</p>
}

export default function Age() {

    const { selected, footer, setSelected, send } = useCounter()

    return (
        <div className={styles.body}>
            <div>
                <DayPicker
                    className={styles.age}
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    fromYear={1950} toYear={3000}
                    captionLayout="dropdown"
                />
            </div>
            <button onClick={send} className={styles.calculate}>Calculate</button>
        </div>
    )
}