import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
/* STYLES */
import styles from '../styles/AgeCalculator.module.css'
import { render } from 'react-dom';

/* export default function AgeCalculator() {

    const [numbers, setNumbers] = useState({
        number1: "",
    });

    const handleInputChange = e => {
        setNumbers({
            ...numbers,
            [e.target.name]: e.target.value
        })
    }

    const send = e => {
        e.preventDefault()
        const n1 = parseInt(numbers.number1);
        const add = n1 + 5;
        const nuevo = {
            result: add,
            valor1: n1
        }
        document.getElementById('result').innerHTML = nuevo.result;
        console.log('Enviando datos...' + nuevo.result);
    }
    
    return (
        <>
            <form onSubmit={send}>
                <input
                    type="number"
                    name='number1'
                    onChange={handleInputChange}
                />
                <button type='submit'>Calculate</button>
            </form>
            <p>{numbers.number1} + 5 = <span id='result'></span></p>
            
        </>
    )
} */

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



/* export default function AgeCalculator() {

    const [date, setDate] = useState();

    useEffect(() => {
        const birth = new Date(date);
        setDate(birth);
        
        return() => {
            birth();
            console.log('Cleanup');
        }
    }, []);

    return (
        <>
            <h1>¡Coloca tu fecha de nacimiento!</h1>
            <input
                type="date"
                name='date'
                autoComplete='off'
                onChange={ev => setDate(ev.target.value)}
            />
            <button>Calcular</button>

            <p>{birth}</p>
            <p></p>
        </>
    )
} */

/* const useCounter = initial => {
    const [ counter, setCounter ] = useState(initial);

    const add = () => {
        setCounter(counter + 1);
    }
    return { counter, add }
}

export default function AgeCalculator() {

    const { counter, add } = useCounter(0)

    return(
        <div>
            <p>{counter}</p>
            <button onClick={add}>Add</button>
        </div>
    )
} */