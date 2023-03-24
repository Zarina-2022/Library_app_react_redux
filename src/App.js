import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import axios from "axios";
import api from "./api/api"; // axiosun base url'i => http://localhost:3004
import urls from "./api/urls"; // axiosun eindpointi => /books

import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import NotFoundPage from "./pages/NotFoundPage";
import BookDetails from "./pages/BookDetails";
import EditBook from "./pages/EditBook";
import Categories from "./pages/Categories";
import EditCategory from "./pages/EditCategory";
import CategoryDetails from "./pages/CategoryDetails";

import Loading from "./components/Loading";
import Error from "./components/Error"

import actionTypes from "./redux/actions/actionTypes";

function App() {
  const {booksState,categoriesState} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // get books
    // axios.get("http://localhost:3004/books");
    dispatch({ type: actionTypes.bookActions.FETCH_BOOKS_START });
    api
      .get(urls.books) // axios get ile ayni
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.bookActions.FETCH_BOOKS_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.bookActions.FETCH_BOOKS_FAILURE,
          payload: "An error occurred while pulling the books",
        });
      });

    // get categories
    dispatch({ type: actionTypes.categoryActions.FETCH_CATEGORIES_START });
    api
      .get(urls.categories)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.categoryActions.FETCH_CATEGORIES_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.categoryActions.FETCH_CATEGORIES_FAILURE,
          payload: "An error occurred while pulling the categories",
        });
      });
  }, []);

  // success
  if (!booksState.success || !categoriesState.success) {
    return <Loading />;
  }
  //  error
  if (booksState.error || categoriesState.error) {
    return <Error />;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-details/:bookId" element={<BookDetails />} />
        <Route path="/edit-book/:bookId" element={<EditBook />} />
        <Route path="/categories-page" element={<Categories />} />
        <Route path="/edit-category/:categoryIdId" element={<EditCategory />} />
        <Route path="/category-details/:categoryId" element={<CategoryDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path="*" element={<NotFoundPage />} />
// bu sayfayi diger sayfalarin en altina yazariz.
// Yildizin(*) anlami: diger path'lere uymiyorsa bu sayfa gosterilsin
