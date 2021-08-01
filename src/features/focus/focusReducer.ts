import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';
import { combineReducers } from 'redux';
import {
  ADD_FOCUS_FAILURE,
  ADD_FOCUS_SUCCESS,
  DELETE_FOCUS_SUCCESS,
  FETCH_FOCUSES_FAILURE,
  FETCH_FOCUSES_SUCCESS,
  UPDATE_FOCUS_SUCCESS,
} from '../../actions';
import { IFocus } from '../../types/interfaces';

const filter = (state = "all", action: { type: string; payload: any }) => {
  switch (action.type) {
    case "filter/statusFilterChanged":
      return action.payload;
    default:
      return state;
  }
};

const isFetching = (state = false, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "focuses/fetchRequest":
      return true;
    case "focuses/fetchError":
    case "focuses/focusesLoaded":
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action: { type: string; payload: any }) => {
  switch (action.type) {
    case FETCH_FOCUSES_FAILURE:
    case ADD_FOCUS_FAILURE:
      return action.payload;
    case FETCH_FOCUSES_SUCCESS:
    case "focuses/focusesLoaded":
      return null;
    default:
      return state;
  }
};

const result = (state = [], action: any) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case FETCH_FOCUSES_SUCCESS:
        return action.payload;
      case ADD_FOCUS_SUCCESS:
        draft.push(action.payload);
        return;
      case UPDATE_FOCUS_SUCCESS:
        const updateIndex = draft.findIndex(
          (focus: IFocus) => focus.id === action.payload.id
        );
        if (updateIndex !== -1) draft[updateIndex] = action.payload;
        return;
      case DELETE_FOCUS_SUCCESS:
        const deleteIndex = draft.findIndex(
          (focus: IFocus) => focus.id === action.payload.id
        );
        if (deleteIndex !== -1) draft.splice(deleteIndex, 1);
        return;
      default:
        return draft;
    }
  });
};

const focusReducer = combineReducers({
  result,
  filter,
  isFetching,
  errorMessage,
});

export default focusReducer;

export const getAllFocuses = (state: RootStateOrAny, filter: string) => {
  // const ids = state.focus.result;
  const entities = state.focus.result;
  if (filter === "all") return entities;
  if (filter === "completed")
    return entities.filter((f: IFocus) => f.completed);
  if (filter === "active") return entities.filter((f: IFocus) => !f.completed);
  return entities;
};

export const getCurrentFilter = (state: RootStateOrAny) => {
  return state.focus.filter;
};
export const getIsFetching = (state: RootStateOrAny) => state.focus.isFetching;
export const getErrorMessage = (state: RootStateOrAny) =>
  state.focus.errorMessage;
