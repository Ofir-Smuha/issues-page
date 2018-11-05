// @flow
import { createStore, compose, applyMiddleware} from 'redux';

import type { Store } from 'redux';

import rootReducer from 'reducers/rootReducer';
import apiMiddleware from 'middlewares/apiMiddleware'

const initialState = {};

const middleware = [apiMiddleware];

const store: Store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store