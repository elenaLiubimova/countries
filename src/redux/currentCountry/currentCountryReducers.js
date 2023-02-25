import { SET_COUNTRY, SET_ERROR, SET_LOADING } from "./currentCountryActions";

const initialState = {
  status: 'idle',
  error: null,
  country: null,
};

export const currentCountryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        country: payload,
      };
    default:
      return state;
  }
};