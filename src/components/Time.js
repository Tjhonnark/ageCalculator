import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
/* STYLES */
import styles from '../styles/Time.module.css'
import 'react-day-picker/dist/style.css';

const useCounter = () => {
    const pastMonth = new Date();

    const defaultSelected = DateRange = {
        from: pastMonth,
        to: addDays(pastMonth, 4)
    };
    const [range, setRange] = useState(defaultSelected);

    let footer = <p>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p>{format(range.from, 'PPP')}</p>;
        } else if (range.to) {
            footer = (
                <p>
                    {format(range.from, 'PPP')}–{format(range.to, 'PPP')}
                </p>
            );
        }
    }

    const send = e => {
        e.preventDefault()
        /* TODAY */
        const today = range.to;
        const todayYear = parseInt(today.getFullYear());
        const todayMonth = parseInt(today.getMonth()) + 1;
        const todayDay = parseInt(today.getDate());

        /* BIRTHDAY */
        const birth = range.from;
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

    return { range, footer, pastMonth, setRange, send }
}
export default function Age() {

    const { range, footer, pastMonth, setRange, send } = useCounter();

    return (
        <div className={styles.body}>
            <div>
                <DayPicker
                    className={styles.time}
                    mode="range"
                    defaultMonth={pastMonth}
                    selected={range}
                    onSelect={setRange}
                    footer={footer}
                    fromYear={1950} toYear={3000}
                    captionLayout="dropdown"
                />
            </div>
            <button onClick={send} className={styles.calculate}>Calculate</button>
        </div>
    )
}