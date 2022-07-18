import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
/* STYLES */
import styles from '../styles/Age.module.css'

const dayjs = require('dayjs')

export function useCounter() {

    const [selected, setSelected] = useState();
    
    let footer = <p className={styles.footer}>Please pick a day.</p>;
    if (selected) {
        footer = <p className={styles.footer}>{format(selected, 'PP')}.</p>;
    }

    const send = e => {
        e.preventDefault()

        if (dayjs(selected) < dayjs()) {
            var date1 = dayjs();
            var date2 = dayjs(selected);
        } else {
            var date1 = dayjs(selected);
            var date2 = dayjs();
        }

        /* TODAY */
        const todayDateMonth = date1.date();
        const todayMonth = date1.month();

        /* BIRTHDAY */
        const birthDateMonth = date2.date();
        const birthMonth = date2.month();
        const endTimeMonth = date2.endOf('month');
        const endTime = dayjs(endTimeMonth).date();

        const age = date1.diff(date2, 'year')
        const month = date1.diff(date2, 'month')
        const days = date1.diff(date2, 'day')

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

        if (days === 0) {
            daysLived = 0;
        }

        if (dayjs(selected) < dayjs()) {
            document.getElementById('resultAge').innerHTML = age + " years old";
            document.getElementById('resultAgeCompleted').innerHTML = age + " years old, " + monthsLived + " months and " + daysLived + " days.";
            document.getElementById('resultBirthday').innerHTML = missingMonth + " months and " + missingDay + " days to your birthday.";
            document.getElementById('resultDays').innerHTML = "You have lived " + days + " days.";
        } else {
            document.getElementById('resultAge').innerHTML = "";
            document.getElementById('resultAgeCompleted').innerHTML = "Missing " + age + " years, " + monthsLived + " months and " + daysLived + " days.";
            document.getElementById('resultBirthday').innerHTML = "";
            document.getElementById('resultDays').innerHTML = days + " days to go.";
        }
    }
    return { selected, footer, setSelected, send }
}

export function AgeResultAge() {
    return <>{<span id='resultAge' className={styles.resultAge}></span>}</>
}
export function AgeResultAgeCompleted() {
    return <>{<span id='resultAgeCompleted' className={styles.ageage}></span>}</>
}
export function AgeResultBirthday() {
    return <>{<span id='resultBirthday' className={styles.ageage}></span>}</>
}
export function AgeResultDays() {
    return <>{<span id='resultDays' className={styles.ageage}></span>}</>
}

const css = `
.selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
}
.selected:hover:not([disabled]) {
}
.today { 
    font-weight: bold;
    font-size: 110%; 
    color: #FECA71;
}
`;

export default function Age() {

    const { selected, footer, setSelected, send } = useCounter();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const disabledDays = [
        { from: tomorrow, to: new Date(9999, 11, 31) }
    ];

    return (
        <div className={styles.body}>
            <style>{css}</style>
            <DayPicker
                className={styles.calendar}
                mode="single"
                selected={selected}
                onSelect={setSelected}
                fromYear={100} toYear={3000}
                /* disabled={disabledDays} */
                footer={footer}
                captionLayout="dropdown"
                modifiersClassNames={{
                    selected: 'selected',
                    today: 'today'
                }}
            /* styles={{
                caption: { color: '#FECA71' }
            }} */
            />
            <button onClick={send} className={styles.calculate}>Calculate</button>
        </div>
    )
}