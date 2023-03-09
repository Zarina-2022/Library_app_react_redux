const actionTypes = {
    // FETCH yerine GET de yazabiliriz:
    bookActions: {
        FETCH_BOOKS_START:"FETCH_BOOKS_START",     // kitap bilgisini cekmeye basladigimiz anda START dispatch edecegiz
        FETCH_BOOKS_SUCCESS:"FETCH_BOOKS_SUCCESS", // kitap bilgisi basariyla geldigi anda SUCCESS dispatch edecegiz
        FETCH_BOOKS_FAILURE:"FETCH_BOOKS_FAILURE"  // kitap bilgisi basarisiz geldigi anda FAILURE dispatch edecegiz
    },
    categoryActions: {
        FETCH_CATEGORIES_START:"FETCH_CATEGORIES_START",
        FETCH_CATEGORIES_SUCCESS:"FETCH_CATEGORIES_SUCCESS",
        FETCH_CATEGORIES_FAILURE:"FETCH_CATEGORIES_FAILURE"
    },
    authorActions: {
        FETCH_AUTHORS_START:"FETCH_AUTHORS_START",
        FETCH_AUTHORS_SUCCESS:"FETCH_AUTHORS_SUCCESS",
        FETCH_AUTHORS_FAILURE:"FETCH_AUTHORS_FAILURE"
    }
}

export default actionTypes