import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import * as storage from 'redux-storage';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createEngine from 'redux-storage-engine-localstorage';

import createCombinedReducers from './reducers';

const engine = createEngine('zhibang');
export const history = createBrowserHistory();
const reducer = storage.reducer(createCombinedReducers(history));
const storageMiddleware = storage.createMiddleware(engine);

const middleware = applyMiddleware(
  storageMiddleware,
  promise,
  thunk,
  routerMiddleware(history)
);
const enhancer = composeWithDevTools(middleware);

const store = createStore(reducer, {}, enhancer);
const load = storage.createLoader(engine);
load(store);
export default store;
