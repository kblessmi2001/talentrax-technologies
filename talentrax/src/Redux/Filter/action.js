// action.js

import axios from "axios";
import { FETCH_PLANETS_SUCCESS, FETCH_PLANETS_REQUEST, FETCH_PLANETS_FAILURE, CLEAR_FILTERS, SET_FILTERS } from "../Filter/actiontype";

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: filters
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS
  };
};

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: FETCH_PLANETS_REQUEST });

  axios
    .get("https://server-taletrax-tech.onrender.com/planets", paramObj)
    .then((res) => {
      dispatch({ type: FETCH_PLANETS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_PLANETS_FAILURE });
    });
};
