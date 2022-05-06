import logo from './logo.svg';
import './style.css';
import {useState} from "react";

export default function BMIexample() {
    const [bmi, setBmi] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);

    function getClassName() {

        if (bmi < 18.5) {
            return "untergewicht"
        } else if (bmi > 18.5 && bmi < 25) {
            return "normalgewicht"
        } else if (bmi > 25) {
            return "uebergewicht"
        }
    }

    return(
        <div>

            <h1>BMI-Rechner</h1>
            <label>Gewicht (Kg): <input type="text" onChange={event => setWeight(parseInt(event.target.value))}/></label>

            <label>Grösse (cm)<input type="text" onChange={event => setHeight(parseInt(event.target.value))}/></label>

            <button onClick={()=>{
                setBmi(Math.round(weight/ ((height/ 100) * (height/100)) *100 ) /100);

            }}>Berechnen</button>

            <h2 className={getClassName()}>{bmi} {getClassName()}</h2>

        </div>
    )
}

