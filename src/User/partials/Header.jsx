import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-1 shadow-sm sticky-top" >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="https://food-order-web-xi.vercel.app/static/media/logo.0f99324454e3c3ccba98.png"
            alt="Logo"
            className=""
            style={{ width: "30px", height: "auto" }}
          />

          <span className="fw-bold ms-3">Way</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ms-4">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item ms-4">
              <a className="nav-link" href="#cart">
                <img src="https://via.placeholder.com/20" alt="Cart" />
              </a>
            </li>

            <li className="nav-item ms-4">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Header