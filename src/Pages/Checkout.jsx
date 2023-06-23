import React from 'react'
import Navbar from '../Components/Navbar'
import Checkoutpage from '../Components/Checkout/Checkoutpage'
import Orderpage from '../Components/Checkout/Orderpage'
import Foot from '../Components/Foot'


const Checkout = () => {
  return (
    <div>
      <Navbar />
   
      <Checkoutpage />
      <Orderpage />
      <Foot />
    </div>
  )
}

export default Checkout
