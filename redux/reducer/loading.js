const initialState = {
  loading: 0,
};
const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: state.loading + 1,
      };
    case 'SET_UNLOAD':
      return {
        ...state,
        loading: state.loading - 1,
      };
    default:
      return state;
  }
};

export default loadingReducer;
