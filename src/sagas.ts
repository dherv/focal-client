import { fork } from 'redux-saga/effects';
import { takeLatest } from '@redux-saga/core/effects';
import { ADD_SPOT_REQUEST } from './actions';
import { loginFlow, signupFlow } from './features/auth/authSaga';
import { handleAddSpot, handleGetSpots } from './features/spot/spotSaga';

export function* watcherSaga(): any {
  yield fork(loginFlow);
  yield fork(signupFlow);
  yield takeLatest("spots/fetchSpots", handleGetSpots);
  yield takeLatest(ADD_SPOT_REQUEST, handleAddSpot);
}
