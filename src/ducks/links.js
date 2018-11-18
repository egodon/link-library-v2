import { takeLatest, call, put } from 'redux-saga/effects';
import LinkApi from 'api';

const api = new LinkApi();

/* Actions */
export const LINKS_REQUESTING = '[links] requesting_all';
export const LINKS_UPDATE = '[links] update';
export const LINKS_ADD_REQUEST = '[links] add_request';
export const LINKS_ADD_SUCCESS = '[links] add_success';
export const LINKS_DELETE_REQUEST = '[links] delete_request';
export const LINKS_DELETE_SUCCESS = '[links] delete_success';
export const LINKS_REQUEST_FAILED = '[links] request_failed';
export const SELECT_CATEGORY = '[links] select_category';
export const UPDATE_SEARCH = '[links] update_search';
export const CLEAR_FILTERS = '[links] clear_filters';

/* Action creators */
export const getLinks = () => ({
  type: LINKS_REQUESTING,
});

export const updateLinks = (links) => ({
  type: LINKS_UPDATE,
  links,
});

export const addLink = (link) => ({
  type: LINKS_ADD_REQUEST,
  link,
});

export const deleteLink = (link) => ({
  type: LINKS_DELETE_REQUEST,
  link,
});

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  category,
});

export const updateSearch = (query) => ({
  type: UPDATE_SEARCH,
  searchQuery: query,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

/* Reducer */
const initialState = {
  data: [],
  fetching: true,
  error: null,
  category: null,
  searchQuery: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LINKS_REQUESTING:
      return {
        ...state,
        fetching: true,
      };

    case LINKS_UPDATE:
      return {
        ...state,
        data: action.links,
        fetching: false,
      };

    case LINKS_REQUEST_FAILED: {
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    }
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case UPDATE_SEARCH:
      return {
        ...state,
        searchQuery: action.searchQuery,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        category: null,
        searchQuery: '',
      };

    default:
      return state;
  }
};

/* Sagas */
export function* watcherGetLinks() {
  yield takeLatest(LINKS_REQUESTING, fetchLinks);
}

export function* watcherAddLink() {
  yield takeLatest(LINKS_ADD_REQUEST, addLinkRequest);
}

export function* watcherDeleteLink() {
  yield takeLatest(LINKS_DELETE_REQUEST, deleteLinkRequest);
}

function* fetchLinks() {
  try {
    const links = yield call(api.getAll);
    yield put({ type: LINKS_UPDATE, links });
  } catch (error) {
    yield put({ type: LINKS_REQUEST_FAILED, error });
  }
}

function* addLinkRequest({ link }) {
  try {
    const res = yield call(api.add, link);
    yield put({ type: LINKS_ADD_SUCCESS, res });
  } catch (error) {
    yield put({ type: LINKS_REQUEST_FAILED, error });
  }
}

function* deleteLinkRequest({ link }) {
  try {
    console.log("hey");
    const res = yield call(api.delete, link);
    yield put({ type: LINKS_DELETE_SUCCESS, res });
  } catch (error) {
    yield put({ type: LINKS_REQUEST_FAILED, error });
  }
}
