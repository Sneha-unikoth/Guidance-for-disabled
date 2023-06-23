import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const logout = () => {
      localStorage.removeItem("name")
      localStorage.removeItem("loginId")
      localStorage.removeItem("role")
      localStorage.removeItem("user_id")
      navigate('/')}
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        
  <a href="" className="text-decoration-none d-block d-lg-none">
    <h1 className="m-0 display-5 font-weight-semi-bold">
      <span className="text-primary font-weight-bold border px-3 mr-1">
        Guidance for
      </span>
      Disabled
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
      <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Service
        </a>
        <div className="dropdown-menu rounded-0 m-0">
         <a href="/service" className="dropdown-item">
            view shop
          </a>
         
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
      {/* <a href="detail.html" class="nav-item nav-link">Servica>e</ */}
      <div className="nav-item dropdown">
        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
           All Product
        </a>
        <div className="dropdown-menu rounded-0 m-0">
        <a href="/PRODUCTS" className="dropdown-item">
            view
          </a>
          {/* <a href="cart.html" className="dropdown-item">
            view{" "}
          </a> */}
          {/* <a href="checkout.html" class="dropdown-item">view workshop</a> */}
        </div>
      </div>
      <a href="/Usernoti" className="nav-item nav-link">
        Notification
      </a>
      <a href="/Formfeedback" className="nav-item nav-link">
        Add Feedback
      </a>
      <a href="/Userorderview" className="nav-item nav-link">
        My order
      </a>
       
       <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          complaint
        </a>
        <div className="dropdown-menu rounded-0 m-0">
         <a href="/Formcomplaint" className="dropdown-item">
          Add complaint
          </a>
          <a href="/Viewreplay" className="dropdown-item">
            view replay
          </a>
          
        </div>
      </div>
      
      {/* <div className="nav-item dropdown">
        <a href="" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Service
        </a>
        <div className="dropdown-menu rounded-0 m-0">
         <a href="/service" className="dropdown-item">
            view shop
          </a>
         
        </div>
      </div> */}
      {/* <div className="nav-item dropdown">
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
      </div> */}
      <a href="/Counciling" className="nav-item nav-link">
        View counciling
      </a>
    </div>
    <div className="navbar-nav ml-auto py-0">
      <a onClick={logout} className="nav-item nav-link">
        Logout
      </a>
      {/* <a href="/Register" className="nav-item nav-link">
        Register
      </a> */}
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar;
