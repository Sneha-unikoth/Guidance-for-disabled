import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="col-md-4 mb-5">
  <h5 className="font-weight-bold text-dark mb-4">Login</h5>
  <form action="">
    <div className="form-group">
      <input
        type="text" 
        className="form-control border-0 py-4"
        placeholder="Username"
        required="required"
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        className="form-control border-0 py-4"
        placeholder="Password"
        required="required"
      />
    </div>
    <div>
      <button className="btn btn-primary btn-block border-0 py-3" type="submit">
      Login
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Login
