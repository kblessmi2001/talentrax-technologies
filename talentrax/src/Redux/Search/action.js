import { SET_SEARCH_RESULTS } from "../Search/actiontype";

export const setSearchResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  };
};

export const searchItems = (searchText)=>(dispatch) => {
  console.log(searchText)
    fetch(`http://localhost:8080/planets?q=${searchText}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setSearchResults(data));
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching planets data:', error);
      });
  };

