import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL
} from '../actions/categories'

const initialState = {
  categories: [],
  checkedCategory: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      return {
        ...state,
        checkedCategory: action.payload.data
      }
    }
    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload.data,
      }
    }
    case CATEGORIES_FAIL: {
      return {...state}
    }

    default: {
      return state;
    }
  }
}