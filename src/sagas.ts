import { takeLatest } from '@redux-saga/core/effects';
import {
  ADD_SPOT_REQUEST,
  handleAddSpot,
  handleGetSpots,
} from './features/spot/spotSaga';

export function* watcherSaga() {
  yield takeLatest('spots/fetchSpots', handleGetSpots);
  yield takeLatest(ADD_SPOT_REQUEST, handleAddSpot)
}
