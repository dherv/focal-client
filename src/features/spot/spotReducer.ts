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
        spots: [...state.spots, ...action.payload],
      };
    case ADD_SPOT_SUCCESS:
      return {
        ...state,
        spots: [...state.spots, action.payload],
      };
    case FETCH_SPOTS_FAILURE:
      console.log("spot request failed");
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;

export const getAll = (state: RootStateOrAny) => state.spot.spots;
