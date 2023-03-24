import React from "react";

const Alert = ({
    text = "Alert",
    type = "warning",
    style = {},
    className="",
    hasAlert=false
}) => {
  return (
    <div> 
      <div style={style} className={`alert alert-${type} ${className}`} role="alert">{text}</div>
    </div>
  );
};

export default Alert;
