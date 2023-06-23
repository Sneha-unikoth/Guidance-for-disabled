

import axios from "axios";
import React, { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom'

const Orderpage = () => {
  const user_id = localStorage.getItem('user_id')
  const [total, setTotal] = useState({});
  
  const [datas, setdatas] = useState({
 
    user_id:user_id,
 
  });
  console.log(datas);
  // const {id}=useParams()

  

 


 useEffect(() => {
  
   axios.get(`http://127.0.0.1:8000/api/all_price/${user_id}`).then((response)=>{
       if (response.data.success === true) {
        setTotal(response.data.data);
       }
     });
 }, []);
  
  // const [inputs, setInputs] = useState([]);
  // useEffect(() => {
   
  //   axios
  //     .post(
  //       `http://127.0.0.1:8000/api/payment`
  //     )
  //     .then((response) => {
  //       if (response.data.success === true) {
  //         setInputs(response.data.data);
  //       }
  //     });
  // }, []);
  // console.log("data", inputs);
  // console.log(inputs);
  // console.log("data", inputs);
  const [inputs, setInputs] = useState();
  const pay=()=>{  
    const value=total.total_price  
    setdatas({...datas,total_amount:value})  
    axios
    .post(
      `http://127.0.0.1:8000/api/payment`,datas).then((response) => {
      
        if (response.data.success === true) {
          setInputs(response.data.data);
        }
      console.log(response);

      
   
        
    
    });
  }
  return (
    <div>
      <div className="container-fluid pt-5">
  <div className="row px-xl-5">
    {/* <div className="col-lg-8"> */}
      {/* <div className="mb-4">
        <h4 className="font-weight-semi-bold mb-4">Billing Address</h4>
        <div className="row">
          <div className="col-md-6 form-group">
            <label>First Name</label>
            <input className="form-control" type="text" placeholder="John" />
          </div>
          <div className="col-md-6 form-group">
            <label>Last Name</label>
            <input className="form-control" type="text" placeholder="Doe" />
          </div>
          <div className="col-md-6 form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Mobile No</label>
            <input
              className="form-control"
              type="text"
              placeholder="+123 456 789"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 1</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 2</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Country</label>
            <select className="custom-select">
              <option selected="">United States</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
          </div>
          <div className="col-md-6 form-group">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>State</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>ZIP Code</label>
            <input className="form-control" type="text" placeholder={123} />
          </div>
          <div className="col-md-12 form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="newaccount"
              />
           
            </div>
          </div>
          <div className="col-md-12 form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="shipto"
              />
            
            </div>
          </div>
        </div>
      </div>
      <div className="collapse mb-4" id="shipping-address">
        <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
        <div className="row">
          <div className="col-md-6 form-group">
            <label>First Name</label>
            <input className="form-control" type="text" placeholder="John" />
          </div>
          <div className="col-md-6 form-group">
            <label>Last Name</label>
            <input className="form-control" type="text" placeholder="Doe" />
          </div>
          <div className="col-md-6 form-group">
            <label>E-mail</label>
            <input
              className="form-control"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Mobile No</label>
            <input
              className="form-control"
              type="text"
              placeholder="+123 456 789"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 1</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Address Line 2</label>
            <input
              className="form-control"
              type="text"
              placeholder="123 Street"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Country</label>
            <select className="custom-select">
              <option selected="">United States</option>
              <option>Afghanistan</option>
              <option>Albania</option>
              <option>Algeria</option>
            </select>
          </div>
          <div className="col-md-6 form-group">
            <label>City</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>State</label>
            <input
              className="form-control"
              type="text"
              placeholder="New York"
            />
          </div>
          <div className="col-md-6 form-group">
            <label>ZIP Code</label>
            <input className="form-control" type="text" placeholder={123} />
          </div>
        </div>
      </div>
    </div> */}
    <div className="col-lg-4">
   
      <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">payment </h4>
        </div>
        <div className="card-body">
          {/* <h5 className="font-weight-medium mb-3">Products</h5> */}
          {/* {inputs.map((data,key)=>(
          <div className="d-flex justify-content-between">
            <p>product name</p>
            <p>walking stick</p>
          </div>
        ))}  */}
          {/* <div className="d-flex justify-content-between">
            <p>Colorful Stylish Shirt 2</p>
            <p>$150</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Colorful Stylish Shirt 3</p>
            <p>$150</p>
          </div> */}
          <hr className="mt-0" />
          {/* <div className="d-flex justify-content-between mb-3 pt-1">
            <h6 className="font-weight-medium">Date</h6>
            <h6 className="font-weight-medium">1/11/2023</h6>
          </div> */}
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-medium">Total amount</h6>
            <h6  className="font-weight-bold">{total?.total_price}</h6>
          </div>
        </div>
        {/* <div className="card-footer border-secondary bg-transparent">
          <button>Pay Amount</button> */}
          {/* <div className="d-flex justify-content-between mt-2">
            <h5 className="font-weight-bold">pay Amount</h5>
            <h5 className="font-weight-bold">1200</h5>
          </div> */}
        {/* </div> */}
        {/* <div className="form-group">
            <button className="btn btn-primary" type="submit">
            <i className="fa fa-fw fa-lg fa-check-circle"/>
            Pay Amount
          </button>
            </div> */}
<button onClick={pay} className="btn btn-primary px-3">
           Pay Amount
          </button>
      </div>
 
      {/* <div className="card border-secondary mb-5">
        <div className="card-header bg-secondary border-0">
          <h4 className="font-weight-semi-bold m-0">Payment</h4>
        </div>
        <div className="card-body">
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="paypal"
              />
              <label className="custom-control-label" htmlFor="paypal">
                Paypal
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="directcheck"
              />
              <label className="custom-control-label" htmlFor="directcheck">
                Direct Check
              </label>
            </div>
          </div>
          <div className="">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                className="custom-control-input"
                name="payment"
                id="banktransfer"
              />
              <label className="custom-control-label" htmlFor="banktransfer">
                Bank Transfer
              </label>
            </div>
          </div>
        </div>
        <div className="card-footer border-secondary bg-transparent">
          <button className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3">
            Place Order
          </button>
        </div>
</div> */}


        {/* <div>
  <hr className="my-4" />
  <h4 className="mb-3">Payment</h4>
  <div className="my-3">
    <div className="form-check">
      <input
        id="credit"
        name="paymentMethod"
        type="radio"
        className="form-check-input"
        defaultChecked=""
        required=""
      />
      <label className="form-check-label" htmlFor="credit">
        Credit card
      </label>
    </div>
    <div className="form-check">
      <input
        id="debit"
        name="paymentMethod"
        type="radio"
        className="form-check-input"
        required=""
      />
      <label className="form-check-label" htmlFor="debit">
        Debit card
      </label>
    </div>
    <div className="form-check">
      <input
        id="paypal"
        name="paymentMethod"
        type="radio"
        className="form-check-input"
        required=""
      />
      <label className="form-check-label" htmlFor="paypal">
        PayPal
      </label>
    </div>
  </div>
  <div className="row gy-3">
    <div className="col-md-6">
      <label htmlFor="cc-name" className="form-label">
        Name on card
      </label>
      <input
        type="text"
        className="form-control"
        id="cc-name"
        placeholder=""
        required=""
      />
      <small className="text-muted">Full name as displayed on card</small>
      <div className="invalid-feedback">Name on card is required</div>
    </div>
    <div className="col-md-6">
      <label htmlFor="cc-number" className="form-label">
        Credit card number
      </label>
      <input
        type="text"
        className="form-control"
        id="cc-number"
        placeholder=""
        required=""
      />
      <div className="invalid-feedback">Credit card number is required</div>
    </div>
    <div className="col-md-3">
      <label htmlFor="cc-expiration" className="form-label">
        Expiration
      </label>
      <input
        type="text"
        className="form-control"
        id="cc-expiration"
        placeholder=""
        required=""
      />
      <div className="invalid-feedback">Expiration date required</div>
    </div>
    <div className="col-md-3">
      <label htmlFor="cc-cvv" className="form-label">
        CVV
      </label>
      <input
        type="text"
        className="form-control"
        id="cc-cvv"
        placeholder=""
        required=""
      />
      <div className="invalid-feedback">Security code required</div>
    </div>
  </div>
  <hr className="my-4" />
  <button>pay Amount</button>
  </div> */}
  <>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* <link rel="stylesheet" href="styles.css"> */}
  {/* <div clss="container">
    <button type="submit" className="btn">
      submit
    </button>
    <div className="popup">
      <img src="" />
      <h2>Thankyou</h2>
      <p>Successfully payment completed</p>
      <button type="button">ok</button>
    </div>
  </div> */}
</>
<>
  {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
  {/* <link rel="stylesheet" href="styles.css"> */}
  {/* <div clss="container">
    <button type="submit" className="btn" onclick="">
     pay Amount
    </button>
    <div className="popup" id="popup">
      <img src="img/download.png" />
      <h2>Thankyou</h2>
      <p>Successfully payment completed</p>
      <button type="button" onclick="closePopup()">
        ok
      </button>
    </div>
  </div> */}
  {/* <script>
  let popup=document.getElementById("popup");
  function openPopup(){
    popup.classList.add("open-popup")
  }
  function closePopup(){
    popup.classList.remove("open-popup")
  }
  </script> */}
</>

      
    </div>
  </div>
</div>

    </div>
  )
}

export default Orderpage
