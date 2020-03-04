import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import myReducer from './app/profile/reducers/root';

export default combineReducers({
  routing: routerReducer,
  root: myReducer,
});
