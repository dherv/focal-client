import { gql } from '@apollo/client';

export const FETCH_SPOTS_QUERY = gql`
  query FetchSpots {
    spots {
      id
      name
      latitude
      longitude
    }
  }
`;

export const FETCH_FOCUSES_QUERY = gql`
  query FetchFocuses {
    focuses {
      id
      name
      completed
    }
  }
`;

export const FETCH_SESSIONS_QUERY = gql`
  query FetchSessions {
    sessions {
      id
      rating
      memo
      focus {
        id
        name
      }
      spot {
        id
        name
      }
    }
  }
`;
