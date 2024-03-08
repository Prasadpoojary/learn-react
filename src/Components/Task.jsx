import React, { useState } from "react";

const Task=()=>
{
    // early challenge - may have mistakes 
    const [input,setInput]=useState("");
    const [items,addItem]=useState(["Chilly","Kabab","Fish","Egg"]);

    const handleChange=(event)=>
    {
        setInput(event.target.value);
    }

    const handleClick=()=>
    {
        if(input!="")
        addItem([...items,input])
        
        
    }

   //  React.Fragment
    return <>
        <h1>Items List</h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>Add</button>

        <ul>
            {
                items.map(item=><li key={item}>{item}</li>)
            }
        </ul>
        </>
}

export default Task;