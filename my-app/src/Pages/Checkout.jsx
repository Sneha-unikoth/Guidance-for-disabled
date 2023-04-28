import React from 'react'
import Navbar from '../Components/Navbar'
import Checkoutpage from '../Components/Checkout/Checkoutpage'
import Orderpage from '../Components/Checkout/Orderpage'
import Foot from '../Components/Foot'
import Search from '../Components/Checkout/Search'

const Checkout = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Checkoutpage />
      <Orderpage />
      <Foot />
    </div>
  )
}

export default Checkout
