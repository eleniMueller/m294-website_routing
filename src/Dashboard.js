import {Link} from "react-router-dom";
import React from "react";

export function Dashboard(){

    return(
        <div>
            <h2>Dashboard</h2>

            <ul>
                <li>
                    <Link to="/listColor">Listen Color</Link>
                </li>
                <li>
                    <Link to="/functionalHooks">Functional Hooks</Link>
                </li>
                <li>
                    <Link to="/bmiRechner">BMI rechner</Link>
                </li>
            </ul>

        </div>
    )
}