import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import { addDays, format } from 'date-fns';
import { DateRange, DayPicker } from 'react-day-picker';
/* STYLES */
import styles from '../styles/Time.module.css'
import 'react-day-picker/dist/style.css';

const dayjs = require('dayjs')

const useCounter = () => {
    const pastMonth = new Date();

    const defaultSelected = DateRange = {
        from: "",
        to: ""
    };

    const [range, setRange] = useState(defaultSelected);
    
    let footer = <p className={styles.footer}>Please pick the first day.</p>;
    if (range?.from) {
        if (!range.to) {
            footer = <p className={styles.footer}>{format(range.from, 'PPP')}</p>;
        } else if (range.to) {
            footer = (
                <p className={styles.footer}>
                    {format(range.from, 'PPP')} – {format(range.to, 'PPP')}
                </p>
            );
        }
    }

    const send = e => {
        e.preventDefault()
        /*  */
        const date1 = dayjs(range.to);
        const todayDateMonth = dayjs(range.to).date();
        const todayMonth = dayjs(range.to).month();

        /*  */
        const date2 = dayjs(range.from);
        const birthDateMonth = dayjs(range.from).date();
        const birthMonth = dayjs(range.from).month();
        const endTimeMonth = dayjs(range.to).endOf('month');
        const endTime = dayjs(endTimeMonth).date();

        const age = date1.diff(date2, 'year')
        const month = date1.diff(date2, 'month')
        var days = date1.diff(date2, 'day')

        const monthsLived = month - (age * 12);

        if (todayMonth < birthMonth) {
            if (todayDateMonth <= birthDateMonth) {
                var missingMonth = birthMonth - todayMonth;
                var missingDay = birthDateMonth - todayDateMonth;
                var daysLived = endTime - (birthDateMonth - todayDateMonth);
            } else {
                var missingMonth = birthMonth - todayMonth - 1;
                var missingDay = endTime - (todayDateMonth - birthDateMonth);
                var daysLived = todayDateMonth - birthDateMonth;
            }
        } else if (todayMonth > birthMonth) {
            if (todayDateMonth <= birthDateMonth) {
                var missingMonth = 12 - (todayMonth - birthMonth);
                var missingDay = birthDateMonth - todayDateMonth;
                var daysLived = endTime - (birthDateMonth - todayDateMonth);
            } else {
                var missingMonth = 12 - (todayMonth - birthMonth) - 1;
                var missingDay = endTime - (todayDateMonth - birthDateMonth);
                var daysLived = todayDateMonth - birthDateMonth;
            }
        } else {
            if (todayDateMonth <= birthDateMonth) {
                var missingMonth = birthMonth - todayMonth;
                var missingDay = birthDateMonth - todayDateMonth;
                var daysLived = endTime - (birthDateMonth - todayDateMonth);
            } else {
                var missingMonth = 12 - (todayMonth - birthMonth) - 1;
                var missingDay = endTime - (todayDateMonth - birthDateMonth);
                var daysLived = todayDateMonth - birthDateMonth;
            }
        }

        if (days <= 0) {
            daysLived = 0;
            missingDay = 0;
            days = 0;
        }

        if (range.to === undefined) {
            age =0;
            daysLived = 0;
            monthsLived = 0;
            missingDay = 0;
            missingMonth = 0;
            days = 0;
        }

        document.getElementById('resultAge').innerHTML = age + " years";
        document.getElementById('resultAgeCompleted').innerHTML = age + " years, " + monthsLived + " months and " + daysLived + " days.";
        document.getElementById('resultBirthday').innerHTML = "The next anniversary is in " + missingMonth + " months and " + missingDay + " days.";
        document.getElementById('resultDays').innerHTML = "It has been " + days + " days.";
    }

    return { range, footer, pastMonth, setRange, send }
}

export function TimeResultAge() {
    return <p className={styles.ageage}>{<span id='resultAge'></span>}</p>
}
export function TimeResultAgeCompleted() {
    return <p className={styles.ageage}>{<span id='resultAgeCompleted'></span>}</p>
}
export function TimeResultBirthday() {
    return <p className={styles.ageage}>{<span id='resultBirthday'></span>}</p>
}
export function TimeResultDays() {
    return <p className={styles.ageage}>{<span id='resultDays'></span>}</p>
}

const css = `
.selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
    border-radius: 50%;
}
.selected:hover:not([disabled]) {
}
.today { 
    font-weight: bold;
    font-size: 110%; 
    color: #FECA71;
}
`;

export default function Time() {

    const { range, footer, pastMonth, setRange, send } = useCounter();

    return (
        <div className={styles.body}>
            <style>{css}</style>
            <DayPicker
                className={styles.calendar}
                mode="range"
                defaultMonth={pastMonth}
                selected={range}
                onSelect={setRange}
                footer={footer}
                fromYear={100} toYear={3000}
                captionLayout="dropdown"
                modifiersClassNames={{
                    selected: 'selected',
                    today: 'today'
                }}
            />
            <button onClick={send} className={styles.calculate}>Calculate</button>
        </div>
    )
}