import Api from '../../helpers/helpersApi';
import { ISession } from '../../types/interfaces';

export const fetchSessions = () => Api.get("/sessions");
export const postSession = ({memo, rating, focusId}: ISession) => Api.post("/sessions", { memo, rating, focusId });
export const putSession = (session: ISession) =>
  Api.put(`/sessions/${session.id}`, session);
export const deleteSession = (id: string) => Api.delete(`/sessions/${id}`);
