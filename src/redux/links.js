export const UPDATE_LINKS = 'UPDATE_LINKS';

export const updateLinks = (links) => ({
  type: UPDATE_LINKS,
  links,
});

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LINKS:
      return action.links;

    default:
      return state;
  }
};
