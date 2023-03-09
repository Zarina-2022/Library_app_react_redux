// kitaplarin baslangic durumu bos bir dizi olmayacak:

import actionTypes from "../actions/actionTypes";

// yani kitaplar cekilirken:
const initialState = {
  pending: true, // askida (beklemek) - uzerinde herhangi islem var mi yok mu?
  success: false, // bu islem basariyla gerceklesmis mi, gerceklesmemis mi?
  books: [], // o anki butun guncel kitap bilgileri
  error: false, // herhangi bir hata varmi, yok mu?
  errorMessage: "", // ve hata var ise bunun mesaji
};

// switch/case = direkt aradigini bulup aliyor
// if/else ise sirayla hepsini kontrol ederek buluyor;
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.bookActions.FETCH_BOOKS_START:
      return {
        ...state,
        pending: true, // kitap cekme islemi basladi (crud islemleri)
      };
    case actionTypes.bookActions.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        pending: false, // kitap cekme islemi bitti
        success: true, // kitaplar basariyla cekildi
        books: action.payload, // actionin getirdigi ek bilgi (kitaplar)
      };
    case actionTypes.bookActions.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default booksReducer;
