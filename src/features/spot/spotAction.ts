import { RootStateOrAny } from 'react-redux';
import { ISpot } from '../../types/interfaces';
import * as api from './spotApi';

// export const fetchSpots = (dispatch: any, getState: RootStateOrAny) => {
//   dispatch({ type: "spots/fetchSpots", payload: response });
//   // return api.fetchSpots().then(
//   //   (response) => dispatch({ type: "spots/fetchSpots", payload: response }),
//   //   (error) => dispatch({ type: "spots/fetchError", payload: error.message })
//   // );
// };
export const fetchSpots = (payload: ISpot[]) => ({type: 'spots/fetchSpots'})
export const setSpots = (payload: ISpot[]) => ({type: 'spots/setSpots', payload})
export const addSpot =
  (text: string) => (dispatch: any, getState: RootStateOrAny) => {
    return api.postSpot(text).then(
      (response) => {
        dispatch({
          type: "spots/spotAdded",
          payload: response,
        });
      },
      (error) => dispatch({ type: "spots/addError", payload: error.message })
    );
  };
