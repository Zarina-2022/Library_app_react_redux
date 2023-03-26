import actionTypes from "../actions/actionTypes";

const initialState = {
  pending: true,
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
    case actionTypes.categoryActions.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        pending: false,
        success: false,
        error: true,
        errorMessage: action.payload,
      };

    case actionTypes.categoryActions.POST_CATEGORIES:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
     
    case actionTypes.categoryActions.DELETE_CATEGORIES:
      let filteredCategories = state.categories.filter(
        (item) => item.id !== action.payload
      );

      return {
        ...state,
        categories: filteredCategories,
      };

    case actionTypes.categoryActions.PUT_CATEGORIES:
      const filteredArr = state.categories.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        categories: [...filteredArr, action.payload],
      };

    default:
      return state;
  }
};

export default categoriesReducer;
