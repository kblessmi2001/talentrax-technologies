import { SET_FILTERS, CLEAR_FILTERS } from '../Filter/actiontype';

const initialState = {
  filters: {
    color: [],
    shape: [],
    size: [],
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          color: [],
          shape: [],
          size: [],
        },
      };
    default:
      return state;
  }
};

export  {reducer};
