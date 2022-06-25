import {all, fork} from 'redux-saga/effects'
import cats from './cats'
import categories from './categories'

export default function* root() {
  const sagas = [
    cats,
    categories
  ];
  yield all(sagas.map(fork));
}