import axios from "axios";
import React, { useEffect, useState } from "react";

const Usernoti = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        `http://127.0.0.1:8000/api/get_all_notification`
      )
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
  {inputs.map((data,key)=>(
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
                  <th>Notification</th>
                  <th>Date</th>
    
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{data.notification}</td>
                  <td>{data.date}</td>
                 
                  
                </tr>
                {/* <tr>
                  <td> Williamson</td>
                  <td>2/4/23</td>
                  <td> service is very delay</td>
                  <td>
                    <button className="btn btn-success" type="button">
                      Approve
                    </button>
                    <button className="btn btn-danger" type="button">
                      Reject
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
       ))}
  </div>
</main>

    </div>
  )
}

export default Usernoti
