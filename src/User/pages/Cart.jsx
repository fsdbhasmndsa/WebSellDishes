import React from "react";

const Cart = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-primary">Your Shopping Cart</h1>
        <p className="text-muted">Review your products and proceed to checkout.</p>
      </div>

      {/* Main Content */}
      <div className="row">
        {/* Cart Items */}
        <div className="col-md-8 mb-4">
          {[1, 2,3,4,5,6].map((item, index) => (
            <div className="card shadow-sm border-0 mb-4" key={index}>
              <div className="row g-0">
                {/* Product Image */}
                <div className="col-4 col-md-3">
                  <img
                    src={`https://food-order-web-xi.vercel.app/static/media/f1.c52686695ee9a5c4cd0d.png`}
                    className="img-fluid rounded-start"
                    alt="Product"
                  />
                </div>
                {/* Product Details */}
                <div className="col-8 col-md-6">
                  <div className="card-body">
                    <h5 className="card-title fw-bold text-primary">
                      Product Name {item}
                    </h5>
                    <p className="text-muted small mb-1">
                      A short description goes here.
                    </p>
                    {/* Rating */}
                    <div className="d-flex align-items-center">
                      <span className="text-warning me-2">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star"></i>
                      </span>
                      <small className="text-muted">(120 reviews)</small>
                    </div>
                    <p className="text-primary fw-bold mt-2">$20.00</p>
                  </div>
                </div>
                {/* Quantity & Actions */}
                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                  <div className="d-flex align-items-center mb-2">
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-dash"></i>
                    </button>
                    <span className="mx-3">1</span>
                    <button className="btn btn-outline-secondary btn-sm">
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="col-md-4">
          <div
            className="card shadow-sm border-0 position-sticky"
            style={{ top: "3.5rem" }}
          >
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Order Summary</h5>
              <div className="d-flex justify-content-between py-2">
                <span>Subtotal:</span>
                <span className="fw-bold">$40.00</span>
              </div>
              <div className="d-flex justify-content-between py-2">
                <span>Shipping:</span>
                <span className="fw-bold">$5.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold">
                <span>Total:</span>
                <span className="text-success">$45.00</span>
              </div>
              <button className="btn btn-primary btn-lg w-100 mt-4">
                <i className="bi bi-bag-check"></i> Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
