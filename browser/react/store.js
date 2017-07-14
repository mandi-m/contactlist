import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import createApiRequest from 'redux-api-request';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

const apiRequestMiddleware = createApiRequest()

export default createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    apiRequestMiddleware,
    createLogger({ collapsed: true })
  )
);
