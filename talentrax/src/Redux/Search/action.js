// action.js

import { SEARCH_REQUEST, SET_SEARCH_RESULTS } from '../Search/actiontype';

export const setSearchResults = (results) => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results
  };
};

export const searchRequest = () => {
  return {
    type: SEARCH_REQUEST
  };
};

export const searchItems = (searchText) => {
  return (dispatch) => {
    dispatch(searchRequest());
    fetch(`https://server-taletrax-tech.onrender.com/planets?q=${searchText}`)
      .then(response => response.json())
      .then(data => {
        dispatch(setSearchResults(data));
      })
      .catch(error => {
        console.error('Error fetching planets data:', error);
      });
  };
};
