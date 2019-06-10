import { isNil, reject } from 'ramda';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

window.__REDUX_DEVTOOLS_EXTENSION__ =
  window.__REDUX_DEVTOOLS_EXTENSION__ ||
  function(f) {
    return f;
  };

const middlewares = reject(isNil)([
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__()
]);

export const createStoreWithMiddleWare = compose(...middlewares)(createStore);
export default createStoreWithMiddleWare(rootReducer);
