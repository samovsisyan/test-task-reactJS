import {combineReducers} from 'redux'
import cats from './cats'
import categories from './categories'

export default combineReducers({
  cats,
  categories
});