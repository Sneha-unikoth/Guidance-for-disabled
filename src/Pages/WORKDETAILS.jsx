import React from 'react'
import Workdetails from '../Components/Workshop/Workdetails'
import Workfoot from '../Components/Workshop/Workfoot'
import Workernav from '../Components/Workshop/Workernav'

// import Workpics from '../Components/Workshop/Workpics'

const WORKDETAILS = () => {
  return (
    <div>
     
      <Workernav />
      {/* <Workpics /> */}
      <Workdetails />
    
      <Workfoot />
    </div>
  )
}

export default WORKDETAILS
