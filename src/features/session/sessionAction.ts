import { normalize } from 'normalizr';
import { ISession } from '../../types/interfaces';
import * as api from './sessionApi';
import * as schema from './sessionSchema';

export const fetchSessions = () => {
  api.fetchSessions().then((response) => {
    return {
      type: "session/fetchSessions",
      payload: normalize(response, schema.arrayOfSessions),
    };
  });
};

export const addSession = (session: ISession) => {
  api.postSession(session).then((response) => {
    return {
      type: "session/addSession",
      payload: normalize(response, schema.session),
    };
  });
};

export const updateSession = (session: ISession) => {
  api.putSession(session).then((response) => {
    return {
      type: "session/updateSession",
      payload: normalize(response, schema.session),
    };
  });
};

export const deleteSession = (id: string) => {
  api.deleteSession(id).then((response) => {
    return {
      type: "session/deleteSession",
      payload: normalize(response, schema.session),
    };
  });
};
