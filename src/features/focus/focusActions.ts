export const statusFilterChanged = (filter: string) => ({
  type: "filter/statusFilterChanged",
  payload: filter,
});

export const FETCH_FOCUSES_REQUEST = "focuses/fetchFocusesRequest";
export const FETCH_FOCUSES_SUCCESS = "focuses/fetchFocusesSuccess";
export const FETCH_FOCUSES_FAILURE = "focuses/fetchFocusesFailure";

export const ADD_FOCUS_REQUEST = "focuses/addFocusRequest";
export const ADD_FOCUS_SUCCESS = "focuses/addFocusSuccess";
export const ADD_FOCUS_FAILURE = "focuses/addFocusFailure";

export const UPDATE_FOCUS_REQUEST = "focuses/updateFocusRequest";
export const UPDATE_FOCUS_SUCCESS = "focuses/updateFocusSuccess";
export const UPDATE_FOCUS_FAILURE = "focuses/updateFocusFailure";

export const DELETE_FOCUS_REQUEST = "focuses/deleteFocusRequest";
export const DELETE_FOCUS_SUCCESS = "focuses/deleteFocusSuccess";
export const DELETE_FOCUS_FAILURE = "focuses/deleteFocusFailure";
