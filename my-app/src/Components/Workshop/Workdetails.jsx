import React from 'react'

const Workdetails = () => {
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
                  <th>user Name</th>
                  <th>worker name</th>
                  <th>user contact</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>celvin</td>
                  <td>9895976181</td>
                  <td>12/2/23</td>
                  <td>
                    <button className="btn btn-success" type="button">
                      Approve
                    </button>
                    <button className="btn btn-danger" type="button">
                      Reject
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>cathlon</td>
                  <td>9895976181</td>
                  <td>11/1/23</td>
                  <td>
                    <button className="btn btn-success" type="button">
                      Approve
                    </button>
                    <button className="btn btn-danger" type="button">
                      Reject
                    </button>
                  </td>
                </tr>
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

export default Workdetails
