import { Link,useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Cartdetails = () => {
const navigate= useNavigate()
const {id}=useParams()
const user_id = localStorage.getItem('user_id')

const [total, setTotal] = useState([]);


 useEffect(() => {
  
   axios.get(`http://127.0.0.1:8000/api/all_price/${id}`,total).then((response)=>{
       if (response.data.success === true) {
        setTotal(response.data.data);
       }
     });
 }, []);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios.get(`http://127.0.0.1:8000/api/get_single_cart/${id}`,inputs).then((response)=>{
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  

  
  console.log("data", inputs);
  const plus=(cart_id)=>{
    console.log(cart_id)
    axios.put(`http://127.0.0.1:8000/api/CartIncrementQuantity/${cart_id}`,inputs).then((response)=>{  
      if (response.data.success === true) {
        setInputs(response.data.data);
      }
    });

  }
  console.log("data", inputs);
  const minus=(cart_id)=>{
    axios.put(`http://127.0.0.1:8000/api/CartDecrementQuantity/${cart_id}`,inputs).then((response)=>{  
      if (response.data.success === true) {
        setInputs(response.data.data);
      }
    });

  }

  
  console.log("data", inputs);
  const remove=(cart_id)=>{
    axios.delete(`http://127.0.0.1:8000/api/Cartdelete/${cart_id}`,inputs).then((response)=>{  
      if (response.data.success === true) {
        setInputs(response.data.data);
      }
    });

  }
  console.log("data", inputs);
  const checkout=()=>{
   
    
        navigate(`/checkout`)
          
    // axios
    // .post(
    //   `http://127.0.0.1:8000/api/payment`,data).then((response) => {
    //   console.log(response);
    //   navigate(`/checkout/${user_id}`)
        
    
    // });
  }
  
  return (
    <div>
      <div className="container-fluid pt-5">
  <div className="row px-xl-5">
  {/* {inputs.map((data,key)=>( */}
    <div className="col-lg-8 table-responsive mb-5">
      <table className="table table-bordered text-center mb-0">
        <thead className="bg-secondary text-dark">
          <tr>
            <th>Product_name</th>
            <th>Image</th>

            {/* <th>Price</th> */}
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody className="align-middle">
        {inputs.map((data,key)=>(
          <tr>
          <td className="align-middle">{data.product_name}</td>

            <td className="align-middle">
              {/* <img src="img/71ynv0GRbUL._SL1500_540x.webp" alt="" style={{ width: 50 }} />{" "} */}
              <img className="w-100 h-100" src={`/server${data.image}`}/>
             
            </td>
            {/* <td className="align-middle">{data.product_rate}</td> */}
            <td className="align-middle">
              <div
                className="input-group quantity mx-auto"
                style={{ width: 100 }}
              >
                <div className="input-group-btn">
                  <button onClick= {()=>{minus(data.id)}} className="btn btn-sm btn-primary btn-minus">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm bg-secondary text-center"
                  value={data.quantity}
                />
                <div className="input-group-btn">
                  <button onClick= {()=>{plus(data.id)}} className="btn btn-sm btn-primary btn-plus">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </td>
            <td className="align-middle">{data.total_price}</td>
            <td className="align-middle">
              <button onClick= {()=>{remove(data.id)}} className="btn btn-sm btn-primary">
                <i className="fa fa-times" />
              </button>
            </td>
          </tr>


))}
        </tbody>
      
      </table>
    </div>
    {/* ))} */}
     {/* {total.map((data,key)=>( */}
    <div className="col-lg-4">
   
      <form className="mb-5" action="">
       
      </form>
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">product_name</h6>
            <h6 className="font-weight-medium">total_price </h6>
          </div>


          {inputs.map((data,key)=>(
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">{data.product_name}</h6>
            <h6 className="font-weight-medium">{data.total_price}</h6>
          </div>
             ))}
        </div>
       
   
        <div className="card-footer border-secondary bg-transparent">
          <div className="d-flex justify-content-between mt-2">
            <h5  className="font-weight-bold">Total</h5>
           
            <h5  className="font-weight-bold">{total.total_price}</h5>
        
          </div>
          {/* <button className="btn btn-block btn-primary my-3 py-3"> */}
          <button onClick={checkout} className="btn btn-primary px-3">
            Proceed To Checkout
          </button>
        </div>
     
      </div>
     
    </div>
     {/* ))} */}
  </div>
</div>

    </div>
  )
}

export default Cartdetails
