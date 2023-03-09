import { createStore, combineReducers } from "redux";
import booksReducer from "./reducers/booksReducer";
import categoriesReducer from "./reducers/categoriesReducer";
import authorsReducer from "./reducers/authorsReducer";

const rootReducer = combineReducers({
  booksState: booksReducer,
  categoriesState: categoriesReducer,
  authorsState: authorsReducer
});

const store = createStore(rootReducer)

export default store