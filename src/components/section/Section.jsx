import React, { useEffect, useState } from 'react'
import './sectionStyle.css'
const Section = () => {


  // useState(default_value) which returns a list [current_value, setValue_function]
    
    const [input,setInput]=useState()

  
    const [todos,setTodos]=useState([])

    
    const handleClick=()=>
    {
        if( !input || input.trim().length==0)
        {
          alert("Please enter valid input");
          return 
        }
        setTodos((prev)=>{return [...prev,input]})
        console.log(todos)
    }




  //useEffect(arrow_function,[depedency1,dependecy2,....]);

  //// 1. without dependency array useEffect will be called on every event on component
  // useEffect(()=>{
  //   console.log("useEffect function executed...");
  // });


  //// 2. with 'empty' dependency array useEffect will be called only once when component rendered
  //   useEffect(()=>{
  //   console.log("useEffect function executed...");
  // },[]);


  //// 3. with dependency array useEffect will be called whenever dependency items updated
  //   useEffect(()=>{
  //   console.log("useEffect function executed...");
  // },[todos,input]);

  //   useEffect(()=>{
  //   console.log(todos);
  // },[todos]);


  
  //   useEffect(()=>{
  //    document.title=todos.length+" Todes added";
  // },[todos]);


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