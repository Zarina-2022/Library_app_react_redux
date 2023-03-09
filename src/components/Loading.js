import React from "react";
import "../assets/styles/loading.css";

const Loading = () => {
  return (
    <div className="loadingPageContainer">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-4 col-sm-6 grid-margin stretch-card">
              <div className="loader-demo-box">
                <div className="jumping-dots-loader">
                  {" "}
                  <span></span> <span></span> <span></span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
