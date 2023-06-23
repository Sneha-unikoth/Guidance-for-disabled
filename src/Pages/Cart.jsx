import React from 'react'
import Navbar from '../Components/Navbar'
import Cartdetails from '../Components/Cart/Cartdetails'
import Cartshopping from '../Components/Cart/Cartshopping'
import Foot from '../Components/Foot'

const Cart = () => {
  return (
    <div>
      <Navbar />
    
      <Cartshopping />
      <Cartdetails />
      <Foot />
    </div>
  )
}

export default Cart
