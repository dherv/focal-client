import { client } from '../../apollo-client';
import {
  ADD_FOCUS_MUTATION,
  DELETE_FOCUS_MUTATION,
  UPDATE_FOCUS_MUTATION,
} from '../../graphql/mutations';
import { FETCH_FOCUSES_QUERY } from '../../graphql/queries';
import { IFocus } from '../../types/interfaces';

export const fetchFocuses = () =>
  client
    .query({ query: FETCH_FOCUSES_QUERY })
    .then((response) => response.data.focuses);

export const postFocus = (name: string) =>
  client
    .mutate({ mutation: ADD_FOCUS_MUTATION, variables: { name } })
    .then((response) => response.data.focus);

export const putFocus = (focus: IFocus) =>
  client
    .mutate({
      mutation: UPDATE_FOCUS_MUTATION,
      variables: { ...focus },
    })
    .then((response) => response.data.updateFocus);

export const deleteFocus = (id: string) =>
  client
    .mutate({ mutation: DELETE_FOCUS_MUTATION, variables: { id } })
    .then((response) => response.data.deleteFocus);
