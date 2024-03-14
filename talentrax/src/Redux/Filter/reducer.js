import { FETCH_PLANETS_FAILURE, FETCH_PLANETS_REQUEST, FETCH_PLANETS_SUCCESS } from "./actiontype";

const initialState = {
  isLoading:true,
  isError:true,
  planets: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANETS_SUCCESS:
      return {
        ...state,
        isLoading:false,
        isError:false,
        planets: action.payload,
      };
      case FETCH_PLANETS_REQUEST:
      return {
        ...state,
        isError:false,
        isLoading:true,
      };
      case FETCH_PLANETS_FAILURE:
      return {
        ...state,
        isLoading:false,
        isError:true
      };
    default:
      return state;
  }
};

export  {reducer};
