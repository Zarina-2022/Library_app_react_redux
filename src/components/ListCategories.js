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

const ListCategories = () => {
  const { booksState, categoriesState, themeState } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const [successAlert, setSuccessAlert] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [deletedCategoryId, setDeletedCategoryId] = useState("");

  const deleteCategory = (id) => {
    api
      .delete(`${urls.categories}/${id}`)
      .then((res) => {
        dispatch({
          type: actionTypes.categoryActions.DELETE_CATEGORIES,
          payload: id,
        });
        dispatch({
          type: actionTypes.bookActions.DELETE_BOOKS_AFTER_DELETE_CATEGORY,
          payload: id,
        });
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
          text="The category successfully deleted !!!"
          type="danger"
          style={{ width: "82%" }}
          className="container fs-5 text-center"
          hasAlert={true}
        />
      )}
      {categoriesState.categories.length === 0 && (
        <div className="alert mt-5 text-center fs-1 fw-semibold d-flex justify-content-center">
          <div className="alert alert-info mt-5  w-75" role="alert">
            There are no category records to show in the system!
          </div>
        </div>
      )}
      {categoriesState.categories.length > 0 && (
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
                                    <th
                                      className="tableHead text-center"
                                      scope="col"
                                    >
                                      #
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
                                      Number of books
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
                                  {categoriesState.categories.map(
                                    (category, index) => {
                                      const myBooks = booksState.books.filter(
                                        (item) =>
                                          item.categoryId === category.id
                                      );
                                      /*
                                    filter() islemi for() dongusu ile de yazilabilir:
                                    const myBooks=[]
                                    for(let i=0;i<booksState.books.length;i++){
                                        if(booksState.books[i].categoryId === category.id){
                                            myBooks.push(booksState.books[i])
                                        }
                                    }
                                     */

                                      return (
                                        <tr key={category.id}>
                                          <td>{index + 1}</td>
                                          <td>
                                            {upperFirstLetter2(category.name)}
                                          </td>
                                          <td>{myBooks.length}</td>
                                          <td>
                                            <div className="d-flex justify-content-center">
                                              <button
                                                onClick={() => {
                                                  setOpenDeleteModal(true);
                                                  setDeletedCategoryId(
                                                    // bu state ile program artik biliyor hangi category id'si tiklandi (state'in icine tiklanan category'nin id'si konuldu)
                                                    category.id
                                                  );
                                                }}
                                                type="button"
                                                className="btn btn-sm btn-danger me-3"
                                              >
                                                Delete
                                              </button>

                                              <Link
                                                to={`/edit-category/${category.id}`}
                                                className="btn btn-sm btn-warning me-3"
                                              >
                                                Edit
                                              </Link>

                                              <Link
                                                to={`/category-details/${category.id}`}
                                                className="btn btn-sm btn-primary me-3"
                                              >
                                                Details
                                              </Link>
                                            </div>
                                          </td>
                                        </tr>
                                      );
                                    }
                                  )}
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
        content="Do you really want to delete this category? This process cannot be undone."
        deleteBtn={true}
        deleteBtnOnlick={() => deleteCategory(deletedCategoryId)}
        cancelBtnOnlick={() => setOpenDeleteModal(false)}
        visible={openDeleteModal}
      />
    </div>
  );
};

export default ListCategories;

/*
errorFunction:
book.map = ()=> {
    return(
        <tr key={category.id}>
    )
}

direkt return yapar ()
book.map(category, index) => (
    <tr key={category.id}>
)
*/
