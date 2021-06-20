import Api from '../../helpers/helpersApi';
import { ISession } from '../../types/interfaces';

export const fetchSessions = () => Api.get("/focuses");
export const postSession = ({memo, rating, focusId}: ISession) => Api.post("/focuses", { memo, rating, focusId });
export const putSession = (session: ISession) =>
  Api.put(`/focuses/${session.id}`, session);
export const deleteSession = (id: string) => Api.delete(`/focuses/${id}`);
