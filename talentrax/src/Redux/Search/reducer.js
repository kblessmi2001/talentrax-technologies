import { SEARCH_REQUEST, SET_SEARCH_RESULTS } from '../Search/actiontype'; 

const initialState = {
  searchResults: [],
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};

export {reducer};
