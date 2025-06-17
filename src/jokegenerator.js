// Joke.js

import React from "react";
 
import Button from "./Button";

const Joke = () => {
    const [joke,setjoke]=React.useState("");
   
  const  fetchApi=()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
       .then((response)=>response.json())
      //here short form  response res also we can use 
       .then((data)=>{
        console.log(data)
        setjoke(data.joke)
   
       } )
        
    }
    return (
<div>
        <h1>Joke Generator</h1>
        <Button callApi={fetchApi} />
        <p>{joke}</p>
        </div>
    )
}
    

    export default Joke;