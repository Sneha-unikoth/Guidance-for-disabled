import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Productview from '../../Pages/Productview'
import Userhome from '../../Pages/Userhome'
import Productdetails from '../Pagedetailcomponent/Productdetails'
import Contact from '../../Pages/Contact'
import Checkout from '../../Pages/Checkout'
import Cart from '../../Pages/Cart'
import Loginpage from '../../Pages/Loginpage'
import Userregistration from '../../Pages/Userregistration'
import Servicepage from '../../Pages/Servicepage'
import Hospitalpage from '../../Pages/Hospitalpage'
import Policestationpage from '../../Pages/Policestationpage'
import Toiletpage from '../../Pages/Toiletpage'
import Aboutpage from '../../Pages/Aboutpage'




const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/'element={<Userhome/>}/>
        <Route path='/product'element={<Productview/>}/>
        <Route path='/login'element={<Loginpage/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/service'element={<Servicepage/>}/>
        <Route path='/register'element={<Userregistration/>}/>
        <Route path='/hospital'element={<Hospitalpage/>}/>
        <Route path='/policestation'element={<Policestationpage/>}/>
        <Route path='/Toilet'element={<Toiletpage/>}/>
        <Route path='/About'element={<Aboutpage/>}/>


       
        
      </Routes>
    </div>
  )
}

export default Mainrouter
