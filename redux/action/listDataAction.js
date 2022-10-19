export const setInitialData = (payload) => (dispatch) => {
  return dispatch({ type: 'SET_INITIAL_DATA', payload });
};

export const changePage = (payload) => (dispatch) => {
  return dispatch({ type: 'CHANGE_PAGE', payload });
};

export const scrollPage = () => (dispatch) => {
  return dispatch({ type: 'SCROLL_PAGE' });
};

export const findUser = (payload) => (dispatch) => {
  return dispatch({ type: 'FIND_USER', payload });
};
