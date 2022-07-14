import { useState } from 'react';
/* STYLES */
import styles from '../styles/AgeCalculator.module.css'

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
    console.log(numbers.date1);
    return { numbers, handleInputChange, send }
}

export default function Test() {

    const { numbers, handleInputChange, send } = useCounter()

    return (
        <div className={styles.body}>
            <p>{<span id='result'></span>}</p>
            <p>{numbers.date1}</p>
            <div onSubmit={send} className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                </div>
                <input datepicker="" type="text" name='date1'
                    onChange={handleInputChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 datepicker-input" placeholder="Select date" />
                <button type='submit'>Calculate</button>
            </div>
        </div>
    )
}

