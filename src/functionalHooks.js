import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

export function FunctialHooks() {
    const [data, setData] = useState({hits: []});
    const [user, setUser] = useState({
        results: []
    });

    useEffect(() => {
        async function fetchDataHits() {
            const result = await axios(
                "https://hn.algolia.com/api/v1/search?query=react-fetch"
            );
            setData(result.data);
        }

        fetchDataHits();}, []);

    useEffect(() => {
        const fetchDataRandomUserMe= async() =>{
            const response=await fetch("https://randomuser.me/api?results=20");
            const json=await response.json();
            setUser(json);
            console.log("json: "+json);
        };

        fetchDataRandomUserMe();}, [] );


    return (
        <div className="App">
            <h2>Data</h2>
            <ul>
                {data.hits.map((w, index) => <li key={index}>{w.title}</li>)}
            </ul>

            <h2>User</h2>
            <ul>
                {user.results.map((u, index) => <li key={index}>{u.name.title} {u.name.first} {u.name.last}
                    <img src={u.picture.large}/></li>)}
            </ul>
        </div>
    )

}

