
import { useParams } from 'react-router-dom'
import axios from "axios";
import React, { useEffect, useState } from "react";

const Productdescription = () => {
  const {id}=useParams()
  const [inputs, setInputs] = useState([]);
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

  return (
    <div>
        {/* {inputs.map((data)=>( */}
      <div className="row px-xl-5">
  <div className="col">
    
    
    <div className="nav nav-tabs justify-content-center border-secondary mb-4">
      <a
        className="nav-item nav-link active"
        data-toggle="tab"
        href="#tab-pane-1"
      >
        Description
      </a>
      <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">
        Information
      </a>
      <a className="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">
        Reviews (0)
      </a>
    </div>
    <div className="tab-content">
      <div className="tab-pane fade show active" id="tab-pane-1">
        <h4 className="mb-3">Product Description</h4>
        <p>
     {inputs.description}
        </p>
       
      </div>
      <div className="tab-pane fade" id="tab-pane-2">
        {/* <h4 className="mb-3">Additional Information</h4>
        <p>
        The electromagnetic brake is smart to have an instant stop. The honeycomb front wheel could inflatable to absorb the vibration. 
        This model electric wheel chair, you could have the remotter as accessories if you need.
         
        </p> */}
        <div className="row">
          <div className="col-md-6">
           
          </div>
         
        </div>
      </div>
      {/* <div className="tab-pane fade" id="tab-pane-3">
        <div className="row">
          <div className="col-md-6">
            <h4 className="mb-4">1 review for "wheelchair"</h4>
            <div className="media mb-4">
              <img
                src="img/user.jpg"
                alt="Image"
                className="img-fluid mr-3 mt-1"
                style={{ width: 45 }}
              />
              <div className="media-body">
                <h6>
                  John Doe
                  <small>
                    {" "}
                    - <i>01 Jan 2023</i>
                  </small>
                </h6>
                <div className="text-primary mb-2">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <i className="far fa-star" />
                </div>
                <p>
                  Diam amet duo labore stet elitr ea clita ipsum, tempor labore
                  accusam ipsum et no at. Kasd diam tempor rebum magna dolores
                  sed sed eirmod ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4 className="mb-4">Leave a review</h4>
            <small>
              Your email address will not be published. Required fields are
              marked *
            </small>
            <div className="d-flex my-3">
              <p className="mb-0 mr-2">Your Rating * :</p>
              <div className="text-primary">
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="message">Your Review *</label>
                <textarea
                  id="message"
                  cols={30}
                  rows={5}
                  className="form-control"
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="form-group mb-0">
                <input
                  type="submit"
                  defaultValue="Leave Your Review"
                  className="btn btn-primary px-3"
                />
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </div>
    
  </div>
</div>
{/* // ))} */}
    </div>
  )
}

export default Productdescription
