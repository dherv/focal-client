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
  switch (action.type) {
    case FETCH_SPOTS_SUCCESS:
      return {
        ...state,
        error: null,
        status: "idle",
        spots: [...action.payload],
      };
    case ADD_SPOT_SUCCESS:
      return {
        ...state,
        spots: [...state.spots, action.payload],
      };
    case FETCH_SPOTS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;

export const getAll = (state: RootStateOrAny) => {
  console.log("GETALL", state);
  return state.spot.spots;
};
