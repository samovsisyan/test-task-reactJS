import {takeLatest, put, call} from 'redux-saga/effects';
import {
  CATS_REQUEST,
  CATS_SUCCESS,
  CATS_FAIL
} from "../actions/cats"

import * as api from '../../api'

function* handleGetCats(action) {
  try {
    const data = yield call(api.getCats, action.payload.limit, action.payload.categoryId);
    yield put({
      type: CATS_SUCCESS,
      payload: {data: data?.data}
    });
  } catch (e) {
    yield put({
      type: CATS_FAIL,
      message: e.response.data.message || e.message,
    })
  }
}

export default function* watcher() {
  yield takeLatest(CATS_REQUEST, handleGetCats)
}