import { applyMiddleware, createStore } from 'redux';
import * as storage from 'redux-storage';
import thunk from 'redux-thunk';
import createCombinedReducers from './reducers';
import promise from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createEngine from 'redux-storage-engine-localstorage';

const engine = createEngine('inversio');
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
