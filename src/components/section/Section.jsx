import React, { useState } from 'react'
import './sectionStyle.css'
const Section = () => {


  // useState(default_value) which returns a list [current_value, setValue_function]
    
    const [name,setName]=useState("Roopa")

    const handleClick=()=>
    {
      //  setName("Prasad")
      setName((prev)=> { return `${prev} Prasad`})
    }

  return (
    <section>
        <div className="container">
            <p>Hello {name}</p>
        </div>
        <div>
            <button onClick={handleClick}>CLICK ME</button>
        </div>
    </section>
  )
}

export default Section