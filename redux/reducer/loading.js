const initialState = {
  progress: 0,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        progress: state.progress + 1,
      };
    case 'SET_UNLOAD':
      return {
        ...state,
        progress: state.progress - 1,
      };
    default:
      return state;
  }
};

export default loadingReducer;
