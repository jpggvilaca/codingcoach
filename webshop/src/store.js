import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducer';

export default function configureStore(preloadedState = {}) {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = [middlewareEnhancer];

  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(
    reducer,
    preloadedState,
    composedEnhancers
  );

  return store;
}
