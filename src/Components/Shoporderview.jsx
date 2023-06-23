import axios from "axios";
import React, { useEffect, useState } from "react";

const Shoporderview = () => {
  const [inputs, setInputs] = useState([]);
  const shop_id = localStorage.getItem('shop_id')
 
  useEffect(() => {
  
    axios
      .get(`http://127.0.0.1:8000/api/all_order`,inputs)
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
  {/* <div class="app-title">
    <div>
      <h1><i class="fa fa-th-list"></i> Data Table</h1>
      <p>Table to display analytical data effectively</p>
    </div>
    <ul class="app-breadcrumb breadcrumb side">
      <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
      <li class="breadcrumb-item">Tables</li>
      <li class="breadcrumb-item active"><a href="#">Data Table</a></li>
    </ul>
  </div> */}
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
                  <th>Date</th>
                  <th>quantity</th>
                  <th>total_price</th>
                  <th>image</th>
    
                </tr>
              </thead>
              {inputs.map((data,key)=>(
              <tbody>
                <tr>
                  <td>{data.product_name}</td>
                  <td>{data.date}</td>
                  <td>{data.quantity}</td>
                  <td>{data.total_price}</td>
                  <td>{data.image}</td>
                 
                  
                </tr>
               
              </tbody>
              ))}
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

export default Shoporderview
