const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data
  }
}

const reducer = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_USER:
      return Object.assign(state, { user: payload });
    default:
      return false;
  }
}

export default reducer;
