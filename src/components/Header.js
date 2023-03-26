import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

import "../assets/styles/header.css";

import logo from "../assets/images/logo33.png";
import sun from "../assets/images/sun32b.png";
import moon from "../assets/images/bg-moon.png";


const Header = () => {
  const { themeState,booksState,categoriesState } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <nav
        className={`navbar navbar-expand-md mb-5 py-2 navbar-${themeState} bg-${
          themeState === "light" ? "warning" : "dark"
        }`}
      >
        <div className="container">
          <div className="navbar-brand py-2 ">
            <img src={logo} height="40" alt="Company Logo" />
          </div>
          <div className="modeBtn">
            {themeState === "light" ? (
              <button
                onClick={() =>
                  dispatch({
                    type: actionTypes.themeActions.CHANGE_THEME,
                    payload: "dark",
                  })
                }
                className="btn btn-sm btn-dark"
              ><img src={moon} />
                Dark mode
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch({
                    type: actionTypes.themeActions.CHANGE_THEME,
                    payload: "light",
                  })
                }
                className="btn btn-sm btn-light"
              > <img src={sun} />
                Light mode
              </button>
            )}
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
                  to={"/"}
                >
                  Books
                </Link>
              </li>
        
              <li className="nav-item">
                <Link className="nav-link mx-2" to={"/categories-page"}>
                  Categories
                </Link>
              </li>

              <li className="nav-item">
                <p className="nav-link btn mx-2" id="orderLink">
                Total number of books: {booksState.books.length}
                </p>
              </li>

              <li className="nav-item">
                <p className="nav-link btn mx-2" id="orderLink">
                Total number of categories: {categoriesState.categories.length}
                </p>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
