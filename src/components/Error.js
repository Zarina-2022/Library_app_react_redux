import React from "react";
import "../assets/styles/error.css";

const Error = () => {
  return (
    <div>
      <div className="page-wrapper">
        <div className="custom-modal">
          <div className="danger danger-animation icon-top">
            <i className="fa fa-times"></i>
          </div>
          <div className="danger border-bottom"></div>
          <div className="content">
            <p className="message-type">
              An error occurred while installing the application. <br />{" "}
              <small style={{color:"blue"}}>Please try again later.</small>
            </p>
            <a href="/" className="btn btn-danger btn-md">
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
