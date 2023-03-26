// kitaplarla ve kategorilerle yapilacak islemler (konular):
const actionTypes = {
  // FETCH yerine GET de yazabiliriz:
  bookActions: {
    FETCH_BOOKS_START: "FETCH_BOOKS_START", // kitap bilgisini cekmeye basladigimiz anda START dispatch edecegiz
    FETCH_BOOKS_SUCCESS: "FETCH_BOOKS_SUCCESS", // kitap bilgisi basariyla geldigi anda SUCCESS dispatch edecegiz
    FETCH_BOOKS_FAILURE: "FETCH_BOOKS_FAILURE", // kitap bilgisi basarisiz geldigi anda FAILURE dispatch edecegiz
    POST_BOOKS: "POST_BOOKS", // Yeni kitabi db'se gondermek icin
    DELETE_BOOKS: "DELETE_BOOKS", // Stordan (yani frontend'ten kitap silme)
    PUT_BOOKS: "PUT_BOOKS", // kitap degisikligini bilgirmek icin
    DELETE_BOOKS_AFTER_DELETE_CATEGORY: "DELETE_BOOKS_AFTER_DELETE_CATEGORY" // category silindiginde, o kategoriye ait tum kitaplar da silinmeli
  },
  categoryActions: {
    FETCH_CATEGORIES_START: "FETCH_CATEGORIES_START",
    FETCH_CATEGORIES_SUCCESS: "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILURE: "FETCH_CATEGORIES_FAILURE",
    POST_CATEGORIES: "POST_CATEGORIES",
    DELETE_CATEGORIES: "DELETE_CATEGORIES",
    PUT_CATEGORIES: "PUT_CATEGORIES"
  },
  themeActions:{
    CHANGE_THEME: "CHANGE_THEME"
  }
};

export default actionTypes;
