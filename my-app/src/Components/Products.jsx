
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


          <div className="col-lg-4 col-md-6 col-sm-12 pb-1">
          {inputs.map((data,key)=>(

            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src="img/product-1.jpg"
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
                <a href="" className="btn btn-sm text-dark p-0">
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
