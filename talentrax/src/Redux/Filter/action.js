import { FETCH_PLANETS_SUCCESS,FETCH_PLANETS_REQUEST,FETCH_PLANETS_FAILURE } from "./actiontype";

export const getProducts = (paramObj) => (dispatch) => {
    dispatch({ type: FETCH_PLANETS_REQUEST });
  
    axios
      .get("http://localhost:8080/planets", paramObj)
      .then((res) => {
        dispatch({ type: FETCH_PLANETS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
       dispatch({type:FETCH_PLANETS_FAILURE})
      });
  };
  