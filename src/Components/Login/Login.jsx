
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post(`http://127.0.0.1:8000/api/login`,Input).then((response)=>{
        console.log(response.data);
        
        if (response.data.success === true) {
          if (response.data.data.role === "user") {
            localStorage.setItem("name", response.data.data.username)
            localStorage.setItem("login_id", response.data.data.login_id)
            localStorage.setItem("role", response.data.data.role)
            localStorage.setItem("user_id", response.data.data.user_id)
              sessionStorage.setItem("currentloggedin", response.data.username);
              navigate('/home')
          }
          else if (response.data.data.role === "shop") {
            localStorage.setItem("name", response.data.data.username)
            localStorage.setItem("login_id", response.data.data.login_id)
            localStorage.setItem("role", response.data.data.role)
            localStorage.setItem("shop_id", response.data.data.user_id)
            sessionStorage.setItem("currentloggedin", response.data.username);
              navigate("/Shopowner")
          }   
        
          else{
          localStorage.setItem("name", response.data.data.username)
          localStorage.setItem("login_id", response.data.data.login_id)
          localStorage.setItem("role", response.data.data.role)
          localStorage.setItem("worker_id", response.data.data.user_id)
          sessionStorage.setItem("currentloggedin", response.data.username);
            navigate("/worknav")
        }
         
      }
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  return (

    <div>
      <div id='center'>
      <div className="col-md-4 mb-5">
  <h5 className="font-weight-bold text-dark mb-4">Login</h5>
   <form onSubmit={validation}>
    <div className="form-group">
    <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
      <input
        type="text" 
        onChange={inputChange}
        onClick={()=>{setformErrors({...formErrors,username:""})}}
        className="form-control border-0 py-4"
        placeholder="username"
        name="username"
        
      />
    </div>
    <div className="form-group">
    <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>

      <input
        type="password"
        onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,password:""})}}
        className="form-control border-0 py-4"
        placeholder="password"
        name="password"
       
      />
    </div>
    <div>
      <button className="btn btn-primary btn-block border-0 py-3" type="submit">
      Login
      </button>
    </div>
  </form>
  </div>
</div>

    </div>
  )
}

export default Login
