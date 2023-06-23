import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from "react-router-dom";




const Replays = () => {
  const {id}=useParams()
  const complaint_id = localStorage.getItem('complaint_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [inputs, setInputs] = useState({

    complaint_id:complaint_id,
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
   
  
  
 
    axios.post(`http://127.0.0.1:8000/api/replay/${id}`,inputs).then((data)=>{
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
              <label className="control-label">Replay</label>
              <input
                              
                              type="text"

              name="replay"
               value={inputs.replay|| ""}
               onChange={setRegister}
                className="form-control"
                
                
              />
            </div>
           
            
        
            {/* <div className="form-group">
              <label className="control-label">date</label>
              <input
                              
                              type="date"

              name="date"
               value={inputs.date|| ""}
               onChange={setRegister}
                className="form-control"
                
                
              />
            </div> */}
           
            <div className="form-group row">
           <div className="col-sm-10">
            <button className="btn btn-primary" type="submit">
            <i className="fa fa-fw fa-lg fa-check-circle"/>
            Submit
          </button>
            </div>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  
    <div className="clearix" />
    
   
  </div>
</main>

    </div>
  )
}

export default Replays
