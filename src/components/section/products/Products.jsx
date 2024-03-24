import React, { useEffect } from 'react'

import './productStyle.css'

const Products = ({addToCartParentAction,products}) => {

    const productList=products

   

  return (
    <div className="products">
        { productList.map((prod)=> {
            return <div className="product" key={prod.name}>
                        <p>{prod.name}</p>
                        <button onClick={addToCartParentAction}>Add to cart</button>
                    </div>
        } ) }
    </div>
  )
}

export default Products