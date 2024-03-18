import React, { useState } from 'react';
import '../css/home.css';
import Axios from 'axios';
import {jokeAPIKey,jokeAPIKey2} from '../API/apikey';

const Home=()=> {

    const [joke,setJoke]=useState("I'm waiting for the click..");

    // Function to generate joke
    const generateJoke=async()=>{
            try{
                setJoke("⏳⌛");
                const response = await Axios.get(jokeAPIKey);
                // const response = await Axios.get(jokeAPIKey2);
                const res=response.data;
                setJoke(res["setup"]+"\n"+res["punchline"]);
                console.log(res);
                console.log(joke);
            }catch(err){
                alert(err);
            }
        
    }

    return (
        <div>
            <div className="topArea">
            <div className="greetings"><h2>Hello there</h2></div>
            <p><em>Click the button below to generate a joke</em></p>
            <button className='btnMain' onClick={generateJoke}><p>Generate</p></button>
            </div>

            <div className="jokeArea">
                <p>
                <h3>{joke}</h3>
                </p>
            </div>
        </div>
    );
}

export default Home;