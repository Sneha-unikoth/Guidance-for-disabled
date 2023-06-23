import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Notification = () => {
  const user_id = localStorage.getItem('shop_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [inputs, setInputs] = useState({

    shop_id:user_id,
    
    
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
   
  
  
 
    axios.post('http://127.0.0.1:8000/api/notification',inputs).then((data)=>{
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
 
 
  <div className="row">
    <div className="col-md-6">
      <div className="tile">
        <h3 className="tile-title"></h3>
        <div className="tile-body">
        <ToastContainer />
        <form  onSubmit={registerSubmit}>
            
            
            <div className="form-group">
              <label className="control-label">notification</label>
              <textarea 
              name="notification"
              rows={4}
              value={inputs.notification|| ""}
              onChange={setRegister}
                className="form-control"
                type="notification"
                placeholder="Enter the notification"
              />
            </div>
        
            <div className="form-group">
              <label className="control-label">date</label>
              <input
                              
                              type="date"

              name="date"
               value={inputs.date|| ""}
               onChange={setRegister}
                className="form-control"
                
                
              />
            </div>
           
            
            <div className="form-group">
            <button className="btn btn-primary" type="submit">
            <i className="fa fa-fw fa-lg fa-check-circle"/>
            Submit
          </button>
            </div>
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
  
    <div className="clearix" />
    
   
  </div>
</main>

    </div>
  )
}

export default Notification
