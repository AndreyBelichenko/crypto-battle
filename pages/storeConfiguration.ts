import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const storeConfiguration = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default storeConfiguration;