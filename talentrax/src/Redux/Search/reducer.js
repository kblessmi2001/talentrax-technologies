// reducers/searchReducer.js

const initialState = {
  searchText: '',
  searchResults: [] 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.payload
      };
    case 'SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.payload
      };
    default:
      return state;
  }
};

export  {reducer};
