import { RootStateOrAny } from 'react-redux';
import * as api from '../api';

export const addFocus = (text: string) => ({
  type: "focuses/focusAdded",
  payload: text,
});

export const toggleFocus = (focusId: number) => ({
  type: "focuses/focusToggled",
  payload: focusId,
});

export const deleteFocus = (focusId: number) => ({
  type: "focuses/focusDeleted",
  payload: focusId,
});

export const statusFilterChanged = (filter: string) => ({
  type: "filter/statusFilterChanged",
  payload: filter,
});

// Async actions
export const fetchFocuses = (dispatch: any, getState: RootStateOrAny) => {
  console.log("here 1");
  return api.fetchFocuses().then(
    (response) =>
      dispatch({ type: "focuses/focusesLoaded", payload: response }),
    (error) => dispatch({ type: "focuses/focusesLoaded", payload: error })
  );
};
