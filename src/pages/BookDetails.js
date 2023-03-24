import React from "react";
import { useSelector } from "react-redux";

import Header from "../components/Header";
import PriceStyle from "../components/PriceStyle";

import {useParams,Link } from "react-router-dom";

import bookPhoto from "../assets/images/book.avif";

import "../assets/styles/bookDetails.css";

import { upperFirstLetter } from "../utils/functions";

const BookDetails = () => {
  //const params = useParams();
  const { bookId } = useParams(); // yukaridaki params ile ayni
  const { booksState, categoriesState } = useSelector((state) => state);

  /*
  let myBook = null;
  for (let i = 0; i < booksState.books.length; i++) {
    if (booksState.books[i].id === bookId) {
      myBook = booksState.books[i];
      break;
    }
  }
  */
  // yukaridaki for isleminin aynisini es6 ile gelen find() ile de yapabiliriz:

  const myBook = booksState.books.find((item) => item.id === bookId);
  // category'nin id'sini bulmak icin:
  const myCategory = categoriesState.categories.find(
    (item) => item.id === myBook.categoryId
  );

  return (
    <div className="pageContainer">
      <Header />
      <div className="card mb-3 mx-auto" style={{ maxWidth: "850px" }}>
        <div className="row g-0">
          <div className="col-md-5 text-center">
            <img
              src={myBook.img}
              className="img-fluid rounded-start bookFoto"
              alt="book"
            />
          </div>

          <div className="col-md-7">
            <div className="card-body">
              <h2 className="text-center bookDetails">Book Details</h2>
              <form className="form-horizontal w-100" role="form">
                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    Title:
                    <span className="titlestl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {upperFirstLetter(myBook.title)}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    Author:
                    <span className="titlestl">&nbsp;&nbsp;&nbsp;&nbsp;
                      {upperFirstLetter(myBook.author)}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    Publisher:
                    <span className="titlestl">
                      {upperFirstLetter(
                        myBook.publisher === ""
                          ? "Unspecified"
                          : myBook.publisher
                      )}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    Price:&nbsp;
                    <span className="titlestl" style={{ position: "absolute" }}>
                      {myBook.price === "" ? (
                        "Unspecified"
                      ) : (
                        <span>
                          <PriceStyle bookPrice={myBook.price} />
                        </span>
                      )}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    ISBN:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="titlestl">
                      {myBook.isbn === "" ? "Unspecified" : myBook.isbn}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <h4 className="col-sm-9 my-1 titleClr">
                    Category:
                    <span className="titlestl">
                      {upperFirstLetter(myCategory.name)}
                    </span>
                  </h4>
                </div>

                <div className="form-group">
                  <div className="col-sm-9 w-100">
                    <Link 
                      to={"/"}
                      type="button"
                      className="btn btn-lg mt-5 btnBg"
                    >
                      Homepage
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
