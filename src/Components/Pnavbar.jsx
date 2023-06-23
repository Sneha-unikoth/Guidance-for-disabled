import React from 'react'

const Pnavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
  <a href="" className="text-decoration-none d-block d-lg-none">
    <h1 className="m-0 display-5 font-weight-semi-bold">
      <span className="text-primary font-weight-bold border px-3 mr-1">
        Guidance for
      </span>
      disabled
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
    
      <a href="/Login" className="nav-item nav-link">
        Login
      </a>
      <div className="nav-item dropdown">
        <a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown">
          Register
        </a>
        <div className="dropdown-menu rounded-0 m-0">
          <a href="/Register" className="dropdown-item">
            User register
          </a>
          <a href="/Registers" className="dropdown-item">
            shop register
          </a>
          <a href="/Workerreg" className="dropdown-item">
            Worker register
          </a>
        </div>
      </div>
      
    </div>
   
  </div>
</nav>


    </div>
  )
}

export default Pnavbar
