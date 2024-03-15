import {  SET_SEARCH_RESULTS } from '../Search/actiontype';

const initialState = {
  searchResults: [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
