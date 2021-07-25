import { client } from '../../apollo-client';
import { FETCH_USER_QUERY } from '../../graphql/queries';

export const fetchUser = () =>
  client
    .query({ query: FETCH_USER_QUERY })
    .then((response) => response.data.user);
