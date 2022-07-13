import { useState } from 'react';
/* STYLES */
import styles from '../styles/AgeCalculator.module.css'

export default function AgeCalculator() {

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
        const birthYear = parseInt(String(numbers.date1).substring(0,4));
        const birthMonth = parseInt(String(numbers.date1).substring(5,7));
        const birthDay = parseInt(String(numbers.date1).substring(8,10));
        
        let age = todayYear - birthYear;
        if (todayMonth < birthMonth) {
            age--;  
        } else if (todayMonth === birthMonth) {
            if (todayDay < birthDay) {
                age--;
            }
        }
        document.getElementById('result').innerHTML = age;
        console.log('Enviando datos...' + age);
        return age;

        /* const add = new Date() - n1;
        const nuevo = {
            result: add,
            valor1: n1
        }
        document.getElementById('result').innerHTML = nuevo.result;
        console.log('Enviando datos...' + nuevo.valor1); */
    }

    return (
        <>
            <form onSubmit={send}>
                <input
                    type="date"
                    name='date1'
                    onChange={handleInputChange}
                />
                <button type='submit'>Calculate</button>
            </form>
            <p>Tu edad es = {<span id='result'></span>}</p>

        </>
    )
}