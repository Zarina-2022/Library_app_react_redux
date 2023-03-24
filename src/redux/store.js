import { createStore, combineReducers } from "redux";
import booksReducer from "./reducers/booksReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import themeReducer from "./reducers/themeReducer";

const rootReducer = combineReducers({
  booksState: booksReducer,
  categoriesState: categoriesReducer,
  themeState: themeReducer,
});

const store = createStore(rootReducer);

export default store;

// burasi bizim masamiz ve burada gorevli atiyoruz (onlari da reducerda ekliyoruz)