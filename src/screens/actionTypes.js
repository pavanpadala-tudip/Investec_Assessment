export const USERDATA = 'USERDATA';

export const saveUserdata = (dispatch, userDataList) => {
  dispatch({type: USERDATA, data: userDataList});
};
