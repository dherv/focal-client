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

export const FETCH_USER_QUERY = gql`
  query FetchUser {
    user {
      id
      name
      email
      avatar
      focuses {
        name
        id
        completed
      }
      spots {
        name
        id
        latitude
        longitude
      }
      sessions {
        memo
        rating
        spot {
          id
          name
        }
        focus {
          id
          name
        }
      }
    }
  }
`;
