import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { upperFirstLetter } from "../utils/functions";
import api from "../api/api";
import urls from "../api/urls";
import "../assets/styles/addBooks.css";
import actionTypes from "../redux/actions/actionTypes";

import { useNavigate } from "react-router-dom";

const EditCategory = () => {
  const { categoryId } = useParams();
  const { categoriesState } = useSelector((state) => state);
  const myCategory = categoriesState.categories.find(
    (item) => item.id === categoryId
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef();
  
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [formState, setFormState] = useState(myCategory);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validation
    if (!formState.name) {
      // error message (input altinda)
      nameRef.current.style.display = "block";
      setTimeout(() => {
        nameRef.current.style.display = "none";
      }, 3000);
      return;
    }
    const hasCategory = categoriesState.categories.find(
      (item) =>
        upperFirstLetter(item.name.trim().replaceAll(" ", "")) ===
        upperFirstLetter(formState.name.trim().replaceAll(" ", ""))
    );
    if (hasCategory !== undefined) {
      setError(true);
      setErrorMsg(
        `${upperFirstLetter(hasCategory.name)} has already been registered.`
      );
      setTimeout(() => {
        setError(false);
        setErrorMsg("");
      }, 2000);
      return;
    }

    /*
    if (formState.name === myCategory.name) {
      setError(true);
      setErrorMsg("This category has already been registered.");
      setTimeout(() => {
        setError(false);
        setErrorMsg("");
      }, 3000);
      return;
    }
    */

    api
      .put(`${urls.categories}/${categoryId}`, formState)
      .then((res) => {
        dispatch({
          type: actionTypes.categoryActions.PUT_CATEGORIES,
          payload: formState,
        });
        setOpenSuccessModal(true);
        setTimeout(() => {
          setOpenSuccessModal(false);
          navigate("/categories-page");
        }, 2000);
      })
      .catch((err) => {
        alert("Error occur");
      });
  };

  return (
    <div>
      <div>
        <Header />
        <div>
          <section className="body">
            <div className="container">
              <div className="login-box">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="logo">
                      <span className="logo-font"> EDIT </span> CATEGORY
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <form onSubmit={handleSubmit} className="login-form ms-0">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label mb-0">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control mb-3"
                          id="name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              name: e.target.value,
                            })
                          }
                        />
                        <p ref={nameRef} style={{ display: "none" }}>
                          <small className="text-danger fw-bold">
                            Name of the category is required.
                          </small>
                        </p>
                        {error && (
                          <p>
                            <small className="text-danger">{errorMsg}</small>
                          </p>
                        )}
                      </div>

                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          style={{ marginTop: "10px" }}
                          disabled={
                            upperFirstLetter(
                              myCategory.name.trim().replaceAll(" ", "")
                            ) ===
                            upperFirstLetter(
                              formState.name.trim().replaceAll(" ", "")
                            )
                              ? true
                              : false
                          }
                        >
                          SAVE THE CHANGES
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Modal
          title="Congratulations !!!"
          content="The changes successfully saved."
          deleteBtn={false}
          cancelBtn={false}
          visible={openSuccessModal}
        />
      </div>
    </div>
  );
};

export default EditCategory;
