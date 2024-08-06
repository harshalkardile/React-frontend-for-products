import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1>Welcome to Our Store</h1>
          <p className="lead">Find the best products in our catalog</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Products</h5>
              <p className="card-text">Explore our wide range of products.</p>
              <a href="/products" className="btn btn-primary">
                View Products
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Categories</h5>
              <p className="card-text">Browse products by categories.</p>
              <a href="/categories" className="btn btn-primary">
                View Categories
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Get in touch for any queries.</p>
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
