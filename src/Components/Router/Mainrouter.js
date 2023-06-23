import React from 'react'
import {Routes,Route} from 'react-router-dom'
// import Productview from '../../Pages/Productview'
import Userhome from '../../Pages/Userhome'
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
import SHOPOWNERHOME from '../../Pages/SHOPOWNERHOME'
import SHOPORDER from '../../Pages/SHOPORDER'
import SHOPPAYMENT from '../../Pages/SHOPPAYMENT'
import SHOPCOMPLAINT from '../../Pages/SHOPCOMPLAINT'
import SHOPFEEDBACK from '../../Pages/SHOPFEEDBACK'
import SHOPWORK from '../../Pages/SHOPWORK'
import WORKNAV from '../../Pages/WORKNAV'
import WORKDETAILS from '../../Pages/WORKDETAILS'
import SHOPNOTI from '../../Pages/SHOPNOTI'
import Publicuser from '../../Pages/Publicuser'

import Sregister from '../../Pages/Sregister'
import PRODUCTS from '../../Pages/PRODUCTS'
import USERNOTI from '../../Pages/USERNOTI'
import FORMCOMPLAINT from '../../Pages/FORMCOMPLAINT'
import Pageheader from '../Pagedetailcomponent/Pageheader'
import ADDPRODUCT from '../../Pages/ADDPRODUCT'
import REPLAY from '../../Pages/REPLAY'


import FORMFEEDBACK from '../../Pages/FORMFEEDBACK'
import SHOPORDERVIEW from '../../Pages/SHOPORDERVIEW'
import USERORDERVIEW from '../../Pages/USERORDERVIEW'
import REPLAYVIEW from '../../Pages/REPLAYVIEW'
import COUNCILING from '../../Pages/COUNCILING'
import WORKERREGPAGE from '../../Pages/WORKERREGPAGE'











const Mainrouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/home'element={<Userhome/>}/>
        <Route path='/product/:id'element={<Pageheader/>}/>
        <Route path='/login'element={<Loginpage/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/Viewreplay'element={<REPLAYVIEW/>}/>
        
        <Route path='/Cart/:id'element={<Cart/>}/>
        <Route path='/service'element={<Servicepage/>}/>
        <Route path='/register'element={<Userregistration/>}/>
        <Route path='/hospital'element={<Hospitalpage/>}/>
        <Route path='/policestation'element={<Policestationpage/>}/>
        <Route path='/Toilet'element={<Toiletpage/>}/>
        <Route path='/About'element={<Aboutpage/>}/>
        <Route path='/Shopowner'element={<SHOPOWNERHOME/>}/>
       
        <Route path='/Shoppayment'element={<SHOPPAYMENT/>}/>
        <Route path='/Shopcomplaint'element={<SHOPCOMPLAINT/>}/>
        <Route path='/Shopfeedback'element={<SHOPFEEDBACK/>}/>
        <Route path='/SHOPWORK'element={<SHOPWORK/>}/>
        <Route path='/worknav'element={<WORKNAV/>}/>
        <Route path='/Shoporder'element={<SHOPORDER/>}/>
        <Route path='/workdetails'element={<WORKDETAILS/>}/>
        <Route path ='/notification'element={<SHOPNOTI/>}/>
        <Route path ='/'element={<Publicuser/>}/>
        <Route path ='/Registers'element={<Sregister/>}/>
        <Route path ='/PRODUCTS'element={<PRODUCTS/>}/>
        <Route path ='/USERNOTI'element={<USERNOTI/>}/>
        <Route path ='/FORMCOMPLAINT'element={<FORMCOMPLAINT/>}/>
        <Route path ='/ADDPRODUCT'element={<ADDPRODUCT/>}/>
        <Route path ='/REPLAY/:id'element={<REPLAY/>}/>
        <Route path='/FORMFEEDBACK'element={<FORMFEEDBACK/>}/>
        <Route path='/Shoporderview'element={<SHOPORDERVIEW/>}/>
        <Route path='/Userorderview'element={<USERORDERVIEW/>}/>
        <Route path='/Counciling'element={<COUNCILING/>}/>
        <Route path='/Workerreg'element={<WORKERREGPAGE/>}/>
       
      
       
       
      
      </Routes>
    </div>
  )
}

export default Mainrouter
