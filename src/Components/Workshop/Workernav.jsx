import React from 'react'
import {Link} from 'react-router-dom'

const Navshopowner = () => {
  return (
    <div>
        
       
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        
  <a href="" className="text-decoration-none d-block d-lg-none">
    <h1 className="m-0 display-5 font-weight-semi-bold">
      {/* <span className="text-primary font-weight-bold border px-3 mr-1">
        Guidance for disabled
      </span>
      */}
    </h1>
  </a>
  <button
    type="button"
    className="navbar-toggler"
    data-toggle="collapse"
    data-target="#navbarCollapse"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div
    className="collapse navbar-collapse justify-content-between"
    id="navbarCollapse"
  >
    <div className="navbar-nav mr-auto py-0">
      {/* <Link to={"/"}><a href="" className="nav-item nav-link active">
        Home
      </a></Link>
      <a href="/About" className="nav-item nav-link">
        About
      </a> */}
      {/* <a href="detail.html" class="nav-item nav-link">Servica>e</ */}
      {/* <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          order
        </a>
        <div className="dropdown-menu rounded-0 m-0">
        <a href="/Shoporder" className="dropdown-item">
            view order
          </a> */}
          {/* <a href="cart.html" className="dropdown-item">
            view{" "}
          </a> */}
          {/* <a href="checkout.html" class="dropdown-item">view workshop</a> */}
        {/* </div>
      </div> */}
      {/* <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          payment
        </a>
        <div className="dropdown-menu rounded-0 m-0">
         <a href="/Shoppayment" className="dropdown-item">
            view payment
          </a> */}
          {/* <a href="checkout.html" className="dropdown-item">
            view workshop
          </a> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="nav-item dropdown"> */}
        {/* <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          complaint
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/Shopcomplaint" className="dropdown-item">
            view complaint
          </a> */}
          {/* <a href="/Policestation" className="dropdown-item">
            Policestation
          </a>
          <a href="/Hospital" className="dropdown-item">
            Hospitals
          </a> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
        Home
        </a>
        </div>
         */}
        
        {/* <div className="dropdown-menu rounded-0 m-0">
          <a href="/Shopfeedback" className="dropdown-item">
         About
          </a>
          </div> */}
         
          <a href="/Workdetails" className="nav-item nav-link">
        workdetails
      </a>
      {/* <a href="" classname="nav-item nav-link">
      Home
      </a>
      
      <a href="" classname="nav-item nav-link">
      About
      </a> */}

          {/* <a href="/Shoppayment" className="nav-item nav-link">
        payment
      </a>
          <a href="/Shopcomplaint" className="nav-item nav-link">
        complaints
      </a>
          <a href="/Shopfeedback" className="nav-item nav-link">
        feedback
      </a>
      <a href="/Shopwork" className="nav-item nav-link">
        Assign work
      </a> */}
      <a href="" className="nav-item nav-link">
        Home
      </a>
      <a href="" className="nav-item nav-link">
        About
      </a>
    </div>
    {/* <div className="navbar-nav ml-auto py-0">
      <a href="/Login" className="nav-item nav-link">
        Login
      </a>
      <a href="/Register" className="nav-item nav-link">
        Register
      </a>
    </div> */}
  </div>
</nav>


    </div>
  )
}

export default Navshopowner
