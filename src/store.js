import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import Reducer from './rootReducer';

export const history = createHistory();

const initialState = {
  root: {},
};

const enhancers = [];

const middleware = [routerMiddleware(history)];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composed = composeEnhancers(applyMiddleware(...middleware), ...enhancers);

const store = createStore(Reducer, initialState, composed);

export default store;
