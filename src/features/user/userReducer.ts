import { stat } from 'fs';
import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';

const initalState = {
  user: null,
  error: null,
  state: "idle",
};

const reducer = (state: RootStateOrAny = initalState, action: any) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case "FETCH_USER_SUCCESS":
        draft.error = null;
        draft.user = action.payload;
        return;
      case "FETCH_USER_FAILURE":
        draft.error = action.payload;
        return;
      default:
        return draft;
    }
  });
};

export default reducer;

export const getUser = (state: RootStateOrAny) => state.user.user;
