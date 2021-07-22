import { client } from '../../apollo-client';
import { ADD_SESSION_QUERY } from '../../graphql/mutations';
import { FETCH_SESSIONS_QUERY } from '../../graphql/queries';
import { ISession } from '../../types/interfaces';

export const fetchSessions = () =>
  client
    .query({ query: FETCH_SESSIONS_QUERY })
    .then((response) => response.data.sessions);
export const postSession = ({ memo, rating, focusId, spotId }: ISession) =>
  client
    .mutate({
      mutation: ADD_SESSION_QUERY,
      variables: { memo, rating, focusId, spotId },
    })
    .then((response) => response.data.session);
