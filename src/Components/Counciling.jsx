import axios from "axios";
import React, { useEffect, useState } from "react";

const Counciling = () => {
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
   
    axios
      .get(
        `http://127.0.0.1:8000/api/counciling`
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
  
  <div className="row">
  {/* {inputs.map((data,key)=>( */}
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
                  <th>Counciling type</th>
                  <th>Date</th>
                  <th>Description</th>
                 
                  
                </tr>
              </thead>
              <tbody>
              {inputs.map((data,key)=>(
                <tr>
                  <td>{data.counciling_type}</td>
                  <td>{data.date}</td>
                  <td>{data.description}</td>
                  
                  {/* <td><button class="btn btn-primary" type="button"><a class="app-manu_item" 
                  href={`/REPLAY/${data.id}`}>Replay</a></button></td> */}
                
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

export default Counciling
