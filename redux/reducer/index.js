import { combineReducers } from 'redux';

import loading from './loading';
import listData from './listData';

const rootReducer = combineReducers({
  loading,
  listData,
});

export default rootReducer;
