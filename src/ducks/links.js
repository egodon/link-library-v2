import { takeLatest, call, put } from 'redux-saga/effects';
import Api from 'api';

/* Actions */
export const LINKS_REQUESTING = 'LINKS_REQUESTING';
export const LINKS_UPDATE = 'LINKS_UPDATE';
export const LINKS_REQUEST_FAILED = 'LINKS_REQUEST_FAILED';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

/* Action creators */
export const getLinks = () => ({
  type: LINKS_REQUESTING,
});

export const updateLinks = (links) => ({
  type: LINKS_UPDATE,
  links,
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
  fetching: false,
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
export function* watchLinks() {
  yield takeLatest(LINKS_REQUESTING, fetchLinks);
}

function* fetchLinks() {
  try {
    const links = yield call(Api.getLinks);
    yield put({ type: LINKS_UPDATE, links });
  } catch (error) {
    yield put({ type: LINKS_REQUEST_FAILED, error });
  }
}
