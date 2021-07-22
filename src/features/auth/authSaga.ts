import {
  call,
  cancelled,
  fork,
  put,
  take,
  takeLatest,
} from 'redux-saga/effects';
import { ApolloQueryResult } from '@apollo/client';
import { client } from '../../apollo-client';
import { LOGIN_MUTATION, SIGNUP_MUTATION } from '../../graphql/mutations';

function* handleLogin(
  email: string,
  password: string,
  history: { push: (url: string) => void }
): Generator<any, any, ApolloQueryResult<{ login: { token: string } }>> {
  try {
    const response: ApolloQueryResult<{ login: { token: string } }> =
      yield call(client.mutate, {
        mutation: LOGIN_MUTATION,
        variables: { email, password },
      });

    const {
      login: { token },
    } = response?.data;

    yield put({ type: "LOGIN_SUCCESS", token });
    yield call(handleStoreToken, token);
    yield call(history.push, "/");
    return token;
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
    }
  }
}

function* handleSignup(
  name: string,
  email: string,
  password: string,
  history: { push: (url: string) => void }
): Generator<any, any, ApolloQueryResult<{ signup: { token: string } }>> {
  try {
    const response: ApolloQueryResult<{ signup: { token: string } }> =
      yield call(client.mutate, {
        mutation: SIGNUP_MUTATION,
        variables: { name, email, password },
      });
    const {
      signup: { token },
    } = response?.data;

    yield put({ type: "SIGNUP_SUCCESS", token });
    yield call(handleStoreToken, token);
    yield call(history.push, "/");
    return token;
  } catch (error) {
    yield put({ type: "SIGNUP_ERROR", error });
  } finally {
    if (yield cancelled()) {
      // ... put special cancellation handling code here
    }
  }
}

function* handleStoreToken(token: string): Generator<void, any, undefined> {
  yield localStorage.setItem("token", token);
}

function* handleClearToken(history: {
  push: (url: string) => void;
}): Generator<any, any, undefined> {
  yield localStorage.removeItem("token");
  yield call(history.push, "/auth");
}

export function* loginFlow(): any {
  while (true) {
    const {
      payload: { email, password, history },
    } = yield take("LOGIN_REQUEST");
    const token = yield fork(handleLogin, email, password, history);
    if (token) {
      const {
        payload: { history },
      } = yield take("LOGOUT");
      yield call(handleClearToken, history);
    }
  }
}

export function* signupFlow(): any {
  while (true) {
    const {
      payload: { name, email, password, history },
    } = yield take("SIGNUP_REQUEST");
    const token = yield fork(handleSignup, name, email, password, history);
    if (token) {
      const {
        payload: { history },
      } = yield take("LOGOUT");
      yield call(handleClearToken, history);
    }
  }
}

// export default function* watcher(): any {
//   while (true) {
//     yield takeLatest("SIGNUP_REQUEST", signupFlow);
//     yield takeLatest("LOGIN_REQUEST", loginFlow);
//   }
//   // yield takeLatest("LOGIN_REQUEST", loginFlow);
// }
