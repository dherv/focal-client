import { call, put } from '@redux-saga/core/effects';
import { setSpots } from './spotAction';
import * as api from './spotApi';

export const ADD_SPOT_REQUEST = 'spots/addSpotRequest'
export const ADD_SPOT_SUCCESS = 'spots/addSpot'

export function* handleGetSpots(): any {
  try {
    const response = yield call(api.fetchSpots);
    yield put(setSpots(response))
  } catch (error) {
    yield put({ type: 'spots/spotRequestFailed', payload: 'failed to fetch spots' })
  }
}

export function* handleAddSpot(action: any):any {
  try {
    const response = yield call(api.postSpot as any, action.payload)
    yield put({type: ADD_SPOT_SUCCESS, payload: response})
  } catch (e) {
    console.error(e)
    yield put({type: 'spots/spotPostFailed', payload: 'failed to add a spot'  })
  }
}