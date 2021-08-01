import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { client } from './apollo-client';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

Sentry.init({
  dsn: "https://03342846e14e46f6b8931dc194e780c5@o424697.ingest.sentry.io/5887800",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function prepare() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = require("./mocks/browser");
    return worker.start();
  }
  return Promise.resolve();
}

prepare().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
  )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
