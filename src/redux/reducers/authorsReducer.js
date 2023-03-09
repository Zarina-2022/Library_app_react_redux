import actionTypes from "../actions/actionTypes";

const initialState = {
  pending: true,
  success: false,
  authors: [],
  error: false,
  errorMessage: "",
};

const authorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.authorActions.FETCH_AUTHORS_START:
      return {
        ...state,
        pending: true,
      };
    case actionTypes.authorActions.FETCH_AUTHORS_SUCCESS:
      return {
        ...state,
        pending: false,
        success: true,
        authors: action.payload,
      };
    case actionTypes.authorActions.FETCH_AUTHORS_FAILURE:
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

export default authorsReducer;
