import { call, put } from 'redux-saga/effects';
import { FETCH_FOCUSES_SUCCESS } from '../focus/focusActions';
import { FETCH_SESSION_SUCCESS } from '../session/sessionAction';
import { FETCH_SPOTS_SUCCESS } from '../spot/spotAction';
import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from './userAction';
import * as api from './userApi';

export function* handleGetUser(): any {
  try {
    const response = yield call(api.fetchUser);
    yield put({ type: FETCH_USER_SUCCESS, payload: response });
    yield put({ type: FETCH_FOCUSES_SUCCESS, payload: response.focuses });
    yield put({ type: FETCH_SESSION_SUCCESS, payload: response.sessions });
    yield put({ type: FETCH_SPOTS_SUCCESS, payload: response.spots });
  } catch (error) {
    yield put({
      type: FETCH_USER_FAILURE,
      payload: "failed to fetch user data",
    });
  }
}
