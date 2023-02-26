import {
  CLEAR_COUNTRY,
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  SET_NEIGHBORS,
} from './currentCountryActions';

const initialState = {
  status: 'idle',
  error: null,
  country: null,
  neighbors: [],
};

export const currentCountryReducer = (
  state = initialState,
  { type, payload }
) => {
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

    case CLEAR_COUNTRY:
      return initialState;

    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };

    default:
      return state;
  }
};
