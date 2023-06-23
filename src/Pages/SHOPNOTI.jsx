import React from 'react'
import Navshopowners from '../Components/Shop/Navshopowners'
import Shoppics from '../Components/Shoppics'
import Footershop from '../Components/Shop/Footershop'
import Notification from '../Components/Shop/Notification'

const SHOPNOTI = () => {
  return (
    <div>
      <Navshopowners/>
      <Notification />
      <Shoppics />
      <Footershop />
    </div>
  )
}

export default SHOPNOTI
