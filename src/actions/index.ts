import { normalize } from 'normalizr';
import { RootStateOrAny } from 'react-redux';
import * as api from '../api';
import { IFocus } from '../types/interfaces';
import * as schema from './schema';

export const statusFilterChanged = (filter: string) => ({
  type: "filter/statusFilterChanged",
  payload: filter,
});

// Async actions
export const fetchFocuses = (dispatch: any, getState: RootStateOrAny) => {
  dispatch({ type: "focuses/fetchRequest" });

  return api.fetchFocuses().then(
    (response) => {
      dispatch({
        type: "focuses/focusesLoaded",
        payload: normalize(response, schema.arrayOfFocuses),
      });
    },
    (error) => dispatch({ type: "focuses/focusesLoaded", payload: error })
  );
};

export const addFocus =
  (text: string) => (dispatch: any, getState: RootStateOrAny) => {
    return api.postFocus(text).then(
      (response) => {
        dispatch({
          type: "focuses/focusAdded",
          payload: normalize(response, schema.focus),
        });
      },
      (error) =>
        dispatch({
          type: "focuses/focusAdded",
          payload: error,
        })
    );
  };

export const deleteFocus =
  (id: number) => (dispatch: any, getState: RootStateOrAny) => {
    return api.deleteFocus(id).then(
      (response) =>
        dispatch({
          type: "focuses/focusDeleted",
          payload: id,
        }),
      (error) =>
        dispatch({
          type: "focuses/focusDeleted",
          payload: id,
        })
    );
  };

export const toggleFocus =
  (f: IFocus) => (dispatch: any, getState: RootStateOrAny) => {
    return api.putFocus(f).then(
      (response) =>
        dispatch({
          type: "focuses/focusToggled",
          payload: normalize(response, schema.focus),
        }),
      (error) =>
        dispatch({
          type: "focuses/focusToggled",
          payload: normalize(error, schema.focus),
        })
    );
  };
