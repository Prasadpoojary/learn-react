import React from 'react'
import './sectionStyle.css'
const Section = () => {

    let name="Roopa";

    const handleClick=()=>
    {
       alert("Button Clicked");
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