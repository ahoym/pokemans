import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

export default function configureStore(reducers) {
  const middlewares = [thunk];

  if (process.env.NODE_ENV === `development`) {
    middlewares.push(createLogger());
  }

  const store = createStore(reducers, applyMiddleware(...middlewares));

  return store;
}
