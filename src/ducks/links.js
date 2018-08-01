/* Actions */
export const UPDATE_LINKS = 'UPDATE_LINKS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

/* Action creators */
export const updateLinks = (links) => ({
  type: UPDATE_LINKS,
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
  category: null,
  searchQuery: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LINKS:
      return {
        ...state,
        data: action.links,
      };

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
