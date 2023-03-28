import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

import { LogoutOutlined } from "@ant-design/icons";

const Logout = () => {
  const { loginState } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="display-flex justify-content-center align-items-center">
      <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
        <span style={{ marginLeft: "5px"}}>{loginState.username}</span>
        <span
          onClick={() => dispatch({ type: actionTypes.loginActions.LOGOUT })}
          style={{
            display: "flex",
            alignItems: "center",
            margin: "1px auto",
            cursor: "pointer",
            
          }}
        >
          <LogoutOutlined style={{fontSize:"20px" }} />
        </span>
      </p>
    </div>
  );
};

export default Logout;
