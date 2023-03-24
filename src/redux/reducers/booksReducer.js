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
      
      // yeni kitab eklemek icin (axios.post() gibi) = ADD_BOOK
      case actionTypes.bookActions.POST_BOOKS:
        /*
         Asagidakini return'u boyle de yazabiliriz:
          let newArray = state.books
          newArray.push(action.payload)
          return{
            ...state,
            books: newArray
          }
        */
        return{
          ...state,
          books:[...state.books,action.payload]
        }
      //  store'dan kitab silmek icin (axios.delete() gibi)
      
      case actionTypes.bookActions.DELETE_BOOKS:
        // once yeni sepete id'si silinmeyen kitaplari koyuyoruz (filter ile):
        let filteredBooks = state.books.filter(item => item.id !== action.payload)
        // sonra bu sepeti ekranda listeliyoruz:
        return{
         ...state,
         books: filteredBooks
        }

        /*
         yukaridaki delete islemi for dongusu ile de yazabiliriz:
        
         let emptyArray = []
         for(i=0;i<state.books.length;i++){
          if(state.books[i].ad !== action.payload){
            emptyArray.push(state.books[i])
          }
        }
        return{
         ...state,
         books: emptyArray
        }

         */

        //filter ile  edit yapilinca  kitap sirasi bozuluyor, for ile bozulmuyor
        case actionTypes.bookActions.PUT_BOOKS:
         const filteredArr = state.books.filter(item => item.id !== action.payload.id)
        return{
         ...state,
         books: [...filteredArr, action.payload]
        }
               /*
         yukaridaki PUT_BOOKS (edit-book) islemi for dongusu ile de yazabiliriz:
        
         const tempArray = []
         for(i=0;i<state.books.length;i++){
          if(state.books[i].ad !== action.payload.id){
            tempArray.push(state.books[i])
          } else{
              tempArray.push(action.payload)
          }
        }
         return{
         ...state,
         books: tempArray
        }
         */
    default:
      return state;
  }
};

export default booksReducer;
