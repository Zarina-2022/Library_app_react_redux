import React, { useState, useRef } from "react";
import "../assets/styles/login.css";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import actionTypes from "../redux/actions/actionTypes";

import Modal from "../components/Modal";

import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    const username = "admin";
    const password = "123456";

    event.preventDefault();
    // Validation:

    if (!form.username && !form.password) {
      usernameRef.current.style.display = "block";
      passwordRef.current.style.display = "block";
      setTimeout(() => {
        usernameRef.current.style.display = "none";
        passwordRef.current.style.display = "none";
      }, 2000);
      return;
    }

    if (!form.username) {
      usernameRef.current.style.display = "block";
      setTimeout(() => {
        usernameRef.current.style.display = "none";
      }, 2000);
      return;
    }
    if (!form.password) {
      passwordRef.current.style.display = "block";
      setTimeout(() => {
        passwordRef.current.style.display = "none";
      }, 2000);
      return;
    }
    /* normalde api call yapılması lazım. ama biz şimdilik yapmışız gibi düşüneceğiz */
    if (form.username !== username || form.password !== password) {
      setShowModal(true);
      setModalMessage("Your username or password is not correct");
      return;
    }
    dispatch({
      type: actionTypes.loginActions.LOGIN_SUCCESS,
      payload: form.username,
    });
    navigate("/");
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Username
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your username"
                    autoComplete="off"
                    value={form.username}
                    onChange={(e) =>
                      setForm({ ...form, username: e.target.value })
                    }
                  />
                  <p
                    className="text-danger ms-4 mt-1 fw-bold"
                    ref={usernameRef}
                    style={{ display: "none" }}
                  >
                    <small>Enter username</small>
                  </p>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                  <input
                    type={!showPassword ? "password" : "text"}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    autoComplete="new-password"
                    value={form.password}
                    onChange={(e) =>
                      setForm({ ...form, password: e.target.value })
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: 27,
                      bottom: 97,
                      cursor: "pointer",
                    }}
                  >
                    {!showPassword ? (
                      <FaEye
                        onClick={() => setShowPassword(true)}
                        color="#428EFB"
                        style={{ width: "18px", height: "20px" }}
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPassword(false)}
                        color="#aaa"
                        style={{ width: "18px", height: "20px" }}
                      />
                    )}
                  </div>
                  <p
                    className="text-danger ms-4 mt-1 fw-bold"
                    ref={passwordRef}
                    style={{ display: "none" }}
                  >
                    <small>Enter password</small>
                  </p>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to={"#!"} className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Modal
        visible={showModal}
        title="Error"
        content={modalMessage}
        cancelBtnOnlick={() => setShowModal(false)}
        deleteBtn={false}
      />
    </div>
  );
};

export default Login;
