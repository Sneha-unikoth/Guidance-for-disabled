import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="row px-xl-5">
  <div className="col-lg-7 mb-5">
    <div className="contact-form">
      <div id="success" />
      <form name="sentMessage" id="contactForm" noValidate="novalidate">
        
        <div className="control-group">
          <input
            type="Username"
            className="form-control"
            id="Username"
            placeholder="Username"
            required="required"
            data-validation-required-message="Please enter your username"
          />
          <p className="help-block text-danger" />
        </div>
          <div className="control-group">
           <input
            type="Password"
            className="form-control"
            id="Password"
            placeholder="Password"
            required="required"
            data-validation-required-message="Please enter yourpassword"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
            required="required"
            data-validation-required-message="Please enter your name"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="Place"
            placeholder="Place"
            required="required"
            data-validation-required-message="Please enter a Place"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="Disability"
            placeholder="Disability"
            required="required"
            data-validation-required-message="Please enter your disability"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="Gender"
            placeholder="Gender"
            required="required"
            data-validation-required-message="Please enter your Gender"
          />
          <p className="help-block text-danger" />
        </div>
        <div className="control-group">
          <input
            type="text"
            className="form-control"
            id="phonenumber"
            placeholder="phonenumber"
            required="required"
            data-validation-required-message="Please enter your phonenumber"
          />
          <p className="help-block text-danger" />
        </div>
        {/* <div className="control-group">
          <textarea
            className="form-control"
            rows={6}
            id="Phone number"
            placeholder="phone number"
            required="required"
            data-validation-required-message="Please enter your phonenumber"
            defaultValue={""}
          />
          <p className="help-block text-danger" />
        </div> */}
        <div>
          <button
            className="btn btn-primary py-2 px-4"
            type="submit"
            id="RegisterButton"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
 
</div>

    </div>
  )
}

export default Register
