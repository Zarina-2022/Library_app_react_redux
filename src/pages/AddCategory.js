import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Alert from "../components/Alert";
import Modal from "../components/Modal";

import "../assets/styles/addBooks.css";

import { upperFirstLetter } from "../utils/functions";

import api from "../api/api";
import urls from "../api/urls";

import actionTypes from "../redux/actions/actionTypes";

import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoriesState } = useSelector((state) => state);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const [formState, setFormState] = useState({
    id: String(new Date().getTime()),
    name: "",
  });

  const [inputAlert, setInputAlert] = useState(false);
  const [categoryAlert, setCategoryAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validation
    if (!formState.name) {
      // formState.name === ""
      setInputAlert(true);
      setTimeout(() => {
        setInputAlert(false);
      }, 3000);
      return;
    }
    // JS'te trim() fonksiyonu ile string'in iki tarafindaki tm bosluklari siliyor.
    // trimEnd() ve trimStart() function da var
    const hasCategory = categoriesState.categories.find(
      (item) =>
        upperFirstLetter(item.name.trim().replaceAll(" ", "")) ===
        upperFirstLetter(formState.name.trim().replaceAll(" ", ""))
    );
    if (hasCategory !== undefined) {
      setCategoryAlert(true);
      setTimeout(() => {
        setCategoryAlert(false);
      }, 2000);
      return;
    }
    api
      .post(urls.categories, formState)
      .then((res) => {
        dispatch({
          type: actionTypes.categoryActions.POST_CATEGORIES,
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
      <Header />
      {inputAlert && (
        <Alert
          text="This field is required !!!"
          type="warning"
          style={{ width: "82%" }}
          className="container fs-5 text-center"
          hasAlert={true}
        />
      )}
      {categoryAlert && (
        <Alert
          text= "This category is already exist !!!"
          type="warning"
          style={{ width: "82%" }}
          className="container fs-5 text-center"
          hasAlert={true}
        />
      )}
      <div>
        <section className="body">
          <div className="container">
            <div className="login-box">
              <div className="row">
                <div className="col-sm-6">
                  <div className="logo">
                    <span className="logo-font">Add </span> New Category
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <form onSubmit={handleSubmit} className="login-form ms-0">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label mb-0">
                        Category name
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="name"
                        placeholder="Novel"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        style={{ marginTop: "10px" }}
                      >
                        SAVE
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
        content="The category successfully added !!!"
        deleteBtn={false}
        cancelBtn={false}
        visible={openSuccessModal}
      />
    </div>
  );
};

export default AddCategory;

/*
Truthy ve Falsy:
Truthy = if(form.name){} : 
    if (form.name === true){}, 
       dolu string veya dolu obje: if(form.name !== ""){} 

Falsy if(!form.name){} : 
    if(form.name === false){}, 
       bos string veya bos obje: if(form.name === ""){}, 
       null: if(form.name === null){},
       undefined: if(form.name === null){}
*/
