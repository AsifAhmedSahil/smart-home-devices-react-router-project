import React, { useContext, useState } from 'react'
import { ProductContext } from './Root'
import Product from "./Product"




const Shop = () => {
  const products = useContext(ProductContext)
  // console.log(products);
  const[cart,setCart] = useState([])
  console.log(cart);

  const handleProduct = (product)=>{
    // console.log(product)
    setCart(previous=>[...previous,product])
  }
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        
          {
            products.map(product=><Product key={product.id} product={product} handleProduct={handleProduct}/>)
          }
      </div>
    </div>
  )
}

export default Shop
