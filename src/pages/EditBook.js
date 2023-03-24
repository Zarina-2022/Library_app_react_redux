import React, { useState, useRef } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { upperFirstLetter } from "../utils/functions";
import Alert from "../components/Alert";
import api from "../api/api";
import urls from "../api/urls";
import "../assets/styles/addBooks.css";
import actionTypes from "../redux/actions/actionTypes";

import { useNavigate } from "react-router-dom";

const EditBook = () => {
  const titleRef = useRef();
  const authorRef = useRef();
  const publisherRef = useRef();

  const { bookId } = useParams();
  const { booksState } = useSelector((state) => state);

  const myBook = booksState.books.find((item) => item.id === bookId);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categoriesState } = useSelector((state) => state);

  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [error, setError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  /*
  const [formState, setFormState] = useState({
    id: myBook.id,
    title: myBook.title,
    author: myBook.author,
    publisher: myBook.publisher,
    price: myBook.price,
    isbn: myBook.isbn,
    categoryId: myBook.categoryId,
  });
*/
  // yukaridaki state'ti asagidaki gibi tek satirda da yazabiliriz (kisa)
  const [formState, setFormState] = useState(myBook);

  const [categoryAlert, setCategoryAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //Validation
    if (formState.title === "") {
      // error message (input altinda)
      titleRef.current.style.display = "block";
      setTimeout(() => {
        titleRef.current.style.display = "none";
      }, 4000);
      return;
    }
    if (formState.author === "") {
      authorRef.current.style.display = "block";
      setTimeout(() => {
        authorRef.current.style.display = "none";
      }, 4000);
      return;
    }
    if (formState.publisher === "") {
      publisherRef.current.style.display = "block";
      setTimeout(() => {
        publisherRef.current.style.display = "none";
      }, 4000);
      return;
    }
    if (formState.price === "") {
      setError("price");
      setErrorMsg("The price is required");
      setTimeout(() => {
        setError("");
        setErrorMsg("");
      }, 4000);
      return;
    }
    if (formState.isbn === "") {
      setError("isbn");
      setErrorMsg("ISBN is required");
      setTimeout(() => {
        setError("");
        setErrorMsg("");
      }, 4000);
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
      .put(`${urls.books}/${bookId}`, formState)
      .then((res) => {
        dispatch({
          type: actionTypes.bookActions.PUT_BOOKS,
          payload: formState,
        });
        setOpenSuccessModal(true);
        setTimeout(() => {
          setOpenSuccessModal(false);
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        alert("Error occur");
      });
  };

  return (
    <div>
      <Header />

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
                    <span className="logo-font"> EDIT </span> BOOK
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
                        value={formState.title}
                        onChange={(e) =>
                          setFormState({ ...formState, title: e.target.value })
                        }
                      />
                      <p ref={titleRef} style={{ display: "none" }}>
                        <small className="text-danger fw-bold">
                          Title is required
                        </small>
                      </p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="author" className="form-label mb-0">
                        Author
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="author"
                        value={formState.author}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            author: e.target.value,
                          })
                        }
                      />
                      <p ref={authorRef} style={{ display: "none" }}>
                        <small className="text-danger fw-bold">
                          Auyhor is required
                        </small>
                      </p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="publisher" className="form-label mb-0">
                        Publisher
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="publisher"
                        value={formState.publisher}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            publisher: e.target.value,
                          })
                        }
                      />
                      <p ref={publisherRef} style={{ display: "none" }}>
                        <small className="text-danger fw-bold">
                          Publisher is required
                        </small>
                      </p>
                    </div>

                    <div className="form-group">
                      <label htmlFor="price" className="form-label mb-0">
                        Price
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="price"
                        value={formState.price}
                        onChange={(e) =>
                          setFormState({ ...formState, price: e.target.value })
                        }
                      />
                      {error === "price" && (
                        <p>
                          <small className="text-danger fw-bold">{errorMsg}</small>
                        </p>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="isbn" className="form-label mb-0">
                        ISBN
                      </label>
                      <input
                        type="text"
                        className="form-control mb-3"
                        id="isbn"
                        value={formState.isbn}
                        onChange={(e) =>
                          setFormState({ ...formState, isbn: e.target.value })
                        }
                      />
                       {error === "isbn" && (
                        <p>
                          <small className="text-danger fw-bold">{errorMsg}</small>
                        </p>
                      )}
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
  );
};

export default EditBook;
