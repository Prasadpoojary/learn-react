import React, { useState } from "react";

const Task=()=>
{
    const [count, setCount]=useState(0);

    const handleClick=()=>
    {
        setCount(count+1);
    }

   //  React.Fragment
    return <>
        <h1>Hello : {count}</h1>
        <button onClick={handleClick}>Update</button>
        </>
}

export default Task;