import axios from "axios";
import React, { useEffect, useState } from "react";

const Userorderview = () => {
  const [inputs, setInputs] = useState([]);
  const user_id = localStorage.getItem('user_id')
  useEffect(() => {
  //   const formData = new FormData()
  // formData.append('image',inputs.image)
  // formData.append('product_name',inputs.product_name)
  // formData.append('total_price',inputs.total_price)
  // formData.append('quantity',inputs.quantity)
  // formData.append('user_id',inputs.user_id)
  // formData.append('shop_id',inputs.shop_id)
  
    axios
      .get(`http://127.0.0.1:8000/api/singleorder/${user_id}`,inputs)
      .then((response) => {
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      });
  }, []);
  console.log("data", inputs);
  
  return (
    <div>
      <main className="app-content">
  
  <div className="row">
  
    <div className="col-md-12">
      <div className="tile">
        <div className="tile-body">
          <div className="table-responsive">
            <table
              className="table table-hover table-bordered"
              id="sampleTable"
            >
              <thead>
                <tr>
                  <th>product</th>
                  
                  <th>quantity</th>
                  <th>total_price</th>
                  <th>image</th>
    
                </tr>
              </thead>
              <tbody>
              {inputs.map((data,key)=>(
                <tr>
                  <td>{data.product_name}</td>
                 
                  <td>{data.quantity}</td>
                  <td>{data.total_price}</td>
                  <td>{data.image}</td>
                 
                  
                </tr>
                
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
     
  </div>
</main>

    </div>
  )
}

export default Userorderview
