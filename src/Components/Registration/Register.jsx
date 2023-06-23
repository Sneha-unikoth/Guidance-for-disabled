
import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {

 
  const [inputs, setInputs] = useState({
    
    name:"",
    username:"",
    password:"",
    phone:"",
    place:"",
    disability:"",
    gender:"",
  });
  
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  // const [passwordMatch, setPasswordMatch] = useState(true);

  

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    if(!values.name){
      error.name ="Enter  Name"
    }
    if(!values.phone){
      error.phone ="Enter  phone"
    }
    if(!values.place){
      error.place ="Enter place"
    }
    if(!values.disability){
      error.disability ="Enter disability"
    }
    if(!values.gender){
      error.gender ="Enter gender"
    }
    return error
  }

  console.log("value==>", inputs);
const setRegister = (event) => {
    // console.log("bn",event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    console.log("field",event.target.value);

    
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };
  // const registerSubmit = (event) => {
  //   event.preventDefault();

   

  //   console.log("data",inputs);
  // };

  
  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
    // if (inputs.password === inputs.password) {
    //   // Passwords match, do something (e.g., submit form)
    //   setPasswordMatch(true);
    // } else {
    //   // Passwords don't match, display an error message
    //   setPasswordMatch(false);
    // }
    setformErrors(validate(inputs))
  setIssubmit(true)
  if(Object.keys(formErrors).length === 0 && isSubmit){
    axios.post(' http://127.0.0.1:8000/api/user',inputs).then((data)=>{
      console.log(data);
      // console.log(data.response.data.message);
      toast(data.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      
     
    }).catch((err)=>{
      console.log(err);
      toast(err.response.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }
  };
  return (
    <div>
      <div id='left'>
      <div className="row px-xl-5">
  <div className="col-lg-7 mb-5">
    <div className="contact-form">
      <div id="success" />

      <ToastContainer />
      {/* <form name="sentMessage" id="contactForm" noValidate="novalidate"> */}
      <form  onSubmit={registerSubmit}>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
          <input
            type="text" onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,username:""})}}
            className="form-control"
            name="username"
            placeholder="username"
          />
          <p className="help-block text-danger" />
        </div>
        
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.name? formErrors.name:""}</span>

          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
            value={inputs.name || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,name:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.place? formErrors.place:""}</span>

          <input
            type="text"
            className="form-control"
            name="place"
            placeholder="Place"
            value={inputs.place || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,place:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.disability? formErrors.disability :""}</span>

          <input
            type="text"
            className="form-control"
            name="disability"
            placeholder="disability"
            value={inputs.disability || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,disability:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.gender? formErrors.gender :""}</span>

          <input
            type="text"
            className="form-control"
            name="gender"
            placeholder="Gender"
            value={inputs.gender || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,gender:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.phone? formErrors.phone:""}</span>

          <input
            type="text"
            className="form-control"
            name="phone"
            placeholder="phonenumber"
            value={inputs.phone || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,phone:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
        <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>

           <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            
            value={inputs.password || ""}
            onChange={setRegister}
            
        onClick={()=>{setformErrors({...formErrors,password:""})}}
          />
          <p className="help-block text-danger" />
        </div>
        
        <div>
          <button
            className="btn btn-primary py-2 px-4"
            type="submit"
            id="RegisterButton"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
 </div>
</div>

    </div>
  )
}

export default Register
