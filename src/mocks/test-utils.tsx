import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { render as rtlRender } from '@testing-library/react';
import reducer from '../reducers';
import { watcherSaga } from '../sagas';

const makeStore = (initialState: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watcherSaga);
  return store;
};

const render = (
  ui: any,
  {
    initialState,
    store = makeStore(initialState),
    ...renderOptions
  } = {} as any
) => {
  const Wrapper: FC = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
