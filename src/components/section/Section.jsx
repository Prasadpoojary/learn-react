import React, { useState } from 'react'
import './sectionStyle.css'
const Section = () => {


  // useState(default_value) which returns a list [current_value, setValue_function]
    
    const [input,setInput]=useState()
    
    const [todos,setTodos]=useState([])

    
    const handleClick=()=>
    {
        setTodos((prev)=>{return [...prev,input]})

        // prev =["Prasad","Anu"]
        // input = Aadya
        // [...prev,input] =["Prasad","Anu","Aadya"]
       // console.log(todos);
    }
 

  return (
    <section>
        <div className="container">
            <p>Hello {input}</p>
        </div>
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)} />
            <button onClick={handleClick}>CLICK ME</button>
        </div>
        <ul>
          { todos.map((item)=>{return <li key={item}>{item}</li>})}
        </ul>
    </section>
  )
}

export default Section