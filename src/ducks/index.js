import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user from './user';
import links, { watchLinks } from './links';

export function* rootSaga() {
  yield all([watchLinks()]);
}

export default combineReducers({
  user,
  links,
});
