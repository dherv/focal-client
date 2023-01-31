import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer: any = compose(
  applyMiddleware(thunkMiddleware, sagaMiddleware)
);

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(watcherSaga);

export default store;
