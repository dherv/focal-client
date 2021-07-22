import { call, put } from 'redux-saga/effects';
import {
  ADD_FOCUS_FAILURE,
  ADD_FOCUS_SUCCESS,
  DELETE_FOCUS_FAILURE,
  DELETE_FOCUS_SUCCESS,
  FETCH_FOCUSES_FAILURE,
  FETCH_FOCUSES_SUCCESS,
  UPDATE_FOCUS_FAILURE,
  UPDATE_FOCUS_SUCCESS,
} from '../../actions';
import * as api from './focusApi';

export function* handleFetchFocuses(): any {
  try {
    const response = yield call(api.fetchFocuses);
    yield put({ type: FETCH_FOCUSES_SUCCESS, payload: response });
  } catch (error) {
    yield put({
      type: FETCH_FOCUSES_FAILURE,
      payload: "failed to fetch focuses",
    });
  }
}

export function* handleAddFocus(action: any): any {
  try {
    const response = yield call(api.postFocus, action.payload);
    yield put({ type: ADD_FOCUS_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: ADD_FOCUS_FAILURE, payload: "failed to add a focus" });
  }
}

export function* handleUpdateFocus(action: any): any {
  try {
    const response = yield call(api.putFocus, action.payload);
    yield put({ type: UPDATE_FOCUS_SUCCESS, payload: response });
  } catch (error) {
    yield put({
      type: UPDATE_FOCUS_FAILURE,
      payload: "failed to update a focus",
    });
  }
}

export function* handleDeleteFocus(action: any): any {
  try {
    const response = yield call(api.deleteFocus, action.payload);
    yield put({ type: DELETE_FOCUS_SUCCESS, payload: response });
  } catch (error) {
    console.error(error);
    yield put({
      type: DELETE_FOCUS_FAILURE,
      payload: "failed to delete a focus",
    });
  }
}
