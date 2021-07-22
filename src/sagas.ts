import { fork } from 'redux-saga/effects';
import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_SESSION_REQUEST,
  ADD_SPOT_REQUEST,
  FETCH_SESSIONS_REQUEST,
  FETCH_SPOTS_REQUEST,
} from './actions';
import { loginFlow, signupFlow } from './features/auth/authSaga';
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
}
