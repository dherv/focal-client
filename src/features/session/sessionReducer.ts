import { RootStateOrAny } from 'react-redux';
import { combineReducers } from 'redux';
import { ISessionEntity } from '../../types/interfaces';

const result = (
  state: RootStateOrAny = [],
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "sessions/fetchSessions":
      return action.payload.result;
    case "sessions/addSession":
      return [...state, action.payload.result];
    default:
      return state;
  }
};

const entities = (
  state: RootStateOrAny = {},
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "sessions/fetchSessions":
    case "sessions/addSession":
      return {
        ...state,
        ...action.payload.entities.sessions,
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  entities,
  result,
});

export default reducer;

export const getAllSessions = (state: RootStateOrAny) => {
  const ids = state.session.result;
  const focuses = state.focus.byId;
  const entities = ids.map((id: number) => ({
    ...state.session.entities[id],
    focus: focuses[state.session.entities[id].focusId],
  })).filter((s: ISessionEntity) => s.focus)

  console.log(entities)
  return entities;
};
