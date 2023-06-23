import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Shopwork = () => {
  const user_id = localStorage.getItem('shop_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [inputs, setInputs] = useState({

    user_id:user_id,
    
    
  });
  const setRegister = (event) => {  
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;   
    setInputs({...inputs, [name]: value });
    console.log(inputs);
  };
  // const Submit = (event) => {
  //   event.preventDefault();

   

  //   console.log("data",inputs);
  // };
  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
   
  
  
 
    axios.post('http://127.0.0.1:8000/api/shops',inputs).then((data)=>{
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
  
  };


  return (
    <div>
      <main className="app-content">
  {/* <div class="app-title">
  <div>
    <h1><i class="fa fa-dashboard"></i> Blank Page</h1>
    <p>Start a beautiful journey here</p>
  </div>
  <ul class="app-breadcrumb breadcrumb">
    <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
    <li class="breadcrumb-item"><a href="#">Blank Page</a></li>
  </ul>
</div> */}
  
  <div className="row">
    <div className="col-md-6">
      <div className="tile">
        <h3 className="tile-title">Assign work</h3>
        <div className="tile-body">
        <ToastContainer />
        <form  onSubmit={registerSubmit}>
            {/* <div class="form-group">
            <label class="control-label">Name</label>
            <input class="form-control" type="text" placeholder="Enter full name">
          </div> */}
            {/* <div class="form-group">
            <label class="control-label">workername</label>
            <textarea class="form-control" rows="4" placeholder="Enter your notification"></textarea>
          </div> */}
            <div className="form-group">
              <label className="control-label">user name</label>
              <input
              name="name"
               value={inputs.name|| ""}
               onChange={setRegister}
                className="form-control"
                type="text"
               
              />
            </div>
            <div className="form-group">
              <label className="control-label">worker name</label>
              <input
                name="worker_name"
                value={inputs.worker_name|| ""}
                onChange={setRegister}
                 className="form-control"
                 type="text"
              />
            </div>
            <div className="form-group">
              <label className="control-label">user contact</label>
              <input
                 name="user_contact"
                 value={inputs.user_contact|| ""}
                 onChange={setRegister}
                  className="form-control"
                  type="text"
              />
            </div>
            <div className="form-group">
              <label className="control-label">Date</label>
              <input
                name="date"
                value={inputs.date|| ""}
                onChange={setRegister}
                 className="form-control"
                 type="date"
             />
            </div>
           
           
           
            <div className="form-group">
             
            </div>
            <button className="btn btn-primary" type="submit">
            <i className="fa fa-fw fa-lg fa-check-circle" />
            Submit
          </button>
          
          </form>
        </div>
        <div className="tile-footer">
          
          &nbsp;&nbsp;&nbsp;
          <a className="btn btn-secondary" href="#">
            <i className="fa fa-fw fa-lg fa-times-circle" />
            Remove
          </a>
        </div>
      </div>
    </div>
    {/* <div class="col-md-6">
    <div class="tile">
      <h3 class="tile-title">Register</h3>
      <div class="tile-body">
        <form class="form-horizontal">
          <div class="form-group row">
            <label class="control-label col-md-3">Name</label>
            <div class="col-md-8">
              <input class="form-control" type="text" placeholder="Enter full name">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">Email</label>
            <div class="col-md-8">
              <input class="form-control col-md-8" type="email" placeholder="Enter email address">
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">Address</label>
            <div class="col-md-8">
              <textarea class="form-control" rows="4" placeholder="Enter your address"></textarea>
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">Gender</label>
            <div class="col-md-9">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="gender">Male
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="radio" name="gender">Female
                </label>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label class="control-label col-md-3">Identity Proof</label>
            <div class="col-md-8">
              <input class="form-control" type="file">
            </div>
          </div>
          <div class="form-group row">
            <div class="col-md-8 col-md-offset-3">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox">I accept the terms and conditions
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="tile-footer">
        <div class="row">
          <div class="col-md-8 col-md-offset-3">
            <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-check-circle"></i>Register</button>&nbsp;&nbsp;&nbsp;<a class="btn btn-secondary" href="#"><i class="fa fa-fw fa-lg fa-times-circle"></i>Cancel</a>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    <div className="clearix" />
    {/* <div class="col-md-12">
    <div class="tile">
      <h3 class="tile-title">Subscribe</h3>
      <div class="tile-body"> */}
    {/* <form class="row">
          <div class="form-group col-md-3">
            <label class="control-label">Name</label>
            <input class="form-control" type="text" placeholder="Enter your name">
          </div>
          <div class="form-group col-md-3">
            <label class="control-label">Email</label>
            <input class="form-control" type="text" placeholder="Enter your email">
          </div>
          <div class="form-group col-md-4 align-self-end">
            <button class="btn btn-primary" type="button"><i class="fa fa-fw fa-lg fa-check-circle"></i>Subscribe</button>
          </div>
        </form> */}
    {/* </div>
    </div> */}
  </div>
</main>

    </div>
  )
}

export default Shopwork
