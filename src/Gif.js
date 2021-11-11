import React, { useState, useEffect } from 'react';

export default function Gif (props) {
    const [data, setData]=useState([]);
    useEffect(()=>{

    },[])
    return (
        <div>
            <h1>Giphy</h1>
            <input placeholder="type of giphy"/>
            <button>Submit</button>
            <br/>
            <button>Make API Call Again</button>
            {/* {ifTrue ? add gif: <h2>Pull random gifs from Giphy</h2>} */}
        </div>
    )
}