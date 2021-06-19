import { RootStateOrAny } from 'react-redux';
import { IFocus } from './types/interfaces';

const initialState = {
  focuses: [] as IFocus[],
  filter: "all",
};
function nextTodoId(focuses: IFocus[]) {
  const maxId = focuses.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

// Use the initialState as a default value
export default function appReducer(
  state = initialState,
  action: { type: string; payload: any }
) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "focuses/focusAdded":
      return {
        // that has all the existing state data
        ...state,
        // but has a new array for the `todos` field
        focuses: [
          // with all of the old todos
          ...state.focuses,
          // and the new todo object
          {
            // Use an auto-incrementing numeric ID for this example
            id: nextTodoId(state.focuses),
            text: action.payload,
            completed: false,
          },
        ],
      }; // Do something here based on the different types of actions
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
