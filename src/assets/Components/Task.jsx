import React, { useState } from "react";

const Task=()=>
{
   
    const [input, setInput]=useState("");

    const handleChange=(event)=>
    {
        setInput(event.target.value);
    }

   //  React.Fragment
    return <>
        <input type="text" onChange={handleChange} />
        <h1>{input}</h1>
        </>
}

export default Task;