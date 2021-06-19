import { RootStateOrAny } from 'react-redux';
import { IFocus } from './types/interfaces';

const initialState = {
  focuses: [] as IFocus[],
  isFetching: false,
  filter: "all",
};

// Use the initialState as a default value
export default function appReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "focuses/focusesLoaded":
      return {
        ...state,
        focuses: action.payload,
        isFetching: false,
      };
    case "focuses/focusAdded":
      return {
        ...state,
        focuses: [...state.focuses, action.payload],
      };
    case "focuses/focusToggled":
      return {
        ...state,
        focuses: state.focuses.map((f: IFocus) => {
          if (f.id === action.payload) {
            return { ...f, completed: !f.completed };
          }
          return f;
        }),
      };
    case "focuses/focusDeleted":
      return {
        ...state,
        focuses: state.focuses.filter((f: IFocus) => {
          return f.id !== action.payload;
        }),
      };
    case "focuses/fetchRequest":
      return {
        ...state,
        isFetching: true,
      };
    case "filter/statusFilterChanged":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state;
  }
}

export const getAllFocuses = (state: RootStateOrAny, filter: string) => {
  if (filter === "all") return state.focuses;
  if (filter === "completed")
    return state.focuses.filter((f: IFocus) => f.completed);
  if (filter === "active")
    return state.focuses.filter((f: IFocus) => !f.completed);
  return state.focuses;
};

export const getCurrentFilter = (state: RootStateOrAny) => state.filter;
export const getIsFetching = (state: RootStateOrAny) => state.isFetching;