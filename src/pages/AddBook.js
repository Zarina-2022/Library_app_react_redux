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

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoriesState } = useSelector((state) => state);
  const [openSuccessModal,setOpenSuccessModal]=useState(false);

  /*
  - asagidaki input state'leri asagidaki (formState) gibi de kullanabiliriz:
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [price, setPrice] = useState("");
  const [isbn, setIsbn] = useState("");
  const [categoryId, setCategoryId] = useState("selectCategory");
  */

  const [formState, setFormState] = useState({
    id: String(new Date().getTime()),
    title: "",
    author: "",
    publisher: "",
    price: "",
    isbn: "",
    categoryId: "selectCategory",
  });

  const [inputAlert, setInputAlert] = useState(false);
  const [categoryAlert, setCategoryAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validation
    if (
      formState.title === "" ||
      formState.author === "" ||
      formState.publisher === "" ||
      formState.price === "" ||
      formState.isbn === ""
    ) {
      setInputAlert(true);
      setTimeout(() => {
        setInputAlert(false);
      }, 3000);
      return;
    }
    if (formState.categoryId === "selectCategory") {
      setCategoryAlert(true);
      setTimeout(() => {
        setCategoryAlert(false);
      }, 3000);
      return;
    }
    api
      .post(urls.books, formState)
      .then((res) => {
        dispatch({
          type: actionTypes.bookActions.POST_BOOKS,
          payload: formState,
        });
        setOpenSuccessModal(true)
        setTimeout(() => {
          setOpenSuccessModal(false)
          navigate ("/")
        }, 3000);
      })
      .catch((err) => {
        alert("Error occur")
      });
  };

  return (
    <div>
      <Header />
      {inputAlert && (
        <Alert
          text="All fields are required !!!"
          type="warning"
          style={{ width: "82%" }}
          className="container fs-5 text-center"
          hasAlert={true}
        />
      )}
      {categoryAlert && (
        <Alert
          text="Category field is required !!!"
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
                    <span className="logo-font">Add </span> New Book
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <form onSubmit={handleSubmit} className="login-form ms-0">
                    <div className="form-group">
                      <label htmlFor="title" className="form-label mb-0">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="title"
                        placeholder="ex.: War And Peace"
                        value={formState.title}
                        onChange={(e) =>
                          setFormState({ ...formState, title: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="author" className="form-label mb-0">
                        Author
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="author"
                        placeholder="ex.: Leo Tolstoy"
                        value={formState.author}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            author: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="publisher" className="form-label mb-0">
                        Publisher
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="publisher"
                        placeholder="ex.: Vintage"
                        value={formState.publisher}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            publisher: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="price" className="form-label mb-0">
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="price"
                        placeholder="ex.: 15.69"
                        value={formState.price}
                        onChange={(e) =>
                          setFormState({ ...formState, price: e.target.value })
                        }
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="isbn" className="form-label mb-0">
                        ISBN
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="isbn"
                        placeholder="ex.: 0123456789"
                        value={formState.isbn}
                        onChange={(e) =>
                          setFormState({ ...formState, isbn: e.target.value })
                        }
                      />
                    </div>

                    <select
                      value={formState.categoryId}
                      onChange={(e) =>
                        setFormState({
                          ...formState,
                          categoryId: e.target.value,
                        })
                      }
                      className="form-select"
                    >
                      <option value="selectCategory">Select category</option>
                      {categoriesState.categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {upperFirstLetter(category.name)}
                        </option>
                      ))}
                    </select>

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
        title = "Congratulations !!!"
        content = "The book successfully added."
        deleteBtn = {false}
        cancelBtn={false}
        visible={openSuccessModal}
      />
    </div>
  );
};

export default AddBook;
