import React from "react";

const Task=()=>
{
    let count=0;

    const handleClick=()=>
    {
        count++;
    }

   //  React.Fragment
    return <>
        <h1>Hello : {count}</h1>
        <button onClick={handleClick}>Update</button>
        </>
}

export default Task;