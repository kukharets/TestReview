import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './rootReducer';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(reduxThunk), applyMiddleware(logger)),
);
export default store;
