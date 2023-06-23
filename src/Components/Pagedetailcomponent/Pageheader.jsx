
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Pageheader = () => {
  const navigate= useNavigate()
  const {id}=useParams()
  const user_id = localStorage.getItem('user_id')
  const [inputs, setInputs] = useState([]);
  const [data, setData] = useState({
    user:user_id,
    product:id,
  });
  useEffect(() => {
   
    axios
      .get(
        `http://127.0.0.1:8000/api/get_single_product/${id}`
      )
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  const addcart=(e)=>{
    console.log("hi");
        // navigate(`/Cart/${user_id}`)
   
    axios
      .post(
        `http://127.0.0.1:8000/api/cart`,data
      )
      .then((response) => {
        console.log(response);
        navigate(`/Cart/${user_id}`)
          
      
      });
  
   
 
   
  
  }
  return (
    <div>
      <div className="container-fluid py-5">
  <div className="row px-xl-5">
    <div className="col-lg-5 pb-5">
      <div
       
      >
        <div className="carousel-inner border">
        
          
            <img className="w-100 h-100" src={`/server${inputs.image}`}/>
          
        
          
        </div>
       
      
      </div>
    </div>
    <div className="col-lg-7 pb-5">
      <h3 className="font-weight-semi-bold">{inputs.product_name}</h3>
     
      <h3 className="font-weight-semi-bold mb-4">{inputs.product_rate}</h3>
      <p className="mb-4">
    {inputs.description}
      </p>
      <div className="d-flex mb-3">
        <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
        <form>
          
          
          
         
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="size-5"
              name="size"
            />
            <label className="custom-control-label" htmlFor="size-5">
              {inputs.size}
            </label>
          </div>
        </form>
      </div>
      <div className="d-flex mb-4">
        <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
        <form>
          <div className="custom-control custom-radio custom-control-inline">
            <input
              type="radio"
              className="custom-control-input"
              id="color-1"
              name="color"
            />
            <label className="custom-control-label" htmlFor="color-1">
              {inputs.color}
            </label>
          </div>
         
         
         
          
        </form>
      </div>
      <div className="d-flex align-items-center mb-4 pt-2">
        {/* <div className="input-group quantity mr-3" style={{ width: 130 }}>
          <div className="input-group-btn">
            <button className="btn btn-primary btn-minus">
              <i className="fa fa-minus" />
            </button>
          </div>
          <input
            type="text"
            className="form-control bg-secondary text-center"
            defaultValue={1}
          />
          <div className="input-group-btn">
            <button className="btn btn-primary btn-plus">
              <i className="fa fa-plus" />
            </button>
          </div>
        </div> */}
        {/* <Link to={"cart"}> */}
        <div>
        
        {/* <a href={`/cart/${inputs.id}`} className="btn btn-sm text-dark p-0"></a> */}
        <button onClick={addcart} className="btn btn-primary px-3">

          <i className="fa fa-shopping-cart mr-1" /> Add To Cart
       </button> 
        {/* </Link> */}
        </div>
      </div>
   
  </div>
</div>
</div>
    </div>
  )
}

export default Pageheader
