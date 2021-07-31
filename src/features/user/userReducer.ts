import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';
import { createSelector } from 'reselect';
import { ADD_FOCUS_SUCCESS } from '../focus/focusActions';
import { ADD_SESSION_SUCCESS } from '../session/sessionAction';
import { ADD_SPOT_SUCCESS } from '../spot/spotAction';
import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from './userAction';

const initalState = {
  user: null,
  error: null,
  state: "idle",
};

const reducer = (state: RootStateOrAny = initalState, action: any) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case FETCH_USER_SUCCESS:
        draft.error = null;
        draft.user = action.payload;
        console.log(action.payload);
        return;
      case FETCH_USER_FAILURE:
        draft.error = action.payload;
        draft.user = null;
        return;
      case ADD_FOCUS_SUCCESS:
        draft.user.focuses.push(action.payload);
        return;
      case ADD_SPOT_SUCCESS:
        draft.user.spots.push(action.payload);
        return;
      case ADD_SESSION_SUCCESS:
        draft.user.sessions.push(action.payload);
        return;
      default:
        return draft;
    }
  });
};

export default reducer;

export const getUser = createSelector(
  (state: RootStateOrAny) => {
    console.log("getUser selector called");
    return state.user.user;
  },
  (user) => user
);
