import React from 'react'

import './headerStyle.css'

const Header = () => {
  return (

     <header>
        <h1>My heading </h1>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Registration</a></li>
                <li><a href="">Upload</a></li>
                <li><a href="">Contact us</a></li>
            </ul>
        </nav>
     </header>
 
  )
}

export default Header