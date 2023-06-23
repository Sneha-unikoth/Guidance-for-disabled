import React from 'react'
import Navbar from '../Components/Navbar'
import Foot from '../Components/Foot'
import Toiletlocation from '../Components/Nearby/Toiletlocation'

const Toiletpage = () => {
  return (
    <div>
      <Navbar />
   <Toiletlocation />
      <Foot />
    </div>
  )
}

export default Toiletpage
