import { fork } from 'redux-saga/effects';
import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_FOCUS_REQUEST,
  ADD_SESSION_REQUEST,
  ADD_SPOT_REQUEST,
  DELETE_FOCUS_REQUEST,
  FETCH_FOCUSES_REQUEST,
  FETCH_SESSIONS_REQUEST,
  FETCH_SPOTS_REQUEST,
  UPDATE_FOCUS_REQUEST,
} from './actions';
import { loginFlow, signupFlow } from './features/auth/authSaga';
import {
  handleAddFocus,
  handleDeleteFocus,
  handleFetchFocuses,
  handleUpdateFocus,
} from './features/focus/focusSaga';
import {
  handleAddSession,
  handleFetchSessions,
} from './features/session/sessionSaga';
import { handleAddSpot, handleGetSpots } from './features/spot/spotSaga';

export function* watcherSaga(): any {
  yield fork(loginFlow);
  yield fork(signupFlow);
  yield takeLatest(FETCH_SPOTS_REQUEST, handleGetSpots);
  yield takeLatest(ADD_SPOT_REQUEST, handleAddSpot);
  yield takeLatest(FETCH_SESSIONS_REQUEST, handleFetchSessions);
  yield takeLatest(ADD_SESSION_REQUEST, handleAddSession);
  yield takeLatest(FETCH_FOCUSES_REQUEST, handleFetchFocuses);
  yield takeLatest(ADD_FOCUS_REQUEST, handleAddFocus);
  yield takeLatest(UPDATE_FOCUS_REQUEST, handleUpdateFocus);
  yield takeLatest(DELETE_FOCUS_REQUEST, handleDeleteFocus);
}
