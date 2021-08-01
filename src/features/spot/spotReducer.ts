import produce, { Draft } from 'immer';
import { RootStateOrAny } from 'react-redux';
import {
  ADD_SPOT_SUCCESS,
  FETCH_SPOTS_FAILURE,
  FETCH_SPOTS_SUCCESS,
} from '../../actions';

const initialState = {
  spots: [],
  error: null,
  status: "idle",
};

const reducer = (
  state: RootStateOrAny = initialState,
  action: { type: string; payload: any }
) => {
  return produce(state, (draft: Draft<any>) => {
    switch (action.type) {
      case FETCH_SPOTS_SUCCESS:
        draft.spots = action.payload;
        draft.error = null;
        return;
      case ADD_SPOT_SUCCESS:
        draft.spots.push(action.payload);
        return;
      case FETCH_SPOTS_FAILURE:
        draft.spots = [];
        draft.error = action.payload;
        return;
      default:
        return draft;
    }
  });
};

export default reducer;

export const getAll = (state: RootStateOrAny) => {
  console.log("GETALL", state);
  return state.spot.spots;
};
