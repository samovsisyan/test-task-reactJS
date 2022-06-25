import {takeLatest, put, call} from 'redux-saga/effects'
import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL
} from '../actions/categories'

import * as api from '../../api'

function* handleGetCategories() {
  try {
    const data = yield call(api.getCategories);
    yield put({
      type: CATEGORIES_SUCCESS,
      payload: {data: data}
    });
  } catch (e) {
    yield put({
      type: CATEGORIES_FAIL,
      message: e.response.data.message || e.message,
    })
  }
}

export default function* watcher() {
  yield takeLatest(CATEGORIES_REQUEST, handleGetCategories)
}