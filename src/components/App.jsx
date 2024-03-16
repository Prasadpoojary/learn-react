import React from "react"

const App=()=>
{
    const name="Anu"

    // // JSX must have only one parent, so we can use either of below
    // return <React.Fragment>
    //         <h1>Hello {name}</h1>
    //         <p>I am a good girl</p>
    // </React.Fragment>

        return <>
            <h1>Hello {name}</h1>
            <p>I am a good girl</p>
    </>
            
  
}

export default App


/*
JSX : Javascript + HTML 
Babel compiler converts JSX into plain HTML in browser at runtime

*/



