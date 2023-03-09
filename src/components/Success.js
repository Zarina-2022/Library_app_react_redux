import React from "react";
import "../assets/styles/success.css";

const Success = () => {
  return (
    <div>
      <div class="page-wrapper">
        <div class="custom-modal">
          <div class="succes succes-animation icon-top">
            <i class="fa fa-check"></i>
          </div>
          <div class="succes border-bottom"></div>
          <div class="content">
            <a href="/" className="btn btn-danger btn-md">
              Close
            </a>
            <p class="message-type">Successfully completed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
