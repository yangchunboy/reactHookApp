const change_one_state = 'change_one_state';
const change_two_state = 'change_two_state';
const change_other_state = 'change_other_state';

export const initalState = {
  firstState: 1,
  secondState: 2,
};

export const changeOneState = (data) => {
  return {
    type: change_one_state,
    payload: data
  }
}

export const changeTwoState = (data) => {
  return {
    type: change_two_state,
    payload: data
  }
}

export const changeThirdState = (data) => {
  return {
    type: change_other_state,
    payload: data
  }
}



const reducer = (state, action) => {
  const { type, payload } = action
  switch(type) {
    case change_one_state:
      return { firstState: payload };
    case change_two_state:
      return {
        firstState: 3,
        secondState: 3
      };
    case change_other_state:
      return {
        thirdState: 6
      }
    default:
      throw new Error('type not exists');
  }
}

export default reducer;
