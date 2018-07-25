export const UPDATE_LINKS = 'UPDATE_LINKS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const updateLinks = (links) => ({
  type: UPDATE_LINKS,
  links,
});

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  category: category[0].toUpperCase() + category.slice(1),
});

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

    default:
      return state;
  }
};
