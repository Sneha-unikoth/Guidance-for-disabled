import React from 'react'
import Shopwork from '../Components/Shop/Shopwork'
import Navshopowners from '../Components/Shop/Navshopowners'
import Shoppics from '../Components/Shoppics'
import Footershop from '../Components/Shop/Footershop'

const SHOPWORK = () => {
  return (
    <div>
      <Navshopowners />
      
      <Shopwork/>
      <Shoppics />
      <Footershop />
    </div>
  )
}

export default SHOPWORK
