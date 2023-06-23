import axios from "axios";
import React, { useEffect, useState } from "react";

const Viewreplay = () => {
  const [inputs, setInputs] = useState([]);
  const user_id = localStorage.getItem('user_id');
  console.log(inputs)

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/singlereplay/${user_id}`,inputs)
      .then((response) => {
        console.log(response);
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log("data", inputs);

  return (
    <div className="policecomplaint">
      <main className="app-content">
        <div className="row">
          <div className="col-md-12">
            <div className="tile">
              <div className="tile-body">
                <div className="table-responsive">
                  <table className="table table-hover table-bordered" id="sampleTable">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Complaints</th>
                        <th>Replay</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inputs.map((data, key) => (
                        <tr key={key}>
                          <td>{data.name}</td>
                          <td>{data.date}</td>
                          <td>{data.complaints}</td>
                          <td>{data.replay}</td>
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
  );
};

export default Viewreplay;