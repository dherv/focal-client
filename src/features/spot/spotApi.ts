import { client } from '../../apollo-client';
import { ADD_SPOT_MUTATION } from '../../graphql/mutations';
import { FETCH_SPOTS_QUERY } from '../../graphql/queries';
import Api from '../../helpers/helpersApi';
import { ISpot } from '../../types/interfaces';

export const fetchSpots = () =>
  client
    .query({ query: FETCH_SPOTS_QUERY })
    .then((response) => response.data.spots);
export const postSpot = (name: string) =>
  client
    .mutate({
      mutation: ADD_SPOT_MUTATION,
      variables: { name },
    })
    .then((response) => response.data);
export const putSpot = (spot: ISpot) => Api.put(`/spots/${spot.id}`, spot);
export const deleteSpot = (id: string) => Api.delete(`/spots/${id}`);
