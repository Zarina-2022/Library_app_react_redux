import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
import logo from "../assets/images/logo33.png";

const Header = () => {
  return (
    
    <div>
      <nav className="navbar navbar-expand-md mb-5 py-2 navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand py-2 ">
            <img src={logo} height="40" alt="Company Logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                
              <li className="nav-item">
                <Link
                  className="nav-link mx-2 active"
                  aria-current="page"
                  to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  Books
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="#">
                  Authors
                </Link>
              </li>
               
              <li className="nav-item">
                <Link className="nav-link btn mx-2" id="orderLink" to="#">
                  Order Online
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
