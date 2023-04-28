import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
  <a href="" className="text-decoration-none d-block d-lg-none">
    <h1 className="m-0 display-5 font-weight-semi-bold">
      <span className="text-primary font-weight-bold border px-3 mr-1">
        Costume
      </span>
      Rental
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
      <Link to={"/"}><a href="" className="nav-item nav-link active">
        Home
      </a></Link>
      <a href="/About" className="nav-item nav-link">
        About
      </a>
      {/* <a href="detail.html" class="nav-item nav-link">Servica>e</ */}
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Product
        </a>
        <div className="dropdown-menu rounded-0 m-0">
        <a href="/product" className="dropdown-item">
            view
          </a>
          {/* <a href="cart.html" className="dropdown-item">
            view{" "}
          </a> */}
          {/* <a href="checkout.html" class="dropdown-item">view workshop</a> */}
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Service
        </a>
        <div className="dropdown-menu rounded-0 m-0">
         <a href="/service" className="dropdown-item">
            view shop
          </a>
          {/* <a href="checkout.html" className="dropdown-item">
            view workshop
          </a> */}
        </div>
      </div>
      <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Nearby
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/Toilet" className="dropdown-item">
            Toilet
          </a>
          <a href="/Policestation" className="dropdown-item">
            Policestation
          </a>
          <a href="/Hospital" className="dropdown-item">
            Hospitals
          </a>
        </div>
      </div>
      <a href="/Contact" className="nav-item nav-link">
        Contact
      </a>
    </div>
    <div className="navbar-nav ml-auto py-0">
      <a href="/Login" className="nav-item nav-link">
        Login
      </a>
      <a href="/Register" className="nav-item nav-link">
        Register
      </a>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
