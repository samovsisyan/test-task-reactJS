import {
  CATS_REQUEST,
  CATS_SUCCESS,
  CATS_FAIL
} from '../actions/cats'

const initialState = {
  cats: [],
  limit: 10
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATS_REQUEST: {
      return {...state}
    }
    case CATS_SUCCESS: {
      return {
        ...state,
        cats: action.payload.data,
      }
    }
    case CATS_FAIL: {
      return {...state}
    }

    default: {
      return state;
    }
  }
}