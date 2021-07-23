import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';
import { createSelector } from 'reselect';
import {
  IFocus,
  ISession,
  ISessionEntity,
  ISpot,
} from '../../types/interfaces';

const initialState = {
  sessions: [],
};

const reducer = (
  state: RootStateOrAny = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "sessions/fetchSessionsSuccess":
      return { ...state, sessions: action.payload };
    case "sessions/addSessionSuccess":
      return produce(state, (draft: Draft<any>) => {
        draft.sessions.push(action.payload);
      });
    default:
      return state;
  }
};

export default reducer;

export const getAllSessions = createSelector(
  (state: RootStateOrAny) => state.session.sessions,
  (state: RootStateOrAny) =>
    Object.entries(state.focus.byId).map(([key, value]) => value) as IFocus[],
  (state: RootStateOrAny) => state.spot.spots,
  (sessions, focuses, spots) => {
    console.log(sessions);
    return sessions.map((session: ISession): ISessionEntity => {
      const focus = focuses.filter(
        (focus: IFocus) => focus.id === session.focusId
      )[0];

      const spot = spots.filter((s: ISpot) => {
        console.log(session.spotId, s.id);
        return s.id === session.spotId;
      })[0];

      return { ...session, focus, spot };
    });
  }
);
