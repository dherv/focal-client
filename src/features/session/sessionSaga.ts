import { call, put } from 'redux-saga/effects';
import {
  ADD_SESSION_FAILURE,
  ADD_SESSION_SUCCESS,
  sessionSuccess,
} from '../../actions';
import * as api from './sessionApi';

export function* handleFetchSessions(): any {
  try {
    const payload = yield call(api.fetchSessions);
    yield put(sessionSuccess(payload));
  } catch (e) {
    yield put({
      type: "sessions/fetchSessionsFailure",
      payload: "failed to fetch sessions",
    });
  }
}

export function* handleAddSession(action: any): any {
  try {
    const response = yield call(api.postSession, action.payload);
    yield put({
      type: ADD_SESSION_SUCCESS,
      payload: response,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_SESSION_FAILURE,
      payload: "failed to add a spot",
    });
  }
}
