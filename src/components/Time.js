import { useState } from 'react';
/* STYLES */
import styles from '../styles/Time.module.css'

const useCounter = () => {

    const [numbers, setNumbers] = useState({
        date1: "",
        date2: ""
    });

    const handleInputChange = e => {
        setNumbers({
            ...numbers,
            [e.target.name]: e.target.value
        })
    }

    const send = e => {
        e.preventDefault()
        /* DATE ONE */
        const date1Year = parseInt(String(numbers.date1).substring(0, 4));
        const date1Month = parseInt(String(numbers.date1).substring(5, 7));
        const date1Day = parseInt(String(numbers.date1).substring(8, 10));

        /* DATE TWO */
        const date2Year = parseInt(String(numbers.date2).substring(0, 4));
        const date2Month = parseInt(String(numbers.date2).substring(5, 7));
        const date2Day = parseInt(String(numbers.date2).substring(8, 10));

        /* CONDITIONAL */
        let age = date2Year - date1Year;
        if (date1Month < date2Month) {
            age--;
        } else if (date1Month === date2Month) {
            if (date1Day < date2Day) {
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
            <form onSubmit={send} className={styles.time}>
                <input
                    type="date"
                    name='date1'
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name='date2'
                    onChange={handleInputChange}
                />
                <button type='submit'>Calculate</button>
            </form>
        </div>
    )
}

