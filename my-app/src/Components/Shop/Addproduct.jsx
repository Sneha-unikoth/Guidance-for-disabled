


import React, { useState } from "react";
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addproduct = () => {
  const user_id = localStorage.getItem('user_id')
  const [isSubmit, setIssubmit] = useState(false)
  const [img, setImg] = useState()
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
  
  
 
  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
   
  const formData = new FormData()
  formData.append('image',img)
  
 
    axios.post('http://127.0.0.1:8000/api/product',inputs,formData).then((data)=>{
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
    <div className='cr'>
     <ToastContainer />
        <form  onSubmit={registerSubmit}>
      <div className="tile">
          <h3 className="tile-title"><u>Product</u></h3></div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
      Name
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        name="incidenttype"
        value={inputs.product_name|| ""}
        onChange={setRegister}
        className="form-control"
        id=""
        placeholder=""
      />
    </div>
  </div>
  <div className="form-group row">
    <label className="col-sm-2 col-form-label">
    price
    </label>
    <div className="col-sm-8">
    <input
                              
                              type="text"

              name="product_rate"
               value={inputs. product_rate||""}
               onChange={setRegister}
                className="form-control"
                
                
              />
    </div>
  </div>
  <div className="form-group row">
    <label htmlFor="" className="col-sm-2 col-form-label">
      color
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        name="color"
        value={inputs.color|| ""}
        onChange={setRegister}
        className="form-control"
        id=""
        placeholder=""
      />
    </div>
  </div>
  <div className="form-group row">
              <label className="control-label col-md-2"> Description</label>
                <div className="col-md-8">
                  <textarea
                   name="description"
                   value={inputs.description|| ""}
                   onChange={setRegister}
                    className="form-control"
                    rows={4}
                    placeholder=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="form-group row">
    <label htmlFor="" className="col-sm-2 col-form-label">
    size
    </label>
    <div className="col-sm-8">
      <input
        type="text"
        name="size"
                   value={inputs.size|| ""}
                   onChange={setRegister}
        className="form-control"
        id=""
        placeholder=""
      />
    </div>
  </div>
 
  

  <div className="form-group row">
                <label className="control-label col-md-2">Image</label>
                <div className="col-md-8">
                  <input className="form-control" type="file" name="image" onChange={(e)=>setImg({...img,image:e.target.files[0]})} />
                </div>
              </div>
             
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">
        SUBMIT
      </button>
    </div>
  </div>
</form>

    </div>
  )
}

export default Addproduct
