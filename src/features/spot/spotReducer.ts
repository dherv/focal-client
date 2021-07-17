import { RootStateOrAny } from 'react-redux';

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
    case "spots/setSpots":
      return {
        ...state,
        spots: [...state.spots, ...action.payload],
      };
    case "spots/addSpot":
      return {
        ...state,
        spots: [...state.spots, action.payload],
      };
    case "spots/spotRequestFailed":
      console.log("spot request failed");
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default reducer;

export const getAll = (state: RootStateOrAny) => state.spot.spots;
