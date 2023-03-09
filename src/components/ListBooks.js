import React from "react";
import { useSelector } from "react-redux";
import "../assets/styles/listBooks.css";
import { Link } from "react-router-dom";

const ListBooks = () => {
  const { booksState, categoriesState, authorsState } = useSelector(
    (state) => state
  );

  return (
    <div>
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
                              <table className="table table-striped mb-0">
                                <thead style={{ backgroundColor: "#b32d1b" }}>
                                  <tr className="text-center">
                                    <th scope="col">#</th>
                                    <th scope="col">Book</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Actions</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {booksState.books.map((book, index) => {
                                    const myCategory =
                                      categoriesState.categories.find(
                                        (item) => item.id === book.categoryId
                                      );
                                    const myAuthor = authorsState.authors.find(
                                      (item) => item.id === book.authorId
                                    );
                                    return (
                                      <tr key={book.id}>
                                        <td>{index + 1}</td>
                                        <td>{book.title}</td>
                                        <td>{myCategory.name}</td>
                                        <td>{myAuthor.name}</td>
                                        <td>
                                          <div className="d-flex justify-content-end">
                                            <button
                                              type="button"
                                              className="btn btn-sm btn-danger me-3"
                                            >
                                              Delete
                                            </button>
                                            <Link
                                              to={"/"}
                                              className="btn btn-sm btn-warning me-3"
                                            >
                                              Edit
                                            </Link>
                                            <Link
                                              to={"/"}
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
    </div>
  );
};

export default ListBooks;
