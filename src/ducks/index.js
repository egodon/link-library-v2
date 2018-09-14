import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user from './user';
import links, { watcherGetLinks, watcherAddLink } from './links';

export function* rootSaga() {
  yield all([watcherGetLinks(), watcherAddLink()]);
}

export default combineReducers({
  user,
  links,
});
