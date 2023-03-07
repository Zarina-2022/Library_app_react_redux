import actionTypes from "../actions/actionTypes";

const initialState = {
  pending: false,
  success: false,
  categories: [],
  error: false,
  errorMessage: "",
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.categoryActions.FETCH_CATEGORIES_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.categoryActions.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        categories: action.payload,
      };
    case actionTypes.categoryActions.FETCH_CATEGORIES_SUCCESS:
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

export default categoriesReducer;
