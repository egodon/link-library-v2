export const AUTH_USER = '[user] auth';

export const authUser = (user = null) => ({
  type: AUTH_USER,
  user,
});

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return action.user;

    default:
      return state;
  }
};
