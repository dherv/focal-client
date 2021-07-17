import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
import { watcherSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, sagaMiddleware));

const store = createStore(rootReducer, composedEnhancer);

sagaMiddleware.run(watcherSaga)


export default store;
