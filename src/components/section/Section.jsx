import React, { useEffect, useState } from 'react'
import './sectionStyle.css'
import Products from './products/Products'
const Section = () => {

 const [count,setCount]=useState(0)
 const productList=[{name:"Mango"},{name:"Rasna"},{name:"Chicken"},{name:"Loly"},{name:"Chil"},{name:"Kab"}]

 const addToCartParentHandler=()=>
 {
      setCount((prev)=>  ++prev);
 }

  return (
    <section>
        <div className="cart-container">
            <button className="checkout">
                <span>{count}</span>
                Checkout
            </button>
        </div>
        <Products addToCartParentAction={addToCartParentHandler} products={productList} />
    </section>
  )
}

export default Section