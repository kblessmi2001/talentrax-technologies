// action.js

export const setSearchResults = (results) => {
  return {
    type: 'SET_SEARCH_RESULTS',
    payload: results
  };
};

export const searchItems = (searchText) => {
  return (dispatch) => {
    // Perform search operation here, e.g., fetch data from an API
    // For demonstration purposes, assume searchResults is an array of search results
    const searchResults = []; // Perform actual search operation based on searchText
    dispatch(setSearchResults(searchResults));
  };
};
