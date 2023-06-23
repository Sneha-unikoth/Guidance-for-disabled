import React from 'react'
import Navbar from '../Components/Navbar'
import Foot from '../Components/Foot'

import Hospitallocation from '../Components/Nearby/Hospitallocation'

const Hospitalpage = () => {
  return (
    <div>
      <Navbar />
      <Hospitallocation />
      <Foot />
    </div>
  )
}

export default Hospitalpage
