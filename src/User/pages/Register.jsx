import React from 'react'

const Register = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center pb-5"
      style={{
        backgroundColor: "#f8f9fa",minHeight:600
      }}
    >
      <div className="row align-items-center justify-content-between w-100">
        {/* Hero Section - 70% */}
        <div className="col-md-7 mt-2">
          <div className="text-center text-md-start">
            {/* Badge */}
            <div
              className="badge bg-warning text-dark px-3 py-2 mb-3 d-inline-flex align-items-center"
              style={{
                borderRadius: "20px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                fontSize: "0.9rem",
              }}
            >
              <img
                src="https://via.placeholder.com/20"
                alt="Delivery Icon"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              Bike Delivery
            </div>

            {/* Title */}
            <h1 className="fw-bold" style={{ fontSize: "3rem", lineHeight: "1.2" }}>
              The Fastest Delivery in{" "}
              <span style={{ color: "#FF5722" }}>Your City</span>
            </h1>

            {/* Description */}
            <p className="text-muted mt-3" style={{ fontSize: "1.1rem" }}>
              We see incredible opportunity to reach more customers through our seamless ecosystem and expanding
              Delivery platform. Our shared-value strategy will bring affordable fresh, planet-forward options to
              even more homes, giving customers easy ways to live a healthier and more sustainable lifestyle—no
              matter where they live.
            </p>

            {/* Button */}
            <button
              className="btn btn-lg"
              style={{
                backgroundColor: "#FF5722",
                color: "white",
                borderRadius: "30px",
                padding: "10px 30px",
                fontWeight: "bold",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
            >
              Order Now
            </button>
          </div>
        </div>

        {/* Register Form Section */}
        <div className="col-md-5 mt-2">
          <div
            className="p-4"
            style={{
              background: "linear-gradient(135deg, #ffb347, #ffcc99)",
              borderRadius: "20px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h4 className="text-center fw-bold mb-4" style={{ color: "#3a3d3d" }}>
              Create Your Account
            </h4>
            <form>
              {/* Fullname Field */}
              <div className="mb-4">
                <label
                  htmlFor="fullname"
                  className="form-label fw-bold"
                  style={{ color: "#3a3d3d" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter your full name"
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#e8f7e4",
                  }}
                />
              </div>
              
              {/* Email Field */}
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="form-label fw-bold"
                  style={{ color: "#3a3d3d" }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#e8f7e4",
                  }}
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="form-label fw-bold"
                  style={{ color: "#3a3d3d" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  style={{
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#e8f7e4",
                  }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-success w-100 py-2"
                style={{
                  borderRadius: "12px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              >
                Sign Up
              </button>

              <p className="text-center mt-4 mb-0" style={{ fontSize: "0.9rem", color: "#6c757d" }}>
                Already have an account?{" "}
                <a href="#" className="text-success fw-bold">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
