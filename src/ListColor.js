import {useState} from "react";
import React from 'react'

export function ListColor() {


    //const colors = ["red", "green", "blue"]
    const [html, setHtml] = useState("");


    const data = [
        {title: 'red', red: 255, green: 0, blue: 0, html: "#FF0000"},
        {title: 'green', red: 0, green: 255, blue: 0, htmlC: "#00FF00"},
        {title: 'blue', red: 0, green: 0, blue: 255, htmlC: "#0000FF"},

    ]
    const [colors, setColors] = useState(data);


    function randomColor(){
        let red = (Math.floor(Math.random()*255))
        let blue = (Math.floor(Math.random()*255))
        let green = (Math.floor(Math.random()*255))

        let redHex  = red.toString(16);
        let blueHex = blue.toString(16);
        let greenHex = green.toString(16);

        setHtml("#"+redHex+greenHex+blueHex);

        setColors( [...colors, {title:"new Color", red:red, green:green, blue:blue, html:html}]);

    }

    return (
        <div>
            <button onClick={randomColor}>Neue Zufällige Farbe</button>
            <ul>
                {colors.map((c, idx) =>
                    <li key={idx} style={{color: c.html}}>{c.title} ({c.red},{c.green},{c.blue}, {c.html}) }</li>)}


                <li></li>
            </ul>

        </div>
    )
}