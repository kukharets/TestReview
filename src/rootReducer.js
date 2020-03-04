import { combineReducers } from 'redux';

import profileReducer from './app/state/profile/reducers/root';
import wishListReducer from './app/state/wishList/reducers/root';

export default combineReducers({
  profile: profileReducer,
  wishList: wishListReducer,
});
