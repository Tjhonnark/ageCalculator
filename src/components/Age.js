import { useState } from 'react';
/* STYLES */
import styles from '../styles/Age.module.css'

const useCounter = () => {

    const [numbers, setNumbers] = useState({
        date1: "",
    });

    const handleInputChange = e => {
        setNumbers({
            ...numbers,
            [e.target.name]: e.target.value
        })
    }

    const send = e => {
        e.preventDefault()
        /* TODAY */
        const today = new Date();
        const todayYear = parseInt(today.getFullYear());
        const todayMonth = parseInt(today.getMonth()) + 1;
        const todayDay = parseInt(today.getDate());

        /* BIRTHDAY */
        const birthYear = parseInt(String(numbers.date1).substring(0, 4));
        const birthMonth = parseInt(String(numbers.date1).substring(5, 7));
        const birthDay = parseInt(String(numbers.date1).substring(8, 10));

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
        console.log('Enviando datos...' + age);
    }

    return { handleInputChange, send }
}

export default function Age() {

    const { handleInputChange, send } = useCounter()

    return (
        <div className={styles.body}>
            <p>{<span id='result'></span>}</p>
            <form onSubmit={send} className={styles.age}>
                <input
                    type="date"
                    name='date1'
                    onChange={handleInputChange}
                />
                <button type='submit'>Calculate</button>
            </form>
        </div>
    )
}

