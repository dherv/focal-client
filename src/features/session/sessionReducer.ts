import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';
import { ISession } from '../../types/interfaces';
import { DELETE_FOCUS_SUCCESS } from '../focus/focusActions';
import { ADD_SESSION_SUCCESS, FETCH_SESSION_SUCCESS } from './sessionAction';

const initialState = {
  sessions: [],
};

const reducer = (
  state: RootStateOrAny = initialState,
  action: { type: string; payload: any }
) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case FETCH_SESSION_SUCCESS:
        draft.sessions = action.payload;
        return;
      case ADD_SESSION_SUCCESS:
        draft.sessions.push(action.payload);
        return;
      case DELETE_FOCUS_SUCCESS:
        draft.sessions
          .filter(
            (session: ISession) => session.focus?.id === action.payload.id
          )
          .forEach((s: ISession) => {
            const index = draft.sessions.findIndex((i: any) => i.id === s.id);
            draft.sessions[index].focus = undefined;
          });
        return;
      default:
        return draft;
    }
  });
};

export default reducer;
export const getAllSessions = (state: any) => state.session.sessions;
