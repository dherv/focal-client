import { normalize } from 'normalizr';
import { RootStateOrAny } from 'react-redux';
import { ISession } from '../../types/interfaces';
import * as api from './sessionApi';
import * as schema from './sessionSchema';

export const fetchSessions = (dispatch: any, getState: RootStateOrAny) => {
  api.fetchSessions().then((response) => {
    console.log(normalize(response, schema.arrayOfSessions))
    return dispatch({
      type: "sessions/fetchSessions",
      payload: normalize(response, schema.arrayOfSessions),
    });
  });
};

export const addSession =  (session: ISession) => (dispatch: any, getState: RootStateOrAny) => {
  api.postSession(session).then((response) => {
    return dispatch({
      type: "sessions/addSession",
      payload: normalize(response, schema.session),
    });
  });
};

export const updateSession = (session: ISession) => {
  api.putSession(session).then((response) => {
    return {
      type: "sessions/updateSession",
      payload: normalize(response, schema.session),
    };
  });
};

export const deleteSession = (id: string) => {
  api.deleteSession(id).then((response) => {
    return {
      type: "sessions/deleteSession",
      payload: normalize(response, schema.session),
    };
  });
};
