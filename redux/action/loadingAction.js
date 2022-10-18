export const setLoading = () => (dispatch) => {
  return dispatch({ type: 'SET_LOADING' });
};

export const setUnload = () => (dispatch) => {
  return dispatch({ type: 'SET_UNLOAD' });
};
