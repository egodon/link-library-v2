import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import user from './user';
import links, {
  watcherGetLinks,
  watcherAddLink,
  watcherDeleteLink,
} from './links';

export function* rootSaga() {
  yield all([watcherGetLinks(), watcherAddLink(), watcherDeleteLink()]);
}

export default combineReducers({
  user,
  links,
});
