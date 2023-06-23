
import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
     
      axios
        .get(
          `http://127.0.0.1:8000/api/get_all_product`
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
      <>
  <meta charSet="utf-8" />
  <title>EShopper - Bootstrap Shop Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content="Free HTML Templates" name="keywords" />
  <meta content="Free HTML Templates" name="description" />
  {/* Favicon */}
  <link href="img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  {/* Font Awesome */}
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
    rel="stylesheet"
  />
  {/* Libraries Stylesheet */}
  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Topbar Start */}
  <div className="container-fluid">
    <div className="row bg-secondary py-2 px-xl-5">
      {/* <div className="col-lg-6 d-none d-lg-block">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark" href="">
            FAQs
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Help
          </a>
          <span className="text-muted px-2">|</span>
          <a className="text-dark" href="">
            Support
          </a>
        </div>
      </div> */}
      {/* <div className="col-lg-6 text-center text-lg-right">
        <div className="d-inline-flex align-items-center">
          <a className="text-dark px-2" href="">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-twitter" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-linkedin-in" />
          </a>
          <a className="text-dark px-2" href="">
            <i className="fab fa-instagram" />
          </a>
          <a className="text-dark pl-2" href="">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div> */}
    </div>
    {/* <div className="row align-items-center py-3 px-xl-5">
     
      <div className="col-lg-6 col-6 text-left">
        <
      </div>
      
    </div> */}
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid">
    <div className="row border-top px-xl-5">
      {/* <div className="col-lg-3 d-none d-lg-block">
        <a
          className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
          data-toggle="collapse"
          href="#navbar-vertical"
          style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}
        >
          <h6 className="m-0">Categories</h6>
          <i className="fa fa-angle-down text-dark" />
        </a>
        <nav
          className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
          id="navbar-vertical"
          style={{ width: "calc(100% - 30px)", zIndex: 1 }}
        >
          <div
            className="navbar-nav w-100 overflow-hidden"
            style={{ height: 410 }}
          >
            
            </div>
            
            
            
            
          </div>
        </nav>
      </div> */}
      {/* <div className="col-lg-9">
       
      </div> */}
    </div>
  </div>
  {/* Navbar End */}
  {/* Page Header Start */}
  <div className="container-fluid bg-secondary mb-5">
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: 300 }}
    >
      <h1 className="font-weight-semi-bold text-uppercase mb-3">Our products</h1>
      <div className="d-inline-flex">
        
       
      </div>
    </div>
  </div>
  {/* Page Header End */}
  {/* Shop Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5">
      {/* Shop Sidebar Start */}
      <div className="col-lg-3 col-md-12">
        {/* Price Start */}
        {/* <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by price</h5>
          
        </div> */}
        {/* Price End */}
        {/* Color Start */}
        {/* <div className="border-bottom mb-4 pb-4">
          <h5 className="font-weight-semi-bold mb-4">Filter by color</h5>
       
        </div> */}
        {/* Color End */}
        {/* Size Start */}
        {/* <div className="mb-5">
          <h5 className="font-weight-semi-bold mb-4">Filter by size</h5>
          
        </div> */}
        {/* Size End */}
      </div>
      {/* Shop Sidebar End */}
      {/* Shop Product Start */}
      <div className="col-lg-9 col-md-12">
        <div className="row pb-3">
          <div className="col-12 pb-1">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <form action="">
                <div className="input-group">
                  
                </div>
              </form>
              <div className="dropdown ml-4">
             
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="triggerId"
                >
                  <a className="dropdown-item" href="#">
                    Latest
                  </a>
                  <a className="dropdown-item" href="#">
                    Popularity
                  </a>
                  <a className="dropdown-item" href="#">
                    Best Rating
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div id='pro'>
            
          <div className="col-lg-4 col-md-6 col-sm-12 pb">
          {inputs.map((data,key)=>(
           
            <div className="card product-item border-0 mb-4">
             
  
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={`server${data.image}`}
                  // src="data:image/jpeg;base64,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"
                  alt=""
                /> 
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{data.product_name}</h6>
                <div className="d-flex justify-content-center">
                  <h6>{data.product_rate}</h6>
                  <h6 className="text-muted ml-2">
                    {/* <del>4300</del> */}
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href={`/product/${data.id}`} className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1" />
                  View Detail
                </a>
                <a href="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-shopping-cart text-primary mr-1" />
                  Add To Cart
                </a>
              </div>
            </div>
             ))}
          </div>
          </div>
        
          
        
        
         
      
       
        
        </div>
      </div>
      {/* Shop Product End */}
    </div>
  </div>
  {/* Shop End */}
  {/* Footer Start */}
  
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary back-to-top">
    <i className="fa fa-angle-double-up" />
  </a>
  {/* JavaScript Libraries */}
  {/* Contact Javascript File */}
  {/* Template Javascript */}
</>

    </div>
  )
}

export default Products
