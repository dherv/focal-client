import { call, put } from '@redux-saga/core/effects';
import {
  ADD_SPOT_FAILURE,
  ADD_SPOT_SUCCESS,
  FETCH_SPOTS_FAILURE,
  FETCH_SPOTS_SUCCESS,
} from '../../actions';
import * as api from './spotApi';

export function* handleGetSpots(): any {
  try {
    const response = yield call(api.fetchSpots);
    yield put({ type: FETCH_SPOTS_SUCCESS, payload: response });
  } catch (error) {
    console.error(error);
    yield put({
      type: FETCH_SPOTS_FAILURE,
      payload: "failed to fetch spots",
    });
  }
}

export function* handleAddSpot(action: any): any {
  try {
    const response = yield call(api.postSpot, action.payload);
    yield put({ type: ADD_SPOT_SUCCESS, payload: response });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_SPOT_FAILURE,
      payload: "failed to add a spot",
    });
  }
}
