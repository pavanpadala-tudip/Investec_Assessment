import {USERNAME} from './utility/actionTypes';
let dataState = {
  userName: 'Pavan',
};

const MainReducer = (state = dataState, action) => {
  switch (action.type) {
    case USERNAME:
      let userName = action.data;
      dataState.userName = userName;
      return {...dataState, userName: userName};

    default:
      return dataState;
  }
};
export default MainReducer;
