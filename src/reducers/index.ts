import { RootStateOrAny } from 'react-redux';
import { combineReducers } from 'redux';
import { IFocus } from '../types/interfaces';

const result = (state = [], action: { type: string; payload: any }) => {
  switch (action.type) {
    case "focuses/focusesLoaded":
      return [...action.payload.result];
    case "focuses/focusAdded":
      return [...state, action.payload.result];
    case "focuses/focusDeleted":
      return state.filter((r: number) => r !== action.payload);
    default:
      return state;
  }
};

const byId = (state = {} as any, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "focuses/focusesLoaded":
    case "focuses/focusAdded":
    case "focuses/focusToggled":
      return {
        ...state,
        ...action.payload.entities.focuses,
      };
    case "focuses/focusDeleted":
      const newState = { ...state } as any;
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

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
    case "focuses/focusesLoaded":
        return false;
    default:
      return state;
  }
};
// Use the initialState as a default value
const focus = combineReducers({
  byId,
  result,
  filter,
  isFetching,
});
const appReducer = combineReducers({
  focus,
});
export default appReducer;

export const getAllFocuses = (state: RootStateOrAny, filter: string) => {
  const ids = state.focus.result;
  const entities = ids.map((id: number) => state.focus.byId[id]);

  if (filter === "all") return entities;
  if (filter === "completed")
    return entities.filter((f: IFocus) => f.completed);
  if (filter === "active") return entities.filter((f: IFocus) => !f.completed);
  return entities;
};

export const getCurrentFilter = (state: RootStateOrAny) => state.focus.filter;
export const getIsFetching = (state: RootStateOrAny) => state.focus.isFetching;
