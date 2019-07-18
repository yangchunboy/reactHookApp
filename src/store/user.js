const initalState = {
    name: '张三',
    age: 18
};

const UPDATE_USER = 'UPDATE_USER';

export const updateUser = (data) => {
  return {
    type: UPDATE_USER,
    payload: data
  }
}

const reducer = (state = initalState, action) => {
  // console.log(state)
  const { type, payload } = action;
  switch(type) {
    case UPDATE_USER:
      return Object.assign({}, state, { ...payload });
    default:
      return state;
  }
}

export default reducer;
