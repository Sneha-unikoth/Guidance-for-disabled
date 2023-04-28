import React from 'react'
import Navbar from '../Components/Navbar'
import Pageheader from '../Components/Pagedetailcomponent/Pageheader'
import Productdescription from '../Components/Pagedetailcomponent/Productdescription'
import Foot from '../Components/Foot'
const Productview = () => {
  return (
    <div>
      <Navbar />
      <Pageheader />
      <Productdescription />
      <Foot />
    </div>
  )
}

export default Productview
