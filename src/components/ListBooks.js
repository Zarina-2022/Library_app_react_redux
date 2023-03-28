import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import actionTypes from "../redux/actions/actionTypes";

import "../assets/styles/listBooks.css";

import Alert from "./Alert";
import Modal from "../components/Modal";

import { upperFirstLetter2 } from "../utils/functions";

import api from "../api/api";
import urls from "../api/urls";

const ListBooks = () => {
  const { booksState, categoriesState, themeState } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [successAlert, setSuccessAlert] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deletedBookId, setDeletedBookId] = useState("");

  const deleteBook = (id) => {
    // server'den siliyor:
    api
      .delete(`${urls.books}/${id}`)
      .then((res) => {
        // store'dan siliyor (type - reducer'deki delete komutu tetikliyor)
        dispatch({ type: actionTypes.bookActions.DELETE_BOOKS, payload: id });
        setOpenDeleteModal(false);
        setSuccessAlert(true);
        setTimeout(() => {
          setSuccessAlert(false);
        }, 3000);
        return;
      })
      .catch((err) => {});
  };

  return (
    <div>
      {successAlert && (
        <Alert
          text="The book successfully deleted !!!"
          type="danger"
          style={{ width: "82%" }}
          className="container fs-5 text-center"
          hasAlert={true}
        />
      )}
      {booksState.books.length === 0 && (
        <div className="alert mt-5 text-center fs-1 fw-semibold d-flex justify-content-center">
          <div className="alert alert-info mt-5  w-75" role="alert">
            There are no book records to show in the system!
          </div>
        </div>
      )}
      {booksState.books.length > 0 && (
        <>
          {
            <section className="intro">
              <div className="bg-image h-100">
                <div className="mask d-flex align-items-center h-100">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12">
                        <div className="card">
                          <div className="card-body p-0">
                            <div
                              className="table-responsive table-scroll"
                              data-mdb-perfect-scrollbar="true"
                              style={{ position: "relative", height: "700" }}
                            >
                              <table
                                className={`table table-${
                                  themeState === "light" ? "light" : "dark"
                                } table-striped mb-0`}
                              >
                                <thead>
                                  <tr className="text-center">
                                    <th className="tableHead" scope="col">
                                      #
                                    </th>
                                    <th
                                      className="tableHead text-center"
                                      scope="col"
                                    >
                                      Book
                                    </th>
                                    <th
                                      className="tableHead text-center"
                                      scope="col"
                                    >
                                      Category
                                    </th>
                                    <th
                                      className="tableHead text-center"
                                      scope="col"
                                    >
                                      Author
                                    </th>
                                    <th
                                      className="tableHead text-center"
                                      scope="col"
                                    >
                                      Actions
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {booksState.books.map((book, index) => {
                                    const myCategory =
                                      categoriesState.categories.find(
                                        (item) => item.id === book.categoryId
                                      );
                                    return (
                                      <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{upperFirstLetter2(book.title)}</td>
                                        <td>
                                          {upperFirstLetter2(myCategory.name)}
                                        </td>
                                        <td>
                                          {upperFirstLetter2(book.author)}
                                        </td>
                                        <td>
                                          <div className="d-flex justify-content-center">
                                            <button
                                              onClick={() => {
                                                setOpenDeleteModal(true);
                                                setDeletedBookId(book.id);
                                              }}
                                              type="button"
                                              className="btn btn-sm btn-danger me-3"
                                            >
                                              Delete
                                            </button>

                                            <Link
                                              to={`/edit-book/${book.id}`}
                                              className="btn btn-sm btn-warning me-3"
                                            >
                                              Edit
                                            </Link>

                                            <Link
                                              to={`/book-details/${book.id}`}
                                              className="btn btn-sm btn-primary me-3"
                                            >
                                              Details
                                            </Link>
                                          </div>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          }
        </>
      )}
      <Modal
        title="Are you sure?"
        content="Do you really want to delete this book? This process cannot be undone."
        deleteBtn={true}
        deleteBtnOnlick={() => deleteBook(deletedBookId)}
        cancelBtnOnlick={() => setOpenDeleteModal(false)}
        visible={openDeleteModal}
      />
    </div>
  );
};

export default ListBooks;
/*
Bir sayfada bir modale'i  acip kapatmaktan bahsediyorsak, 
bunun acilip kapanacagini bir state ile kontrol ederiz.
*/

/*
 to={`/book-details/${book.id}`}
 hangi kitaba tiklarsak onun id'sini getirecek (book-details)
*/
