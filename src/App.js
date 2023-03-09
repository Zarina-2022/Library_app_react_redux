import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import axios from "axios";
import api from "./api/api"; // axiosun base url'i => http://localhost:3004
import urls from "./api/urls"; // axiosun eindpointi => /books

import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";

import Loading from "./components/Loading";
import Error from "./components/Error"

import actionTypes from "./redux/actions/actionTypes";



function App() {
  const {booksState,categoriesState,authorsState} = useSelector((state) => state);
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

    // get authors
    dispatch({ type: actionTypes.authorActions.FETCH_AUTHORS_START });
    api
      .get(urls.authors)
      .then((res) => {
        setTimeout(() => {
          dispatch({
            type: actionTypes.authorActions.FETCH_AUTHORS_SUCCESS,
            payload: res.data,
          });
        }, 1000);
      })
      .catch((err) => {
        dispatch({
          type: actionTypes.authorActions.FETCH_AUTHORS_FAILURE,
          payload: "An error occurred while pulling authors",
        });
      });
  }, []);

  // success
  if (booksState.pending === true) {
    return <Loading />;
  }
  /*
  if (categoriesState.pending === true) {
    return <Loading />;
  }
  if (authorsState.pending === true) {
    return <Loading />;
  }
  */
  //  error
  if (booksState.error === true) {
    return <Error />;
  }
  /*
  if (categoriesState.error === true) {
    return ;
  }
  if (authorsState.error === true) {
    return ;
  }
*/


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// <Route path="*" element={<NotFoundPage />} />
// bu sayfayi diger sayfalarin en altina yazariz.
// Yildizin(*) anlami: diger path'lere uymiyorsa bu sayfa gosterilsin
